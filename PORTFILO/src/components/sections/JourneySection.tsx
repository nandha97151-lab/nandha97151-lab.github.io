"use client";

import React from "react";
import { motion } from "framer-motion";
import { journeyMilestones } from "@/config/journey";
import { HandwrittenNote } from "../paper/HandwrittenNote";
import { staggerContainer, fadeInUp } from "@/lib/motion";

export const JourneySection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 max-w-5xl mx-auto border-t border-[#141311]/15">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-16">
        <div>
          <span className="font-mono text-xs font-bold text-[#C9382B] uppercase tracking-widest block mb-2">
            08 // CHRONICLE & PROGRESSION
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0D0C0B]">
            EXPERIENCE & JOURNEY
          </h2>
        </div>

        <HandwrittenNote variant="pencil" rotation={1}>
          <span>“a steady progression of building”</span>
        </HandwrittenNote>
      </div>

      {/* Simple Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-[#141311]/25 space-y-12 sm:space-y-16">
        {journeyMilestones.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Timeline ink node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FAF7F0] border-3 border-[#141311] group-hover:border-[#C9382B] group-hover:scale-125 transition-all" />

            {/* Year Tag & Period */}
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-[#141311] text-[#FAF7F0] font-mono text-xs sm:text-sm font-bold rounded-sm tracking-wider">
                {item.year}
              </span>
              {item.period && (
                <span className="font-mono text-xs text-[#767066] uppercase tracking-widest">
                  // {item.period}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141311] mb-3 leading-tight">
              {item.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base leading-relaxed text-[#504C46] max-w-3xl mb-4">
              {item.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {item.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 text-xs font-mono text-[#141311] bg-[#ECE5D5] border border-[#DDD4BF] rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Handwritten marginalia annotation */}
            {item.handwrittenAnnotation && (
              <div className="font-hand text-lg sm:text-xl text-[#C9382B] font-bold rotate-[-1deg] mt-2">
                ✍ {item.handwrittenAnnotation}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
