import Link from "next/link";

export default function About() {
  const features = [
    {
      emoji: "📊",
      title: "Engaging Presentations",
      description:
        "Colorful, easy-to-understand PPT materials — learning feels like watching a fun story unfold.",
    },
    {
      emoji: "🔤",
      title: "Complete Vocabulary",
      description:
        "Themed vocabulary collections neatly organized — from everyday words to school-related terms.",
    },
    {
      emoji: "📐",
      title: "Simple Grammar",
      description:
        "Basic grammar explanations that are simple and fun, perfect for grades 1–4 beginners.",
    },
    {
      emoji: "🎬",
      title: "Pronunciation Videos",
      description:
        "Video guides on how to pronounce English words correctly — kids can watch, repeat, and practice on their own.",
    },
    {
      emoji: "📱",
      title: "Access Anytime",
      description:
        "All materials are stored in Google Drive — accessible from phone, tablet, or laptop whenever needed.",
    },
    {
      emoji: "🆓",
      title: "100% Free",
      description:
        "Just sign up with your email and the materials are sent automatically. No cost, no complicated requirements.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-light/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-light/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-pink-dark bg-pink-light px-4 py-1.5 rounded-full mb-4">
            Why GLOW?
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "var(--font-baloo)" }}
          >
            Why Kids Love{" "}
            <span className="bg-gradient-to-r from-pink-dark to-gold bg-clip-text text-transparent">
              GLOW
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Materials designed to make children excited about learning English
            every day — through fun presentations and easy-to-follow videos.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Link
              href="/daftar"
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-light/30 block"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-light to-gold-light rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {feature.emoji}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
