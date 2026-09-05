"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { HandwrittenNote } from "../paper/HandwrittenNote";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F7F4EE] border-t border-[#141311]/10 py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12 md:mb-16">
          {/* Column 1: Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[#141311] mb-2">
              NANDHAKUMAR N
            </h3>
            <p className="font-mono text-xs text-[#767066] uppercase tracking-widest">
              {siteConfig.role}
            </p>
            <p className="text-xs font-mono text-[#A8A196] mt-3">
              © {currentYear} All rights reserved
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#504C46] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#" },
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#767066] hover:text-[#C9382B] transition-colors font-mono"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#504C46] mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-[#767066] hover:text-[#C9382B] transition-colors font-mono"
                  data-cursor="EMAIL"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#767066] hover:text-[#C9382B] transition-colors font-mono"
                  data-cursor="GITHUB"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#767066] hover:text-[#C9382B] transition-colors font-mono"
                  data-cursor="LINKEDIN"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#141311]/10 pt-8 md:pt-12">
          {/* Handwritten Note */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <HandwrittenNote rotation={-2}>
                <span>Still learning. Still building.</span>
              </HandwrittenNote>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-right"
            >
              <p className="font-hand text-2xl text-[#141311]">
                {siteConfig.contactEditorial.signature}
              </p>
              <p className="font-mono text-xs text-[#767066] uppercase tracking-widest">
                {siteConfig.location}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom micro-info */}
        <div className="mt-8 pt-6 border-t border-[#141311]/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#A8A196] font-mono">
          <span>PORTFOLIO VOL. 01 / 2026</span>
          <span className="text-center">
            Designed & Built by Nandhakumar N with Next.js, React, Framer Motion & Tailwind CSS
          </span>
          <span>🚀 LIVE & RESPONSIVE</span>
        </div>
      </div>
    </footer>
  );
};
