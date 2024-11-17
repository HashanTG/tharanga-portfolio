import { StickyScroll } from "./ui/sticky-scroll-reveal"; // Adjust import path

const content = [
  {
    title: "Section 1",
    description: "Description for section 1",
    content: (
      <div>
        <img src="/public/project1.png" alt="" />
      </div>
    ),
  },

  {
    title: "Section 1",
    description: "Description for section 1",
    content: (
      <div>
        <img src="/public/project2.png" alt="" />
      </div>
    ),
  },
  {
    title: "Section 1",
    description: "Description for section 1",
    content: (
      <div>
        <img src="/public/project3.png" alt="" />
      </div>
    ),
  },
];

function Project() {
    return (
      <div>
        <div className="w-full bg-black">
          {" "}
          {/* Parent container with black background */}
          <StickyScroll
            content={content}
            contentClassName="bg-black" // Optional: if you want content area black
          />
        </div>
      </div>
    );
}

export default Project;
