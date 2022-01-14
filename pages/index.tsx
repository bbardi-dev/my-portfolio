import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Menu from "../components/Menu";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);

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
          <Menu />
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
        </motion.div>
      )}
    </>
  );
};

export default Home;
