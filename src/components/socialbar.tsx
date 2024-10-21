import React from "react";
import {
  FaLinkedinIn,
  
  FaGithub,
  FaStackOverflow,
  FaBehance,

} from "react-icons/fa";

import { medium, fiverr } from "../assets/assets"; 

const SocialBar: React.FC = () => (
  <div className="w-full bg-black flex justify-center py-8 mt-[250px]">
    <div className="flex gap-10">
      <a
        href="www.linkedin.com/in/hashan-tharanga-gamage-4a4269240"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-white text-3xl"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://medium.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Medium"
        className="text-white text-3xl"
      >
        {/* <FaMediumM /> */}
        <img src={medium} alt="" className="w-[30px] h-[30px]" />
      </a>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-white text-3xl"
      >
        <FaGithub />
      </a>
      <a
        href="https://stackoverflow.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Stack Overflow"
        className="text-white text-3xl"
      >
        <FaStackOverflow />
      </a>
      <a
        href="https://www.behance.net/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Behance"
        className="text-white text-3xl"
      >
        <FaBehance />
      </a>
      <a
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-white text-3xl"
      >
        <img src={fiverr} alt="" className="w-[25px] h-[30px]" />
      </a>
    </div>
  </div>
);

export default SocialBar;
