"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  initials: string;
  accentColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Software Engineer",
    location: "Whitefield",
    rating: 5,
    text: "A-Line Realty made my first home purchase completely stress-free. Their team was incredibly knowledgeable about Whitefield's market and found me a 3BHK that was ₹15L under my budget. The documentation support was flawless.",
    initials: "RK",
    accentColor: "bg-gold-500",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Entrepreneur",
    location: "Koramangala",
    rating: 5,
    text: "I was looking for a commercial space for my startup for months. A-Line's commercial team shortlisted three perfect options in two weeks, all RERA compliant and within my budget. Professional, transparent, and genuinely helpful.",
    initials: "PS",
    accentColor: "bg-charcoal-600",
  },
  {
    id: 3,
    name: "Vikram & Ananya Nair",
    role: "Doctors",
    location: "Sarjapur Road",
    rating: 5,
    text: "We'd been searching for a luxury villa for over a year. Aline's team understood exactly what we wanted — privacy, greenery, and proximity to the hospital. They found us a Total Environment project that checks every box. Exceptional service.",
    initials: "VN",
    accentColor: "bg-gold-600",
  },
  {
    id: 4,
    name: "Amit Patel",
    role: "NRI Investor",
    location: "Bangalore (NRI)",
    rating: 5,
    text: "Managing a property purchase from Dubai can be daunting. A-Line handled everything — site visits via video call, power of attorney assistance, and even coordinated with the developer for early possession. Truly end-to-end.",
    initials: "AP",
    accentColor: "bg-charcoal-500",
  },
  {
    id: 5,
    name: "Deepa Rao",
    role: "HR Director",
    location: "HSR Layout",
    rating: 5,
    text: "What I loved most was that they never pushed me to buy beyond my means. They were honest about which projects suited my budget and investment goals. Bought a 2BHK in HSR and it's already appreciated by 18% in two years.",
    initials: "DR",
    accentColor: "bg-gold-500",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const visible = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-charcoal-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Stories"
          title="What Our Clients Say"
          subtitle="Real experiences from homeowners, investors, and business owners who trusted A-Line Realty."
        />

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
          {visible.map((t, idx) => (
            <TestimonialCard key={t.id} testimonial={t} featured={idx === 0} />
          ))}
        </div>

        {/* Mobile single card */}
        <div className="lg:hidden mb-8">
          <TestimonialCard testimonial={testimonials[currentIndex]} featured />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 flex items-center justify-center border border-charcoal-700 text-charcoal-400 hover:border-gold-500 hover:text-gold-400 transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1 transition-all duration-300 cursor-pointer ${
                  i === currentIndex ? "w-8 bg-gold-400" : "w-3 bg-charcoal-600"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 flex items-center justify-center border border-charcoal-700 text-charcoal-400 hover:border-gold-500 hover:text-gold-400 transition-all duration-200 cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial: t,
  featured,
}: {
  testimonial: Testimonial;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col p-7 border transition-all duration-300 ${
        featured
          ? "border-gold-500/50 bg-charcoal-800"
          : "border-charcoal-700 bg-charcoal-900 hover:border-charcoal-600"
      }`}
    >
      {/* Quote icon */}
      <Quote
        size={32}
        className={`mb-4 ${featured ? "text-gold-500/40" : "text-charcoal-700"}`}
        fill="currentColor"
      />

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={13} className="text-gold-400" fill="currentColor" />
        ))}
      </div>

      {/* Review text */}
      <p className="text-charcoal-300 text-sm leading-relaxed flex-1 mb-6">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-5 border-t border-charcoal-800">
        <div
          className={`w-10 h-10 ${t.accentColor} flex items-center justify-center flex-shrink-0`}
        >
          <span className="text-xs font-bold text-white">{t.initials}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{t.name}</p>
          <p className="text-xs text-charcoal-500">
            {t.role} &bull; {t.location}
          </p>
        </div>
      </div>
    </div>
  );
}
