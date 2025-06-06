import React from "react";
import {
  FaLinkedinIn,
  
  FaGithub,
  FaStackOverflow,
  FaBehance,
  FaMedium,
  
  

} from "react-icons/fa";

//  import {  fiverr } from "../assets/assets";

import { FloatingDock } from "@/components/ui/floating-dock";


const dockItems = [
  {
    title: "LinkedinIn",
    icon: <FaLinkedinIn size={24} />,
    href: "www.linkedin.com/in/hashan-tharanga-gamage-4a4269240",
  },
  {
    title: "Medium",
    icon: <FaMedium size={24} />,
    href: "https://medium.com/@hashantharanga2001",
  },
  {
    title: "Github",
    icon: <FaGithub size={24} />,
    href: "https://github.com/HashanTG",
  },
  {
    title: "StackOverflow",
    icon: <FaStackOverflow size={24} />,
    href: "https://stackoverflow.com/users/22325274/hashan-tharanga",
  },
  {
    title: "Behance",
    icon: <FaBehance size={24} />,
    href: "https://www.behance.net/hashantharanga2001",
  },
  // {
  //   title: "Behance",
  //   icon:  { fiverr } ,
  //   href: "https://twitter.com/yourusername",
  // },
];

const SocialBar: React.FC = () => (
  <div className="w-full bg-black flex justify-center py-8 mt-[50px] md:mt-[250px]">
    {/* <div className="flex gap-10">
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
        href="https://medium.com/@hashantharanga2001"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Medium"
        className="text-white text-3xl"
      >
        
        <img src={medium} alt="" className="w-[30px] h-[30px]" />
      </a>
      <a
        href="https://github.com/HashanTG"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-white text-3xl"
      >
        <FaGithub />
      </a>
      <a
        href="https://stackoverflow.com/users/22325274/hashan-tharanga"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Stack Overflow"
        className="text-white text-3xl"
      >
        <FaStackOverflow />
      </a>
      <a
        href="https://www.behance.net/hashantharanga2001"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Behance"
        className="text-white text-3xl"
      >
        <FaBehance />
      </a>
      <a
        href="https://www.fiverr.com/gamagehashan/buying?source=avatar_menu_profile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-white text-3xl"
      >
        <img src={fiverr} alt="" className="w-[25px] h-[30px]" />
      </a>
    </div> */}

    <FloatingDock items={dockItems} />
  </div>
);

export default SocialBar;
