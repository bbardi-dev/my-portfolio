import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useState, useEffect, useRef } from "react";
import Loader from "../components/Loader";
import Menu from "../components/Menu";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import SideNav from "../components/SideNav";

export type Sections = "Hero" | "About" | "Projects" | "Contact";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [sectionOnScreen, setOnScreen] = useState<Sections>("Hero");
  const [navInView, setNavInView] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body")?.classList.add("loading")
      : document.querySelector("body")?.classList.remove("loading");
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: [0.6, 0.01, -0.05, 0.95],
            },
          }}
        >
          <Menu setNavInView={setNavInView} />
          <SideNav section={sectionOnScreen} navInView={navInView} />
          <div className='container'>
            <Hero setOnScreen={setOnScreen} />
          </div>
          <div className='container'>
            <About setOnScreen={setOnScreen} />
          </div>
          <div className='container'>
            <Projects setOnScreen={setOnScreen} />
          </div>
          <div className='container'>
            <Contact setOnScreen={setOnScreen} />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Home;
