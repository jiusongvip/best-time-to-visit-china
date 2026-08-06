"use client";

import { useState } from "react";

interface CompareItem {
  label: string;
  tempHigh: number;
  tempLow: number;
  rainDays: number;
  crowdLevel: number;
  costLevel: string;
  bestFor: string;
  verdict: string;
}

const monthlyCompare: Record<string, CompareItem> = {
  january: { label: "January", tempHigh: 4, tempLow: -5, rainDays: 2, crowdLevel: 2, costLevel: "Very Low", bestFor: "Harbin Ice Festival, budget travel", verdict: "Bitterly cold in the north, but the Harbin Ice Festival and rock-bottom prices make it worth it for the adventurous." },
  february: { label: "February", tempHigh: 7, tempLow: -2, rainDays: 3, crowdLevel: 3, costLevel: "Low (excl. CNY)", bestFor: "Chinese New Year, temple fairs", verdict: "Magical if you hit CNY, chaotic if you don't. Book everything 3 months ahead or stay home." },
  march: { label: "March", tempHigh: 13, tempLow: 5, rainDays: 5, crowdLevel: 3, costLevel: "Moderate", bestFor: "Cherry blossoms, warming weather", verdict: "A shoulder month with unpredictable weather. Great deals if you can handle a few rainy days." },
  april: { label: "April", tempHigh: 20, tempLow: 10, rainDays: 7, crowdLevel: 4, costLevel: "Moderate-High", bestFor: "Spring blooms, Great Wall hiking", verdict: "One of the two best months. Perfect weather, blooming flowers, manageable crowds outside Qing Ming." },
  may: { label: "May", tempHigh: 26, tempLow: 15, rainDays: 9, crowdLevel: 5, costLevel: "High (Labor Day)", bestFor: "Warm weather, Yellow Mountains", verdict: "Beautiful weather, but Labor Day week (May 1-5) ruins it. Come after the 6th for a near-perfect trip." },
  june: { label: "June", tempHigh: 30, tempLow: 20, rainDays: 12, crowdLevel: 4, costLevel: "Moderate", bestFor: "Dragon Boat Festival, lush scenery", verdict: "Hot and humid in most cities. Escape to Yunnan or Inner Mongolia for the best June experience." },
  july: { label: "July", tempHigh: 32, tempLow: 23, rainDays: 14, crowdLevel: 5, costLevel: "High", bestFor: "Tibet, Qinghai Lake, summer festivals", verdict: "Brutal heat in cities, but Tibet and Qinghai are at their absolute best. Choose your destination carefully." },
  august: { label: "August", tempHigh: 31, tempLow: 22, rainDays: 13, crowdLevel: 5, costLevel: "High", bestFor: "Inner Mongolia grasslands, festivals", verdict: "Similar to July. Head to high altitude or high latitude. Avoid coastal cities during typhoon season." },
  september: { label: "September", tempHigh: 26, tempLow: 17, rainDays: 9, crowdLevel: 4, costLevel: "Moderate", bestFor: "Mid-Autumn Festival, hiking", verdict: "The other perfect month. Cool, dry, beautiful. Mid-Autumn mooncakes are a bonus. Book ahead for the festival weekend." },
  october: { label: "October", tempHigh: 19, tempLow: 10, rainDays: 6, crowdLevel: 5, costLevel: "Very High (Golden Week)", bestFor: "Autumn foliage, perfect weather", verdict: "The best weather of the year, ruined by Golden Week (Oct 1-7). Come after the 8th for the single best travel window in China." },
  november: { label: "November", tempHigh: 12, tempLow: 3, rainDays: 4, crowdLevel: 2, costLevel: "Low", bestFor: "Budget travel, empty attractions", verdict: "Cold but dry. The Great Wall with zero crowds. Flights under $800. If you can handle a coat, this is the hidden gem." },
  december: { label: "December", tempHigh: 5, tempLow: -3, rainDays: 2, crowdLevel: 3, costLevel: "Very Low", bestFor: "Christmas markets, Harbin pre-festival", verdict: "Cold everywhere except the far south. But flights are at their cheapest, and the Harbin Ice Festival soft-opens late in the month." },
};

const regionCompare: Record<string, { best: string; avoid: string; temp: string; highlight: string }> = {
  beijing: { best: "Apr-May, Sep-Oct", avoid: "Jul-Aug, Jan-Feb", temp: "Spring 10-22, Autumn 8-20", highlight: "Great Wall in autumn foliage is iconic" },
  shanghai: { best: "Mar-May, Oct-Nov", avoid: "Jul-Aug, Jan-Feb", temp: "Spring 15-22, Autumn 17-24", highlight: "The Bund at golden hour in October" },
  guilin: { best: "Apr-May, Sep-Nov", avoid: "Jun-Aug", temp: "Spring 18-25, Autumn 20-27", highlight: "Misty karst peaks are best in spring" },
  chengdu: { best: "Mar-Jun, Sep-Nov", avoid: "Jul-Aug", temp: "Best months 15-28", highlight: "Pandas are most active in spring" },
  yunnan: { best: "Year-round", avoid: "Jun-Aug (monsoon)", temp: "Year-round 15-24", highlight: "Kunming: City of Eternal Spring" },
  tibet: { best: "May-Oct", avoid: "Nov-Apr", temp: "Summer 15-25 daytime", highlight: "Potala Palace under clear autumn skies" },
  xian: { best: "Mar-May, Sep-Nov", avoid: "Jul-Aug", temp: "Spring 12-24, Autumn 10-22", highlight: "Terracotta Warriors at opening time in April" },
  hongkong: { best: "Oct-Dec", avoid: "Jun-Sep", temp: "Oct-Dec 20-28", highlight: "Victoria Peak on a clear December day" },
};

function crowdLabel(l: number) { return l <= 2 ? "Low" : l <= 3 ? "Moderate" : l <= 4 ? "High" : "Extreme"; }
function crowdColor(l: number) { return l <= 2 ? "text-emerald-600 bg-emerald-50" : l <= 3 ? "text-amber-600 bg-amber-50" : "text-red-600 bg-red-50"; }

type CompareMode = "months" | "regions";

export default function ComparisonTool() {
  const [mode, setMode] = useState<CompareMode>("months");
  const [a, setA] = useState("april");
  const [b, setB] = useState("october");

  const items = mode === "months" ? monthlyCompare : regionCompare;
  const itemA = items[a as keyof typeof items];
  const itemB = items[b as keyof typeof items];
  const labels = mode === "months"
    ? Object.entries(monthlyCompare).map(([k, v]) => [k, v.label])
    : Object.entries(regionCompare).map(([k]) => [k, k.charAt(0).toUpperCase() + k.slice(1)]);

  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8">
      <p className="text-sm font-semibold text-zinc-700 mb-1">Compare Side by Side</p>
      <p className="text-xs text-zinc-400 mb-6">Pick two to compare and we&rsquo;ll help you decide.</p>

      {/* Mode tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => { setMode("months"); setA("april"); setB("october"); }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${mode === "months" ? "bg-accent-600 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}
        >
          Months
        </button>
        <button
          onClick={() => { setMode("regions"); setA("beijing"); setB("shanghai"); }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${mode === "regions" ? "bg-accent-600 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}
        >
          Regions
        </button>
      </div>

      {/* Selectors */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <select
          value={a}
          onChange={(e) => setA(e.target.value)}
          className="w-full p-3 rounded-xl border border-zinc-200 text-sm font-medium text-zinc-700 bg-white focus:border-accent-400 focus:ring-1 focus:ring-accent-200 outline-none"
        >
          {labels.map(([k, v]) => <option key={k as string} value={k as string}>{v as string}</option>)}
        </select>
        <select
          value={b}
          onChange={(e) => setB(e.target.value)}
          className="w-full p-3 rounded-xl border border-zinc-200 text-sm font-medium text-zinc-700 bg-white focus:border-accent-400 focus:ring-1 focus:ring-accent-200 outline-none"
        >
          {labels.map(([k, v]) => <option key={k as string} value={k as string}>{v as string}</option>)}
        </select>
      </div>

      {/* Comparison cards */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {/* Card A */}
        <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-200">
          <p className="text-sm font-bold text-zinc-800 mb-3">{itemA.label}</p>
          {mode === "months" && (
            <>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-zinc-400">Temperature</span><span className="font-medium text-zinc-700">{itemA.tempLow}&deg;&ndash;{itemA.tempHigh}&deg;C</span></div>
                <div className="flex justify-between"><span className="text-zinc-400">Rain days</span><span className="font-medium text-zinc-700">{itemA.rainDays}</span></div>
                <div className="flex justify-between"><span className="text-zinc-400">Crowds</span><span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${crowdColor(itemA.crowdLevel)}`}>{crowdLabel(itemA.crowdLevel)}</span></div>
                <div className="flex justify-between"><span className="text-zinc-400">Cost</span><span className="font-medium text-zinc-700">{itemA.costLevel}</span></div>
                <div className="flex justify-between"><span className="text-zinc-400">Best for</span><span className="font-medium text-zinc-700 text-right max-w-[120px]">{itemA.bestFor}</span></div>
              </div>
            </>
          )}
          {mode === "regions" && (
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-zinc-400">Best months</span><span className="font-medium text-blue-600">{itemA.best}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Avoid</span><span className="font-medium text-red-500">{itemA.avoid}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Temperature</span><span className="font-medium text-zinc-700">{itemA.temp}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Highlight</span><span className="font-medium text-zinc-700 text-right max-w-[120px]">{itemA.highlight}</span></div>
            </div>
          )}
        </div>

        {/* Card B */}
        <div className="bg-zinc-50 rounded-xl p-5 border border-zinc-200">
          <p className="text-sm font-bold text-zinc-800 mb-3">{itemB.label}</p>
          {mode === "months" && (
            <>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-zinc-400">Temperature</span><span className="font-medium text-zinc-700">{itemB.tempLow}&deg;&ndash;{itemB.tempHigh}&deg;C</span></div>
                <div className="flex justify-between"><span className="text-zinc-400">Rain days</span><span className="font-medium text-zinc-700">{itemB.rainDays}</span></div>
                <div className="flex justify-between"><span className="text-zinc-400">Crowds</span><span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${crowdColor(itemB.crowdLevel)}`}>{crowdLabel(itemB.crowdLevel)}</span></div>
                <div className="flex justify-between"><span className="text-zinc-400">Cost</span><span className="font-medium text-zinc-700">{itemB.costLevel}</span></div>
                <div className="flex justify-between"><span className="text-zinc-400">Best for</span><span className="font-medium text-zinc-700 text-right max-w-[120px]">{itemB.bestFor}</span></div>
              </div>
            </>
          )}
          {mode === "regions" && (
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-zinc-400">Best months</span><span className="font-medium text-blue-600">{itemB.best}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Avoid</span><span className="font-medium text-red-500">{itemB.avoid}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Temperature</span><span className="font-medium text-zinc-700">{itemB.temp}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Highlight</span><span className="font-medium text-zinc-700 text-right max-w-[120px]">{itemB.highlight}</span></div>
            </div>
          )}
        </div>
      </div>

      {/* Verdict */}
      {mode === "months" && (
        <div className="bg-accent-50 border border-accent-200 rounded-xl p-5">
          <p className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-2">Quick Take</p>
          <p className="text-sm text-zinc-700 leading-relaxed">
            <span className="font-semibold">{itemA.label}:</span> {itemA.verdict}
          </p>
          <p className="text-sm text-zinc-700 leading-relaxed mt-2">
            <span className="font-semibold">{itemB.label}:</span> {itemB.verdict}
          </p>
        </div>
      )}
      {mode === "regions" && (
        <div className="bg-accent-50 border border-accent-200 rounded-xl p-5">
          <p className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-2">Planning Tip</p>
          <p className="text-sm text-zinc-700 leading-relaxed">
            These two regions have different ideal seasons. Consider a multi-destination trip that visits each at its peak. Or pick the one whose best window matches your available dates.
          </p>
        </div>
      )}
    </div>
  );
}
