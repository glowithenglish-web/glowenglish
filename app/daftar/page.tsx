import type { Metadata } from "next";
import RegisterForm from "./RegisterForm";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sign Up Free - GLOW English",
  description:
    "Sign up for free and get English learning materials for grades 1-4 sent directly to your email. Vocabulary PPT, grammar PPT, and pronunciation videos.",
};

export default function DaftarPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-light/60 via-warm-white to-gold-light/60" />

      {/* Animated pulsing blobs */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-pink/15 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-[10%] right-[5%] w-80 h-80 bg-gold-light/30 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
      <div className="absolute top-[40%] right-[20%] w-56 h-56 bg-pastel-blue/15 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[60%] left-[15%] w-64 h-64 bg-pastel-green/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-[20%] left-[40%] w-48 h-48 bg-pastel-purple/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-[30%] left-[50%] w-60 h-60 bg-pink-light/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2.5s" }} />

      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #e8a0b4 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      {/* Decorative floating elements */}
      <div className="absolute top-8 left-4 text-3xl animate-float opacity-50">⭐</div>
      <div className="absolute top-16 right-8 text-2xl animate-float-slow opacity-40">📚</div>
      <div className="absolute bottom-16 left-8 text-3xl animate-bounce-gentle opacity-40">🌈</div>
      <div className="absolute bottom-32 right-4 text-2xl animate-float opacity-40">✏️</div>
      <div className="absolute top-[25%] left-3 text-2xl animate-float-slow opacity-30">🎬</div>
      <div className="absolute top-[65%] right-6 text-3xl animate-bounce-gentle opacity-30">💡</div>
      <div className="absolute top-[45%] left-[3%] text-xl animate-float opacity-25">🎵</div>
      <div className="absolute bottom-[45%] right-[3%] text-xl animate-float-slow opacity-25">🦋</div>
      <div className="absolute top-[80%] left-[20%] text-2xl animate-bounce-gentle opacity-20">🌸</div>
      <div className="absolute top-[10%] right-[30%] text-xl animate-float opacity-20">💫</div>
      <div className="absolute bottom-[10%] left-[40%] text-2xl animate-float-slow opacity-25">🎈</div>
      <div className="absolute top-[35%] right-[40%] text-xl animate-bounce-gentle opacity-20">📝</div>

      {/* Large decorative circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gold-light/25 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pastel-blue/8 rounded-full blur-3xl" />

      {/* Decorative shapes */}
      <div className="absolute top-[15%] right-[10%] w-20 h-20 border-2 border-pink/20 rounded-2xl rotate-12 hidden lg:block" />
      <div className="absolute bottom-[20%] left-[8%] w-16 h-16 border-2 border-gold/20 rounded-full hidden lg:block" />
      <div className="absolute top-[70%] right-[15%] w-12 h-12 border-2 border-pastel-blue/20 rounded-xl -rotate-12 hidden lg:block" />

      {/* Content */}
      <div className="relative min-h-screen flex flex-col">
        {/* Header */}
        <header className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/logo.png"
                alt="GLOW"
                width={36}
                height={36}
                className="rounded-full group-hover:scale-110 transition-transform"
              />
              <span
                className="text-2xl font-extrabold tracking-tight"
                style={{ fontFamily: "var(--font-baloo)" }}
              >
                <span className="text-pink-dark">GLOW</span>
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
              Back to Home
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
                  100% Free, no cost at all
                </span>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
                style={{ fontFamily: "var(--font-baloo)" }}
              >
                <span className="text-foreground">Sign Up &</span>
                <br />
                <span className="bg-gradient-to-r from-pink-dark via-gold to-pastel-blue bg-clip-text text-transparent">
                  Get Instant Access
                </span>
              </h1>

              <p className="text-lg text-foreground/60 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
                Enter your email and within minutes you&apos;ll receive a Google
                Drive link with all the English learning materials.
              </p>

              {/* What you get */}
              <div className="space-y-4 max-w-sm mx-auto lg:mx-0">
                <h3 className="font-bold text-foreground text-sm uppercase tracking-wider">
                  Inside the Google Drive:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-sm">
                    <div className="w-8 h-8 bg-pink-light rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                      🔤
                    </div>
                    <span className="text-foreground/70 text-sm">
                      Vocabulary PPT — themed, visual, easy to understand
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-sm">
                    <div className="w-8 h-8 bg-gold-light rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                      📐
                    </div>
                    <span className="text-foreground/70 text-sm">
                      Grammar PPT — simple explanations for beginners
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-sm">
                    <div className="w-8 h-8 bg-pastel-blue/50 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                      🎬
                    </div>
                    <span className="text-foreground/70 text-sm">
                      Pronunciation Videos — learn correct pronunciation
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-sm">
                    <div className="w-8 h-8 bg-pastel-green/50 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                      🗣️
                    </div>
                    <span className="text-foreground/70 text-sm">
                      Daily Vocabulary Videos — everyday words + pronunciation
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-sm">
                    <div className="w-8 h-8 bg-pastel-purple/50 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                      🎯
                    </div>
                    <span className="text-foreground/70 text-sm">
                      Quiz & Practice PPT — interactive and fun
                    </span>
                  </div>
                </div>
              </div>

              {/* Social proof */}
              <div className="mt-8 flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <span className="text-base">🆓</span>
                  <span className="text-xs text-foreground/60 font-medium">Free forever</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <span className="text-base">⚡</span>
                  <span className="text-xs text-foreground/60 font-medium">Instant delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <span className="text-base">🔒</span>
                  <span className="text-xs text-foreground/60 font-medium">No spam</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="order-1 lg:order-2">
              <RegisterForm />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 px-4 text-center space-y-4">
          <div className="max-w-md mx-auto bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-5 border border-pink-light/30 shadow-sm">
            <span className="text-2xl block mb-2">💬</span>
            <p className="text-base text-foreground/70 italic font-medium leading-relaxed">
              &ldquo;The limits of my language mean the limits of my world.&rdquo;
            </p>
            <p className="text-sm text-pink-dark font-semibold mt-2">— Ludwig Wittgenstein</p>
          </div>
          <p className="text-xs text-foreground/30">
            © 2026 GLOW English. English learning materials for kids.
          </p>
        </footer>
      </div>
    </div>
  );
}
