import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-light via-warm-white to-gold-light" />

      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-pink/10 rounded-full blur-2xl animate-pulse-soft" />
        <div className="absolute top-[60%] right-[5%] w-80 h-80 bg-gold-light/30 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[30%] right-[20%] w-48 h-48 bg-pastel-blue/15 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[20%] left-[15%] w-56 h-56 bg-pastel-green/10 rounded-full blur-2xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[50%] left-[40%] w-72 h-72 bg-pastel-purple/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-16 left-6 text-4xl animate-float opacity-60">⭐</div>
      <div className="absolute top-28 right-12 text-3xl animate-float-slow opacity-50">📚</div>
      <div className="absolute bottom-36 left-12 text-3xl animate-float opacity-40">🌟</div>
      <div className="absolute top-48 left-[20%] text-2xl animate-bounce-gentle opacity-40">✏️</div>
      <div className="absolute bottom-48 right-[20%] text-3xl animate-float-slow opacity-50">🎨</div>
      <div className="absolute top-24 right-[30%] text-2xl animate-float opacity-30">💬</div>
      <div className="absolute bottom-24 left-[30%] text-4xl animate-bounce-gentle opacity-40">🌈</div>
      <div className="absolute top-[45%] left-[8%] text-2xl animate-float-slow opacity-30">🎵</div>
      <div className="absolute top-[70%] right-[8%] text-2xl animate-float opacity-35">🦋</div>
      <div className="absolute top-[15%] left-[45%] text-xl animate-bounce-gentle opacity-25">💫</div>
      <div className="absolute bottom-[15%] right-[35%] text-2xl animate-float-slow opacity-30">🎈</div>
      <div className="absolute top-[80%] left-[50%] text-xl animate-float opacity-25">🌸</div>

      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #e8a0b4 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      {/* Soft circle decorations */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold-light/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pastel-blue/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="text-sm">🎉</span>
              <span className="text-sm font-medium text-foreground/70">
                Free for Grades 1–4
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
              style={{ fontFamily: "var(--font-baloo)" }}
            >
              <span className="text-foreground">Fun English Learning</span>
              <br />
              <span className="text-foreground">for </span>
              <span className="bg-gradient-to-r from-pink-dark via-gold to-pastel-blue bg-clip-text text-transparent">
                Little Adventurers
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Sign up for free and get instant access to complete English
              learning materials — vocabulary & grammar presentations, plus
              pronunciation videos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/daftar"
                className="group bg-pink-dark text-white font-bold px-8 py-4 rounded-full hover:bg-pink hover:text-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
              >
                Sign Up & Get Materials
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <a
                href="#programs"
                className="bg-white/80 backdrop-blur-sm text-foreground font-bold px-8 py-4 rounded-full hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-pink-light text-center"
              >
                See What You Get ✨
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <span className="text-lg">🆓</span>
                <span className="text-sm text-foreground/60 font-medium">Free forever</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <span className="text-lg">⚡</span>
                <span className="text-sm text-foreground/60 font-medium">Instant access</span>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Main illustration container */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-light to-gold-light rounded-[3rem] rotate-3 shadow-xl" />
              <div className="absolute inset-2 bg-white rounded-[2.5rem] -rotate-1 shadow-inner flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-6xl mb-3 animate-bounce-gentle">🎬</div>
                  <div className="flex justify-center gap-3 mb-3">
                    <span className="text-3xl animate-float">📊</span>
                    <span className="text-3xl animate-float-slow">🗣️</span>
                    <span className="text-3xl animate-float">📖</span>
                  </div>
                  <p className="text-xs font-bold text-foreground/50 mt-2">
                    PPT + Pronunciation Videos
                  </p>
                </div>
              </div>

              {/* Floating cards around illustration */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-lg animate-float">
                <span className="text-2xl">📩</span>
                <p className="text-xs font-bold mt-1">Materials Sent!</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-lg animate-float-slow">
                <span className="text-2xl">📂</span>
                <p className="text-xs font-bold mt-1">Drive Access</p>
              </div>
              <div className="absolute top-1/2 -right-8 bg-gold-light rounded-2xl p-3 shadow-lg animate-bounce-gentle">
                <span className="text-xl">💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
