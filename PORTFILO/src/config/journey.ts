export interface Milestone {
  year: string;
  period?: string;
  title: string;
  description: string;
  tags: string[];
  type: "academic" | "building" | "vision";
  handwrittenAnnotation?: string;
}

export const journeyMilestones: Milestone[] = [
  {
    year: "2025",
    period: "BEGINNING",
    title: "Started B.Tech in Artificial Intelligence & Data Science",
    description:
      "Embarked on formal B.Tech studies in Artificial Intelligence and Data Science at KPR Institute of Engineering and Technology. Dove deep into foundational mathematics, discrete structures, algorithmic thinking, and core programming paradigms in Python, C, and Java.",
    tags: ["B.Tech AI & DS", "Mathematics", "Python", "Data Structures", "KPRIET"],
    type: "academic",
    handwrittenAnnotation: "The foundational chapter begins here."
  },
  {
    year: "2025–2026",
    period: "EXPLORATION & BUILDING",
    title: "Built Multi-Disciplinary Projects Across AI, Hardware & Web",
    description:
      "Engineered diverse hands-on projects spanning autonomous robotics (Kutty Labs campus rover), real-time gesture computer vision (Air Drawing AI), accessible regional retail software (Tamil Billing System), and luxury digital experiences (Aurelle). Explored edge computing with Raspberry Pi, ESP32, and LiDAR sensor integration.",
    tags: ["Robotics", "Computer Vision", "IoT", "Fullstack Web", "Edge AI"],
    type: "building",
    handwrittenAnnotation: "Bridging physical sensors with intelligence."
  },
  {
    year: "2026",
    period: "FOCUS & HORIZON",
    title: "Practical AI Systems & Professional Engineering",
    description:
      "Focused on architecting production-grade, practical AI-powered applications, expanding into deep learning architectures, multimodal systems, and refining a signature editorial digital engineering aesthetic. Actively seeking impactful internships and research collaborations.",
    tags: ["Practical AI", "Deep Learning", "System Design", "Internships", "Innovation"],
    type: "vision",
    handwrittenAnnotation: "Turning ideas into living experiences."
  }
];
