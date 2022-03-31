import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/components/sections/hero.module.scss";
import { InView } from "react-intersection-observer";
import { SetStateAction } from "react";
import { motion, Variants } from "framer-motion";
import { Sections } from "../../utils/types";

const Hero = ({ setOnScreen }: { setOnScreen: (value: SetStateAction<Sections>) => void }) => {
  const staggeredAnimation: Variants = window.matchMedia("(max-width: 768px)").matches
    ? {
        animate: {
          transition: {
            delayChildren: 0.36,
            staggerChildren: 0.24,
          },
        },
      }
    : {
        animate: {
          transition: {
            delayChildren: 1.2,
            staggerChildren: 0.36,
          },
        },
      };
  const fadeUp: Variants = {
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

  return (
    <InView as='div' onChange={(inView) => (inView ? setOnScreen("Hero") : null)}>
      <div className={styles.main} id='hero'>
        <motion.div
          initial='initial'
          animate='animate'
          variants={staggeredAnimation}
          className={styles.text_content}
        >
          <motion.h1 variants={fadeUp}>Creating beautiful experiences for the Web.</motion.h1>
          <motion.p variants={fadeUp}>
            I’m here to help you with your Web development & design problems.
          </motion.p>
          <motion.div variants={fadeUp} className={styles.links}>
            <Link href='#projects' passHref>
              <a>
                <Image src='/icons/see_m_w.svg' height={30} width={30} />
                <span>See my work</span>
              </a>
            </Link>
            <Link href='#contact' passHref>
              <a>
                <Image src='/icons/contact_me.svg' height={30} width={30} />
                <span>Contact me</span>
              </a>
            </Link>
          </motion.div>
        </motion.div>
        <div className={styles.coding}>
          <Image src='/coding.svg' height={1000} width={1000} />
        </div>
      </div>
    </InView>
  );
};

export default Hero;
