"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from "lucide-react";
import { appLinks } from "@/lib/appLinks";

const pills = [
  { icon: ShieldCheck, label: "Compliance-first" },
  { icon: Zap, label: "Workflow automation" },
  { icon: BarChart3, label: "Full audit trail" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Radial glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Purpose-built for Medical Affairs & KOL teams
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-6"
          >
            KOL engagement,{" "}
            <span className="gradient-text">governed end-to-end</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Replace spreadsheets and email chains with a single platform for
            KOL profiles, engagement workflows, multi-stakeholder approvals, and
            complete audit trails — built for compliance-first pharma and
            medical organizations.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
          >
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 group"
            >
              Request a demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            {/* Existing users go straight to the app */}
            <a
              href={appLinks.login}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-base hover:border-slate-300 hover:bg-slate-50 transition-all"
            >
              Sign in to your account
            </a>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            {pills.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm text-sm text-slate-600"
              >
                <Icon className="w-4 h-4 text-blue-600" />
                {label}
              </div>
            ))}
          </motion.div>

          {/* Product screenshot mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Browser chrome */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-200 bg-white">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4 h-6 bg-white border border-slate-200 rounded-md flex items-center px-3">
                  <span className="text-xs text-slate-400">app.kolx.io/dashboard</span>
                </div>
              </div>

              {/* App UI mockup */}
              <div className="flex h-[420px] bg-white">
                {/* Sidebar */}
                <div className="w-56 bg-slate-950 flex flex-col gap-1 p-3 flex-shrink-0">
                  <div className="flex items-center gap-2 px-2 py-2 mb-3">
                    <div className="w-6 h-6 rounded-md bg-linear-to-br from-blue-600 to-cyan-500" />
                    <span className="text-white font-semibold text-sm">KOLX</span>
                  </div>
                  {[
                    { label: "Dashboard", active: true },
                    { label: "KOL Profiles", active: false },
                    { label: "Engagements", active: false },
                    { label: "Approvals", active: false },
                    { label: "Analytics", active: false },
                    { label: "Configurator", active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                        item.active
                          ? "bg-blue-600 text-white"
                          : "text-slate-400 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 bg-slate-50 p-5 overflow-hidden">
                  {/* Metrics row */}
                  <div className="grid grid-cols-4 gap-3 mb-5">
                    {[
                      { label: "Total KOLs", value: "1,284", change: "+12" },
                      { label: "Active Engagements", value: "47", change: "+3" },
                      { label: "Pending Approvals", value: "8", change: "", alert: true },
                      { label: "Tier 1 KOLs", value: "156", change: "+5" },
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="bg-white rounded-xl p-3.5 border border-slate-100 shadow-sm"
                      >
                        <p className="text-xs text-slate-500 mb-1">{metric.label}</p>
                        <p className={`text-xl font-bold ${metric.alert ? "text-amber-600" : "text-slate-900"}`}>
                          {metric.value}
                        </p>
                        {metric.change && (
                          <p className="text-xs text-emerald-600 mt-0.5">{metric.change} this week</p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* KOL table preview */}
                  <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-700">Recent KOL Activity</span>
                      <span className="text-xs text-blue-600 font-medium cursor-pointer">View all</span>
                    </div>
                    {[
                      { name: "Dr. Sarah Chen", specialty: "Oncology", tier: "T1", status: "Active", engagement: "Advisory Board" },
                      { name: "Prof. James Wright", specialty: "Cardiology", tier: "T1", status: "Active", engagement: "Speaker Program" },
                      { name: "Dr. Maria Santos", specialty: "Neurology", tier: "T2", status: "Prospect", engagement: "Consulting" },
                      { name: "Dr. Kevin Park", specialty: "Immunology", tier: "T2", status: "Active", engagement: "Publication" },
                    ].map((kol) => (
                      <div key={kol.name} className="flex items-center gap-3 px-4 py-2.5 border-b border-slate-50 last:border-0">
                        <div className="w-7 h-7 rounded-full bg-linear-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {kol.name.split(" ").pop()![0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-slate-800 truncate">{kol.name}</p>
                          <p className="text-xs text-slate-400">{kol.specialty}</p>
                        </div>
                        <span className="text-xs px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-700 font-medium">{kol.tier}</span>
                        <span className="text-xs text-slate-500 hidden lg:block">{kol.engagement}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          kol.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700"
                        }`}>
                          {kol.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -left-6 top-1/3 bg-white rounded-xl shadow-xl border border-slate-100 p-3.5 w-44 hidden lg:block"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-xs font-semibold text-slate-800">Approved</span>
              </div>
              <p className="text-xs text-slate-500">Advisory Board engagement cleared compliance review</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute -right-6 top-1/4 bg-white rounded-xl shadow-xl border border-slate-100 p-3.5 w-48 hidden lg:block"
            >
              <p className="text-xs font-semibold text-slate-800 mb-1.5">Approval workflow</p>
              <div className="space-y-1.5">
                {[
                  { step: "Manager", done: true },
                  { step: "Compliance", done: true },
                  { step: "Finance", done: false },
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${s.done ? "bg-emerald-500" : "bg-slate-200"}`}>
                      {s.done && <span className="text-white text-[8px] font-bold">✓</span>}
                    </div>
                    <span className={`text-xs ${s.done ? "text-slate-600" : "text-slate-400"}`}>{s.step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
