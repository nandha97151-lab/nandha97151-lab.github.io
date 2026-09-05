export interface SkillItem {
  name: string;
  level?: string;
  icon?: string;
  tag?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "PROGRAMMING",
    subtitle: "Core languages & computational thinking",
    skills: [
      { name: "Python", level: "Primary", tag: "AI/Data/Backend" },
      { name: "Java", level: "Proficient", tag: "OOP & Algorithms" },
      { name: "C", level: "Foundational", tag: "Systems & Memory" },
      { name: "JavaScript", level: "Advanced", tag: "ES6+ & Async" }
    ]
  },
  {
    title: "AI & DATA",
    subtitle: "Intelligence models, analysis & computer vision",
    skills: [
      { name: "Machine Learning", level: "Core Focus", tag: "Scikit-Learn/Models" },
      { name: "Data Science", level: "Core Focus", tag: "EDA & Pipelines" },
      { name: "Computer Vision", level: "Active Focus", tag: "OpenCV/MediaPipe" },
      { name: "NumPy", level: "Proficient", tag: "Matrix Operations" },
      { name: "Pandas", level: "Proficient", tag: "Dataframes & Wrangling" },
      { name: "Matplotlib", level: "Proficient", tag: "Data Visualizations" }
    ]
  },
  {
    title: "WEB",
    subtitle: "Modern frontend & interactive interfaces",
    skills: [
      { name: "HTML5", level: "Semantic", tag: "Accessibility/DOM" },
      { name: "CSS3", level: "Mastery", tag: "Layouts/Keyframes" },
      { name: "JavaScript", level: "Modern", tag: "Interactive APIs" },
      { name: "React", level: "Core", tag: "Hooks & Component Tree" },
      { name: "Next.js", level: "App Router", tag: "Fullstack Architecture" },
      { name: "Tailwind CSS", level: "Utility-First", tag: "Design Systems" }
    ]
  },
  {
    title: "TOOLS & ENVIRONMENT",
    subtitle: "Developer workflow & hardware prototyping",
    skills: [
      { name: "Git", level: "Version Control", tag: "CLI / Branching" },
      { name: "GitHub", level: "Collaboration", tag: "CI/CD & Repos" },
      { name: "VS Code", level: "Primary IDE", tag: "Extensions & Debug" },
      { name: "Jupyter Notebook", level: "Analysis", tag: "Interactive Kernels" },
      { name: "Figma", level: "Prototyping", tag: "UI/UX & Wireframes" }
    ]
  }
];

export const directPaperSkills = [
  { name: "Python", category: "Language", color: "#3776AB", symbol: "Py" },
  { name: "Java", category: "Language", color: "#E76F00", symbol: "☕" },
  { name: "C", category: "Language", color: "#A8B9CC", symbol: "C" },
  { name: "JavaScript", category: "Language", color: "#F7DF1E", symbol: "JS" },
  { name: "HTML5", category: "Web", color: "#E34F26", symbol: "</>" },
  { name: "CSS3", category: "Web", color: "#1572B6", symbol: "#" },
  { name: "React", category: "Framework", color: "#61DAFB", symbol: "⚛" },
  { name: "Next.js", category: "Framework", color: "#000000", symbol: "▲" },
  { name: "SQL", category: "Database", color: "#00758F", symbol: "🗄" },
  { name: "Git / GitHub", category: "Tool", color: "#F05032", symbol: "⎇" },
  { name: "Machine Learning", category: "AI", color: "#C9382B", symbol: "🧠" },
  { name: "Computer Vision", category: "AI", color: "#2B5B84", symbol: "👁" }
];

export const currentlyLearningItems = [
  { title: "Advanced Machine Learning", note: "Deepening mathematical optimization & ensemble architectures" },
  { title: "Deep Learning", note: "Neural network backpropagation & CNN / Transformer pipelines" },
  { title: "Generative AI", note: "LLM fine-tuning, RAG frameworks & multi-modal agents" },
  { title: "Data Analytics", note: "Predictive statistical modeling & exploratory feature engineering" },
  { title: "Computer Vision", note: "Real-time edge object detection, segmentation & SLAM mapping" },
  { title: "AI-Powered Applications", note: "End-to-end deployment of intelligent interactive systems" },
  { title: "Advanced Web Development", note: "Server actions, WebGL shaders & micro-interaction design" }
];
