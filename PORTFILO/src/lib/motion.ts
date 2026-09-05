import { Variants } from "framer-motion";

export const transitionPaper = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1], // cinematic smooth ease-out
};

export const transitionFast = {
  duration: 0.35,
  ease: [0.25, 1, 0.5, 1],
};

export const transitionSpring = {
  type: "spring",
  stiffness: 260,
  damping: 24,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const stampPop: Variants = {
  hidden: { scale: 0.8, opacity: 0, rotate: -8 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 18,
    },
  },
};

export const drawPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.4, ease: "easeInOut" },
      opacity: { duration: 0.2 },
    },
  },
};
