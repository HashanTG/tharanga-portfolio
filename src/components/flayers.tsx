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
  "/public/flayers/sdggdsg.png",
  "/public/flayers/women.png",

  // Add more image paths
];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import {Design} from "../assets/assets";

function Flayers() {
    return (
      <div>
        <div className="py-20 bg-black mt-[100px]">
          <div className="flex flex-row mb-[30px] items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mr-[10px]">
              Graphic
            </h2>
            <img src={Design} alt="" className="w-[50px] h-[45px]" />
          </div>
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
