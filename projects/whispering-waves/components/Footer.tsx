"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { PROJECT, RERA, ALINE } from "@/lib/project-data";

const NAV_ITEMS = [
  { label: "Overview",    href: "#overview"    },
  { label: "Floor Plans", href: "#floor-plans" },
  { label: "Amenities",   href: "#amenities"   },
  { label: "Club Élan",   href: "#club-elan"   },
  { label: "Location",    href: "#location"    },
  { label: "RERA",        href: "#rera"        },
  { label: "Contact",     href: "#contact"     },
  { label: "FAQ",         href: "#faq"         },
];

export default function Footer() {
  const scroll = (href: string) => {
    if (href.startsWith("#")) {
      document.getElementById(href.replace("#",""))?.scrollIntoView({ behavior:"smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-2">
          <p className="font-serif text-xl font-bold text-white mb-0.5">
            {PROJECT.name}
          </p>
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
            {ALINE.name}
          </p>
          <p className="text-sm leading-relaxed max-w-sm mb-5">
            {ALINE.tagline}
          </p>

          {/* Contact */}
          <ul className="space-y-2.5">
            <li>
              <a href={`tel:${ALINE.phoneRaw}`}
                className="flex items-center gap-2.5 text-sm hover:text-gold-400 transition-colors">
                <Phone size={13} className="text-gold-500 shrink-0" /> {ALINE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${ALINE.email}`}
                className="flex items-center gap-2.5 text-sm hover:text-gold-400 transition-colors break-all">
                <Mail size={13} className="text-gold-500 shrink-0" /> {ALINE.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm">
              <MapPin size={13} className="text-gold-500 shrink-0 mt-0.5" /> {ALINE.location}
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-slate-300 mb-5">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {NAV_ITEMS.map(l => (
              <li key={l.label}>
                <button
                  onClick={() => scroll(l.href)}
                  className="text-sm hover:text-gold-400 transition-colors cursor-pointer"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Project info */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-slate-300 mb-5">
            Project Info
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <span className="text-slate-500 block text-[10px] uppercase tracking-widest font-bold mb-0.5">Developer</span>
              <span className="text-slate-300">{RERA.promoter}</span>
            </li>
            <li>
              <span className="text-slate-500 block text-[10px] uppercase tracking-widest font-bold mb-0.5">RERA No.</span>
              <span className="text-slate-300 break-all text-xs">{RERA.registrationNumber}</span>
            </li>
            <li>
              <span className="text-slate-500 block text-[10px] uppercase tracking-widest font-bold mb-0.5">Valid Till</span>
              <span className="text-slate-300">{RERA.registrationValidity}</span>
            </li>
            <li className="pt-2">
              <a
                href={ALINE.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-300 transition-colors"
              >
                {ALINE.website} <ExternalLink size={11} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-[11px] text-slate-600 leading-relaxed text-center mb-3 max-w-4xl mx-auto">
            {ALINE.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
            <p>© {new Date().getFullYear()} {ALINE.name}. All rights reserved.</p>
            <div className="flex gap-4">
              <a href={`${ALINE.website}/privacy-policy`} target="_blank" rel="noopener noreferrer"
                className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href={`${ALINE.website}/terms`} target="_blank" rel="noopener noreferrer"
                className="hover:text-slate-400 transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
