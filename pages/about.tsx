import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/pages/about.module.scss";
import { images } from "../constants";

const about: NextPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.text_content}>
        <h1>About me</h1>

        <p>This is a description about me.</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          dolorem ab veniam quasi et voluptatibus tempora nemo. Debitis, libero
          eveniet.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          dolorem ab veniam quasi et voluptatibus tempora nemo. Debitis, libero
          eveniet.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          dolorem ab veniam quasi et voluptatibus tempora nemo. Debitis, libero
          eveniet.
        </p>
      </div>
      <div className={styles.images}>
        {images.map((val, i) => (
          <div className={styles.image} key={i}>
            <Image
              src={`/dev-icons/${val}.svg`}
              layout='fill'
              objectFit='fill'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default about;
