import React from "react";
import "./ScrollDownButton.css";

interface ScrollDownButtonProps {
  targetId: string; // The ID of the element to scroll to
}

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({ targetId }) => {
  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);
    targetElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-down-button" onClick={scrollToTarget}>
      <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
        <circle cx="12" cy="12" r="10" fill="white" />
        <path d="M8 10l4 4 4-4" />
      </svg>
    </div>
  );
};

export default ScrollDownButton;
