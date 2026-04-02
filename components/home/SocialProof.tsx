"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Before KOLX, our KOL approval process lived entirely in email. We had no audit trail, no consistency, and compliance reviews took weeks. Now our average cycle time is under five days.",
    name: "VP of Medical Affairs",
    company: "Top 10 Global Pharma",
    initials: "VP",
  },
  {
    quote:
      "The configurable workflow engine was the deciding factor for us. We have different approval requirements for advisory boards versus consulting agreements, and KOLX handles both without any workarounds.",
    name: "Director, KOL Strategy",
    company: "Specialty Biotech",
    initials: "DK",
  },
  {
    quote:
      "Our compliance team finally has confidence in our KOL program. Every engagement is documented, every approval is timestamped, and we can answer auditor questions in minutes.",
    name: "Chief Compliance Officer",
    company: "Medical Device Manufacturer",
    initials: "CC",
  },
];

const stats = [
  { value: "4.2×", label: "faster approval cycle times" },
  { value: "94%", label: "reduction in duplicate KOL records" },
  { value: "100%", label: "audit readiness on day one" },
  { value: "< 1 week", label: "average onboarding to first workflow" },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-700 bg-slate-900 text-slate-300 text-sm font-medium mb-6">
            Trusted by medical affairs teams
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            KOL teams that run on KOLX
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            From large pharma to specialty biotech, teams replace spreadsheet chaos with governed, auditable KOL operations.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center p-6 rounded-2xl bg-slate-900 border border-slate-800"
            >
              <p className="text-3xl font-bold gradient-text-light mb-2">{stat.value}</p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <blockquote className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company logo strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-slate-800"
        >
          <p className="text-center text-xs text-slate-600 uppercase tracking-wider font-medium mb-8">
            Trusted across the life sciences industry
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-40">
            {[
              "Global Pharma Co.",
              "BioInnovate",
              "MedDevice Corp",
              "Precision Health",
              "ClinTrials Group",
              "Nexagen Bio",
            ].map((name) => (
              <div key={name} className="text-slate-400 font-semibold text-sm tracking-wide">
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
