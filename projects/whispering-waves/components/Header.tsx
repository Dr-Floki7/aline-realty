"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";
import { PROJECT, ALINE } from "@/lib/project-data";

const NAV = [
  { label: "Overview",    href: "#overview"    },
  { label: "Floor Plans", href: "#floor-plans" },
  { label: "Amenities",   href: "#amenities"   },
  { label: "Location",    href: "#location"    },
  { label: "RERA",        href: "#rera"        },
  { label: "Contact",     href: "#contact"     },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
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
          ? "bg-white/96 backdrop-blur-md shadow-md border-b border-slate-100"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex flex-col leading-none min-w-0">
          <button
            onClick={() => goto("#hero")}
            className="text-left cursor-pointer group"
            aria-label="Go to top"
          >
            <span className="font-serif text-[17px] font-bold text-slate-900 tracking-tight group-hover:text-gold-600 transition-colors leading-none block truncate">
              {PROJECT.nameShort}
            </span>
            <span className="text-[9px] font-semibold tracking-[0.18em] uppercase text-gold-600 leading-none block mt-0.5 truncate">
              {ALINE.name} &middot; {PROJECT.tagline}
            </span>
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 shrink-0" aria-label="Project navigation">
          {NAV.map(l => (
            <button
              key={l.href}
              onClick={() => goto(l.href)}
              className="text-[13px] font-medium text-slate-600 hover:text-gold-600 transition-colors relative group cursor-pointer"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gold-400 rounded-full group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${ALINE.phoneRaw}`}
            onClick={() => trackEvent(GA_EVENTS.PHONE_CLICK, { source: "header" })}
            className="flex items-center gap-1.5 text-[13px] font-semibold text-gold-600 hover:text-gold-700 transition-colors"
          >
            <Phone size={14} strokeWidth={2.5} />
            {ALINE.phone}
          </a>
          <button
            onClick={() => { trackEvent(GA_EVENTS.PRICE_CLICK, { source:"header" }); goto("#contact"); }}
            className="btn-primary text-xs px-4 py-2 cursor-pointer"
          >
            Get Latest Price
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-1.5 text-slate-700 hover:text-gold-600 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden bg-white border-t border-slate-100 shadow-lg"
          >
            <nav className="px-4 pb-5 pt-2" aria-label="Mobile navigation">
              {NAV.map(l => (
                <button
                  key={l.href}
                  onClick={() => goto(l.href)}
                  className="block w-full text-left py-3 text-[15px] font-medium text-slate-700 hover:text-gold-600 border-b border-slate-50 last:border-0 transition-colors cursor-pointer"
                >
                  {l.label}
                </button>
              ))}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${ALINE.phoneRaw}`}
                  onClick={() => trackEvent(GA_EVENTS.PHONE_CLICK, { source:"mobile_nav" })}
                  className="btn-outline text-sm py-2.5 justify-center"
                >
                  <Phone size={14} /> Call
                </a>
                <button
                  onClick={() => { trackEvent(GA_EVENTS.PRICE_CLICK, { source:"mobile_nav" }); goto("#contact"); }}
                  className="btn-primary text-sm py-2.5 cursor-pointer"
                >
                  Get Price
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
