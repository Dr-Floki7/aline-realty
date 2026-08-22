"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";
import { ALINE } from "@/lib/project-data";

const NAV = [
  { label: "Overview",    href: "#overview"    },
  { label: "Price",       href: "#price"       },
  { label: "Floor Plans", href: "#floor-plans" },
  { label: "Amenities",   href: "#amenities"   },
  { label: "Location",    href: "#location"    },
  { label: "Contact",     href: "#contact"     },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const goto = (href: string) => {
    setOpen(false);
    document.getElementById(href.replace("#",""))?.scrollIntoView({ behavior:"smooth" });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/97 backdrop-blur-lg shadow-sm border-b border-navy-100/50"
        : "bg-cream-50/80 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between">
        {/* Logo — project name only */}
        <button onClick={() => goto("#hero")} className="cursor-pointer group" aria-label="Go to top">
          <span className="font-display text-lg text-navy-900 group-hover:text-wave-600 transition-colors tracking-tight">
            Whispering Waves
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {NAV.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); goto(l.href); }}
              className="text-[13px] font-medium text-navy-600 hover:text-wave-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${ALINE.phoneRaw}`}
            onClick={() => trackEvent(GA_EVENTS.PHONE_CLICK, { source:"header" })}
            className="flex items-center gap-1.5 text-[13px] font-semibold text-wave-700 hover:text-wave-600 transition-colors"
          >
            <Phone size={13} strokeWidth={2.5} />
            {ALINE.phone}
          </a>
          <button
            onClick={() => { trackEvent(GA_EVENTS.PRICE_CLICK, { source:"header" }); goto("#contact"); }}
            className="btn-primary text-xs px-5 py-2.5"
          >
            Get Price
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-navy-700 hover:text-wave-600 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close" : "Menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, height:0 }}
            animate={{ opacity:1, height:"auto" }}
            exit={{ opacity:0, height:0 }}
            transition={{ duration:0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-navy-100 shadow-xl"
          >
            <nav className="px-4 pb-5 pt-2">
              {NAV.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); goto(l.href); }}
                  className="block w-full text-left py-3 text-[15px] font-medium text-navy-700 hover:text-wave-600 border-b border-navy-100/30 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a href={`tel:${ALINE.phoneRaw}`} className="btn-outline text-sm py-2.5 justify-center">
                  <Phone size={14} /> Call
                </a>
                <button onClick={() => goto("#contact")} className="btn-primary text-sm py-2.5">
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
