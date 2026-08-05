"use client";

import { ArrowDown, MapPin, Star, TrendingUp } from "lucide-react";

const stats = [
  { value: "500+", label: "Properties Sold" },
  { value: "12+", label: "Years Experience" },
  { value: "₹2000Cr+", label: "Total Transactions" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Deep dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900" />
        {/* Gold accent radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gold-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gold-400/8 blur-[100px]" />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,160,23,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 mb-6 px-4 py-2 border border-gold-500/40 bg-gold-500/10 backdrop-blur-sm">
            <MapPin size={13} className="text-gold-400" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-400">
              Bangalore's Trusted Channel Partner
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up-delay-1 font-serif font-bold leading-[1.1] mb-6">
            <span className="block text-4xl sm:text-6xl lg:text-7xl text-white">
              Find Your
            </span>
            <span className="block text-4xl sm:text-6xl lg:text-7xl gold-shimmer mt-1">
              Dream Home
            </span>
            <span className="block text-4xl sm:text-6xl lg:text-7xl text-white mt-1">
              in Bangalore
            </span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in-up-delay-2 text-lg sm:text-xl text-charcoal-300 max-w-2xl leading-relaxed mb-10">
            A-Line Realty curates premium residential and commercial properties
            across Bangalore's most coveted neighbourhoods — with unmatched
            market expertise and white-glove service.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up-delay-3 flex flex-wrap gap-4 mb-16">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold bg-gold-500 text-white border border-gold-500 hover:bg-gold-400 hover:border-gold-400 transition-all duration-300 shadow-lg hover:shadow-gold-500/30"
            >
              <TrendingUp size={18} />
              Explore Projects
            </button>
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold bg-transparent text-gold-400 border border-gold-500/60 hover:border-gold-400 hover:text-gold-300 transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          {/* Rating badge */}
          <div className="animate-fade-in-up-delay-4 inline-flex items-center gap-3 px-4 py-3 border border-charcoal-700 bg-charcoal-800/60 backdrop-blur-sm">
            <div className="flex text-gold-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm text-charcoal-200">
              <strong className="text-white">4.9/5</strong> — Rated by 300+ happy homeowners
            </span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-charcoal-700 bg-charcoal-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-charcoal-700">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-6 py-6 text-center hover:bg-charcoal-800/50 transition-colors duration-200"
              >
                <div className="font-serif text-2xl sm:text-3xl font-bold text-gold-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-medium uppercase tracking-widest text-charcoal-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-36 right-8 lg:right-16 z-10 flex flex-col items-center gap-2 text-charcoal-500 hover:text-gold-400 transition-colors duration-300 cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase rotate-90 mb-1">
          Scroll
        </span>
        <ArrowDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
