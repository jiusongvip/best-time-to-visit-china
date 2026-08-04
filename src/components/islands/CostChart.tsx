const flightData = [
  { month: "Jan", price: 850 }, { month: "Feb", price: 1200 }, { month: "Mar", price: 900 },
  { month: "Apr", price: 950 }, { month: "May", price: 1100 }, { month: "Jun", price: 1600 },
  { month: "Jul", price: 1800 }, { month: "Aug", price: 1850 }, { month: "Sep", price: 1200 },
  { month: "Oct", price: 1500 }, { month: "Nov", price: 800 }, { month: "Dec", price: 750 },
];

const MAX = 2200;

function barColor(price: number) {
  if (price > 1500) return "#ef4444";
  if (price > 1000) return "#f59e0b";
  return "#10b981";
}

export default function CostChart() {
  const W = 560, H = 240, PL = 46, PR = 8, PT = 18, PB = 26;
  const chartW = W - PL - PR;
  const chartH = H - PT - PB;
  const step = chartW / flightData.length;
  const barW = Math.min(30, step * 0.55);
  const y = (price: number) => PT + chartH - (price / MAX) * chartH;
  const ticks = [0, 750, 1500, 2200];

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-6">
      <p className="text-sm font-semibold text-zinc-700 mb-4">
        Round-Trip Flights: US to Beijing (avg. USD)
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Average round-trip flight prices from the US to Beijing by month">
        {ticks.map((t) => (
          <g key={t}>
            <line x1={PL} x2={W - PR} y1={y(t)} y2={y(t)} stroke="#f4f4f5" />
            <text x={PL - 6} y={y(t) + 4} textAnchor="end" fontSize="11" fill="#a1a1aa">${t}</text>
          </g>
        ))}
        {flightData.map((d, i) => {
          const x = PL + i * step + (step - barW) / 2;
          const h = (d.price / MAX) * chartH;
          return (
            <g key={d.month}>
              <rect x={x} y={y(d.price)} width={barW} height={h} rx={6} fill={barColor(d.price)} />
              <text x={x + barW / 2} y={y(d.price) - 5} textAnchor="middle" fontSize="10" fill="#71717a" fontWeight={600}>{d.price}</text>
              <text x={x + barW / 2} y={H - PB + 14} textAnchor="middle" fontSize="10" fill="#71717a">{d.month}</text>
            </g>
          );
        })}
      </svg>
      <p className="text-xs text-zinc-400 mt-2">Source: Aggregated Google Flights data, US departure cities.</p>
    </div>
  );
}
