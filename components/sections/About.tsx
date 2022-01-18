import Image from "next/image";
import styles from "../../styles/components/sections/about.module.scss";

import { InView } from "react-intersection-observer";
import { SetStateAction } from "react";
import { Sections } from "../../pages";

const About = ({
  setOnScreen,
}: {
  setOnScreen: (value: SetStateAction<Sections>) => void;
}) => {
  return (
    <InView
      threshold={0.5}
      as='div'
      onChange={(inView) => (inView ? setOnScreen("About") : null)}
    >
      <div className={styles.main} id='about'>
        <h2>About me</h2>
        <div className={styles.text_content}>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              labore, neque magnam necessitatibus, veniam itaque rerum ab
              tenetur minus nisi ad saepe, natus earum laboriosam!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              labore, neque magnam necessitatibus, veniam itaque rerum ab
              tenetur minus nisi ad saepe, natus earum laboriosam!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              labore, neque magnam necessitatibus, veniam itaque rerum ab
              tenetur minus nisi ad saepe, natus earum laboriosam!
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              labore, neque magnam necessitatibus, veniam itaque rerum ab
              tenetur minus nisi ad saepe, natus earum laboriosam!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              labore, neque magnam necessitatibus, veniam itaque rerum ab
              tenetur minus nisi ad saepe, natus earum laboriosam!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              labore, neque magnam necessitatibus, veniam itaque rerum ab
              tenetur minus nisi ad saepe, natus earum laboriosam!
            </p>
          </div>
        </div>
      </div>
    </InView>
  );
};

export default About;
