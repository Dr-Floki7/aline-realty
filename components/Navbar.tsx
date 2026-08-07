"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Why Us",     href: "#why-us" },
  { label: "Services",   href: "#services" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => goto("#home")} className="flex flex-col leading-none cursor-pointer group" aria-label="A-Line Realty home">
          <span className="font-serif text-[22px] font-bold text-neutral-900 tracking-tight group-hover:text-gold-600 transition-colors">
            A-Line <span className="text-gold-500">Realty</span>
          </span>
          <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-neutral-400 mt-0.5">
            Bengaluru
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => goto(l.href)}
              className="text-[13.5px] font-medium text-neutral-600 hover:text-gold-500 transition-colors relative group cursor-pointer"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gold-400 rounded-full group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+917337861296"
            className="flex items-center gap-1.5 text-[13px] font-semibold text-gold-600 hover:text-gold-700 transition-colors"
            aria-label="Call A-Line Realty"
          >
            <Phone size={14} strokeWidth={2.5} />
            +91 73378 61296
          </a>
          <button
            onClick={() => goto("#contact")}
            className="btn-gold px-5 py-2 text-[13px] cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-neutral-700 hover:text-gold-500 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-neutral-100 px-5 pb-6 pt-3 shadow-lg"
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => goto(l.href)}
                className="block w-full text-left py-3 text-[15px] font-medium text-neutral-700 hover:text-gold-500 border-b border-neutral-50 last:border-0 transition-colors cursor-pointer"
              >
                {l.label}
              </button>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="tel:+917337861296"
                className="flex items-center justify-center gap-2 btn-outline py-2.5 text-sm"
              >
                <Phone size={15} /> +91 73378 61296
              </a>
              <button
                onClick={() => goto("#contact")}
                className="btn-gold py-2.5 text-sm cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
