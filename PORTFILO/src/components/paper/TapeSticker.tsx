import React from "react";

interface TapeStickerProps {
  variant?: "cream" | "dark" | "red" | "clip" | "pin";
  rotation?: number;
  className?: string;
  width?: string;
}

export const TapeSticker: React.FC<TapeStickerProps> = ({
  variant = "cream",
  rotation = 0,
  className = "",
  width = "w-24 md:w-28",
}) => {
  if (variant === "clip") {
    return (
      <div
        className={`inline-block relative z-20 ${className}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <svg
          viewBox="0 0 24 56"
          className="w-5 h-12 text-[#949088] drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 4 C6 4 6 16 6 24 L6 44 C6 50 18 50 18 44 L18 16 C18 10 10 10 10 16 L10 40" />
        </svg>
      </div>
    );
  }

  if (variant === "pin") {
    return (
      <div
        className={`inline-block relative z-20 ${className}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#E03B2C] to-[#8F1D15] shadow-[0_3px_5px_rgba(0,0,0,0.35),_inset_0_1px_2px_rgba(255,255,255,0.6)] border border-[#6B140E]" />
        <div className="w-1 h-2 bg-[#706B65] mx-auto -mt-0.5 rounded-b opacity-80" />
      </div>
    );
  }

  const bgStyles = {
    cream:
      "bg-[#EFE8D3]/80 backdrop-blur-[1px] border-t border-b border-[#E2D8BF]/60 text-[#736B57]",
    dark:
      "bg-[#2B2926]/75 backdrop-blur-[1px] border-t border-b border-[#3D3A36]/60 text-[#9E978C]",
    red:
      "bg-[#D64335]/75 backdrop-blur-[1px] border-t border-b border-[#B83124]/60 text-[#FFF5F4]",
  };

  return (
    <div
      className={`relative inline-block h-6 sm:h-7 ${width} ${bgStyles[variant]} shadow-[0_2px_6px_rgba(30,25,18,0.12)] select-none pointer-events-none z-20 ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        clipPath:
          "polygon(0% 12%, 3% 0%, 97% 0%, 100% 15%, 98% 88%, 95% 100%, 2% 100%, 0% 85%)",
      }}
    >
      {/* Subtle translucent fiber noise */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px]" />
    </div>
  );
};
