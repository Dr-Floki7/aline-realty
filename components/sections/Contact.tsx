"use client";

import { useState, type FormEvent } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const contactInfo = [
  {
    icon: MapPin,
    label: "Our Office",
    value: "No. 42, 1st Floor, 100 Feet Road,\nIndiranagar, Bangalore – 560 038",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210\n+91 80 4567 8910",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@alinerealty.in\nsales@alinerealty.in",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Sat: 9:00 AM – 7:00 PM\nSunday: 10:00 AM – 3:00 PM",
  },
];

const budgetOptions = [
  "Under ₹50 Lakhs",
  "₹50L – ₹1 Crore",
  "₹1 Cr – ₹2 Cr",
  "₹2 Cr – ₹5 Cr",
  "Above ₹5 Crore",
];

const propertyTypes = [
  "1 BHK",
  "2 BHK",
  "3 BHK",
  "4 BHK+",
  "Villa",
  "Commercial",
  "Plot",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-charcoal-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Start Your Property Journey"
          subtitle="Ready to find your ideal property? Fill in the form and our team will connect with you within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center border border-charcoal-700 bg-charcoal-900">
                  <Icon size={18} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-charcoal-500 mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-charcoal-200 whitespace-pre-line leading-relaxed">
                    {value}
                  </p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="mt-4 h-48 bg-charcoal-800 border border-charcoal-700 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(rgba(184,134,11,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(184,134,11,0.3) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="text-center z-10">
                <MapPin size={24} className="text-gold-400 mx-auto mb-2" />
                <p className="text-xs text-charcoal-400">Indiranagar, Bangalore</p>
                <a
                  href="https://maps.google.com/?q=Indiranagar+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gold-400 hover:text-gold-300 underline underline-offset-2 mt-1 inline-block"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-gold-500/30 bg-charcoal-900">
                <CheckCircle2 size={48} className="text-gold-400 mb-4" />
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-charcoal-300 max-w-sm">
                  We&apos;ve received your enquiry. Our team will reach out within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-gold-400 hover:text-gold-300 underline underline-offset-2 cursor-pointer"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-charcoal-900 border border-charcoal-700 p-8 space-y-5"
                noValidate
              >
                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold tracking-widest uppercase text-charcoal-400 mb-2"
                    >
                      Full Name <span className="text-gold-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full bg-charcoal-800 border border-charcoal-700 focus:border-gold-500 text-white placeholder-charcoal-500 px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold tracking-widest uppercase text-charcoal-400 mb-2"
                    >
                      Phone Number <span className="text-gold-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-charcoal-800 border border-charcoal-700 focus:border-gold-500 text-white placeholder-charcoal-500 px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold tracking-widest uppercase text-charcoal-400 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-charcoal-800 border border-charcoal-700 focus:border-gold-500 text-white placeholder-charcoal-500 px-4 py-3 text-sm outline-none transition-colors duration-200"
                  />
                </div>

                {/* Property type */}
                <div>
                  <fieldset>
                    <legend className="block text-xs font-semibold tracking-widest uppercase text-charcoal-400 mb-2">
                      Property Type
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {propertyTypes.map((type) => (
                        <label
                          key={type}
                          className="inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            name="propertyType"
                            value={type}
                            className="accent-gold-500 w-3.5 h-3.5"
                          />
                          <span className="text-xs text-charcoal-300">{type}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-xs font-semibold tracking-widest uppercase text-charcoal-400 mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full bg-charcoal-800 border border-charcoal-700 focus:border-gold-500 text-charcoal-200 px-4 py-3 text-sm outline-none transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Select a budget range</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold tracking-widest uppercase text-charcoal-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirements — location preferences, timeline, any specific project..."
                    className="w-full bg-charcoal-800 border border-charcoal-700 focus:border-gold-500 text-white placeholder-charcoal-500 px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gold-500 text-white font-semibold text-sm border border-gold-500 hover:bg-gold-400 hover:border-gold-400 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Enquiry
                    </>
                  )}
                </button>

                <p className="text-xs text-charcoal-500 text-center">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
