"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Is it really 100% free?",
      answer:
        "Yes! All materials are completely free. Just sign up with your email and you'll receive the Google Drive link with all learning materials instantly.",
    },
    {
      question: "What age group is this for?",
      answer:
        "GLOW materials are designed for children in grades 1–4 (approximately ages 6–10). The content starts from basic vocabulary and builds up gradually.",
    },
    {
      question: "What materials will I receive?",
      answer:
        "You'll get access to vocabulary PPTs, grammar PPTs, pronunciation videos, daily vocabulary videos, sentence-building presentations, and interactive quiz slides — all organized in one Google Drive folder.",
    },
    {
      question: "How do I access the materials?",
      answer:
        "After signing up, you'll receive an email with a Google Drive link. Just click the link and you can view, download, or print any materials you need.",
    },
    {
      question: "Can I print the materials?",
      answer:
        "Absolutely! The PPT materials are designed to be printable. You can print worksheets, flashcards, and activity sheets for your child to use offline.",
    },
    {
      question: "How often are new materials added?",
      answer:
        "We regularly update the Drive with new materials. Once you have access, you'll automatically see any new additions to the folder.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-beige-light to-warm-white" />

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-3xl opacity-20 animate-float">
        ❓
      </div>
      <div className="absolute bottom-10 left-10 text-3xl opacity-20 animate-float-slow">
        💡
      </div>
      <div className="absolute top-1/2 right-[5%] w-48 h-48 bg-pink-light/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-[5%] w-56 h-56 bg-gold-light/20 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-gold bg-gold-light px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "var(--font-baloo)" }}
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-gold to-pink-dark bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-foreground/60">
            Everything you need to know about GLOW.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-pink-light/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="font-bold text-foreground pr-4">
                  {faq.question}
                </span>
                <span
                  className="text-pink-dark text-xl flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform:
                      openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                  <p className="text-foreground/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
