import React from "react";
import "./HeroPage.css";
import backgroundImage from "./hero_background_image.png"; // Import your background image
import ScrollDownButton from "../ScrollDownButton/ScrollDownButton";

const HeroPage = () => {
  return (
    <div className="hero">
      <h1>Yash Kothari</h1>
      <img src={backgroundImage} alt="Silhoutte of mountain and forest" />
      <ScrollDownButton targetId="about" />
    </div>
  );
};

export default HeroPage;
