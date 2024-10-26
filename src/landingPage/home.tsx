import HeroSection from "../components/hero";
import NavBar from "../components/navbar";

import SocialBar from "../components/socialbar";
import AboutSection from "../components/aboutsection";
import Experience from "../components/experience";

function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <SocialBar />
      <AboutSection />
      <Experience/>
    </div>
  );
}

export default Home;
// import React from 'react';