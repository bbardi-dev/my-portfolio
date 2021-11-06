import type { NextPage } from "next";
import styles from "../styles/pages/about.module.scss";

const about: NextPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.text_content}>
        <h1>About me</h1>

        <p>This is a description about me.</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          dolorem ab veniam quasi et voluptatibus tempora nemo. Debitis, libero
          eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Autem dolorem ab veniam quasi et voluptatibus tempora nemo. Debitis,
          libero eveniet.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod
          ex harum atque sapiente incidunt reiciendis corrupti quas. Provident,
          eligendi. Cumque illo magnam sequi ab velit libero atque quidem, et,
          aliquid, voluptatum quisquam accusantium! Laudantium unde, provident
          ullam soluta incidunt quasi similique. Reiciendis laboriosam facilis
          esse! Et cupiditate saepe incidunt?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          dolorem ab veniam quasi et voluptatibus tempora nemo. Debitis, libero
          eveniet.
        </p>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Yo Mama</li>
        </ul>
      </div>
    </div>
  );
};

export default about;
