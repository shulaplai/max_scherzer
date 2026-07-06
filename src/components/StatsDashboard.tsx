const CAREER_TOTALS = [
  { value: "3,499", label: "Strikeouts", rank: "11th All-Time" },
  { value: "222", label: "Wins", rank: "Active Leader" },
  { value: "3.26", label: "Career ERA", rank: "19 Seasons" },
  { value: "1.09", label: "Career WHIP", rank: "Elite" },
  { value: "2,982", label: "Innings Pitched", rank: "Since 2008" },
  { value: "10.56", label: "K/9 Rate", rank: "5th All-Time" },
  { value: "479", label: "Games Started", rank: "Since 2008" },
  { value: "4.43", label: "K/BB Ratio", rank: "14th All-Time" },
];

const SEASON_HIGHLIGHTS = [
  { year: "2013", team: "DET", w: 21, l: 3, era: "2.90", k: 240, ip: "214.1", war: "6.7", award: "🏆 Cy Young" },
  { year: "2014", team: "DET", w: 18, l: 5, era: "3.15", k: 252, ip: "220.1", war: "6.0", award: "⭐ AS" },
  { year: "2015", team: "WSH", w: 14, l: 12, era: "2.79", k: 276, ip: "228.2", war: "7.1", award: "🔥 2 No-Hitters" },
  { year: "2016", team: "WSH", w: 20, l: 7, era: "2.96", k: 284, ip: "228.1", war: "6.3", award: "🏆 Cy Young" },
  { year: "2017", team: "WSH", w: 16, l: 6, era: "2.51", k: 268, ip: "200.0", war: "7.3", award: "🏆 Cy Young" },
  { year: "2018", team: "WSH", w: 18, l: 7, era: "2.53", k: 300, ip: "220.2", war: "7.7", award: "⭐ 300K Season" },
  { year: "2019", team: "WSH", w: 11, l: 7, era: "2.92", k: 243, ip: "172.1", war: "5.6", award: "🏆 World Series" },
  { year: "2021", team: "LAD", w: 15, l: 4, era: "2.46", k: 236, ip: "179.1", war: "5.4", award: "⭐ AS" },
  { year: "2023", team: "TEX", w: 4, l: 2, era: "3.20", k: 53, ip: "45.0", war: "1.0", award: "🏆 World Series" },
];

const RATE_STATS = [
  { label: "K/9", value: "10.56", rank: "5th All-Time" },
  { label: "K/BB", value: "4.43", rank: "14th All-Time" },
  { label: "H/9", value: "7.30", rank: "37th All-Time" },
  { label: "HR/9", value: "1.08", rank: "—" },
  { label: "FIP", value: "3.16", rank: "Elite" },
  { label: "ERA+", value: "134", rank: "16th All-Time" },
];

export default function StatsDashboard() {
  return (
    <section id="stats" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-[#0a1420]/30 to-[#0a0a0b]" />

      {/* Subtle background image */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "url('/images/action-1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            By the Numbers
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Career{" "}
            <span className="bg-gradient-to-r from-[#1e90ff] to-[#b8860b] bg-clip-text text-transparent">
              Statistics
            </span>
          </h2>
          <div className="heterochromia-divider w-24 mx-auto mb-6" />
          <p className="text-[#6b7280] max-w-xl mx-auto text-sm leading-relaxed">
            Nineteen MLB seasons (2008–present). 3,499 strikeouts — 11th
            all-time. Every stat tells the story of a historically dominant
            Hall of Fame career.
          </p>
        </div>

        {/* Career totals grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {CAREER_TOTALS.map((stat) => (
            <div
              key={stat.label}
              className="glow-pulse rounded-xl border border-[#27272a] bg-[#141416]/80 p-5 text-center backdrop-blur-sm group hover:border-[#1e90ff]/30 transition-colors"
            >
              <p className="stat-number text-3xl sm:text-4xl font-bold text-[#f0ece4] mb-1">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-[#6b7280] mb-2">
                {stat.label}
              </p>
              <p className="text-[10px] text-[#1e90ff]/70 font-medium">
                {stat.rank}
              </p>
            </div>
          ))}
        </div>

        {/* Season-by-season table */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-[#f0ece4] mb-6 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-[#1e90ff]" />
            Season-by-Season Highlights
          </h3>
          <div className="overflow-x-auto rounded-xl border border-[#27272a]">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-[#141416] text-[10px] uppercase tracking-wider text-[#6b7280]">
                  <th className="px-4 py-3 font-medium">Year</th>
                  <th className="px-4 py-3 font-medium">Team</th>
                  <th className="px-4 py-3 font-medium">W-L</th>
                  <th className="px-4 py-3 font-medium">ERA</th>
                  <th className="px-4 py-3 font-medium">K</th>
                  <th className="px-4 py-3 font-medium">IP</th>
                  <th className="px-4 py-3 font-medium">WAR</th>
                  <th className="px-4 py-3 font-medium">Award</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#27272a]">
                {SEASON_HIGHLIGHTS.map((s) => (
                  <tr
                    key={s.year}
                    className="bg-[#0a0a0b]/60 hover:bg-[#141416]/60 transition-colors"
                  >
                    <td className="px-4 py-3 font-bold text-[#f0ece4]">
                      {s.year}
                    </td>
                    <td className="px-4 py-3 text-[#1e90ff] font-medium">
                      {s.team}
                    </td>
                    <td className="px-4 py-3 text-[#f0ece4] font-mono tabular-nums">
                      {s.w}-{s.l}
                    </td>
                    <td className="px-4 py-3 text-[#22c55e] font-mono tabular-nums">
                      {s.era}
                    </td>
                    <td className="px-4 py-3 text-[#f0ece4] font-mono tabular-nums font-bold">
                      {s.k}
                    </td>
                    <td className="px-4 py-3 text-[#a1a1aa] font-mono tabular-nums">
                      {s.ip}
                    </td>
                    <td className="px-4 py-3 text-[#b8860b] font-mono tabular-nums">
                      {s.war}
                    </td>
                    <td className="px-4 py-3 text-xs">{s.award}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Rate stats bar */}
        <div>
          <h3 className="text-lg font-bold text-[#f0ece4] mb-6 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-[#b8860b]" />
            Rate Stats — All-Time Ranks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {RATE_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[#27272a] bg-[#141416]/60 p-4 text-center"
              >
                <p className="stat-number text-2xl font-bold text-[#f0ece4] mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-[#6b7280] mb-1">
                  {stat.label}
                </p>
                <p className="text-[10px] text-[#b8860b]/70">{stat.rank}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
