"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-surface-container-low py-space-xl px-gutter mt-space-xl">
      <div className="max-w-[1360px] mx-auto rounded-[2.5rem] bg-surface-container-lowest p-space-lg lg:p-space-xl clay-card">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg">
          {/* Col 1 */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs">
              <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-headline-sm">shapes</span>
              </div>
              <span className="font-headline-md text-headline-md text-on-surface tracking-tight">
                Kaelen Vance
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Sculpting human-grade digital interfaces with full-stack engineering rigour. Claymorphic paradigms, responsive web systems, and design tokens built for scale.
            </p>
            <div className="flex items-center gap-space-sm">
              <span className="w-3 h-3 rounded-full bg-tertiary animate-pulse"></span>
              <span className="font-label-mono text-label-mono text-tertiary font-bold">
                Accepting enterprise contracts & ventures
              </span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant">
              Sitemap Directory
            </span>
            <ul className="flex flex-col gap-space-xs">
              <li>
                <Link
                  href="/"
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors inline-block"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors inline-block"
                >
                  Production Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/stats-and-skills"
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors inline-block"
                >
                  Skills & Benchmarks
                </Link>
              </li>
              <li>
                <Link
                  href="/about-and-socials"
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors inline-block"
                >
                  Engineering Lab
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors inline-block"
                >
                  Client Endorsements
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <span className="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant">
              Tactile Dispatch
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Receive monthly deep-dives on 3D spatial web systems, code snippets, and UI interaction physics.
            </p>
            {subscribed ? (
              <div className="p-3 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full font-label-mono text-label-mono flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">check_circle</span>
                <span>Subscribed to Tactile Dispatch!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-space-xs">
                <div className="flex-1 bg-surface-container-high rounded-full px-space-md py-3 clay-sunken flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-on-surface-variant text-body-md">
                    alternate_email
                  </span>
                  <input
                    className="bg-transparent w-full text-on-surface font-body-sm text-body-sm focus:outline-none placeholder:text-outline"
                    placeholder="Enter your work email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-space-md py-3 rounded-full bg-primary-container text-on-primary font-title-lg text-body-sm clay-btn-primary flex items-center justify-center gap-space-xs cursor-pointer hover:scale-105 active:scale-95 transition-transform"
                >
                  <span className="material-symbols-outlined text-title-lg">arrow_forward</span>
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-space-lg pt-space-md border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <span className="font-label-mono text-label-mono text-on-surface-variant text-center sm:text-left">
            © 2025 Kaelen Vance. Sculpted with tactile code tokens.
          </span>
          <div className="flex items-center gap-space-md">
            <span className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
              System Logs
            </span>
            <span className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
              RSS Feed
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
