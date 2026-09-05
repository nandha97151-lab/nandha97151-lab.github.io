import React from "react";

interface ContinuousMarqueeProps {
  text?: string;
  items?: string[];
  speed?: "normal" | "fast" | "slow";
  reverse?: boolean;
  className?: string;
  opacity?: string;
}

export const ContinuousMarquee: React.FC<ContinuousMarqueeProps> = ({
  text,
  items = [
    "AI",
    "DATA SCIENCE",
    "COMPUTER VISION",
    "WEB",
    "MACHINE LEARNING",
    "EMBEDDED SYSTEMS",
    "PYTHON",
  ],
  speed = "normal",
  reverse = false,
  className = "",
  opacity = "opacity-[0.065]",
}) => {
  const content = text || items.join("  —  ");

  const durationClass =
    speed === "fast"
      ? "animate-marquee-fast"
      : reverse
      ? "animate-marquee-reverse"
      : "animate-marquee";

  return (
    <div
      className={`pointer-events-none select-none overflow-hidden whitespace-nowrap flex items-center ${opacity} ${className}`}
      aria-hidden="true"
    >
      <div className={`flex shrink-0 items-center gap-8 ${durationClass} will-change-transform`}>
        <span className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-extrabold uppercase tracking-tighter text-white">
          {content} —&nbsp;
        </span>
        <span className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-extrabold uppercase tracking-tighter text-white">
          {content} —&nbsp;
        </span>
      </div>
      <div className={`flex shrink-0 items-center gap-8 ${durationClass} will-change-transform`}>
        <span className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-extrabold uppercase tracking-tighter text-white">
          {content} —&nbsp;
        </span>
        <span className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-extrabold uppercase tracking-tighter text-white">
          {content} —&nbsp;
        </span>
      </div>
    </div>
  );
};
