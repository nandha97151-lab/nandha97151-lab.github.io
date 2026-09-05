"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { AnimatedPortraitCutout } from "./AnimatedPortraitCutout";
import { TapeSticker } from "../paper/TapeSticker";
import { CurrencyHoverName } from "../ui/CurrencyHoverName";

export const HeroTypography: React.FC = () => {

  return (
    <div className="relative w-full max-w-6xl mx-auto text-left select-none pt-8 md:pt-16 pb-12">
      {/* Top Subtle Document Header / Stamp */}
      <div className="flex items-center justify-between border-b border-[#141311]/15 pb-4 mb-10 md:mb-16">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#C9382B]" />
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#504C46] uppercase">
            FOLIO // VOL. 02
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-[#504C46]">
          <span className="hidden sm:inline-block">LOC: {siteConfig.location}</span>
          <span className="px-2 py-0.5 bg-[#EAE2D0] border border-[#DDD4BF] rounded-sm text-[#141311] font-bold">
            2025–2029
          </span>
        </div>
      </div>

      {/* Main Massive Editorial Title: P O R T [FACE] O L I O */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center justify-start flex-wrap gap-x-1 sm:gap-x-2 md:gap-x-3 text-[#0D0C0B] leading-[0.88] tracking-tight font-display font-extrabold text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[10rem]"
      >
        <span>P</span>
        <span>O</span>
        <span>R</span>
        <span>T</span>
        {/* Nandhakumar's face physically replacing the 'F' / 'O' letter */}
        <AnimatedPortraitCutout />
        <span>O</span>
        <span>L</span>
        <span>I</span>
        <span>O</span>
      </motion.div>

      {/* Washi tape detail on hero */}
      <TapeSticker
        variant="cream"
        rotation={-3}
        className="absolute top-16 right-4 hidden md:block"
        width="w-28"
      />

      {/* Below Typography Details: Name, Role, Year in clean editorial composition */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-end border-t border-[#141311]/15 pt-6 sm:pt-8"
      >
        {/* Name */}
        <div className="md:col-span-5">
          <span className="font-mono text-xs text-[#767066] uppercase tracking-widest block mb-1">
            CREATOR & ENGINEER
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#141311]">
            <CurrencyHoverName name={siteConfig.name} />
          </h2>
        </div>

        {/* Role & Field */}
        <div className="md:col-span-4">
          <span className="font-mono text-xs text-[#767066] uppercase tracking-widest block mb-1">
            DISCIPLINE
          </span>
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C9382B] animate-pulse" />
            <h3 className="font-mono text-lg sm:text-xl font-bold tracking-tight text-[#141311]">
              {siteConfig.role}
            </h3>
          </div>
        </div>

        {/* Year */}
        <div className="md:col-span-3 md:text-right">
          <span className="font-mono text-xs text-[#767066] uppercase tracking-widest block mb-1">
            CURRENT YEAR
          </span>
          <span className="font-display text-3xl sm:text-4xl font-black text-[#141311] tracking-tighter">
            {siteConfig.year}
          </span>
        </div>
      </motion.div>
    </div>
  );
};
