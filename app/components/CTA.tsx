import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-light via-warm-white to-gold-light" />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-4xl opacity-30 animate-float">
        🌟
      </div>
      <div className="absolute top-20 right-20 text-3xl opacity-30 animate-float-slow">
        ✨
      </div>
      <div className="absolute bottom-10 left-1/4 text-3xl opacity-20 animate-bounce-gentle">
        📚
      </div>
      <div className="absolute bottom-20 right-1/4 text-3xl opacity-20 animate-float">
        📩
      </div>

      {/* Soft circles */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-pink/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gold/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-[3rem] p-10 md:p-16 shadow-xl border border-white/50">
          <div className="text-5xl mb-6 animate-bounce-gentle">🚀</div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight"
            style={{ fontFamily: "var(--font-baloo)" }}
          >
            Siap Mulai{" "}
            <span className="bg-gradient-to-r from-pink-dark via-gold to-pastel-blue bg-clip-text text-transparent">
              Petualangan Belajar
            </span>
            <br />
            Bahasa Inggris?
          </h2>

          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Daftar gratis sekarang dan langsung dapatkan akses ke semua materi
            belajar bahasa Inggris yang seru untuk anak kelas 1–4 SD. Materi
            dikirim otomatis ke email kamu!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/daftar"
              className="group bg-pink-dark text-white font-bold px-10 py-5 rounded-full hover:bg-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg"
            >
              Daftar & Dapatkan Materi Gratis
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/50">
            <span className="flex items-center gap-2">
              <span className="text-lg">🆓</span> 100% Gratis
            </span>
            <span className="flex items-center gap-2">
              <span className="text-lg">⚡</span> Materi langsung dikirim
            </span>
            <span className="flex items-center gap-2">
              <span className="text-lg">💝</span> 500+ keluarga sudah
              bergabung
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
