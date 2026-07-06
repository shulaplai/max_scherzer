const STRIKEOUT_DATA = [
  { year: "'08", k: 0, team: "ARI" },
  { year: "'09", k: 174, team: "ARI" },
  { year: "'10", k: 184, team: "DET" },
  { year: "'11", k: 174, team: "DET" },
  { year: "'12", k: 231, team: "DET" },
  { year: "'13", k: 240, team: "DET" },
  { year: "'14", k: 252, team: "DET" },
  { year: "'15", k: 276, team: "WSH" },
  { year: "'16", k: 284, team: "WSH" },
  { year: "'17", k: 268, team: "WSH" },
  { year: "'18", k: 300, team: "WSH" },
  { year: "'19", k: 243, team: "WSH" },
  { year: "'20", k: 92, team: "WSH" },
  { year: "'21", k: 236, team: "LAD" },
  { year: "'22", k: 173, team: "NYM" },
  { year: "'23", k: 53, team: "TEX" },
];

const WAR_DATA = [
  { year: "'13", war: 6.7 },
  { year: "'14", war: 6.0 },
  { year: "'15", war: 7.1 },
  { year: "'16", war: 6.3 },
  { year: "'17", war: 7.3 },
  { year: "'18", war: 7.7 },
  { year: "'19", war: 5.6 },
  { year: "'20", war: 1.3 },
  { year: "'21", war: 5.4 },
  { year: "'22", war: 2.5 },
  { year: "'23", war: 1.0 },
];

function StrikeoutChart() {
  const w = 600;
  const h = 280;
  const padLeft = 42;
  const padBottom = 30;
  const padTop = 16;
  const padRight = 16;
  const chartW = w - padLeft - padRight;
  const chartH = h - padTop - padBottom;

  const maxK = 320;
  const yTicks = [0, 100, 200, 300];

  const cyYoungYears = ["'13", "'16", "'17"];
  const wsYears = ["'19", "'23"];
  const threeHundred = ["'18"];

  const xScale = (i: number) =>
    padLeft + (i / (STRIKEOUT_DATA.length - 1)) * chartW;
  const yScale = (v: number) => padTop + chartH * (1 - v / maxK);

  // Build area path
  const areaPath = STRIKEOUT_DATA.map((d, i) => {
    const x = xScale(i);
    const y = yScale(d.k);
    return `${i === 0 ? "M" : "L"} ${x} ${y}`;
  })
    .join(" ") +
    ` L ${xScale(STRIKEOUT_DATA.length - 1)} ${yScale(0)} L ${padLeft} ${yScale(0)} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full h-auto"
      role="img"
      aria-label="Max Scherzer career strikeouts per season chart"
    >
      <defs>
        <linearGradient id="kGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e90ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1e90ff" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="kLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e90ff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#4da6ff" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Grid lines */}
      {yTicks.map((t) => (
        <g key={t}>
          <line
            x1={padLeft}
            y1={yScale(t)}
            x2={w - padRight}
            y2={yScale(t)}
            stroke="#27272a"
            strokeWidth="0.5"
          />
          <text
            x={padLeft - 8}
            y={yScale(t) + 4}
            textAnchor="end"
            className="text-[10px]"
            fill="#6b7280"
          >
            {t}K
          </text>
        </g>
      ))}

      {/* Area fill */}
      <path d={areaPath} fill="url(#kGrad)" />

      {/* Line */}
      <polyline
        points={STRIKEOUT_DATA.map((d, i) => `${xScale(i)},${yScale(d.k)}`).join(" ")}
        fill="none"
        stroke="url(#kLine)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dots */}
      {STRIKEOUT_DATA.map((d, i) => (
        <circle
          key={d.year}
          cx={xScale(i)}
          cy={yScale(d.k)}
          r={d.k === 300 ? 5 : d.k >= 250 ? 3.5 : 2.5}
          fill={d.k === 300 ? "#f0ece4" : d.k >= 250 ? "#4da6ff" : "#1e90ff"}
          stroke={d.k === 300 ? "#1e90ff" : "none"}
          strokeWidth="1.5"
        />
      ))}

      {/* Cy Young markers */}
      {cyYoungYears.map((yr) => {
        const d = STRIKEOUT_DATA.find((d) => d.year === yr)!;
        const i = STRIKEOUT_DATA.indexOf(d);
        return (
          <text
            key={`cy-${yr}`}
            x={xScale(i)}
            y={yScale(d.k) - 12}
            textAnchor="middle"
            fontSize="13"
          >
            🏆
          </text>
        );
      })}

      {/* WS markers */}
      {wsYears.map((yr) => {
        const d = STRIKEOUT_DATA.find((d) => d.year === yr)!;
        const i = STRIKEOUT_DATA.indexOf(d);
        return (
          <text
            key={`ws-${yr}`}
            x={xScale(i)}
            y={yScale(d.k) - 12}
            textAnchor="middle"
            fontSize="11"
          >
            💍
          </text>
        );
      })}

      {/* 300K callout */}
      {threeHundred.map((yr) => {
        const d = STRIKEOUT_DATA.find((d) => d.year === yr)!;
        const i = STRIKEOUT_DATA.indexOf(d);
        return (
          <text
            key={`300-${yr}`}
            x={xScale(i)}
            y={yScale(d.k) - 22}
            textAnchor="middle"
            fill="#f0ece4"
            fontSize="10"
            fontWeight="700"
          >
            300K
          </text>
        );
      })}

      {/* X-axis labels (every other year) */}
      {STRIKEOUT_DATA.filter((_, i) => i % 3 === 0 || i === STRIKEOUT_DATA.length - 1).map((d) => {
        const i = STRIKEOUT_DATA.indexOf(d);
        return (
          <text
            key={d.year}
            x={xScale(i)}
            y={h - 6}
            textAnchor="middle"
            fill="#6b7280"
            fontSize="9"
          >
            {d.year}
          </text>
        );
      })}
    </svg>
  );
}

function WarChart() {
  const w = 600;
  const h = 240;
  const padLeft = 40;
  const padBottom = 28;
  const padTop = 12;
  const padRight = 16;
  const chartW = w - padLeft - padRight;
  const chartH = h - padTop - padBottom;
  const maxWAR = 9;

  const barW = Math.max(6, chartW / WAR_DATA.length - 6);
  const gap = (chartW - barW * WAR_DATA.length) / (WAR_DATA.length - 1);

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full h-auto"
      role="img"
      aria-label="Max Scherzer WAR per season 2013-2023"
    >
      <defs>
        <linearGradient id="warGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8860b" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1e90ff" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="warGradElite" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0ece4" stopOpacity="1" />
          <stop offset="100%" stopColor="#b8860b" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Baseline grid */}
      {[0, 3, 6, 8].map((v) => (
        <g key={v}>
          <line
            x1={padLeft}
            y1={padTop + chartH * (1 - v / maxWAR)}
            x2={w - padRight}
            y2={padTop + chartH * (1 - v / maxWAR)}
            stroke="#27272a"
            strokeWidth={v === 0 ? "0.5" : "0.5"}
            strokeDasharray={v === 0 ? "0" : "4 4"}
          />
          <text
            x={padLeft - 8}
            y={padTop + chartH * (1 - v / maxWAR) + 4}
            textAnchor="end"
            fill="#6b7280"
            fontSize="9"
          >
            {v}
          </text>
        </g>
      ))}

      {/* Bars */}
      {WAR_DATA.map((d, i) => {
        const barH = (d.war / maxWAR) * chartH;
        const x = padLeft + i * (barW + gap);
        const y = padTop + chartH - barH;
        return (
          <g key={d.year}>
            <rect
              x={x}
              y={y}
              width={barW}
              height={barH}
              rx="2"
              fill={d.war >= 7 ? "url(#warGradElite)" : "url(#warGrad)"}
              opacity={d.war >= 7 ? 1 : 0.75}
            />
            {/* Label top bars */}
            {d.war >= 7 && (
              <text
                x={x + barW / 2}
                y={y - 6}
                textAnchor="middle"
                fill="#f0ece4"
                fontSize="9"
                fontWeight="700"
              >
                {d.war}
              </text>
            )}
            {/* X label */}
            <text
              x={x + barW / 2}
              y={h - 6}
              textAnchor="middle"
              fill="#6b7280"
              fontSize="9"
            >
              {d.year}
            </text>
          </g>
        );
      })}

      {/* WAR Legend line */}
      <line
        x1={padLeft}
        y1={padTop + chartH * (1 - 7 / maxWAR)}
        x2={w - padRight}
        y2={padTop + chartH * (1 - 7 / maxWAR)}
        stroke="#f0ece4"
        strokeWidth="0.5"
        strokeDasharray="2 3"
      />
      <text
        x={w - padRight - 4}
        y={padTop + chartH * (1 - 7 / maxWAR) - 4}
        textAnchor="end"
        fill="#f0ece4"
        fontSize="8"
        opacity="0.5"
      >
        7+ WAR elite
      </text>
    </svg>
  );
}

export default function CareerChart() {
  return (
    <section id="charts" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1e90ff]/3 blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#1e90ff] mb-4">
            Visual Story
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Dominance{" "}
            <span className="bg-gradient-to-r from-[#1e90ff] to-[#b8860b] bg-clip-text text-transparent">
              Graphed
            </span>
          </h2>
          <div className="heterochromia-divider w-24 mx-auto mb-6" />
          <p className="text-[#6b7280] max-w-xl mx-auto text-sm leading-relaxed">
            Strikeout artistry and consistent elite value — Max Scherzer's
            career peaks visualized.
          </p>
        </div>

        <div className="space-y-12">
          {/* Strikeout chart */}
          <div className="rounded-xl border border-[#27272a] bg-[#141416]/80 backdrop-blur-sm p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#f0ece4] flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-[#1e90ff]" />
                Strikeouts Per Season
              </h3>
              <div className="flex items-center gap-4 text-[10px] text-[#6b7280]">
                <span>🏆 = Cy Young</span>
                <span>💍 = World Series</span>
              </div>
            </div>
            <StrikeoutChart />
            <p className="text-xs text-[#6b7280] mt-4 text-center">
              From 174 K in his first full season to a career-high 300 K in
              2018 — only the 6th pitcher in MLB history to reach 300 in a
              season since 2000.
            </p>
          </div>

          {/* WAR chart */}
          <div className="rounded-xl border border-[#27272a] bg-[#141416]/80 backdrop-blur-sm p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#f0ece4] mb-4 flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-[#b8860b]" />
              Wins Above Replacement (WAR) — Peak Seasons
            </h3>
            <WarChart />
            <p className="text-xs text-[#6b7280] mt-4 text-center">
              Seven seasons above 5.0 WAR. Four seasons above 7.0 WAR. A
              remarkable peak from 2013 to 2019 — arguably the best 7-year
              stretch by any pitcher of his generation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
