"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, User, MessageSquare, CheckCircle2 } from "lucide-react";

const WA_URL =
  "https://wa.me/917337861296?text=Hi%20A-Line%20Realty%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  const [done, setDone]     = useState(false);
  const [busy, setBusy]     = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    setTimeout(() => { setBusy(false); setDone(true); }, 1000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span variants={fadeUp} className="section-pill mb-5 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            Get in Touch
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight mb-3">
            Let&apos;s Find Your{" "}
            <span className="text-gold-500">Perfect Property</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="gold-divider mx-auto mb-5" />
          <motion.p variants={fadeUp} className="text-[15.5px] text-neutral-500 leading-relaxed">
            Reach out to us and we&apos;ll respond within a few hours. No commitment, no pressure.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Founder card */}
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center shrink-0">
                  <User size={22} className="text-gold-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-[15px]">Zakir Ali Mishrikoti</p>
                  <p className="text-xs text-neutral-500">Founder, A-Line Realty</p>
                </div>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Personally involved in every client engagement, Zakir brings deep
                market expertise and a commitment to transparent, stress-free
                property transactions.
              </p>
            </div>

            {/* Contact details */}
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6 space-y-4">
              <a href="tel:+917337861296" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-gold-50 flex items-center justify-center shrink-0 group-hover:bg-gold-100 transition-colors">
                  <Phone size={15} className="text-gold-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">Phone</p>
                  <p className="text-[14px] font-semibold text-neutral-800 group-hover:text-gold-600 transition-colors">+91 73378 61296</p>
                </div>
              </a>
              <a href="mailto:alinerealty26@gmail.com" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-gold-50 flex items-center justify-center shrink-0 group-hover:bg-gold-100 transition-colors">
                  <Mail size={15} className="text-gold-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">Email</p>
                  <p className="text-[14px] font-semibold text-neutral-800 group-hover:text-gold-600 transition-colors break-all">alinerealty26@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gold-50 flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-gold-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">Location</p>
                  <p className="text-[14px] font-semibold text-neutral-800">Bengaluru, Karnataka</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden h-44 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-neutral-100 opacity-60" />
              <div className="relative z-10 text-center">
                <MapPin size={24} className="text-gold-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-neutral-600">Bengaluru, Karnataka</p>
                <a
                  href="https://maps.google.com/?q=Bengaluru+Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gold-500 hover:text-gold-600 underline underline-offset-2 mt-1 inline-block"
                >
                  Open in Maps →
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1ebe5d] transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <MessageSquare size={15} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3"
          >
            {done ? (
              <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-10 flex flex-col items-center justify-center text-center h-full min-h-[420px]">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-green-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-2">Thank You!</h3>
                <p className="text-neutral-500 text-[15px] max-w-sm">
                  We&apos;ve received your enquiry. Our team will get back to you within a few hours.
                </p>
                <button
                  onClick={() => setDone(false)}
                  className="mt-6 text-sm text-gold-500 hover:text-gold-600 underline underline-offset-2 cursor-pointer"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-8 space-y-5"
              >
                <h3 className="font-serif text-xl font-semibold text-neutral-900 mb-1">
                  Send us an Enquiry
                </h3>
                <p className="text-sm text-neutral-400 mb-6">
                  Fill in the form and we&apos;ll be in touch shortly.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { id: "name",  label: "Full Name",     type: "text",  placeholder: "Your name",         required: true  },
                    { id: "phone", label: "Phone Number",  type: "tel",   placeholder: "+91 XXXXX XXXXX",    required: true  },
                  ].map((f) => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-xs font-bold tracking-widest uppercase text-neutral-400 mb-1.5">
                        {f.label}{f.required && <span className="text-gold-500 ml-0.5">*</span>}
                      </label>
                      <input
                        id={f.id} name={f.id} type={f.type} required={f.required}
                        placeholder={f.placeholder}
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-900 text-sm placeholder-neutral-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase text-neutral-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email" name="email" type="email" placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-900 text-sm placeholder-neutral-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-xs font-bold tracking-widest uppercase text-neutral-400 mb-1.5">
                    I&apos;m Looking For
                  </label>
                  <select
                    id="interest" name="interest"
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all cursor-pointer appearance-none"
                  >
                    <option value="">Select property type</option>
                    {["Residential Property","Commercial Property","Investment Property","Home Loan Guidance","General Enquiry"].map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold tracking-widest uppercase text-neutral-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Tell us about your requirements, budget, preferred location…"
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-900 text-sm placeholder-neutral-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={busy}
                  className="btn-gold w-full py-3 text-[14px] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {busy ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Send Enquiry"
                  )}
                </button>

                <p className="text-xs text-neutral-400 text-center">
                  We respect your privacy — your information is never shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
