import type { NextPage } from "next";
import About from "../components/About";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <div className='container'>
      <Hero />
      <About />
      <Projects />
      <ContactForm />
    </div>
  );
};

export default Home;
