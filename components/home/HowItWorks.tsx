"use client";

import { motion } from "framer-motion";
import { UserPlus, FileEdit, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Build your KOL portfolio",
    description:
      "Import existing KOL data or build profiles from scratch. KOLX automatically enriches profiles with publications, clinical trial participation, and deduplicates across your organization.",
    callout: "AI enrichment pulls data from PubMed, ClinicalTrials.gov, and Semantic Scholar — automatically.",
  },
  {
    step: "02",
    icon: FileEdit,
    title: "Request and route engagements",
    description:
      "Teams submit engagement requests directly in KOLX. Based on the engagement type, budget, and region, your configured workflow automatically routes the request to the right approvers.",
    callout: "No more 'who needs to approve this?' — the workflow knows, and notifies them instantly.",
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Approve, track, and close",
    description:
      "Approvers review and decide within KOLX. Every decision is logged with a timestamp and actor. Once approved, the engagement is tracked through execution and closed with full documentation attached.",
    callout: "Audit-ready from day one. Every action, every decision, immutably recorded.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-slate-100" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium mb-6">
            How KOLX works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            From onboarding to audit-ready in days
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Getting started is straightforward. Most teams are running live
            workflows within their first week.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Step number + icon */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/25">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>

                    {/* Arrow between steps (desktop) */}
                    {i < steps.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute top-4 -right-8 w-5 h-5 text-slate-300" />
                    )}
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {step.description}
                    </p>
                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-left">
                      <p className="text-sm text-blue-800 font-medium leading-snug">
                        {step.callout}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 text-base mb-6">
            Ready to see it in action?
          </p>
          <a
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 group"
          >
            Book a live demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
