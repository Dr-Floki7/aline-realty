"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Phone, AlertCircle } from "lucide-react";
import { getStoredUtm } from "@/lib/utm";
import { trackEvent, GA_EVENTS } from "@/lib/analytics";

export interface LeadFormProps {
  enquiryType?: string;
  heading?:     string;
  subheading?:  string;
  compact?:     boolean;
  onSuccess?:   () => void;
  ctaLabel?:    string;
}

const CONFIGS = ["", "2 BHK", "3 BHK", "4 BHK", "Not decided yet"];
const TIMES   = ["", "Morning (9am–12pm)", "Afternoon (12pm–4pm)", "Evening (4pm–7pm)", "Any time"];

const WA_BASE = "https://wa.me/";
const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917337861296";
const WA_MSG    = process.env.NEXT_PUBLIC_WHATSAPP_MSG    ||
  "Hi%2C%20I%20would%20like%20to%20know%20the%20latest%20price%20and%20availability%20for%20Suraksha%20Whispering%20Waves.";

function isValidIndianMobile(v: string): boolean {
  const c = v.replace(/[\s\-().+]/g, "");
  return /^[6-9]\d{9}$/.test(c) || /^(?:91)?[6-9]\d{9}$/.test(c);
}

export default function LeadForm({
  enquiryType = "general",
  heading     = "Get Latest Price & Details",
  subheading  = "Fill in your details and we'll get back to you shortly.",
  compact     = false,
  onSuccess,
  ctaLabel    = "Request Details",
}: LeadFormProps) {
  const [name,    setName]    = useState("");
  const [phone,   setPhone]   = useState("");
  const [config,  setConfig]  = useState("");
  const [time,    setTime]    = useState("");
  const [honey,   setHoney]   = useState(""); // honeypot
  const [status,  setStatus]  = useState<"idle"|"loading"|"success"|"error">("idle");
  const [errMsg,  setErrMsg]  = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const submitted = useRef(false);

  const nameErr  = touched.name  && name.trim().length < 2  ? "Please enter your name."                       : "";
  const phoneErr = touched.phone && !isValidIndianMobile(phone) ? "Please enter a valid 10-digit mobile number." : "";
  const hasErrors = !!nameErr || !!phoneErr;

  // Fire form_start on first field interaction
  const onFirstTouch = (field: string) => {
    setTouched(p => {
      if (!Object.keys(p).length) trackEvent(GA_EVENTS.FORM_START, { enquiry_type: enquiryType });
      return { ...p, [field]: true };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, phone: true });
    if (hasErrors || !name || !phone) return;
    if (submitted.current) return;
    submitted.current = true;
    setStatus("loading");

    const utm = getStoredUtm();
    const payload = {
      name:        name.trim(),
      phone:       phone.trim(),
      config,
      preferredTime: time,
      enquiryType,
      pageUrl:     typeof window !== "undefined" ? window.location.href : "",
      utmSource:   utm.utm_source   || "",
      utmMedium:   utm.utm_medium   || "",
      utmCampaign: utm.utm_campaign || "",
      utmTerm:     utm.utm_term     || "",
      utmContent:  utm.utm_content  || "",
      referrer:    utm.referrer     || "",
      userAgent:   typeof navigator !== "undefined" ? navigator.userAgent : "",
      website:     honey, // honeypot
    };

    try {
      const res = await fetch("/api/lead", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        trackEvent(GA_EVENTS.FORM_SUBMIT, { enquiry_type: enquiryType });
        onSuccess?.();
      } else {
        setStatus("error");
        setErrMsg(json.error || "Something went wrong. Please call us directly.");
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
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100"
      >
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="text-green-500" size={28} />
        </div>
        <h3 className="heading-md text-xl text-slate-900 mb-2">Thank You!</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          We&apos;ve received your enquiry and will contact you shortly.
        </p>
        <a
          href={`${WA_BASE}${WA_NUMBER}?text=${WA_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent(GA_EVENTS.WHATSAPP_CLICK, { source: "form_success" })}
          className="btn-primary text-sm px-5 py-2.5 inline-flex"
        >
          Chat on WhatsApp
        </a>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white rounded-2xl shadow-sm border border-slate-100 ${compact ? "p-5" : "p-7"}`}
    >
      {/* Heading */}
      {(heading || subheading) && (
        <div className={`${compact ? "mb-5" : "mb-6"}`}>
          {heading && (
            <h3 className={`heading-md text-slate-900 ${compact ? "text-lg mb-1" : "text-xl mb-1.5"}`}>
              {heading}
            </h3>
          )}
          {subheading && !compact && (
            <p className="text-slate-500 text-sm leading-relaxed">{subheading}</p>
          )}
        </div>
      )}

      {/* Honeypot — hidden from humans, visible to bots */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" value={honey}
          onChange={e => setHoney(e.target.value)} tabIndex={-1} autoComplete="off" />
      </div>

      <div className={`space-y-4 ${compact ? "space-y-3" : ""}`}>
        {/* Name */}
        <div>
          <label htmlFor="lead-name" className="block text-xs font-semibold text-slate-600 mb-1.5">
            Full Name <span className="text-gold-500">*</span>
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            onBlur={() => onFirstTouch("name")}
            placeholder="Your name"
            className={`form-input ${nameErr ? "error" : ""}`}
            aria-describedby={nameErr ? "name-err" : undefined}
          />
          <AnimatePresence>
            {nameErr && (
              <motion.p id="name-err" role="alert"
                initial={{ opacity:0, y:-4 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
                className="text-xs text-red-500 mt-1 flex items-center gap-1"
              >
                <AlertCircle size={11} /> {nameErr}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="lead-phone" className="block text-xs font-semibold text-slate-600 mb-1.5">
            Mobile Number <span className="text-gold-500">*</span>
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="numeric"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
            onBlur={() => onFirstTouch("phone")}
            placeholder="+91 XXXXX XXXXX"
            className={`form-input ${phoneErr ? "error" : ""}`}
            aria-describedby={phoneErr ? "phone-err" : undefined}
          />
          <AnimatePresence>
            {phoneErr && (
              <motion.p id="phone-err" role="alert"
                initial={{ opacity:0, y:-4 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
                className="text-xs text-red-500 mt-1 flex items-center gap-1"
              >
                <AlertCircle size={11} /> {phoneErr}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Config */}
        <div>
          <label htmlFor="lead-config" className="block text-xs font-semibold text-slate-600 mb-1.5">
            Configuration
          </label>
          <select id="lead-config" name="config" value={config}
            onChange={e => setConfig(e.target.value)}
            className="form-input appearance-none cursor-pointer"
          >
            {CONFIGS.map(c => (
              <option key={c} value={c}>{c || "Select configuration"}</option>
            ))}
          </select>
        </div>

        {/* Contact time — not shown in compact mode */}
        {!compact && (
          <div>
            <label htmlFor="lead-time" className="block text-xs font-semibold text-slate-600 mb-1.5">
              Preferred Contact Time
            </label>
            <select id="lead-time" name="preferredTime" value={time}
              onChange={e => setTime(e.target.value)}
              className="form-input appearance-none cursor-pointer"
            >
              {TIMES.map(t => (
                <option key={t} value={t}>{t || "Any time"}</option>
              ))}
            </select>
          </div>
        )}

        {/* Error state */}
        <AnimatePresence>
          {status === "error" && (
            <motion.div
              initial={{ opacity:0, y:-4 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
              className="bg-red-50 border border-red-200 rounded-lg p-3 text-xs text-red-600 flex items-start gap-2"
            >
              <AlertCircle size={14} className="shrink-0 mt-0.5" />
              <span>{errMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          aria-live="polite"
        >
          {status === "loading" ? (
            <><Loader2 size={16} className="animate-spin" /> Sending…</>
          ) : ctaLabel}
        </button>

        {/* Or call */}
        <div className="text-center">
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE || "+917337861296"}`}
            onClick={() => trackEvent(GA_EVENTS.PHONE_CLICK, { source: "form_cta" })}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-gold-600 transition-colors"
          >
            <Phone size={12} />
            Or call directly: {process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+91 73378 61296"}
          </a>
        </div>

        <p className="text-[11px] text-slate-400 text-center leading-relaxed">
          Your information is kept confidential and will not be shared with third parties.
        </p>
      </div>
    </form>
  );
}
