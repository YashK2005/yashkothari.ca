import React, { useEffect, useState } from "react";
import github from "./github.png";
import linkedin from "./linkedin.png";
import "./NavBar.css";

const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // State to track the current active link
  const [activeLink, setActiveLink] = useState("home");

  // Function to determine the active link based on the current URL
  const getActiveLink = (linkId: string) => {
    return activeLink === linkId ? "active" : "inactive";
  };

  // Function to handle URL changes and update the active link
  const handleUrlChange = () => {
    const currentPath = window.location.hash.substr(1); // Remove the '#' symbol
    setActiveLink(currentPath || "home"); // Default to "home" if no hash
  };

  // Use useEffect to call handleUrlChange when the URL changes
  useEffect(() => {
    handleUrlChange();
    window.addEventListener("hashchange", handleUrlChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("hashchange", handleUrlChange);
    };
  }, []);

  return (
    <nav className={`navbar ${getActiveLink("home")}`}>
      <a id="name" className={getActiveLink("home")} href="#home">
        Yash Kothari
      </a>
      <div>
        <a className={getActiveLink("about")} href="#about">
          About Me
        </a>
        <a className={getActiveLink("skills")} href="#skills">
          Skills & Achievements
        </a>
        <a className={getActiveLink("projects")} href="#projects">
          Projects
        </a>
        {/* Add GitHub and LinkedIn icons with links */}
        <a
          href="https://github.com/YashK2005"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className="social-icon" />
        </a>
        <a
          href="https://linkedin.com/in/yashkothari7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className="social-icon" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
