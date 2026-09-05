"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { certificates, Certificate } from "@/config/certificates";
import { TapeSticker } from "../paper/TapeSticker";
import { HandwrittenNote } from "../paper/HandwrittenNote";
import { CertificateModal } from "../ui/CertificateModal";
import { Award, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/motion";

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#141311]/15">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-16">
        <div>
          <span className="font-mono text-xs font-bold text-[#C9382B] uppercase tracking-widest block mb-2">
            06 // SCRAPBOOK & HONORS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0D0C0B]">
            CERTIFICATIONS & ACHIEVEMENTS
          </h2>
        </div>

        <HandwrittenNote variant="red" rotation={-2} arrow="left">
          <span>“click any sheet for official credentials”</span>
        </HandwrittenNote>
      </div>

      {/* Scrapbook Grid with Deterministic Rotations */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 items-stretch"
      >
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            variants={fadeInUp}
            onClick={() => setSelectedCert(cert)}
            style={{ transform: `rotate(${cert.rotation}deg)` }}
            whileHover={{
              rotate: 0,
              y: -10,
              scale: 1.03,
              boxShadow: "0 22px 38px rgba(25,20,15,0.18), 0 8px 14px rgba(25,20,15,0.1)",
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="group relative bg-[#FAF7F0] border-2 border-[#141311]/25 p-5 sm:p-6 rounded-sm shadow-[0_4px_14px_rgba(25,20,15,0.08)] cursor-pointer select-none transition-transform flex flex-col justify-between"
            data-cursor="INSPECT"
          >
            {/* Washi Tape / Paper Clip Decoration based on cert configuration */}
            {cert.tapePosition === "top-left" && (
              <TapeSticker
                variant="cream"
                rotation={-5}
                className="absolute -top-3 left-4"
                width="w-20"
              />
            )}
            {cert.tapePosition === "top-right" && (
              <TapeSticker
                variant="dark"
                rotation={4}
                className="absolute -top-3 right-4"
                width="w-20"
              />
            )}
            {cert.tapePosition === "center" && (
              <TapeSticker
                variant="cream"
                rotation={0}
                className="absolute -top-3 left-1/2 -translate-x-1/2"
                width="w-24"
              />
            )}
            {cert.tapePosition === "both" && (
              <>
                <TapeSticker
                  variant="cream"
                  rotation={-4}
                  className="absolute -top-3 left-2"
                  width="w-16"
                />
                <TapeSticker
                  variant="dark"
                  rotation={5}
                  className="absolute -top-3 right-2"
                  width="w-16"
                />
              </>
            )}

            {/* Subtle graph grid background */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />

            <div>
              {/* Header Badge & Date */}
              <div className="flex items-center justify-between gap-2 border-b border-[#141311]/15 pb-3 mb-3">
                <span
                  className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-sm text-white"
                  style={{ backgroundColor: cert.colorTheme }}
                >
                  {cert.badge}
                </span>
                <span className="font-mono text-xs font-semibold text-[#767066]">
                  {cert.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#141311] group-hover:text-[#C9382B] transition-colors leading-tight mb-2">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="font-sans text-xs font-semibold text-[#504C46] mb-3 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#C9382B] shrink-0" />
                <span>{cert.issuer}</span>
              </p>

              {/* Short summary */}
              <p className="font-sans text-xs text-[#767066] leading-relaxed line-clamp-3 mb-4">
                {cert.description}
              </p>
            </div>

            {/* Footer Prompt */}
            <div className="pt-3 border-t border-[#141311]/10 flex items-center justify-between text-xs font-mono text-[#504C46]">
              <span className="flex items-center gap-1 text-[11px] text-emerald-700">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified
              </span>
              <span className="font-bold flex items-center gap-0.5 text-[#141311] group-hover:text-[#C9382B] group-hover:translate-x-0.5 transition-all">
                PREVIEW <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for full credential preview */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
