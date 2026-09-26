"use client";

import React, { useState } from "react";

export default function AboutAndSocialsPage() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [discordFeedback, setDiscordFeedback] = useState(false);
  const [calFeedback, setCalFeedback] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1360px] mx-auto px-gutter py-space-lg flex flex-col gap-space-xl mt-12">
        {/* Hero / Intro Asymmetric Banner */}
        <div className="relative w-full rounded-[2.5rem] bg-surface-container-lowest p-space-lg lg:p-space-xl clay-card overflow-hidden">
          <div className="absolute -right-20 -bottom-24 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-12 -top-12 w-80 h-80 rounded-full bg-secondary-fixed/50 blur-2xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed-variant font-label-badge text-label-badge w-fit">
                <span className="material-symbols-outlined text-title-lg">fingerprint</span>
                <span>IDENTITY & DIGITAL FOOTPRINT</span>
              </div>
              <h1 className="font-display text-display text-on-surface tracking-tight">
                Sculpting human softness into cold code.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
                Bridging pixel-level aesthetic sensuality with scalable, production-grade systems. Meet the human behind the volumetric tokens.
              </p>
            </div>

            {/* Direct Cal & Quick CV Action */}
            <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full lg:w-auto">
              <button
                onClick={() => setCvModalOpen(true)}
                className="w-full sm:w-auto px-space-lg py-3.5 rounded-full bg-surface-container-high text-on-surface font-title-lg text-title-lg clay-pill hover:-translate-y-1 active:translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-space-xs cursor-pointer"
              >
                <span className="material-symbols-outlined text-primary">description</span>
                <span>Examine Curriculum</span>
              </button>
              <a
                href="#cal-office-hours"
                className="w-full sm:w-auto px-space-lg py-3.5 rounded-full bg-primary-container text-on-primary font-title-lg text-title-lg clay-btn-primary hover:-translate-y-1 active:translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-space-xs"
              >
                <span className="material-symbols-outlined">calendar_today</span>
                <span>Book 25-Min Office Hours</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Grid: Avatar & Narrative (Left) vs Deep Narrative & Accolades (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/* Left Column: Clay Portrait & Tactile Badges */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            <div className="relative rounded-[2.5rem] bg-surface-container-lowest p-space-md lg:p-space-lg clay-card flex flex-col items-center text-center">
              {/* Tactile Avatar Stage */}
              <div className="relative w-full max-w-[340px] aspect-square rounded-[2rem] bg-surface-container-high clay-sunken p-3 flex items-center justify-center overflow-visible group">
                <img
                  alt="Mohammad Iqram 3D Clay Portrait"
                  className="w-full h-full object-cover rounded-[1.75rem] transition-transform duration-500 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCscGGbhv2lVlxEqlHqzw5r8d2QF8_4P45Pw2YrmV5Dimn58no2L9DRtQj21V7PZd4S2x0PNFrQ_WHgut5_rekkjj7vni5pPOdc6ojq9Zwuf-rRaTT8A3oil33CmgIsyecDnk-fKXk1EPj4_v6ssmS9ZHmVVYaGZOQksx4K-TabnV9oeeHPCwW4eahSFQZm9znJLXyfBfKlxjxlpQ-2lrdBJpVijzA0WsLZ_XC-toB7"
                />
                {/* Live status tag floating */}
                <div className="absolute -top-3 -right-2 px-space-sm py-1.5 rounded-full bg-tertiary text-on-tertiary font-label-badge text-label-badge flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping"></span>
                  <span>SYNAPSE ACTIVE</span>
                </div>
              </div>

              {/* Personality Floating Badges */}
              <div className="w-full flex flex-col gap-space-xs mt-space-md">
                <div className="w-full p-space-sm rounded-2xl bg-surface-container-low clay-card flex items-center gap-space-sm hover:-translate-y-0.5 transition-transform">
                  <div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-title-lg">pin_drop</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">
                      Base of Operations
                    </span>
                    <span className="font-title-lg text-title-lg text-on-surface">
                      Remote / San Francisco, CA
                    </span>
                  </div>
                </div>

                <div className="w-full p-space-sm rounded-2xl bg-surface-container-low clay-card flex items-center gap-space-sm hover:-translate-y-0.5 transition-transform">
                  <div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-title-lg">local_cafe</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">
                      Core Ethos
                    </span>
                    <span className="font-title-lg text-title-lg text-on-surface">
                      Driven by Tactile Curiosity & Coffee
                    </span>
                  </div>
                </div>

                <div className="w-full p-space-sm rounded-2xl bg-surface-container-low clay-card flex items-center gap-space-sm hover:-translate-y-0.5 transition-transform">
                  <div className="w-9 h-9 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-title-lg">polyline</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-label-badge text-label-badge text-on-surface-variant uppercase">
                      Hybrid DNA
                    </span>
                    <span className="font-title-lg text-title-lg text-on-surface">
                      Code Precision + Aesthetic Weight
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Micro Metrics */}
              <div className="w-full grid grid-cols-3 gap-2 mt-space-md pt-space-sm border-t border-surface-variant">
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-primary">9+</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">
                    Yrs Crafting
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-secondary">38+</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">
                    Shipped Apps
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-tertiary">14</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">
                    Design Patents
                  </span>
                </div>
              </div>
            </div>

            {/* Working Values Callout */}
            <div className="rounded-[2.5rem] bg-secondary p-space-lg text-on-secondary shadow-lg flex flex-col gap-space-sm relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-secondary-container/50 blur-xl"></div>
              <div className="flex items-center gap-space-xs text-secondary-fixed">
                <span className="material-symbols-outlined text-headline-sm">psychology</span>
                <span className="font-label-badge text-label-badge uppercase tracking-wider">
                  Ergonomic Principle
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-secondary">
                “Tactile design respects muscle memory.”
              </h3>
              <p className="font-body-md text-body-md text-secondary-fixed">
                Flat design treats high-consequence enterprise applications as flat paper sheets. Volumetric, tactile depth models real-world physics, immediately grounding human intent.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            {/* Story Behind the Clay Card */}
            <div className="rounded-[2.5rem] bg-surface-container-lowest p-space-lg lg:p-space-xl clay-card flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-badge text-label-badge uppercase tracking-widest text-primary font-bold">
                  THE ODYSSEY
                </span>
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  EST. 2016 → 2025
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                The Story Behind the Clay
              </h2>
              <div className="flex flex-col gap-space-md font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                <p>
                  I spent the first five years of my engineering career building high-frequency dashboards, developer consoles, and enterprise analytics suites. Every application looked identical: monochromatic gray frames, razor-thin borders, and zero tangible friction. Users were cognitively exhausted within hours.
                </p>
                <p>
                  In 2021, I started bringing tactile physicality into digital components. Not the glossy skeuomorphism of the early 2010s, but a refined, volumetric <span className="text-on-surface font-semibold">claymorphism</span>: soft-matte materials, ambient drop diffusion, responsive squish physics, and micro-elevation.
                </p>
                <p>
                  Software is no longer just observed through glass; it is manipulated. When buttons push into the surface and data blocks possess tangible visual weight, users instinctively intuit state changes. Cognitive fatigue plummets, and software becomes an organic joy to operate.
                </p>
              </div>

              {/* Tactile Comparison Mini Matrix */}
              <div className="mt-space-sm p-space-md rounded-2xl bg-surface-container-low clay-sunken flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined text-headline-sm">layers_clear</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-lg text-title-lg text-on-surface">Flat Interfaces</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Low affordance, visual strain
                    </span>
                  </div>
                </div>
                <div className="hidden sm:block text-outline-variant">
                  <span className="material-symbols-outlined text-headline-sm">trending_flat</span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <div className="w-12 h-12 rounded-2xl bg-primary-container text-on-primary flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-headline-sm">water_drop</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-lg text-title-lg text-primary font-bold">
                      Tactile Clay Tokens
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Sensory certainty, natural delight
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Craft Pillars / Dual Threat Capability */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              <div className="rounded-3xl bg-surface-container-lowest p-space-md clay-card flex flex-col gap-space-xs">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-headline-sm">palette</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-on-surface mt-1">
                  Design Engineering
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  System architecture, volumetric design tokens, micro-interactions, Figma component compilers, and accessible contrast algorithms.
                </p>
              </div>
              <div className="rounded-3xl bg-surface-container-lowest p-space-md clay-card flex flex-col gap-space-xs">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-headline-sm">terminal</span>
                </div>
                <h4 className="font-title-lg text-title-lg text-on-surface mt-1">
                  Full-Stack Synthesis
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  TypeScript, React/Next.js, WebGL shader integrations, Node microservices, and high-concurrency real-time WebSocket pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SOCIAL LINKS CLAY HUB */}
        <div className="w-full flex flex-col gap-space-lg">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs">
            <div>
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-secondary font-bold">
                TACTILE RADAR
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Social Links & Active Channels
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Direct lines to code repositories, motion experiments, long-form system teardowns, and calendar slots.
            </p>
          </div>

          {/* Bento-style Social Clay Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {/* CARD 1: GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[2.5rem] bg-surface-container-lowest p-space-lg clay-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-[360px] relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-space-xs">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-on-surface group-hover:bg-on-surface group-hover:text-surface transition-colors shadow-inner">
                    <span className="material-symbols-outlined text-headline-sm">code</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">
                      GitHub
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      @Mohammad Iqram-vance
                    </span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary transition-colors clay-pill">
                  <span className="material-symbols-outlined text-title-lg">north_east</span>
                </div>
              </div>

              {/* Heatmap Simulation */}
              <div className="flex flex-col gap-2 my-auto">
                <div className="flex items-center justify-between text-label-mono font-label-mono text-on-surface-variant">
                  <span>Annual Activity</span>
                  <span className="text-tertiary font-bold">1,842 Commits</span>
                </div>
                <div className="p-3 bg-surface-container-low rounded-2xl clay-sunken flex flex-col gap-1.5">
                  <div className="grid grid-cols-12 gap-1.5">
                    <div className="h-3 rounded-md bg-tertiary/20"></div>
                    <div className="h-3 rounded-md bg-tertiary/40"></div>
                    <div className="h-3 rounded-md bg-tertiary"></div>
                    <div className="h-3 rounded-md bg-tertiary/60"></div>
                    <div className="h-3 rounded-md bg-tertiary"></div>
                    <div className="h-3 rounded-md bg-tertiary/20"></div>
                    <div className="h-3 rounded-md bg-tertiary/80"></div>
                    <div className="h-3 rounded-md bg-tertiary"></div>
                    <div className="h-3 rounded-md bg-tertiary/30"></div>
                    <div className="h-3 rounded-md bg-tertiary"></div>
                    <div className="h-3 rounded-md bg-tertiary/50"></div>
                    <div className="h-3 rounded-md bg-tertiary"></div>
                  </div>
                  <div className="grid grid-cols-12 gap-1.5">
                    <div className="h-3 rounded-md bg-tertiary/60"></div>
                    <div className="h-3 rounded-md bg-tertiary"></div>
                    <div className="h-3 rounded-md bg-tertiary/20"></div>
                    <div className="h-3 rounded-md bg-tertiary/90"></div>
                    <div className="h-3 rounded-md bg-tertiary"></div>
                    <div className="h-3 rounded-md bg-tertiary/30"></div>
                    <div className="h-3 rounded-md bg-tertiary/70"></div>
                    <div className="h-3 rounded-md bg-tertiary"></div>
                    <div className="h-3 rounded-md bg-tertiary/20"></div>
                    <div className="h-3 rounded-md bg-tertiary/40"></div>
                    <div className="h-3 rounded-md bg-tertiary"></div>
                    <div className="h-3 rounded-md bg-tertiary/80"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-space-xs border-t border-surface-variant">
                <span className="font-label-badge text-label-badge text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-title-lg text-primary-container">
                    star
                  </span>
                  1.4k Stars
                </span>
                <span className="font-label-badge text-label-badge text-on-surface-variant">
                  24 Open Repos
                </span>
              </div>
            </a>

            {/* CARD 2: LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[2.5rem] bg-surface-container-lowest p-space-lg clay-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-[360px] relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-space-xs">
                  <div className="w-12 h-12 rounded-2xl bg-secondary-fixed flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors shadow-inner">
                    <span className="material-symbols-outlined text-headline-sm">work</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-lg text-title-lg text-on-surface group-hover:text-secondary transition-colors">
                      LinkedIn
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      Professional Network
                    </span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:bg-secondary group-hover:text-on-secondary transition-colors clay-pill">
                  <span className="material-symbols-outlined text-title-lg">north_east</span>
                </div>
              </div>

              <div className="p-space-sm rounded-2xl bg-surface-container-low clay-sunken flex flex-col gap-1.5 my-auto">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-title-lg">
                    format_quote
                  </span>
                  <span className="font-label-badge text-label-badge text-on-surface font-semibold">
                    VP of Product, FinScale
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 italic">
                  “Mohammad Iqram revolutionized our design tokens and eliminated months of frontend developer re-work.”
                </p>
              </div>

              <div className="flex items-center justify-between pt-space-xs border-t border-surface-variant">
                <div className="flex items-center gap-1 font-label-badge text-label-badge text-on-surface">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  <span>5,000+ Connections</span>
                </div>
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  28 Recommendations
                </span>
              </div>
            </a>

            {/* CARD 3: X / Threads */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[2.5rem] bg-surface-container-lowest p-space-lg clay-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-[360px] relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-space-xs">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-high flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary transition-colors shadow-inner">
                    <span className="material-symbols-outlined text-headline-sm">
                      alternate_email
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">
                      X / Threads
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      @Mohammad Iqramvance_ui
                    </span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary transition-colors clay-pill">
                  <span className="material-symbols-outlined text-title-lg">north_east</span>
                </div>
              </div>

              <div className="p-space-sm rounded-2xl bg-surface-container-low clay-sunken flex flex-col gap-1.5 my-auto">
                <span className="font-label-badge text-label-badge text-primary uppercase font-bold">
                  VIRAL THREAD BREAKDOWN
                </span>
                <p className="font-body-sm text-body-sm text-on-surface font-medium line-clamp-2">
                  “Why 95% of web design systems fail at dual-inset ambient depth tokens—and how to fix them with pure CSS variables.”
                </p>
              </div>

              <div className="flex items-center justify-between pt-space-xs border-t border-surface-variant">
                <span className="font-label-badge text-label-badge text-on-surface-variant">
                  12.4k Craft Followers
                </span>
                <span className="font-label-badge text-label-badge text-primary font-bold">
                  Daily Dev Bites
                </span>
              </div>
            </a>

            {/* CARD 4: Dribbble & Behance */}
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[2.5rem] bg-surface-container-lowest p-space-lg clay-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-[360px] relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-space-xs">
                  <div className="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors shadow-inner">
                    <span className="material-symbols-outlined text-headline-sm">draw</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">
                      Dribbble & Behance
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      Visual Laboratories
                    </span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:bg-primary-container group-hover:text-on-primary transition-colors clay-pill">
                  <span className="material-symbols-outlined text-title-lg">north_east</span>
                </div>
              </div>

              <div className="flex items-center gap-2 my-auto">
                <div className="flex-1 py-3 rounded-2xl bg-surface-container-high clay-sunken flex flex-col items-center justify-center text-center">
                  <span className="font-label-badge text-label-badge text-primary uppercase">
                    EXPLORATION
                  </span>
                  <span className="font-title-lg text-title-lg text-on-surface font-bold">
                    42 Shots
                  </span>
                </div>
                <div className="flex-1 py-3 rounded-2xl bg-surface-container-high clay-sunken flex flex-col items-center justify-center text-center">
                  <span className="font-label-badge text-label-badge text-secondary uppercase">
                    FEATURED
                  </span>
                  <span className="font-title-lg text-title-lg text-on-surface font-bold">
                    11 Times
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-space-xs border-t border-surface-variant">
                <span className="px-space-sm py-1 rounded-full bg-primary-fixed/50 text-on-primary-fixed-variant font-label-badge text-label-badge font-bold">
                  PRO MEMBER
                </span>
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  Top 1% Visuals
                </span>
              </div>
            </a>

            {/* CARD 5: YouTube & Substack */}
            <a
              href="https://substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[2.5rem] bg-surface-container-lowest p-space-lg clay-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-[360px] relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-space-xs">
                  <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors shadow-inner">
                    <span className="material-symbols-outlined text-headline-sm">
                      smart_display
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-lg text-title-lg text-on-surface group-hover:text-tertiary transition-colors">
                      YouTube / Substack
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      Long-form Masterclasses
                    </span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors clay-pill">
                  <span className="material-symbols-outlined text-title-lg">north_east</span>
                </div>
              </div>

              <div className="p-space-sm rounded-2xl bg-surface-container-low clay-sunken flex flex-col gap-1.5 my-auto">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  <span className="font-label-badge text-label-badge text-tertiary uppercase font-bold">
                    LATEST DISPATCH
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface font-medium line-clamp-2">
                  “Building Kinetic Spring Physics with CSS Touch Tokens without External Libraries.”
                </p>
              </div>

              <div className="flex items-center justify-between pt-space-xs border-t border-surface-variant">
                <span className="font-label-badge text-label-badge text-on-surface-variant">
                  4,200+ Engineers
                </span>
                <span className="font-label-badge text-label-badge text-tertiary font-bold">
                  Weekly Digest
                </span>
              </div>
            </a>

            {/* CARD 6: Discord & Cal.com */}
            <div
              className="group rounded-[2.5rem] bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-space-lg clay-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-[360px] relative overflow-hidden"
              id="cal-office-hours"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-space-xs">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-on-secondary shadow-inner">
                    <span className="material-symbols-outlined text-headline-sm">forum</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-lg text-title-lg text-on-surface">
                      Community & Cal
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      Direct Synchronous Access
                    </span>
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></div>
              </div>

              <div className="flex flex-col gap-2 my-auto">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Hop into my Discord server or schedule a 1-on-1 portfolio critique, architectural consultation, or design system sync.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setDiscordFeedback(true);
                      setTimeout(() => setDiscordFeedback(false), 3000);
                    }}
                    className="flex-1 py-2.5 px-3 rounded-full bg-surface-container-highest text-on-surface font-label-badge text-label-badge clay-pill hover:bg-secondary-fixed transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-body-md">chat</span>
                    {discordFeedback ? "Connected!" : "Discord Room"}
                  </button>
                  <button
                    onClick={() => {
                      setCalFeedback(true);
                      setTimeout(() => setCalFeedback(false), 3000);
                    }}
                    className="flex-1 py-2.5 px-3 rounded-full bg-primary-container text-on-primary font-label-badge text-label-badge clay-btn-primary hover:opacity-90 transition-opacity flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-body-md">schedule</span>
                    {calFeedback ? "Opening..." : "Cal.com"}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-space-xs border-t border-surface-variant">
                <span className="font-label-badge text-label-badge text-tertiary flex items-center gap-1 font-bold">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span> 3 Slots Open This Week
                </span>
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  Free 25m Calls
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume Banner */}
        <div className="rounded-[2.5rem] bg-surface-container-high p-space-lg lg:p-space-xl clay-card flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-md">
            <div className="w-16 h-16 rounded-[1.75rem] bg-primary-container text-on-primary flex items-center justify-center shadow-lg clay-btn-primary shrink-0">
              <span className="material-symbols-outlined text-display-mobile">description</span>
            </div>
            <div className="flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Curriculum Vitae & Enterprise Dossier
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                Detailed timeline of roles, VC-backed startup launches, patents, design token repositories, and architectural milestones.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-space-sm w-full md:w-auto">
            <button
              onClick={() => setCvModalOpen(true)}
              className="flex-1 md:flex-none px-space-lg py-3.5 rounded-full bg-surface-container-lowest text-on-surface font-title-lg text-title-lg clay-pill hover:-translate-y-1 active:translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-space-xs cursor-pointer"
            >
              <span className="material-symbols-outlined text-title-lg">visibility</span>
              <span>Quick Preview</span>
            </button>
            <button
              onClick={() => alert("Downloading CV Package (Formal Dossier PDF)...")}
              className="flex-1 md:flex-none px-space-lg py-3.5 rounded-full bg-primary-container text-on-primary font-title-lg text-title-lg clay-btn-primary hover:-translate-y-1 active:translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-space-xs cursor-pointer"
            >
              <span className="material-symbols-outlined text-title-lg">download</span>
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {cvModalOpen && (
        <div className="fixed inset-0 z-50 bg-on-surface/40 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center p-4 lg:p-space-lg">
          <div className="relative w-full max-w-3xl max-h-[870px] bg-surface-container-lowest rounded-[2.5rem] clay-card p-space-lg flex flex-col gap-space-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-space-sm border-b border-surface-variant">
              <div className="flex items-center gap-space-xs">
                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-title-lg">article</span>
                </div>
                <div>
                  <h4 className="font-title-lg text-title-lg text-on-surface">
                    Mohammad Iqram — Dossier Preview
                  </h4>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">
                    Staff Product Designer & Systems Engineer
                  </span>
                </div>
              </div>
              <button
                onClick={() => setCvModalOpen(false)}
                className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface clay-pill flex items-center justify-center hover:bg-surface-variant transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-title-lg">close</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto pr-2 flex flex-col gap-space-md text-on-surface">
              {/* Section: Experience Highlights */}
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-badge text-label-badge text-primary uppercase font-bold">
                  RELEVANT ROLES
                </span>
                <div className="p-space-sm rounded-2xl bg-surface-container-low clay-sunken flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="font-title-lg text-title-lg font-bold">
                      Principal Design Architect — Kinetic Systems
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      2022 - Present
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Engineered universal clay token architecture across 14 enterprise suites. Boosted user task completion velocity by 34%.
                  </p>
                </div>
                <div className="p-space-sm rounded-2xl bg-surface-container-low clay-sunken flex flex-col gap-1 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-title-lg text-title-lg font-bold">
                      Lead Full-Stack UI Engineer — Modulo Inc
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">
                      2019 - 2022
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Authored company-wide web component library with zero third-party UI dependencies, serving over 1.2M daily active sessions.
                  </p>
                </div>
              </div>

              {/* Section: Tech Stack Badges */}
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-badge text-label-badge text-secondary uppercase font-bold">
                  CORE CAPABILITIES
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-mono text-label-mono">
                    Design Systems
                  </span>
                  <span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-mono text-label-mono">
                    TypeScript / Next.js
                  </span>
                  <span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-mono text-label-mono">
                    WebGL & Shader Art
                  </span>
                  <span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-mono text-label-mono">
                    Claymorphic Spatial UI
                  </span>
                  <span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-mono text-label-mono">
                    WCAG 2.1 AAA Compliance
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-space-sm border-t border-surface-variant flex items-center justify-between">
              <span className="font-label-mono text-label-mono text-on-surface-variant">
                Format: Interactive PDF (A4)
              </span>
              <button
                onClick={() => alert("Downloading Full Formal PDF Dossier...")}
                className="px-space-md py-2.5 rounded-full bg-primary-container text-on-primary font-title-lg text-body-sm clay-btn-primary flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-title-lg">download</span>
                <span>Download Formal PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
