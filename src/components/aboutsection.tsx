import React from "react";

// Replace these imports with your actual image paths
import leftimage from "../assets/leftimage.png";
import rightimage from "../assets/rightimage.png";

import { Me} from "../assets/assets"; // Assuming you have an image for yourself

const AboutSection: React.FC = () => (
  <section className="w-full min-h-screen flex items-center justify-center bg-black px-4 py-16 mt-[50px]">
    <div className=" w-full flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Left Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={leftimage}
          alt="Project work"
          className="w-[500px] h-[640px] rounded-xl shadow-lg rotate-[0deg] ml-0"
        />
      </div>

      {/* Center Content */}
      <div className="flex-1 flex flex-col items-center text-center">
        <div className="flex flex-row ">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 mr-[10px]">
            About
          </h2>
          <img src={Me} alt="" className="w-[50px] h-[50px]"/>
        </div>

        <p className="text-gray-200 font-light mb-6 max-w-xl">
          I'm Hashan Tharanga, a full-stack developer with a passion for
          building complete digital solutions—clean interfaces, robust backends,
          and scalable deployments.
          <br />
          <br />
          I also work on IoT and embedded systems, blending hardware with smart
          software. Beyond code, I specialize in graphic design and video
          editing, combining creativity with technology.
          <br />
          <br />
          In my free time, I enjoy playing the guitar and exploring new places
          for inspiration.
        </p>
        <button className="mt-2 px-10 py-3 bg-[#A1B6F7] text-white font-semibold rounded-full shadow-md hover:bg-[#8ea5e3] transition">
          Contact
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={rightimage}
          alt="Robotics"
          className="w-[500px] h-[640px] rounded-xl shadow-lg rotate-[0deg] mr-0"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
