"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import ContactModal from "@/components/ContactModal";

interface Testimonial {
  id: string;
  category: "founder" | "product" | "engineering";
  quote: string;
  body: string;
  author: string;
  role: string;
  tag: string;
  tagClass?: string;
  icon: string;
  avatar?: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    category: "product",
    quote: "“Transformed our web platform into an intuitive experience our users love.”",
    body: "Re-engineered our component taxonomy and designed a tactile, reduced-cognitive-load interface that cut user onboarding latency down significantly.",
    author: "Azher Ali",
    role: "Founder • Sharwings",
    tag: "Platform Design",
    icon: "domain",
  },
  {
    id: "2",
    category: "product",
    quote: "“Brought a fresh, organic aesthetic to our digital garden experience.”",
    body: "Crafted a custom visual hierarchy and smooth responsive layouts that drastically improved customer engagement and overall site aesthetics.",
    author: "Zeeshan",
    role: "Founder • Gardenbyzee",
    tag: "E-Commerce",
    icon: "park",
  },
  {
    id: "3",
    category: "engineering",
    quote: "“Rare talent who bridges intricate architectural specs with production-ready code.”",
    body: "Engineered our core CAD viewer dashboard and real-time design telemetry interfaces with high performance and zero spec translation handoff issues.",
    author: "Shams",
    role: "Lead Architect • CADHauz",
    tag: "Full-Stack TS",
    tagClass: "bg-secondary-fixed/50 text-secondary",
    icon: "architecture",
  },
  {
    id: "4",
    category: "founder",
    quote: "“Built a high-converting booking flow resulting in an immediate jump in inquiries.”",
    body: "From custom quote engines to tactile interactive scheduling flows, every touchpoint was engineered to convert casual visitors into repeat clients.",
    author: "Basir",
    role: "Founder • GoGoMovers",
    tag: "Logistics UX",
    tagClass: "bg-primary-fixed/50 text-on-primary-fixed-variant",
    icon: "local_shipping",
  },
  {
    id: "5",
    category: "product",
    quote: "“The platform overhaul made our digital catalog intuitive and seamless.”",
    body: "Modeled ergonomic navigation and fast search workflows that drastically reduced discovery cycle errors across thousands of items.",
    author: "Taskeen Majeed",
    role: "Product Lead • Gembook",
    tag: "Web App",
    icon: "menu_book",
  },
  {
    id: "6",
    category: "product",
    quote: "“Our interior design showcase went from static photos to an interactive journey.”",
    body: "Replaced flat image grids with tactile portfolio cards and fluid project maps, elevating our luxury interior design brand identity.",
    author: "Muneer",
    role: "Creative Director • HomeAsset",
    tag: "Interior Design",
    tagClass: "bg-tertiary-fixed/40 text-on-tertiary-fixed-variant",
    icon: "home",
  },
];

export default function TestimonialsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [contactOpen, setContactOpen] = useState(false);

  const filteredTestimonials = useMemo(() => {
    if (filter === "all") return TESTIMONIALS_DATA;
    return TESTIMONIALS_DATA.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full max-w-[1360px] mx-auto px-gutter py-space-xl overflow-hidden mt-12">
        {/* Ambient background glows */}
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 -right-32 w-[30rem] h-[30rem] bg-secondary-fixed/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-space-xl">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-lowest clay-pill mb-space-md">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-ping"></span>
            <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest">
              Endorsements & Impact
            </span>
            <span className="text-outline-variant font-label-mono text-label-mono">•</span>
            <span className="font-label-mono text-label-mono text-on-surface-variant font-medium">
              100% Client Satisfaction
            </span>
          </div>

          <h1 className="font-display text-display text-on-surface tracking-tight max-w-3xl mb-space-md">
            Kind Words from <span className="text-primary-container drop-shadow-sm">Founders</span>, CTOs & Product Leaders
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-lg">
            Bridging the divide between tactile aesthetic craft and robust full-stack engineering. Here is what partners say after launching production systems together.
          </p>

          {/* Filter Pills */}
          <div className="w-full flex flex-wrap items-center justify-center gap-space-xs p-2 rounded-full bg-surface-container-high/60 clay-sunken max-w-2xl mx-auto">
            {[
              { id: "all", label: "All Reviews (6)" },
              { id: "founder", label: "Founders" },
              { id: "product", label: "VP of Product" },
              { id: "engineering", label: "Engineering Leads" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-space-md py-2.5 rounded-full font-title-lg text-body-sm transition-all duration-300 cursor-pointer ${
                  filter === btn.id
                    ? "bg-primary-container text-on-primary clay-btn-primary"
                    : "text-on-surface-variant bg-surface-container-lowest/80 clay-pill hover:text-on-surface"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg mb-space-xl">
          {filteredTestimonials.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between bg-surface-container-lowest p-space-lg rounded-[2.5rem] clay-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 bg-surface-container-low px-3 py-1.5 rounded-full clay-sunken">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="material-symbols-outlined text-primary-container text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-secondary clay-pill">
                    <span className="material-symbols-outlined text-title-lg">format_quote</span>
                  </div>
                </div>

                <div className="relative">
                  <p className="font-headline-sm text-headline-sm text-on-surface leading-snug">
                    {item.quote}
                  </p>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {item.body}
                </p>
              </div>

              <div className="mt-space-lg pt-space-md flex items-center justify-between border-none bg-surface-container-low/60 -mx-space-lg -mb-space-lg p-space-md rounded-b-[2.5rem]">
                <div className="flex items-center gap-space-sm min-w-0">
                  <div className="relative flex-shrink-0">
                    {item.avatar ? (
                      <img
                        className="w-12 h-12 rounded-full object-cover shadow-sm bg-surface-dim"
                        alt={item.author}
                        src={item.avatar}
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary-fixed/80 flex items-center justify-center text-primary-container clay-pill">
                        <span className="material-symbols-outlined text-headline-sm">
                          {item.icon}
                        </span>
                      </div>
                    )}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container text-[11px] font-bold shadow-sm">
                      <span className="material-symbols-outlined text-[12px]">verified</span>
                    </div>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-title-lg text-title-lg text-on-surface truncate">
                      {item.author}
                    </span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant truncate">
                      {item.role}
                    </span>
                  </div>
                </div>
                <span
                  className={`flex-shrink-0 px-2.5 py-1 rounded-full font-label-badge text-label-badge ${
                    item.tagClass || "bg-surface-container text-on-secondary-fixed-variant"
                  }`}
                >
                  {item.tag}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Live Performance Metric Bento Banner */}
        <div className="w-full bg-surface-container-lowest rounded-[2.5rem] p-space-lg lg:p-space-xl clay-card mb-space-xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-space-lg items-center text-center md:text-left">
            <div className="flex flex-col gap-1">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant">
                Cumulative Impact
              </span>
              <span className="font-display text-display text-primary-container font-extrabold tracking-tight">
                $42M+
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Enterprise client valuation gained
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant">
                Retention Score
              </span>
              <span className="font-display text-display text-secondary font-extrabold tracking-tight">
                98.4%
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Sprint delivery on-time rate
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant">
                Testimonials
              </span>
              <span className="font-display text-display text-tertiary font-extrabold tracking-tight">
                5.0 / 5
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Across 24 venture-backed projects
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start justify-center p-space-md rounded-2xl bg-surface-container-low clay-sunken">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
                <span className="font-label-mono text-label-mono text-tertiary font-bold">
                  Audited Feedback
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Verified via independent leadership references and GitHub PR commit histories.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="relative w-full rounded-[3rem] bg-gradient-to-br from-surface-container-lowest via-surface-container to-surface-container-high p-space-lg lg:p-space-xl clay-card text-center overflow-hidden">
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary-container/20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-secondary/15 rounded-full blur-2xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-space-md">
            <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg clay-btn-primary mb-space-xs">
              <span className="material-symbols-outlined text-[32px]">rocket_launch</span>
            </div>
            <h2 className="font-display text-display text-on-surface tracking-tight max-w-2xl">
              Ready to build something <span className="text-primary">unforgettable</span> together?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-sm">
              Whether you need a tactile design overhaul, an enterprise-grade web application, or a complete design engineering bridge from scratch—let's sculpt something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-space-md w-full justify-center">
              <button
                onClick={() => setContactOpen(true)}
                className="w-full sm:w-auto px-space-xl py-4 rounded-full bg-primary-container text-on-primary font-title-lg text-body-lg clay-btn-primary flex items-center justify-center gap-space-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-headline-sm">forum</span>
                <span>Launch Partnership Inquiry</span>
              </button>
              <Link
                href="/projects"
                className="w-full sm:w-auto px-space-lg py-4 rounded-full bg-surface-container-lowest text-on-surface font-title-lg text-body-lg clay-pill flex items-center justify-center gap-space-xs transition-all duration-300 hover:text-primary"
              >
                <span>Explore Case Studies</span>
                <span className="material-symbols-outlined text-title-lg">arrow_outward</span>
              </Link>
            </div>
            <div className="flex items-center gap-space-sm mt-space-sm">
              <span className="material-symbols-outlined text-tertiary text-body-md">lock</span>
              <span className="font-label-mono text-label-mono text-on-surface-variant">
                Confidential NDA friendly • Next slot opens June 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
