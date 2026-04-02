"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";
import { appLinks } from "@/lib/appLinks";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  highlight: boolean;
  cta: string;
  /** If true, CTA goes to the KOLX app (register). If false, stays on the marketing site. */
  ctaAppRoute?: string;
  ctaLocalHref?: string;
  badge?: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "For growing KOL programs",
    price: "$1,200",
    period: "/month",
    description:
      "Everything a small medical affairs team needs to get off spreadsheets and into a governed system.",
    highlight: false,
    cta: "Start free trial",
    ctaAppRoute: appLinks.register, // → KOLX app /register
    features: [
      "Up to 500 KOL profiles",
      "Up to 10 team members",
      "Standard engagement workflows",
      "2 workflow templates",
      "Basic analytics dashboard",
      "Email notifications",
      "Data import (CSV)",
      "Standard support (email)",
    ],
  },
  {
    name: "Growth",
    tagline: "For established KOL operations",
    price: "$3,500",
    period: "/month",
    description:
      "Advanced workflows, AI enrichment, and Salesforce sync for teams with complex governance needs.",
    highlight: true,
    cta: "Request a demo",
    ctaLocalHref: "/demo", // → lead capture on this site
    badge: "Most popular",
    features: [
      "Up to 5,000 KOL profiles",
      "Up to 50 team members",
      "Configurable approval workflows",
      "Unlimited workflow templates",
      "Advanced analytics & reporting",
      "AI profile enrichment (PubMed, ClinicalTrials)",
      "Salesforce CRM integration",
      "Duplicate detection agent",
      "Relationship health scoring",
      "SSO (SAML 2.0 / OIDC)",
      "Priority support (email + chat)",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For large pharma and global teams",
    price: "Custom",
    period: "",
    description:
      "Unlimited scale, custom integrations, dedicated support, and enterprise security for organizations with the highest compliance requirements.",
    highlight: false,
    cta: "Talk to sales",
    ctaLocalHref: "/contact", // → contact form on this site
    features: [
      "Unlimited KOL profiles",
      "Unlimited team members",
      "Custom workflow and approval logic",
      "All AI agents + custom agent jobs",
      "Custom CRM and data integrations",
      "Full REST API access",
      "Multi-org / multi-region support",
      "Custom data retention policies",
      "Dedicated customer success manager",
      "SLA guarantee (99.9% uptime)",
      "On-premise or private cloud option",
      "24/7 enterprise support",
    ],
  },
];

const ctaClass = (highlight: boolean) =>
  clsx(
    "flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all group mb-7",
    highlight
      ? "bg-white text-blue-600 hover:bg-blue-50"
      : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
  );

export default function Pricing() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-slate-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-600 text-sm font-medium mb-6">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            Simple, transparent pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Plans that scale with your program
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            No per-seat gotchas. No hidden fees. Annual billing available with
            up to 20% savings.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={clsx(
                "relative rounded-2xl p-7 flex flex-col",
                plan.highlight
                  ? "bg-blue-600 text-white shadow-2xl shadow-blue-600/25 ring-2 ring-blue-600 ring-offset-2"
                  : "bg-white border border-slate-200 shadow-sm"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-amber-400 text-amber-900 text-xs font-bold shadow-sm">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={clsx("text-xl font-bold mb-1", plan.highlight ? "text-white" : "text-slate-900")}>
                  {plan.name}
                </h3>
                <p className={clsx("text-sm mb-5", plan.highlight ? "text-blue-100" : "text-slate-500")}>
                  {plan.tagline}
                </p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={clsx("text-4xl font-bold", plan.highlight ? "text-white" : "text-slate-900")}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={clsx("text-sm", plan.highlight ? "text-blue-200" : "text-slate-500")}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={clsx("text-sm leading-relaxed", plan.highlight ? "text-blue-100" : "text-slate-600")}>
                  {plan.description}
                </p>
              </div>

              {/* CTA — external <a> for app routes, Next <Link> for local routes */}
              {plan.ctaAppRoute ? (
                <a href={plan.ctaAppRoute} className={ctaClass(plan.highlight)}>
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ) : (
                <Link href={plan.ctaLocalHref!} className={ctaClass(plan.highlight)}>
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              )}

              <div className={clsx("h-px mb-6", plan.highlight ? "bg-blue-500" : "bg-slate-100")} />

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className={clsx("w-4 h-4 flex-shrink-0 mt-0.5", plan.highlight ? "text-blue-200" : "text-emerald-500")} />
                    <span className={plan.highlight ? "text-blue-50" : "text-slate-700"}>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-slate-500 mt-12"
        >
          All plans include a 14-day free trial · No credit card required ·{" "}
          <Link href="/contact" className="text-blue-600 hover:underline font-medium">
            Questions? Talk to us
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
