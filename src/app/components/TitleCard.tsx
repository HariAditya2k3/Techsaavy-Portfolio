"use client";

import React, { useState, useEffect } from "react";
import { FloatingNavDemo } from './Navbar'; // Ensure Navbar is correctly imported
import { TypewriterEffectDemo } from './typewriter.tsx';

const TitleCard = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to detect window width and set isMobile state
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720);
  };

  useEffect(() => {
    // Check the initial screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="
        relative text-white p-8 mb-8 rounded-lg shadow-xl flex items-center justify-between
        min-h-[200px]
        bg-cover bg-center
      "
      style={{
        backgroundImage: isMobile
          ? "url('/Techsaavysm.gif')" // Use smaller background for mobile
          : "url('/Techsaavy.gif')", // Use original background for desktop
      }}
    >
      {/* Logo on the Top-Left */}
      <div className="absolute top-4 left-4 flex items-center">
        <img 
          src={isMobile ? "/techsaavysm.svg" : "/techsaavy.svg"} // Conditionally load the logo based on screen size
          alt="Company Logo"
          className={isMobile ? "w-24 h-24" : "w-40 h-40"} // Increased size for desktop
        />
      </div>

      {/* College Logo on the Top-Right */}
      <div className="absolute top-4 right-4 flex items-center">
        <img
          src={isMobile ? "/cl-logo.png" : "/cl-logo.png"} // Conditionally load the college logo based on screen size
          alt="College Logo"
          className={isMobile ? "w-14.5 h-8" : "w-60 h-30"} // Further increased size in both width and height
        />
      </div>

      {/* Title and Navbar */}
      <div className="flex flex-col items-center flex-grow">
        <div className="sticky top-4 z-50">
          <FloatingNavDemo />
        </div>
        <TypewriterEffectDemo />
      </div>
    </div>
  );
};

export default TitleCard; // Ensure TitleCard is exported correctly
