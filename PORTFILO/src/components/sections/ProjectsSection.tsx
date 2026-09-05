"use client";

import React from "react";
import { projects } from "@/config/projects";
import { PaperTexture } from "../paper/PaperTexture";
import { TornEdge } from "../paper/TornEdge";
import { ContinuousMarquee } from "../ui/ContinuousMarquee";
import { KuttyLabsShowcase } from "../projects/KuttyLabsShowcase";
import { AirDrawingShowcase } from "../projects/AirDrawingShowcase";
import { TamilBillingShowcase } from "../projects/TamilBillingShowcase";
import { AurelleShowcase } from "../projects/AurelleShowcase";

export const ProjectsSection: React.FC = () => {
  const kuttyLabs = projects.find((p) => p.id === "kutty-labs") || projects[0];
  const airDrawing = projects.find((p) => p.id === "air-drawing-ai") || projects[1];
  const tamilBilling = projects.find((p) => p.id === "tamil-billing-system") || projects[2];
  const aurelle = projects.find((p) => p.id === "aurelle") || projects[3];

  return (
    <div id="projects" className="relative w-full z-20">
      {/* Organic Torn Edge Transition: Warm Paper -> Black Paper */}
      <TornEdge position="top" />

      {/* Black Paper Sheet Content Area */}
      <PaperTexture variant="dark" className="py-16 sm:py-24 md:py-32">
        {/* Continuous Drifting Typography Marquee running in background */}
        <div className="absolute top-28 left-0 right-0 pointer-events-none z-0 overflow-hidden">
          <ContinuousMarquee
            text="AI — DATA — WEB — COMPUTER VISION — AI — DATA — WEB — COMPUTER VISION"
            speed="normal"
            opacity="opacity-[0.06]"
          />
        </div>

        <div className="absolute top-1/2 left-0 right-0 pointer-events-none z-0 overflow-hidden">
          <ContinuousMarquee
            text="BUILD — EXPERIMENT — LEARN — DEPLOY — ITERATE — CREATE"
            speed="slow"
            reverse
            opacity="opacity-[0.04]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          {/* Section Heading */}
          <div className="mb-16 sm:mb-24 text-left border-b border-[#2C2C32] pb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E05638] animate-pulse" />
              <span className="font-mono text-xs font-bold text-[#E05638] uppercase tracking-widest">
                03 // FLAGSHIP ARTIFACTS
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-2">
              SELECTED WORK
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-3">
              <p className="font-mono text-base sm:text-lg md:text-xl font-bold tracking-widest text-[#A1A1AA]">
                BUILD. EXPERIMENT. LEARN.
              </p>
              <span className="font-mono text-xs text-[#71717A] uppercase">
                BLACK SHEET ARCHIVE // VOL. 01–04
              </span>
            </div>
          </div>

          {/* Project Showcases Stack */}
          <div className="space-y-16 sm:space-y-24">
            {/* FEATURED PROJECT 01: KUTTY LABS */}
            <div id="project-01">
              <KuttyLabsShowcase project={kuttyLabs} />
            </div>

            {/* FEATURED PROJECT 02: AIR DRAWING AI */}
            <div id="project-02">
              <AirDrawingShowcase project={airDrawing} />
            </div>

            {/* FEATURED PROJECT 03: TAMIL BILLING SYSTEM */}
            <div id="project-03">
              <TamilBillingShowcase project={tamilBilling} />
            </div>

            {/* FEATURED PROJECT 04: AURELLE */}
            <div id="project-04">
              <AurelleShowcase project={aurelle} />
            </div>
          </div>
        </div>
      </PaperTexture>

      {/* Organic Torn Edge Transition: Black Paper -> Warm Paper */}
      <TornEdge position="bottom" />
    </div>
  );
};
