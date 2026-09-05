"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const Cursor: React.FC = () => {
  const [cursorText, setCursorText] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Buttery spring motion for cursor follower
  const springX = useSpring(mouseX, { stiffness: 450, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 30 });

  useEffect(() => {
    // Check for touch / coarse pointer
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element for cursor attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
        return;
      }

      // Check standard interactive elements
      const interactiveTarget = target.closest("a, button, [role='button'], input, textarea");
      if (interactiveTarget) {
        setCursorText("");
        setIsHovered(true);
        return;
      }

      setIsHovered(false);
      setCursorText("");
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Small precise dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference bg-white"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? "4px" : "6px",
          height: isHovered ? "4px" : "6px",
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Outer physical follower with soft glass effect and label badge */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center rounded-full transition-colors duration-200 ${
          cursorText
            ? "bg-[#141311]/90 text-[#F5F2EA] border border-[#EDE8DF]/30 shadow-[0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-sm"
            : isHovered
            ? "bg-[#C9382B]/20 border border-[#C9382B]/40 shadow-[0_2px_8px_rgba(201,56,43,0.2)]"
            : "border border-[#141311]/30 bg-[#141311]/5 shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
        }`}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: cursorText ? "80px" : isHovered ? "42px" : "28px",
          height: cursorText ? "34px" : isHovered ? "42px" : "28px",
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
};
