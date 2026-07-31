import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const hotelData = [
  { name: "Off-Peak\n(Nov-Feb*)", price: 55, fill: "#10b981" },
  { name: "Shoulder\n(Mar-Apr, Sep-Oct)", price: 80, fill: "#f59e0b" },
  { name: "Peak\n(May-Aug, CNY, GW)", price: 100, fill: "#ef4444" },
];

function CustomLabel(props: any) {
  const { x, y, width, value } = props;
  return (
    <text x={x + width / 2} y={y - 8} textAnchor="middle" fill="#71717a" fontSize={13} fontWeight={600}>
      {value}%
    </text>
  );
}

export default function HotelComparison() {
  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-6 min-h-[400px]">
      <p className="text-sm font-semibold text-zinc-700 mb-6">
        4-Star Hotels: Price Index by Season (% of peak)
      </p>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={hotelData} margin={{ top: 20, right: 0, bottom: 0, left: -16 }} barCategoryGap="30%">
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#71717a", lineHeight: 16 }} axisLine={{ stroke: "#e4e4e7" }} tickLine={false} interval={0} height={50} />
          <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e4e4e7" }} formatter={(value: number) => [`${value}% of peak`, "Price Index"]} cursor={{ fill: "#f4f4f5" }} />
          <Bar dataKey="price" radius={[8, 8, 0, 0]} maxBarSize={80} label={<CustomLabel />}>
            {hotelData.map((entry) => <Cell key={entry.name} fill={entry.fill} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-1 gap-2 mt-5">
        <div className="flex items-start gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mt-1 flex-shrink-0" />
          <p className="text-xs text-zinc-500"><span className="font-medium text-zinc-600">Off-Peak:</span> Hotels run 40-50% off rack rates. Highly negotiable. *Excludes Chinese New Year.</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 mt-1 flex-shrink-0" />
          <p className="text-xs text-zinc-500"><span className="font-medium text-zinc-600">Shoulder:</span> Good availability, standard rates. Book 2-4 weeks ahead.</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400 mt-1 flex-shrink-0" />
          <p className="text-xs text-zinc-500"><span className="font-medium text-zinc-600">Peak:</span> Full price, high demand. Book 1-2 months ahead for popular cities.</p>
        </div>
      </div>
    </div>
  );
}
