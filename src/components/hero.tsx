import React from "react";

// Replace with your actual images
// const featureImages = [
//   "/path/to/feature1.png",
//   "/path/to/feature2.png",
//   "/path/to/feature3.png",
// ];

import { element1, element2, myself } from "../assets/assets";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Decorative Hello badge */}
      <div className="absolute top-[100px] flex items-center mb-4">
        <div className="bg-[#232326] w-[105px] h-[45px] flex items-center justify-center text-5 font-light text-white px-4 py-1 rounded-full  shadow border border-white/20">
          Hello!
        </div>

        <img src={element1} alt="element1" className="ml-[3px] mb-[55px]" />
      </div>

      <div className="flex flex-col items-center mt-40">
        <h1 className="text-[70px]  font-bold text-white text-center mt-1">
          I&apos;m <span className="text-[#D5F60C]">&lt;Hashan/&gt;</span>
          ,<br />
        </h1>
        <h1 className="text-white text-[50px]">
          FullStack Developer | Designer
        </h1>

        <div className="absolute mt-40 mr-210">
          <img src={element2} alt="element2" />
        </div>
      </div>

      <div className="absolute  items-center mt-[600px]">
        <img src={myself} alt="Hashan" />
      </div>
    </section>
  );
};

export default HeroSection;
