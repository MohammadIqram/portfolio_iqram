"use client";

import React, { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Enterprise Web App");
  const [budget, setBudget] = useState("$25k - $50k");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setMessage("");
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-on-surface/50 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-[2.5rem] p-space-lg clay-card overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center clay-pill hover:bg-surface-variant transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-headline-sm">close</span>
        </button>

        {submitted ? (
          <div className="py-space-xl flex flex-col items-center text-center gap-space-md">
            <div className="w-16 h-16 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center clay-pill">
              <span className="material-symbols-outlined text-headline-lg">verified</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Transmission Received!</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-md">
                Thanks {name || "there"}. Kaelen will review your project parameters and respond within 24 hours with architectural notes.
              </p>
            </div>
            <div className="px-space-md py-1.5 rounded-full bg-surface-container-high clay-sunken font-label-mono text-label-mono text-tertiary">
              Status: Priority Routing Active
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs">
              <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-title-lg">forum</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Initiate Project Inquiry</h3>
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  Direct pipeline to Principal Design Architect
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              <div className="flex flex-col gap-1">
                <label className="font-label-mono text-label-badge text-on-surface-variant">Your Name</label>
                <div className="bg-surface-container-high rounded-2xl px-space-md py-2.5 clay-sunken">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-transparent w-full text-on-surface font-body-sm focus:outline-none placeholder:text-outline"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-mono text-label-badge text-on-surface-variant">Work Email</label>
                <div className="bg-surface-container-high rounded-2xl px-space-md py-2.5 clay-sunken">
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent w-full text-on-surface font-body-sm focus:outline-none placeholder:text-outline"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              <div className="flex flex-col gap-1">
                <label className="font-label-mono text-label-badge text-on-surface-variant">Project Scope</label>
                <div className="bg-surface-container-high rounded-2xl px-space-md py-2.5 clay-sunken">
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="bg-transparent w-full text-on-surface font-body-sm focus:outline-none cursor-pointer"
                  >
                    <option value="Enterprise Web App">Enterprise Web App</option>
                    <option value="Tactile Design System">Tactile Design System</option>
                    <option value="Shopify / Commerce Headless">Shopify / Commerce Headless</option>
                    <option value="Fractional Architecture Lead">Fractional Architecture Lead</option>
                    <option value="Technical Design Audit">Technical Design Audit</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-mono text-label-badge text-on-surface-variant">Target Budget</label>
                <div className="bg-surface-container-high rounded-2xl px-space-md py-2.5 clay-sunken">
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="bg-transparent w-full text-on-surface font-body-sm focus:outline-none cursor-pointer"
                  >
                    <option value="$15k - $25k">$15k - $25k</option>
                    <option value="$25k - $50k">$25k - $50k</option>
                    <option value="$50k - $100k+">$50k - $100k+</option>
                    <option value="Retainer / Advisory">Retainer / Advisory</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-label-mono text-label-badge text-on-surface-variant">Project Brief / Objectives</label>
              <div className="bg-surface-container-high rounded-2xl p-space-sm clay-sunken">
                <textarea
                  rows={3}
                  required
                  placeholder="Tell me about your product timelines, architectural requirements, or tactile vision..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-transparent w-full text-on-surface font-body-sm focus:outline-none placeholder:text-outline resize-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-space-xs">
              <span className="font-label-mono text-label-badge text-on-surface-variant flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                NDA & Security Assured
              </span>
              <button
                type="submit"
                className="px-space-lg py-3 rounded-full bg-primary-container text-on-primary font-title-lg text-body-sm clay-btn-primary flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                <span>Transmit Inquiry</span>
                <span className="material-symbols-outlined text-title-lg">send</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
