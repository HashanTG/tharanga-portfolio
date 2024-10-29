import HeroSection from "../components/hero";
import NavBar from "../components/navbar";

import SocialBar from "../components/socialbar";
import AboutSection from "../components/aboutsection";
import Experience from "../components/experience";
import MarqueeBar from "../components/marqueebar";


function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <SocialBar />
      <AboutSection />
      <Experience />
      <MarqueeBar />
    </div>
  );
}

export default Home;
// import React from 'react';