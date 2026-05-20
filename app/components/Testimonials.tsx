export default function Testimonials() {
  const testimonials = [
    {
      name: "Ibu Sarah",
      role: "Orang tua murid kelas 2 SD",
      text: "PPT kosakatanya bagus banget, penuh gambar dan warna. Anak saya jadi hafal banyak kata baru dalam seminggu!",
      rating: 5,
      avatar: "👩🏻",
    },
    {
      name: "Pak David",
      role: "Orang tua murid kelas 1 SD",
      text: "Video pronunciation-nya sangat membantu. Anak saya sekarang bisa ngomong 'thank you' dan 'excuse me' dengan pengucapan yang benar.",
      rating: 5,
      avatar: "👨🏽",
    },
    {
      name: "Ibu Anita",
      role: "Orang tua murid kelas 3 SD",
      text: "Materinya lengkap — dari kosakata, grammar, sampai video. Tinggal buka Drive, pilih mau belajar apa. Praktis banget!",
      rating: 5,
      avatar: "👩🏼",
    },
    {
      name: "Pak Michael",
      role: "Orang tua murid kelas 4 SD",
      text: "PPT grammar-nya simpel tapi jelas. Anak saya yang tadinya bingung soal tenses, sekarang sudah mulai paham. Gratis pula!",
      rating: 5,
      avatar: "👨🏻",
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
        💬
      </div>
      <div className="absolute bottom-20 left-10 text-3xl opacity-20 animate-float-slow">
        ⭐
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-pink-dark bg-pink-light px-4 py-1.5 rounded-full mb-4">
            Testimoni
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "var(--font-baloo)" }}
          >
            Kata{" "}
            <span className="bg-gradient-to-r from-pink-dark to-gold bg-clip-text text-transparent">
              Orang Tua
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Ratusan orang tua sudah merasakan manfaat materi GLOW untuk
            anak-anak mereka.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-pink-light/20"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-gold text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/70 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-light to-gold-light rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-foreground/50">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
