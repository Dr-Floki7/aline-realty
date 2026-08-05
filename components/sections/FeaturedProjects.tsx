"use client";

import { useState } from "react";
import { MapPin, BedDouble, Bath, Maximize, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

type ProjectCategory = "All" | "Residential" | "Commercial" | "Luxury";

interface Project {
  id: number;
  name: string;
  developer: string;
  location: string;
  type: ProjectCategory;
  status: "Ready to Move" | "Under Construction" | "Pre-Launch";
  price: string;
  beds?: number;
  baths?: number;
  area: string;
  gradient: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Prestige Lakeside Habitat",
    developer: "Prestige Group",
    location: "Whitefield, Bangalore",
    type: "Residential",
    status: "Ready to Move",
    price: "₹1.2 Cr onwards",
    beds: 3,
    baths: 3,
    area: "1,650 sq.ft",
    gradient: "from-charcoal-700 to-charcoal-800",
  },
  {
    id: 2,
    name: "Brigade Orchards",
    developer: "Brigade Group",
    location: "Devanahalli, Bangalore",
    type: "Residential",
    status: "Under Construction",
    price: "₹85 L onwards",
    beds: 2,
    baths: 2,
    area: "1,200 sq.ft",
    gradient: "from-charcoal-800 to-charcoal-700",
  },
  {
    id: 3,
    name: "Sobha Royal Pavilion",
    developer: "Sobha Limited",
    location: "Sarjapur Road, Bangalore",
    type: "Luxury",
    status: "Ready to Move",
    price: "₹3.5 Cr onwards",
    beds: 4,
    baths: 4,
    area: "3,200 sq.ft",
    gradient: "from-gold-900/30 to-charcoal-800",
  },
  {
    id: 4,
    name: "Manyata Embassy Park",
    developer: "Manyata Developers",
    location: "Hebbal, Bangalore",
    type: "Commercial",
    status: "Ready to Move",
    price: "₹75 L onwards",
    area: "850 sq.ft",
    gradient: "from-charcoal-700 to-charcoal-900",
  },
  {
    id: 5,
    name: "Godrej Woodscapes",
    developer: "Godrej Properties",
    location: "Budigere Cross, Bangalore",
    type: "Residential",
    status: "Pre-Launch",
    price: "₹70 L onwards",
    beds: 2,
    baths: 2,
    area: "1,100 sq.ft",
    gradient: "from-charcoal-800 to-charcoal-700",
  },
  {
    id: 6,
    name: "Total Environment Pursuit",
    developer: "Total Environment",
    location: "Yelahanka, Bangalore",
    type: "Luxury",
    status: "Under Construction",
    price: "₹2.1 Cr onwards",
    beds: 3,
    baths: 3,
    area: "2,400 sq.ft",
    gradient: "from-gold-900/20 to-charcoal-800",
  },
];

const categories: ProjectCategory[] = ["All", "Residential", "Commercial", "Luxury"];

const statusColor: Record<Project["status"], string> = {
  "Ready to Move": "bg-green-500/15 text-green-400 border-green-500/30",
  "Under Construction": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Pre-Launch": "bg-gold-500/15 text-gold-400 border-gold-500/30",
};

export default function FeaturedProjects() {
  const [active, setActive] = useState<ProjectCategory>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-charcoal-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Listings"
          title="Handpicked Properties"
          subtitle="Curated from Bangalore's most sought-after developments — vetted, verified, and ready for you."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                active === cat
                  ? "bg-gold-500 border-gold-500 text-white"
                  : "bg-transparent border-charcoal-600 text-charcoal-300 hover:border-gold-500 hover:text-gold-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="group bg-charcoal-900 border border-charcoal-700 hover:border-gold-500/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/5 hover:-translate-y-1 flex flex-col"
            >
              {/* Image area */}
              <div
                className={`relative h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "linear-gradient(45deg, rgba(184,134,11,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(184,134,11,0.1) 25%, transparent 25%)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <span className="font-serif text-4xl font-bold text-white/10 select-none">
                  {project.name.charAt(0)}
                </span>

                {/* Status badge */}
                <span
                  className={`absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2 py-1 border ${statusColor[project.status]}`}
                >
                  {project.status}
                </span>

                {/* Type badge */}
                <span className="absolute top-3 right-3 text-[10px] font-bold tracking-widest uppercase px-2 py-1 bg-charcoal-900/80 text-charcoal-300 border border-charcoal-700">
                  {project.type}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 className="font-serif text-lg font-semibold text-white leading-tight group-hover:text-gold-100 transition-colors duration-200">
                    {project.name}
                  </h3>
                </div>

                <p className="text-xs text-charcoal-400 mb-1">{project.developer}</p>

                <div className="flex items-center gap-1 text-charcoal-400 text-xs mb-4">
                  <MapPin size={12} className="text-gold-500 flex-shrink-0" />
                  {project.location}
                </div>

                {/* Specs */}
                <div className="flex items-center gap-4 text-xs text-charcoal-400 mb-5">
                  {project.beds && (
                    <span className="flex items-center gap-1">
                      <BedDouble size={13} className="text-gold-500/70" />
                      {project.beds} Beds
                    </span>
                  )}
                  {project.baths && (
                    <span className="flex items-center gap-1">
                      <Bath size={13} className="text-gold-500/70" />
                      {project.baths} Baths
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Maximize size={13} className="text-gold-500/70" />
                    {project.area}
                  </span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-charcoal-800">
                  <span className="font-serif text-base font-bold text-gold-400">
                    {project.price}
                  </span>
                  <button className="flex items-center gap-1 text-xs font-semibold text-charcoal-400 hover:text-gold-400 transition-colors duration-200 group/btn cursor-pointer">
                    View Details
                    <ArrowRight
                      size={13}
                      className="group-hover/btn:translate-x-1 transition-transform duration-200"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-charcoal-400 text-sm mb-4">
            Looking for something specific? We have 500+ more projects in our portfolio.
          </p>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold bg-transparent text-gold-400 border border-gold-500 hover:bg-gold-500 hover:text-white transition-all duration-300 cursor-pointer"
          >
            Request Custom Search
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
