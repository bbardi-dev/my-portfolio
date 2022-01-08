import { useState } from "react";
import styles from "../styles/components/menu.module.scss";

export default function Menu() {
  const [active, setActive] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <nav className='container'>
          <a href='#' className={styles.logo}>
            Balazs.bardi
          </a>
          <ul className={`${styles.navlinks} ${!active ? styles.closed : ""}`}>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact' className={styles.hirebtn}>
                Hire me
              </a>
            </li>
          </ul>
        </nav>
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
