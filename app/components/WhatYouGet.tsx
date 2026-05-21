import Link from "next/link";

export default function WhatYouGet() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-white to-pink-light/10" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-light/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pastel-blue/10 rounded-full blur-3xl" />
      <div className="absolute top-10 left-8 text-2xl opacity-20 animate-float">🎁</div>
      <div className="absolute bottom-10 right-8 text-2xl opacity-20 animate-float-slow">✨</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-light to-gold-light rounded-[2.5rem] p-8 md:p-12 shadow-lg">
              <div className="bg-white rounded-2xl p-6 shadow-inner space-y-4">
                {/* Simulated Drive folder */}
                <div className="flex items-center gap-3 pb-4 border-b border-pink-light/30">
                  <span className="text-2xl">📂</span>
                  <div>
                    <p className="font-bold text-foreground text-sm">GLOW English Materials</p>
                    <p className="text-xs text-foreground/40">Google Drive Folder</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-pink-light/20 rounded-xl px-4 py-3">
                    <span className="text-lg">📊</span>
                    <span className="text-sm text-foreground/70">Vocabulary_Animals.pptx</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gold-light/30 rounded-xl px-4 py-3">
                    <span className="text-lg">📊</span>
                    <span className="text-sm text-foreground/70">Grammar_Simple_Present.pptx</span>
                  </div>
                  <div className="flex items-center gap-3 bg-pastel-blue/20 rounded-xl px-4 py-3">
                    <span className="text-lg">🎬</span>
                    <span className="text-sm text-foreground/70">Pronunciation_A_to_Z.mp4</span>
                  </div>
                  <div className="flex items-center gap-3 bg-pastel-green/20 rounded-xl px-4 py-3">
                    <span className="text-lg">🎬</span>
                    <span className="text-sm text-foreground/70">Daily_Words_Greetings.mp4</span>
                  </div>
                  <div className="flex items-center gap-3 bg-pastel-purple/20 rounded-xl px-4 py-3">
                    <span className="text-lg">📊</span>
                    <span className="text-sm text-foreground/70">Quiz_Fill_in_the_Blank.pptx</span>
                  </div>
                </div>
                <p className="text-xs text-foreground/30 text-center pt-2">...and many more files inside</p>
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div>
            <span className="inline-block text-sm font-semibold text-pink-dark bg-pink-light px-4 py-1.5 rounded-full mb-4">
              What&apos;s Inside
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6"
              style={{ fontFamily: "var(--font-baloo)" }}
            >
              A Complete Learning Kit,{" "}
              <span className="bg-gradient-to-r from-pink-dark to-gold bg-clip-text text-transparent">
                Ready to Use
              </span>
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-6">
              Once you sign up, you get access to a well-organized Google Drive
              folder packed with everything your child needs to start learning
              English — from colorful presentations to pronunciation videos.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-pink-light rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                <span className="text-foreground/70">Themed vocabulary PPTs with images & examples</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-gold-light rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                <span className="text-foreground/70">Grammar lessons explained simply for kids</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-pastel-blue/50 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                <span className="text-foreground/70">Videos showing correct pronunciation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-pastel-green/50 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                <span className="text-foreground/70">Interactive quizzes & practice slides</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-pastel-purple/50 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                <span className="text-foreground/70">New materials added regularly</span>
              </li>
            </ul>

            <Link
              href="/daftar"
              className="inline-flex items-center gap-2 bg-pink-dark text-white font-bold px-8 py-4 rounded-full hover:bg-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Free Access Now
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
