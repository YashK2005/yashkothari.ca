import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f7] text-[#2b2b2b] px-6 py-10 md:py-16 selection:bg-[#bcd0ff] font-mono">
      <div className="mx-auto max-w-2xl">
        {/* Header with name and social icons */}
        <header className="animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-normal tracking-tight text-[#111] flex items-center">
            Yash Kothari
            <span className="inline-block w-2.5 h-5 bg-[#2563eb] ml-1 animate-pulse" />
          </h1>
          <div className="flex items-center gap-4">
            <Link href="/writing" className="mr-1 text-sm text-[#8a8a85] hover:text-[#2563eb] transition-colors">
              writing
            </Link>
            <Link href="mailto:yashkoth7@gmail.com" className="text-[#8a8a85] hover:text-[#111] transition-colors" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </Link>
            <Link href="https://linkedin.com/in/yashkothari7" target="_blank" rel="noopener noreferrer" className="text-[#8a8a85] hover:text-[#111] transition-colors" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
            <Link href="https://github.com/YashK2005" target="_blank" rel="noopener noreferrer" className="text-[#8a8a85] hover:text-[#111] transition-colors" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>
            <Link href="https://x.com/YashK_7" target="_blank" rel="noopener noreferrer" className="text-[#8a8a85] hover:text-[#111] transition-colors" aria-label="X (Twitter)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
          </div>
        </header>
        
        {/* Bio as terminal output */}
        <section className="mt-10 animate-[fadeInUp_0.6s_ease-out_0.15s_forwards] opacity-0">
          <div className="space-y-4 text-sm md:text-base leading-relaxed text-[#3f3f3f]">
            <p>
              <span className="text-[#8a8a85]">$</span>{" "}
              <span className="text-[#2563eb]">whoami</span>
            </p>
            <p className="pl-4 border-l-2 border-[#e6e4dd]">
              I'm currently building reliable AI agents for some of the world's largest companies at{" "}
              <Link href="https://scale.com/genai-platform" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-medium hover:text-[#1d4ed8] transition-colors border-b border-[#d8d5cc] hover:border-[#2563eb]">
                Scale AI
              </Link>
              {" "}and studying Computer Science at the{" "}
              <Link href="https://uwaterloo.ca" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-medium hover:text-[#1d4ed8] transition-colors border-b border-[#d8d5cc] hover:border-[#2563eb]">
                University of Waterloo
              </Link>
              .
            </p>

            <p className="pt-4">
              <span className="text-[#8a8a85]">$</span>{" "}
              <span className="text-[#2563eb]">history</span>{" "}
              <span className="text-[#8a8a85]">|</span>{" "}
              <span className="text-[#2563eb]">grep</span>{" "}
              <span className="text-[#8a8a85]">work</span>
            </p>
            <div className="pl-4 border-l-2 border-[#e6e4dd] space-y-2">
              <p className="py-1 -my-1 px-2 -mx-2 rounded transition-all duration-200 hover:bg-[#f0eee7] hover:translate-x-1 group">
                <span className="text-[#8a8a85] group-hover:text-[#2563eb] transition-colors">[0]</span>{" "}
                Frontier Agents Engineering — building agents the world's largest companies rely on @{" "}
                <Link href="https://scale.com" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-medium hover:text-[#1d4ed8] transition-colors">
                  Scale AI
                </Link>
              </p>
              <div className="py-1 -my-1 px-2 -mx-2 rounded transition-all duration-200 hover:bg-[#f0eee7] hover:translate-x-1 group">
                <p>
                  <span className="text-[#8a8a85] group-hover:text-[#2563eb] transition-colors">[1]</span>{" "}
                  Built CDN infrastructure serving millions of sites @{" "}
                  <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-medium hover:text-[#1d4ed8] transition-colors">
                    Vercel
                  </Link>
                </p>
                <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 pl-7 text-xs text-[#8a8a85]">
                  <span className="text-[#2563eb]">↳ shipped</span>
                  <Link href="https://vercel.com/changelog/create-vercel-waf-custom-rules-using-natural-language" target="_blank" rel="noopener noreferrer" className="border-b border-[#d8d5cc] transition-colors hover:border-[#2563eb] hover:text-[#2563eb]">
                    create Firewall rules with natural language
                  </Link>
                  <Link href="https://vercel.com/changelog/manage-vercel-firewall-in-the-cli" target="_blank" rel="noopener noreferrer" className="group/cmd border-b border-[#d8d5cc] transition-colors hover:border-[#2563eb] hover:text-[#2563eb]">
                    <code className="rounded bg-[#e6e4dd] px-1.5 py-0.5 text-[#2b2b2b] group-hover/cmd:text-[#2563eb]">vercel firewall</code> CLI command
                  </Link>
                  <Link href="https://vercel.com/changelog/vercels-cdn-gets-a-new-dashboard-experience" target="_blank" rel="noopener noreferrer" className="border-b border-[#d8d5cc] transition-colors hover:border-[#2563eb] hover:text-[#2563eb]">
                    new CDN dashboard experience
                  </Link>
                  <Link href="https://vercel.com/changelog/vercels-cdn-now-supports-updating-routing-rules-without-a-new-deployment" target="_blank" rel="noopener noreferrer" className="border-b border-[#d8d5cc] transition-colors hover:border-[#2563eb] hover:text-[#2563eb]">
                    update routing rules without redeploys
                  </Link>
                </p>
              </div>
              <p className="py-1 -my-1 px-2 -mx-2 rounded transition-all duration-200 hover:bg-[#f0eee7] hover:translate-x-1 group">
                <span className="text-[#8a8a85] group-hover:text-[#2563eb] transition-colors">[2]</span>{" "}
                Worked on catalog systems and Seat Perks @{" "}
                <Link href="https://seatgeek.com" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-medium hover:text-[#1d4ed8] transition-colors">
                  SeatGeek
                </Link>
              </p>
              <p className="py-1 -my-1 px-2 -mx-2 rounded transition-all duration-200 hover:bg-[#f0eee7] hover:translate-x-1 group">
                <span className="text-[#8a8a85] group-hover:text-[#2563eb] transition-colors">[3]</span>{" "}
                Built cutting-edge AI-powered security tools @{" "}
                <Link href="https://shopify.com" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-medium hover:text-[#1d4ed8] transition-colors">
                  Shopify
                </Link>
              </p>
              <p className="py-1 -my-1 px-2 -mx-2 rounded transition-all duration-200 hover:bg-[#f0eee7] hover:translate-x-1 group">
                <span className="text-[#8a8a85] group-hover:text-[#2563eb] transition-colors">[4]</span>{" "}
                Enabled trading of over 8M EVM and Solana tokens @{" "}
                <Link href="https://x.com/nestwalletxyz" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-medium hover:text-[#1d4ed8] transition-colors">
                  Nest Wallet
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Selected Projects */}
        <section className="mt-12 animate-[fadeInUp_0.6s_ease-out_0.3s_forwards] opacity-0">
          <p className="text-sm text-[#8a8a85] mb-4">
            <span>$</span>{" "}
            <span className="text-[#2563eb]">ls</span>{" "}
            <span className="text-[#8a8a85]">~/projects</span>{" "}
            <span className="text-[#2563eb]">|</span>{" "}
            <span className="text-[#8a8a85]">head -4</span>
          </p>
          <div className="pl-4 border-l-2 border-[#e6e4dd] space-y-2 text-sm md:text-base text-[#3f3f3f]">
            <p className="py-1 -my-1 px-2 -mx-2 rounded transition-all duration-200 hover:bg-[#f0eee7] hover:translate-x-1 group">
              <span className="text-[#8a8a85] group-hover:text-[#2563eb] transition-colors">[0]</span>{" "}
              Led a team of 8 developers building pro-bono software to match cancer patients with volunteers for the{" "}
              <Link href="https://github.com/uwblueprint/llsc" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-medium hover:text-[#1d4ed8] transition-colors">
                Leukemia & Lymphoma Society of Canada
              </Link>
            </p>
            <p className="py-1 -my-1 px-2 -mx-2 rounded transition-all duration-200 hover:bg-[#f0eee7] hover:translate-x-1 group">
              <span className="text-[#8a8a85] group-hover:text-[#2563eb] transition-colors">[1]</span>{" "}
              Built{" "}
              <Link href="/writing/polymarket-kalshi-arbitrage" className="text-[#2563eb] font-medium hover:text-[#1d4ed8] transition-colors">
                arb-finder
              </Link>
              , a pipeline that finds risk-free arbitrage between Kalshi and Polymarket{" "}
              <span className="text-[#8a8a85]">(writeup)</span>
            </p>
            <p className="py-1 -my-1 px-2 -mx-2 rounded transition-all duration-200 hover:bg-[#f0eee7] hover:translate-x-1 group">
              <span className="text-[#8a8a85] group-hover:text-[#2563eb] transition-colors">[2]</span>{" "}
              Built{" "}
              <Link href="https://apps.apple.com/ca/app/running-journal/id6444382884" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-medium hover:text-[#1d4ed8] transition-colors">
                Running Journal
              </Link>
              , an iOS app for tracking running workouts with 1,000+ users across 60 countries
            </p>
            <p className="py-1 -my-1 px-2 -mx-2 rounded transition-all duration-200 hover:bg-[#f0eee7] hover:translate-x-1 group">
              <span className="text-[#8a8a85] group-hover:text-[#2563eb] transition-colors">[3]</span>{" "}
              Built{" "}
              <Link href="https://nba-contract-predictor.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-medium hover:text-[#1d4ed8] transition-colors">
                NBA Contract Predictor
              </Link>
              , using classical ML and supervised learning to surface the NBA&apos;s most overpaid and underpaid players
            </p>
          </div>
        </section>

        {/* Interests */}
        <section className="mt-12 animate-[fadeInUp_0.6s_ease-out_0.45s_forwards] opacity-0">
          <p className="text-sm text-[#8a8a85] mb-4">
            <span>$</span>{" "}
            <span className="text-[#2563eb]">cat</span>{" "}
            <span className="text-[#8a8a85]">~/.config/interests</span>
          </p>
          <p className="pl-4 border-l-2 border-[#e6e4dd] text-sm md:text-base text-[#3f3f3f]">
            I enjoy building{" "}
            <Link href="https://uwblueprint.org" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-medium hover:text-[#1d4ed8] transition-colors">
              products that help people
            </Link>
            , working on challenging problems, and learning from and sharing knowledge with others. Feel free to reach out!
          </p>
        </section>

        {/* Links */}
        <footer className="mt-12 animate-[fadeInUp_0.6s_ease-out_0.5s_forwards] opacity-0">
          <p className="text-sm text-[#8a8a85] mb-4">
            <span>$</span> <span className="text-[#2563eb]">links</span>
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://github.com/YashK2005" target="_blank" rel="noopener noreferrer" className="text-[#8a8a85] hover:text-[#2563eb] transition-colors text-sm">
              github
            </Link>
            <Link href="https://linkedin.com/in/yashkothari7" target="_blank" rel="noopener noreferrer" className="text-[#8a8a85] hover:text-[#2563eb] transition-colors text-sm">
              linkedin
            </Link>
            <Link href="https://x.com/YashK_7" target="_blank" rel="noopener noreferrer" className="text-[#8a8a85] hover:text-[#2563eb] transition-colors text-sm">
              x.com
            </Link>
            <Link href="mailto:yashkoth7@gmail.com" className="text-[#8a8a85] hover:text-[#2563eb] transition-colors text-sm">
              email
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
