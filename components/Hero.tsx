import Link from "next/link";
import styles from "../styles/sections/hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.main}>
      <h1>Welcome, my name is Balázs</h1>
      <h2>I'm a Software Engineer</h2>
      <div className={styles.links}>
        <Link href='/projects' passHref>
          <a>See my work</a>
        </Link>
        <Link href='/about' passHref>
          <a>About me</a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
