"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedPortraitCutoutProps {
  className?: string;
}

export const AnimatedPortraitCutout: React.FC<AnimatedPortraitCutoutProps> = ({
  className = "",
}) => {
  return (
    <motion.div
      initial={{ scale: 0.92, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`relative inline-block overflow-hidden align-middle select-none mx-1 sm:mx-2 group ${className}`}
      style={{
        width: "clamp(48px, 9vw, 130px)",
        height: "clamp(56px, 10.5vw, 150px)",
        borderRadius: "44% 56% 52% 48% / 46% 48% 52% 54%", // organic stamp cutout curve
      }}
      data-cursor="NANDHA"
    >
      {/* Background paper tone */}
      <div className="absolute inset-0 bg-[#E8DFC9] border-2 border-[#141311]/40" />

      {/* Editorial Halftone / Stylized Silhouette Graphic */}
        <img
          src="/assets/portrait/nandhakumar_close.jpg"
          alt="Nandhakumar"
          className="relative w-full h-full object-cover mix-blend-multiply filter contrast-[1.1] sepia-[0.2]"
        />

      {/* Red technical crosshair overlay */}
      <div className="absolute inset-0 pointer-events-none border border-[#C9382B]/30 m-1 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};
