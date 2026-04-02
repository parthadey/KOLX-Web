"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { appLinks } from "@/lib/appLinks";

export default function CTA() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-cyan-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-800 bg-blue-950/50 text-blue-300 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Ready when you are
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Stop managing KOLs in{" "}
            <span className="line-through text-slate-600">spreadsheets</span>
            <br />
            <span className="gradient-text-light">Start governing them in KOLX</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12">
            Join medical affairs teams that have replaced email approvals and spreadsheet chaos with a governed, auditable, and intelligent KOL engagement platform.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/30 hover:-translate-y-0.5 group"
            >
              <Calendar className="w-5 h-5" />
              Book a live demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href={appLinks.register}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold text-base hover:border-slate-500 hover:text-white transition-all hover:-translate-y-0.5"
            >
              Start 14-day free trial
            </a>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
            {[
              "No credit card required",
              "14-day free trial",
              "SOC 2 Type II certified",
              "Cancel anytime",
            ].map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />}
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
