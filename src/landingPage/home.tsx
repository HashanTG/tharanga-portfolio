import HeroSection from "../components/hero";
import NavBar from "../components/navbar";
// import AboutMe from "../aboutus/aboutme";
import SocialBar from "../components/mainsocial";

function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      {/* <AboutMe/> */}
      <SocialBar/>
    </div>
  );
}

export default Home;
// import React from 'react';