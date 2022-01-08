import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/components/sections/hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.main} id='hero'>
      <div className={styles.text_content}>
        <h1>Creating beautiful experiences for the Web.</h1>
        <p>I’m here to help you with your Web development & design problems.</p>
        <div className={styles.links}>
          <Link href='#projects' passHref>
            <a>
              <Image src='/icons/see_m_w.svg' height={30} width={30} />
              <span>See my work</span>
            </a>
          </Link>
          <Link href='#contact' passHref>
            <a>
              <Image src='/icons/contact_me.svg' height={30} width={30} />
              <span>Contact me</span>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.coding}>
        <Image src='/coding.svg' height={1000} width={1000} />
      </div>
    </div>
  );
};

export default Hero;
