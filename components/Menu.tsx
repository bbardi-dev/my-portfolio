import { useState } from "react";
import styles from "../styles/components/menu.module.scss";

export default function Menu() {
  const [active, setActive] = useState(false);

  return (
    <div></div>

    //Hamburger
    // <div
    //   className={`${styles.hamburger} ${active ? styles.is_active : ""}`}
    //   onClick={() => setActive(!active)}
    // >
    //   <span className={styles.line}></span>
    //   <span className={styles.line}></span>
    //   <span className={styles.line}></span>
    // </div>
  );
}
