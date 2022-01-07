import type { NextPage } from "next";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";

const Home: NextPage = () => {
  return (
    <div>
      <div className='container'>
        <Hero />
      </div>
      <div className='container'>
        <About />
      </div>
      <div className='container'>
        <Projects />
      </div>
      <div className='container'>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
