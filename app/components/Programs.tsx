export default function Programs() {
  const materials = [
    {
      icon: "🔤",
      title: "PPT Kosakata",
      description:
        "Presentasi kosakata bertema yang menarik — animals, colors, food, family, school, body parts, dan banyak lagi. Setiap slide dilengkapi gambar dan contoh kalimat.",
      color: "from-pink-light to-pink",
      badge: "Favorit",
    },
    {
      icon: "📐",
      title: "PPT Grammar Dasar",
      description:
        "Penjelasan grammar yang simpel dan visual — mulai dari singular/plural, simple present tense, pronouns, sampai prepositions. Cocok untuk pemula.",
      color: "from-pastel-blue to-pastel-blue/50",
      badge: "Penting",
    },
    {
      icon: "🎬",
      title: "Video Pronunciation A–Z",
      description:
        "Video panduan cara mengucapkan huruf, kata, dan kalimat bahasa Inggris dengan benar. Anak bisa pause, tiru, dan latihan berulang kali.",
      color: "from-gold-light to-gold",
      badge: "Video",
    },
    {
      icon: "🗣️",
      title: "Video Kosakata Harian",
      description:
        "Video pendek berisi kata-kata yang sering dipakai sehari-hari — greetings, numbers, days, months. Lengkap dengan cara pengucapan yang benar.",
      color: "from-pastel-green to-pastel-green/50",
      badge: "Video",
    },
    {
      icon: "📊",
      title: "PPT Kalimat Sederhana",
      description:
        "Presentasi cara menyusun kalimat sederhana dalam bahasa Inggris — dari perkenalan diri sampai menceritakan aktivitas sehari-hari.",
      color: "from-pastel-purple to-pastel-purple/50",
      badge: null,
    },
    {
      icon: "🎯",
      title: "PPT Quiz & Latihan",
      description:
        "Slide-slide latihan interaktif yang bisa dikerjakan anak sendiri atau bersama orang tua — fill in the blank, matching, dan pilihan ganda.",
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
      <div className="absolute top-10 left-10 text-2xl opacity-30 animate-float">
        📖
      </div>
      <div className="absolute bottom-10 right-10 text-2xl opacity-30 animate-float-slow">
        ✨
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-gold bg-gold-light px-4 py-1.5 rounded-full mb-4">
            Isi Materi
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "var(--font-baloo)" }}
          >
            Apa Saja yang{" "}
            <span className="bg-gradient-to-r from-gold to-pink-dark bg-clip-text text-transparent">
              Kamu Dapat?
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Semua materi ini tersedia di Google Drive setelah kamu mendaftar —
            tinggal buka, pelajari, dan praktekkan bersama anak.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {materials.map((material, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-pink-light/50 overflow-hidden"
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
                  <span>Daftar untuk akses</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
