"use client";

import React, { useState, useEffect } from "react";
import { FloatingNavDemo } from './Navbar'; // Ensure Navbar is correctly imported
import { TypewriterEffectDemo } from './typewriter.tsx';

const TitleCard = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to detect window width and set isMobile state
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
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
          className={isMobile ? "w-24 h-auto" : "w-32 h-auto"} // Conditionally set size
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
