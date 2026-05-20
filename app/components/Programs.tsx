import Link from "next/link";

export default function Programs() {
  const materials = [
    {
      icon: "🔤",
      title: "Vocabulary PPT",
      description:
        "Themed vocabulary presentations — animals, colors, food, family, school, body parts, and more. Each slide includes images and example sentences.",
      color: "from-pink-light to-pink",
      badge: "Popular",
    },
    {
      icon: "📐",
      title: "Basic Grammar PPT",
      description:
        "Simple, visual grammar explanations — from singular/plural, simple present tense, pronouns, to prepositions. Perfect for beginners.",
      color: "from-pastel-blue to-pastel-blue/50",
      badge: "Essential",
    },
    {
      icon: "🎬",
      title: "Pronunciation Videos A–Z",
      description:
        "Video guides on how to pronounce letters, words, and sentences correctly. Kids can pause, repeat, and practice as many times as they want.",
      color: "from-gold-light to-gold",
      badge: "Video",
    },
    {
      icon: "🗣️",
      title: "Daily Vocabulary Videos",
      description:
        "Short videos featuring commonly used words — greetings, numbers, days, months. Complete with correct pronunciation guides.",
      color: "from-pastel-green to-pastel-green/50",
      badge: "Video",
    },
    {
      icon: "📊",
      title: "Simple Sentences PPT",
      description:
        "Presentations on how to build simple English sentences — from self-introduction to describing daily activities.",
      color: "from-pastel-purple to-pastel-purple/50",
      badge: null,
    },
    {
      icon: "🎯",
      title: "Quiz & Practice PPT",
      description:
        "Interactive practice slides that kids can work on alone or with parents — fill in the blank, matching, and multiple choice.",
      color: "from-gold-light to-pink-light",
      badge: null,
    },
  ];

  return (
    <section
      id="programs"
      className="py-20 md:py-28 bg-gradient-to-b from-warm-white to-beige-light relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-2xl opacity-30 animate-float">📖</div>
      <div className="absolute bottom-10 right-10 text-2xl opacity-30 animate-float-slow">✨</div>
      <div className="absolute top-1/4 right-[5%] text-xl opacity-20 animate-bounce-gentle">🎯</div>
      <div className="absolute bottom-1/4 left-[5%] text-xl opacity-20 animate-float">📚</div>
      <div className="absolute top-[60%] right-[15%] text-lg opacity-15 animate-float-slow">🌈</div>

      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-light/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold-light/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-pastel-blue/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-gold bg-gold-light px-4 py-1.5 rounded-full mb-4">
            What You Get
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "var(--font-baloo)" }}
          >
            Everything{" "}
            <span className="bg-gradient-to-r from-gold to-pink-dark bg-clip-text text-transparent">
              Inside the Drive
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            All these materials are available in Google Drive after you sign up —
            just open, learn, and practice together with your child.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {materials.map((material, index) => (
            <Link
              href="/daftar"
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-pink-light/50 overflow-hidden block"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${material.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Badge */}
              {material.badge && (
                <span className="absolute top-4 right-4 text-xs font-bold bg-gold-light text-foreground/80 px-3 py-1 rounded-full">
                  {material.badge}
                </span>
              )}

              <div className="relative">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${material.color} rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm`}
                >
                  {material.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {material.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed text-sm">
                  {material.description}
                </p>

                {/* CTA hint */}
                <div className="mt-4 flex items-center gap-1 text-pink-dark font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Sign up to access</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
