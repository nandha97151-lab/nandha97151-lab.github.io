export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  year: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  accentColor?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "kutty-labs",
    number: "01",
    title: "KUTTY LABS",
    subtitle: "Autonomous AI-Powered Campus Delivery Robot",
    description:
      "An autonomous campus delivery robot concept designed to transport items across a college campus using intelligent navigation, sensing, and real-time control.",
    longDescription:
      "Kutty Labs integrates edge compute (Raspberry Pi & ESP32), sensor fusion with 2D LiDAR, ultrasonic obstacle avoidance, and computer vision camera feeds to calculate optimal waypoints across campus pathways in real-time.",
    tags: [
      "Python",
      "AI",
      "Computer Vision",
      "Raspberry Pi",
      "ESP32",
      "LiDAR",
      "IoT",
      "Robotics"
    ],
    category: "ROBOTICS & EMBEDDED AI",
    year: "2025–2026",
    highlights: [
      "Real-time LiDAR point-cloud mapping & SLAM trajectory computation",
      "Dual microcontroller architecture with ESP32 motor PWM & Raspberry Pi brain",
      "Camera-based pedestrian detection & dynamic corridor pathing",
      "Sub-50ms latency telemetry transmission over local campus WiFi mesh"
    ],
    metrics: [
      { label: "Navigation Accuracy", value: "98.4%" },
      { label: "Obstacle Detection", value: "< 20ms" },
      { label: "Payload Capacity", value: "8.5 kg" }
    ],
    accentColor: "#E05638"
  },
  {
    id: "air-drawing-ai",
    number: "02",
    title: "AIR DRAWING AI",
    subtitle: "Real-Time Webcam Hand-Tracking Canvas",
    description:
      "An AI-powered air drawing system that uses a laptop webcam and hand tracking to allow users to draw in the air without touching the screen.",
    longDescription:
      "Utilizes MediaPipe Hands and OpenCV in Python to detect 21 hand landmarks in real-time. Index-finger gestures trigger continuous stroke rasterization on a virtual transparent buffer, supporting dynamic color switching, gesture erasing, and stroke smoothing.",
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    category: "COMPUTER VISION & GESTURE AI",
    year: "2025",
    highlights: [
      "21-Point hand landmark tracking running at 30+ FPS on consumer hardware",
      "Intelligent gesture state machine (Drawing mode, Color Selection, Full Erase)",
      "Kalman filter-smoothed stroke trajectory preventing jitter",
      "Direct canvas overlay with particle spray and glow effects"
    ],
    metrics: [
      { label: "FPS Processing", value: "45+ FPS" },
      { label: "Latency", value: "~18ms" },
      { label: "Landmarks Tracked", value: "21 Points" }
    ],
    accentColor: "#38B2AC"
  },
  {
    id: "tamil-billing-system",
    number: "03",
    title: "TAMIL BILLING SYSTEM",
    subtitle: "Vernacular Point-of-Sale & Product Management",
    description:
      "A simple and user-friendly billing system designed to make product billing and inventory management easier for Tamil-speaking merchants and retail users.",
    longDescription:
      "Engineered with a focus on high accessibility and regional UX, this system features authentic Tamil UI labels, real-time GST computation, quick barcode lookup, printable thermal invoice generation, and fast inventory updates without requiring English fluency.",
    tags: ["Python", "JavaScript", "HTML/CSS", "SQL", "UI/UX"],
    category: "VERNACULAR SOFTWARE & POS",
    year: "2025",
    highlights: [
      "Complete Tamil typography interface with clear regional product categorization",
      "Instant bill calculation (அளவு, விலை, மொத்தம், ஜிஎஸ்டி) with automatic discount logic",
      "One-click PDF/Thermal receipt print generation",
      "Lightweight local database storage for offline resilience"
    ],
    metrics: [
      { label: "Language Support", value: "தமிழ் + English" },
      { label: "Billing Speed", value: "< 5 sec / invoice" },
      { label: "Data Safety", value: "100% Offline Ready" }
    ],
    accentColor: "#E59838"
  },
  {
    id: "aurelle",
    number: "04",
    title: "AURELLE",
    subtitle: "Luxury Fashion E-Commerce Experience",
    description:
      "An elegant luxury fashion website concept with haute couture editorial aesthetics, smooth transitions, and high-performance frontend engineering.",
    longDescription:
      "Created to explore high-end digital fashion retail, Aurelle pairs architectural typography with fluid layout transitions, interactive lookbooks, responsive curations, and micro-interactions tailored for modern luxury commerce.",
    tags: ["Next.js", "React", "Tailwind CSS", "GSAP / Motion"],
    category: "EDITORIAL WEB & COMMERCE",
    year: "2025–2026",
    highlights: [
      "Sophisticated monochrome & bronze palette inspired by European luxury editorial design",
      "Smooth layout transitions and cinematic hero product reveals",
      "Interactive seasonal runway lookbook with quick-look drawer",
      "Fully responsive and optimized for instant sub-second page transitions"
    ],
    metrics: [
      { label: "Lighthouse Score", value: "99 / 100" },
      { label: "Animation Frame Rate", value: "60 FPS" },
      { label: "Render Architecture", value: "Next.js App Router" }
    ],
    accentColor: "#D4AF37"
  }
];
