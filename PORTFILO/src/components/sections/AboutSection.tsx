"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { directPaperSkills } from "@/config/skills";
import { TapeSticker } from "../paper/TapeSticker";
import { HandwrittenNote } from "../paper/HandwrittenNote";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export const AboutSection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#141311]/15">
      {/* Section Header with Editorial Index Stamp */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-12 sm:mb-16">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-[#C9382B] uppercase tracking-widest">
              02 // ESSAY & INTRODUCTION
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0D0C0B]">
            HELLO, I&apos;M NANDHAKUMAR
          </h2>
        </div>

        <HandwrittenNote variant="pencil" rotation={-2} className="self-start sm:self-auto">
          <span>“builder, researcher & engineer”</span>
        </HandwrittenNote>
      </div>

      {/* 3-Column Editorial Grid Layout */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start"
      >
        {/* LEFT COLUMN: Editorial Bio & Focus Areas */}
        <motion.div variants={fadeInUp} className="lg:col-span-6 flex flex-col gap-6">
          <div className="border-b border-[#141311]/15 pb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#767066] block mb-2">
              DISPATCH & BACKGROUND
            </span>
            <p className="font-serif text-lg sm:text-xl md:text-2xl leading-relaxed text-[#141311] font-semibold">
              I&apos;m <span className="underline decoration-[#C9382B] decoration-2 underline-offset-4">Nandhakumar N</span>, a B.Tech Artificial Intelligence and Data Science student passionate about building intelligent systems, creative digital experiences, and practical technology solutions.
            </p>
          </div>

          <div className="font-sans text-sm sm:text-base leading-relaxed text-[#2A2724] space-y-4">
            {siteConfig.aboutEditorial.map((paragraph, idx) => (
              <p key={idx} className="relative pl-3 border-l-2 border-[#141311]/20">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Interests & Domains directly on the paper */}
          <div className="pt-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#504C46] block mb-3">
              ACTIVE EXPLORATION DOMAINS
            </span>
            <div className="flex flex-wrap gap-2">
              {siteConfig.domains.map((domain, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-mono font-medium text-[#141311] bg-[#ECE4D0] border border-[#DCD3BE] rounded-sm hover:bg-[#E0D5BC] transition-colors"
                >
                  #{domain.toLowerCase().replace(/\s+/g, "-")}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Skills directly printed onto the paper (No generic cards) */}
        <motion.div variants={fadeInUp} className="lg:col-span-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-[#767066]">
              CORE TOOLKIT // DIRECT PRINT
            </span>
            <span className="font-mono text-xs text-[#C9382B] font-bold">[12 TOOLS]</span>
          </div>

          {/* Grid of skills living directly on paper */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4">
            {directPaperSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group relative p-3 border-b border-r border-[#141311]/15 hover:border-[#141311]/40 bg-transparent transition-all"
                data-cursor="SKILL"
              >
                {/* Stamp-like corner marker */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#141311]/30 group-hover:border-[#C9382B]" />

                <div className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 rounded-sm flex items-center justify-center font-mono text-xs font-bold text-white shadow-xs group-hover:rotate-6 transition-transform"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.symbol}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-[#141311] group-hover:text-[#C9382B] transition-colors">
                      {skill.name}
                    </h4>
                    <span className="font-mono text-[10px] text-[#767066] uppercase">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hand-drawn note at the bottom of the column */}
          <div className="mt-8 pt-4 border-t border-[#141311]/15 text-center">
            <HandwrittenNote variant="red" arrow="curved-down" rotation={-1}>
              <span>“every tool chosen for speed, precision & impact”</span>
            </HandwrittenNote>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
