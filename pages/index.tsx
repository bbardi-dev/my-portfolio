import type { NextPage } from "next";
import styles from "../styles/index.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <h1>Welcome, my name is Balázs</h1>
        <h2>I'm a Software Engineer</h2>
      </div>
    </div>
  );
};

export default Home;
