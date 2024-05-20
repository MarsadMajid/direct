"use client"
import React from "react";
import { useState, useEffect } from "react";

const TextAnimation = () => {
  const texts = [
    "Fashion for every moment.",
    "Style meets affordability.",
    "Unleash your style",
    "Discover endless possibilities.",
    "Elevate your wardrobe today.",
    "Shop smart, look fabulous.",
    "Trendsetting made easy.",
    "Your fashion destination awaits.",
    "Style that speaks volumes",
    "Find your perfect fit here.",
  ]; // Array of texts to cycle through
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // When index changes, update the text with animation
    const textElement = document.getElementById("text");
    textElement.classList.remove("scale-110"); // Remove hover scale effect
    textElement.classList.add("scale-110", "opacity-0"); // Add animation classes

    setTimeout(() => {
      setCurrentText(texts[index]); // Change text
      textElement.classList.remove("opacity-0"); // Remove opacity
    }, 500); // Same duration as the transition duration in the CSS
  }, [index]);

  return (
    <div className="container mx-auto text-center overflow-hidden">
      <div
        id="text"
        className="text-base font-normal text-white transition duration-500"
      >
        {currentText}
      </div>
    </div>
  );
};

export default TextAnimation;
