import { useState } from "react";
import styles from "../styles/components/menu.module.scss";

export default function Menu() {
  const [active, setActive] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className='container'>
          <a href='#' className={styles.logo}>
            Balazs.bardi
          </a>
          <div className={styles.navlinks}>
            <a href='#'>Home</a>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#contact' className={styles.hirebtn}>
              Hire me
            </a>
          </div>
        </div>
      </header>

      <div
        className={`${styles.hamburger} ${active ? styles.is_active : ""}`}
        onClick={() => setActive(!active)}
      >
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </div>
    </>
  );
}
