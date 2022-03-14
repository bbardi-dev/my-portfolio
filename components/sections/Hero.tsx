import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/components/sections/hero.module.scss";
import { InView } from "react-intersection-observer";
import { SetStateAction } from "react";
import { Sections } from "../../pages";
import { motion, Variants } from "framer-motion";

const Hero = ({
  setOnScreen,
}: {
  setOnScreen: (value: SetStateAction<Sections>) => void;
}) => {
  const headingAnimation: Variants = {
    animate: {
      transition: {
        delayChildren: 0.36,
        staggerChildren: 0.09,
      },
    },
  };
  const letterAnimation: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.96],
        duration: 1,
      },
    },
  };

  return (
    <InView
      as='div'
      onChange={(inView) => (inView ? setOnScreen("Hero") : null)}
    >
      <div className={styles.main} id='hero'>
        <div className={styles.text_content}>
          <motion.h1
            initial='initial'
            animate='animate'
            variants={headingAnimation}
          >
            {Array.from("Creating beautiful experiences for the Web.").map(
              (letter) => (
                <motion.span variants={letterAnimation}>{letter}</motion.span>
              )
            )}
          </motion.h1>
          <p>
            I’m here to help you with your Web development & design problems.
          </p>
          <div className={styles.links}>
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
          </div>
        </div>
        <div className={styles.coding}>
          <Image src='/coding.svg' height={1000} width={1000} />
        </div>
      </div>
    </InView>
  );
};

export default Hero;
