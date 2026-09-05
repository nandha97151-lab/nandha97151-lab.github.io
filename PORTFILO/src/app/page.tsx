"use client";

import React from "react";
import { PaperTexture } from "@/components/paper/PaperTexture";
import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { CurrentlyLearningSection } from "@/components/sections/CurrentlyLearningSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { IdentitySection } from "@/components/sections/IdentitySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Continuous Physical Warm Paper Base */}
      <PaperTexture variant="warm">
        {/* 01 — COVER / HERO */}
        <section id="home" data-section="home">
          <Hero />
        </section>

        {/* 02 — ABOUT / HELLO */}
        <AboutSection />

        {/* 03 — PROJECTS / SELECTED WORK (Torn Black Sheet Section) */}
        <ProjectsSection />

        {/* 04 — SKILLS / EXPERIMENTS (Warm Paper Return) */}
        <SkillsSection />

        {/* 05 — EDUCATION */}
        <EducationSection />

        {/* 06 — CERTIFICATIONS & ACHIEVEMENTS */}
        <CertificationsSection />

        {/* 07 — CURRENTLY LEARNING */}
        <CurrentlyLearningSection />

        {/* 08 — EXPERIENCE / JOURNEY */}
        <JourneySection />

        {/* 09 — PERSONAL IDENTITY */}
        <IdentitySection />

        {/* 10 — CONTACT / LET'S CONNECT */}
        <ContactSection />
      </PaperTexture>

      {/* Footer */}
      <Footer />
    </main>
  );
}
