"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, ChevronDown } from "lucide-react";

const WA_URL =
  "https://wa.me/917337861296?text=Hi%20A-Line%20Realty%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
};

export default function Hero() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* ── Background pattern ── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        {/* Soft gold radial glow — top right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gold-100/60 blur-3xl" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #c7a246 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Bottom left accent */}
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gold-50 blur-2xl" />
      </div>

      {/* ── Main content ── */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — copy */}
          <motion.div
            variants={{ show: { transition: { staggerChildren: 0.13 } } }}
            initial="hidden"
            animate="show"
          >
            {/* Pill */}
            <motion.div variants={fadeUp}>
              <span className="section-pill mb-6 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                Trusted Real Estate Consultancy · Bengaluru
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-bold text-neutral-900 leading-[1.13] mb-5"
            >
              Your Dream Property{" "}
              <span className="relative inline-block">
                <span className="text-gold-500">Starts Here</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gold-300/60 rounded-full" />
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              className="text-[16.5px] text-neutral-500 leading-relaxed mb-8 max-w-lg"
            >
              We help you find, evaluate, and purchase residential &amp; commercial
              properties across Bengaluru — with expert guidance, zero hidden costs,
              and complete hand-holding from search to possession.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="tel:+917337861296"
                className="btn-gold flex items-center gap-2 px-6 py-3 text-[14px]"
                aria-label="Call A-Line Realty"
              >
                <Phone size={15} strokeWidth={2.5} />
                Call Us Now
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-[14px] font-semibold rounded-lg bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-all hover:-translate-y-0.5 hover:shadow-md"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={15} strokeWidth={2.5} />
                WhatsApp
              </a>
              <button
                onClick={scrollToContact}
                className="btn-outline flex items-center gap-2 px-6 py-3 text-[14px] cursor-pointer"
              >
                Contact Us <ArrowRight size={14} />
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-5 text-sm text-neutral-500"
            >
              {["250+ Projects", "₹500 Cr+ Deals", "4.9★ Rated"].map((b) => (
                <span key={b} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                  {b}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
            aria-hidden
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gold-50 via-white to-gold-100 border border-gold-100 shadow-2xl shadow-gold-200/40 aspect-[4/3] flex items-center justify-center">
                {/* Geometric pattern fill */}
                <div className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(45deg,#c7a246 25%,transparent 25%)," +
                      "linear-gradient(-45deg,#c7a246 25%,transparent 25%)," +
                      "linear-gradient(45deg,transparent 75%,#c7a246 75%)," +
                      "linear-gradient(-45deg,transparent 75%,#c7a246 75%)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0,0 10px,10px -10px,-10px 0",
                  }}
                />
                <div className="relative z-10 text-center px-10">
                  <p className="font-serif text-5xl font-bold text-gold-500 mb-2">A-Line</p>
                  <p className="text-sm font-semibold tracking-[0.3em] uppercase text-neutral-500">
                    Real Estate · Bengaluru
                  </p>
                </div>
              </div>

              {/* Floating stat card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-neutral-100 px-5 py-4"
              >
                <p className="font-serif text-2xl font-bold text-gold-500">250+</p>
                <p className="text-xs text-neutral-500 font-medium mt-0.5">Projects Sold</p>
              </motion.div>

              {/* Floating stat card 2 */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-neutral-100 px-5 py-4"
              >
                <p className="font-serif text-2xl font-bold text-gold-500">4.9★</p>
                <p className="text-xs text-neutral-500 font-medium mt-0.5">Client Rating</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-400 hover:text-gold-500 transition-colors cursor-pointer"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">Explore</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
