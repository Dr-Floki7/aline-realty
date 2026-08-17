"use client";

import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Placeholder gallery items — replace with actual project images when available
const GALLERY_ITEMS = [
  { id: 1, label: "Project Exterior", color: "from-slate-200 to-slate-300" },
  { id: 2, label: "Club Élan", color: "from-gold-100 to-gold-200" },
  { id: 3, label: "Living Room", color: "from-amber-50 to-amber-100" },
  { id: 4, label: "Begur Lake View", color: "from-sky-100 to-sky-200" },
  { id: 5, label: "Amenities", color: "from-green-100 to-green-200" },
  { id: 6, label: "Bedroom", color: "from-slate-100 to-slate-200" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <motion.span variants={fadeUp} className="eyebrow mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Gallery
          </motion.span>
          <motion.h2 variants={fadeUp} className="heading-lg text-3xl sm:text-4xl text-slate-900 mb-4">
            Project{" "}
            <span className="text-gold-500">Gallery</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="gold-bar mx-auto mb-5" />
          <motion.p variants={fadeUp} className="text-slate-500 text-[15.5px] leading-relaxed">
            A glimpse into the lifestyle at Suraksha Whispering Waves.
            Official project images will be updated as they become available.
          </motion.p>
        </motion.div>

        {/* Gallery grid — placeholder layout */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {GALLERY_ITEMS.map(item => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className={`relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${item.color} border border-slate-200 flex items-center justify-center group`}
            >
              <div className="text-center">
                <Camera size={28} className="text-slate-400 mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-sm font-medium text-slate-500">{item.label}</p>
                <p className="text-[10px] text-slate-400 mt-1">Image coming soon</p>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Brochure CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-slate-500 text-sm mb-4">
            Want to see more? Download the full project brochure.
          </p>
          <button
            onClick={() => {
              trackEvent(GA_EVENTS.BROCHURE_CLICK, { source: "gallery" });
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary cursor-pointer"
          >
            Download Brochure <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
