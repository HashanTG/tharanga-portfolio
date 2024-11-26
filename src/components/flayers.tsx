import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const imageUrls = [
  "/public/flayers/2024 sinhala and tamil new year.png",
  "/public/flayers/2024 sinhala and tamil new year.png",
  "/public/flayers/2024 sinhala and tamil new year.png",
  "/public/flayers/2024 sinhala and tamil new year.png",
  "/public/flayers/2024 sinhala and tamil new year.png",
  "/public/flayers/2024 sinhala and tamil new year.png",
  "/public/flayers/2024 sinhala and tamil new year.png",
  "/public/flayers/2024 sinhala and tamil new year.png",

  // Add more image paths
];
  

function Flayers() {
    return (
      <div>
        <div className="py-20 bg-black">
          <InfiniteMovingCards
            items={imageUrls}
            direction="left"
            speed="normal"
            pauseOnHover={true}
            className="mx-auto"
          />
        </div>

    
      </div>
    );
}

export default Flayers;
