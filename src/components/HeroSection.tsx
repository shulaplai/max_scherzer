import StatCard from "./StatCard";

const STATS = [
  { value: "3", label: "Cy Young Awards", suffix: "x" },
  { value: "2", label: "World Series Rings", suffix: "x" },
  { value: "3,400+", label: "Career Strikeouts", suffix: "K" },
  { value: "2", label: "No-Hitters", suffix: "x" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a0a0b] to-[#0a0a0b]" />

      {/* Radial glow behind hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1e90ff]/5 blur-[120px]" />

      {/* Heterochromia accent ring */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border-2 border-transparent bg-gradient-to-r from-[#1e90ff]/30 to-[#b8860b]/30 blur-sm opacity-20" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#27272a] bg-[#141416]/80 text-xs font-medium uppercase tracking-widest text-[#a1a1aa] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#1e90ff] animate-pulse" />
          Future Hall of Famer
          <span className="w-2 h-2 rounded-full bg-[#b8860b] animate-pulse" />
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6">
          <span className="text-[#f0ece4]">MAX</span>{" "}
          <span className="bg-gradient-to-r from-[#1e90ff] to-[#4da6ff] bg-clip-text text-transparent">
            SCHERZER
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-[#a1a1aa] max-w-2xl mx-auto mb-4 font-light">
          The Legend of a Fierce Competitor
        </p>

        <div className="heterochromia-divider w-32 mx-auto mb-10" />

        <p className="text-sm sm:text-base text-[#6b7280] max-w-xl mx-auto leading-relaxed">
          Three-time Cy Young Award winner. Two-time World Series Champion.
          One of the most dominant and intense pitchers baseball has ever seen.
        </p>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-3xl mx-auto">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Scroll indicator */}
        <a
          href="#career"
          className="inline-flex flex-col items-center gap-2 mt-16 text-[#6b7280] hover:text-[#f0ece4] transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="animate-bounce"
          >
            <path d="M5 7l5 5 5-5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
