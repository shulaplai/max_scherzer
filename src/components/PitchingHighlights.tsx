"use client";

import { useState, useEffect, useCallback } from "react";

const PITCHING_FRAMES = [
  {
    label: "The Windup",
    description:
      "Max starts his delivery with a controlled, deliberate motion. His hands come together above his head as he rocks back, building kinetic energy from the ground up. Every movement is precise and repeatable.",
  },
  {
    label: "The Leg Kick",
    description:
      "His left leg rises high — knee to chest — as he balances on his right leg. This is where his elite core strength shows. The high leg kick generates power and hides the ball from the hitter's view until the last possible moment.",
  },
  {
    label: "The Drive",
    description:
      "Driving off the rubber with explosive lower-body force, Scherzer's hips rotate open while his arm stays back — creating the elite hip-shoulder separation that generates his velocity. His stride length is among the longest in baseball.",
  },
  {
    label: "Arm Slot",
    description:
      "At release, his arm comes from a low three-quarters angle — roughly 5 o'clock. Combined with elite extension (release point ~6.8 feet from rubber), the ball appears to jump at hitters. This creates the 'rising fastball' illusion.",
  },
  {
    label: "Release",
    description:
      "The moment of truth. Scherzer's fingers roll off the ball with elite backspin. His fastball spin rate (2,490+ RPM) is in the 95th percentile. His slider spin rate (2,680+ RPM) is in the 98th percentile. The combination is devastating.",
  },
  {
    label: "The Follow-Through",
    description:
      "His body finishes low and balanced — glove tucked, back leg swinging around to fielding position. The violent-yet-controlled finish puts him in perfect fielding position. Then the stalk begins — pacing the mound, muttering, preparing for the next pitch.",
  },
];

const GIF_LINKS = [
  {
    label: "Fastball Slow-Motion",
    url: "https://i.makeagif.com/media/8-17-2015/hB2Vp5.gif",
    alt: "Max Scherzer pitching slow motion",
    color: "#1e90ff",
  },
  {
    label: "Slider — The Put-Away",
    url: "https://i.makeagif.com/media/5-12-2016/9QKdVt.gif",
    alt: "Max Scherzer slider strikeout",
    color: "#b8860b",
  },
];

export default function PitchingHighlights() {
  const [activeFrame, setActiveFrame] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const advance = useCallback(() => {
    setActiveFrame((prev) => (prev + 1) % PITCHING_FRAMES.length);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;
    const interval = setInterval(advance, 2500);
    return () => clearInterval(interval);
  }, [isAnimating, advance]);

  return (
    <section
      id="pitching"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a1420]/20 to-[#0a0a0b]" />

      {/* PDF page textured background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "url('/images/acion-1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#1e90ff] mb-4">
            The Delivery
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Mad Max{" "}
            <span className="bg-gradient-to-r from-[#1e90ff] to-[#b8860b] bg-clip-text text-transparent">
              in Motion
            </span>
          </h2>
          <div className="heterochromia-divider w-24 mx-auto mb-6" />
          <p className="text-[#6b7280] max-w-xl mx-auto text-sm leading-relaxed">
            Every pitch is a performance — the delivery, the mechanics, the
            intensity. Watch Max Scherzer's legendary motion broken down
            frame by frame.
          </p>
        </div>

        {/* Animated pitching sequence */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Animated figure */}
          <div className="rounded-xl border border-[#27272a] bg-[#141416]/80 backdrop-blur-sm p-8 flex flex-col items-center justify-center min-h-[380px] relative overflow-hidden">
            {/* Rotating accent ring */}
            <div
              className={`absolute w-[240px] h-[240px] rounded-full border border-[#1e90ff]/10 transition-all duration-1000 ${
                isAnimating ? "animate-spin" : ""
              }`}
              style={{ animationDuration: "12s" }}
            />

            {/* Pitcher figure - animated */}
            <div className="relative z-10">
              <svg
                width="200"
                height="260"
                viewBox="0 0 200 260"
                className="transition-all duration-500"
              >
                {/* Mound */}
                <ellipse cx="100" cy="240" rx="60" ry="10" fill="#1a1a1a" />

                {/* Body — changes with frame */}
                <g className="transition-all duration-500">
                  {/* Head */}
                  <circle
                    cx={activeFrame < 2 ? 90 : activeFrame < 4 ? 70 : 60}
                    cy={activeFrame < 2 ? 60 : activeFrame < 4 ? 65 : 55}
                    r="14"
                    fill="#f0ece4"
                    stroke="#1e90ff"
                    strokeWidth="1.5"
                  />
                  {/* Hat brim */}
                  <ellipse
                    cx={activeFrame < 2 ? 90 : activeFrame < 4 ? 70 : 60}
                    cy={activeFrame < 2 ? 48 : activeFrame < 4 ? 53 : 43}
                    rx="17"
                    ry="3"
                    fill="#0a0a0b"
                  />

                  {/* Torso */}
                  <line
                    x1={activeFrame < 2 ? 90 : activeFrame < 4 ? 70 : 60}
                    y1={74}
                    x2={activeFrame < 2 ? 95 : activeFrame < 4 ? 80 : 70}
                    y2={140}
                    stroke="#f0ece4"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />

                  {/* Left arm (non-throwing) */}
                  <line
                    x1={90}
                    y1={90}
                    x2={activeFrame < 2 ? 70 : activeFrame < 4 ? 55 : 45}
                    y2={activeFrame < 2 ? 120 : activeFrame < 4 ? 110 : 100}
                    stroke="#f0ece4"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  {/* Right arm (throwing) */}
                  <line
                    x1={90}
                    y1={90}
                    x2={
                      activeFrame < 2
                        ? 110
                        : activeFrame < 4
                          ? 140
                          : 150
                    }
                    y2={
                      activeFrame < 2
                        ? 80
                        : activeFrame < 4
                          ? 70
                          : 65
                    }
                    stroke="#f0ece4"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  {/* Ball */}
                  <circle
                    cx={
                      activeFrame < 2
                        ? 112
                        : activeFrame < 4
                          ? 144
                          : 154
                    }
                    cy={
                      activeFrame < 2
                        ? 78
                        : activeFrame < 4
                          ? 66
                          : 60
                    }
                    r="5"
                    fill="#f0ece4"
                    stroke="#b8860b"
                    strokeWidth="1"
                  />
                  {/* Ball seams */}
                  <path
                    d={
                      activeFrame < 2
                        ? "M109 76 Q112 73 115 76 M109 80 Q112 83 115 80"
                        : activeFrame < 4
                          ? "M141 64 Q144 61 147 64 M141 68 Q144 71 147 68"
                          : "M151 58 Q154 55 157 58 M151 62 Q154 65 157 62"
                    }
                    stroke="#b8860b"
                    strokeWidth="0.5"
                    fill="none"
                  />

                  {/* Left leg */}
                  <line
                    x1={95}
                    y1={140}
                    x2={activeFrame < 2 ? 90 : activeFrame < 4 ? 75 : 65}
                    y2={activeFrame < 2 ? 190 : activeFrame < 4 ? 185 : 175}
                    stroke="#f0ece4"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />

                  {/* Right leg */}
                  <line
                    x1={95}
                    y1={140}
                    x2={activeFrame < 2 ? 105 : activeFrame < 4 ? 115 : 120}
                    y2={210}
                    stroke="#f0ece4"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </g>

                {/* Motion lines when releasing */}
                {activeFrame >= 3 && activeFrame <= 4 && (
                  <>
                    <line
                      x1={155}
                      y1={55}
                      x2={175}
                      y2={50}
                      stroke="#1e90ff"
                      strokeWidth="1"
                      opacity="0.4"
                    />
                    <line
                      x1={157}
                      y1={60}
                      x2={180}
                      y2={56}
                      stroke="#1e90ff"
                      strokeWidth="1"
                      opacity="0.3"
                    />
                    <line
                      x1={155}
                      y1={65}
                      x2={172}
                      y2={63}
                      stroke="#1e90ff"
                      strokeWidth="1"
                      opacity="0.2"
                    />
                  </>
                )}
              </svg>
            </div>

            {/* Frame label */}
            <div className="text-center mt-4">
              <p className="text-sm font-bold text-[#1e90ff]">
                Phase {activeFrame + 1} — {PITCHING_FRAMES[activeFrame].label}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={() => setIsAnimating(!isAnimating)}
                className="px-4 py-2 rounded-lg bg-[#1e90ff]/10 border border-[#1e90ff]/20 text-sm font-medium text-[#1e90ff] hover:bg-[#1e90ff]/20 transition-colors"
              >
                {isAnimating ? "⏸ Pause" : "▶ Play Sequence"}
              </button>
              <button
                onClick={advance}
                className="px-4 py-2 rounded-lg bg-[#141416] border border-[#27272a] text-sm font-medium text-[#a1a1aa] hover:text-[#f0ece4] hover:border-[#4da6ff]/30 transition-colors"
              >
                ⏭ Next Phase
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex items-center gap-2 mt-4">
              {PITCHING_FRAMES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveFrame(i);
                    setIsAnimating(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === activeFrame
                      ? "bg-[#1e90ff] w-4"
                      : "bg-[#27272a] hover:bg-[#6b7280]"
                  }`}
                  aria-label={`Go to frame ${i + 1}: ${PITCHING_FRAMES[i].label}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Description panel */}
          <div className="rounded-xl border border-[#27272a] bg-[#141416]/80 backdrop-blur-sm p-8 flex flex-col justify-center">
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1e90ff]/10 border border-[#1e90ff]/20 text-[10px] font-medium text-[#1e90ff] uppercase tracking-wider">
                <span className="w-1 h-1 rounded-full bg-[#1e90ff]" />
                Phase {activeFrame + 1} of {PITCHING_FRAMES.length}
              </span>
            </div>

            <p className="text-[#a1a1aa] leading-relaxed text-sm mb-6">
              {PITCHING_FRAMES[activeFrame].description}
            </p>

            {/* Progress bar */}
            <div className="h-1 bg-[#27272a] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#1e90ff] to-[#b8860b] rounded-full transition-all duration-500 ease-in-out"
                style={{
                  width: `${
                    ((activeFrame + 1) / PITCHING_FRAMES.length) * 100
                  }%`,
                }}
              />
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-[#27272a]" />
              <p className="text-[10px] text-[#6b7280] uppercase tracking-widest whitespace-nowrap">
                Step {activeFrame + 1}/{PITCHING_FRAMES.length}
              </p>
              <div className="flex-1 h-px bg-[#27272a]" />
            </div>
          </div>
        </div>

        {/* GIF preview section */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#f0ece4] mb-6 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-[#b8860b]" />
            Watch His Best Pitches
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {GIF_LINKS.map((gif) => (
              <div
                key={gif.label}
                className="rounded-xl border border-[#27272a] bg-[#141416]/80 overflow-hidden group"
              >
                <div className="aspect-video relative bg-[#0a0a0b] flex items-center justify-center">
                  {/* Themed placeholder with motion indicator */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Animated pitch dot */}
                    <div className="relative w-16 h-16 mb-4">
                      <div
                        className="absolute inset-0 rounded-full animate-ping opacity-20"
                        style={{
                          backgroundColor: gif.color,
                          animationDuration: "1.5s",
                        }}
                      />
                      <div
                        className="absolute inset-2 rounded-full"
                        style={{ backgroundColor: gif.color }}
                      />
                    </div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: gif.color }}
                    >
                      {gif.label}
                    </p>
                    <p className="text-[10px] text-[#6b7280] mt-1">
                      ⚡ Pitching Clip
                    </p>

                    {/* Animated spin rate indicator */}
                    <div className="mt-4 flex items-center gap-3">
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        className="animate-spin"
                        style={{ animationDuration: "3s" }}
                      >
                        <circle
                          cx="30"
                          cy="30"
                          r="25"
                          fill="none"
                          stroke={gif.color}
                          strokeWidth="1.5"
                          strokeDasharray="8 4"
                          opacity="0.4"
                        />
                        <circle
                          cx="30"
                          cy="30"
                          r="5"
                          fill={gif.color}
                          opacity="0.8"
                        />
                      </svg>
                      <div className="text-left">
                        <p className="text-xs text-[#6b7280]">Spin Rate</p>
                        <p className="text-lg font-bold text-[#f0ece4] stat-number">
                          2,490+
                        </p>
                        <p className="text-[9px] text-[#6b7280]">RPM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-[#27272a]">
                  <p className="text-sm font-semibold text-[#f0ece4] group-hover:text-white transition-colors">
                    {gif.label}
                  </p>
                  <p className="text-xs text-[#6b7280] mt-1">
                    {gif.label.includes("Slider")
                      ? "Late-breaking horizontal movement — nearly unhittable"
                      : "Elite spin efficiency creates the 'rising' illusion"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quotable */}
        <div className="text-center">
          <blockquote className="text-sm text-[#6b7280] italic max-w-lg mx-auto leading-relaxed">
            "He's one of the greatest competitors I've ever been around. When he
            takes the mound, there's an intensity that's unmatched. You can see
            it in his eyes — he wants to destroy you."
          </blockquote>
          <p className="text-xs text-[#a1a1aa] mt-3">
            — Former teammate on Max Scherzer
          </p>
        </div>
      </div>
    </section>
  );
}
