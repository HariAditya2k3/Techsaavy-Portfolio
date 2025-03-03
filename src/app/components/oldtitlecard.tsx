"use client";

import React, { useState, useEffect } from "react";
import { FloatingNavDemo } from './Navbar'; 
import { TypewriterEffectDemo } from './typewriter';

const TitleCard = () => {
  const [isMobile, setIsMobile] = useState(false);


  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720);
  };

  useEffect(() => {
 
    handleResize();
    window.addEventListener("resize", handleResize);

 
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
          ? "url('/Techsaavysm.gif')" 
          : "url('/Techsaavy.gif')", 
      }}
    >
   
      <div className="absolute top-4 left-4 flex items-center">
        <img 
          src={isMobile ? "/techsaavysm.svg" : "/techsaavy.svg"} 
          alt="Company Logo"
          className={isMobile ? "w-24 h-24" : "w-40 h-40"} 
        />
      </div>
      <div className="absolute top-4 right-4 flex items-center">
        <img
          src={isMobile ? "/cl-logo.png" : "/cl-logo.png"} 
          alt="College Logo"
          className={isMobile ? "w-14.5 h-8" : "w-60 h-30"}
        />
      </div>

   
      <div className="flex flex-col items-center flex-grow">
        <div className="sticky top-4 z-50">
          <FloatingNavDemo />
        </div>
        <TypewriterEffectDemo />
      </div>
    </div>
  );
};

export default TitleCard; 
