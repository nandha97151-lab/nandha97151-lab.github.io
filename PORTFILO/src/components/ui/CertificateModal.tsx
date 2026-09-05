"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, CheckCircle2, Calendar, ShieldCheck, Sparkles } from "lucide-react";
import { Certificate } from "@/config/certificates";
import { TapeSticker } from "../paper/TapeSticker";

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F0E0D]/75 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="relative w-full max-w-2xl bg-[#FAF7F0] border border-[#E0D7C5] p-6 sm:p-8 md:p-10 shadow-2xl rounded-sm z-10 text-[#141311] overflow-hidden"
          >
            {/* Subtle graph grid background inside certificate */}
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* Washi tape accents at corners */}
            <TapeSticker
              variant="cream"
              rotation={-4}
              className="absolute -top-3 left-8"
              width="w-24"
            />
            <TapeSticker
              variant="cream"
              rotation={3}
              className="absolute -top-3 right-12"
              width="w-20"
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-[#767066] hover:text-[#141311] transition-colors rounded-full hover:bg-black/5"
              aria-label="Close modal"
              data-cursor="CLOSE"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider bg-[#C9382B]/10 text-[#C9382B] rounded-sm border border-[#C9382B]/20">
                <Sparkles className="w-3.5 h-3.5" />
                {certificate.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-mono text-[#767066]">
                <Calendar className="w-3.5 h-3.5" />
                {certificate.date}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#141311] mb-2 leading-tight">
              {certificate.title}
            </h3>

            {/* Issuer */}
            <p className="font-sans text-sm font-medium text-[#767066] mb-6 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#C9382B]" />
              Conferred by <span className="text-[#141311] font-semibold">{certificate.issuer}</span>
            </p>

            {/* Certificate description */}
            <div className="bg-[#F0ECE1] p-4 rounded border border-[#E4DCB] mb-6">
              <p className="font-sans text-sm sm:text-base leading-relaxed text-[#2A2724]">
                {certificate.description}
              </p>
            </div>

            {/* Skills Gained Breakdown */}
            <div className="mb-6">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#767066] mb-2">
                Demonstrated Competencies & Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {certificate.skillsGained.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-[#DDD5C5] text-xs font-medium rounded text-[#2A2724] shadow-sm"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Official Footer Verification Stamp */}
            <div className="pt-4 border-t border-[#E5DEC9] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#767066]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                <span>Verification ID: {certificate.credentialId || "VERIFIED-RECORD"}</span>
              </div>
              <span className="font-hand text-base text-[#C9382B] font-bold">
                ✓ Validated Credential
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
