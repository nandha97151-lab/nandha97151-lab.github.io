"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, CheckCircle2 } from "lucide-react";
import { TapeSticker } from "../paper/TapeSticker";
import { HandwrittenNote } from "../paper/HandwrittenNote";
import { fadeInUp } from "@/lib/motion";

export const EducationSection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#141311]/15">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-16">
        <div>
          <span className="font-mono text-xs font-bold text-[#C9382B] uppercase tracking-widest block mb-2">
            05 // ACADEMIC FOUNDATIONS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0D0C0B]">
            THE LEARNING YEARS
          </h2>
        </div>

        <HandwrittenNote variant="pencil" rotation={-1.5}>
          <span>“rigorous theory paired with relentless building”</span>
        </HandwrittenNote>
      </div>

      {/* Pencil / Ink Timeline across the paper */}
      <div className="relative">
        {/* Continuous Ink Line with hand-drawn subtle wobble */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#141311]/25 -translate-y-1/2 pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
          {/* Milestone 1: College Degree */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative bg-[#FAF7F0] border-2 border-[#141311]/20 p-6 sm:p-8 rounded-sm shadow-[0_4px_14px_rgba(30,25,18,0.06)]"
          >
            {/* Washi tape */}
            <TapeSticker
              variant="cream"
              rotation={-3}
              className="absolute -top-3 left-6"
              width="w-28"
            />

            <div className="flex items-center justify-between border-b border-[#141311]/15 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#C9382B]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C9382B]">
                  UNDERGRADUATE DEGREE
                </span>
              </div>
              <span className="px-3 py-1 bg-[#141311] text-[#FAF7F0] font-mono text-xs font-bold rounded-sm">
                2025 — 2029
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141311] mb-2 leading-tight">
              B.Tech — Artificial Intelligence & Data Science
            </h3>

            <p className="font-sans text-base font-semibold text-[#504C46] mb-4">
              KPR Institute of Engineering and Technology
            </p>

            <p className="font-sans text-sm text-[#767066] leading-relaxed mb-6">
              Comprehensive curriculum covering Machine Learning, Deep Neural Networks, Mathematical Modeling, Discrete Mathematics, Data Structures, Computer Vision, and Embedded Systems Prototyping.
            </p>

            <div className="pt-4 border-t border-[#141311]/10 flex flex-wrap items-center gap-3 text-xs font-mono text-[#504C46]">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> AI Student Chapter
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Robotics & Innovation Lab
              </span>
            </div>
          </motion.div>

          {/* Milestone 2: Higher Secondary */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative bg-[#FAF7F0] border-2 border-[#141311]/20 p-6 sm:p-8 rounded-sm shadow-[0_4px_14px_rgba(30,25,18,0.06)]"
          >
            {/* Washi tape */}
            <TapeSticker
              variant="dark"
              rotation={2.5}
              className="absolute -top-3 right-6"
              width="w-24"
            />

            <div className="flex items-center justify-between border-b border-[#141311]/15 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#24587D]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#24587D]">
                  HIGHER SECONDARY CERTIFICATE
                </span>
              </div>
              <span className="px-3 py-1 bg-[#24587D] text-[#FAF7F0] font-mono text-xs font-bold rounded-sm">
                2025
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141311] mb-2 leading-tight">
              HSC — Science & Mathematics
            </h3>

            <p className="font-sans text-base font-semibold text-[#504C46] mb-4">
              Little Angel Higher Secondary School
            </p>

            <p className="font-sans text-sm text-[#767066] leading-relaxed mb-6">
              Strong mathematical and scientific foundation with focus on advanced calculus, physics mechanics, computational principles, and algorithmic problem-solving.
            </p>

            <div className="pt-4 border-t border-[#141311]/10 flex flex-wrap items-center gap-3 text-xs font-mono text-[#504C46]">
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#E59838]" /> Academic Distinction
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#E59838]" /> Science Club Lead
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
