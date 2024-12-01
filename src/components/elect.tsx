import React from "react";

const images = [
  "/electpro/1.png",
  "/electpro/2.png",
  "/electpro/3.png",
  "/electpro/4.png",
  "/electpro/5.png",
  "/electpro/6.png",
  "/electpro/7.png",
  "/electpro/8.png",
  "/electpro/9.png",
];

function Elect() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-2 py-8">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="aspect-square w-full rounded-xl overflow-hidden bg-neutral-900"
          >
            <img
              src={src}
              alt={`electpro-${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Elect;
