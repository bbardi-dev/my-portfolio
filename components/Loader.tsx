import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

const Loader = ({
  setLoading,
}: {
  setLoading: Dispatch<SetStateAction<boolean>>;
}) => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { x: "-100vw" },
    show: {
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
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
      className='loader'
      variants={container}
      initial='hidden'
      animate='show'
      exit='exit'
      onAnimationComplete={() => setLoading(false)}
    >
      <motion.div variants={item} className='transition-1' />
      <motion.div variants={item2} className='transition-2' />
      <motion.div variants={item3} className='transition-3' />
    </motion.div>
  );
};

export default Loader;
