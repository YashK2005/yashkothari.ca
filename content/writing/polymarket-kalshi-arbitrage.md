---
title: Finding free money between Kalshi and Polymarket
author: Yash Kothari
date: 2026-06-22
description: The challenges I faced when building arb-finder, a system that finds real, risk-free arbitrage between Kalshi and Polymarket.
---

I put real money on an over-20% arbitrage between Kalshi and Polymarket last month. It resolved a few weeks later and the payout covered my Claude and Codex subscriptions for the month with room left over. 

## What is an arbitrage?

Both Kalshi and Polymarket trade binary outcome contracts. Each share pays out exactly \$1 if the event resolves YES (or NO, if you bought the NO side) and \$0 otherwise.

If you find two markets that resolve to the same real-world outcome, there are two possible "directions" you can construct a hedge in:

```hedge-directions
```

In every possible outcome, exactly one of the two contracts in the pair pays \$1 and the other pays \$0. So the per-pair payout is always \$1. If the combined cost of `K_yes_ask + P_no_ask` or `P_yes_ask + K_no_ask` is less than \$1, you have an arbitrage.

As a concrete example: say for "Will the Knicks win the 2026 NBA finals?", Kalshi YES costs 47¢ and Polymarket NO costs 40¢. You buy both for a total of 87¢, and get paid \$1 in every possible outcome (Kalshi YES pays \$1 if the Knicks win the championship, Polymarket NO pays \$1 if they don't). That's a risk-free 13¢ arb per dollar staked regardless of whether the Knicks win or lose.

## The shape of the problem

On paper, prediction-market arbitrage seems pretty trivial. Kalshi and Polymarket both list a market on "will Trump meet Kim Jong Un in 2026", you check the prices, if YES costs 40¢ on one and NO costs 50¢ on the other you buy both and lock in a profit no matter what happens.

However, Kalshi has about 44,400 open markets right now. Polymarket has about 45,000. That's just under 2 billion possible pairs, and the overwhelming majority are nonsense. The New York Knicks winning a game (shoutout Jalen Brunson) does not arbitrage against the next Argentine election.

The pairs that aren't nonsense come in three flavors:

1. **Identical markets on both platforms.** Same event, same resolution criteria, same deadline. These are the arbitrage opportunities. They're rare, but exactly what we're looking for.
2. **Looks identical, isn't.** Same headline event, but one side resolves on a slightly different definition, deadline, threshold, or fallback. Two "will X leave office" markets might have deadlines six months apart, with a window in between where one resolves YES and the other NO. A CPI market resolving on "above 3.7%" diverges from a sibling on "at or above 3.7%" at exactly the 3.7% reading. These look like arbs and they aren't, and the cost of trusting them is real money.
3. **Genuinely different events that share keywords.** A "Trump-Xi meeting in person before Jan 1, 2027" market versus a "Trump visits Taiwan in 2026" market both involve Trump and an Asian country, but are very different markets.

The naive approach is to match by title. Unfortunately, this fails in practice. For example, Kalshi calls a market "Will Apple Inc. release iPhone 18 before Jan 1, 2027?". The equivalent Polymarket question is "Will Apple release iPhone 18 in 2026?". The dates differ by phrasing but resolve at the same calendar moment. A title-matcher misses this entirely or, worse, matches it to "Will Apple release iPhone 18 *Pro* in 2026?", which is a different bet (there is a plausible scenario where Apple releases the iPhone 18 but not the iPhone 18 Pro in 2026).

To filter the 2 billion pairs to the real arbitrage opportunities, I built a three-stage funnel powered by Neon (Postgres), Pinecone (vector store), and Modal (serverless compute).

```arb-funnel
```


## Stage 1: volume gate

I first dropped markets under $10K cumulative volume. Below that, spreads are usually too wide and the top of book is too shallow for the arb to be worth trading. This reduced the search space from ~2B possible pairs to ~45M, while also filtering out most joke/novelty markets.


## Stage 2: embedding similarity

The reason embeddings are useful is that the market titles are written by different people with different conventions. "Will Drake be the top Spotify artist for 2026?" and "Who will be the top Spotify artist this year? : Drake" point to the same outcome, but a TF-IDF or BM25 search might not recognize this.

For each market, I create vector embeddings that hold the meaning of it. I store these vector embeddings in Pinecone and use cosine similarity to compute how semantically similar each pair of markets is.

After dropping every pair with a cosine similarity below a threshold, the 45 million surviving pairs collapse to roughly 10,000 candidate pairs that actually look semantically related.

That's still way too many to manually review, and most of them are wrong in subtle ways.

## Stage 3: LLM classifier

Vector similarity tells you two markets sound alike. It does not tell you whether they resolve the same way under all realistic outcomes.

I send each candidate pair to `gpt-5.4-mini` to determine whether both would always resolve identically.

The first version of my prompt produced many false positives I would have lost real money on if I hadn't verified the resolution rules myself. The current version is more detailed and precise, and produces around 800 confirmed pairs with a top-arbs list I trust enough to put my own money on.

What changed across those revisions was a long list of specific failure modes I caught by eyeballing the top of the dashboard. For example, the system flagged a 14% "arb" on the 2026 CA-11 primary. The two markets looked identical but resolved on different criteria: Kalshi paid out if Connie Chan *advanced*; Polymarket paid out if she got the *most votes*. The model saw the same race and candidate on both sides and called them equivalent:

> Same district, same primary, same candidate. Polymarket's "most votes" phrasing is functionally equivalent to Kalshi's "advances" wording in this context.

It isn't. California uses a top-2 jungle primary, so the *second*-place finisher advances too. If Chan comes in second, Kalshi settles YES (she advanced) while Polymarket settles NO (she didn't win) — the markets only agree when she finishes first. The "arb" was really just a bet on Chan placing first, dressed up with a confident, wrong paragraph of model reasoning.

The fix was one rule: in a jungle primary, "advances" and "wins" aren't interchangeable. But every edge case like this added another paragraph to the system prompt, and every change risked regressing something that already worked. 

## An eval suite

For me, there were two error types, each with its own price:

- **False positives** (confirming a pair that isn't actually an arb) are the dangerous ones. They show up on my dashboard with a big number, and if I trust it without verifying, I lose money. I have zero tolerance for these errors.
- **False negatives** (flagging or rejecting a pair that is actually a clean arb) are the silent ones. I never see them in my dashboard, but they lower the size of my opportunity set. However, since I would never trade on them, there is no monetary downside to these errors. Tolerance: some, but not unlimited, because every legit arb I miss is free money I could have made.

Given that this was a quick project, at first I skipped the eval suite and relied on vibes plus manual review, but after several hours of iteration I realized I was wasting too much time on something that could be trivially automated.

I started building an eval suite. Every false positive I caught in production got added as a "must flag/reject" case. Every false negative I noticed during manual review got added as a "must confirm" case. The iPhone successor case, the Starmer subset window, the CPI threshold mismatch, and the Mexico-Draw polarity bait all got added to the suite the first time I caught them. The suite started with the original 15 worst offenders and now sits at around 60 hand-curated pairs.

Before any prompt change ships, I run the suite. The script just calls the same `confirm_pair` function on each labeled case and checks whether the verdict matches the expected one. A new rule has to maintain the current passing rate (right now around 95%) and improve at least one previously-failing case. Anything else is a regression and gets rejected, even if I'm subjectively sure the rule is "right".

What changed once the eval suite existed is that I could finally start being aggressive about adding rules without paranoid hand-testing every previously-known-good market. The cost of a prompt iteration dropped from manual verification and hopes to a cheap script that ran in under a minute.

## Scheduling on Modal

The classification takes over twenty minutes per run and hits the OpenAI API. I don't want that to run constantly. 

However, the pricing stage talks to live order books and needs to run frequently to surface arbs the second they open up.

So the system has two Modal cron jobs:

```cron-schedule
```

## Where the system is now

The classifier has been through over 20 rule iterations, and with the current version I haven't been able to find a false positive in the top of the dashboard for several weeks. The list of verified arbs refreshes within 2 minutes of any price change. 

I still read each market myself before placing a trade, partly because the downside of a missed edge case is worth the couple minutes of reading, partly because manually re-reading the resolution criteria is the only way I personally learn what the next failure might look like. But the cost of that habit has dropped from "I have to verify every detail" to "I'm sanity-checking the system's work."

I could easily automate trade execution, but for now I prefer to place each trade myself. There are two easy pieces I want to build next around the manual loop:

First, I'm wiring up a Discord bot that pings me the first time a new arb above 10% appears on the dashboard, so I catch new opportunities the moment they materialize instead of when I open the dashboard during my morning commute. 

The second is for each confirmed arb, I want to compute and show the maximum size I can put on each leg before slipping past the top of the book, given the live order-book depth. Right now I eyeball that against the order book by hand, but it would be nice not to have to calculate it while placing the bet.

## The numbers

Where I am as of writing:

- ~44,400 open Kalshi markets and ~45,000 open Polymarket markets
- ~2 billion brute-force possible pairs
- ~45 million surviving after the $10K volume gate
- ~10,000 candidate pairs after the Pinecone semantic-similarity step
- ~800 confirmed pairs after the LLM classifier
- ~50 genuine arbitrage opportunities
- 7 active arbitrages over 5% profit per dollar right now, the highest current opportunity is 16%
- One arb opportunity of over 20% that I bought into a few weeks ago, which resolved a couple days ago and paid for this month's Claude and Codex subscriptions, plus a couple ice cream scoops from Swensen's.

The dashboard runs on its own, refreshes every couple of minutes, and the only thing standing between it and a fully autonomous trading bot is me, two browser tabs, and a habit of double-checking. I'm in no rush to remove that last piece.
