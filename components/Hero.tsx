import Link from "next/link";
import styles from "../styles/sections/hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.main} id='hero'>
      <h1>Welcome, my name is Balázs</h1>
      <p>
        I'm a Software Engineer. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A natus asperiores, veritatis facere ducimus
        cupiditate est laboriosam atque perferendis nostrum.
      </p>
      <div className={styles.links}>
        <Link href='#projects' passHref>
          <a>See my work</a>
        </Link>
        <Link href='#contact' passHref>
          <a>Contact me</a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
