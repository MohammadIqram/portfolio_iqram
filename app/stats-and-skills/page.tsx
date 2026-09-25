"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function StatsAndSkillsPage() {
  // Matrix category filter
  const [matrixFilter, setMatrixFilter] = useState<"all" | "code" | "design">("all");

  // Interactive ROI Calculator State
  const [weeks, setWeeks] = useState(12);
  const [roles, setRoles] = useState(3);

  // Dynamic ROI calculation
  const totalSaved = Math.round(weeks * roles * 2350);
  const acceleratedWeeks = (weeks * 0.65).toFixed(1);

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HEADER & KPI SUMMARY DECK */}
      <section className="w-full px-gutter max-w-[1360px] mx-auto pt-space-md pb-space-lg">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl mt-12">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-mono text-label-mono w-fit clay-sunken">
              <span className="material-symbols-outlined text-body-sm text-secondary">
                analytics
              </span>
              <span>TELEMETRY & VERIFIED IMPACT</span>
            </div>
            <h1 className="font-display text-display text-on-surface tracking-tight">
              Engineering rigor.
              <br />
              <span className="text-primary-container">Tangible commercial value.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              10+ years balancing production-grade systems architecture with high-velocity visual craft. Below is the audited benchmark of delivered performance, architectural proficiencies, and economic outcomes.
            </p>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-space-xs p-1.5 rounded-full bg-surface-container-high clay-sunken w-fit self-start lg:self-end">
            <button
              onClick={() => setMatrixFilter("all")}
              className={`px-space-md py-1.5 rounded-full font-title-lg text-body-sm transition-all cursor-pointer ${
                matrixFilter === "all"
                  ? "bg-surface-container-lowest text-on-surface clay-pill"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              All Dimensions
            </button>
            <button
              onClick={() => setMatrixFilter("code")}
              className={`px-space-md py-1.5 rounded-full font-title-lg text-body-sm transition-all cursor-pointer ${
                matrixFilter === "code"
                  ? "bg-surface-container-lowest text-on-surface clay-pill"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Code Only
            </button>
            <button
              onClick={() => setMatrixFilter("design")}
              className={`px-space-md py-1.5 rounded-full font-title-lg text-body-sm transition-all cursor-pointer ${
                matrixFilter === "design"
                  ? "bg-surface-container-lowest text-on-surface clay-pill"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Design Tokens
            </button>
          </div>
        </div>

        {/* 4 Main Inflated Clay Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Card 1 */}
          <div className="relative bg-surface-container-lowest rounded-[2.5rem] p-space-lg clay-card flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-space-md">
              <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed clay-pill">
                <span className="material-symbols-outlined text-headline-sm">rocket_launch</span>
              </div>
              <span className="font-label-mono text-label-badge px-space-xs py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold">
                100% SUCCESS
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-display text-on-surface font-extrabold tracking-tight">
                  85
                </span>
                <span className="font-display text-display text-primary-container font-extrabold">
                  +
                </span>
              </div>
              <p className="font-title-lg text-title-lg text-on-surface mt-1">Projects Delivered</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                From seed-stage MVPs to Tier-1 multinational cloud migrations.
              </p>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center gap-space-xs text-tertiary font-label-mono text-label-mono">
              <span className="material-symbols-outlined text-body-sm">check_circle</span>
              Zero critical rollbacks
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-surface-container-lowest rounded-[2.5rem] p-space-lg clay-card flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-space-md">
              <div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant clay-pill">
                <span className="material-symbols-outlined text-headline-sm">schedule</span>
              </div>
              <span className="font-label-mono text-label-badge px-space-xs py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-bold">
                SLA ACCURACY
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-display text-on-surface font-extrabold tracking-tight">
                  99.4
                </span>
                <span className="font-display text-display text-secondary font-extrabold">%</span>
              </div>
              <p className="font-title-lg text-title-lg text-on-surface mt-1">On-Time Deployment</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                Rigorous sprint estimation and resilient CI/CD release cadence.
              </p>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center gap-space-xs text-secondary font-label-mono text-label-mono">
              <span className="material-symbols-outlined text-body-sm">speed</span>
              Avg cycle: 14.2 days
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-surface-container-lowest rounded-[2.5rem] p-space-lg clay-card flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-space-md">
              <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant clay-pill">
                <span className="material-symbols-outlined text-headline-sm">
                  account_balance_wallet
                </span>
              </div>
              <span className="font-label-mono text-label-badge px-space-xs py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-bold">
                NET ATTRIBUTABLE
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-0.5">
                <span className="font-display text-display text-on-surface font-extrabold tracking-tight">
                  $
                </span>
                <span className="font-display text-display text-on-surface font-extrabold tracking-tight">
                  48
                </span>
                <span className="font-display text-display text-tertiary font-extrabold">M+</span>
              </div>
              <p className="font-title-lg text-title-lg text-on-surface mt-1">
                Client Revenue Impact
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                Conversion funnel redesigns, checkout velocity, & enterprise ARPU.
              </p>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center gap-space-xs text-primary font-label-mono text-label-mono">
              <span className="material-symbols-outlined text-body-sm">trending_up</span>
              +34% avg checkout lift
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative bg-surface-container-lowest rounded-[2.5rem] p-space-lg clay-card flex flex-col justify-between overflow-hidden group hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-space-md">
              <div className="w-14 h-14 rounded-2xl bg-surface-container-highest flex items-center justify-center text-on-surface clay-pill">
                <span className="material-symbols-outlined text-headline-sm">architecture</span>
              </div>
              <span className="font-label-mono text-label-badge px-space-xs py-1 rounded-full bg-surface-variant text-on-surface-variant font-bold">
                FOUNDATIONAL
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-display text-on-surface font-extrabold tracking-tight">
                  10
                </span>
                <span className="font-display text-display text-primary-container font-extrabold">
                  +
                </span>
              </div>
              <p className="font-title-lg text-title-lg text-on-surface mt-1">
                Years Building Products
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                Dual mastery spanning pixel-pure ergonomics to Kubernetes pods.
              </p>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center gap-space-xs text-on-surface font-label-mono text-label-mono">
              <span className="material-symbols-outlined text-body-sm">verified</span>
              Silicon Valley & Global Remote
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE SKILL MATRIX IN 3 CLAY PODS */}
      <section className="w-full px-gutter max-w-[1360px] mx-auto py-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
          <div>
            <span className="font-label-badge text-label-badge uppercase tracking-wider text-primary font-bold">
              Execution Domains
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
              Interactive Mastery Matrix
            </h2>
          </div>
          <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-on-surface-variant bg-surface-container-high px-space-md py-2 rounded-full clay-sunken">
            <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
            90th+ Percentile Production Ready
          </div>
        </div>

        {/* 3 Pod Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {/* Pod 1: Frontend Mastery */}
          <div
            className={`bg-surface-container-lowest rounded-[2.5rem] p-space-lg clay-card flex flex-col justify-between transition-opacity duration-300 ${
              matrixFilter === "design" ? "opacity-35" : "opacity-100"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-space-xs">
                  <div className="w-10 h-10 rounded-2xl bg-primary-container text-on-primary flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-headline-sm">code</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">
                      Frontend Mastery
                    </h3>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      Client-side & Render Optics
                    </span>
                  </div>
                </div>
                <span className="font-label-mono text-label-badge text-primary-container font-extrabold bg-primary-fixed px-space-xs py-1 rounded-full">
                  CORE
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Architecting buttery 120fps client experiences with strict tree-shaking, sub-second TTFB, and fluid spring physics.
              </p>

              {/* Skill Bars */}
              <div className="flex flex-col gap-space-md">
                {[
                  { name: "React / Next.js 15+", pct: 96 },
                  { name: "TypeScript (Strict Type-Ops)", pct: 94 },
                  { name: "Tailwind / CSS Motion Physics", pct: 98 },
                  { name: "Three.js / WebGL Spatial UI", pct: 82 },
                ].map((skill, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center font-title-lg text-body-sm">
                      <span className="font-title-lg text-on-surface flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                        {skill.name}
                      </span>
                      <span className="font-label-mono font-bold text-on-surface">{skill.pct}%</span>
                    </div>
                    <div className="w-full h-4 rounded-full bg-surface-container-high clay-sunken p-0.5 relative overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary-container clay-btn-primary transition-all duration-1000 ease-out"
                        style={{ width: `${skill.pct}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-space-lg pt-space-sm flex flex-wrap gap-1.5">
              <span className="px-space-xs py-1 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-badge clay-pill">
                Framer Motion
              </span>
              <span className="px-space-xs py-1 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-badge clay-pill">
                Zustand
              </span>
              <span className="px-space-xs py-1 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-badge clay-pill">
                TanStack Query
              </span>
            </div>
          </div>

          {/* Pod 2: Product & Design Systems */}
          <div
            className={`bg-surface-container-lowest rounded-[2.5rem] p-space-lg clay-card flex flex-col justify-between transition-opacity duration-300 ${
              matrixFilter === "code" ? "opacity-35" : "opacity-100"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-space-xs">
                  <div className="w-10 h-10 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-headline-sm">palette</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">
                      Product & Design
                    </h3>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      Ergonomics & Token Architectures
                    </span>
                  </div>
                </div>
                <span className="font-label-mono text-label-badge text-secondary font-extrabold bg-secondary-fixed px-space-xs py-1 rounded-full">
                  DESIGN
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Synthesizing complex user journeys into tactile, intuitive primitives backed by automated multi-brand design systems.
              </p>

              {/* Skill Bars */}
              <div className="flex flex-col gap-space-md">
                {[
                  { name: "Design Systems (Tokens & CI)", pct: 98 },
                  { name: "UX Information Architecture", pct: 95 },
                  { name: "Clay & 3D Prototyping", pct: 90 },
                  { name: "Usability Testing & Quant-Ops", pct: 92 },
                ].map((skill, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center font-title-lg text-body-sm">
                      <span className="font-title-lg text-on-surface flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        {skill.name}
                      </span>
                      <span className="font-label-mono font-bold text-on-surface">{skill.pct}%</span>
                    </div>
                    <div className="w-full h-4 rounded-full bg-surface-container-high clay-sunken p-0.5 relative overflow-hidden">
                      <div
                        className="h-full rounded-full bg-secondary transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.pct}%`,
                          boxShadow:
                            "inset 0 2px 3px rgba(255,255,255,0.4), inset 0 -2px 3px rgba(0,0,0,0.2)",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-space-lg pt-space-sm flex flex-wrap gap-1.5">
              <span className="px-space-xs py-1 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-badge clay-pill">
                Figma Config
              </span>
              <span className="px-space-xs py-1 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-badge clay-pill">
                Spline 3D
              </span>
              <span className="px-space-xs py-1 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-badge clay-pill">
                Design Tokens W3C
              </span>
            </div>
          </div>

          {/* Pod 3: Backend & DevOps */}
          <div
            className={`bg-surface-container-lowest rounded-[2.5rem] p-space-lg clay-card flex flex-col justify-between transition-opacity duration-300 ${
              matrixFilter === "design" ? "opacity-35" : "opacity-100"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-space-xs">
                  <div className="w-10 h-10 rounded-2xl bg-tertiary text-on-tertiary flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-headline-sm">dns</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">
                      Backend & DevOps
                    </h3>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      Cloud, RDBMS & Resilient APIs
                    </span>
                  </div>
                </div>
                <span className="font-label-mono text-label-badge text-tertiary font-extrabold bg-tertiary-fixed px-space-xs py-1 rounded-full">
                  INFRA
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Bulletproofing endpoints with schema-driven contracts, ACID transactional safety, and edge-native deployments.
              </p>

              {/* Skill Bars */}
              <div className="flex flex-col gap-space-md">
                {[
                  { name: "GraphQL & Typed REST APIs", pct: 92 },
                  { name: "Node.js / NestJS Runtime", pct: 88 },
                  { name: "PostgreSQL & Prisma / Drizzle", pct: 86 },
                  { name: "Docker, Terraform & CI/CD", pct: 84 },
                ].map((skill, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center font-title-lg text-body-sm">
                      <span className="font-title-lg text-on-surface flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                        {skill.name}
                      </span>
                      <span className="font-label-mono font-bold text-on-surface">{skill.pct}%</span>
                    </div>
                    <div className="w-full h-4 rounded-full bg-surface-container-high clay-sunken p-0.5 relative overflow-hidden">
                      <div
                        className="h-full rounded-full bg-tertiary transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.pct}%`,
                          boxShadow:
                            "inset 0 2px 3px rgba(255,255,255,0.4), inset 0 -2px 3px rgba(0,0,0,0.2)",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-space-lg pt-space-sm flex flex-wrap gap-1.5">
              <span className="px-space-xs py-1 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-badge clay-pill">
                AWS ECS
              </span>
              <span className="px-space-xs py-1 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-badge clay-pill">
                Redis Cache
              </span>
              <span className="px-space-xs py-1 rounded-full bg-surface-container text-on-surface-variant font-label-mono text-label-badge clay-pill">
                Vitest / Playwright
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE VELOCITY & ROI CALCULATOR WIDGET */}
      <section className="w-full px-gutter max-w-[1360px] mx-auto py-space-lg">
        <div className="bg-surface-container-lowest rounded-[2.5rem] p-space-lg lg:p-space-xl clay-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Left: Explainer & Interactive Controls */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-3 h-3 rounded-full bg-primary-container animate-pulse"></span>
                <span className="font-label-badge text-label-badge uppercase tracking-wider text-primary font-bold">
                  Interactive Modeling
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Estimate Project Velocity & Projected ROI
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Leverage an integrated designer-engineer who eliminates handoff friction. Use the slider below to model your target development timeline and calculate estimated capital conserved.
              </p>

              {/* Slider 1: Sprint Duration */}
              <div className="flex flex-col gap-space-xs bg-surface-container-low rounded-2xl p-space-md clay-sunken">
                <div className="flex justify-between items-center">
                  <label className="font-title-lg text-body-md text-on-surface font-semibold">
                    Planned Project Scope (Weeks)
                  </label>
                  <span className="font-label-mono text-headline-sm text-primary-container font-bold">
                    {weeks} Weeks
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="24"
                  step="2"
                  value={weeks}
                  onChange={(e) => setWeeks(parseInt(e.target.value))}
                  className="w-full accent-primary-container cursor-pointer h-2 bg-surface-variant rounded-full"
                />
                <div className="flex justify-between text-on-surface-variant font-label-mono text-label-badge mt-1">
                  <span>4 wks (Rapid MVP)</span>
                  <span>12 wks (Full V1)</span>
                  <span>24 wks (Platform System)</span>
                </div>
              </div>

              {/* Slider 2: Team Scale Multiplier */}
              <div className="flex flex-col gap-space-xs bg-surface-container-low rounded-2xl p-space-md clay-sunken">
                <div className="flex justify-between items-center">
                  <label className="font-title-lg text-body-md text-on-surface font-semibold">
                    Legacy Team Size Displaced (Roles)
                  </label>
                  <span className="font-label-mono text-headline-sm text-secondary font-bold">
                    {roles === 1 ? "1 Solo Specialist" : `${roles} Specialist FTEs`}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={roles}
                  onChange={(e) => setRoles(parseInt(e.target.value))}
                  className="w-full accent-secondary cursor-pointer h-2 bg-surface-variant rounded-full"
                />
                <div className="flex justify-between text-on-surface-variant font-label-mono text-label-badge mt-1">
                  <span>1 (Solo contractor)</span>
                  <span>3 (UI + FE + BE trio)</span>
                  <span>5 (Full squad)</span>
                </div>
              </div>
            </div>

            {/* Right: Sculpted Live Readout Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-surface-container-high to-surface-container rounded-[2rem] p-space-lg clay-card flex flex-col justify-between gap-space-md">
              <div className="flex items-center justify-between pb-space-sm border-b border-surface-variant">
                <span className="font-label-mono text-label-badge text-on-surface-variant uppercase">
                  Model Readout #84-A
                </span>
                <span className="px-space-xs py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-mono text-label-badge font-bold">
                  OPTIMIZED
                </span>
              </div>

              <div className="flex flex-col gap-space-xs">
                <span className="font-title-lg text-body-sm text-on-surface-variant">
                  Estimated Handoff Savings
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-display text-primary font-black">
                    ${totalSaved.toLocaleString()}
                  </span>
                  <span className="font-label-mono text-body-sm text-on-surface-variant">saved</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Replaces fractured designer-to-developer meetings, Figma translation drift, and CSS misalignment cycles.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                <div className="bg-surface-container-lowest p-space-sm rounded-2xl clay-pill flex flex-col">
                  <span className="font-label-mono text-label-badge text-on-surface-variant">
                    TIME TO MARKET
                  </span>
                  <span className="font-headline-sm text-headline-sm text-secondary font-bold mt-1">
                    {acceleratedWeeks} Weeks
                  </span>
                  <span className="font-body-sm text-label-badge text-tertiary">
                    35% faster cycle
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded-2xl clay-pill flex flex-col">
                  <span className="font-label-mono text-label-badge text-on-surface-variant">
                    ENGINEERING DRIFT
                  </span>
                  <span className="font-headline-sm text-headline-sm text-tertiary font-bold mt-1">
                    &lt; 0.2%
                  </span>
                  <span className="font-body-sm text-label-badge text-on-surface-variant">
                    Pixel-perfect code
                  </span>
                </div>
              </div>

              <Link
                href="/about-and-socials"
                className="w-full py-space-sm rounded-full bg-primary-container text-on-primary font-title-lg text-body-md clay-btn-primary flex items-center justify-center gap-space-xs transition-transform active:scale-95 text-center"
              >
                <span>Lock In Discovery Sprint</span>
                <span className="material-symbols-outlined text-body-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MILESTONE TIMELINE IN CLAY BUBBLES */}
      <section className="w-full px-gutter max-w-[1360px] mx-auto py-space-lg mb-space-lg">
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-space-xl">
          <span className="font-label-badge text-label-badge uppercase tracking-wider text-secondary font-bold">
            Career Markers
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
            Milestones & Architectural Epochs
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            A chronological trail of key leadership assignments, foundational platform launches, and community accolades.
          </p>
        </div>

        {/* Timeline Stepper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg relative">
          {/* Milestone 1 */}
          <div className="relative bg-surface-container-lowest rounded-[2.5rem] p-space-lg clay-card flex flex-col justify-between group hover:-translate-y-1.5 transition-transform">
            <div className="flex items-center justify-between mb-space-md">
              <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-display text-headline-sm shadow-md">
                <span className="material-symbols-outlined">emoji_events</span>
              </div>
              <span className="px-space-sm py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-mono text-headline-sm font-extrabold clay-sunken">
                2024
              </span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Design Lead of the Year
              </h3>
              <span className="font-label-mono text-label-mono text-primary font-semibold">
                Fintech Design Global Awards
              </span>
              <p className="font-body-md text-body-sm text-on-surface-variant mt-1">
                Awarded for architecting the unified design system that scaled across 14 European neo-banking markets, reducing interface latency by 420ms.
              </p>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center gap-space-xs font-label-mono text-label-badge text-on-surface-variant">
              <span className="material-symbols-outlined text-body-sm text-primary-container">
                layers
              </span>
              3,400+ Components Published
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative bg-surface-container-lowest rounded-[2.5rem] p-space-lg clay-card flex flex-col justify-between group hover:-translate-y-1.5 transition-transform">
            <div className="flex items-center justify-between mb-space-md">
              <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-display text-headline-sm shadow-md">
                <span className="material-symbols-outlined">hub</span>
              </div>
              <span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-mono text-headline-sm font-extrabold clay-sunken">
                2023
              </span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Enterprise CRM Launch
              </h3>
              <span className="font-label-mono text-label-mono text-secondary font-semibold">
                Apex Systems Corp ($12M ARR)
              </span>
              <p className="font-body-md text-body-sm text-on-surface-variant mt-1">
                Sole architect behind a next-gen pipeline tool handling 8.5M monthly real-time telemetry events built with NestJS, Next.js, and Redis streams.
              </p>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center gap-space-xs font-label-mono text-label-badge text-on-surface-variant">
              <span className="material-symbols-outlined text-body-sm text-secondary">memory</span>
              99.98% Uptime Architecture
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative bg-surface-container-lowest rounded-[2.5rem] p-space-lg clay-card flex flex-col justify-between group hover:-translate-y-1.5 transition-transform">
            <div className="flex items-center justify-between mb-space-md">
              <div className="w-12 h-12 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-display text-headline-sm shadow-md">
                <span className="material-symbols-outlined">shopping_bag</span>
              </div>
              <span className="px-space-sm py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-mono text-headline-sm font-extrabold clay-sunken">
                2021
              </span>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Headless Shopify Pioneer
              </h3>
              <span className="font-label-mono text-label-mono text-tertiary font-semibold">
                Solace Luxury Apparel
              </span>
              <p className="font-body-md text-body-sm text-on-surface-variant mt-1">
                Re-platformed legacy monolithic store to headless Next.js edge storefront, unlocking a 4.1x mobile conversion jump and sub-second page loads.
              </p>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center gap-space-xs font-label-mono text-label-badge text-on-surface-variant">
              <span className="material-symbols-outlined text-body-sm text-tertiary">bolt</span>
              100/100 Lighthouse Performance
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LIVE BENCHMARKS & TECH INVENTORY TICKER */}
      <section className="w-full px-gutter max-w-[1360px] mx-auto pb-space-xl">
        <div className="bg-surface-container-low rounded-[2.5rem] p-space-lg clay-sunken flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center clay-pill flex-shrink-0">
              <span className="material-symbols-outlined text-headline-sm">terminal</span>
            </div>
            <div>
              <h4 className="font-title-lg text-title-lg text-on-surface">
                Verified System Toolchain
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                All dependencies are benchmarked on Node 20+ LTS with automated type check verification.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-xs flex-wrap">
            <span className="px-space-md py-1.5 rounded-full bg-surface-container-lowest text-on-surface font-label-mono text-label-badge clay-pill">
              Next.js 15 App Router
            </span>
            <span className="px-space-md py-1.5 rounded-full bg-surface-container-lowest text-on-surface font-label-mono text-label-badge clay-pill">
              Prisma ORM
            </span>
            <span className="px-space-md py-1.5 rounded-full bg-surface-container-lowest text-on-surface font-label-mono text-label-badge clay-pill">
              Turborepo
            </span>
            <span className="px-space-md py-1.5 rounded-full bg-surface-container-lowest text-on-surface font-label-mono text-label-badge clay-pill">
              Docker Compose
            </span>
            <span className="px-space-md py-1.5 rounded-full bg-surface-container-lowest text-on-surface font-label-mono text-label-badge clay-pill">
              Figma Tokens Plugin
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
