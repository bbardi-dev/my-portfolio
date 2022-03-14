import { useState } from "react";
import InView from "react-intersection-observer";
import styles from "../styles/components/menu.module.scss";

export default function Menu({ setNavInView }: any) {
  const [active, setActive] = useState(false);

  return (
    <InView as='div' onChange={(inView) => setNavInView(inView)}>
      <header className={styles.header}>
        <nav className='container'>
          <a href='#' className={styles.logo}>
            balazs.bardi
          </a>
          <ul className={`${styles.navlinks} ${!active ? styles.closed : ""}`}>
            <li>
              <a onClick={() => setActive(false)} href='#'>
                Home
              </a>
            </li>
            <li>
              <a onClick={() => setActive(false)} href='#about'>
                About
              </a>
            </li>
            <li>
              <a onClick={() => setActive(false)} href='#projects'>
                Projects
              </a>
            </li>
            <li>
              <a onClick={() => setActive(false)} href='#contact' className={styles.hirebtn}>
                Hire me
              </a>
            </li>
          </ul>
        </nav>

        <div
          className={`${styles.hamburger} ${active ? styles.is_active : ""}`}
          onClick={() => setActive(!active)}
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </div>
      </header>
    </InView>
  );
}
