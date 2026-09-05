"use client";

import React from "react";
import { motion } from "framer-motion";
import { currentlyLearningItems } from "@/config/skills";
import { TapeSticker } from "../paper/TapeSticker";
import { HandwrittenNote } from "../paper/HandwrittenNote";
import { ArrowRight, Sparkles } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/motion";

export const CurrentlyLearningSection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#141311]/15">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-16">
        <div>
          <span className="font-mono text-xs font-bold text-[#C9382B] uppercase tracking-widest block mb-2">
            07 // CONTINUOUS HORIZON
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0D0C0B]">
            CURRENTLY LEARNING
          </h2>
        </div>

        <HandwrittenNote variant="red" rotation={2} arrow="curved-down">
          <span>“active daily study & experimentation”</span>
        </HandwrittenNote>
      </div>

      {/* Handwritten Notepad Card */}
      <div className="relative bg-[#FAF7F0] border-2 border-[#141311]/25 p-6 sm:p-10 md:p-14 rounded-sm shadow-[0_8px_24px_rgba(30,25,18,0.08)] max-w-5xl mx-auto">
        {/* Washi Tape Pin on Top */}
        <TapeSticker
          variant="cream"
          rotation={-2}
          className="absolute -top-3 left-1/2 -translate-x-1/2"
          width="w-36"
        />

        {/* Notebook Margins & Ruled Lines */}
        <div className="border-l-2 border-[#C9382B]/30 pl-4 sm:pl-8 md:pl-10 space-y-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {currentlyLearningItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative p-4 bg-[#F3EDE1] border border-[#E0D7C2] rounded-sm hover:border-[#C9382B]/50 transition-all"
                data-cursor="LEARN"
              >
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#C9382B]">
                      [0{index + 1}]
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#141311] group-hover:text-[#C9382B] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#C9382B] shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#68635B] leading-relaxed pl-6">
                  {item.note}
                </p>

                {/* Hand-drawn underline on hover */}
                <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#C9382B]/0 group-hover:bg-[#C9382B]/40 transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Marginalia & Hand-drawn annotations around the text */}
        <div className="mt-10 pt-6 border-t border-[#141311]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="font-hand text-xl text-[#C9382B] font-bold rotate-[-1deg]">
            ✎ “The next frontier is building multi-agent systems with physical embodiment.”
          </div>

          <div className="font-mono text-xs text-[#767066] uppercase tracking-wider">
            STATUS: ACTIVE SYLLABUS // 2026
          </div>
        </div>
      </div>
    </section>
  );
};
