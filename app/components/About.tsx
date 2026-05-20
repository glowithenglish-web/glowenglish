export default function About() {
  const features = [
    {
      emoji: "📊",
      title: "Presentasi Menarik",
      description:
        "Materi dalam format PPT yang colorful dan mudah dipahami anak — belajar terasa seperti menonton cerita.",
    },
    {
      emoji: "🔤",
      title: "Kosakata Lengkap",
      description:
        "Kumpulan vocabulary bertema yang disusun rapi — dari kata sehari-hari sampai kosakata sekolah.",
    },
    {
      emoji: "📐",
      title: "Grammar Sederhana",
      description:
        "Penjelasan grammar dasar yang simpel dan fun, cocok untuk anak kelas 1–4 SD yang baru mulai belajar.",
    },
    {
      emoji: "🎬",
      title: "Video Pronunciation",
      description:
        "Video panduan cara mengucapkan kata-kata bahasa Inggris dengan benar — anak bisa tiru dan latihan sendiri.",
    },
    {
      emoji: "📱",
      title: "Akses Kapan Saja",
      description:
        "Semua materi tersimpan di Google Drive — bisa diakses dari HP, tablet, atau laptop kapan pun dibutuhkan.",
    },
    {
      emoji: "🆓",
      title: "100% Gratis",
      description:
        "Cukup daftar dengan email, link materi langsung dikirim otomatis. Tanpa biaya, tanpa syarat rumit.",
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
            Kenapa GLOW?
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
            Materi yang dirancang khusus agar anak-anak excited belajar bahasa
            Inggris — lewat presentasi seru dan video yang mudah diikuti.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-pink-light/30"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
