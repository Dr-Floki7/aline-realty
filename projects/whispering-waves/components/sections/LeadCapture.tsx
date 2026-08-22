"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle, Phone } from "lucide-react";
import { getStoredUtm } from "@/lib/utm";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";
import { ALINE } from "@/lib/project-data";

const CONFIGS = ["", "2 BHK", "3 BHK", "4 BHK"];

function isValidIndianMobile(v: string): boolean {
  const c = v.replace(/[\s\-().+]/g, "");
  return /^[6-9]\d{9}$/.test(c) || /^(?:91)?[6-9]\d{9}$/.test(c);
}

export default function LeadCapture() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [config, setConfig] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");
  const submitted = useRef(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || name.trim().length < 2) return;
    if (!isValidIndianMobile(phone)) return;
    if (submitted.current) return;
    submitted.current = true;
    setStatus("loading");
    trackEvent(GA_EVENTS.FORM_START, { enquiry_type: "price_floorplan" });

    const utm = getStoredUtm();
    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      config,
      preferredTime: "",
      enquiryType: "price_floorplan",
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      utmSource: utm.utm_source || "",
      utmMedium: utm.utm_medium || "",
      utmCampaign: utm.utm_campaign || "",
      utmTerm: utm.utm_term || "",
      utmContent: utm.utm_content || "",
      referrer: utm.referrer || "",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      website: "", // honeypot
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        trackEvent(GA_EVENTS.FORM_SUBMIT, { enquiry_type: "price_floorplan" });
      } else {
        setStatus("error");
        setErrMsg(json.error || "Something went wrong. Please call us.");
        submitted.current = false;
      }
    } catch {
      setStatus("error");
      setErrMsg("Network error. Please try again or call us.");
      submitted.current = false;
    }
  };

  if (status === "success") {
    return (
      <section className="py-12 lg:py-16 bg-wave-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle2 size={36} className="text-green-400 mx-auto mb-3" />
            <p className="font-display text-white text-xl mb-2">Thank You!</p>
            <p className="text-wave-300 text-sm">
              We&apos;ll share the latest price and floor plans shortly.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-16 bg-wave-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-display text-white text-2xl sm:text-3xl mb-2">
            Get Latest Price &amp; Floor Plans
          </h2>
          <p className="text-wave-300 text-sm sm:text-[15px]">
            Get configuration-wise pricing, floor plans &amp; current availability.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col sm:flex-row items-stretch gap-3 max-w-3xl mx-auto"
        >
          {/* Name */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            autoComplete="name"
            className="flex-1 px-4 py-3.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder-wave-400 text-sm focus:outline-none focus:border-terra-400 focus:ring-1 focus:ring-terra-400/30 transition-all"
          />

          {/* Phone */}
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Mobile Number"
            required
            autoComplete="tel"
            inputMode="numeric"
            className="flex-1 px-4 py-3.5 rounded-lg bg-white/10 border border-white/15 text-white placeholder-wave-400 text-sm focus:outline-none focus:border-terra-400 focus:ring-1 focus:ring-terra-400/30 transition-all"
          />

          {/* Config */}
          <select
            value={config}
            onChange={(e) => setConfig(e.target.value)}
            className="sm:w-36 px-4 py-3.5 rounded-lg bg-white/10 border border-white/15 text-wave-300 text-sm focus:outline-none focus:border-terra-400 appearance-none cursor-pointer"
          >
            {CONFIGS.map((c) => (
              <option key={c} value={c} className="bg-wave-900 text-white">
                {c || "Config"}
              </option>
            ))}
          </select>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary px-6 py-3.5 text-sm whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <>Get Price &amp; Floor Plans <ArrowRight size={14} /></>
            )}
          </button>
        </form>

        {/* Error */}
        <AnimatePresence>
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center text-red-400 text-xs mt-3 flex items-center justify-center gap-1"
            >
              <AlertCircle size={12} /> {errMsg}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Call fallback */}
        <p className="text-center mt-4">
          <a
            href={`tel:${ALINE.phoneRaw}`}
            onClick={() => trackEvent(GA_EVENTS.PHONE_CLICK, { source: "lead_capture" })}
            className="inline-flex items-center gap-1.5 text-xs text-wave-400 hover:text-wave-200 transition-colors"
          >
            <Phone size={11} /> Or call: {ALINE.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
