import React from "react";
import {
  FaLinkedinIn,
  FaMediumM,
  FaGithub,
  FaStackOverflow,
  FaBehance,
  FaFacebookF,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/",
    label: "LinkedIn",
  },
  {
    icon: <FaMediumM />,
    url: "https://medium.com/",
    label: "Medium",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/",
    label: "GitHub",
  },
  {
    icon: <FaStackOverflow />,
    url: "https://stackoverflow.com/",
    label: "Stack Overflow",
  },
  {
    icon: <FaBehance />,
    url: "https://www.behance.net/",
    label: "Behance",
  },
  {
    icon: <FaFacebookF />,
    url: "https://facebook.com/",
    label: "Facebook",
  },
];

const SocialBar: React.FC = () => (
  <div className="w-full bg-black flex justify-center py-8">
    <div className="flex gap-10">
      {socialLinks.map((item, idx) => (
        <a
          key={idx}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="text-white text-3xl hover:text-lime-400 transition-colors"
        >
          {item.icon}
        </a>
      ))}
    </div>
  </div>
);

export default SocialBar;
