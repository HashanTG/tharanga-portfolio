import HeroSection from "../components/hero";
import NavBar from "../components/navbar";

import SocialBar from "../components/socialbar";
import AboutSection from "../components/aboutsection";
import Experience from "../components/experience";
import MarqueeBar from "../components/marqueebar";
import Carosel from "@/components/carosel";
import Project from "@/components/project";
import Flayers from "@/components/flayers";
import Elect from "@/components/elect";
import ContactForm from "@/components/contact";
import Footer from "@/components/footer";
import BackToTop from "@/components/backtotop";


function Home() {
  return (
    <div>
      <NavBar />
      <div id="home">
        <HeroSection />
      </div>
      <SocialBar />
      <div id="about">
        <AboutSection />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <MarqueeBar />
      <div id="project">
        <Project />
      </div>
      <Elect />
      <div id="flayers">
        <Flayers />
      </div>
      <Carosel />

      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Home;
// import React from 'react';