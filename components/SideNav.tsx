import { motion } from "framer-motion";

import styles from "../styles/components/sidenav.module.scss";
import { Sections } from "../utils/types";

export default function SideNav({ section, navInView }: { section: Sections; navInView: boolean }) {
  return (
    <motion.div className={styles.side_nav} style={navInView ? { display: "none" } : {}}>
      <div className={styles.nav_inner}>
        <a href='#' className={`${styles.nav_dot} ${section === "Hero" ? styles.dot_active : ""}`}>
          <span>Home</span>
        </a>
        <a href='#about' className={`${styles.nav_dot} ${section === "About" ? styles.dot_active : ""}`}>
          <span>About</span>
        </a>
        <a
          href='#projects'
          className={`${styles.nav_dot} ${section === "Projects" ? styles.dot_active : ""}`}
        >
          <span>Projects</span>
        </a>
        <a
          href='#contact'
          className={`${styles.nav_dot} ${section === "Contact" ? styles.dot_active : ""}`}
        >
          <span>Contact</span>
        </a>
      </div>
    </motion.div>
  );
}
