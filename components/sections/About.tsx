import Image from "next/image";
import styles from "../../styles/components/sections/about.module.scss";
import { images } from "../../constants";

const About = () => {
  return (
    <div className={styles.main} id='about'>
      <h2 className='line_separate'>About me</h2>
      <div className={styles.text_content}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            labore, neque magnam necessitatibus, veniam itaque rerum ab tenetur
            minus nisi ad saepe, natus earum laboriosam!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            labore, neque magnam necessitatibus, veniam itaque rerum ab tenetur
            minus nisi ad saepe, natus earum laboriosam!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            labore, neque magnam necessitatibus, veniam itaque rerum ab tenetur
            minus nisi ad saepe, natus earum laboriosam!
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            labore, neque magnam necessitatibus, veniam itaque rerum ab tenetur
            minus nisi ad saepe, natus earum laboriosam!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            labore, neque magnam necessitatibus, veniam itaque rerum ab tenetur
            minus nisi ad saepe, natus earum laboriosam!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            labore, neque magnam necessitatibus, veniam itaque rerum ab tenetur
            minus nisi ad saepe, natus earum laboriosam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
