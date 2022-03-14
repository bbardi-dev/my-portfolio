import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/components/sections/projects.module.scss";
import placeholder from "../../public/placeholder.jpg";
import { InView } from "react-intersection-observer";
import { SetStateAction, useState } from "react";
import { Sections } from "../../pages";
import {
  AnimationControls,
  motion,
  TargetAndTransition,
  VariantLabels,
} from "framer-motion";

const ProjectCard = () => {
  return (
    <div className={styles.project_card}>
      <div className={styles.card_bg_yellow} />
      <div className={styles.card_bg_blue} />
      <div className={styles.card_bg_dark} />
      <div className={styles.image_container}>
        <div className={styles.image}>
          <Image
            src={placeholder}
            alt='Project Image'
            layout='fill'
            objectFit='cover'
            className={styles.nx_img}
          />
        </div>
      </div>
      <div className={styles.project_content}>
        <h3>Project Title</h3>
        <p>
          Project description. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Amet veniam reiciendis quibusdam exercitationem
          error nam suscipit culpa quia laudantium. Project description. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className={styles.techstack_items}>
          <span>Tech Stack Item</span>
          <span>Tech Stack Item</span>
          <span>Tech Stack Item</span>
          <span>Tech Stack Item</span>
        </div>
        <div className={styles.project_card_buttons}>
          <Link href='/' passHref>
            <a>
              <Image src='/icons/source_code.svg' height={20} width={20} />
              <span>Source Code</span>
            </a>
          </Link>
          <Link href='/' passHref>
            <a>
              <Image src='/icons/live_demo.svg' height={20} width={20} />
              <span>Live Demo</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects = ({
  setOnScreen,
}: {
  setOnScreen: (value: SetStateAction<Sections>) => void;
}) => {
  const projects = [1, 2, 3, 4, 5, 6];

  const [animation, setAnimation] = useState<
    boolean | AnimationControls | VariantLabels | TargetAndTransition
  >(false);

  const onViewChange = (inView: boolean) =>
    inView
      ? (setOnScreen("Projects"), setAnimation({ scale: 1, y: 0, opacity: 1 }))
      : null;

  return (
    <InView
      threshold={0.5}
      as='div'
      onChange={(inView) => onViewChange(inView)}
    >
      <div className={styles.main} id='projects'>
        <h2>My Projects</h2>
        <p className={styles.projects_description}>
          Here you can find some example projects I've worked on, either in a
          hobby or professional capacity. You can see a live preview and also
          see the code on Github for more details.
        </p>
        <motion.div
          initial={{ scale: 0.25, y: 1000, opacity: 0 }}
          animate={animation}
          className={styles.projects_section}
        >
          {projects.map((_, i) => (
            <ProjectCard key={i} />
          ))}
        </motion.div>
      </div>
    </InView>
  );
};

export default Projects;
