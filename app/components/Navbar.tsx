"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Navbar Bar */}
      <nav
        className="fixed top-0 left-0 right-0 transition-all duration-300"
        style={{
          zIndex: 9999,
          backgroundColor: isMobileMenuOpen
            ? "rgba(255,255,255,1)"
            : isScrolled
              ? "rgba(255,255,255,0.92)"
              : "rgba(255,255,255,0.5)",
          backdropFilter: "blur(12px)",
          boxShadow:
            isScrolled || isMobileMenuOpen
              ? "0 1px 3px rgba(0,0,0,0.05)"
              : "none",
          padding: isScrolled ? "12px 0" : "20px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="GLOW - Growing Language Opportunities Worldwide"
                width={44}
                height={44}
                className="rounded-full"
              />
              <span
                className="text-2xl font-extrabold tracking-tight hidden sm:inline"
                style={{ fontFamily: "var(--font-baloo)" }}
              >
                <span className="text-pink-dark">GLOW</span>
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
                Materials
              </a>
              <a
                href="/#how-it-works"
                className="text-foreground/70 hover:text-pink-dark transition-colors font-medium"
              >
                How It Works
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
                Testimonials
              </a>
              <Link
                href="/daftar"
                className="bg-pink text-foreground font-semibold px-6 py-2.5 rounded-full hover:bg-pink-dark hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Sign Up Free
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-xl active:bg-pink-light transition-colors"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6 text-foreground"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - completely separate from nav */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 md:hidden"
          style={{ zIndex: 9998, paddingTop: "80px" }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="relative mx-4 mt-2 bg-white rounded-2xl shadow-xl p-6 border border-pink-light/30">
            <div className="flex flex-col gap-1">
              <a
                href="/#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-pink-dark font-medium py-3 px-4 rounded-xl hover:bg-pink-light/20 transition-colors"
              >
                About
              </a>
              <a
                href="/#programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-pink-dark font-medium py-3 px-4 rounded-xl hover:bg-pink-light/20 transition-colors"
              >
                Materials
              </a>
              <a
                href="/#how-it-works"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-pink-dark font-medium py-3 px-4 rounded-xl hover:bg-pink-light/20 transition-colors"
              >
                How It Works
              </a>
              <a
                href="/#gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-pink-dark font-medium py-3 px-4 rounded-xl hover:bg-pink-light/20 transition-colors"
              >
                Preview
              </a>
              <a
                href="/#testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-pink-dark font-medium py-3 px-4 rounded-xl hover:bg-pink-light/20 transition-colors"
              >
                Testimonials
              </a>
              <div className="border-t border-pink-light/30 my-2" />
              <Link
                href="/daftar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-pink-dark text-white font-semibold px-6 py-3.5 rounded-full hover:bg-foreground transition-all duration-300 text-center"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
