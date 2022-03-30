import styles from "../../styles/components/sections/about.module.scss";
import { InView } from "react-intersection-observer";
import { SetStateAction } from "react";
import Image from "next/image";
import { Sections } from "../../utils/types";
import me from "../../public/me.png";

const About = ({ setOnScreen }: { setOnScreen: (value: SetStateAction<Sections>) => void }) => {
  return (
    <InView threshold={0.5} as='div' onChange={(inView) => (inView ? setOnScreen("About") : null)}>
      <div className={styles.main} id='about'>
        <h2>About me</h2>
        <div className={styles.main_content}>
          <div className={styles.text_content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro labore, neque magnam
              necessitatibus, veniam itaque rerum ab tenetur minus nisi ad saepe, natus earum laboriosam!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro labore, neque magnam
              necessitatibus, veniam itaque rerum ab tenetur minus nisi ad saepe, natus earum laboriosam!
            </p>
            <ul>
              <li>Javascript/Typescript</li>
              <li>React/Vue</li>
              <li>Node.js</li>
            </ul>
          </div>

          <div className={styles.image_container}>
            <div className={styles.image_cover} />
            <Image
              quality={100}
              objectFit='cover'
              className={styles.image}
              width={360}
              height={360}
              src={me}
            />
            <div className={styles.image_border} />
            <div className={styles.image_border2} />
          </div>
        </div>
      </div>
    </InView>
  );
};

export default About;
