import React from "react";



import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

// Replace with your actual images
// const featureImages = [
//   "/path/to/feature1.png",
//   "/path/to/feature2.png",
//   "/path/to/feature3.png",
// ];

import { element1, element2, myself } from "../assets/assets";

const HeroSection: React.FC = () => {
  const [active, setActive] = useState<"cv" | "hire">("cv");
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black ">
      {/* Decorative Hello badge */}
      <div className="absolute ml-[25px] top-[20px] md:top-[80px] flex items-center justify-center">
        <div className="bg-[#232326] w-[105px] h-[45px] flex items-center justify-center text-5 font-light text-white px-4 py-1 rounded-full  shadow border border-white/20">
          Hello!
        </div>

        <img
          src={element1}
          alt="element1"
          className="ml-[3px] mb-[55px]"
        />
      </div>

      <div className="absolute flex flex-col items-center mb-28">
        <h1 className="text-[40px] md:text-[70px] font-bold text-white text-center">
          I&apos;m <span className="text-[#D5F60C]">&lt;Hashan/&gt;</span>
          ,<br />
        </h1>
        <h1 className="text-white text-[50px]">
          FullStack Developer | Designer
        </h1>

        <div className="mr-210">
          <img src={element2} alt="element2" />
        </div>
      </div>

      <div className="absolute  items-center mt-[260px]">
        <img src={myself} alt="Hashan" />

        {/* Toggle Button Group */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mt-[300px]">
          <div className="flex items-center  w-[367px] h-[82px] rounded-full px-2 py-2 shadow-lg bg-white/20 border border-white/30 backdrop-blur-md">
            {/* Download CV Button */}
            <button
              onClick={() => setActive("cv")}
              className={`flex items-center w-[208px] h-[62px] gap-2 px-7 py-2 rounded-full transition-all duration-200
              ${
                active === "cv"
                  ? "bg-[#A1B6F7] text-white shadow font-semibold"
                  : "bg-transparent text-[#A1B6F7] font-medium"
              }
            `}
            >
              Download CV
              <FiExternalLink
                className={`ml-1 text-lg ${
                  active === "cv" ? "text-white" : "text-[#A1B6F7]"
                }`}
              />
            </button>
            {/* Hire Me Button */}
            <button
              onClick={() => setActive("hire")}
              className={`ml-3 px-7 py-2 w-[120px] h-[62px] rounded-full transition-all duration-200
              ${
                active === "hire"
                  ? "bg-[#A1B6F7] text-white shadow font-semibold"
                  : "bg-transparent text-white font-medium"
              }
            `}
            >
              Hire me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
