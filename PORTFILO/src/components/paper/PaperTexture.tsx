"use client";

import React from "react";

interface PaperTextureProps {
  variant?: "warm" | "dark" | "cream";
  showGrid?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const PaperTexture: React.FC<PaperTextureProps> = ({
  variant = "warm",
  showGrid = true,
  className = "",
  children,
}) => {
  const isDark = variant === "dark";

  return (
    <div
      className={`relative w-full transition-colors duration-500 ${
        isDark ? "bg-[#111112] text-[#EDE8DF]" : "bg-[#F7F4EE] text-[#141311]"
      } ${className}`}
    >
      {/* Layer 1: Fine Graph Paper Grid Overlay */}
      {showGrid && (
        <div
          className={`pointer-events-none absolute inset-0 z-0 ${
            isDark ? "opacity-[0.065]" : "opacity-[0.085]"
          }`}
          style={{
            backgroundImage: isDark
              ? `linear-gradient(to right, #FFFFFF 1px, transparent 1px),
                 linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`
              : `linear-gradient(to right, #242018 1px, transparent 1px),
                 linear-gradient(to bottom, #242018 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      )}

      {/* Layer 2: Major Division Grid Accent Lines */}
      {showGrid && (
        <div
          className={`pointer-events-none absolute inset-0 z-0 ${
            isDark ? "opacity-[0.04]" : "opacity-[0.05]"
          }`}
          style={{
            backgroundImage: isDark
              ? `linear-gradient(to right, #FFFFFF 1px, transparent 1px),
                 linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`
              : `linear-gradient(to right, #242018 1px, transparent 1px),
                 linear-gradient(to bottom, #242018 1px, transparent 1px)`,
            backgroundSize: "140px 140px",
          }}
        />
      )}

      {/* Layer 3: Paper Grain & Micro-Fiber SVG Noise Filter */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.28] mix-blend-overlay z-0"
        aria-hidden="true"
      >
        <filter id={`paper-noise-${variant}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.5   0 0 0 0 0.5   0 0 0 0 0.5  0 0 0 0.5 0"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter={`url(#paper-noise-${variant})`}
        />
      </svg>

      {/* Layer 4: Subtle Vignette / Lighting Imperfections */}
      <div
        className={`pointer-events-none absolute inset-0 z-0 ${
          isDark
            ? "bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)]"
            : "bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.6)_0%,_transparent_65%),_radial-gradient(ellipse_at_bottom_right,_rgba(220,205,185,0.25)_0%,_transparent_70%)]"
        }`}
      />

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
