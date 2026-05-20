export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Parent of a Grade 2 student",
      text: "The vocabulary PPTs are amazing — full of pictures and colors. My child memorized so many new words in just one week!",
      rating: 5,
      avatar: "👩🏻",
    },
    {
      name: "David L.",
      role: "Parent of a Grade 1 student",
      text: "The pronunciation videos are incredibly helpful. My child can now say 'thank you' and 'excuse me' with proper pronunciation.",
      rating: 5,
      avatar: "👨🏽",
    },
    {
      name: "Anita R.",
      role: "Parent of a Grade 3 student",
      text: "The materials are complete — vocabulary, grammar, and videos. Just open the Drive, pick what to study. So practical!",
      rating: 5,
      avatar: "👩🏼",
    },
    {
      name: "Michael T.",
      role: "Parent of a Grade 4 student",
      text: "The grammar PPTs are simple yet clear. My child who used to struggle with tenses is now starting to understand. And it's free!",
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
            Testimonials
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "var(--font-baloo)" }}
          >
            What Parents{" "}
            <span className="bg-gradient-to-r from-pink-dark to-gold bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Hundreds of parents have seen the benefits of GLOW materials for
            their children.
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
