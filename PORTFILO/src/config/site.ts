export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  year: string;
  degree: string;
  college: string;
  collegeTimeline: string;
  school: string;
  schoolTimeline: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  shortBio: string;
  aboutEditorial: string[];
  domains: string[];
  identityStatement: {
    headline: string;
    subheadline: string;
    note: string;
  };
  contactEditorial: {
    heading: string;
    subheading: string;
    signature: string;
    availability: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "NANDHAKUMAR N",
  title: "Nandhakumar N — AI & Data Science Portfolio",
  role: "AI & DATA SCIENCE",
  year: "2026",
  degree: "B.Tech — Artificial Intelligence & Data Science",
  college: "KPR Institute of Engineering and Technology",
  collegeTimeline: "2025 — 2029",
  school: "HSC — Little Angel Higher Secondary School",
  schoolTimeline: "2025",
  email: "nandha97151@gmail.com",
  linkedin: "https://www.linkedin.com/in/nandhakumar1234/",
  github: "https://github.com/nandha97151-lab",
  location: "Tamil Nadu, India",
  shortBio:
    "I'm Nandhakumar N, a B.Tech Artificial Intelligence and Data Science student passionate about building intelligent systems, creative digital experiences, and practical technology solutions.",
  aboutEditorial: [
    "Exploring the intersection of mathematical reasoning, computer vision, and physical robotics.",
    "Driven by the urge to create tools that make tangible impacts — from autonomous campus delivery rovers to accessible vernacular billing systems.",
    "Committed to clean architecture, editorial aesthetic craft, and building software that feels alive."
  ],
  domains: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Python",
    "Web Development",
    "Computer Vision",
    "IoT",
    "Robotics",
    "UI/UX experimentation"
  ],
  identityStatement: {
    headline: "AI × CREATIVITY × BUILDING",
    subheadline: "Turning ideas into intelligent experiences.",
    note: "Crafting at the intersection of intelligence, physical computing, and digital craftsmanship."
  },
  contactEditorial: {
    heading: "LET'S CONNECT",
    subheading: "Open to learning, collaboration, internships, and exciting AI projects.",
    signature: "Nandhakumar N",
    availability: "Available for Internships & AI Collaborations"
  }
};
