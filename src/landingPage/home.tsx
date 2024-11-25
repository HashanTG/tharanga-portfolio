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


function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <SocialBar />
      <AboutSection />
      <Experience />
      <MarqueeBar />
      <Project />
      <Elect />
      <Flayers />
      <Carosel />

      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
// import React from 'react';