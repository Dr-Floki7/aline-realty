"use client";

import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home",            href: "#home" },
  { label: "About Us",        href: "#about" },
  { label: "Why Choose Us",   href: "#why-us" },
  { label: "Services",        href: "#services" },
  { label: "Contact",         href: "#contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy",  href: "/privacy-policy" },
  { label: "Terms of Use",    href: "/terms" },
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/alinerealty" },
  { icon: Facebook,  label: "Facebook",  href: "https://facebook.com/alinerealty" },
  { icon: Linkedin,  label: "LinkedIn",  href: "https://linkedin.com/company/alinerealty" },
];

export default function Footer() {
  const scroll = (href: string) => {
    if (href.startsWith("#")) {
      document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400">
      {/* CTA Banner */}
      <div className="bg-gold-500">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-serif text-xl font-bold text-white">
              Ready to find your dream property?
            </p>
            <p className="text-white/80 text-sm mt-1">
              Talk to our experts today — no commitment, no pressure.
            </p>
          </div>
          <a
            href="tel:+917337861296"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-gold-700 font-bold rounded-lg px-7 py-3 text-sm hover:bg-neutral-50 transition-colors shadow"
          >
            <Phone size={15} />
            Call Now
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-2">
          <p className="font-serif text-2xl font-bold text-white mb-1">
            A-Line <span className="text-gold-400">Realty</span>
          </p>
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-neutral-500 mb-4">
            Bengaluru
          </p>
          <p className="text-sm leading-relaxed text-neutral-400 max-w-xs">
            A trusted real estate consultancy in Bengaluru, helping customers buy
            residential and commercial properties with professional guidance and
            a transparent process.
          </p>
          <div className="flex gap-3 mt-6">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-gold-500 hover:text-white transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-neutral-300 mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => scroll(l.href)}
                  className="text-sm text-neutral-400 hover:text-gold-400 transition-colors cursor-pointer"
                >
                  {l.label}
                </button>
              </li>
            ))}
            {LEGAL_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-neutral-400 hover:text-gold-400 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-neutral-300 mb-5">
            Contact
          </h3>
          <ul className="space-y-4">
            <li>
              <a href="tel:+917337861296" className="flex items-start gap-3 text-sm hover:text-gold-400 transition-colors group">
                <Phone size={14} className="mt-0.5 shrink-0 text-gold-500" />
                <span>+91 73378 61296</span>
              </a>
            </li>
            <li>
              <a href="mailto:alinerealty26@gmail.com" className="flex items-start gap-3 text-sm hover:text-gold-400 transition-colors break-all">
                <Mail size={14} className="mt-0.5 shrink-0 text-gold-500" />
                <span>alinerealty26@gmail.com</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <MapPin size={14} className="mt-0.5 shrink-0 text-gold-500" />
              <span>Bengaluru, Karnataka, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} A-Line Realty. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-neutral-400 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
