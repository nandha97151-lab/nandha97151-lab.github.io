"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Hand, Sparkles, RefreshCw, Palette, Video, Activity } from "lucide-react";
import { Project } from "@/config/projects";
import { TapeSticker } from "../paper/TapeSticker";

interface AirDrawingShowcaseProps {
  project: Project;
}

export const AirDrawingShowcase: React.FC<AirDrawingShowcaseProps> = ({ project }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("#38B2AC");
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [handPos, setHandPos] = useState<{ x: number; y: number }>({ x: 150, y: 100 });
  const [isHoveringCanvas, setIsHoveringCanvas] = useState<boolean>(false);

  const colors = [
    { label: "Cyan", value: "#38B2AC" },
    { label: "Coral", value: "#E05638" },
    { label: "Gold", value: "#F59E0B" },
    { label: "Emerald", value: "#10B981" },
  ];

  // Canvas drawing loop
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setHandPos({ x, y });

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw glowing particle stroke
    ctx.strokeStyle = selectedColor;
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.shadowBlur = 10;
    ctx.shadowColor = selectedColor;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsHoveringCanvas(true);
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const handleMouseLeave = () => {
    setIsHoveringCanvas(false);
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.beginPath();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Preset initial drawing on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 500;
    canvas.height = canvas.parentElement?.clientHeight || 320;

    // Draw initial demo curve
    ctx.strokeStyle = "#38B2AC";
    ctx.lineWidth = 3.5;
    ctx.lineCap = "round";
    ctx.shadowBlur = 12;
    ctx.shadowColor = "#38B2AC";

    ctx.beginPath();
    ctx.moveTo(60, 180);
    ctx.bezierCurveTo(120, 70, 240, 240, 360, 120);
    ctx.stroke();

    // AI Air Drawing text stroke
    ctx.font = "bold 14px monospace";
    ctx.fillStyle = "#A1A1AA";
    ctx.shadowBlur = 0;
    ctx.fillText("AI VISION ACTIVE [MOVE CURSOR TO DRAW]", 60, 40);
  }, []);

  return (
    <div className="relative w-full bg-[#18181B] border border-[#2D2D32] rounded-sm p-6 sm:p-8 md:p-10 shadow-2xl text-white overflow-hidden">
      {/* Tape accent */}
      <TapeSticker
        variant="dark"
        rotation={2.5}
        className="absolute -top-3 right-10"
        width="w-28"
      />

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2C2C32] pb-5 mb-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-[#38B2AC] tracking-widest">
            PROJECT // {project.number}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#38B2AC]" />
          <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#232328] border border-[#373740] rounded text-xs font-mono text-[#38B2AC]">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>MEDIAPIPE 21-PTS</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
              {project.title}
            </h3>
            <p className="font-mono text-sm text-[#38B2AC] font-semibold tracking-wide">
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
                <Sparkles className="w-4 h-4 text-[#38B2AC] shrink-0 mt-0.5" />
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

        {/* Right Interactive Canvas Demo */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] bg-[#0C0D0E] border border-[#333338] rounded overflow-hidden shadow-inner flex flex-col justify-between">
            {/* Top Canvas Controls */}
            <div className="relative z-10 flex items-center justify-between p-3 bg-[#16171A]/90 border-b border-[#28292E] backdrop-blur-xs">
              {/* Color pickers */}
              <div className="flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-[#71717A] mr-1" />
                {colors.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setSelectedColor(c.value)}
                    style={{ backgroundColor: c.value }}
                    className={`w-5 h-5 rounded-full transition-transform ${
                      selectedColor === c.value
                        ? "scale-125 ring-2 ring-white ring-offset-1 ring-offset-black"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    title={c.label}
                    data-cursor="COLOR"
                  />
                ))}
              </div>

              {/* Clear Canvas button */}
              <button
                onClick={clearCanvas}
                className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono text-[#A1A1AA] hover:text-white bg-[#222328] hover:bg-[#2C2D35] border border-[#373842] rounded transition-colors"
                data-cursor="CLEAR"
              >
                <RefreshCw className="w-3 h-3" />
                Clear
              </button>
            </div>

            {/* Drawing Canvas Area */}
            <div className="relative flex-1 w-full h-full cursor-crosshair">
              <canvas
                ref={canvasRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="absolute inset-0 w-full h-full"
              />

              {/* Hand Tracking Simulation Node following pointer */}
              {isHoveringCanvas && (
                <div
                  className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: handPos.x, top: handPos.y }}
                >
                  {/* Fingertip Tracking Circle */}
                  <div
                    className="w-5 h-5 rounded-full border-2 border-white animate-ping opacity-75"
                    style={{ borderColor: selectedColor }}
                  />
                  <div
                    className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#FFF] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                  {/* Simulated 21-point MediaPipe Hand Skeleton Overlay */}
                  <div className="absolute top-2 left-2 text-[9px] font-mono text-white/70 bg-black/80 px-1 rounded whitespace-nowrap">
                    ID#8: INDEX_TIP ({Math.round(handPos.x)}, {Math.round(handPos.y)})
                  </div>
                </div>
              )}
            </div>

            {/* Canvas Footer Status */}
            <div className="relative z-10 flex items-center justify-between px-3 py-2 bg-[#16171A]/90 border-t border-[#28292E] text-[11px] font-mono text-[#A1A1AA]">
              <span className="flex items-center gap-1 text-[#38B2AC]">
                <Video className="w-3.5 h-3.5" /> WEBCAM TRACKER: 30 FPS
              </span>
              <span className="hidden sm:inline">GESTURE: INDEX DRAWING</span>
              <span className="text-emerald-400">STATUS: LIVE</span>
            </div>
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
