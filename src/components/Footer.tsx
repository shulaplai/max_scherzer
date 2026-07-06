export default function Footer() {
  return (
    <footer className="border-t border-[#27272a] bg-[#0a0a0b]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-[#1e90ff]">31</span>{" "}
              <span className="text-[#f0ece4]">SCHERZER</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs uppercase tracking-wider text-[#6b7280]">
            <a href="#hero" className="hover:text-[#f0ece4] transition-colors">
              Home
            </a>
            <a
              href="#career"
              className="hover:text-[#f0ece4] transition-colors"
            >
              Career
            </a>
            <a
              href="#arsenal"
              className="hover:text-[#f0ece4] transition-colors"
            >
              Arsenal
            </a>
            <a href="#story" className="hover:text-[#f0ece4] transition-colors">
              Story
            </a>
          </div>

          {/* Heterochromia dot */}
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1e90ff]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#b8860b]" />
          </div>
        </div>

        <div className="heterochromia-divider w-full mt-8 opacity-30" />

        <p className="text-center text-[10px] text-[#6b7280] mt-6 uppercase tracking-widest">
          A tribute to one of baseball's greatest competitors. Not affiliated
          with Major League Baseball.
        </p>
      </div>
    </footer>
  );
}
