import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const flightData = [
  { month: "Jan", price: 850 }, { month: "Feb", price: 1200 }, { month: "Mar", price: 900 },
  { month: "Apr", price: 950 }, { month: "May", price: 1100 }, { month: "Jun", price: 1600 },
  { month: "Jul", price: 1800 }, { month: "Aug", price: 1850 }, { month: "Sep", price: 1200 },
  { month: "Oct", price: 1500 }, { month: "Nov", price: 800 }, { month: "Dec", price: 750 },
];

function barColor(price: number) {
  if (price > 1500) return "#ef4444";
  if (price > 1000) return "#f59e0b";
  return "#10b981";
}

export default function CostChart() {
  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-6 min-h-[360px]">
      <p className="text-sm font-semibold text-zinc-700 mb-6">
        Round-Trip Flights: US to Beijing (avg. USD)
      </p>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={flightData} margin={{ top: 4, right: 0, bottom: 0, left: -16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#71717a" }} axisLine={{ stroke: "#e4e4e7" }} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: "#71717a" }} axisLine={false} tickLine={false} domain={[0, 2200]} tickFormatter={(v: number) => `$${v}`} />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e4e4e7", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }} formatter={(value: number) => [`$${value}`, "Avg. Price"]} cursor={{ fill: "#f4f4f5" }} />
          <Bar dataKey="price" radius={[6, 6, 0, 0]} maxBarSize={32}
            shape={(props: any) => {
              const { x, y, width, height, payload } = props;
              return <rect x={x} y={y} width={width} height={height} rx={6} ry={6} fill={barColor(payload.price)} />;
            }}
          />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-xs text-zinc-400 mt-4">Source: Aggregated Google Flights data, US departure cities.</p>
    </div>
  );
}
