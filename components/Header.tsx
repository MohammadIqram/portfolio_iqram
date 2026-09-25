"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onOpenContact?: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Overview", key: "overview" },
    { href: "/projects", label: "Projects", key: "projects" },
    { href: "/stats-and-skills", label: "Stats & Skills", key: "stats-and-skills" },
    { href: "/about-and-socials", label: "About & Socials", key: "about-and-socials" },
    { href: "/testimonials", label: "Testimonials", key: "testimonials" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-space-sm px-gutter flex justify-center">
      <div className="h-20 w-full max-w-[1360px] mx-auto flex items-center justify-between px-space-md bg-surface-container-lowest/90 backdrop-blur-xl rounded-full clay-pill transition-all">
        {/* Brand */}
        <div className="flex items-center gap-space-sm">
          <Link href="/" className="flex items-center gap-space-xs group">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary shadow-inner transition-transform group-hover:scale-105">
              <span className="material-symbols-outlined text-headline-sm">polyline</span>
            </div>
            <span className="hidden sm:inline-block font-headline-sm text-headline-sm text-on-surface tracking-tight">
              Kaelen.craft
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-tertiary-fixed/40 text-on-tertiary-fixed-variant font-label-badge text-label-badge">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            Available for Q2 Projects
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low/70 p-1.5 rounded-full">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.key}
                href={link.href}
                className={`px-space-md py-space-xs rounded-full font-title-lg text-title-lg transition-all ${
                  active
                    ? "bg-primary-container text-on-primary shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-space-sm">
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-space-xs bg-primary-container text-on-primary px-space-md py-2.5 rounded-full font-title-lg text-body-sm clay-btn-primary transition-transform active:scale-95 hover:scale-105 cursor-pointer"
          >
            <span className="material-symbols-outlined text-title-lg">send</span>
            Let's Talk
          </button>

          <img
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-primary-container/30 shadow-sm"
            src="https://lh3.googleusercontent.com/aida/AEtjO1VYl3QfzecSzg41MAo5lc-K1rey3r7Uj7yp1Q5Cai7dUVjXfww9jNB7uxyqf97OPhgnKFzHX0sjd9qs3sHgaQSpBt4tt8kYwCyjFLPcTsSZrJW-JPaVZCzp4b1C29caipYa5OpYLnz9qaFjkKexewv6nX4V00k47_dhHEakb4Yi8efGswRGH33BvaxBbpEe7c1FvSEYjx-tJfwf9U78JQxBRmX9elwk0CmBSRiPF1mx"
          />

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface clay-pill cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-headline-sm">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-2xl rounded-3xl p-space-md clay-card flex flex-col gap-2 z-50">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-space-md py-3 rounded-2xl font-title-lg text-title-lg transition-all flex items-center justify-between ${
                  active
                    ? "bg-primary-container text-on-primary shadow-sm"
                    : "text-on-surface hover:bg-surface-container-low"
                }`}
              >
                <span>{link.label}</span>
                {active && <span className="material-symbols-outlined text-body-md">check</span>}
              </Link>
            );
          })}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenContact) onOpenContact();
            }}
            className="w-full mt-2 py-3 bg-primary-container text-on-primary rounded-2xl font-title-lg text-title-lg clay-btn-primary flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">send</span>
            Let's Talk
          </button>
        </div>
      )}
    </header>
  );
}
