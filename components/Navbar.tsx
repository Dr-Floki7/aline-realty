"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal-900/95 backdrop-blur-md border-b border-charcoal-700 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex flex-col leading-none cursor-pointer"
            aria-label="A-Line Realty — Go to top"
          >
            <span className="font-serif text-2xl font-bold text-white tracking-tight">
              A<span className="text-gold-400">-</span>Line
            </span>
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gold-500">
              Realty
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-charcoal-200 hover:text-gold-400 transition-colors duration-200 relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors"
              aria-label="Call us"
            >
              <Phone size={15} />
              <span>+91 98765 43210</span>
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-2 px-5 py-2 text-sm font-semibold bg-gold-500 text-white border border-gold-500 hover:bg-gold-400 hover:border-gold-400 transition-all duration-300 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white hover:text-gold-400 transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="bg-charcoal-900/98 backdrop-blur-md border-t border-charcoal-700 px-4 pt-4 pb-6 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left py-3 px-2 text-base font-medium text-charcoal-200 hover:text-gold-400 border-b border-charcoal-800 transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+919876543210"
            className="mt-3 flex items-center gap-2 py-3 px-2 text-base font-medium text-gold-400"
          >
            <Phone size={16} /> +91 98765 43210
          </a>
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-2 w-full py-3 text-sm font-semibold bg-gold-500 text-white hover:bg-gold-400 transition-colors duration-300 cursor-pointer"
          >
            Get in Touch
          </button>
        </nav>
      </div>
    </header>
  );
}
