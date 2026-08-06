"use client";

import { useState } from "react";

interface Region {
  name: string;
  slug: string;
  best: string;
  temp: string;
  gridArea: string;
}

const regions: Region[] = [
  { name: "Beijing & North", slug: "beijing", best: "Apr-May, Sep-Oct", temp: "10-22\u00B0C", gridArea: "north" },
  { name: "Shanghai & East", slug: "shanghai", best: "Mar-May, Oct-Nov", temp: "15-24\u00B0C", gridArea: "east" },
  { name: "Guilin & South", slug: "guilin", best: "Apr-May, Sep-Nov", temp: "18-27\u00B0C", gridArea: "south" },
  { name: "Chengdu & Sichuan", slug: "chengdu", best: "Mar-Jun, Sep-Nov", temp: "15-28\u00B0C", gridArea: "west" },
  { name: "Yunnan", slug: "yunnan", best: "Year-round", temp: "15-24\u00B0C", gridArea: "sw" },
  { name: "Tibet", slug: "tibet", best: "May-Oct", temp: "15-25\u00B0C", gridArea: "tibet" },
  { name: "Xi\u2019an & Central", slug: "xian", best: "Mar-May, Sep-Nov", temp: "10-24\u00B0C", gridArea: "central" },
  { name: "Hong Kong", slug: "hongkong", best: "Oct-Dec", temp: "20-28\u00B0C", gridArea: "hk" },
];

export default function ChinaMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 overflow-hidden">
      <p className="text-sm font-semibold text-zinc-700 mb-2">Interactive China Map</p>
      <p className="text-xs text-zinc-400 mb-6">Hover or tap a region to see the best time to visit.</p>

      <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto">
        <div>
          <RegionCard region={regions.find(r => r.gridArea === "north")!} active={active} setActive={setActive} />
        </div>
        <div>
          <RegionCard region={regions.find(r => r.gridArea === "east")!} active={active} setActive={setActive} />
        </div>
        <div>
          <RegionCard region={regions.find(r => r.gridArea === "south")!} active={active} setActive={setActive} />
        </div>

        <div>
          <RegionCard region={regions.find(r => r.gridArea === "west")!} active={active} setActive={setActive} />
        </div>
        <div>
          <RegionCard region={regions.find(r => r.gridArea === "central")!} active={active} setActive={setActive} />
        </div>
        <div>
          <RegionCard region={regions.find(r => r.gridArea === "hk")!} active={active} setActive={setActive} />
        </div>

        <div>
          <RegionCard region={regions.find(r => r.gridArea === "tibet")!} active={active} setActive={setActive} />
        </div>
        <div>
          <RegionCard region={regions.find(r => r.gridArea === "sw")!} active={active} setActive={setActive} />
        </div>
      </div>

      <div className="text-center mt-6">
        <a href="/by-region" className="text-sm font-medium text-accent-600 hover:text-accent-700 inline-flex items-center gap-1">
          See all regions with detailed guides
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  );
}

function RegionCard({ region, active, setActive }: { region: Region; active: string | null; setActive: (v: string | null) => void }) {
  const isActive = active === region.slug;
  return (
    <a
      href={`/by-region#${region.slug}`}
      className={`block rounded-xl border p-3 md:p-4 text-left transition-all cursor-pointer hover:shadow-md ${
        isActive ? "border-accent-400 bg-accent-50 shadow-md ring-1 ring-accent-200" : "border-zinc-200 bg-white hover:border-accent-200"
      }`}
      onMouseEnter={() => setActive(region.slug)}
      onMouseLeave={() => setActive(null)}
      onFocus={() => setActive(region.slug)}
      onBlur={() => setActive(null)}
    >
      <p className="text-sm font-bold text-zinc-800 mb-1">{region.name}</p>
      <p className={`text-xs font-semibold mb-1 ${isActive ? "text-accent-600" : "text-blue-600"}`}>
        Best: {region.best}
      </p>
      <p className="text-[11px] text-zinc-400">{region.temp}</p>
    </a>
  );
}
