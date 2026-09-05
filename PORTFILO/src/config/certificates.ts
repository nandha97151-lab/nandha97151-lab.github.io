export interface Certificate {
  id: string;
  title: string;
  category: string;
  issuer: string;
  date: string;
  rotation: number; // Deterministic degrees
  description: string;
  badge: string;
  colorTheme: string;
  tapePosition: "top-left" | "top-right" | "center" | "both";
  credentialId?: string;
  skillsGained: string[];
}

export const certificates: Certificate[] = [
  {
    id: "innovation",
    title: "Innovation Summit & Project Challenge",
    category: "INNOVATION & CREATIVITY",
    issuer: "Tech Horizon & Department of AI",
    date: "2025",
    rotation: -2.5,
    description:
      "Awarded for conceptualizing and presenting novel autonomous delivery robotics and real-world AI utility prototypes.",
    badge: "Special Recognition",
    colorTheme: "#C9382B",
    tapePosition: "top-left",
    credentialId: "INNOV-2025-9921",
    skillsGained: ["System Design", "Autonomous Robotics", "Problem Solving", "Rapid Prototyping"]
  },
  {
    id: "prompt-battle",
    title: "PromptBattle Generative AI Sprint",
    category: "GENERATIVE AI & PROMPT ENG",
    issuer: "AI Student Chapter",
    date: "2025",
    rotation: 2.8,
    description:
      "Competed in high-intensity live prompt engineering challenges crafting multi-shot reasoning chains and zero-shot generative pipelines.",
    badge: "1st Runner Up",
    colorTheme: "#7C3AED",
    tapePosition: "top-right",
    credentialId: "PB-AI-2025-4412",
    skillsGained: ["Prompt Engineering", "LLM Orchestration", "Iterative Refinement", "Few-Shot Logic"]
  },
  {
    id: "animarena",
    title: "Animarena Creative Digital Showcase",
    category: "DESIGN & MULTIMEDIA",
    issuer: "Creative Guild",
    date: "2025",
    rotation: -1.8,
    description:
      "Recognition for outstanding interactive visual storytelling, character aesthetics, and cinematic digital presentation.",
    badge: "Design Excellence",
    colorTheme: "#D97706",
    tapePosition: "center",
    credentialId: "ANIM-2025-0814",
    skillsGained: ["Visual Composition", "Kinetic Motion", "Editorial Layout", "Storyboarding"]
  },
  {
    id: "code-war",
    title: "Code War Algorithmic Battle",
    category: "DATA STRUCTURES & ALGORITHMS",
    issuer: "Competitive Programming Hub",
    date: "2025",
    rotation: 3.2,
    description:
      "Demonstrated algorithmic efficiency, data structure mastery, and timed problem solving across challenging competitive programming sets.",
    badge: "Top Performer",
    colorTheme: "#2563EB",
    tapePosition: "top-left",
    credentialId: "CW-2025-7801",
    skillsGained: ["Python / C++ Algorithms", "Time Complexity Optimization", "Dynamic Programming", "Graph Traversal"]
  },
  {
    id: "ipl-quiz",
    title: "IPL Analytics & Strategy Quiz",
    category: "SPORTS ANALYTICS & TRIVIA",
    issuer: "Sports Analytics League",
    date: "2025",
    rotation: -3.0,
    description:
      "Challenged statistical trivia, match probability calculations, and historical data patterns in high-stakes competitive quiz rounds.",
    badge: "Winner's Circle",
    colorTheme: "#059669",
    tapePosition: "top-right",
    credentialId: "IPL-Q-2025-3390",
    skillsGained: ["Statistical Data Analysis", "Pattern Recognition", "Rapid Recall", "Analytics Thinking"]
  },
  {
    id: "hardware-system",
    title: "Computer Hardware & Microcontroller Systems",
    category: "HARDWARE & EMBEDDED SYSTEMS",
    issuer: "Embedded Systems Laboratory",
    date: "2025",
    rotation: 1.6,
    description:
      "Comprehensive certification in microcomputer architecture, ESP32/Raspberry Pi pinout interfacing, bus protocols (I2C/SPI), and hardware troubleshooting.",
    badge: "Certified Hands-On",
    colorTheme: "#DC2626",
    tapePosition: "both",
    credentialId: "HW-EMB-2025-6602",
    skillsGained: ["ESP32 / Pi Interfacing", "Sensor Integration", "Circuit Debugging", "UART / I2C / SPI"]
  },
  {
    id: "modern-web",
    title: "Modern Fullstack & Editorial Web Systems",
    category: "MODERN WEB ARCHITECTURE",
    issuer: "Fullstack Engineering Guild",
    date: "2025–2026",
    rotation: -2.0,
    description:
      "Advanced mastery of Next.js App Router, React 19 concurrent patterns, Tailwind CSS design tokens, and fluid motion design principles.",
    badge: "Fullstack Certified",
    colorTheme: "#0891B2",
    tapePosition: "top-left",
    credentialId: "WEB-MOD-2026-1188",
    skillsGained: ["Next.js 15", "React 19", "Tailwind CSS", "Motion Systems", "Web Performance"]
  }
];
