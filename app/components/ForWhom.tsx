import Link from "next/link";

export default function ForWhom() {
  const grades = [
    {
      grade: "Grade 1",
      age: "6–7 years",
      focus: "Alphabet, colors, numbers, animals, basic greetings",
      emoji: "🌱",
      color: "from-pink-light to-pink/20",
    },
    {
      grade: "Grade 2",
      age: "7–8 years",
      focus: "Family, food, body parts, simple sentences, days & months",
      emoji: "🌿",
      color: "from-gold-light to-gold/20",
    },
    {
      grade: "Grade 3",
      age: "8–9 years",
      focus: "Hobbies, places, simple present tense, adjectives, questions",
      emoji: "🌳",
      color: "from-pastel-blue to-pastel-blue/20",
    },
    {
      grade: "Grade 4",
      age: "9–10 years",
      focus: "Past tense, storytelling, longer sentences, reading comprehension",
      emoji: "🌟",
      color: "from-pastel-green to-pastel-green/20",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-light/10 to-beige-light" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gold-light/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-pink-light/15 rounded-full blur-3xl" />
      <div className="absolute top-8 right-12 text-2xl opacity-20 animate-float">🎒</div>
      <div className="absolute bottom-8 left-12 text-2xl opacity-20 animate-float-slow">📏</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-gold bg-gold-light px-4 py-1.5 rounded-full mb-4">
            For Every Level
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "var(--font-baloo)" }}
          >
            Materials for{" "}
            <span className="bg-gradient-to-r from-gold to-pink-dark bg-clip-text text-transparent">
              Every Grade
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Whether your child is just starting or already knows some basics,
            there&apos;s something for every level.
          </p>
        </div>

        {/* Grade Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {grades.map((item, index) => (
            <Link
              href="/daftar"
              key={index}
              className={`group bg-gradient-to-br ${item.color} rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 block`}
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3
                className="text-xl font-bold text-foreground mb-1"
                style={{ fontFamily: "var(--font-baloo)" }}
              >
                {item.grade}
              </h3>
              <p className="text-xs text-foreground/50 mb-3">{item.age}</p>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {item.focus}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
