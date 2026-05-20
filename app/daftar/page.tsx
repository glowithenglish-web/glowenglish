import type { Metadata } from "next";
import RegisterForm from "./RegisterForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Daftar Gratis - GLOW English",
  description:
    "Daftar gratis dan dapatkan materi belajar bahasa Inggris untuk anak kelas 1-4 SD langsung ke email kamu. PPT kosakata, grammar, dan video pronunciation.",
};

export default function DaftarPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-light/50 via-warm-white to-gold-light/50" />

      {/* Decorative floating elements */}
      <div className="absolute top-10 left-5 text-3xl animate-float opacity-40 hidden sm:block">
        ⭐
      </div>
      <div className="absolute top-20 right-10 text-2xl animate-float-slow opacity-30 hidden sm:block">
        📚
      </div>
      <div className="absolute bottom-20 left-10 text-3xl animate-bounce-gentle opacity-30 hidden sm:block">
        🌈
      </div>
      <div className="absolute bottom-40 right-5 text-2xl animate-float opacity-30 hidden sm:block">
        ✏️
      </div>
      <div className="absolute top-1/3 left-5 text-2xl animate-float-slow opacity-20 hidden lg:block">
        🎬
      </div>
      <div className="absolute top-2/3 right-10 text-3xl animate-bounce-gentle opacity-20 hidden lg:block">
        💡
      </div>

      {/* Soft blurred circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gold-light/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pastel-blue/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative min-h-screen flex flex-col">
        {/* Header */}
        <header className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl group-hover:rotate-12 transition-transform">
                ✨
              </span>
              <span
                className="text-2xl font-extrabold tracking-tight"
                style={{ fontFamily: "var(--font-baloo)" }}
              >
                <span className="text-pink-dark">G</span>
                <span className="text-gold">L</span>
                <span className="text-pastel-blue">O</span>
                <span className="text-pastel-green">W</span>
              </span>
            </Link>
            <Link
              href="/"
              className="text-foreground/60 hover:text-pink-dark transition-colors font-medium text-sm flex items-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Side - Info */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
                <span className="text-sm">🎁</span>
                <span className="text-sm font-medium text-foreground/70">
                  100% Gratis, tanpa biaya apapun
                </span>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
                style={{ fontFamily: "var(--font-baloo)" }}
              >
                <span className="text-foreground">Daftar &</span>
                <br />
                <span className="bg-gradient-to-r from-pink-dark via-gold to-pastel-blue bg-clip-text text-transparent">
                  Langsung Dapat Materi
                </span>
              </h1>

              <p className="text-lg text-foreground/60 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
                Masukkan email kamu, dan dalam hitungan menit kamu akan menerima
                link Google Drive berisi materi belajar bahasa Inggris lengkap.
              </p>

              {/* What you get */}
              <div className="space-y-4 max-w-sm mx-auto lg:mx-0">
                <h3 className="font-bold text-foreground text-sm uppercase tracking-wider">
                  Isi Google Drive:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-pink-light rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                      🔤
                    </div>
                    <span className="text-foreground/70 text-sm">
                      PPT Kosakata — bertema, visual, mudah dipahami
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gold-light rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                      📐
                    </div>
                    <span className="text-foreground/70 text-sm">
                      PPT Grammar — penjelasan simpel untuk pemula
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-pastel-blue/50 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                      🎬
                    </div>
                    <span className="text-foreground/70 text-sm">
                      Video Pronunciation — cara ucap kata yang benar
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-pastel-green/50 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                      🗣️
                    </div>
                    <span className="text-foreground/70 text-sm">
                      Video Kosakata Harian — kata sehari-hari + pengucapan
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-pastel-purple/50 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                      🎯
                    </div>
                    <span className="text-foreground/70 text-sm">
                      PPT Quiz & Latihan — interaktif dan seru
                    </span>
                  </div>
                </div>
              </div>

              {/* Social proof */}
              <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-pink flex items-center justify-center text-xs border-2 border-white">
                    😊
                  </div>
                  <div className="w-8 h-8 rounded-full bg-pastel-blue flex items-center justify-center text-xs border-2 border-white">
                    🥰
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gold-light flex items-center justify-center text-xs border-2 border-white">
                    😄
                  </div>
                  <div className="w-8 h-8 rounded-full bg-pastel-green flex items-center justify-center text-xs border-2 border-white">
                    🤩
                  </div>
                </div>
                <p className="text-sm text-foreground/50">
                  <span className="font-bold text-foreground">500+</span>{" "}
                  keluarga sudah bergabung
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="order-1 lg:order-2">
              <RegisterForm />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 px-4 text-center">
          <p className="text-sm text-foreground/40">
            © 2025 GLOW English. Materi belajar bahasa Inggris untuk anak.
          </p>
        </footer>
      </div>
    </div>
  );
}
