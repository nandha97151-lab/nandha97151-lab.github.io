import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F6F3EC",
          light: "#FAF7F0",
          warm: "#F3EDE1",
          aged: "#ECE5D5",
          border: "#E0D7C5",
          grid: "rgba(35, 30, 25, 0.055)",
          dark: "#0F0F10",
          "dark-card": "#18181A",
          "dark-border": "#28282C",
        },
        ink: {
          DEFAULT: "#141311",
          black: "#0D0C0B",
          charcoal: "#2A2724",
          pencil: "#504C46",
          muted: "#767066",
          faint: "#A8A196",
          red: "#C9382B",
          "red-bright": "#E03B2C",
          "red-light": "rgba(201, 56, 43, 0.12)",
          blue: "#24587D",
        },
        tape: {
          DEFAULT: "rgba(238, 230, 210, 0.72)",
          dark: "rgba(50, 48, 45, 0.6)",
        },
        highlight: {
          yellow: "rgba(255, 230, 100, 0.4)",
          red: "rgba(240, 80, 70, 0.2)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-syne)", "Syne", "sans-serif"],
        serif: ["var(--font-editorial)", "Playfair Display", "Georgia", "serif"],
        hand: ["var(--font-hand)", "Caveat", "cursive"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "paper-flat": "0 1px 2px rgba(0,0,0,0.04)",
        "paper-sm": "0 2px 5px rgba(25,20,15,0.06), 0 1px 2px rgba(25,20,15,0.04)",
        "paper-md": "0 6px 16px rgba(25,20,15,0.09), 0 2px 4px rgba(25,20,15,0.04)",
        "paper-lg": "0 14px 28px rgba(25,20,15,0.12), 0 6px 10px rgba(25,20,15,0.06)",
        "paper-lift": "0 20px 36px rgba(25,20,15,0.18), 0 8px 14px rgba(25,20,15,0.1)",
        "dark-lift": "0 18px 40px rgba(0,0,0,0.6)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        }
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        float: "float 5s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
