"use client";

import React from "react";

export interface CaseStudy {
  title: string;
  category: string;
  description: string;
  metrics: string[];
  techStack: string[];
  image: string;
}

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 bg-on-surface/50 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-surface-container-lowest rounded-[2.5rem] p-space-lg clay-card overflow-y-auto flex flex-col gap-space-md animate-in fade-in zoom-in-95 duration-200">
        {/* Header with Close */}
        <div className="flex items-center justify-between pb-space-sm border-b border-surface-variant">
          <div className="flex items-center gap-space-xs">
            <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-badge font-bold">
              {caseStudy.category}
            </span>
            <span className="font-label-mono text-label-mono text-on-surface-variant">
              Enterprise Case Study
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center clay-pill hover:bg-surface-variant transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-headline-sm">close</span>
          </button>
        </div>

        {/* Thumbnail Image */}
        <div className="w-full h-64 sm:h-80 rounded-3xl bg-surface-container-high clay-sunken overflow-hidden relative">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-space-sm">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            {caseStudy.title}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {caseStudy.description}
          </p>
        </div>

        {/* Verified Key Metrics */}
        <div className="flex flex-col gap-2">
          <span className="font-label-badge text-label-badge uppercase tracking-wider text-primary font-bold">
            Audited Production Outcomes
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs">
            {caseStudy.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-surface-container-low clay-sunken flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-tertiary text-title-lg">
                  verified
                </span>
                <span className="font-label-mono text-label-mono text-on-surface font-semibold">
                  {metric}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="flex flex-col gap-2">
          <span className="font-label-badge text-label-badge uppercase tracking-wider text-secondary font-bold">
            Architecture & Engineering Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {caseStudy.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface font-label-mono text-label-badge clay-pill"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-space-md mt-space-xs border-t border-surface-variant flex items-center justify-between">
          <div className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            Production Tested & Active
          </div>
          <button
            onClick={onClose}
            className="px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-title-lg text-body-sm clay-btn-primary cursor-pointer hover:scale-105 active:scale-95 transition-transform"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
}
