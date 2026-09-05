import React from "react";

interface HandwrittenNoteProps {
  children: React.ReactNode;
  variant?: "red" | "pencil" | "black" | "stamp";
  arrow?: "curved-down" | "curved-up" | "right" | "left" | "none";
  circle?: boolean;
  underline?: boolean;
  className?: string;
  rotation?: number;
}

export const HandwrittenNote: React.FC<HandwrittenNoteProps> = ({
  children,
  variant = "red",
  arrow = "none",
  circle = false,
  underline = false,
  className = "",
  rotation = 0,
}) => {
  const colorMap = {
    red: "text-[#C9382B]",
    pencil: "text-[#555048]",
    black: "text-[#121110]",
    stamp: "text-[#C9382B] border-2 border-[#C9382B]/80 px-2 py-0.5 uppercase tracking-wider font-mono text-xs rounded-sm",
  };

  const strokeColor = variant === "red" || variant === "stamp" ? "#C9382B" : variant === "pencil" ? "#555048" : "#121110";

  return (
    <div
      className={`inline-flex flex-col items-center select-none font-hand text-lg md:text-xl font-medium ${colorMap[variant]} ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="relative inline-block">
        {children}

        {/* Ink Circle Marker */}
        {circle && (
          <svg
            className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none -z-10"
            viewBox="0 0 120 60"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M12,30 C12,12 35,6 65,7 C95,8 112,18 110,36 C108,50 82,54 50,53 C22,52 8,42 9,28 C10,18 25,12 40,11"
              stroke={strokeColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="4 2"
              className="opacity-85"
            />
          </svg>
        )}

        {/* Hand-drawn Underline */}
        {underline && (
          <svg
            className="absolute left-0 -bottom-1.5 w-full h-3 pointer-events-none"
            viewBox="0 0 100 12"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M2,6 Q30,11 60,5 T98,7"
              stroke={strokeColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              className="opacity-85"
            />
          </svg>
        )}
      </div>

      {/* Hand-drawn arrow options */}
      {arrow === "curved-down" && (
        <svg
          viewBox="0 0 40 40"
          className="w-7 h-7 mt-1 -mb-2 pointer-events-none"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 4 C 18 18, 30 22, 28 34" />
          <path d="M20 30 L 28 34 L 32 26" />
        </svg>
      )}

      {arrow === "curved-up" && (
        <svg
          viewBox="0 0 40 40"
          className="w-7 h-7 mb-1 pointer-events-none"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M28 36 C 22 22, 10 18, 12 6" />
          <path d="M20 10 L 12 6 L 8 14" />
        </svg>
      )}

      {arrow === "right" && (
        <svg
          viewBox="0 0 40 24"
          className="w-7 h-5 ml-1 pointer-events-none"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 12 Q 20 8, 34 12" />
          <path d="M26 6 L 34 12 L 26 18" />
        </svg>
      )}

      {arrow === "left" && (
        <svg
          viewBox="0 0 40 24"
          className="w-7 h-5 mr-1 pointer-events-none"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M36 12 Q 20 16, 6 12" />
          <path d="M14 6 L 6 12 L 14 18" />
        </svg>
      )}
    </div>
  );
};
