const PITCHES = [
  {
    name: "Four-Seam Fastball",
    velo: "94–96 mph",
    spin: "2,450+ RPM",
    usage: "~48%",
    description:
      "Scherzer's primary weapon. His elite spin rate and low release point create an optical illusion — the ball appears to rise, making 95 mph look like triple digits. Hitters describe it as an 'invisible fastball' that jumps the last 10 feet.",
    stats: [
      { label: "Whiff Rate", value: "28%" },
      { label: "Vertical Break", value: "19.2 in" },
    ],
    gradient: "from-[#1e90ff] to-[#4da6ff]",
  },
  {
    name: "Slider",
    velo: "85–88 mph",
    spin: "2,600+ RPM",
    usage: "~22%",
    description:
      "The put-away pitch. A devastating breaking ball with late, sharp horizontal movement that dives away from right-handed hitters. When tunneled with his fastball, batters have milliseconds to decide — and they usually guess wrong.",
    stats: [
      { label: "Whiff Rate", value: "38%" },
      { label: "Horizontal Break", value: "8.5 in" },
    ],
    gradient: "from-[#b8860b] to-[#daa520]",
  },
  {
    name: "Changeup",
    velo: "83–85 mph",
    spin: "1,800 RPM",
    usage: "~15%",
    description:
      "A weapon against left-handed hitters. Scherzer's changeup mirrors his fastball arm speed but arrives 10 mph slower with late sinking action. The identical release makes it nearly impossible to identify until it's too late.",
    stats: [
      { label: "Whiff Rate", value: "34%" },
      { label: "vs LHB", value: ".198 BA" },
    ],
    gradient: "from-[#22c55e] to-[#4ade80]",
  },
  {
    name: "Curveball",
    velo: "78–81 mph",
    spin: "2,800+ RPM",
    usage: "~10%",
    description:
      "The showstopper. A 12-6 hammer with elite spin that drops off the table. Scherzer uses it sparingly as a surprise offering — a knee-buckling curve that freezes hitters looking for the fastball up in the zone.",
    stats: [
      { label: "Whiff Rate", value: "36%" },
      { label: "Vertical Drop", value: "58 in" },
    ],
    gradient: "from-[#a855f7] to-[#c084fc]",
  },
];

export default function PitchArsenal() {
  return (
    <section
      id="arsenal"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#b8860b]/3 blur-[150px]" />

      {/* Subtle background image */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "url('/images/avatar.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            Inside the Arsenal
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            His Best{" "}
            <span className="bg-gradient-to-r from-[#1e90ff] to-[#b8860b] bg-clip-text text-transparent">
              Pitches
            </span>
          </h2>
          <div className="heterochromia-divider w-24 mx-auto mb-6" />
          <p className="text-[#6b7280] max-w-xl mx-auto text-sm leading-relaxed">
            Four elite offerings, one devastating plan. Scherzer's pitch arsenal
            is built on deception — every pitch looks like a fastball until it
            isn't.
          </p>
        </div>

        {/* Pitch cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PITCHES.map((pitch) => (
            <div
              key={pitch.name}
              className="pitch-card rounded-xl border border-[#27272a] bg-[#141416]/80 backdrop-blur-sm overflow-hidden group"
            >
              {/* Pitch header with gradient accent */}
              <div
                className={`h-1.5 bg-gradient-to-r ${pitch.gradient}`}
              />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#f0ece4] group-hover:text-white transition-colors">
                      {pitch.name}
                    </h3>
                    <div className="flex flex-wrap gap-3 mt-2 text-xs text-[#6b7280]">
                      <span className="inline-flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1e90ff]" />
                        {pitch.velo}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b]" />
                        {pitch.spin}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6b7280]" />
                        Usage: {pitch.usage}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#a1a1aa] leading-relaxed mb-5">
                  {pitch.description}
                </p>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-3">
                  {pitch.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg bg-[#0a0a0b]/60 border border-[#27272a] px-4 py-3"
                    >
                      <p className="stat-number text-xl font-bold text-[#f0ece4]">
                        {stat.value}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-[#6b7280]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pitch tunneling note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#6b7280] italic">
            "He tunnels his fastball and slider so well — they look identical
            for 40 feet, then one goes straight and the other disappears."{" "}
            <span className="text-[#a1a1aa]">— MLB Hitting Coach</span>
          </p>
        </div>
      </div>
    </section>
  );
}
