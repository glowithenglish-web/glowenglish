"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">✨</span>
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#about"
              className="text-foreground/70 hover:text-pink-dark transition-colors font-medium"
            >
              About
            </a>
            <a
              href="/#programs"
              className="text-foreground/70 hover:text-pink-dark transition-colors font-medium"
            >
              Materi
            </a>
            <a
              href="/#how-it-works"
              className="text-foreground/70 hover:text-pink-dark transition-colors font-medium"
            >
              Cara Kerja
            </a>
            <a
              href="/#gallery"
              className="text-foreground/70 hover:text-pink-dark transition-colors font-medium"
            >
              Preview
            </a>
            <a
              href="/#testimonials"
              className="text-foreground/70 hover:text-pink-dark transition-colors font-medium"
            >
              Testimoni
            </a>
            <Link
              href="/daftar"
              className="bg-pink text-foreground font-semibold px-6 py-2.5 rounded-full hover:bg-pink-dark hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Daftar Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-pink-light transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-pink-light pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-3">
              <a
                href="/#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/70 hover:text-pink-dark transition-colors font-medium py-2"
              >
                About
              </a>
              <a
                href="/#programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/70 hover:text-pink-dark transition-colors font-medium py-2"
              >
                Materi
              </a>
              <a
                href="/#how-it-works"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/70 hover:text-pink-dark transition-colors font-medium py-2"
              >
                Cara Kerja
              </a>
              <a
                href="/#gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/70 hover:text-pink-dark transition-colors font-medium py-2"
              >
                Preview
              </a>
              <a
                href="/#testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/70 hover:text-pink-dark transition-colors font-medium py-2"
              >
                Testimoni
              </a>
              <Link
                href="/daftar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-pink text-foreground font-semibold px-6 py-2.5 rounded-full hover:bg-pink-dark hover:text-white transition-all duration-300 text-center mt-2"
              >
                Daftar Gratis
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
