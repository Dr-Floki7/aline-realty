"use client";

import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  "Services": [
    { label: "Residential Sales", href: "#services" },
    { label: "Commercial Properties", href: "#services" },
    { label: "Investment Advisory", href: "#services" },
    { label: "Legal & Documentation", href: "#services" },
    { label: "Interior Solutions", href: "#services" },
    { label: "Rental Management", href: "#services" },
  ],
  "Locations": [
    { label: "Whitefield", href: "#projects" },
    { label: "Sarjapur Road", href: "#projects" },
    { label: "Indiranagar", href: "#projects" },
    { label: "Koramangala", href: "#projects" },
    { label: "Hebbal", href: "#projects" },
    { label: "Devanahalli", href: "#projects" },
  ],
};

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-800">
      {/* CTA strip */}
      <div className="bg-gradient-to-r from-charcoal-800 via-charcoal-700 to-charcoal-800 border-b border-charcoal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl font-bold text-white mb-1">
              Ready to find your dream property?
            </p>
            <p className="text-charcoal-400 text-sm">
              Get a free consultation from our Bangalore real estate experts.
            </p>
          </div>
          <button
            onClick={() => scrollTo("#contact")}
            className="flex-shrink-0 px-8 py-3 bg-gold-500 text-white font-semibold text-sm border border-gold-500 hover:bg-gold-400 transition-all duration-300 cursor-pointer"
          >
            Book Free Consultation
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-serif text-3xl font-bold text-white">
                A<span className="text-gold-400">-</span>Line
              </span>
              <div className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gold-500 mt-0.5">
                Realty
              </div>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-6 max-w-xs">
              Bangalore&apos;s trusted real estate channel partner since 2012. We help you
              find, buy, and invest in properties with complete confidence.
            </p>

            {/* Contact snippets */}
            <div className="space-y-2">
              <a
                href="https://maps.google.com/?q=Indiranagar+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-xs text-charcoal-400 hover:text-gold-400 transition-colors"
              >
                <MapPin size={13} className="text-gold-500 flex-shrink-0 mt-0.5" />
                No. 42, 100 Feet Road, Indiranagar, Bangalore – 560 038
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-xs text-charcoal-400 hover:text-gold-400 transition-colors"
              >
                <Phone size={13} className="text-gold-500 flex-shrink-0" />
                +91 98765 43210
              </a>
              <a
                href="mailto:hello@alinerealty.in"
                className="flex items-center gap-2 text-xs text-charcoal-400 hover:text-gold-400 transition-colors"
              >
                <Mail size={13} className="text-gold-500 flex-shrink-0" />
                hello@alinerealty.in
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center border border-charcoal-700 text-charcoal-400 hover:border-gold-500 hover:text-gold-400 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-charcoal-300 mb-5">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-xs text-charcoal-500 hover:text-gold-400 transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-600">
          <p>© {new Date().getFullYear()} A-Line Realty. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-charcoal-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-charcoal-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-charcoal-400 transition-colors">
              RERA Disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
