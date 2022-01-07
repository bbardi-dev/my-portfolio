import Image from "next/image";
import styles from "../../styles/components/sections/about.module.scss";
import { images } from "../../constants";

const About = () => {
  return (
    <div className={styles.main} id='about'>
      <h2 className='line_separate'>About me</h2>
      <div className={styles.text_content}>
        <p>This is a description about me.</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          dolorem ab veniam quasi et voluptatibus tempora nemo. Debitis, libero
          eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Autem dolorem ab veniam quasi et voluptatibus tempora nemo. Debitis,
          libero eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Autem dolorem ab veniam quasi et voluptatibus tempora nemo.
          Debitis, libero eveniet.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          dolorem ab veniam quasi et voluptatibus tempora nemo. Debitis, libero
          eveniet.
        </p>
      </div>

      {/* <div className={styles.images}>
        {images.map((val, i) => (
          <div className={styles.image} key={i}>
            <Image
              src={`/dev-icons/${val}.svg`}
              layout='fill'
              objectFit='fill'
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default About;
