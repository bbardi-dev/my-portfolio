import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import styles from "../styles/components/loader.module.scss";

const Loader = ({
  setLoading,
}: {
  setLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { x: "-100vw" },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.5,
      },
    },
  };

  const item2 = {
    ...item,
    hidden: {
      ...item.hidden,
      y: "-100vh",
    },
  };

  const item3 = {
    ...item,
    hidden: {
      ...item.hidden,
      y: "-200vh",
    },
  };

  return (
    <motion.div
      className={styles.loader}
      variants={container}
      initial='hidden'
      animate='show'
      onAnimationComplete={() => setLoading(false)}
    >
      <motion.div variants={item} className={styles.transition_1} />
      <motion.div variants={item2} className={styles.transition_2} />
      <motion.div variants={item3} className={styles.transition_3} />
    </motion.div>
  );
};

export default Loader;
