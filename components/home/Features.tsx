"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Workflow,
  Bot,
  BarChart3,
  Link2,
  Settings,
} from "lucide-react";
import { clsx } from "clsx";

const features = [
  {
    id: "profiles",
    icon: Users,
    tab: "KOL Profiles",
    headline: "A complete picture of every KOL relationship",
    description:
      "Build rich, structured profiles for every Key Opinion Leader — with tiering, therapeutic areas, publication history, clinical trial participation, and engagement timelines all in one place.",
    highlights: [
      "Tier 1 / 2 / 3 classification with strategic scoring",
      "AI-powered profile enrichment from PubMed & ClinicalTrials.gov",
      "Duplicate detection with fuzzy-match merge workflows",
      "Relationship health scoring based on recency and frequency",
      "CRM field sync from Salesforce and other systems",
    ],
    visual: {
      type: "profile",
    },
  },
  {
    id: "workflows",
    icon: Workflow,
    tab: "Approval Workflows",
    headline: "Define your governance model, not your IT team",
    description:
      "A no-code workflow builder lets admins configure exactly how engagement requests are approved — across managers, compliance, legal, and finance — with routing rules tailored to engagement type, budget, and region.",
    highlights: [
      "Drag-and-drop approval stage builder",
      "Role-based and user-specific approver assignment",
      "Budget threshold routing (e.g. >$10k routes to Finance)",
      "Change-request loops without restarting the workflow",
      "Escalation and delegation for absent approvers",
    ],
    visual: {
      type: "workflow",
    },
  },
  {
    id: "ai",
    icon: Bot,
    tab: "AI Agents",
    headline: "Intelligence built into your KOL operations",
    description:
      "KOLX agents run in the background to keep your data fresh, surface relationship gaps, and recommend next actions — so your team focuses on relationships, not data entry.",
    highlights: [
      "KOL Research Agent: enriches profiles from public databases",
      "Relationship Health Agent: scores engagement quality over time",
      "Duplicate Detection Agent: flags and merges near-duplicate records",
      "Engagement Recommendations: suggests follow-ups based on gaps",
      "Data Quality Monitor: alerts on stale or incomplete records",
    ],
    visual: {
      type: "ai",
    },
  },
  {
    id: "analytics",
    icon: BarChart3,
    tab: "Analytics",
    headline: "Portfolio-level visibility into your KOL program",
    description:
      "Operational dashboards and reports give leadership and program owners a real-time view of portfolio coverage, engagement pipeline, approval cycle times, and data health.",
    highlights: [
      "Portfolio overview: tier distribution, geographic coverage",
      "Engagement pipeline by type, status, and owner",
      "Approval cycle time and throughput metrics",
      "Data quality health: completeness and staleness scores",
      "Custom reporting exports for stakeholder reviews",
    ],
    visual: {
      type: "analytics",
    },
  },
  {
    id: "integrations",
    icon: Link2,
    tab: "Integrations",
    headline: "Fits into your existing tech stack",
    description:
      "KOLX syncs bidirectionally with Salesforce and other CRM systems, supports SSO, and exposes a full REST API for custom integrations and data pipelines.",
    highlights: [
      "Salesforce sync with configurable field mapping",
      "Delta and full sync scheduling",
      "REST API with JWT authentication",
      "Webhook support for external event notifications",
      "SSO via SAML 2.0 and OIDC",
    ],
    visual: {
      type: "integrations",
    },
  },
  {
    id: "configurator",
    icon: Settings,
    tab: "Admin Configurator",
    headline: "Your compliance rules, your way",
    description:
      "Org admins configure honorarium rate rules, readiness checklists, and workflow policies — all without code changes or IT tickets.",
    highlights: [
      "Honorarium rate engine by engagement type",
      "Mandatory and optional readiness checklist items",
      "Engagement type to workflow policy mapping",
      "Role and permission management",
      "Organization-level branding and settings",
    ],
    visual: {
      type: "configurator",
    },
  },
];

function FeatureVisual({ type }: { type: string }) {
  if (type === "profile") {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
        <div className="bg-linear-to-r from-blue-600 to-cyan-500 h-24 relative">
          <div className="absolute bottom-0 left-6 translate-y-1/2">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-lg border-2 border-white flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">SC</span>
            </div>
          </div>
        </div>
        <div className="pt-12 px-6 pb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Dr. Sarah Chen</h3>
              <p className="text-slate-500 text-sm">Stanford Medical Center · Oncology</p>
            </div>
            <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold">TIER 1</span>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: "Publications", value: "142" },
              { label: "Engagements", value: "23" },
              { label: "Health Score", value: "94/100" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-2.5 rounded-xl bg-slate-50">
                <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Therapeutic Areas</p>
            <div className="flex flex-wrap gap-2">
              {["Oncology", "Immunotherapy", "CAR-T", "Clinical Trials"].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "workflow") {
    return (
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Advisory Board Workflow</p>
        {[
          { step: 1, label: "Manager Approval", assignee: "Direct Manager", status: "approved" },
          { step: 2, label: "Compliance Review", assignee: "Compliance Team", status: "approved" },
          { step: 3, label: "Finance Sign-off", assignee: "Budget >$5,000", status: "in_progress" },
          { step: 4, label: "Legal Review", assignee: "Legal Team", status: "pending" },
        ].map((stage) => (
          <div
            key={stage.step}
            className={clsx(
              "flex items-center gap-3 p-3.5 rounded-xl border transition-colors",
              stage.status === "approved" && "bg-emerald-50 border-emerald-200",
              stage.status === "in_progress" && "bg-blue-50 border-blue-200",
              stage.status === "pending" && "bg-white border-slate-200"
            )}
          >
            <div className={clsx(
              "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0",
              stage.status === "approved" && "bg-emerald-500 text-white",
              stage.status === "in_progress" && "bg-blue-600 text-white",
              stage.status === "pending" && "bg-slate-200 text-slate-500"
            )}>
              {stage.status === "approved" ? "✓" : stage.step}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-800">{stage.label}</p>
              <p className="text-xs text-slate-500">{stage.assignee}</p>
            </div>
            <span className={clsx(
              "text-xs font-medium px-2 py-0.5 rounded-full",
              stage.status === "approved" && "bg-emerald-100 text-emerald-700",
              stage.status === "in_progress" && "bg-blue-100 text-blue-700",
              stage.status === "pending" && "bg-slate-100 text-slate-500"
            )}>
              {stage.status === "approved" ? "Done" : stage.status === "in_progress" ? "In review" : "Waiting"}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className="bg-slate-950 rounded-2xl p-6 space-y-3">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-lg bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <p className="text-sm font-semibold text-white">KOLX AI Agents</p>
          <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Active
          </span>
        </div>
        {[
          { agent: "KOL Enrichment", action: "Updated 3 profiles from PubMed", time: "2m ago", status: "success" },
          { agent: "Duplicate Detection", action: "Found 2 potential duplicates for review", time: "15m ago", status: "warning" },
          { agent: "Relationship Health", action: "Scored 284 KOL relationships", time: "1h ago", status: "success" },
          { agent: "Engagement Advisor", action: "8 follow-up recommendations ready", time: "3h ago", status: "info" },
        ].map((item) => (
          <div key={item.agent} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div className={clsx(
              "w-2 h-2 rounded-full mt-1.5 flex-shrink-0",
              item.status === "success" && "bg-emerald-500",
              item.status === "warning" && "bg-amber-500",
              item.status === "info" && "bg-blue-500"
            )} />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-300">{item.agent}</p>
              <p className="text-xs text-slate-500 truncate">{item.action}</p>
            </div>
            <span className="text-xs text-slate-600 flex-shrink-0">{item.time}</span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "analytics") {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6">
        <p className="text-sm font-semibold text-slate-700 mb-4">Engagement Pipeline</p>
        <div className="space-y-3">
          {[
            { label: "Advisory Board", count: 12, total: 20, color: "bg-blue-500" },
            { label: "Speaker Program", count: 18, total: 20, color: "bg-cyan-500" },
            { label: "Consulting", count: 7, total: 20, color: "bg-violet-500" },
            { label: "Publication", count: 5, total: 20, color: "bg-emerald-500" },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-slate-600 font-medium">{item.label}</span>
                <span className="text-slate-400">{item.count} active</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.color} rounded-full`}
                  style={{ width: `${(item.count / item.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-5 border-t border-slate-100 grid grid-cols-3 gap-3">
          {[
            { label: "Avg. cycle time", value: "4.2 days" },
            { label: "Approval rate", value: "94%" },
            { label: "Data completeness", value: "87%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-base font-bold text-slate-900">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "integrations") {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6">
        <p className="text-sm font-semibold text-slate-700 mb-5">Connected Systems</p>
        <div className="space-y-3">
          {[
            { name: "Salesforce CRM", status: "Connected", lastSync: "2 min ago", records: "1,284 KOLs synced" },
            { name: "IQVIA OneKey", status: "Connected", lastSync: "1 hour ago", records: "HCP data enriched" },
            { name: "Veeva Vault", status: "Configured", lastSync: "Pending", records: "Document sync ready" },
          ].map((integration) => (
            <div key={integration.name} className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-100 bg-slate-50">
              <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0">
                <Link2 className="w-4 h-4 text-slate-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800">{integration.name}</p>
                <p className="text-xs text-slate-500 truncate">{integration.records}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className={clsx(
                  "text-xs font-medium px-2 py-0.5 rounded-full",
                  integration.status === "Connected" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                )}>
                  {integration.status}
                </span>
                <p className="text-xs text-slate-400 mt-0.5">{integration.lastSync}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // configurator
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6">
      <p className="text-sm font-semibold text-slate-700 mb-5">Honorarium Rules</p>
      <div className="space-y-2 mb-5">
        {[
          { type: "Advisory Board", rate: "$2,500 / day", cap: "Max 4 days/year" },
          { type: "Speaker Program", rate: "$1,500 / event", cap: "Max 8 events/year" },
          { type: "Consulting", rate: "$350 / hour", cap: "Max 40 hrs/year" },
        ].map((rule) => (
          <div key={rule.type} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div>
              <p className="text-sm font-semibold text-slate-800">{rule.type}</p>
              <p className="text-xs text-slate-500">{rule.cap}</p>
            </div>
            <span className="text-sm font-bold text-blue-600">{rule.rate}</span>
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-slate-100">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Readiness Checklist</p>
        {[
          { item: "CV on file", required: true, complete: true },
          { item: "COI form signed", required: true, complete: true },
          { item: "FCPA training", required: true, complete: false },
        ].map((check) => (
          <div key={check.item} className="flex items-center gap-2.5 py-1.5">
            <div className={clsx(
              "w-4 h-4 rounded flex items-center justify-center flex-shrink-0 text-xs",
              check.complete ? "bg-emerald-500 text-white" : "border-2 border-slate-300"
            )}>
              {check.complete && "✓"}
            </div>
            <span className="text-sm text-slate-700">{check.item}</span>
            {check.required && <span className="ml-auto text-xs text-red-500 font-medium">Required</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Features() {
  const [activeTab, setActiveTab] = useState(features[0].id);
  const active = features.find((f) => f.id === activeTab)!;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white text-slate-600 text-sm font-medium mb-6">
            Platform capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything your KOL program needs
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            From first contact to closed engagement — and every approval step in between.
          </p>
        </motion.div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={clsx(
                  "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                  activeTab === feature.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                )}
              >
                <Icon className="w-4 h-4" />
                {feature.tab}
              </button>
            );
          })}
        </div>

        {/* Feature content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Text side */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {active.headline}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-7">
                {active.description}
              </p>
              <ul className="space-y-3">
                {active.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual side */}
            <div>
              <FeatureVisual type={active.visual.type} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
