"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { PROJECT, RERA, ALINE } from "@/lib/project-data";

const NAV = [
  { label: "Overview", href: "#overview" },
  { label: "Price", href: "#price" },
  { label: "Floor Plans", href: "#floor-plans" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-wave-950 text-wave-400 border-t border-wave-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Project */}
        <div className="sm:col-span-2">
          <p className="font-display text-white text-xl mb-3">{PROJECT.name}</p>
          <p className="text-sm leading-relaxed max-w-sm mb-5">
            2, 3 &amp; 4 BHK homes in Begur, South Bengaluru.
            {PROJECT.projectSize} project by {RERA.promoter}. RERA registered.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone size={13} className="text-wave-500" /> {ALINE.phone}</li>
            <li className="flex items-center gap-2"><Mail size={13} className="text-wave-500" /> {ALINE.email}</li>
            <li className="flex items-start gap-2"><MapPin size={13} className="text-wave-500 mt-0.5" /> {PROJECT.locationFull}</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-wave-300 mb-5">Quick Links</h3>
          <ul className="space-y-2.5">
            {NAV.map(l => (
              <li key={l.href}><button onClick={() => scroll(l.href.replace("#",""))} className="text-sm hover:text-white transition-colors cursor-pointer">{l.label}</button></li>
            ))}
          </ul>
        </div>

        {/* RERA */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-wave-300 mb-5">RERA</h3>
          <ul className="space-y-2.5 text-sm">
            <li><span className="text-wave-500 text-[10px] uppercase tracking-wider font-bold block">Reg. No.</span><span className="text-xs text-wave-200 break-all">{RERA.registrationNumber}</span></li>
            <li><span className="text-wave-500 text-[10px] uppercase tracking-wider font-bold block">Promoter</span><span className="text-wave-200">{RERA.promoter}</span></li>
            <li><span className="text-wave-500 text-[10px] uppercase tracking-wider font-bold block">Valid Till</span><span className="text-wave-200">{RERA.registrationValidity}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-wave-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-[11px] text-wave-700 leading-relaxed text-center max-w-4xl mx-auto mb-2">
            {ALINE.disclaimer}
          </p>
          <p className="text-xs text-wave-700 text-center">
            © {new Date().getFullYear()} {PROJECT.name}. Property information by {ALINE.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
