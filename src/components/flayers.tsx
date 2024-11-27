import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const imageUrls = [
  "/public/flayers/2024 sinhala and tamil new year.png",
  "/public/flayers/1717598158540.jpg",
  "/public/flayers/5456564.png",
  "/public/flayers/adv.png",
  "/public/flayers/advsaf.png",
  "/public/flayers/eid mubarak.png",
  "/public/flayers/ess_agm_common.png",
  "/public/flayers/final1223.png",

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
