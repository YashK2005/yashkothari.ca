import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"; // Make sure to create a NavBar.css file in the same folder

const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <a id="name" href="#home">
        Yash Kothari
      </a>
      <div>
        <a href="#about">About Me</a>
        <a href="#skills">Skills & Achievements</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  );
};

export default NavBar;
