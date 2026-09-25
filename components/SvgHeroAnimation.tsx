"use client";

import React from "react";

export default function SvgHeroAnimation() {
  return (
    <div className="w-full max-w-md h-96 mx-auto drop-shadow-2xl flex items-center justify-center">
      <svg
        height="100%"
        viewBox="0 0 500 500"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <filter height="170%" id="clayOuter" width="170%" x="-30%" y="-30%">
            <feDropShadow
              dx="8"
              dy="16"
              floodColor="#B8A89A"
              floodOpacity="0.35"
              stdDeviation="12"
            />
            <feDropShadow
              dx="-6"
              dy="-6"
              floodColor="#FFFFFF"
              floodOpacity="0.8"
              stdDeviation="10"
            />
          </filter>
          <linearGradient id="peachClay" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FFA27E" />
            <stop offset="60%" stopColor="#FF7654" />
            <stop offset="100%" stopColor="#E25533" />
          </linearGradient>
          <linearGradient id="lavenderClay" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#B2A8FF" />
            <stop offset="100%" stopColor="#7D66FF" />
          </linearGradient>
          <linearGradient id="mintClay" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="yellowClay" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>

        {/* Large Peach Blob Base */}
        <g className="float-1" style={{ transformOrigin: "250px 250px" }}>
          <rect
            fill="url(#peachClay)"
            filter="url(#clayOuter)"
            height="240"
            rx="80"
            width="240"
            x="130"
            y="130"
          />
          {/* Specular Highlight for Clay */}
          <ellipse
            cx="190"
            cy="180"
            fill="#FFFFFF"
            opacity="0.45"
            rx="35"
            ry="20"
            transform="rotate(-30 190 180)"
          />
          <ellipse
            cx="230"
            cy="160"
            fill="#FFFFFF"
            opacity="0.3"
            rx="15"
            ry="8"
            transform="rotate(-20 230 160)"
          />
        </g>

        {/* Mint Sphere Floating Bottom Right */}
        <g className="float-2" style={{ transformOrigin: "360px 350px" }}>
          <circle cx="360" cy="340" fill="url(#mintClay)" filter="url(#clayOuter)" r="65" />
          <ellipse
            cx="340"
            cy="315"
            fill="#FFFFFF"
            opacity="0.5"
            rx="20"
            ry="12"
            transform="rotate(-35 340 315)"
          />
        </g>

        {/* Purple Torus / Pill Shape Floating Top Left */}
        <g className="float-3" style={{ transformOrigin: "120px 150px" }}>
          <rect
            fill="url(#lavenderClay)"
            filter="url(#clayOuter)"
            height="80"
            rx="40"
            transform="rotate(-18 120 150)"
            width="110"
            x="70"
            y="110"
          />
          <ellipse
            cx="100"
            cy="135"
            fill="#FFFFFF"
            opacity="0.5"
            rx="20"
            ry="8"
            transform="rotate(-25 100 135)"
          />
        </g>

        {/* Yellow Donut / Bead Floating Top Right */}
        <g className="float-2" style={{ transformOrigin: "380px 130px" }}>
          <circle cx="380" cy="130" fill="url(#yellowClay)" filter="url(#clayOuter)" r="45" />
          <circle cx="380" cy="130" fill="#F4F3EF" opacity="0.9" r="18" />
          <ellipse cx="365" cy="115" fill="#FFFFFF" opacity="0.55" rx="12" ry="6" />
        </g>

        {/* Mini Accent Spheres */}
        <g className="float-1" style={{ transformOrigin: "150px 370px" }}>
          <circle cx="150" cy="370" fill="url(#yellowClay)" filter="url(#clayOuter)" r="30" />
          <ellipse cx="140" cy="360" fill="#FFFFFF" opacity="0.6" rx="8" ry="4" />
        </g>

        {/* Center Floating Code / Design Icon Badge */}
        <g className="pulse-clay" transform="translate(200, 200)">
          <rect
            fill="#FFFFFF"
            filter="url(#clayOuter)"
            height="100"
            rx="30"
            width="100"
            x="0"
            y="0"
          />
          <path
            d="M35 40 L25 50 L35 60"
            fill="none"
            stroke="#FF7654"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
          <path
            d="M65 40 L75 50 L65 60"
            fill="none"
            stroke="#8E7CFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
          <path
            d="M54 36 L46 64"
            fill="none"
            stroke="#3DD9B2"
            strokeLinecap="round"
            strokeWidth="5"
          />
        </g>
      </svg>
    </div>
  );
}
