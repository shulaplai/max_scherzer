const STORIES = [
  {
    title: "The Alter Ego",
    subtitle: "Mad Max Unleashed",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 9h.01M15 9h.01" />
      </svg>
    ),
    content:
      "When Max Scherzer steps on the mound, he transforms. He's not just a pitcher — he becomes 'Mad Max.' He stalks around the infield between innings, talks to himself mid-at-bat, and growls at anyone who dares approach the mound. Managers have learned: don't try to take the ball from him. He'll wave you off, turn his back, and dare you to come get it. It's not theatrics — it's pure, unrelenting competitive fire.",
    color: "#1e90ff",
  },
  {
    title: "Broken Nose, Unbroken Spirit",
    subtitle: "June 19, 2019",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    content:
      "During batting practice before a game, a ball struck Scherzer directly in the face, breaking his nose and leaving him bloodied. Most pitchers would have scratched from their next start. Scherzer? He pitched the next day with a black eye and a bruised face, striking out 10 Phillies over 7 scoreless innings. 'I have two black eyes now,' he said afterward. 'One I was born with. The other I earned.' The moment became legend — the ultimate embodiment of his toughness.",
    color: "#b8860b",
  },
  {
    title: "The 20-K Masterpiece",
    subtitle: "May 11, 2016",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    content:
      "On a Wednesday night at Nationals Park, Scherzer tied the MLB record with 20 strikeouts in a single nine-inning game against his former team, the Detroit Tigers. He didn't walk a single batter. He threw 119 pitches — 96 of them for strikes. The final strikeout came on a slider that dove under James McCann's bat. Only five pitchers in baseball history have ever struck out 20 in a 9-inning game. Mad Max is one of them.",
    color: "#1e90ff",
  },
  {
    title: "World Series Redemption",
    subtitle: "October 2019",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    content:
      "Game 7 of the 2019 World Series. Scherzer was supposed to start but woke up with severe neck spasms so immobilizing that his wife had to help him dress. He received treatment all day. Hours before game time, he told manager Dave Martinez: 'I'm pitching.' Fighting through visible pain and diminished velocity, Scherzer gutted out 5 innings against the Astros — keeping the Nationals in the game they would eventually win for their first championship. It wasn't his best start. It may have been his bravest.",
    color: "#b8860b",
  },
];

export default function StorySection() {
  return (
    <section
      id="story"
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#1e90ff]/3 blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#1e90ff] mb-4">
            The Legend
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Mad Max{" "}
            <span className="bg-gradient-to-r from-[#1e90ff] to-[#b8860b] bg-clip-text text-transparent">
              Lore
            </span>
          </h2>
          <div className="heterochromia-divider w-24 mx-auto mb-6" />
          <p className="text-[#6b7280] max-w-xl mx-auto text-sm leading-relaxed">
            Beyond the numbers and the accolades, what makes Max Scherzer
            special is the man himself — his intensity, resilience, and the
            stories that define his legend.
          </p>
        </div>

        {/* Story cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STORIES.map((story) => (
            <div
              key={story.title}
              className="pitch-card rounded-xl border border-[#27272a] bg-[#141416]/80 backdrop-blur-sm p-6 group"
            >
              {/* Icon + color accent */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${story.color}15`,
                    color: story.color,
                  }}
                >
                  {story.icon}
                </div>
                <div>
                  <p
                    className="text-xs font-medium uppercase tracking-wider mb-1"
                    style={{ color: story.color }}
                  >
                    {story.subtitle}
                  </p>
                  <h3 className="text-lg font-bold text-[#f0ece4] group-hover:text-white transition-colors">
                    {story.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                {story.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
