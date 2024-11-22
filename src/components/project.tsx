import { StickyScroll } from "./ui/sticky-scroll-reveal"; // Adjust import path

const content = [
  {
    title: "RosaLover E-Commerce",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audioinformation about each track. Create and save new playlists ofrecommended tracks based on your existing playlists and more.",
    content: (
      <div>
        <img src="/public/project1.png" alt="" />
      </div>
    ),
  },

  {
    title: "Bodimaklk ",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audioinformation about each track. Create and save new playlists ofrecommended tracks based on your existing playlists and more.",
    content: (
      <div>
        <img src="/public/project2.png" alt="" />
      </div>
    ),
  },
  {
    title: "Section 1",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audioinformation about each track. Create and save new playlists ofrecommended tracks based on your existing playlists and more.",
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
        <div className="w-full mt-[100px]">
          {" "}
          
          <StickyScroll
            content={content}
            contentClassName="bg-black" // Optional: if you want content area black
          />
        </div>
      </div>
    );
}

export default Project;
