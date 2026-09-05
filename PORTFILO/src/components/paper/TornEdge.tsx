import React from "react";

interface TornEdgeProps {
  position: "top" | "bottom";
  variant?: "warm-to-dark" | "dark-to-warm" | "tear-reveal";
  className?: string;
}

export const TornEdge: React.FC<TornEdgeProps> = ({
  position,
  variant = "warm-to-dark",
  className = "",
}) => {
  // Deterministic organic torn edge SVG paths
  // Top torn edge path for transitioning from warm paper into black paper
  const topTornPath =
    "M0,0 L0,32 Q25,18 60,35 T120,22 Q175,38 230,24 T320,36 Q380,16 440,32 T530,22 Q600,42 670,26 T770,36 Q830,18 900,34 T990,20 Q1060,40 1130,26 T1220,38 Q1290,16 1360,32 T1440,24 L1440,80 L0,80 Z";

  // Fiber highlight edge (the exposed white/cream paper deckle fibers)
  const topFiberPath =
    "M0,32 Q25,18 60,35 T120,22 Q175,38 230,24 T320,36 Q380,16 440,32 T530,22 Q600,42 670,26 T770,36 Q830,18 900,34 T990,20 Q1060,40 1130,26 T1220,38 Q1290,16 1360,32 T1440,24";

  // Bottom torn edge path for transitioning from black paper back into warm paper
  const bottomTornPath =
    "M0,0 L1440,0 L1440,48 Q1370,62 1300,46 T1210,58 Q1140,38 1070,54 T980,44 Q910,64 840,48 T740,58 Q680,40 610,56 T520,42 Q450,62 380,48 T290,60 Q220,40 150,56 T60,44 Q30,52 0,48 Z";

  const bottomFiberPath =
    "M1440,48 Q1370,62 1300,46 T1210,58 Q1140,38 1070,54 T980,44 Q910,64 840,48 T740,58 Q680,40 610,56 T520,42 Q450,62 380,48 T290,60 Q220,40 150,56 T60,44 Q30,52 0,48";

  if (position === "top") {
    return (
      <div
        className={`relative w-full overflow-hidden leading-none z-20 ${className}`}
        style={{ marginTop: "-2px" }}
      >
        {/* Soft cast shadow behind the torn edge */}
        <svg
          viewBox="0 0 1440 80"
          className="w-full h-12 md:h-16 lg:h-20 block translate-y-1 opacity-25 filter blur-[2px]"
          preserveAspectRatio="none"
        >
          <path d={topTornPath} fill="#000000" />
        </svg>

        {/* Main torn black paper sheet */}
        <svg
          viewBox="0 0 1440 80"
          className="absolute inset-0 w-full h-12 md:h-16 lg:h-20 block"
          preserveAspectRatio="none"
        >
          {/* Deckle fiber highlight */}
          <path
            d={topFiberPath}
            fill="none"
            stroke="rgba(245, 240, 230, 0.45)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Main dark sheet body */}
          <path d={topTornPath} fill="#111112" />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden leading-none z-20 ${className}`}
      style={{ marginBottom: "-2px" }}
    >
      {/* Soft cast shadow behind the torn bottom edge */}
      <svg
        viewBox="0 0 1440 80"
        className="w-full h-12 md:h-16 lg:h-20 block translate-y-1.5 opacity-20 filter blur-[2px]"
        preserveAspectRatio="none"
      >
        <path d={bottomTornPath} fill="#000000" />
      </svg>

      {/* Main torn black paper bottom */}
      <svg
        viewBox="0 0 1440 80"
        className="absolute inset-0 w-full h-12 md:h-16 lg:h-20 block"
        preserveAspectRatio="none"
      >
        {/* Main dark sheet */}
        <path d={bottomTornPath} fill="#111112" />
        {/* Deckle fiber edge line */}
        <path
          d={bottomFiberPath}
          fill="none"
          stroke="rgba(245, 240, 230, 0.5)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
