const STAGES = [
  {
    count: "~2B",
    label: "brute-force pairs",
    note: "44,400 Kalshi × 45,000 Polymarket markets",
  },
  {
    count: "~45M",
    label: "after the volume gate",
    op: "drop markets under $10K volume",
  },
  {
    count: "~10K",
    label: "candidate pairs",
    op: "Pinecone top-K cosine similarity",
  },
  {
    count: "~800",
    label: "confirmed pairs",
    op: "LLM classifier · gpt-5.4-mini",
  },
  {
    count: "~50",
    label: "genuine arbitrages",
    op: "live pricing · Modal cron (every 2 min)",
  },
];

const WIDTHS = ["100%", "84%", "66%", "50%", "40%"];

export default function ArbFunnel() {
  const last = STAGES.length - 1;
  return (
    <figure className="my-8 font-mono">
      <div className="flex flex-col items-center">
        {STAGES.map((stage, i) => (
          <div key={stage.label} className="flex w-full flex-col items-center">
            {i > 0 && (
              <div className="flex flex-col items-center py-2 text-center text-[11px] text-[#8a8a85]">
                <span className="text-[#2563eb]">↓</span>
                <span>{stage.op}</span>
              </div>
            )}
            <div
              style={{ maxWidth: WIDTHS[i] }}
              className={`w-full rounded-lg border px-4 py-3 text-center shadow-sm ${
                i === last
                  ? "border-[#2563eb]/40 bg-[#eff4ff]"
                  : "border-[#e6e4dd] bg-white"
              }`}
            >
              <div
                className={`text-lg font-semibold md:text-xl ${
                  i === last ? "text-[#2563eb]" : "text-[#111]"
                }`}
              >
                {stage.count}
              </div>
              <div className="text-xs text-[#555]">{stage.label}</div>
              {stage.note && (
                <div className="mt-0.5 text-[11px] text-[#8a8a85]">{stage.note}</div>
              )}
            </div>
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-center text-xs text-[#8a8a85]">
        Two billion raw pairs down to a few dozen real arbitrages.
      </figcaption>
    </figure>
  );
}
