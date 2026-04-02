"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileCheck, Server, RefreshCcw } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "SOC 2 Type II",
    description:
      "Independently audited security controls covering availability, confidentiality, and processing integrity.",
  },
  {
    icon: Lock,
    title: "HIPAA-Ready",
    description:
      "Built with HIPAA technical safeguards in mind. Business Associate Agreements (BAA) available on all plans.",
  },
  {
    icon: FileCheck,
    title: "GDPR Compliant",
    description:
      "Data residency options, right-to-erasure support, and DPA agreements for organizations operating in the EU.",
  },
  {
    icon: Eye,
    title: "Immutable Audit Trail",
    description:
      "Every action — profile update, approval decision, document upload — is logged with actor, timestamp, and a before/after snapshot.",
  },
  {
    icon: Server,
    title: "Enterprise Infrastructure",
    description:
      "Hosted on SOC 2-certified cloud infrastructure with encryption at rest (AES-256) and in transit (TLS 1.3).",
  },
  {
    icon: RefreshCcw,
    title: "99.9% Uptime SLA",
    description:
      "Enterprise plans include an uptime SLA with automatic failover, daily backups, and disaster recovery.",
  },
];

export default function Security() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-slate-200" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Security & compliance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Built for regulated industries
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            When your organization operates under FDA, EMA, or FCPA oversight,
            your software needs to meet the same standard. KOLX is designed
            compliance-first, not compliance-bolted-on.
          </p>
        </motion.div>

        {/* Trust grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                  <Icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance badge strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {["SOC 2 Type II", "HIPAA Ready", "GDPR Compliant", "21 CFR Part 11 Ready", "FCPA Aligned"].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-700"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
