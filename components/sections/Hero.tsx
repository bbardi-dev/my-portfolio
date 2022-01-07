import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/components/sections/hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.main} id='hero'>
      <div>
        <h1>Creating beautiful experiences for the Web.</h1>
        <p>I’m here to help you with your Web development & design problems.</p>
        <div className={styles.links}>
          <Link href='#projects' passHref>
            <a>See my work</a>
          </Link>
          <Link href='#contact' passHref>
            <a>Contact me</a>
          </Link>
        </div>
      </div>
      <Image src='/coding.svg' height={600} width={600} />
    </div>
  );
};

export default Hero;
