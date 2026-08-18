"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECT } from "@/lib/project-data";

const GALLERY = [
  { src: PROJECT.renders.exterior3,    alt: "Suraksha Whispering Waves exterior view" },
  { src: PROJECT.renders.clubhouse,    alt: "Suraksha Whispering Waves clubhouse" },
  { src: PROJECT.renders.pool,         alt: "Suraksha Whispering Waves swimming pool" },
  { src: PROJECT.renders.garden,       alt: "Suraksha Whispering Waves dense garden" },
  { src: PROJECT.renders.amphitheatre, alt: "Suraksha Whispering Waves amphitheatre" },
  { src: PROJECT.renders.pavilion,     alt: "Suraksha Whispering Waves pavilion area" },
  { src: PROJECT.renders.koi,          alt: "Suraksha Whispering Waves koi pond" },
  { src: PROJECT.renders.terrace,      alt: "Suraksha Whispering Waves terraced garden" },
  { src: PROJECT.renders.deck,         alt: "Suraksha Whispering Waves viewing deck" },
  { src: PROJECT.renders.gym,          alt: "Suraksha Whispering Waves open gym" },
  { src: PROJECT.renders.play,         alt: "Suraksha Whispering Waves children play area" },
  { src: PROJECT.renders.herbGarden,   alt: "Suraksha Whispering Waves herb garden" },
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx(i => i !== null ? (i === 0 ? GALLERY.length - 1 : i - 1) : null);
  const next = () => setLightboxIdx(i => i !== null ? (i === GALLERY.length - 1 ? 0 : i + 1) : null);

  return (
    <>
      <section id="gallery" className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.5 }}
            className="text-center mb-14"
          >
            <p className="text-gold-500 text-sm font-semibold tracking-[0.12em] uppercase mb-4">Gallery</p>
            <h2 className="font-display text-slate-900 text-3xl sm:text-4xl">
              Project Gallery
            </h2>
          </motion.div>

          {/* Grid — masonry-like with varying heights */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {GALLERY.map((img, i) => (
              <motion.button
                key={i}
                initial={{ opacity:0, y:12 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.4, delay: (i % 6) * 0.05 }}
                onClick={() => openLightbox(i)}
                className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                  i === 0 || i === 5 ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
                }`}
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale:0.95 }}
              animate={{ scale:1 }}
              exit={{ scale:0.95 }}
              className="relative max-w-5xl w-full aspect-[16/10] rounded-lg overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={GALLERY[lightboxIdx].src}
                alt={GALLERY[lightboxIdx].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Controls */}
            <button onClick={e => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 backdrop-blur cursor-pointer"
              aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <button onClick={e => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 backdrop-blur cursor-pointer"
              aria-label="Next">
              <ChevronRight size={20} />
            </button>
            <button onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 backdrop-blur cursor-pointer"
              aria-label="Close">
              <X size={20} />
            </button>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs">
              {lightboxIdx + 1} / {GALLERY.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
