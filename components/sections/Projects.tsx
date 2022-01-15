import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/components/sections/projects.module.scss";
import placeholder from "../../public/placeholder.jpg";
import { InView } from "react-intersection-observer";
import { SetStateAction } from "react";
import { Sections } from "../../pages";

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

  return (
    <InView
      threshold={0.5}
      as='div'
      onChange={(inView) => (inView ? setOnScreen("Projects") : null)}
    >
      <div className={styles.main} id='projects'>
        <h2>My Projects</h2>
        <p className={styles.projects_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          aspernatur voluptatum maxime at molestias, aperiam saepe. Recusandae
          libero tempore laudantium.
        </p>
        <div className={styles.projects_section}>
          {projects.map((_, i) => (
            <ProjectCard key={i} />
          ))}
        </div>
      </div>
    </InView>
  );
};

export default Projects;
