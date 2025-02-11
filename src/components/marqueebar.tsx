
const items = [
  "UX Design",
  "App Design",
  "Fullstack",
  "Wireframe",
  "User Research",
];

export default function MarqueeBar() {
  return (
    <div className="w-full bg-black py-4 flex justify-center items-center mt-[100px]">
      <div className="relative w-[1800px] max-w-16xl h-[120px] rounded-bl-2xl rounded-tr-2xl overflow-hidden bg-[#d5f60c] flex items-center">
        {/* White slanted bar */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[120%] h-[56px] bg-white"
          style={{
            transform: "rotate(-3deg) translateY(-50%)",
            left: "-5%",
          }}
        />
        {/* Marquee text */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-full overflow-hidden z-20"
          style={{
            transform: "rotate(-3deg) translateY(-50%)",
            left: "-5%",
          }}
        >
          <div className="marquee-animation flex">
            {[...items, ...items].map((item, i) => (
              <span key={i} className="mx-3 text-3xl font-medium text-black">
                {item}
                {i !== [...items, ...items].length - 1 && (
                  <span className="mx-5 text-[#d5f60c] text-3xl font-bold align-middle">
                    ✦
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
