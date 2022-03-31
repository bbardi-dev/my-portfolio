import { motion, Variants } from "framer-motion";
import { useState } from "react";
import InView from "react-intersection-observer";
import styles from "../styles/components/menu.module.scss";

export default function Menu({ setNavInView }: any) {
  const [active, setActive] = useState(false);

  const staggeredAnimation: Variants = {
    animate: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.36,
      },
    },
  };
  const staggeredAnimation2: Variants = {
    animate: {
      transition: {
        delayChildren: 0.24,
        staggerChildren: 0.12,
      },
    },
  };
  const fadeDown: Variants = {
    initial: {
      opacity: 0,
      y: -12,
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
  const fadeIn: Variants = {
    initial: {
      opacity: 0,
      y: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.96],
        duration: 1.2,
      },
    },
  };

  return (
    <InView as='div' onChange={(inView) => setNavInView(inView)}>
      <header className={styles.header}>
        <motion.nav initial='initial' animate='animate' variants={staggeredAnimation} className='container'>
          <motion.a
            variants={window.matchMedia("(max-width: 768px)").matches ? fadeIn : fadeDown}
            href='#'
            className={styles.logo}
          >
            balazs.bardi
          </motion.a>
          <motion.ul
            initial='initial'
            animate='animate'
            variants={staggeredAnimation2}
            className={`${styles.navlinks} ${!active ? styles.closed : ""}`}
          >
            <motion.li variants={fadeDown}>
              <a onClick={() => setActive(false)} href='#'>
                Home
              </a>
            </motion.li>
            <motion.li variants={fadeDown}>
              <a onClick={() => setActive(false)} href='#about'>
                About
              </a>
            </motion.li>
            <motion.li variants={fadeDown}>
              <a onClick={() => setActive(false)} href='#projects'>
                Projects
              </a>
            </motion.li>
            <motion.li variants={fadeDown}>
              <a onClick={() => setActive(false)} href='#contact' className={styles.hirebtn}>
                Hire me
              </a>
            </motion.li>
          </motion.ul>
        </motion.nav>

        <motion.div
          variants={fadeIn}
          initial='initial'
          animate='animate'
          className={`${styles.hamburger} ${active ? styles.is_active : ""}`}
          onClick={() => setActive(!active)}
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </motion.div>
      </header>
    </InView>
  );
}
