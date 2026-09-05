"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Radio,
  Cpu,
  Eye,
  Zap,
  Navigation,
  Compass,
  Layers,
  Sparkles,
} from "lucide-react";
import { Project } from "@/config/projects";
import { TapeSticker } from "../paper/TapeSticker";

interface KuttyLabsShowcaseProps {
  project: Project;
}

export const KuttyLabsShowcase: React.FC<KuttyLabsShowcaseProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<"radar" | "hardware" | "map">("radar");

  return (
    <div className="relative w-full bg-[#18181B] border border-[#2D2D32] rounded-sm p-6 sm:p-8 md:p-10 shadow-2xl text-white overflow-hidden">
      {/* Dark washi tape on the dark paper */}
      <TapeSticker
        variant="dark"
        rotation={-2}
        className="absolute -top-3 left-10"
        width="w-28"
      />

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2C2C32] pb-5 mb-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-[#E05638] tracking-widest">
            PROJECT // {project.number}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E05638]" />
          <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 bg-[#222226] p-1 rounded border border-[#33333A] text-xs font-mono">
          <button
            onClick={() => setActiveTab("radar")}
            className={`px-3 py-1 rounded transition-all ${
              activeTab === "radar"
                ? "bg-[#E05638] text-white font-bold"
                : "text-[#A1A1AA] hover:text-white"
            }`}
            data-cursor="VIEW"
          >
            LiDAR SLAM
          </button>
          <button
            onClick={() => setActiveTab("map")}
            className={`px-3 py-1 rounded transition-all ${
              activeTab === "map"
                ? "bg-[#E05638] text-white font-bold"
                : "text-[#A1A1AA] hover:text-white"
            }`}
            data-cursor="VIEW"
          >
            CAMPUS MAP
          </button>
          <button
            onClick={() => setActiveTab("hardware")}
            className={`px-3 py-1 rounded transition-all ${
              activeTab === "hardware"
                ? "bg-[#E05638] text-white font-bold"
                : "text-[#A1A1AA] hover:text-white"
            }`}
            data-cursor="VIEW"
          >
            ARCHITECTURE
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
              {project.title}
            </h3>
            <p className="font-mono text-sm text-[#E05638] font-semibold tracking-wide">
              {project.subtitle}
            </p>
          </div>

          <p className="font-sans text-sm sm:text-base leading-relaxed text-[#D4D4D8]">
            {project.description}
          </p>

          {/* Highlights checklist */}
          <div className="space-y-2 pt-2 border-t border-[#2C2C32]">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A1A1AA]">
                <Sparkles className="w-4 h-4 text-[#E05638] shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-mono font-medium text-[#F4F4F5] bg-[#26262B] border border-[#3A3A42] rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Visual Simulator / Cutout Frame */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] bg-[#0E0E10] border border-[#333338] rounded p-4 overflow-hidden flex flex-col justify-between shadow-inner">
            {/* Background grid lines */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #E05638 1px, transparent 1px), linear-gradient(to bottom, #E05638 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* TAB 1: LiDAR & SLAM Radar Simulation */}
            {activeTab === "radar" && (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                {/* Radar sweep animation */}
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-[#E05638]/40 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-[#E05638]/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-[#E05638]/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#E05638] animate-ping" />
                    </div>
                  </div>

                  {/* Sweep Line */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    className="absolute inset-0 origin-center pointer-events-none"
                  >
                    <div className="w-1/2 h-full border-r border-[#E05638] bg-gradient-to-r from-transparent via-[#E05638]/10 to-[#E05638]/30" />
                  </motion.div>

                  {/* Simulated obstacles & waypoint points */}
                  <div className="absolute top-10 right-14 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <div className="absolute bottom-12 left-10 w-2 h-2 rounded-full bg-amber-400" />
                  <div className="absolute top-1/2 right-6 w-2.5 h-2.5 rounded-full bg-rose-400" />
                </div>

                {/* Radar HUD labels */}
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#A1A1AA]">
                  <span className="flex items-center gap-1 text-[#E05638]">
                    <Radio className="w-3 h-3 animate-pulse" /> 2D LiDAR Active
                  </span>
                  <span>RANGE: 12.0m</span>
                  <span>BEARING: 042° NE</span>
                </div>
              </div>
            )}

            {/* TAB 2: Campus Map & Navigation Waypoints */}
            {activeTab === "map" && (
              <div className="relative w-full h-full flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA] border-b border-[#2C2C32] pb-2">
                  <span className="flex items-center gap-1.5 text-white">
                    <Navigation className="w-3.5 h-3.5 text-[#E05638]" /> KPRIET Campus Grid
                  </span>
                  <span className="text-emerald-400">WAYPOINT: ACADEMIC BLOCK A</span>
                </div>

                {/* Vector Map Path */}
                <svg viewBox="0 0 300 160" className="w-full h-32 my-auto" fill="none">
                  {/* Campus building blocks */}
                  <rect x="20" y="20" width="60" height="40" fill="#202025" stroke="#383842" />
                  <text x="32" y="44" fill="#71717A" fontSize="8" fontFamily="monospace">BLOCK A</text>

                  <rect x="210" y="20" width="70" height="40" fill="#202025" stroke="#383842" />
                  <text x="222" y="44" fill="#71717A" fontSize="8" fontFamily="monospace">LIBRARY</text>

                  <rect x="110" y="100" width="80" height="45" fill="#202025" stroke="#383842" />
                  <text x="122" y="125" fill="#71717A" fontSize="8" fontFamily="monospace">INNOVATION</text>

                  {/* Planned autonomous path */}
                  <motion.path
                    d="M 50 60 L 50 90 L 150 90 L 150 100"
                    stroke="#E05638"
                    strokeWidth="2.5"
                    strokeDasharray="4 3"
                    strokeLinecap="round"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  />

                  {/* Robot current marker */}
                  <circle cx="50" cy="75" r="5" fill="#E05638" stroke="#FFF" strokeWidth="1.5" />
                </svg>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#A1A1AA]">
                  <span>ETA: 02m 14s</span>
                  <span>SPEED: 1.2 m/s</span>
                  <span className="text-emerald-400">PATH: CLEAR</span>
                </div>
              </div>
            )}

            {/* TAB 3: Embedded Hardware & Sensor Architecture */}
            {activeTab === "hardware" && (
              <div className="relative w-full h-full flex flex-col justify-between py-1">
                <div className="text-xs font-mono text-[#A1A1AA] border-b border-[#2C2C32] pb-1 flex items-center justify-between">
                  <span>EDGE SYSTEM ARCHITECTURE</span>
                  <span className="text-[#E05638]">DUAL MCU/MPU</span>
                </div>

                <div className="grid grid-cols-2 gap-2 my-auto">
                  <div className="bg-[#1C1C20] border border-[#2E2E36] p-2.5 rounded">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white mb-1">
                      <Cpu className="w-3.5 h-3.5 text-[#E05638]" /> Raspberry Pi 4
                    </div>
                    <p className="text-[11px] text-[#A1A1AA]">
                      Vision processing, ROS nodes, path planning & WiFi telemetry.
                    </p>
                  </div>

                  <div className="bg-[#1C1C20] border border-[#2E2E36] p-2.5 rounded">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white mb-1">
                      <Zap className="w-3.5 h-3.5 text-amber-400" /> ESP32 MCU
                    </div>
                    <p className="text-[11px] text-[#A1A1AA]">
                      Motor PWM, PID odometry, ultrasonic bumper safety loop.
                    </p>
                  </div>

                  <div className="bg-[#1C1C20] border border-[#2E2E36] p-2.5 rounded">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white mb-1">
                      <Eye className="w-3.5 h-3.5 text-cyan-400" /> Stereo Camera
                    </div>
                    <p className="text-[11px] text-[#A1A1AA]">
                      Real-time pedestrian detection & object avoidance.
                    </p>
                  </div>

                  <div className="bg-[#1C1C20] border border-[#2E2E36] p-2.5 rounded">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white mb-1">
                      <Compass className="w-3.5 h-3.5 text-emerald-400" /> 360° LiDAR
                    </div>
                    <p className="text-[11px] text-[#A1A1AA]">
                      High-precision point cloud obstacle triangulation.
                    </p>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-center text-[#71717A]">
                  BUS INTERFACE: UART + I2C + SPI @ 115200 BAUD
                </div>
              </div>
            )}
          </div>

          {/* Performance metrics bar */}
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            {project.metrics?.map((m, i) => (
              <div key={i} className="bg-[#1F1F24] border border-[#2F2F37] p-2.5 rounded-sm">
                <div className="text-base sm:text-lg font-mono font-black text-white">
                  {m.value}
                </div>
                <div className="text-[10px] font-mono uppercase text-[#A1A1AA]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
