"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const symbols = ['₹', '$', '€', '£', '¥', '₩', '₽', '₺', '₦', '₱', '฿', '₫'];

interface CurrencyHoverNameProps {
  name: string;
}

export const CurrencyHoverName: React.FC<CurrencyHoverNameProps> = ({ name }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      size: Math.random() * 24 + 14,
      left: `${Math.random() * 180 - 40}%`, // Wider spread
      top: `${Math.random() * 180 - 40}%`,
      rotation: Math.random() * 360,
      duration: Math.random() * 3 + 2.5,
      blur: Math.random() * 2.5,
      opacity: Math.random() * 0.7 + 0.15,
      parallaxFactor: (Math.random() - 0.5) * 60,
      color: Math.random() > 0.35 ? '#141311' : '#C9382B',
    }));
    setParticles(newParticles);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div 
      className="relative inline-block z-10"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none -z-10"
          >
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute font-mono font-bold"
                style={{
                  left: p.left,
                  top: p.top,
                  color: p.color,
                  opacity: p.opacity,
                  filter: `blur(${p.blur}px) drop-shadow(0 0 10px rgba(200,50,50,0.1))`,
                  fontSize: p.size,
                }}
                animate={{
                  x: mousePos.x * p.parallaxFactor,
                  y: mousePos.y * p.parallaxFactor,
                }}
                transition={{
                  x: { type: "spring", stiffness: 50, damping: 20 },
                  y: { type: "spring", stiffness: 50, damping: 20 }
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [p.rotation, p.rotation + 30, p.rotation],
                  }}
                  transition={{
                    y: {
                      duration: p.duration,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    rotate: {
                      duration: p.duration * 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                  }}
                >
                  {p.symbol}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <span className="relative z-10 transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};
