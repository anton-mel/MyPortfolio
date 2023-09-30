import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
// import Contributions from "../components/Contributions/Contributions";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      {/* <Contributions /> */}
      <Contact />      
      <FixSocialIcon />
      <Footer />
    </>
  );
}

export default Home;
