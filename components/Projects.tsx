import Link from "next/link";
import Image from "next/image";
import styles from "../styles/sections/projects.module.scss";
import placeholder from "../public/placeholder.jpg";

const ProjectCard = () => {
  console.log(placeholder);

  return (
    <div className={styles.project_card}>
      <div className={styles.image}>
        <Image
          src={placeholder}
          alt='Project Image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className={styles.project_content}>
        <h3>Project Title</h3>
        <p>
          Project description. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Amet veniam reiciendis quibusdam exercitationem
          error nam suscipit culpa quia laudantium.
        </p>
        <div className={styles.techstack_items}>
          <span>Tech Stack Item</span>
          <span>Tech Stack Item</span>
          <span>Tech Stack Item</span>
          <span>Tech Stack Item</span>
        </div>
        <div className={styles.project_card_buttons}>
          <Link href='/' passHref>
            <a>Source Code</a>
          </Link>
          <Link href='/' passHref>
            <a>Live Demo</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [1, 2, 3, 4];

  return (
    <div className={styles.main}>
      <h1>My Projects</h1>
      <div className={styles.projects_section}>
        {projects.map((_, i) => (
          <ProjectCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
