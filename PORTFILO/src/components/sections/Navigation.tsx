"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
  id: string;
}

const navLinks: NavLink[] = [
  { label: "HOME", href: "#home", id: "home" },
  { label: "ABOUT", href: "#about", id: "about" },
  { label: "SKILLS", href: "#skills", id: "skills" },
  { label: "PROJECTS", href: "#projects", id: "projects" },
  { label: "CONTACT", href: "#contact", id: "contact" },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => ({
        id: link.id,
        element: document.querySelector(`[data-section="${link.id}"]`)
      }));

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 right-6 z-[1000] md:z-50">
      {/* Desktop Navigation - Floating Label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="hidden md:flex items-center gap-1 px-4 py-2.5 bg-[#F7F4EE] border border-[#141311]/20 rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.08)] backdrop-blur-sm"
      >
        <div className="w-2 h-2 rounded-full bg-[#C9382B] animate-pulse" />
        <span className="text-xs font-mono font-semibold text-[#504C46] tracking-widest uppercase">
          NAVIGATE
        </span>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-3 bg-[#F7F4EE] border border-[#141311]/20 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-5 h-5 relative">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="absolute left-1 top-1.5 w-3 h-0.5 bg-[#141311]"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute left-1 top-2.5 w-3 h-0.5 bg-[#141311]"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="absolute left-1 top-3.5 w-3 h-0.5 bg-[#141311]"
          />
        </div>
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-0 bg-[#F7F4EE] border border-[#141311]/20 rounded-lg shadow-[0_12px_32px_rgba(0,0,0,0.12)] overflow-hidden min-w-[160px]"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleNavClick(link.href)}
                className={`w-full px-4 py-3 text-left text-sm font-mono font-semibold transition-colors ${
                  activeSection === link.id
                    ? "bg-[#C9382B]/10 text-[#C9382B]"
                    : "text-[#141311] hover:bg-[#141311]/5"
                }`}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Menu Items - Hidden initially, visible on desktop */}
      <div className="hidden lg:flex items-center gap-4 absolute top-full right-0 mt-4 bg-[#F7F4EE] border border-[#141311]/20 rounded-lg px-3 py-2 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
        {navLinks.map((link) => (
          <motion.a
            key={link.id}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
            className={`text-xs font-mono font-semibold transition-colors cursor-pointer ${
              activeSection === link.id
                ? "text-[#C9382B]"
                : "text-[#504C46] hover:text-[#141311]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};
