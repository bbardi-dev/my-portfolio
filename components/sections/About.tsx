import styles from "../../styles/components/sections/about.module.scss";
import { useInView } from "react-intersection-observer";
import { SetStateAction, useEffect } from "react";
import Image from "next/image";
import { Sections } from "../../utils/types";
import me from "../../public/me.png";
import { motion, useAnimation } from "framer-motion";
import { fadeUp } from "../../utils/animations";

const About = ({ setOnScreen }: { setOnScreen: (value: SetStateAction<Sections>) => void }) => {
  const controls = useAnimation();
  const [ref, isVisisble] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisisble) {
      setOnScreen("About");
      controls.start("animate");
    }
  }, [isVisisble]);

  return (
    <motion.div
      ref={ref}
      initial='initial'
      animate={controls}
      variants={fadeUp}
      className={styles.main}
      id='about'
    >
      <h2>About me</h2>
      <div className={styles.main_content}>
        <div className={styles.text_content}>
          <p>
            Hi, my name is Balázs, I'm a <span className={styles.highlighted}>fullstack developer </span>
            with an <span className={styles.highlighted}>eye for design</span>. As a developer I strive to
            <span className={styles.highlighted}> create products</span> that are both
            <span className={styles.highlighted}> beautiful and usable</span>. I have a great
            <span className={styles.highlighted}> passion for learning </span> and constant growth, which I
            apply to all areas of my life, including programming. I strive to understand the best practices
            in the industry to write{" "}
            <span className={styles.highlighted}>code that is fast, clean and maintainable</span>.
          </p>
          <p>
            I have some experience freelancing and building projects on my own, but currently{" "}
            <span className={styles.highlighted}>I'm looking for a full-time position</span>. If you think
            we'd be a good match, don't hesitate to reach out!
          </p>
          <p>Tech wise, my current focus is on:</p>
          <ul>
            <li>Javascript / Typescript</li>
            <li>React.js / Next.js</li>
            <li>CSS Frameworks, SCSS</li>
            <li>UI/UX, Figma</li>
            <li>Vue.js</li>
            <li>Node.js / Express.js</li>
            <li>REST APIs</li>
            <li>Unit testing, Jest, TDD</li>
          </ul>
        </div>

        <div className={styles.image_container}>
          <div className={styles.image_cover} />
          <Image quality={100} objectFit='cover' layout='fill' className={styles.image} src={me} />
          <div className={styles.image_border} />
          <div className={styles.image_border2} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
