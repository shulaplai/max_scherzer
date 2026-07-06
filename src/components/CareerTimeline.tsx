const MILESTONES = [
  {
    year: "2006",
    team: "Arizona Diamondbacks",
    logo: "ARI",
    title: "The Genesis",
    description:
      "Drafted 11th overall by the Arizona Diamondbacks. Made his MLB debut in 2008, showing flashes of the dominance to come with a blazing fastball and sharp slider.",
    color: "#A72630",
  },
  {
    year: "2010–2014",
    team: "Detroit Tigers",
    logo: "DET",
    title: "The Rise",
    description:
      "Traded to Detroit, Scherzer blossomed into an ace. Won his first Cy Young Award in 2013 with a 21–3 record and 2.90 ERA, striking out 240 batters and leading a fearsome Tigers rotation.",
    color: "#0C2340",
  },
  {
    year: "2015–2020",
    team: "Washington Nationals",
    logo: "WSH",
    title: "The Peak",
    description:
      "Signed a record contract and delivered in historic fashion: two no-hitters (2015), a 20-strikeout game (2016), back-to-back Cy Young Awards (2016–17), and the crowning achievement — leading the Nationals to a 2019 World Series championship.",
    color: "#AB0003",
  },
  {
    year: "2021–2023",
    team: "Dodgers / Mets / Rangers",
    logo: "TEX",
    title: "The Veteran Ring",
    description:
      "Traded to the Dodgers in 2021, signed with the Mets, then dealt to Texas in 2023 — where he helped the Rangers capture their first World Series title in franchise history, earning his second championship ring.",
    color: "#003278",
  },
];

export default function CareerTimeline() {
  return (
    <section
      id="career"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0b] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#1e90ff] mb-4">
            The Journey
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Career{" "}
            <span className="bg-gradient-to-r from-[#1e90ff] to-[#b8860b] bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <div className="heterochromia-divider w-24 mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#27272a] md:-translate-x-px" />

          {MILESTONES.map((m, i) => (
            <div
              key={m.year}
              className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 gap-6 md:gap-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-6 md:left-1/2 top-8 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-[#1e90ff] bg-[#0a0a0b] z-10" />

              {/* Year marker (left side on desktop for even items) */}
              <div
                className={`hidden md:flex flex-1 ${
                  i % 2 === 0 ? "justify-end pr-8" : "justify-start pl-8"
                }`}
              >
                <span
                  className="text-3xl font-bold tracking-tight"
                  style={{ color: m.color }}
                >
                  {m.year}
                </span>
              </div>

              {/* Card */}
              <div className="flex-1 pl-16 md:pl-0">
                {/* Year visible on mobile */}
                <span
                  className="md:hidden text-sm font-bold tracking-wider mb-2 block"
                  style={{ color: m.color }}
                >
                  {m.year}
                </span>

                <div className="pitch-card rounded-xl border border-[#27272a] bg-[#141416]/80 backdrop-blur-sm p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-xs font-bold text-white"
                      style={{ backgroundColor: m.color }}
                    >
                      {m.logo}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-[#f0ece4]">
                        {m.title}
                      </h3>
                      <p className="text-sm text-[#6b7280]">{m.team}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
