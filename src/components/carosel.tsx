
import Carousel from "@/components/ui/carousel";
 // Adjust the import path as necessary
const slides = [
  {
    title: "UX Design",
    button: "View Project",
    src: "/public/bbbbb.jpg", // Use the imported image variable directly
  },
  {
    title: "App Design",
    button: "See Details",
    src: "/public/aaaaa.jpg", // Use the imported image variable directly
  },

  {
    title: "App Design",
    button: "See Details",
    src: "/public/cccccc.jpg", // Use the imported image variable directly
  },
  {
    title: "App Design",
    button: "See Details",
    src: "/public/ddddd.JPG", // Use the imported image variable directly
  },
  {
    title: "App Design",
    button: "See Details",
    src: "/public/eeeeee.jpg", // Use the imported image variable directly
  },
  {
    title: "App Design",
    button: "See Details",
    src: "/public/fffffff.jpg", // Use the imported image variable directly
  },

  // Add more slides as needed
];


function Carosel() {
  return (
    <div className="mt-[100px]">
      <div className="flex flex-row items-center justify-center  mb-[50px]">
        <h2 className="text-4xl md:text-5xl font-bold text-white mr-[10px]">
          Mobile
        </h2>
        <img src="/public/photography.png" alt="" />
      </div>
      <Carousel slides={slides} />
    </div>
  );
}

export default Carosel
