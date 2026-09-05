"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, Crown, ShoppingBag, Layers } from "lucide-react";
import { Project } from "@/config/projects";
import { TapeSticker } from "../paper/TapeSticker";

interface AurelleShowcaseProps {
  project: Project;
}

export const AurelleShowcase: React.FC<AurelleShowcaseProps> = ({ project }) => {
  const [activeCollection, setActiveCollection] = useState<number>(0);

  const collections = [
    {
      title: "L'Automne Noir",
      category: "Haute Couture 2026",
      edition: "Edition N° 08",
      palette: ["#1F1F24", "#D4AF37", "#EDE8DF"],
      look: "Structured wool overcoat, sculpted bronze accents & Italian silk drape.",
    },
    {
      title: "Lumière Éthérée",
      category: "Pre-Fall Capsule",
      edition: "Edition N° 09",
      palette: ["#2B2A33", "#C5A880", "#F7F5F0"],
      look: "Monochrome architectural tailoring with hand-pleated satin finish.",
    },
  ];

  return (
    <div className="relative w-full bg-[#18181B] border border-[#2D2D32] rounded-sm p-6 sm:p-8 md:p-10 shadow-2xl text-white overflow-hidden">
      {/* Tape accent */}
      <TapeSticker
        variant="dark"
        rotation={2}
        className="absolute -top-3 right-12"
        width="w-28"
      />

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2C2C32] pb-5 mb-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-[#D4AF37] tracking-widest">
            PROJECT // {project.number}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 bg-[#232328] border border-[#373740] rounded text-xs font-mono text-[#D4AF37]">
          <Crown className="w-3.5 h-3.5" />
          <span>HAUTE COUTURE EDITORIAL</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
              {project.title}
            </h3>
            <p className="font-mono text-sm text-[#D4AF37] font-semibold tracking-wide">
              {project.subtitle}
            </p>
          </div>

          <p className="font-sans text-sm sm:text-base leading-relaxed text-[#D4D4D8]">
            {project.description}
          </p>

          {/* Highlights checklist */}
          <div className="space-y-2 pt-2 border-t border-[#2C2C32]">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A1A1AA]">
                <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-mono font-medium text-[#F4F4F5] bg-[#26262B] border border-[#3A3A42] rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Luxury Editorial Digital Showcase */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] bg-[#0E0E10] border border-[#333338] rounded-sm p-5 flex flex-col justify-between overflow-hidden shadow-inner">
            {/* Top Fashion Brand Bar */}
            <div className="flex items-center justify-between border-b border-[#24242A] pb-3">
              <span className="font-serif text-lg tracking-[0.25em] text-[#EDE8DF] uppercase font-bold">
                AURΞLLΞ
              </span>
              <div className="flex gap-2 text-xs font-mono">
                {collections.map((col, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCollection(idx)}
                    className={`px-2 py-0.5 rounded transition-all ${
                      activeCollection === idx
                        ? "bg-[#D4AF37] text-black font-bold"
                        : "text-[#A1A1AA] hover:text-white"
                    }`}
                    data-cursor="LOOK"
                  >
                    LOOK 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Lookbook Showcase Frame */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCollection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="relative my-auto py-2"
              >
                <div className="flex items-baseline justify-between mb-1">
                  <h4 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight">
                    {collections[activeCollection].title}
                  </h4>
                  <span className="font-mono text-xs text-[#D4AF37]">
                    {collections[activeCollection].edition}
                  </span>
                </div>

                <span className="font-mono text-xs text-[#71717A] uppercase tracking-widest block mb-3">
                  {collections[activeCollection].category}
                </span>

                <p className="font-sans text-xs sm:text-sm text-[#D4D4D8] italic leading-relaxed mb-4 border-l-2 border-[#D4AF37] pl-3">
                  “{collections[activeCollection].look}”
                </p>

                {/* Color swatches & metadata */}
                <div className="flex items-center justify-between pt-3 border-t border-[#24242A]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#71717A] uppercase">PALETTE:</span>
                    <div className="flex gap-1.5">
                      {collections[activeCollection].palette.map((color, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 rounded-full border border-white/20"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <span className="font-mono text-xs text-white flex items-center gap-1">
                    RUNWAY READY <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Footer Lookbook Status */}
            <div className="flex items-center justify-between pt-3 border-t border-[#24242A] text-[11px] font-mono text-[#71717A]">
              <span>PARIS / MILAN SHOWCASE</span>
              <span className="text-[#D4AF37]">SS / 2026 ARCHIVE</span>
            </div>
          </div>

          {/* Performance metrics bar */}
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            {project.metrics?.map((m, i) => (
              <div key={i} className="bg-[#1F1F24] border border-[#2F2F37] p-2.5 rounded-sm">
                <div className="text-base sm:text-lg font-mono font-black text-white">
                  {m.value}
                </div>
                <div className="text-[10px] font-mono uppercase text-[#A1A1AA]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
