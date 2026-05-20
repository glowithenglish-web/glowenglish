"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Connect to your email automation service (e.g., Mailchimp, ConvertKit, Resend, etc.)
    // After successful submission, the service should send an automated email
    // containing the Google Drive link with learning materials.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/60 animate-fade-in-up">
        {/* Success State */}
        <div className="text-center">
          <div className="w-20 h-20 bg-pastel-green/30 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 animate-bounce-gentle">
            🎉
          </div>

          <h2
            className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3"
            style={{ fontFamily: "var(--font-baloo)" }}
          >
            Yeay, Berhasil!
          </h2>

          <p className="text-foreground/60 mb-6 leading-relaxed">
            Kami sudah mengirim email ke{" "}
            <span className="font-semibold text-foreground">{email}</span>{" "}
            berisi link Google Drive dengan semua materi belajar.
          </p>

          {/* Steps after registration */}
          <div className="bg-gold-light/30 rounded-2xl p-5 mb-6 text-left">
            <p className="font-bold text-sm text-foreground mb-3">
              Langkah selanjutnya:
            </p>
            <ol className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="bg-pink-light rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  1
                </span>
                <span>Buka inbox email kamu (cek juga folder spam)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-pink-light rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  2
                </span>
                <span>Klik link Google Drive di dalam email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-pink-light rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  3
                </span>
                <span>Download materi dan mulai belajar bersama anak!</span>
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center justify-center gap-2 bg-pastel-green/20 text-foreground/70 px-5 py-2.5 rounded-full text-sm">
              <span>✅</span>
              <span>Email terkirim ke {email}</span>
            </div>
            <Link
              href="/"
              className="text-pink-dark hover:text-foreground font-medium text-sm transition-colors"
            >
              ← Kembali ke beranda
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/60">
      {/* Form Header */}
      <div className="text-center mb-8">
        <div className="w-14 h-14 bg-gradient-to-br from-pink-light to-gold-light rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
          📩
        </div>
        <h2
          className="text-2xl font-extrabold text-foreground"
          style={{ fontFamily: "var(--font-baloo)" }}
        >
          Daftar Gratis
        </h2>
        <p className="text-sm text-foreground/50 mt-1">
          Masukkan email kamu, materi langsung dikirim
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground/70 mb-1.5"
          >
            Email Aktif
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@contoh.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-4 rounded-xl border border-pink-light/50 bg-white/90 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-pink-dark/20 focus:border-pink-dark/50 transition-all"
          />
          <p className="text-xs text-foreground/40 mt-1.5">
            Link materi Google Drive akan dikirim ke email ini
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-pink-dark text-white font-bold px-8 py-4 rounded-full hover:bg-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 mt-2"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Mengirim materi...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Kirim Materi ke Email Saya
              <span>📩</span>
            </span>
          )}
        </button>
      </form>

      {/* Trust indicators */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-foreground/40">
        <span className="flex items-center gap-1">
          <span>🔒</span> Data aman
        </span>
        <span className="flex items-center gap-1">
          <span>🚫</span> Tanpa spam
        </span>
        <span className="flex items-center gap-1">
          <span>🆓</span> Gratis selamanya
        </span>
      </div>
    </div>
  );
}
