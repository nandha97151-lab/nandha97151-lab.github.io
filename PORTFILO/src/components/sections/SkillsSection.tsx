"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/config/skills";
import { TapeSticker } from "../paper/TapeSticker";
import { HandwrittenNote } from "../paper/HandwrittenNote";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { Terminal, Cpu, Globe, Wrench, Check } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const categoryIcons = [
    <Terminal key="1" className="w-4 h-4 text-[#C9382B]" />,
    <Cpu key="2" className="w-4 h-4 text-[#C9382B]" />,
    <Globe key="3" className="w-4 h-4 text-[#C9382B]" />,
    <Wrench key="4" className="w-4 h-4 text-[#C9382B]" />,
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-16 border-b border-[#141311]/15 pb-6">
        <div>
          <span className="font-mono text-xs font-bold text-[#C9382B] uppercase tracking-widest block mb-2">
            04 // TECHNICAL APPARATUS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0D0C0B]">
            THINGS I BUILD WITH
          </h2>
        </div>

        <HandwrittenNote variant="red" rotation={2} arrow="left">
          <span>“field-tested across academic & real-world builds”</span>
        </HandwrittenNote>
      </div>

      {/* Experimental Technical Notebook Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
      >
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="relative bg-[#FAF7F0] border-2 border-[#141311]/20 p-6 sm:p-8 shadow-[0_4px_16px_rgba(30,25,18,0.06)] rounded-sm"
          >
            {/* Washi Tape on Top */}
            <TapeSticker
              variant={idx % 2 === 0 ? "cream" : "dark"}
              rotation={idx % 2 === 0 ? -2 : 3}
              className="absolute -top-3 left-8"
              width="w-24"
            />

            {/* Category Header */}
            <div className="flex items-center justify-between border-b border-[#141311]/15 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                {categoryIcons[idx]}
                <h3 className="font-mono text-lg sm:text-xl font-black text-[#141311] tracking-wider uppercase">
                  {cat.title}
                </h3>
              </div>
              <span className="font-mono text-xs text-[#767066]">
                [0{idx + 1}]
              </span>
            </div>

            <p className="font-sans text-xs text-[#767066] italic mb-6">
              {cat.subtitle}
            </p>

            {/* Handwritten-Style Skills List */}
            <div className="space-y-3">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center justify-between p-2.5 bg-[#F2EDE1] border border-[#E2DAC7] rounded-sm hover:border-[#141311]/40 transition-colors group"
                  data-cursor="SPEC"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9382B] group-hover:scale-150 transition-transform" />
                    <span className="font-mono text-sm sm:text-base font-bold text-[#141311]">
                      {skill.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {skill.tag && (
                      <span className="font-mono text-[10px] sm:text-xs text-[#504C46] px-2 py-0.5 bg-white/70 border border-[#D5CCA8] rounded">
                        {skill.tag}
                      </span>
                    )}
                    {skill.level && (
                      <span className="hidden sm:inline-block font-hand text-sm font-bold text-[#C9382B]">
                        {skill.level}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pencil Grid Marker */}
            <div className="mt-6 pt-3 border-t border-[#141311]/10 flex items-center justify-between text-[11px] font-mono text-[#767066]">
              <span>VERIFIED STACK // 2026</span>
              <span className="text-[#C9382B] font-bold">● ACTIVE</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
