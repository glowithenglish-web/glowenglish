export default function Testimonials() {
  const benefits = [
    {
      emoji: "🚀",
      title: "Learn at Their Own Pace",
      description:
        "No pressure, no deadlines. Kids can revisit materials anytime and learn comfortably at home.",
    },
    {
      emoji: "🧠",
      title: "Builds Strong Foundation",
      description:
        "From basic vocabulary to grammar patterns — materials are structured to build lasting English skills.",
    },
    {
      emoji: "🎯",
      title: "Designed by Educators",
      description:
        "Every PPT and video is crafted by experienced English teachers who understand how kids learn best.",
    },
    {
      emoji: "👨‍👩‍👧",
      title: "Perfect for Parent & Child",
      description:
        "Materials are easy enough for parents to guide their children through, even without English expertise.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-light/20 to-warm-white" />
      <div className="absolute top-20 right-10 text-3xl opacity-20 animate-float">
        💪
      </div>
      <div className="absolute bottom-20 left-10 text-3xl opacity-20 animate-float-slow">
        🌟
      </div>
      <div className="absolute top-1/3 left-[5%] w-48 h-48 bg-gold-light/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-[5%] w-56 h-56 bg-pink-light/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-pink-dark bg-pink-light px-4 py-1.5 rounded-full mb-4">
            Why Parents Love It
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "var(--font-baloo)" }}
          >
            Give Your Child a{" "}
            <span className="bg-gradient-to-r from-pink-dark to-gold bg-clip-text text-transparent">
              Head Start
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            English opens doors to bigger opportunities. Start early, start fun,
            start with GLOW.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-pink-light/20 flex gap-5"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-pink-light to-gold-light rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                {benefit.emoji}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="bg-gradient-to-r from-pink-light via-white to-gold-light rounded-3xl p-8 md:p-12 text-center border border-pink-light/30 shadow-sm">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div>
              <div className="text-3xl mb-2">📊</div>
              <p className="text-2xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-baloo)" }}>10+</p>
              <p className="text-sm text-foreground/50">Ready-to-use PPTs</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🎬</div>
              <p className="text-2xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-baloo)" }}>5+</p>
              <p className="text-sm text-foreground/50">Video Lessons</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🔤</div>
              <p className="text-2xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-baloo)" }}>200+</p>
              <p className="text-sm text-foreground/50">Vocabulary Words</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🆓</div>
              <p className="text-2xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-baloo)" }}>100%</p>
              <p className="text-sm text-foreground/50">Free Forever</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
