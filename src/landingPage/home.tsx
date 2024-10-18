import HeroSection from "../components/hero";
import NavBar from "../components/navbar";

import SocialBar from "../components/socialbar";
import AboutSection from "../components/aboutsection";

function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <SocialBar />
      <AboutSection/>
    </div>
  );
}

export default Home;
// import React from 'react';