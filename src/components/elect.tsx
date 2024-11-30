import React from "react";

const images = [
  "/electpro/1.png", // Large left
  "/electpro/2.png", // Top center
  "/electpro/3.png", // Top right
  "/electpro/4.png", // Middle right
  "/electpro/5.png", // Middle left
  "/electpro/6.png", // Bottom left
  "/electpro/7.png", // Bottom center
  "/electpro/8.png", // Bottom right
  "/electpro/9.png", // Center
];

function Elect() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-2 py-8">
      <div
        className="grid grid-cols-6 grid-rows-4 gap-4 w-full max-w-5xl"
        style={{ aspectRatio: "16/9" }}
      >
        {/* Large left image */}
        <div className="col-span-2 row-span-2">
          <img
            src={images[0]}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        {/* Top center */}
        <div className="col-start-3 col-span-2 row-start-1 row-span-1">
          <img
            src={images[1]}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        {/* Top right */}
        <div className="col-start-5 col-span-2 row-start-1 row-span-1">
          <img
            src={images[2]}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        {/* Middle right (tall) */}
        <div className="col-start-5 col-span-2 row-start-2 row-span-2">
          <img
            src={images[3]}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        {/* Middle left (small) */}
        <div className="col-start-1 col-span-1 row-start-3 row-span-1">
          <img
            src={images[4]}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        {/* Bottom left */}
        <div className="col-start-1 col-span-2 row-start-4 row-span-1">
          <img
            src={images[5]}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        {/* Bottom center */}
        <div className="col-start-3 col-span-2 row-start-4 row-span-1">
          <img
            src={images[6]}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        {/* Bottom right */}
        <div className="col-start-5 col-span-2 row-start-4 row-span-1">
          <img
            src={images[7]}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        {/* Center image (small) */}
        <div className="col-start-3 col-span-2 row-start-2 row-span-2 flex items-center justify-center">
          <img
            src={images[8]}
            alt=""
            className="w-4/5 h-4/5 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Elect;
