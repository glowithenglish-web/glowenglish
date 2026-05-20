export default function Gallery() {
  const galleryItems = [
    {
      emoji: "📊",
      title: "Vocabulary PPT",
      description: "Themed presentations with engaging visuals",
      color: "from-pink-light to-pink/30",
      size: "col-span-2 row-span-2",
    },
    {
      emoji: "📐",
      title: "Grammar PPT",
      description: "Simple & visual grammar explanations",
      color: "from-gold-light to-gold/30",
      size: "col-span-1 row-span-1",
    },
    {
      emoji: "🎬",
      title: "Pronunciation Videos",
      description: "Learn correct pronunciation",
      color: "from-pastel-blue to-pastel-blue/30",
      size: "col-span-1 row-span-1",
    },
    {
      emoji: "🗣️",
      title: "Daily Words Videos",
      description: "Everyday vocabulary + pronunciation",
      color: "from-pastel-green to-pastel-green/30",
      size: "col-span-1 row-span-1",
    },
    {
      emoji: "🎯",
      title: "Quiz PPT",
      description: "Fun interactive exercises",
      color: "from-pastel-purple to-pastel-purple/30",
      size: "col-span-1 row-span-1",
    },
    {
      emoji: "📂",
      title: "Google Drive",
      description: "All materials organized in one folder, access anytime",
      color: "from-beige to-gold-light/30",
      size: "col-span-2 row-span-1",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-gradient-to-b from-warm-white to-pink-light/20 relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-pastel-purple bg-pastel-purple/20 px-4 py-1.5 rounded-full mb-4">
            Preview
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "var(--font-baloo)" }}
          >
            Sneak Peek{" "}
            <span className="bg-gradient-to-r from-pastel-purple to-pink-dark bg-clip-text text-transparent">
              Inside the Drive
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Here&apos;s a glimpse of the materials you&apos;ll get — PPTs and
            videos all in one Google Drive.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`${item.size} group relative bg-gradient-to-br ${item.color} rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
                <h3 className="font-bold text-foreground text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-xs md:text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
