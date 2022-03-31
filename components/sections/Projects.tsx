import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/components/sections/projects.module.scss";
import placeholder from "../../public/placeholder.jpg";
import { InView } from "react-intersection-observer";
import { SetStateAction } from "react";
import { Project, Sections } from "../../utils/types";
import { firstLetterToUppercase } from "../../utils/util";

export default function Projects({
  setOnScreen,
  projects,
}: {
  setOnScreen: (value: SetStateAction<Sections>) => void;
  projects: Project[];
}) {
  const onViewChange = (inView: boolean) => (inView ? setOnScreen("Projects") : null);

  return (
    <InView threshold={0.5} as='div' onChange={(inView) => onViewChange(inView)}>
      <div className={styles.main} id='projects'>
        <h2>My Projects</h2>
        <p className={styles.projects_description}>
          Here you can find some example projects I've worked on, either in a hobby or professional
          capacity. You can see a live preview and also see the code on Github for more details.
        </p>
        <div className={styles.projects_section}>
          {projects.map((p, i) => (
            <ProjectCard project={p} key={i} />
          ))}
        </div>
      </div>
    </InView>
  );
}

function ProjectCard({ project }: { project: Project }) {
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
        <h3 className={styles.project_title}>{project.name}</h3>
        <p className={styles.project_desc}>{project.description}</p>
        <div className={styles.techstack_items}>
          {project.repositoryTopics.edges.map((edge, i) => (
            <span key={edge.node.topic.name + i} className={styles.techstack_item}>
              {firstLetterToUppercase(edge?.node?.topic?.name)}
            </span>
          ))}
        </div>
        <div className={styles.project_card_buttons}>
          <Link href={project.url ?? "/"} passHref>
            <a className={styles.project_card_button}>
              <Image src='/icons/source_code.svg' height={20} width={20} />
              <span>Source Code</span>
            </a>
          </Link>
          <Link href={project.homepageUrl ?? "/"} passHref>
            <a className={styles.project_card_button}>
              <Image src='/icons/live_demo.svg' height={20} width={20} />
              <span>Live Demo</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
