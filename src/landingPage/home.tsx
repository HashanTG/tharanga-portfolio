import HeroSection from "../components/hero";
import NavBar from "../components/navbar";

import SocialBar from "../components/socialbar";
import AboutMe from "../aboutus/aboutme";

function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <SocialBar />
      <AboutMe/>
    </div>
  );
}

export default Home;
// import React from 'react';