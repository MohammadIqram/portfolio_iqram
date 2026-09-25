---
name: Tactile Clay Studio
colors:
surface: '#f9f9ff'
surface-dim: '#d5dae9'
surface-bright: '#f9f9ff'
surface-container-lowest: '#ffffff'
surface-container-low: '#f1f3ff'
surface-container: '#e9edfd'
surface-container-high: '#e4e8f7'
surface-container-highest: '#dee2f1'
on-surface: '#171c26'
on-surface-variant: '#58413c'
inverse-surface: '#2b303c'
inverse-on-surface: '#edf0ff'
outline: '#8c716b'
outline-variant: '#dfbfb8'
surface-tint: '#a9371b'
primary: '#a9371b'
on-primary: '#ffffff'
primary-container: '#ff7654'
on-primary-container: '#6d1400'
inverse-primary: '#ffb4a2'
secondary: '#5a46c7'
on-secondary: '#ffffff'
secondary-container: '#7360e2'
on-secondary-container: '#fffbff'
tertiary: '#006b55'
on-tertiary: '#ffffff'
tertiary-container: '#00b491'
on-tertiary-container: '#003e30'
error: '#ba1a1a'
on-error: '#ffffff'
error-container: '#ffdad6'
on-error-container: '#93000a'
primary-fixed: '#ffdad2'
primary-fixed-dim: '#ffb4a2'
on-primary-fixed: '#3c0700'
on-primary-fixed-variant: '#882004'
secondary-fixed: '#e5deff'
secondary-fixed-dim: '#c8bfff'
on-secondary-fixed: '#190064'
on-secondary-fixed-variant: '#442cb1'
tertiary-fixed: '#67fbd2'
tertiary-fixed-dim: '#44deb6'
on-tertiary-fixed: '#002018'
on-tertiary-fixed-variant: '#005140'
background: '#f9f9ff'
on-background: '#171c26'
surface-variant: '#dee2f1'
typography:
display:
fontFamily: Plus Jakarta Sans
fontSize: 56px
fontWeight: '800'
lineHeight: 64px
letterSpacing: -0.03em
display-mobile:
fontFamily: Plus Jakarta Sans
fontSize: 40px
fontWeight: '800'
lineHeight: 48px
letterSpacing: -0.025em
headline-lg:
fontFamily: Plus Jakarta Sans
fontSize: 40px
fontWeight: '700'
lineHeight: 48px
letterSpacing: -0.02em
headline-lg-mobile:
fontFamily: Plus Jakarta Sans
fontSize: 30px
fontWeight: '700'
lineHeight: 38px
letterSpacing: -0.015em
headline-md:
fontFamily: Plus Jakarta Sans
fontSize: 28px
fontWeight: '700'
lineHeight: 36px
letterSpacing: -0.015em
headline-sm:
fontFamily: Plus Jakarta Sans
fontSize: 22px
fontWeight: '600'
lineHeight: 30px
letterSpacing: -0.01em
title-lg:
fontFamily: Plus Jakarta Sans
fontSize: 18px
fontWeight: '600'
lineHeight: 26px
body-lg:
fontFamily: Plus Jakarta Sans
fontSize: 18px
fontWeight: '400'
lineHeight: 28px
body-md:
fontFamily: Plus Jakarta Sans
fontSize: 16px
fontWeight: '400'
lineHeight: 24px
body-sm:
fontFamily: Plus Jakarta Sans
fontSize: 14px
fontWeight: '400'
lineHeight: 20px
label-mono:
fontFamily: JetBrains Mono
fontSize: 13px
fontWeight: '500'
lineHeight: 18px
letterSpacing: 0.02em
label-badge:
fontFamily: Plus Jakarta Sans
fontSize: 12px
fontWeight: '700'
lineHeight: 16px
letterSpacing: 0.04em
rounded:
sm: 0.5rem
DEFAULT: 1rem
md: 1.5rem
lg: 2rem
xl: 3rem
full: 9999px
spacing:
gutter: 1.5rem
gutter-mobile: 1rem
margin: 3rem
margin-mobile: 1.25rem
space-xs: 0.375rem
space-sm: 0.75rem
space-md: 1.25rem
space-lg: 2rem
space-xl: 3.5rem
---

## Brand & Style

This design system blends high-level engineering precision with tactile, warm design craft for an elite hybrid product designer and full-stack engineer portfolio. The design style relies on **Claymorphism**—an inflated, matte, soft-3D visual metaphor that moves beyond the stark flat surfaces of tech portfolios.

- **Brand Personality:** Playful yet deeply competent, sculptural, welcoming, and engineering-grade tactile. It rejects clinical austerity in favor of human warmth and physical curiosity.
- **Target Audience:** Design leaders, founders, engineering VPs, and high-growth venture studios seeking a unicorn capable of bridging world-class design systems with robust production code.
- **Emotional Response:** Inspires touch, playfulness, and immediate delight. Evokes the physical joy of squishy clay models combined with buttery, responsive interactive physics.
- **Visual Tenets:**
- Dual inner highlights combined with diffused, tinted ambient under-shadows to simulate volumetric, matte clay extrusions.
- Plump, oversized radii (`rounded-3xl` through `rounded-[2.5rem]`).
- Spring-loaded interaction feedback (squish on click, buoyant lift on hover).

## Colors

The color palette is built on soothing warm mineral grounds with punchy, candy-matte clay accents. Never use pure black `#000000` or sterile cold gray `#FFFFFF` canvases.

- **Canvas & Backgrounds:**
- Base Canvas: `#F4F3EF` (Warm Porcelain Cream)
- Sunken / Inset Ground: `#EAE7E1` (Muted Sand Clay)
- Surface Neutral: `#FFFFFF` (Pure Clay Base with warm undertones)
- Surface Muted: `#F8F7F4` (Soft Alabaster)
- **Primary & Accent Pigments:**
- **Clay Coral / Peach (`#FF7654`):** Primary action color, focal highlights, primary CTA pills.
- **Clay Lavender / Violet (`#8E7CFF`):** Secondary accent, architecture/system diagrams, creative badges.
- **Clay Mint (`#3DD9B2`):** Tertiary accent, system health, active statuses, code blocks.
- **Butter Yellow (`#FFD15C`):** Warning states, experimental notes, highlighted micro-interactions.
- **Clay Sky Blue (`#4EB5FF`):** Informational callouts, link accents, cloud/infra tokens.
- **Typography & Structural Contrast:**
- Primary Ink: `#1F242F` (Deep Charcoal Ink, high legibility)
- Muted Ink: `#4A5568` (Soft Slate)
- Subtle Ink: `#8A94A6` (Muted Clay Tone)

## Typography

The type system balances organic friendliness with developer rigor.

- **Plus Jakarta Sans** acts as the primary voice across headlines and body copy. Its open counters, geometric curvature, and humanist warmth echo the rounded volumes of clay models while maintaining razor-sharp legibility at body sizes.
- **JetBrains Mono** surfaces in technical metadata, commit tags, stack badges, and code snippets, grounding the soft aesthetic with technical credibility.
- **Rendering Rules:** Always apply anti-aliasing (`-webkit-font-smoothing: antialiased`). Keep headline tracking tight (`-0.02em` to `-0.03em`) to mimic pressed type stamps.

## Layout & Spacing

The layout model emphasizes expansive breathing room to let inflated 3D objects sit without visual clutter.

- **Grid Architecture:** 12-column responsive fluid grid on desktop (`max-w-[1360px]`), 8-column layout on tablet (`768px - 1024px`), and 4-column layout on mobile (`< 768px`).
- **Rhythm & Breathing Space:** Clay volumes require extra negative space around them. If elements sit too close, the multi-layered drop shadows overlap muddying the 3D illusion. Section boundaries must maintain `space-xl` separation.
- **Responsive Adaptations:** On mobile screens, internal card padding steps down from `space-lg` to `space-md` while corner radii maintain high curvature to preserve the tactile personality.

## Elevation & Depth

Claymorphism relies on the pairing of **multi-tier exterior drop shadows** (simulating light diffusion onto the cream canvas) and **inset specular/matte shadows** (simulating light wrapping across the curved volume of a clay extrusion).

### 1. The Clay Recipe (Standard Elevated Surface)
All clay surfaces use a combination of outside and inset shadows:
- **Base Drop Shadow:** `0 16px 32px -8px rgba(31, 36, 47, 0.08), 0 6px 12px -4px rgba(31, 36, 47, 0.04)`
- **Top Inner Highlight (Simulating overhead rim light):** `inset 0 4px 6px rgba(255, 255, 255, 0.75)`
- **Bottom Inner Shadow (Simulating underside mass and roundness):** `inset 0 -6px 8px rgba(31, 36, 47, 0.05)`

### 2. Accent Color Inset Rules
For tinted clay elements (e.g. Clay Coral `#FF7654`), replace the white inner rim with a soft ambient top highlight (`inset 0 3px 4px rgba(255, 255, 255, 0.4)`) and a darkened underside shade (`inset 0 -4px 6px rgba(0, 0, 0, 0.15)`).

### 3. Floating / Hover Dynamics
- **Resting:** Standard Clay elevation.
- **Hover:** Translate Y by `-4px`, expand drop shadow blur to `24px 44px -8px rgba(31, 36, 47, 0.12)`.
- **Active / Pressed (Squish):** Translate Y by `+2px`, scale to `0.98`, invert inset highlight to deep inset shading (`inset 0 4px 8px rgba(0, 0, 0, 0.12)`).

## Shapes

The shape system is hyper-curvilinear, derived from smoothed clay pellets and extruded rounded forms.

- **Primary Roundedness Factor:** Level `3` (Pill-shaped).
- **Cards & Enclosures:** Use `rounded-[2rem]` (32px) or `rounded-[2.5rem]` (40px) to give components an inflated, toy-like tactile container shape.
- **Buttons, Badges, & Chips:** Always full pill shapes (`rounded-full` / `9999px`).
- **Dividers & Strokes:** Never use 1px hard hairline borders. Boundaries are articulated via color stepping and shadow relief or thick 2px tinted borders with `border-white/60`.

## Components

### Buttons
- **Primary Clay Button:** Solid `#FF7654` background, crisp white label, full-pill geometry (`rounded-full`), padding `0.875rem 2rem`. Inset shadow: `inset 0 3px 3px rgba(255, 255, 255, 0.5), inset 0 -3px 4px rgba(0, 0, 0, 0.12)`. Drop shadow: `0 12px 20px -4px rgba(255, 118, 84, 0.4)`. Transitions use spring curves (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
- **Secondary Neutral Button:** Pure `#FFFFFF` background, `#1F242F` label, full pill geometry. Inset highlights top and bottom. Subtle tinted drop shadow: `0 10px 18px -4px rgba(31, 36, 47, 0.06)`.

### Cards & Project Containers
- Constructed on `#FFFFFF` surfaces with `rounded-[2.5rem]` corners and `space-lg` padding.
- Surrounded by the standard multi-layered clay shadow recipe.
- Project thumbnails sit inside the card encased within sunken inset wells (`bg-[#EAE7E1]`, inner shadow: `inset 0 3px 6px rgba(0,0,0,0.06)`).

### Interactive Chips & Tech Badges
- Pill-shaped (`rounded-full`), padding `0.5rem 1rem`.
- Backgrounds use pastel tones (`#8E7CFF` at 15% opacity or `#3DD9B2` at 15% opacity).
- Type uses `label-mono` in `#1F242F`.
- Micro clay effect: `inset 0 1px 2px rgba(255, 255, 255, 0.8), 0 3px 6px rgba(31, 36, 47, 0.04)`.

### Form Fields & Code Playgrounds
- Sunken clay effect (carved into the surface rather than extruded).
- Background: `#EAE7E1` or `#F4F3EF`.
- Shadow: `inset 0 3px 6px rgba(31, 36, 47, 0.08), inset 0 -1px 2px rgba(255, 255, 255, 0.6)`.
- Focus state: Border transitions to 2px solid `#FF7654` with a gentle peach glow.

### Interactive Floating 3D Elements & Toggles
- Switch tracks use sunken pill channels; switch thumbs are perfectly spherical clay marbles with dynamic multi-layer drop shadows that roll across the track when toggled.