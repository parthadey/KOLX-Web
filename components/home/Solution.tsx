"use client";

import { motion } from "framer-motion";
import { ShieldCheck, GitMerge, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    color: "blue",
    title: "Govern",
    headline: "One system of record for every KOL relationship",
    description:
      "Centralize KOL profiles, ownership assignments, tiering, and engagement history across your entire organization. No more siloed spreadsheets or duplicate records.",
    bullets: [
      "Unified KOL profiles with tier classification",
      "Duplicate detection and data enrichment",
      "AI-powered relationship health scoring",
      "Complete engagement and interaction history",
    ],
  },
  {
    icon: GitMerge,
    color: "cyan",
    title: "Engage",
    headline: "Configurable workflows, not email chains",
    description:
      "Define exactly how engagement requests flow through your organization — manager approval, compliance review, finance sign-off — with a no-code workflow builder.",
    bullets: [
      "Visual drag-and-drop workflow builder",
      "Multi-stakeholder approval routing",
      "Honorarium and budget rule enforcement",
      "Readiness checklists and document management",
    ],
  },
  {
    icon: BarChart3,
    color: "emerald",
    title: "Comply",
    headline: "Audit-ready by design, not by accident",
    description:
      "Every action is logged. Every decision has a record. When auditors come, you answer in minutes — not weeks of email archaeology.",
    bullets: [
      "Immutable audit trail on all actions",
      "Engagement documentation archive",
      "Compliance review stage in every workflow",
      "SOC 2 Type II and HIPAA-ready infrastructure",
    ],
  },
];

const colorMap = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-100",
    icon: "bg-blue-600",
    bullet: "bg-blue-500",
    badge: "bg-blue-100 text-blue-700",
    hover: "hover:border-blue-200",
  },
  cyan: {
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    icon: "bg-cyan-600",
    bullet: "bg-cyan-500",
    badge: "bg-cyan-100 text-cyan-700",
    hover: "hover:border-cyan-200",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    icon: "bg-emerald-600",
    bullet: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
    hover: "hover:border-emerald-200",
  },
};

export default function Solution() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle top gradient fade from dark section */}
      <div className="absolute top-0 inset-x-0 h-px bg-slate-100" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium mb-6">
            The KOLX difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Govern. Engage. Comply.
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Three capabilities, one platform — designed specifically for how
            medical affairs teams actually operate.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const colors = colorMap[pillar.color as keyof typeof colorMap];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative p-7 rounded-2xl border ${colors.border} ${colors.hover} ${colors.bg} transition-colors group`}
              >
                {/* Badge */}
                <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold tracking-wider ${colors.badge} mb-5`}>
                  {pillar.title.toUpperCase()}
                </span>

                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${colors.icon} flex items-center justify-center mb-5 shadow-sm`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {pillar.headline}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.bullet} mt-1.5 flex-shrink-0`} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
