"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollArrow: React.FC = () => {
  // Track scroll progression from top of page
  const { scrollYProgress } = useScroll();

  // Scroll-linked transforms: between scroll 0.02 and 0.22, smoothly draw path and reveal marks
  const pathLength = useTransform(scrollYProgress, [0.01, 0.18], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.01, 0.08], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.06, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.01, 0.15], [0.85, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="relative w-full max-w-4xl mx-auto my-6 sm:my-10 px-4 select-none pointer-events-none"
    >
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Handwritten Scroll Prompt */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="flex items-center gap-3 font-hand text-xl sm:text-2xl text-[#C9382B] font-bold"
        >
          <span className="inline-block rotate-[-4deg]">
            ↓ scroll to explore notebook
          </span>
          <span className="text-xs font-mono px-2 py-0.5 border border-[#C9382B]/30 rounded text-[#C9382B] bg-[#C9382B]/5 uppercase">
            SECTION [02]
          </span>
        </motion.div>

        {/* Center: Scroll-driven Hand-drawn Curved Arrow SVG */}
        <div className="relative w-48 sm:w-64 h-24">
          <svg
            viewBox="0 0 240 90"
            className="w-full h-full overflow-visible"
            fill="none"
          >
            {/* Curved arrow line drawn directly by scroll */}
            <motion.path
              d="M 15 25 C 75 10, 140 15, 185 55 C 200 68, 205 76, 212 82"
              stroke="#C9382B"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength }}
            />

            {/* Arrow Head drawn on scroll completion */}
            <motion.path
              d="M 198 75 L 212 82 L 210 66"
              stroke="#C9382B"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength }}
            />

            {/* Small red cross / registration mark */}
            <motion.g style={{ opacity: textOpacity }}>
              <path
                d="M 120 40 L 128 48 M 128 40 L 120 48"
                stroke="#C9382B"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="124" cy="44" r="7" stroke="#C9382B" strokeWidth="0.8" strokeDasharray="2 2" />
            </motion.g>
          </svg>
        </div>

        {/* Right Side: Red Handwritten Name & Technical Annotation */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="text-right flex flex-col items-end"
        >
          <div className="font-hand text-2xl sm:text-3xl font-bold text-[#C9382B] rotate-[2deg] leading-tight">
            “NANDHAKUMAR N”
          </div>
          <span className="font-mono text-[11px] text-[#504C46] tracking-wider uppercase">
            REF // SYSTEM_ARCH_v2.6
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};
