import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.96],
      duration: 1,
    },
  },
};
