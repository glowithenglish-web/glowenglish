export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      emoji: "📝",
      title: "Daftar dengan Email",
      description:
        "Masukkan email kamu di halaman pendaftaran. Prosesnya cuma 10 detik — tanpa biaya, tanpa ribet.",
      color: "bg-pink-light",
      borderColor: "border-pink",
    },
    {
      number: "02",
      emoji: "📩",
      title: "Cek Email Kamu",
      description:
        "Dalam hitungan menit, kamu akan menerima email otomatis berisi link Google Drive yang sudah disiapkan.",
      color: "bg-gold-light",
      borderColor: "border-gold",
    },
    {
      number: "03",
      emoji: "🎉",
      title: "Akses Semua Materi",
      description:
        "Buka Drive-nya, pilih materi yang mau dipelajari — PPT kosakata, PPT grammar, atau video pronunciation. Semuanya ada!",
      color: "bg-pastel-green",
      borderColor: "border-pastel-green",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-beige-light to-warm-white" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-light/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-pastel-green bg-pastel-green/30 px-4 py-1.5 rounded-full mb-4">
            Cara Mendapatkan Materi
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "var(--font-baloo)" }}
          >
            Semudah{" "}
            <span className="bg-gradient-to-r from-pastel-green to-gold bg-clip-text text-transparent">
              1-2-3
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Tidak perlu proses ribet. Daftar sekarang, link materi langsung
            sampai di inbox kamu.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-pink-light to-gold-light" />
              )}

              <div className="relative text-center">
                {/* Step number */}
                <div
                  className={`inline-flex items-center justify-center w-32 h-32 ${step.color} rounded-[2rem] mb-6 border-2 ${step.borderColor}/30 shadow-sm`}
                >
                  <div>
                    <span className="text-4xl block mb-1">{step.emoji}</span>
                    <span className="text-xs font-bold text-foreground/40 uppercase tracking-wider">
                      Step {step.number}
                    </span>
                  </div>
                </div>

                <h3
                  className="text-xl font-bold text-foreground mb-3"
                  style={{ fontFamily: "var(--font-baloo)" }}
                >
                  {step.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
