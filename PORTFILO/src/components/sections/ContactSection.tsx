"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { TapeSticker } from "../paper/TapeSticker";
import { HandwrittenNote } from "../paper/HandwrittenNote";
import { ContinuousMarquee } from "../ui/ContinuousMarquee";
import { TornEdge } from "../paper/TornEdge";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative pt-20 sm:pt-28 pb-0 border-t border-[#141311]/15 overflow-hidden">
      {/* Background drifting typography for NANDHAKUMAR N */}
      <div className="absolute top-12 left-0 right-0 pointer-events-none z-0 overflow-hidden opacity-[0.045]">
        <ContinuousMarquee
          text="NANDHAKUMAR N — NANDHAKUMAR N — NANDHAKUMAR N"
          speed="slow"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pb-20 sm:pb-28">
        {/* Top Header Tag */}
        <div className="flex items-center justify-between mb-8 border-b border-[#141311]/15 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C9382B]" />
            <span className="font-mono text-xs font-bold text-[#C9382B] uppercase tracking-widest">
              10 // FINAL DISPATCH & REACH
            </span>
          </div>
          <span className="font-mono text-xs text-[#767066]">
            STATUS: {siteConfig.contactEditorial.availability}
          </span>
        </div>

        {/* Large Interactive Heading */}
        <div className="relative my-8 sm:my-14 text-center sm:text-left">
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-block"
            data-cursor="CONNECT"
          >
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-[#0D0C0B] group-hover:text-[#C9382B] transition-colors leading-[0.9]">
              LET&apos;S CONNECT
            </h2>
            <div className="h-1 sm:h-2 bg-[#C9382B] w-0 group-hover:w-full transition-all duration-500 ease-out mt-2" />
          </a>

          <p className="mt-6 font-serif text-xl sm:text-2xl text-[#504C46] max-w-2xl leading-relaxed">
            {siteConfig.contactEditorial.subheading}
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 my-12 sm:my-16">
          {/* Email Card with Copy Action */}
          <div className="relative bg-[#FAF7F0] border-2 border-[#141311]/25 p-6 rounded-sm shadow-[0_4px_14px_rgba(30,25,18,0.06)] flex flex-col justify-between group">
            <TapeSticker variant="cream" rotation={-2} className="absolute -top-3 left-4" width="w-20" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 bg-[#F0ECE1] rounded-sm text-[#C9382B]">
                  <Mail className="w-5 h-5" />
                </span>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1 text-xs font-mono text-[#767066] hover:text-[#141311] px-2 py-1 bg-[#F0ECE1] rounded hover:bg-[#E4DFC8] transition-colors"
                  data-cursor="COPY"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </>
                  )}
                </button>
              </div>

              <span className="font-mono text-xs text-[#767066] uppercase tracking-wider block mb-1">
                DIRECT INBOX
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-mono text-base sm:text-lg font-bold text-[#141311] group-hover:text-[#C9382B] transition-colors break-all"
                data-cursor="EMAIL"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="mt-6 pt-3 border-t border-[#141311]/10 flex items-center justify-between text-xs font-mono text-[#767066]">
              <span>RESPONSE TIME</span>
              <span className="text-emerald-700 font-bold">&lt; 24 HOURS</span>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-[#FAF7F0] border-2 border-[#141311]/25 p-6 rounded-sm shadow-[0_4px_14px_rgba(30,25,18,0.06)] flex flex-col justify-between group hover:border-[#2563EB] transition-colors"
            data-cursor="LINKEDIN"
          >
            <TapeSticker variant="dark" rotation={3} className="absolute -top-3 right-4" width="w-20" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 bg-[#F0ECE1] rounded-sm text-[#2563EB]">
                  <Linkedin className="w-5 h-5" />
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#767066] group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <span className="font-mono text-xs text-[#767066] uppercase tracking-wider block mb-1">
                PROFESSIONAL NETWORK
              </span>
              <span className="font-display text-lg sm:text-xl font-bold text-[#141311] group-hover:text-[#2563EB] transition-colors">
                linkedin.com/in/nandhakumar1234
              </span>
            </div>

            <div className="mt-6 pt-3 border-t border-[#141311]/10 flex items-center justify-between text-xs font-mono text-[#767066]">
              <span>NETWORK</span>
              <span className="text-[#2563EB] font-bold">CONNECT ↗</span>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-[#FAF7F0] border-2 border-[#141311]/25 p-6 rounded-sm shadow-[0_4px_14px_rgba(30,25,18,0.06)] flex flex-col justify-between group hover:border-[#141311] transition-colors"
            data-cursor="GITHUB"
          >
            <TapeSticker variant="cream" rotation={-1} className="absolute -top-3 left-1/2 -translate-x-1/2" width="w-20" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 bg-[#F0ECE1] rounded-sm text-[#141311]">
                  <Github className="w-5 h-5" />
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#767066] group-hover:text-[#141311] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <span className="font-mono text-xs text-[#767066] uppercase tracking-wider block mb-1">
                SOURCE CODE REPOSITORIES
              </span>
              <span className="font-display text-lg sm:text-xl font-bold text-[#141311]">
                github.com/nandha97151-lab
              </span>
            </div>

            <div className="mt-6 pt-3 border-t border-[#141311]/10 flex items-center justify-between text-xs font-mono text-[#767066]">
              <span>CODEBASE</span>
              <span className="text-[#141311] font-bold">EXPLORE REPOS ↗</span>
            </div>
          </a>
        </div>

        {/* Handwritten Signature Section */}
        <div className="pt-8 border-t border-[#141311]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-[#767066] uppercase tracking-widest block mb-1">
              AUTHORIZED DIGITAL SIGNATURE
            </span>
            <div className="relative inline-block">
              {/* Stylized SVG Handwritten Signature for Nandhakumar N */}
              <svg
                viewBox="0 0 280 70"
                className="w-56 sm:w-72 h-16 text-[#C9382B]"
                fill="none"
              >
                <path
                  d="M 12 52 C 24 15, 30 10, 36 48 C 42 54, 48 30, 56 36 C 64 42, 70 34, 76 44 C 84 54, 90 28, 98 42 C 104 50, 110 32, 118 40 C 126 48, 134 30, 142 46 C 150 56, 160 22, 172 44 C 182 58, 192 34, 204 42 C 218 52, 235 20, 245 48 M 255 42 L 268 28 L 272 46"
                  stroke="#C9382B"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Signature Underline Flourish */}
                <path
                  d="M 18 58 Q 130 68, 268 56"
                  stroke="#C9382B"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="text-center sm:text-right font-mono text-xs text-[#767066]">
            <div>DESIGNED & ENGINEERED // 2026</div>
            <div className="text-[#141311] font-bold">NANDHAKUMAR N — AI & DATA SCIENCE</div>
          </div>
        </div>
      </div>

      {/* End Paper Tear Animation / Reveal Effect revealing a clean blank canvas below */}
      <div className="relative w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-10 sm:h-14 block"
          preserveAspectRatio="none"
        >
          {/* Jagged tear line revealing clean base */}
          <path
            d="M0,0 L1440,0 L1440,32 Q1360,46 1280,30 T1120,44 Q960,20 800,38 T480,24 Q320,44 160,28 T0,36 Z"
            fill="#F7F4EE"
          />
          <path
            d="M0,36 Q160,28 320,44 T480,24 Q800,38 960,20 T1120,44 Q1280,30 1360,46 T1440,32"
            fill="none"
            stroke="rgba(20, 19, 17, 0.25)"
            strokeWidth="2"
          />
        </svg>
        <div className="w-full h-12 bg-[#FAF7F0] border-t border-[#E8E1CE] flex items-center justify-center text-[11px] font-mono text-[#A8A196]">
          [END OF FOLIO // VOL. 02 — ALL RIGHTS RESERVED]
        </div>
      </div>
    </section>
  );
};
