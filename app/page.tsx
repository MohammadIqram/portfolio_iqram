"use client";

import React, { useState } from "react";
import Link from "next/link";
import SvgHeroAnimation from "@/components/SvgHeroAnimation";
import CaseStudyModal, { CaseStudy } from "@/components/CaseStudyModal";

export default function HomePage() {
  // Sensory Feedback Sandbox State
  const [blurVal, setBlurVal] = useState(24);
  const [spatialAudio, setSpatialAudio] = useState(true);
  const [subsurfaceRim, setSubsurfaceRim] = useState(true);

  // Active Case Study Modal State
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const techStack = [
    { name: "Next.js 15", tag: "SSR / Edge", color: "bg-on-surface" },
    { name: "React 19", tag: "Concurrent", color: "bg-secondary-container" },
    { name: "TailwindCSS", tag: "Design Tokens", color: "bg-tertiary-container" },
    { name: "Figma Prototyping", tag: "Design Systems", color: "bg-primary-container" },
    { name: "TypeScript", tag: "Strict Typing", color: "bg-secondary" },
    { name: "Node.js", tag: "Runtime", color: "bg-tertiary" },
    { name: "GraphQL", tag: "Federation", color: "bg-primary" },
    { name: "PostgreSQL", tag: "Distributed", color: "bg-secondary-fixed-variant" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Decorative Ambient Clay Orbs */}
      <div className="relative w-full max-w-[1360px] mx-auto px-gutter overflow-hidden pointer-events-none">
        <div className="absolute -top-12 -left-20 w-80 h-80 rounded-full bg-primary-fixed/30 blur-3xl -z-10"></div>
        <div className="absolute top-64 -right-16 w-96 h-96 rounded-full bg-secondary-fixed/40 blur-3xl -z-10"></div>
        <div className="absolute top-[48rem] left-1/3 w-72 h-72 rounded-full bg-tertiary-fixed/30 blur-3xl -z-10"></div>
      </div>

      {/* Hero Presentation Section */}
      <section className="relative w-full max-w-[1360px] mx-auto px-gutter pt-space-lg pb-space-xl mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          {/* Left Column: Typographic Narrative & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-space-md z-10">
            {/* Status Overline Badge */}
            <div className="inline-flex items-center gap-space-xs self-start px-space-md py-1.5 rounded-full bg-surface-container-lowest text-on-surface-variant clay-pill">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary shadow-sm animate-ping"></span>
              <span className="font-label-mono text-label-mono font-semibold text-tertiary uppercase tracking-wider">
                Engineering & Design Hybrid
              </span>
              <span className="text-outline-variant font-label-mono">/</span>
              <span className="font-label-mono text-label-mono text-on-surface-variant">
                2025 Retrospective
              </span>
            </div>

            {/* Hero Primary Heading */}
            <h1 className="font-display text-display text-on-surface tracking-tight leading-tight">
              Crafting Tactile Digital Experiences &{" "}
              <span className="text-primary-container relative inline-block">
                Scalable Systems
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary-container/30"
                  fill="none"
                  viewBox="0 0 240 12"
                >
                  <path
                    d="M4 8C60 2 180 2 236 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="6"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle Context */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Senior Product Designer & Full-Stack Architect blending playful 3D aesthetics with enterprise-grade engineering. Sculpting volumetric software that invites human touch.
            </p>

            {/* Dynamic Action Row */}
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <Link
                href="/projects"
                className="group relative px-space-lg py-4 rounded-full bg-primary-container text-on-primary font-title-lg text-title-lg clay-btn-primary transition-all duration-300 transform active:scale-95 hover:-translate-y-1 flex items-center gap-space-xs shadow-[inset_-2px_-4px_6px_rgba(0,0,0,0.15),0_8px_20px_rgba(255,118,84,0.35)]"
              >
                <span>Explore Enterprise Projects</span>
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1.5 text-title-lg">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/about-and-socials"
                className="px-space-lg py-4 rounded-full bg-surface-container-lowest text-on-surface font-title-lg text-title-lg clay-card transition-all duration-300 transform active:scale-95 hover:-translate-y-1 flex items-center gap-space-xs"
              >
                <span className="material-symbols-outlined text-secondary text-title-lg">
                  forum
                </span>
                <span>Get in Touch</span>
              </Link>
            </div>

            {/* Metric Highlight Clay Ticker */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-md">
              <div className="p-space-sm rounded-2xl bg-surface-container-lowest clay-card flex items-center gap-space-xs">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shadow-inner flex-shrink-0">
                  <span className="material-symbols-outlined text-headline-sm">verified</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-headline-sm text-headline-sm text-on-surface leading-none">
                    98%
                  </span>
                  <span className="font-label-badge text-label-badge text-on-surface-variant truncate">
                    Client Satisfaction
                  </span>
                </div>
              </div>

              <div className="p-space-sm rounded-2xl bg-surface-container-lowest clay-card flex items-center gap-space-xs">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant shadow-inner flex-shrink-0">
                  <span className="material-symbols-outlined text-headline-sm">hub</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-headline-sm text-headline-sm text-on-surface leading-none">
                    12+
                  </span>
                  <span className="font-label-badge text-label-badge text-on-surface-variant truncate">
                    Enterprise Apps
                  </span>
                </div>
              </div>

              <div className="p-space-sm rounded-2xl bg-surface-container-lowest clay-card flex items-center gap-space-xs">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant shadow-inner flex-shrink-0">
                  <span className="material-symbols-outlined text-headline-sm">animation</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-headline-sm text-headline-sm text-on-surface leading-none">
                    Motion
                  </span>
                  <span className="font-label-badge text-label-badge text-on-surface-variant truncate">
                    Interactions Lead
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Animated Clay Canvas Asset */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Floating Backdrop Pill Shape */}
            <div className="absolute inset-4 rounded-[3.5rem] bg-gradient-to-br from-surface-container-lowest via-surface-container-low to-secondary-fixed/20 clay-card -rotate-3 scale-95 opacity-80 pointer-events-none"></div>
            <div className="relative w-full rounded-[3.5rem] bg-surface-container-lowest p-space-md clay-card z-10 flex flex-col items-center">
              {/* Tactile HUD Header */}
              <div className="w-full flex items-center justify-between px-space-sm py-2 mb-2 rounded-full bg-surface-container-high/60 clay-sunken">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-primary-container shadow-sm"></span>
                  <span className="w-3 h-3 rounded-full bg-secondary-container shadow-sm"></span>
                  <span className="w-3 h-3 rounded-full bg-tertiary-container shadow-sm"></span>
                </div>
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  TactileRender Engine v4.2
                </span>
                <span className="material-symbols-outlined text-body-sm text-on-surface-variant">
                  tune
                </span>
              </div>

              {/* Animated Clay Asset */}
              <SvgHeroAnimation />

              {/* Tactile Interactive Scrub Dock */}
              <div className="w-full mt-2 p-3 rounded-2xl bg-surface-container-low clay-sunken flex items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-body-md">
                    view_in_ar
                  </span>
                  <span className="font-label-badge text-label-badge text-on-surface uppercase tracking-wider">
                    Volumetric Rig
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-surface-container-lowest px-2 py-1 rounded-full clay-pill">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  <span className="font-label-mono text-label-mono text-on-surface">
                    60 FPS Physical
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Clay Tech Stack Shelf */}
      <section className="w-full max-w-[1360px] mx-auto px-gutter py-space-lg">
        <div className="w-full rounded-[2.5rem] bg-surface-container-low p-space-lg clay-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-md">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed-variant font-label-badge text-label-badge uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-sm">construction</span> Architecture Deck
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Production Stack & Craft Arsenal
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              A physical palette of front-end mechanics, headless infrastructure, and computational ergonomics engineered for sub-second responses.
            </p>
          </div>

          {/* Interactive Pills Shelf */}
          <div className="flex flex-wrap items-center gap-space-sm">
            {techStack.map((tech, idx) => (
              <button
                key={idx}
                className="group px-space-md py-3 rounded-full bg-surface-container-lowest text-on-surface font-label-mono text-label-mono clay-pill hover:-translate-y-1 active:translate-y-0.5 active:scale-95 transition-all duration-200 flex items-center gap-space-xs cursor-pointer"
              >
                <span className={`w-3 h-3 rounded-full ${tech.color} shadow-inner`}></span>
                <span className="font-bold">{tech.name}</span>
                <span className="text-outline text-xs uppercase px-1.5 py-0.5 rounded-full bg-surface-container">
                  {tech.tag}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full max-w-[1360px] mx-auto px-gutter py-space-xl" id="projects">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary font-bold">
              // Production Showcase
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Featured Enterprise Ventures
            </h2>
          </div>
          <div className="flex items-center gap-space-xs">
            <div className="px-space-md py-2 rounded-full bg-surface-container-high clay-sunken flex items-center gap-space-xs text-on-surface-variant font-label-mono text-label-mono">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              Selected Works 2024-2025
            </div>
          </div>
        </div>

        {/* Bento 3D Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          {/* Card 1: Enterprise CRM Suite (Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-[2.5rem] bg-surface-container-lowest p-space-lg clay-card group hover:-translate-y-2 transition-all duration-300">
            <div>
              <div className="w-full h-72 rounded-3xl bg-surface-container-high clay-sunken p-space-sm relative overflow-hidden flex flex-col justify-between mb-space-md">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Enterprise CRM dashboard"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4SSKTza3lSoApXWbU2mV5oqkxtm6gqu4Pnm6mYw1QD-xGf1sFJpR8jCVydjwbf49_vr7IqMHZFiYlMQ5g_-3Qst7ho1o_6cZklBIE-Cv6A6_Pun-RUgOPXMDltIs3cxmduYPvnhPJBbr9OTNmwNfenVwwUt7K8qY0m8-UBtI-jGkmAfN6YmdA9GWbjwByWA86n9aItcX6m1Lz7TbFX2snurQ31OZmgkmiki8yc1Es"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-mono text-label-mono clay-pill">
                    SaaS Platform
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary font-label-mono text-label-mono clay-pill">
                    Design & Code
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/95 backdrop-blur-md text-on-surface font-label-mono text-label-mono clay-pill">
                  <span className="material-symbols-outlined text-sm text-tertiary">speed</span>
                  <span>420ms Latency</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-space-xs">
                <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                  01 / FinTech Systems
                </span>
                <span className="text-tertiary font-label-mono text-label-mono font-semibold">
                  +185% Conversion Lift
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs group-hover:text-primary transition-colors">
                Aura Enterprise CRM Suite
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                Complete overhaul of an enterprise pipeline engine. Engineered a tactile visual system that reduces sales rep cognitive load by 38% through volumetric status indicators and real-time state machines.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-sm border-t border-surface-container-high">
              <div className="flex flex-wrap gap-1.5">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-mono text-label-mono">
                  Next.js App Router
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-mono text-label-mono">
                  Zustand
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-mono text-label-mono">
                  Tailwind v4
                </span>
              </div>
              <button
                onClick={() =>
                  setSelectedCaseStudy({
                    title: "Aura Enterprise CRM Suite",
                    category: "SaaS & Enterprise",
                    description:
                      "Unified multitenant sales pipelines, weighted deal scoring, real-time stage transitions, and interactive funnel conversion telemetry.",
                    metrics: ["+185% Conversion Lift", "420ms Engine Latency", "38% Reduced Cognitive Load"],
                    techStack: ["Next.js 15 App Router", "Zustand", "Tailwind v4", "PostgreSQL", "Apache Kafka"],
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4SSKTza3lSoApXWbU2mV5oqkxtm6gqu4Pnm6mYw1QD-xGf1sFJpR8jCVydjwbf49_vr7IqMHZFiYlMQ5g_-3Qst7ho1o_6cZklBIE-Cv6A6_Pun-RUgOPXMDltIs3cxmduYPvnhPJBbr9OTNmwNfenVwwUt7K8qY0m8-UBtI-jGkmAfN6YmdA9GWbjwByWA86n9aItcX6m1Lz7TbFX2snurQ31OZmgkmiki8yc1Es",
                  })
                }
                className="w-12 h-12 rounded-full bg-surface-container-high hover:bg-primary-container hover:text-on-primary text-on-surface flex items-center justify-center clay-pill transition-all transform group-hover:rotate-45 cursor-pointer"
              >
                <span className="material-symbols-outlined text-headline-sm">arrow_outward</span>
              </button>
            </div>
          </div>

          {/* Card 2: Shopify Headless Store (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-[2.5rem] bg-surface-container-lowest p-space-lg clay-card group hover:-translate-y-2 transition-all duration-300">
            <div>
              <div className="w-full h-72 rounded-3xl bg-surface-container-high clay-sunken p-space-sm relative overflow-hidden flex flex-col justify-between mb-space-md">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Shopify Storefront"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnjgPLJcW-3p_FMPRV0ugtkNHBEF8PfvP7K6iJPqLVczEGs5zQk-DWIEyWUFT1xqBL4taIJuPgS2y29Gsl-s2EvDHgi0xGb3wuVNUVQf4pSZrK9ZFkyx-uV63WZe4KN82ON4eu8qLRyqI0bFGpDrbGXAVeXcylQKHfu_LasxkdlzU-t3sSw30yxKdrOYFlGOA5Dbbdh3NPbZY3-Wya8-q2tysbTI-QNbCFJ05qS57D"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-mono text-label-mono clay-pill">
                    E-Commerce
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/95 backdrop-blur-md text-on-surface font-label-mono text-label-mono clay-pill">
                  <span className="material-symbols-outlined text-sm text-secondary">database</span>
                  <span>Headless Storefront</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-space-xs">
                <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                  02 / Retail Experience
                </span>
                <span className="text-secondary font-label-mono text-label-mono font-semibold">
                  $3.8M GMV Run-rate
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs group-hover:text-primary transition-colors">
                Kinetic Ceramic Shopify
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                Sub-second page transfers with customized physical haptics for an artisan homeware boutique. Unified cart management with custom checkout Webhook bridges.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-sm border-t border-surface-container-high">
              <div className="flex flex-wrap gap-1.5">
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-mono text-label-mono">
                  Shopify Storefront API
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-mono text-label-mono">
                  Remix
                </span>
              </div>
              <button
                onClick={() =>
                  setSelectedCaseStudy({
                    title: "Kinetic Ceramic Shopify",
                    category: "Commerce & Retail",
                    description:
                      "Sub-second page transfers with customized physical haptics for an artisan homeware boutique. Unified cart management with custom checkout Webhook bridges.",
                    metrics: ["$3.8M GMV Run-rate", "100/100 Lighthouse Performance", "4.1x Mobile Conversion"],
                    techStack: ["Shopify Storefront API", "Remix", "Tailwind CSS", "Oxygen Edge"],
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnjgPLJcW-3p_FMPRV0ugtkNHBEF8PfvP7K6iJPqLVczEGs5zQk-DWIEyWUFT1xqBL4taIJuPgS2y29Gsl-s2EvDHgi0xGb3wuVNUVQf4pSZrK9ZFkyx-uV63WZe4KN82ON4eu8qLRyqI0bFGpDrbGXAVeXcylQKHfu_LasxkdlzU-t3sSw30yxKdrOYFlGOA5Dbbdh3NPbZY3-Wya8-q2tysbTI-QNbCFJ05qS57D",
                  })
                }
                className="w-12 h-12 rounded-full bg-surface-container-high hover:bg-primary-container hover:text-on-primary text-on-surface flex items-center justify-center clay-pill transition-all transform group-hover:rotate-45 cursor-pointer"
              >
                <span className="material-symbols-outlined text-headline-sm">arrow_outward</span>
              </button>
            </div>
          </div>

          {/* Card 3: HRM Workforce Platform (Span 12) */}
          <div className="lg:col-span-12 rounded-[2.5rem] bg-surface-container-lowest p-space-lg clay-card group hover:-translate-y-1 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-space-xs">
                  <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-mono text-label-mono">
                    HRM SaaS
                  </span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                    03 / Human Capital Core
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-space-xs group-hover:text-primary transition-colors">
                  Pillar HRM Workforce OS
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md max-w-lg">
                  Architected a company-wide workforce operations platform managing 14,000 active employees. Replaced rigid legacy spreadsheets with modular, soft-touch data nodes that celebrate daily productivity.
                </p>

                {/* Inline Metric Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-xs mb-space-md">
                  <div className="p-3 rounded-2xl bg-surface-container-low clay-sunken">
                    <span className="font-headline-sm text-headline-sm text-on-surface block">14k+</span>
                    <span className="font-label-badge text-label-badge text-on-surface-variant">Active Seats</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-surface-container-low clay-sunken">
                    <span className="font-headline-sm text-headline-sm text-on-surface block">99.98%</span>
                    <span className="font-label-badge text-label-badge text-on-surface-variant">SLA Uptime</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-surface-container-low clay-sunken">
                    <span className="font-headline-sm text-headline-sm text-on-surface block">&lt; 85ms</span>
                    <span className="font-label-badge text-label-badge text-on-surface-variant">Query Speed</span>
                  </div>
                </div>

                <div className="flex items-center gap-space-sm">
                  <button
                    onClick={() =>
                      setSelectedCaseStudy({
                        title: "Pillar HRM Workforce OS",
                        category: "SaaS & Enterprise",
                        description:
                          "Architected a company-wide workforce operations platform managing 14,000 active employees. Replaced rigid legacy spreadsheets with modular, soft-touch data nodes that celebrate daily productivity.",
                        metrics: ["14,000+ Active Seats", "99.98% SLA Uptime", "< 85ms Query Speed"],
                        techStack: ["React Flow", "GraphQL", "Rust Payroll Core", "Tailwind Clay"],
                        image:
                          "https://lh3.googleusercontent.com/aida-public/AB6AXuAtxQNpL0glHMbI1eK1c_w17MiGUpZkg6yHi9VLOUu27EJaS37aUkKcAsQh5t2p6Z541vqIl2BcN6DB_g-hrpxEfTTwvt2_hRwI0eEwrf0jUeqBZHza4mSZm4CTsWt1miG4b2D0B-T2BIsYWoJef6aCiFIeSWHsLuqIyvpx0H5DRGKqLdHEXgJX0__NgiWZ9itNFoPgYPJ_S3XJ8OD3lfisY7hFaJS2nZIiSi6fSY8B",
                      })
                    }
                    className="px-space-md py-3 rounded-full bg-secondary text-on-secondary font-title-lg text-title-lg clay-btn-primary shadow-[inset_-2px_-3px_5px_rgba(0,0,0,0.2),0_8px_16px_rgba(90,70,199,0.3)] flex items-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Inspect Architecture & Case Study</span>
                    <span className="material-symbols-outlined text-title-lg">east</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="w-full h-80 lg:h-96 rounded-3xl bg-surface-container-high clay-sunken p-space-sm relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    alt="Workforce platform"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtxQNpL0glHMbI1eK1c_w17MiGUpZkg6yHi9VLOUu27EJaS37aUkKcAsQh5t2p6Z541vqIl2BcN6DB_g-hrpxEfTTwvt2_hRwI0eEwrf0jUeqBZHza4mSZm4CTsWt1miG4b2D0B-T2BIsYWoJef6aCiFIeSWHsLuqIyvpx0H5DRGKqLdHEXgJX0__NgiWZ9itNFoPgYPJ_S3XJ8OD3lfisY7hFaJS2nZIiSi6fSY8B"
                  />
                  <div className="absolute top-6 right-6 p-space-sm rounded-2xl bg-surface-container-lowest/90 backdrop-blur-md clay-pill flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center">
                      <span className="material-symbols-outlined text-body-md">shield_person</span>
                    </div>
                    <div>
                      <span className="font-label-mono text-label-mono block font-bold text-on-surface">
                        SOC2 Compliant
                      </span>
                      <span className="font-label-badge text-label-badge text-outline">
                        Automated Role Scopes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Clay Playground & Workflow Callout */}
      <section className="w-full max-w-[1360px] mx-auto px-gutter py-space-lg">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-surface-container-high via-surface-container to-surface-container-low p-space-lg lg:p-space-xl clay-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            <div className="lg:col-span-6 flex flex-col gap-space-sm">
              <div className="inline-flex items-center gap-2 px-space-sm py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-badge text-label-badge uppercase tracking-wider self-start">
                <span className="material-symbols-outlined text-sm">touch_app</span> Sensory Feedback Sandbox
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                The Anatomy of a Clay Token
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Test the real-time physical displacement shaders and pressure triggers built directly into our accessible UI framework. Every interaction models light refraction, material stiffness, and tactile acoustics.
              </p>
              <div className="flex items-center gap-space-md pt-space-xs flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">check_circle</span>
                  <span className="font-label-mono text-label-mono text-on-surface font-semibold">
                    WCAG AAA Contrast
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">check_circle</span>
                  <span className="font-label-mono text-label-mono text-on-surface font-semibold">
                    Zero Layout Shifts
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col items-center justify-center p-space-md rounded-3xl bg-surface-container-lowest clay-sunken">
              {/* Tactile Control Station Simulator */}
              <div className="w-full max-w-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-mono text-label-mono text-on-surface font-bold">
                    Volume Displacement
                  </span>
                  <span className="font-label-mono text-label-mono text-primary font-bold">
                    {blurVal}px Blur
                  </span>
                </div>

                {/* Custom Sunken Slider Track */}
                <div className="w-full flex flex-col gap-1">
                  <input
                    type="range"
                    min="8"
                    max="48"
                    value={blurVal}
                    onChange={(e) => setBlurVal(parseInt(e.target.value))}
                    className="w-full accent-primary-container cursor-pointer h-2 bg-surface-variant rounded-full"
                  />
                  <div className="flex justify-between font-label-mono text-[11px] text-on-surface-variant">
                    <span>8px Subtle</span>
                    <span>24px Default</span>
                    <span>48px Inflated</span>
                  </div>
                </div>

                {/* Squish Demo Switch Pad */}
                <div className="grid grid-cols-2 gap-space-sm pt-2">
                  <button
                    onClick={() => setSpatialAudio(!spatialAudio)}
                    className="p-space-sm rounded-2xl bg-surface-container-lowest clay-card active:scale-95 transition-all text-center flex flex-col items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-primary text-headline-sm">
                      {spatialAudio ? "spatial_audio_off" : "volume_mute"}
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface">Spatial Audio</span>
                    <span className="font-label-badge text-label-badge text-outline">
                      {spatialAudio ? "Simulated (ON)" : "Muted (OFF)"}
                    </span>
                  </button>

                  <button
                    onClick={() => setSubsurfaceRim(!subsurfaceRim)}
                    className={`p-space-sm rounded-2xl active:scale-95 transition-all text-center flex flex-col items-center gap-1 cursor-pointer ${
                      subsurfaceRim
                        ? "bg-primary-container text-on-primary clay-btn-primary"
                        : "bg-surface-container-high text-on-surface-variant clay-sunken"
                    }`}
                  >
                    <span className="material-symbols-outlined text-headline-sm">view_in_ar</span>
                    <span className="font-label-mono text-label-mono">Subsurface Rim</span>
                    <span className="font-label-badge text-label-badge opacity-80">
                      {subsurfaceRim ? "Active Specular" : "Flat Shaded"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal Component */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
}
