"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type ToastType = "success" | "error" | null;

function Toast({
  type,
  message,
  onClose,
}: {
  type: ToastType;
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (type) {
      const timer = setTimeout(onClose, 6000);
      return () => clearTimeout(timer);
    }
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] animate-fade-in-up w-[90%] max-w-md">
      <div
        className={`flex items-start gap-3 px-5 py-4 rounded-2xl shadow-2xl border backdrop-blur-md ${
          type === "success"
            ? "bg-white/95 border-pastel-green/50"
            : "bg-white/95 border-red-200"
        }`}
      >
        <span className="text-2xl flex-shrink-0 mt-0.5">
          {type === "success" ? "✅" : "❌"}
        </span>
        <div className="flex-1 min-w-0">
          <p
            className={`font-bold text-sm ${
              type === "success" ? "text-green-700" : "text-red-700"
            }`}
          >
            {type === "success" ? "Success!" : "Oops!"}
          </p>
          <p className="text-sm text-foreground/70 mt-0.5">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-foreground/30 hover:text-foreground/60 transition-colors flex-shrink-0"
          aria-label="Close notification"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [toast, setToast] = useState<{ type: ToastType; message: string }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast({ type: null, message: "" });

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setToast({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
        setIsSubmitting(false);
        return;
      }

      setToast({
        type: "success",
        message: `Materials have been sent to ${email}. Check your inbox!`,
      });
      setIsSuccess(true);
    } catch {
      setToast({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <>
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast({ type: null, message: "" })}
        />
        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/60 animate-fade-in-up">
          <div className="text-center">
            <div className="w-20 h-20 bg-pastel-green/30 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 animate-bounce-gentle">
              🎉
            </div>

            <h2
              className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3"
              style={{ fontFamily: "var(--font-baloo)" }}
            >
              Success! Check Your Email
            </h2>

            <p className="text-foreground/60 mb-6 leading-relaxed">
              We&apos;ve sent an email to{" "}
              <span className="font-semibold text-foreground">{email}</span>{" "}
              with a Google Drive link containing all the learning materials.
            </p>

            <div className="bg-gold-light/30 rounded-2xl p-5 mb-6 text-left">
              <p className="font-bold text-sm text-foreground mb-3">
                Next steps:
              </p>
              <ol className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="bg-pink-light rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <span>Open your email inbox (check spam folder too)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-pink-light rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <span>Click the Google Drive link in the email</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-pink-light rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <span>Download materials and start learning with your child!</span>
                </li>
              </ol>
            </div>

            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center justify-center gap-2 bg-pastel-green/20 text-foreground/70 px-5 py-2.5 rounded-full text-sm">
                <span>✅</span>
                <span>Email sent to {email}</span>
              </div>
              <Link
                href="/"
                className="text-pink-dark hover:text-foreground font-medium text-sm transition-colors"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Toast
        type={toast.type}
        message={toast.message}
        onClose={() => setToast({ type: null, message: "" })}
      />
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
            Sign Up Free
          </h2>
          <p className="text-sm text-foreground/50 mt-1">
            Enter your email, materials sent instantly
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
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="w-full px-5 py-4 rounded-xl border border-pink-light/50 bg-white/90 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-pink-dark/20 focus:border-pink-dark/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <p className="text-xs text-foreground/40 mt-1.5">
              The Google Drive materials link will be sent to this email
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-pink-dark text-white font-bold px-8 py-4 rounded-full hover:bg-foreground transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg mt-2"
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
                Sending materials...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Send Materials to My Email
                <span>📩</span>
              </span>
            )}
          </button>
        </form>

        {/* Trust indicators */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-foreground/40">
          <span className="flex items-center gap-1">
            <span>🔒</span> Data safe
          </span>
          <span className="flex items-center gap-1">
            <span>🚫</span> No spam
          </span>
          <span className="flex items-center gap-1">
            <span>🆓</span> Free forever
          </span>
        </div>
      </div>
    </>
  );
}
