"use client";

import { motion } from "framer-motion";
import { AlertTriangle, FileSpreadsheet, Mail, GitBranch } from "lucide-react";

const painPoints = [
  {
    icon: FileSpreadsheet,
    title: "KOL data scattered across spreadsheets",
    description:
      "Multiple teams maintain their own lists. No single source of truth means duplicate records, stale data, and missed relationship opportunities.",
  },
  {
    icon: Mail,
    title: "Approvals buried in email threads",
    description:
      "Engagement requests get lost in inboxes. Compliance, finance, and legal sign-offs have no consistent process or audit trail.",
  },
  {
    icon: AlertTriangle,
    title: "Compliance gaps and regulatory risk",
    description:
      "When auditors ask for documentation on an engagement, piecing together approvals from emails and files takes days — and still leaves gaps.",
  },
  {
    icon: GitBranch,
    title: "No visibility into relationship health",
    description:
      "Which KOLs haven't been engaged in 12 months? Which Tier 1s are overextended? Without a system, these questions go unanswered.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-transparent to-slate-700" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-900/50 bg-red-950/40 text-red-400 text-sm font-medium mb-6">
            <AlertTriangle className="w-3.5 h-3.5" />
            The status quo is costing you
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            KOL management without a system is a liability
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Most medical affairs teams are running critical KOL programs on
            tools never designed for them — and the risks compound every quarter.
          </p>
        </motion.div>

        {/* Pain points grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-6 rounded-2xl bg-slate-900 border border-slate-800 group hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-900/40 flex items-center justify-center flex-shrink-0 group-hover:bg-red-950/80 transition-colors">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{point.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bridge quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-base">
            There&apos;s a better way.
          </p>
          <div className="w-px h-12 bg-linear-to-b from-slate-600 to-transparent mx-auto mt-4" />
        </motion.div>
      </div>
    </section>
  );
}
