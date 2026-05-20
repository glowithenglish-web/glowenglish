export default function BrandBanner() {
  const items = [
    "Fun Learning",
    "⭐",
    "Vocabulary",
    "🎬",
    "Grammar",
    "📚",
    "Pronunciation",
    "🌟",
    "Free Materials",
    "✨",
    "Google Drive",
    "🎯",
    "Grades 1–4",
    "💡",
    "PPT & Videos",
    "🦋",
  ];

  return (
    <section className="py-5 bg-gradient-to-r from-pink-light via-gold-light to-pink-light overflow-hidden relative">
      {/* Scrolling marquee */}
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-4 text-sm font-semibold text-pink-dark/70"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
