"use client";

import React, { useState, useMemo } from "react";
import CaseStudyModal, { CaseStudy } from "@/components/CaseStudyModal";

interface ProjectItem {
  id: string;
  category: "saas" | "fintech" | "commerce" | "productivity";
  categoryLabel: string;
  badge: string;
  metricBadge: string;
  metricIcon: string;
  scaleMetric: number;
  title: string;
  description: string;
  visualWellTitle: string;
  visualWellSubtitle: string;
  specs: string[];
  footerNoteIcon: string;
  footerNote: string;
  image: string;
  fullCaseStudy: {
    metrics: string[];
    techStack: string[];
  };
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "crm-core",
    category: "saas",
    categoryLabel: "SaaS & Enterprise",
    badge: "RevOps Architecture",
    metricBadge: "+42% ARR Velocity",
    metricIcon: "trending_up",
    scaleMetric: 42,
    title: "CRM Enterprise Core",
    description:
      "Unified multitenant sales pipelines, weighted deal scoring, real-time stage transitions, and interactive funnel conversion telemetry.",
    visualWellTitle: "Deal Conversion Funnel",
    visualWellSubtitle: "$28.4M in Flight",
    specs: ["Next.js 15", "Apache Kafka", "PostgreSQL", "Tailwind Tokens", "TanStack Virtual"],
    footerNoteIcon: "verified_user",
    footerNote: "SOC2 Type II Ready",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4SSKTza3lSoApXWbU2mV5oqkxtm6gqu4Pnm6mYw1QD-xGf1sFJpR8jCVydjwbf49_vr7IqMHZFiYlMQ5g_-3Qst7ho1o_6cZklBIE-Cv6A6_Pun-RUgOPXMDltIs3cxmduYPvnhPJBbr9OTNmwNfenVwwUt7K8qY0m8-UBtI-jGkmAfN6YmdA9GWbjwByWA86n9aItcX6m1Lz7TbFX2snurQ31OZmgkmiki8yc1Es",
    fullCaseStudy: {
      metrics: ["+42% ARR Velocity", "$28.4M Pipeline Tracked", "1,420 Active Deals Managed"],
      techStack: ["Next.js 15 App Router", "Apache Kafka", "PostgreSQL", "Zustand", "Tailwind v4"],
    },
  },
  {
    id: "hrm-platform",
    category: "saas",
    categoryLabel: "SaaS & Enterprise",
    badge: "Workforce Engine",
    metricBadge: "18,400+ Headcount Active",
    metricIcon: "groups",
    scaleMetric: 18,
    title: "HRM People Platform",
    description:
      "End-to-end talent lifecycle with multi-jurisdiction payroll engine, compensation benchmarking, smart leave accrual, and dynamic org chart canvas.",
    visualWellTitle: "Dynamic Matrix Node Hierarchy",
    visualWellSubtitle: "32 Global Subsidiaries",
    specs: ["React Flow", "GraphQL", "Rust Payroll Core", "Tailwind Clay"],
    footerNoteIcon: "account_tree",
    footerNote: "Canvas Org Visualizer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtxQNpL0glHMbI1eK1c_w17MiGUpZkg6yHi9VLOUu27EJaS37aUkKcAsQh5t2p6Z541vqIl2BcN6DB_g-hrpxEfTTwvt2_hRwI0eEwrf0jUeqBZHza4mSZm4CTsWt1miG4b2D0B-T2BIsYWoJef6aCiFIeSWHsLuqIyvpx0H5DRGKqLdHEXgJX0__NgiWZ9itNFoPgYPJ_S3XJ8OD3lfisY7hFaJS2nZIiSi6fSY8B",
    fullCaseStudy: {
      metrics: ["18,400+ Active Headcount", "$4.2M/mo Payroll Sim", "< 85ms Query Speed"],
      techStack: ["React Flow", "Rust Engine", "GraphQL Federation", "PostgreSQL", "Tailwind CSS"],
    },
  },
  {
    id: "accounts-ledger",
    category: "fintech",
    categoryLabel: "Fintech & Accounts",
    badge: "Immutable Double-Entry",
    metricBadge: "$82M Ledgered YTD",
    metricIcon: "receipt_long",
    scaleMetric: 82,
    title: "Accounts & Ledger",
    description:
      "Mathematical precision double-entry bookkeeping, automated multi-country VAT/GST filings, AI invoice parsing, and strict reconciliation loops.",
    visualWellTitle: "Debit / Credit Zero-Delta Loop",
    visualWellSubtitle: "Verified In Sync",
    specs: ["TypeScript", "TigerBeetle DB", "Prisma ORM", "Plaid Integrations"],
    footerNoteIcon: "lock",
    footerNote: "Cryptographic Audit Trail",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWs-it2MfLY2E8Kvb3izNJ702ljlzK0IJWA6H_Bsx6hOiCadS9EaoC3tV6mcXFwgcNZcmN2LX5dzZyWa6KO4GnycpOy-2tcN4CXiN5LP99n4EearDRmgJKXXW_71en-9S6vP-gua1MgThqBtv4IjVij5ItKdvsH4xBQrSvkJozW5hZXXT9HwKxAef5NacPEBlyxOvBowO8J6SQDqm3Rn2eJlOY_WUuwyEtcdd6FBkz",
    fullCaseStudy: {
      metrics: ["$82M Ledgered YTD", "0.000% Discrepancy Rate", "Sub-10ms Balance Reconciliation"],
      techStack: ["TigerBeetle DB", "TypeScript", "Node.js", "Prisma", "Tailwind Tokens"],
    },
  },
  {
    id: "smart-inventory",
    category: "commerce",
    categoryLabel: "Commerce & Retail",
    badge: "Logistics & Supply",
    metricBadge: "380k SKUs Tracked",
    metricIcon: "shelves",
    scaleMetric: 380,
    title: "Smart Inventory Hub",
    description:
      "Multi-facility warehouse tracking with real-time barcode telemetry, automated safety stock recalculations, and ML replenishment alerts.",
    visualWellTitle: "Predictive Depletion AI (Next 14 Days)",
    visualWellSubtitle: "3 Reorders Queued",
    specs: ["Go Lang Microservices", "Redis Streams", "WebSockets", "Tailwind 3D"],
    footerNoteIcon: "qr_code_2",
    footerNote: "Continuous Barcode Ingest",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmkuQHZAhHtvoduw_-W1toaiw1mXGVo0fvV15f9g8PmqyDT_dRgW-5-nwG6Fgz_tnwYpfVFA0yxkZcCEc8NivoUa5bpnzifW1adQxCKVaqVFxMOfEhuBjPHE-bxPX2ro_BydpQDlL73gnnELe4uO5RoccCJDwnyZqFoWyq_rejXDy_wd81Ceg-mEj17FVpQGK3mmhZOnxgGeZoF5CURz5AMeEUJ9XXVPNoqLFoCTR9",
    fullCaseStudy: {
      metrics: ["380,000 SKUs Tracked", "99.96% Scan Accuracy", "11.4ms RFID Sync Latency"],
      techStack: ["Go Lang", "Redis Streams", "WebSockets", "Next.js", "Docker"],
    },
  },
  {
    id: "sales-velocity",
    category: "fintech",
    categoryLabel: "Fintech & Accounts",
    badge: "Omnichannel POS",
    metricBadge: "$94M Processed GMV",
    metricIcon: "paid",
    scaleMetric: 94,
    title: "Sales Velocity Suite",
    description:
      "Multi-channel point-of-sale terminal software with real-time rep commission splitting, PDF quote builder, and Bayesian revenue projection modeling.",
    visualWellTitle: "Commission Allocation Split",
    visualWellSubtitle: "Auto-Disbursed",
    specs: ["Stripe Terminal SDK", "React Native Web", "Node.js Engine", "SQLite Offline-First"],
    footerNoteIcon: "point_of_sale",
    footerNote: "Sub-second Offline Fallback",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDL1N6Ekie9ac1tM7gSjVzW-MPssj19SxFZCL4sfUtHGVkgX2RkjmzTMPPDNuHTIyUN5LgJdSjGAy7Phh0QtQfk7hdLbZ66zEhbxMZ5eLwn2hU6kSXMexNED-VZ1YqrRnGMfV-wzleeirAuUHVGHGHoPhFWkDBTIJZ3-3rHXgVDZB_P1mokqi4_ynpHFhAwqKNBRWGxnimRx_QWYU1q9dOedWcGGcskfYdJvKWh33AG",
    fullCaseStudy: {
      metrics: ["$94M Processed GMV", "68% Quota Attainment Lift", "Zero Offline Transaction Drops"],
      techStack: ["Stripe Terminal SDK", "React Native Web", "SQLite", "Node.js", "Tailwind"],
    },
  },
  {
    id: "tactile-calendar",
    category: "productivity",
    categoryLabel: "Productivity",
    badge: "Temporal Interface",
    metricBadge: "50k+ DAU Schedulers",
    metricIcon: "calendar_month",
    scaleMetric: 50,
    title: "Tactile Calendar & Scheduler",
    description:
      "Spatially fluid scheduling studio featuring physics-based event pill dragging, intelligent cross-timezone negotiation, and frictionless meeting room reservations.",
    visualWellTitle: "Dynamic Matrix Time-Block Preview",
    visualWellSubtitle: "UTC -8 / UTC +1",
    specs: ["Web Audio API", "Framer Motion", "Temporal JS", "CalDAV Core"],
    footerNoteIcon: "drag_indicator",
    footerNote: "Tactile Kinetic Physics",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzwRkZ3ysj7llSzSpRJYOrfS-J9cFElrxgDc8XRBoQHEoC7kBQ24Qo2odz2snRQRSiEo6RZ_1Ll55xsxUKXOsqaXdMA45OMVbqXQUjs_79uKEdQ-kNVxD9MROm8QpscQk_AtZ3GCeU_m1uiLhuwwiQU516akdAk4eGechc4Tdbd_0klKgJx-oWvLBBXuOX5KO8GntcTi_-5jeKEbx1Sv-uHEJyXSPH61sim-ywZ6Dg",
    fullCaseStudy: {
      metrics: ["50,000+ Daily Schedulers", "4.8/5 Ergonomic Delight Rating", "60 FPS Drag Interaction"],
      techStack: ["Framer Motion", "Web Audio API", "Temporal JS", "Next.js", "CalDAV Engine"],
    },
  },
  {
    id: "ecommerce-marketplace",
    category: "commerce",
    categoryLabel: "Commerce & Retail",
    badge: "Multi-Vendor Mesh",
    metricBadge: "$12M Processed / mo",
    metricIcon: "shopping_bag",
    scaleMetric: 12,
    title: "E-Commerce Marketplace",
    description:
      "Headless marketplace infrastructure supporting 1,200 concurrent sellers, instant slide-over cart drawers, optimized 1-click checkout, and geo-routed shipment tracking.",
    visualWellTitle: "Checkout Funnel Telemetry",
    visualWellSubtitle: "0.82s Total Latency",
    specs: ["Medusa JS", "Next.js App Router", "Stripe Connect", "Algolia AI"],
    footerNoteIcon: "bolt",
    footerNote: "1-Click Edge Checkout",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnjgPLJcW-3p_FMPRV0ugtkNHBEF8PfvP7K6iJPqLVczEGs5zQk-DWIEyWUFT1xqBL4taIJuPgS2y29Gsl-s2EvDHgi0xGb3wuVNUVQf4pSZrK9ZFkyx-uV63WZe4KN82ON4eu8qLRyqI0bFGpDrbGXAVeXcylQKHfu_LasxkdlzU-t3sSw30yxKdrOYFlGOA5Dbbdh3NPbZY3-Wya8-q2tysbTI-QNbCFJ05qS57D",
    fullCaseStudy: {
      metrics: ["$12M Monthly Volume", "3.8x Conversion Rate", "0.82s Edge Checkout Latency"],
      techStack: ["Medusa JS", "Next.js App Router", "Stripe Connect", "Algolia Search", "Tailwind"],
    },
  },
  {
    id: "shopify-custom",
    category: "commerce",
    categoryLabel: "Commerce & Retail",
    badge: "Hydrogen Architecture",
    metricBadge: "99 Google Lighthouse",
    metricIcon: "speed",
    scaleMetric: 99,
    title: "Shopify Custom Ecosystem",
    description:
      "High-scale Hydrogen storefront with headless Liquid fallback, bespoke Checkout UI extensions, custom pixel telemetry, and sub-100ms page transitions.",
    visualWellTitle: "Core Web Vitals Metric Spectrum",
    visualWellSubtitle: "All Greens",
    specs: ["Shopify Hydrogen", "Oxygen Edge", "Liquid Engine", "Checkout UI"],
    footerNoteIcon: "verified",
    footerNote: "Shopify Plus Verified",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCU4vPi0UmDWgoYAb8tHGQrfMKl1siaHkI3_PLR8x0PzreVLq5f9IndDkMpltGV5j1-oFgg-qCdsZwVpCItqLiKyzk9cZYynh5kfsrahWqqRybXZqRRsEvlzImMoFnCPcCm5lF-HiGB8OVQIhxdFScQ63aPk7_jx5bos_xH-3lQETVkQAM4Zfol6UjKnPxFdJqOpGrZ23aQa_azGA9i8DQfOD4eXwlaqijD3uTCLRzZ",
    fullCaseStudy: {
      metrics: ["99/100 Lighthouse Performance", "0.6s LCP", "0.001 CLS Layout Shift"],
      techStack: ["Shopify Hydrogen", "Oxygen Edge", "Remix", "Tailwind CSS", "Checkout UI Ext"],
    },
  },
];

export default function ProjectsPage() {
  const [currentFilter, setCurrentFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"featured" | "scale" | "recent">("featured");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const filteredAndSortedProjects = useMemo(() => {
    let list = PROJECTS_DATA.filter((project) => {
      const matchesFilter =
        currentFilter === "all" || project.category === currentFilter;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.specs.some((s) => s.toLowerCase().includes(q)) ||
        project.categoryLabel.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });

    if (sortBy === "scale") {
      list = [...list].sort((a, b) => b.scaleMetric - a.scaleMetric);
    } else if (sortBy === "recent") {
      list = [...list].reverse();
    }

    return list;
  }, [currentFilter, searchQuery, sortBy]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1360px] mx-auto px-gutter-mobile md:px-gutter py-space-lg flex flex-col gap-space-lg">
        {/* Overline & Hero Title Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
              <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
                Selected Production Work
              </span>
              <span className="font-label-mono text-label-mono text-outline-variant">/</span>
              <span className="font-label-mono text-label-mono text-tertiary font-semibold">
                2023 — 2025
              </span>
            </div>
            <h1 className="font-display text-display text-on-surface tracking-tight">
              Enterprise & Product Systems
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              High-load, mission-critical business platforms crafted with tactile clay design systems and resilient full-stack architecture.
            </p>
          </div>

          {/* Live Pipeline Telemetry Pill */}
          <div className="bg-surface-container-lowest px-space-md py-space-sm rounded-full clay-pill flex items-center gap-space-md self-start md:self-auto">
            <div className="flex items-center gap-space-xs">
              <div className="w-3 h-3 rounded-full bg-tertiary-container animate-pulse"></div>
              <span className="font-label-mono text-label-mono text-on-surface font-semibold">
                8 Active Shipments
              </span>
            </div>
            <div className="h-4 w-px bg-outline-variant"></div>
            <span className="font-label-mono text-label-mono text-on-surface-variant">
              99.98% SLA Core
            </span>
          </div>
        </div>

        {/* Filter & Search Controls Deck */}
        <div className="bg-surface-container-lowest rounded-3xl p-space-md clay-card flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
          {/* Category Tabs */}
          <div className="flex items-center gap-space-xs overflow-x-auto pb-1 lg:pb-0">
            {[
              { id: "all", label: "All (8)" },
              { id: "saas", label: "SaaS & Enterprise" },
              { id: "fintech", label: "Fintech & Accounts" },
              { id: "commerce", label: "Commerce & Retail" },
              { id: "productivity", label: "Productivity" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCurrentFilter(tab.id)}
                className={`px-space-md py-2 rounded-full font-title-lg text-body-sm transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  currentFilter === tab.id
                    ? "bg-primary-container text-on-primary clay-btn-primary"
                    : "bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search & Sort Inset Sunken Group */}
          <div className="flex flex-col sm:flex-row items-center gap-space-xs">
            <div className="w-full sm:w-72 bg-surface-container-high rounded-full px-space-md py-2.5 clay-sunken flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-outline text-title-lg">
                search
              </span>
              <input
                className="bg-transparent w-full text-on-surface font-body-sm text-body-sm focus:outline-none placeholder:text-outline"
                placeholder="Search systems, tech, metrics..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="w-full sm:w-auto bg-surface-container-high rounded-full px-space-md py-2.5 clay-sunken flex items-center justify-between gap-space-xs">
              <span className="material-symbols-outlined text-outline text-title-lg">
                swap_vert
              </span>
              <select
                className="bg-transparent text-on-surface font-label-mono text-label-mono focus:outline-none cursor-pointer pr-space-xs"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
              >
                <option value="featured">Featured First</option>
                <option value="scale">Largest Scale</option>
                <option value="recent">Most Recent</option>
              </select>
            </div>
          </div>
        </div>

        {/* Live Counter & Active Query Status */}
        <div className="flex items-center justify-between px-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="font-label-mono text-label-mono text-on-surface-variant">
              Showing
            </span>
            <span className="font-label-mono text-label-mono font-bold text-primary bg-primary-fixed px-2 py-0.5 rounded-full">
              {filteredAndSortedProjects.length} Systems
            </span>
            <span className="font-label-mono text-label-mono text-on-surface-variant">
              under strict design-to-code governance
            </span>
          </div>
          <span className="hidden md:inline-flex font-label-mono text-label-mono text-outline">
            Touch-calibrated 60fps micro-surfaces
          </span>
        </div>

        {/* Projects Grid */}
        {filteredAndSortedProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
            {filteredAndSortedProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-surface-container-lowest rounded-3xl p-space-lg clay-card flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col gap-space-md">
                  {/* Card Header & Badge */}
                  <div className="flex items-start justify-between gap-space-sm">
                    <div className="flex flex-wrap items-center gap-space-xs">
                      <span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-badge text-label-badge font-bold">
                        {project.categoryLabel}
                      </span>
                      <span className="px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface font-label-mono text-label-mono">
                        {project.badge}
                      </span>
                    </div>
                    <div className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-space-sm py-1.5 rounded-full font-label-mono text-label-mono font-bold clay-pill flex items-center gap-1">
                      <span className="material-symbols-outlined text-body-sm">
                        {project.metricIcon}
                      </span>
                      {project.metricBadge}
                    </div>
                  </div>

                  {/* Title & Hook */}
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Sunken Visual Well */}
                  <div className="bg-surface-container-high rounded-2xl p-space-md clay-sunken flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between text-on-surface-variant font-label-mono text-label-mono">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                        {project.visualWellTitle}
                      </span>
                      <span className="font-semibold text-on-surface">
                        {project.visualWellSubtitle}
                      </span>
                    </div>

                    {/* Funnel / Metrics Rendering */}
                    {project.id === "crm-core" && (
                      <div className="space-y-2 pt-1">
                        <div>
                          <div className="flex justify-between font-label-mono text-label-badge text-on-surface-variant mb-1">
                            <span>Inbound Qualified Leads</span>
                            <span className="font-bold text-on-surface">1,420 (100%)</span>
                          </div>
                          <div className="w-full bg-surface-container-highest rounded-full h-3 overflow-hidden">
                            <div className="bg-primary-container h-full rounded-full" style={{ width: "100%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between font-label-mono text-label-badge text-on-surface-variant mb-1">
                            <span>Technical Evaluation & Demo</span>
                            <span className="font-bold text-on-surface">682 (48%)</span>
                          </div>
                          <div className="w-full bg-surface-container-highest rounded-full h-3 overflow-hidden">
                            <div className="bg-secondary-container h-full rounded-full" style={{ width: "48%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between font-label-mono text-label-badge text-on-surface-variant mb-1">
                            <span>Contract Negotiation</span>
                            <span className="font-bold text-on-surface">246 (17.3%)</span>
                          </div>
                          <div className="w-full bg-surface-container-highest rounded-full h-3 overflow-hidden">
                            <div className="bg-tertiary h-full rounded-full" style={{ width: "17.3%" }}></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === "hrm-platform" && (
                      <div className="grid grid-cols-3 gap-2 py-1">
                        <div className="bg-surface-container-lowest p-2.5 rounded-xl clay-pill flex flex-col gap-1 text-center">
                          <span className="font-label-badge text-label-badge uppercase text-outline">Payroll Sim</span>
                          <span className="font-title-lg text-title-lg text-on-surface">$4.2M/mo</span>
                          <span className="font-label-mono text-[10px] text-tertiary">Zero Discrepancy</span>
                        </div>
                        <div className="bg-surface-container-lowest p-2.5 rounded-xl clay-pill flex flex-col gap-1 text-center">
                          <span className="font-label-badge text-label-badge uppercase text-outline">Turnover Risk</span>
                          <span className="font-title-lg text-title-lg text-on-surface">1.8%</span>
                          <span className="font-label-mono text-[10px] text-secondary">Optimal Tier</span>
                        </div>
                        <div className="bg-surface-container-lowest p-2.5 rounded-xl clay-pill flex flex-col gap-1 text-center">
                          <span className="font-label-badge text-label-badge uppercase text-outline">Time-off SLA</span>
                          <span className="font-title-lg text-title-lg text-on-surface">4.1 hrs</span>
                          <span className="font-label-mono text-[10px] text-primary">Automated</span>
                        </div>
                      </div>
                    )}

                    {project.id === "accounts-ledger" && (
                      <div className="flex items-center justify-between bg-surface-container-lowest p-space-sm rounded-xl clay-pill">
                        <div className="flex flex-col">
                          <span className="font-label-badge text-label-badge text-outline">Assets & Liabilities</span>
                          <span className="font-title-lg text-title-lg text-on-surface font-bold">$12,940,210.00</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
                          <span className="material-symbols-outlined text-body-md">balance</span>
                        </div>
                        <div className="flex flex-col text-right">
                          <span className="font-label-badge text-label-badge text-outline">Equity & Retained</span>
                          <span className="font-title-lg text-title-lg text-on-surface font-bold">$12,940,210.00</span>
                        </div>
                      </div>
                    )}

                    {project.id === "smart-inventory" && (
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-surface-container-lowest p-2.5 rounded-xl clay-pill flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-primary-container">barcode_scanner</span>
                          <div>
                            <div className="font-title-lg text-body-sm font-bold text-on-surface">99.96%</div>
                            <div className="font-label-mono text-[10px] text-outline">Scan Accuracy</div>
                          </div>
                        </div>
                        <div className="bg-surface-container-lowest p-2.5 rounded-xl clay-pill flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-tertiary">speed</span>
                          <div>
                            <div className="font-title-lg text-body-sm font-bold text-on-surface">11.4 ms</div>
                            <div className="font-label-mono text-[10px] text-outline">Edge RFID Sync</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === "sales-velocity" && (
                      <div className="flex items-center gap-space-md bg-surface-container-lowest p-space-sm rounded-xl clay-pill">
                        <svg className="w-12 h-12 flex-shrink-0" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" fill="none" r="15.915" stroke="#dee2f1" strokeWidth="4"></circle>
                          <circle
                            cx="18"
                            cy="18"
                            fill="none"
                            r="15.915"
                            stroke="#ff7654"
                            strokeDasharray="68, 100"
                            strokeLinecap="round"
                            strokeWidth="4"
                            transform="rotate(-90 18 18)"
                          ></circle>
                        </svg>
                        <div className="flex flex-col">
                          <span className="font-title-lg text-title-lg text-on-surface font-bold">68% Quota Attainment</span>
                          <span className="font-label-mono text-label-badge text-on-surface-variant">+$38,200 Commission unlocked</span>
                        </div>
                      </div>
                    )}

                    {project.id === "tactile-calendar" && (
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-surface-container-lowest p-2 rounded-xl clay-pill flex flex-col border-l-4 border-primary-container">
                          <span className="font-label-badge text-[10px] text-outline">09:00 - 10:00</span>
                          <span className="font-title-lg text-body-sm font-semibold truncate text-on-surface">Design Sync</span>
                        </div>
                        <div className="bg-primary-container text-on-primary p-2 rounded-xl clay-btn-primary flex flex-col">
                          <span className="font-label-badge text-[10px] opacity-90">10:30 - 11:15</span>
                          <span className="font-title-lg text-body-sm font-semibold truncate">C-Suite Review</span>
                        </div>
                        <div className="bg-surface-container-lowest p-2 rounded-xl clay-pill flex flex-col border-l-4 border-tertiary">
                          <span className="font-label-badge text-[10px] text-outline">13:00 - 14:00</span>
                          <span className="font-title-lg text-body-sm font-semibold truncate text-on-surface">API Audit</span>
                        </div>
                      </div>
                    )}

                    {project.id === "ecommerce-marketplace" && (
                      <div className="flex items-center justify-between bg-surface-container-lowest p-space-sm rounded-xl clay-pill">
                        <div className="flex items-center gap-space-xs">
                          <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant">
                            <span className="material-symbols-outlined text-title-lg">flash_on</span>
                          </div>
                          <div>
                            <div className="font-title-lg text-body-sm font-bold text-on-surface">3.8x Conversion Rate</div>
                            <div className="font-label-mono text-label-badge text-outline">vs Industry Benchmark</div>
                          </div>
                        </div>
                        <span className="font-label-mono text-label-mono text-tertiary font-bold">+18.4% AOV</span>
                      </div>
                    )}

                    {project.id === "shopify-custom" && (
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-surface-container-lowest p-2 rounded-xl clay-pill text-center">
                          <span className="font-label-badge text-[10px] text-outline">LCP</span>
                          <div className="font-title-lg text-title-lg text-tertiary font-bold">0.6s</div>
                        </div>
                        <div className="bg-surface-container-lowest p-2 rounded-xl clay-pill text-center">
                          <span className="font-label-badge text-[10px] text-outline">FID</span>
                          <div className="font-title-lg text-title-lg text-tertiary font-bold">4ms</div>
                        </div>
                        <div className="bg-surface-container-lowest p-2 rounded-xl clay-pill text-center">
                          <span className="font-label-badge text-[10px] text-outline">CLS</span>
                          <div className="font-title-lg text-title-lg text-tertiary font-bold">0.001</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Spec Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.specs.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface font-label-mono text-label-badge"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
                  <div className="flex items-center gap-space-xs text-on-surface-variant font-label-mono text-label-mono">
                    <span className="material-symbols-outlined text-body-md text-tertiary">
                      {project.footerNoteIcon}
                    </span>
                    {project.footerNote}
                  </div>
                  <button
                    onClick={() =>
                      setSelectedCaseStudy({
                        title: project.title,
                        category: project.categoryLabel,
                        description: project.description,
                        metrics: project.fullCaseStudy.metrics,
                        techStack: project.fullCaseStudy.techStack,
                        image: project.image,
                      })
                    }
                    className="px-space-md py-2.5 rounded-full bg-surface-container-low hover:bg-primary-container hover:text-on-primary text-on-surface font-title-lg text-body-sm clay-pill transition-all duration-200 flex items-center gap-space-xs cursor-pointer group/btn"
                  >
                    <span>View Case Study</span>
                    <span className="material-symbols-outlined text-body-md transition-transform group-hover/btn:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center p-space-xl bg-surface-container-lowest rounded-3xl clay-card text-center gap-space-md">
            <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-outline">
              <span className="material-symbols-outlined text-headline-lg">layers_clear</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                No matching product systems found
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Try resetting your filter token or clearing search keywords.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentFilter("all");
                setSearchQuery("");
              }}
              className="px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-title-lg text-body-sm clay-btn-primary cursor-pointer"
            >
              Reset System Filters
            </button>
          </div>
        )}

        {/* Engineering Benchmark Guarantee Banner */}
        <div className="bg-surface-container rounded-[2.5rem] p-space-lg lg:p-space-xl clay-card relative overflow-hidden mt-space-md">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-primary font-bold">
                Engineering Quality Guarantee
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Need a production design system built directly in TypeScript?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Every platform documented above is delivered with turnkey Figma token sync, strict accessibility standards (WCAG AAA), and comprehensive unit/e2e test suites.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm">
              <a
                href="/about-and-socials"
                className="px-space-lg py-3.5 rounded-full bg-primary-container text-on-primary font-title-lg text-body-sm clay-btn-primary transition-transform active:scale-95 flex items-center gap-space-xs"
              >
                <span className="material-symbols-outlined text-title-lg">handshake</span>
                <span>Request Technical Audit</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-space-lg py-3.5 rounded-full bg-surface-container-lowest text-on-surface font-title-lg text-body-sm clay-pill hover:bg-surface-container-high transition-colors flex items-center gap-space-xs"
              >
                <span className="material-symbols-outlined text-title-lg">terminal</span>
                <span>View GitHub Tokens</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
}
