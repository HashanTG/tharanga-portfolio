import React from 'react'

import { experi, With } from "../assets/assets";

function Experience() {
  return (
    <div className="flex flex-col justify-center items-center mt-[75px]">
      <div className="flex flex-row  mb-[20px]">
        <h2 className="text-4xl md:text-5xl font-bold text-white mr-[10px]">
          Experience
        </h2>
        <img src={With} alt="" className="w-[50px] h-[45px]" />
      </div>
      <h4 className="text-white font-medium">
        I have experience with these tools and software.
      </h4>
      <h5 className="text-white font-extralight">
        Skilled in a range of tools and frameworks to build full-stack apps, IoT
        systems, and creative
      </h5>{" "}
      <h5 className="text-white font-extralight mb-[60px]">
        solutions with clean design and functionality.
      </h5>
      <img src={experi} alt="" />
    </div>
  );
}

export default Experience
