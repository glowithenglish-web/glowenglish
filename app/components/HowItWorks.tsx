export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      emoji: "📝",
      title: "Sign Up with Email",
      description:
        "Enter your email on the registration page. It only takes 10 seconds — no cost, no hassle.",
      color: "bg-pink-light",
      borderColor: "border-pink",
    },
    {
      number: "02",
      emoji: "📩",
      title: "Check Your Email",
      description:
        "Within minutes, you'll receive an automated email with a Google Drive link containing all the prepared learning materials.",
      color: "bg-gold-light",
      borderColor: "border-gold",
    },
    {
      number: "03",
      emoji: "🎉",
      title: "Access All Materials",
      description:
        "Open the Drive, choose what to study — vocabulary PPT, grammar PPT, or pronunciation videos. It's all there!",
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
          <span className="inline-block text-sm font-semibold text-green-700 bg-pastel-green px-4 py-1.5 rounded-full mb-4">
            How to Get Materials
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "var(--font-baloo)" }}
          >
            As Easy as{" "}
            <span className="bg-gradient-to-r from-pastel-green to-gold bg-clip-text text-transparent">
              1-2-3
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            No complicated process. Sign up now and the materials link will land
            in your inbox right away.
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
