"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { siteConfig } from "@/config/site";
import { HandwrittenNote } from "../paper/HandwrittenNote";
import { TapeSticker } from "../paper/TapeSticker";

export const IdentitySection: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const moveX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const moveY = useTransform(springY, [-0.5, 0.5], [-12, 12]);
  const rotateTilt = useTransform(springX, [-0.5, 0.5], [-2, 2]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-28 sm:py-36 md:py-44 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#141311]/15 overflow-hidden select-none"
    >
      {/* Section Index Stamp */}
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-xs font-bold text-[#C9382B] uppercase tracking-widest">
          09 // MANIFESTO & PHILOSOPHY
        </span>
        <span className="font-mono text-xs text-[#767066]">
          STATEMENT // N° 2026
        </span>
      </div>

      {/* Main Parallax Typographic Composition */}
      <motion.div
        style={{ x: moveX, y: moveY, rotate: rotateTilt }}
        className="relative text-center max-w-5xl mx-auto py-8 sm:py-12"
      >
        {/* Washi Tape on top corner */}
        <TapeSticker
          variant="cream"
          rotation={-3}
          className="absolute -top-6 left-12 hidden sm:block"
          width="w-32"
        />

        {/* Small top annotation */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#C9382B]" />
          <HandwrittenNote variant="red" rotation={-1.5}>
            <span>“the guiding formula”</span>
          </HandwrittenNote>
          <span className="h-px w-12 bg-[#C9382B]" />
        </div>

        {/* Oversized Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#0D0C0B] leading-[1.05] uppercase">
          {siteConfig.identityStatement.headline}
        </h2>

        {/* Sub-headline */}
        <p className="mt-8 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#2A2724] font-bold italic max-w-3xl mx-auto leading-snug">
          “{siteConfig.identityStatement.subheadline}”
        </p>

        {/* Handwritten note below */}
        <div className="mt-10 flex items-center justify-center">
          <HandwrittenNote variant="pencil" arrow="curved-up" rotation={1.5}>
            <span>{siteConfig.identityStatement.note}</span>
          </HandwrittenNote>
        </div>

        {/* Stamp mark */}
        <div className="absolute -bottom-4 right-8 hidden sm:inline-block px-3 py-1 border-2 border-[#C9382B] text-[#C9382B] font-mono text-xs uppercase font-extrabold rotate-[4deg] rounded-sm">
          VERIFIED // CRAFT
        </div>
      </motion.div>
    </section>
  );
};
