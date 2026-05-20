import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-warm-white to-beige-light py-16 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-light via-gold-light to-pastel-blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="GLOW"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span
                className="text-2xl font-extrabold tracking-tight"
                style={{ fontFamily: "var(--font-baloo)" }}
              >
                <span className="text-pink-dark">GLOW</span>
              </span>
            </div>
            <p className="text-foreground/60 max-w-sm leading-relaxed mb-6">
              Growing Language Opportunities Worldwide. Helping kids in grades
              1–4 master English through fun presentations, videos, and simple
              steps.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/learn.grow_glow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-light rounded-full flex items-center justify-center hover:bg-pink transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="w-5 h-5 text-pink-dark"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <span className="text-sm text-foreground/50">
                @learn.grow_glow
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#about"
                  className="text-foreground/60 hover:text-pink-dark transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#programs"
                  className="text-foreground/60 hover:text-pink-dark transition-colors"
                >
                  Materials
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="text-foreground/60 hover:text-pink-dark transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/#testimonials"
                  className="text-foreground/60 hover:text-pink-dark transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-foreground/60">
                <span>📧</span>
                <span>hello@glowenglish.com</span>
              </li>
              <li className="flex items-center gap-2 text-foreground/60">
                <span>📱</span>
                <span>@learn.grow_glow</span>
              </li>
              <li className="flex items-center gap-2 text-foreground/60">
                <span>🕐</span>
                <span>Mon–Sat, 9am–5pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-pink-light/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/40">
            © 2025 GLOW English. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-foreground/40">
            <a href="#" className="hover:text-pink-dark transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-pink-dark transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
