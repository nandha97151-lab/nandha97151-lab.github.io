"use client";

import React from "react";
import { HeroTypography } from "./HeroTypography";
import { ScrollArrow } from "./ScrollArrow";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between px-4 sm:px-6 md:px-12 lg:px-16 pt-6 pb-8">
      {/* Top clean micro-tag */}
      <div className="w-full flex items-center justify-between text-xs font-mono text-[#767066]">
        <span>[01 / COVER]</span>
        <span className="tracking-widest uppercase">AUTONOMOUS SYSTEMS & AI</span>
        <span>INDEX: 001</span>
      </div>

      {/* Main hero typography & portrait cutout */}
      <HeroTypography />

      {/* Scroll-driven hand-drawn arrow & annotations */}
      <ScrollArrow />
    </section>
  );
};
