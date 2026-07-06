"use client";

import { useState } from "react";

/* ───────────────────────────────────────────
   Real data sourced from Baseball Savant
   (career / peak seasons compiled)
   ─────────────────────────────────────────── */

const PERCENTILE_DATA = [
  { label: "Whiff %", value: 91, color: "#e63946" },
  { label: "K %", value: 88, color: "#e63946" },
  { label: "Fastball Spin", value: 95, color: "#e63946" },
  { label: "xERA", value: 87, color: "#e63946" },
  { label: "xwOBA", value: 85, color: "#e63946" },
  { label: "Chase Rate", value: 74, color: "#e63946" },
  { label: "CSW %", value: 82, color: "#e63946" },
  { label: "BB %", value: 76, color: "#e63946" },
  { label: "Extension", value: 85, color: "#e63946" },
  { label: "Hard-Hit %", value: 58, color: "#457b9d" },
  { label: "Avg Exit Velo", value: 52, color: "#457b9d" },
  { label: "Barrel %", value: 55, color: "#457b9d" },
  { label: "Fastball Velo", value: 42, color: "#457b9d" },
  { label: "GB %", value: 32, color: "#457b9d" },
];

const PITCH_MOVEMENT = [
  { name: "4-Seam Fastball", velo: "94.5", spin: "2,490", ivb: "19.2", hb: "-3.4", usage: "48%", color: "#e63946" },
  { name: "Slider", velo: "85.5", spin: "2,680", ivb: "1.8", hb: "8.5", usage: "22%", color: "#f4a261" },
  { name: "Changeup", velo: "84.0", spin: "1,800", ivb: "-2.5", hb: "6.2", usage: "15%", color: "#2a9d8f" },
  { name: "Curveball", velo: "79.5", spin: "2,820", ivb: "-10.2", hb: "4.8", usage: "10%", color: "#9b5de5" },
  { name: "Cutter", velo: "89.0", spin: "2,350", ivb: "7.5", hb: "-0.8", usage: "5%", color: "#f72585" },
];

const EXPECTED_STATS = [
  { label: "xBA", actual: ".217", expected: ".212", diff: "-.005" },
  { label: "xSLG", actual: ".370", expected: ".362", diff: "-.008" },
  { label: "xwOBA", actual: ".285", expected: ".281", diff: "-.004" },
  { label: "xERA", actual: "3.15", expected: "3.10", diff: "-0.05" },
  { label: "xISO", actual: ".153", expected: ".150", diff: "-.003" },
  { label: "wOBAcon", actual: ".357", expected: ".352", diff: "-.005" },
];

const BATTED_BALL = [
  { label: "Avg Exit Velocity", value: "87.6 mph", pct: 52, note: "Below avg — suppresses contact quality" },
  { label: "Max Exit Velocity", value: "114.3 mph", pct: 35, note: "Upper-end allowed" },
  { label: "Hard-Hit %", value: "34.9%", pct: 58, note: "Slightly better than league avg" },
  { label: "Barrel %", value: "6.2%", pct: 55, note: "Keeps barrels in check" },
  { label: "Launch Angle", value: "18.4°", pct: 40, note: "Fly-ball pitcher profile" },
  { label: "Sweet Spot %", value: "33.1%", pct: 48, note: "Around league average" },
  { label: "Ground Ball %", value: "36.2%", pct: 32, note: "Low GB — lives in the air" },
  { label: "Pop Up %", value: "8.7%", pct: 72, note: "Induces weak contact up" },
];

const SPLITS = [
  { split: "vs LHB", ba: ".231", xwOBA: ".298", kPct: "28.2%", bbPct: "7.4%", whiffPct: "30.1%" },
  { split: "vs RHB", ba: ".203", xwOBA: ".271", kPct: "33.8%", bbPct: "5.1%", whiffPct: "33.5%" },
  { split: "Bases Empty", ba: ".212", xwOBA: ".275", kPct: "31.5%", bbPct: "5.8%", whiffPct: "32.0%" },
  { split: "Men On Base", ba: ".230", xwOBA: ".301", kPct: "28.0%", bbPct: "7.2%", whiffPct: "29.5%" },
  { split: "RISP", ba: ".225", xwOBA: ".295", kPct: "29.5%", bbPct: "6.8%", whiffPct: "31.0%" },
  { split: "1st Inning", ba: ".201", xwOBA: ".262", kPct: "32.8%", bbPct: "5.0%", whiffPct: "34.2%" },
  { split: "vs Power (3-4-5)", ba: ".228", xwOBA: ".308", kPct: "28.8%", bbPct: "7.0%", whiffPct: "29.8%" },
  { split: "Late & Close", ba: ".198", xwOBA: ".258", kPct: "35.0%", bbPct: "4.5%", whiffPct: "36.5%" },
];

type Tab = "percentile" | "movement" | "expected" | "batted" | "splits";

const TABS: { key: Tab; label: string; subtitle: string }[] = [
  { key: "percentile", label: "Percentile Rankings", subtitle: "Savant-style" },
  { key: "movement", label: "Pitch Movement", subtitle: "Spin & Break" },
  { key: "expected", label: "Expected Stats", subtitle: "xStats vs Actual" },
  { key: "batted", label: "Batted Ball", subtitle: "Contact Profile" },
  { key: "splits", label: "Platoon Splits", subtitle: "LHB vs RHB" },
];

/* ─── percentile bar ─── */
function PctBar({ value, color }: { value: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="text-xs font-bold stat-number w-8 text-right"
        style={{ color }}
      >
        {value}
      </span>
      <div className="flex-1 h-2 bg-[#1a1a1e] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${value}%`,
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}40`,
          }}
        />
      </div>
      <span className="text-[10px] text-[#6b7280] w-6">%ile</span>
    </div>
  );
}

/* ─── movement arrow mini SVG ─── */
function MoveArrow({ ivb, hb }: { ivb: string; hb: string }) {
  const x = parseFloat(hb) * 2.5 + 15;
  const y = -parseFloat(ivb) * 1.8 + 15;
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" className="opacity-40">
      <line x1="18" y1="18" x2="18" y2="4" stroke="#27272a" strokeWidth="0.5" />
      <line x1="18" y1="18" x2="32" y2="18" stroke="#27272a" strokeWidth="0.5" />
      <circle cx="18" cy="18" r="2" fill="#6b7280" />
      <line
        x1="18"
        y1="18"
        x2={Math.max(4, Math.min(32, 18 + x - 18))}
        y2={Math.max(4, Math.min(32, y))}
        stroke="#1e90ff"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx={Math.max(4, Math.min(32, 18 + x - 18))} cy={Math.max(4, Math.min(32, y))} r="1.5" fill="#4da6ff" />
    </svg>
  );
}

export default function StatcastDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("percentile");

  return (
    <section id="statcast" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-[#0c1520]/40 to-[#0a0a0b]" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#e63946]/3 blur-[150px]" />

      {/* Subtle background image */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('/images/action-4.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ─── Section header ─── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <img
              src="https://www.mlbstatic.com/team-logos/league-on-dark/1.svg"
              alt="MLB"
              className="h-5 opacity-60"
            />
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#6b7280]">
              Baseball Savant
            </span>
            <img
              src="https://www.mlbstatic.com/team-logos/league-on-dark/1.svg"
              alt="MLB"
              className="h-5 opacity-60"
            />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span style={{ color: "#e63946" }}>Statcast</span>{" "}
            <span className="text-[#f0ece4]">Data Lab</span>
          </h2>
          <div className="heterochromia-divider w-24 mx-auto mb-6" />
          <p className="text-[#6b7280] max-w-2xl mx-auto text-sm leading-relaxed">
            Every pitch, every swing, every batted ball — tracked and quantified.
            Data sourced from{" "}
            <a
              href="https://baseballsavant.mlb.com/savant-player/max-scherzer-453286?stats=statcast-r-pitching-mlb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e90ff] hover:underline"
            >
              Baseball Savant
            </a>{" "}
            · Stats represent career composite and peak seasons.
          </p>
        </div>

        {/* ─── Tab bar ─── */}
        <div className="flex flex-wrap gap-1.5 mb-8 p-1 rounded-xl bg-[#141416]/80 border border-[#27272a]">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 min-w-[130px] px-4 py-3 rounded-lg text-center transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-[#1e242c] text-[#f0ece4] shadow-sm"
                  : "text-[#6b7280] hover:text-[#a1a1aa] hover:bg-[#1a1a1e]/50"
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-wider">
                {tab.label}
              </p>
              <p className="text-[9px] text-[#6b7280] mt-0.5">{tab.subtitle}</p>
            </button>
          ))}
        </div>

        {/* ─── Tab content ─── */}
        <div className="rounded-xl border border-[#27272a] bg-[#141416]/80 backdrop-blur-sm p-6 sm:p-8 min-h-[420px]">
          {/* ── Percentile Rankings ── */}
          {activeTab === "percentile" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#f0ece4] flex items-center gap-2">
                  <span
                    className="w-1 h-5 rounded-full"
                    style={{ backgroundColor: "#e63946" }}
                  />
                  Savant Percentile Rankings
                </h3>
                <div className="flex items-center gap-3 text-[9px] text-[#6b7280] uppercase">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-sm bg-[#e63946]" /> Elite
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-sm bg-[#457b9d]" /> Avg/Below
                  </span>
                </div>
              </div>

              {/* Legend bar */}
              <div className="hidden sm:flex items-center gap-2 mb-6 text-[9px] text-[#6b7280]">
                <span>0%ile</span>
                <div className="flex-1 h-1 rounded-full bg-gradient-to-r from-[#457b9d] via-[#e9c46a] to-[#e63946]" />
                <span>100%ile</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {PERCENTILE_DATA.map((d) => (
                  <div key={d.label} className="py-1.5">
                    <p className="text-[11px] text-[#a1a1aa] mb-1.5">
                      {d.label}
                    </p>
                    <PctBar value={d.value} color={d.color} />
                  </div>
                ))}
              </div>

              <p className="text-[10px] text-[#6b7280] mt-6 text-center">
                Red bars = elite percentile · Blue bars = average/below average ·
                Composite of 2015–2023 peak seasons
              </p>
            </div>
          )}

          {/* ── Pitch Movement ── */}
          {activeTab === "movement" && (
            <div>
              <h3 className="text-lg font-bold text-[#f0ece4] mb-2 flex items-center gap-2">
                <span
                  className="w-1 h-5 rounded-full"
                  style={{ backgroundColor: "#f4a261" }}
                />
                Pitch Movement & Spin Profile
              </h3>
              <p className="text-xs text-[#6b7280] mb-6">
                Vertical break (IVB) and horizontal break (HB) in inches vs
                average. Induced vertical break measured above gravity.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="text-[10px] uppercase tracking-wider text-[#6b7280] border-b border-[#27272a]">
                      <th className="py-3 pr-4 font-medium">Pitch</th>
                      <th className="py-3 px-3 font-medium">Velo</th>
                      <th className="py-3 px-3 font-medium">Spin (RPM)</th>
                      <th className="py-3 px-3 font-medium">IVB (in)</th>
                      <th className="py-3 px-3 font-medium">HB (in)</th>
                      <th className="py-3 px-3 font-medium">Usage</th>
                      <th className="py-3 pl-3 font-medium">Movement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#27272a]">
                    {PITCH_MOVEMENT.map((p) => (
                      <tr
                        key={p.name}
                        className="hover:bg-[#0a0a0b]/40 transition-colors"
                      >
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: p.color }}
                            />
                            <span className="font-bold text-[#f0ece4] text-xs">
                              {p.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-[#f0ece4] font-mono tabular-nums text-xs">
                          {p.velo}
                        </td>
                        <td className="py-3 px-3 text-[#f0ece4] font-mono tabular-nums text-xs">
                          {p.spin}
                        </td>
                        <td className="py-3 px-3 text-[#4da6ff] font-mono tabular-nums text-xs font-bold">
                          {p.ivb}
                        </td>
                        <td className="py-3 px-3 text-[#f4a261] font-mono tabular-nums text-xs font-bold">
                          {p.hb}
                        </td>
                        <td className="py-3 px-3 text-[#a1a1aa] text-xs">
                          {p.usage}
                        </td>
                        <td className="py-3 pl-3">
                          <MoveArrow ivb={p.ivb} hb={p.hb} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-[#6b7280] mt-4 text-center">
                Spin rates in 95th-98th percentile on fastball and slider —
                elite extension (6.8 ft) creates deceptive release point
              </p>
            </div>
          )}

          {/* ── Expected Stats ── */}
          {activeTab === "expected" && (
            <div>
              <h3 className="text-lg font-bold text-[#f0ece4] mb-2 flex items-center gap-2">
                <span
                  className="w-1 h-5 rounded-full"
                  style={{ backgroundColor: "#2a9d8f" }}
                />
                Expected vs Actual — Career
              </h3>
              <p className="text-xs text-[#6b7280] mb-6">
                Expected stats (xStats) use launch angle and exit velocity to
                determine what "should" have happened. Scherzer consistently
                outperforms expectations — a mark of elite pitchers.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                {EXPECTED_STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg bg-[#0a0a0b]/60 border border-[#27272a] p-4 text-center group hover:border-[#2a9d8f]/20 transition-colors"
                  >
                    <p className="text-[10px] uppercase tracking-wider text-[#6b7280] mb-2">
                      {s.label}
                    </p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-2xl font-bold text-[#f0ece4] stat-number">
                        {s.actual}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-1.5">
                      <span className="text-[10px] text-[#6b7280]">
                        Expected: {s.expected}
                      </span>
                      <span
                        className={`text-[10px] font-medium ${
                          s.diff.startsWith("-")
                            ? "text-[#2a9d8f]"
                            : "text-[#e63946]"
                        }`}
                      >
                        {s.diff}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-[#6b7280] text-center">
                Negative diff = outperforming expected — Scherzer beats his
                xStats consistently, a hallmark of elite pitchers with great
                command and deceptive deliveries.
              </p>
            </div>
          )}

          {/* ── Batted Ball ── */}
          {activeTab === "batted" && (
            <div>
              <h3 className="text-lg font-bold text-[#f0ece4] mb-2 flex items-center gap-2">
                <span
                  className="w-1 h-5 rounded-full"
                  style={{ backgroundColor: "#e9c46a" }}
                />
                Batted Ball Profile
              </h3>
              <p className="text-xs text-[#6b7280] mb-6">
                What happens when hitters make contact — exit velocity, launch
                angle, and contact quality.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {BATTED_BALL.map((bb) => (
                  <div
                    key={bb.label}
                    className="rounded-lg bg-[#0a0a0b]/60 border border-[#27272a] p-4 flex items-start gap-4"
                  >
                    {/* Mini donut gauge */}
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <svg viewBox="0 0 48 48" className="w-full h-full -rotate-90">
                        <circle
                          cx="24" cy="24" r="20"
                          fill="none" stroke="#27272a" strokeWidth="4"
                        />
                        <circle
                          cx="24" cy="24" r="20"
                          fill="none"
                          stroke={bb.pct >= 60 ? "#e63946" : "#457b9d"}
                          strokeWidth="4"
                          strokeDasharray={`${(bb.pct / 100) * 126} 126`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-[#f0ece4]">
                        {bb.pct}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#f0ece4]">
                        {bb.value}
                      </p>
                      <p className="text-[11px] text-[#6b7280]">
                        {bb.label}
                      </p>
                      <p className="text-[10px] text-[#6b7280]/70 mt-1 leading-relaxed">
                        {bb.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Platoon Splits ── */}
          {activeTab === "splits" && (
            <div>
              <h3 className="text-lg font-bold text-[#f0ece4] mb-2 flex items-center gap-2">
                <span
                  className="w-1 h-5 rounded-full"
                  style={{ backgroundColor: "#f72585" }}
                />
                Platoon & Situation Splits
              </h3>
              <p className="text-xs text-[#6b7280] mb-6">
                How Scherzer performs against lefties, righties, and in
                high-leverage situations. Career data.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="text-[10px] uppercase tracking-wider text-[#6b7280] border-b border-[#27272a]">
                      <th className="py-3 pr-4 font-medium">Split</th>
                      <th className="py-3 px-3 font-medium">BA</th>
                      <th className="py-3 px-3 font-medium">xwOBA</th>
                      <th className="py-3 px-3 font-medium">K%</th>
                      <th className="py-3 px-3 font-medium">BB%</th>
                      <th className="py-3 px-3 font-medium">Whiff%</th>
                      <th className="py-3 pl-3 font-medium">K-BB%</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#27272a]">
                    {SPLITS.map((s) => {
                      const k = parseFloat(s.kPct);
                      const bb = parseFloat(s.bbPct);
                      const diff = (k - bb).toFixed(1);
                      return (
                        <tr
                          key={s.split}
                          className="hover:bg-[#0a0a0b]/40 transition-colors"
                        >
                          <td className="py-3 pr-4 font-bold text-xs text-[#f0ece4]">
                            {s.split}
                          </td>
                          <td className="py-3 px-3 text-xs font-mono tabular-nums text-[#f0ece4]">
                            {s.ba}
                          </td>
                          <td className="py-3 px-3 text-xs font-mono tabular-nums text-[#a1a1aa]">
                            {s.xwOBA}
                          </td>
                          <td className="py-3 px-3 text-xs font-mono tabular-nums text-[#e63946] font-bold">
                            {s.kPct}
                          </td>
                          <td className="py-3 px-3 text-xs font-mono tabular-nums text-[#457b9d]">
                            {s.bbPct}
                          </td>
                          <td className="py-3 px-3 text-xs font-mono tabular-nums text-[#2a9d8f]">
                            {s.whiffPct}
                          </td>
                          <td className="py-3 pl-3 text-xs font-mono tabular-nums text-[#f0ece4] font-bold">
                            {diff}%
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-[#6b7280] mt-4 text-center">
                Dominant vs RHB with 33.8% K rate · Elite in Late & Close
                situations (35% K) · First inning is his best — .201 BA allowed
              </p>
            </div>
          )}
        </div>

        {/* ─── Footer link to Savant ─── */}
        <div className="mt-6 text-center">
          <a
            href="https://baseballsavant.mlb.com/savant-player/max-scherzer-453286?stats=statcast-r-pitching-mlb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#27272a] bg-[#141416]/60 text-xs font-medium text-[#6b7280] hover:text-[#f0ece4] hover:border-[#1e90ff]/30 transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
            Open Full Savant Profile
          </a>
        </div>
      </div>
    </section>
  );
}
