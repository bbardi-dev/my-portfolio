import type { NextPage } from "next";
import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <div className='container'>
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
