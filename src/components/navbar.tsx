import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  "Home",
  "About",
  "Experience",
  "Project",
  "Works",
  "Contact",
];

const scrollToSection = (section: string) => {
  const el = document.getElementById(section.toLowerCase());
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const NavBar: React.FC = () => {
  const [active, setActive] = useState("Home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="w-full bg-black min-h-[100px] flex items-center justify-center">
      {/* Desktop Navbar */}
      <nav className="hidden md:flex w-[1300px] max-w-[1600px] mx-auto mt-8 justify-between items-center px-2 py-2 rounded-full border border-gray-400 bg-[#181818] shadow-[0_0_32px_0_rgba(0,0,0,0.7)]">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() =>{
              setActive(item);
              scrollToSection(item);
            }}
            className={`flex-1 text-center py-3 rounded-full font-medium text-white transition
              ${active === item
                ? "bg-[#232326] font-bold shadow"
                : "bg-transparent font-normal"
              }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden absolute left-4  z-50 text-white"
        onClick={() => setDrawerOpen(true)}
        aria-label="Open menu"
      >
        <HiMenu size={32} />
      </button>

      {/* Drawer for Mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      />

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-3/4 max-w-xs bg-[#181818] border-r border-gray-700 shadow-lg transform transition-transform duration-300
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <span className="text-lg font-bold text-white">Menu</span>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            className="text-white"
          >
            <HiX size={28} />
          </button>
        </div>
        <nav className="flex flex-col gap-2 mt-4 px-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                setDrawerOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-full font-medium text-white transition
                ${active === item
                  ? "bg-[#232326] font-bold shadow"
                  : "bg-transparent font-normal"
                }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>
    </header>
  );
};

export default NavBar;
