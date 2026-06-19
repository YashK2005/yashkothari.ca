const DIRECTIONS = [
  {
    n: 1,
    legs: [
      { action: "Buy YES", venue: "Kalshi", side: "yes" as const },
      { action: "Buy NO", venue: "Polymarket", side: "no" as const },
    ],
    cost: "K_yes_ask + P_no_ask",
    profit: "1 − (K_yes_ask + P_no_ask)",
  },
  {
    n: 2,
    legs: [
      { action: "Buy YES", venue: "Polymarket", side: "yes" as const },
      { action: "Buy NO", venue: "Kalshi", side: "no" as const },
    ],
    cost: "P_yes_ask + K_no_ask",
    profit: "1 − (P_yes_ask + K_no_ask)",
  },
];

const sideStyles: Record<"yes" | "no", string> = {
  yes: "border-[#aed8c6] bg-[#edf8f2] text-[#0f7a52]",
  no: "border-[#f0c6c6] bg-[#fdf1f1] text-[#b23b3b]",
};

function Leg({
  action,
  venue,
  side,
}: {
  action: string;
  venue: string;
  side: "yes" | "no";
}) {
  return (
    <span
      className={`inline-flex items-baseline gap-1.5 rounded-md border px-2.5 py-1 font-mono text-[13px] ${sideStyles[side]}`}
    >
      <span className="font-semibold">{action}</span>
      <span className="opacity-70">on {venue}</span>
    </span>
  );
}

export default function HedgeDirections() {
  return (
    <figure className="my-8 grid gap-4 sm:grid-cols-2">
      {DIRECTIONS.map((d) => (
        <div
          key={d.n}
          className="rounded-lg border border-[#e6e4dd] bg-white p-5 shadow-sm"
        >
          <p className="font-mono text-xs uppercase tracking-wide text-[#8a8a85]">
            Direction {d.n}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Leg {...d.legs[0]} />
            <span className="text-[#b8b5ac]">+</span>
            <Leg {...d.legs[1]} />
          </div>

          <dl className="mt-4 space-y-2.5 border-t border-[#ece9e1] pt-3 font-mono text-[13px]">
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-[#8a8a85]">cost</dt>
              <dd className="text-right text-[#2b2b2b]">{d.cost}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-[#8a8a85]">payout</dt>
              <dd className="text-right text-[#2b2b2b]">
                $1 <span className="text-[#8a8a85]">· regardless of outcome</span>
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="text-[#8a8a85]">profit / contract</dt>
              <dd className="text-right font-semibold text-[#2563eb]">
                {d.profit}
              </dd>
            </div>
          </dl>
        </div>
      ))}
    </figure>
  );
}
