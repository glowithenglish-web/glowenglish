export default function Stats() {
  const stats = [
    { number: "10+", label: "Learning Materials", emoji: "📂" },
    { number: "5+", label: "Video Lessons", emoji: "🎬" },
    { number: "200+", label: "Vocabulary Words", emoji: "🔤" },
    { number: "100%", label: "Free Access", emoji: "🆓" },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-dark via-pink to-gold" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floating elements */}
      <div className="absolute top-4 left-[10%] text-2xl opacity-30 animate-float">
        ✨
      </div>
      <div className="absolute bottom-4 right-[10%] text-2xl opacity-30 animate-float-slow">
        🌟
      </div>
      <div className="absolute top-1/2 left-[5%] text-xl opacity-20 animate-bounce-gentle">
        ⭐
      </div>
      <div className="absolute top-1/2 right-[5%] text-xl opacity-20 animate-float">
        💫
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div
                className="text-3xl sm:text-4xl font-extrabold text-white mb-1"
                style={{ fontFamily: "var(--font-baloo)" }}
              >
                {stat.number}
              </div>
              <div className="text-white/80 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
