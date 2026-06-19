const JOBS = [
  {
    cadence: "every 4 hours",
    title: "classification pipeline",
    steps: [
      "Pull latest markets from Kalshi & Polymarket",
      "Embed new markets (text-embedding-3-large)",
      "Upsert vectors into Pinecone",
      "Find candidate pairs (Pinecone top-K)",
      "Send pending pairs to the LLM classifier",
      "Write verdicts back to Neon",
    ],
  },
  {
    cadence: "every 2 minutes",
    title: "live pricing",
    steps: [
      "Fetch live bid/ask for all confirmed pairs",
      "Compute whether an arb is open and its return",
      "Materialize into the live_arbs_current view",
      "Dashboard reads the view — refresh ≤ 2 min",
    ],
  },
];

export default function CronSchedule() {
  return (
    <figure className="my-8 grid gap-4 font-mono sm:grid-cols-2">
      {JOBS.map((job) => (
        <div
          key={job.title}
          className="rounded-lg border border-[#e6e4dd] bg-white p-5 shadow-sm"
        >
          <div className="flex items-baseline justify-between gap-2 border-b border-[#ece9e1] pb-3">
            <span className="rounded bg-[#eff4ff] px-2 py-0.5 text-xs font-medium text-[#2563eb]">
              {job.cadence}
            </span>
            <span className="text-xs text-[#8a8a85]">{job.title}</span>
          </div>
          <ol className="mt-3 space-y-2">
            {job.steps.map((step, i) => (
              <li key={i} className="flex gap-2.5 text-[13px] leading-relaxed text-[#444]">
                <span className="text-[#9a9a9a]">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </figure>
  );
}
