"use client";

const PHOTOS = [
  {
    src: "/images/action-1.jpeg",
    alt: "Max Scherzer in action on the mound",
    caption: "Delivering Heat — Game Day",
    year: "Mad Max",
    fallbackBg: "#1a3a5c",
  },
  {
    src: "/images/action-2.jpeg",
    alt: "Max Scherzer intense game face",
    caption: "The Windup — Pure Intensity",
    year: "Focus",
    fallbackBg: "#2a1a3c",
  },
  {
    src: "/images/action-3.jpeg",
    alt: "Max Scherzer pitching delivery",
    caption: "Game Face — Mad Max",
    year: "Dominance",
    fallbackBg: "#3a1a1a",
  },
  {
    src: "/images/action-4.webp",
    alt: "Max Scherzer on the field",
    caption: "The Ace — Leading the Staff",
    year: "Legend",
    fallbackBg: "#1a2a3c",
  },
];

const AWARDS = [
  { emoji: "🏆", count: "3x", label: "Cy Young Awards", years: "2013, 2016, 2017" },
  { emoji: "💍", count: "2x", label: "World Series Champion", years: "2019, 2023" },
  { emoji: "⭐", count: "8x", label: "MLB All-Star", years: "2013–2019, 2021" },
  { emoji: "🔥", count: "2x", label: "No-Hitters", years: "June 20 & Oct 3, 2015" },
  { emoji: "⚾", count: "20K", label: "Strikeout Game", years: "May 11, 2016" },
  { emoji: "📊", count: "5x", label: "K/9 Title", years: "2012, 2016–2019" },
];

export default function PhotoGallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#b8860b]/3 blur-[150px]" />

      {/* Subtle background image */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "url('/images/action-3.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b8860b] mb-4">
            In Action
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Max Scherzer{" "}
            <span className="bg-gradient-to-r from-[#1e90ff] to-[#b8860b] bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <div className="heterochromia-divider w-24 mx-auto mb-6" />
          <p className="text-[#6b7280] max-w-xl mx-auto text-sm leading-relaxed">
            One of baseball's most recognizable and intense figures — captured
            in his element.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {PHOTOS.map((photo) => (
            <div
              key={photo.alt}
              className="group relative rounded-xl overflow-hidden border border-[#27272a] bg-[#141416]"
            >
              {/* Fallback background */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: photo.fallbackBg }}
              />

              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="relative w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Hide broken image, show fallback with text
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-semibold text-[#f0ece4]">
                  {photo.caption}
                </p>
                <p className="text-xs text-[#6b7280]">{photo.year}</p>
              </div>

              {/* Year badge */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#0a0a0b]/80 backdrop-blur-sm border border-[#27272a] text-xs font-medium text-[#1e90ff]">
                {photo.year}
              </div>
            </div>
          ))}
        </div>

        {/* Awards showcase */}
        <div>
          <h3 className="text-lg font-bold text-[#f0ece4] mb-6 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-[#b8860b]" />
            Trophy Case
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {AWARDS.map((award) => (
              <div
                key={award.label}
                className="rounded-xl border border-[#27272a] bg-[#141416]/60 p-4 text-center group hover:border-[#b8860b]/20 transition-colors"
              >
                <p className="text-2xl mb-1">{award.emoji}</p>
                <p className="text-lg font-bold text-[#f0ece4] stat-number">
                  {award.count}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-[#6b7280] mb-1">
                  {award.label}
                </p>
                <p className="text-[10px] text-[#6b7280]/60">{award.years}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
