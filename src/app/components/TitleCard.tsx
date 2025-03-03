"use client";

import React, { useState, useEffect } from "react";
import { FloatingNavDemo } from './Navbar';

const TitleCard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="
      relative flex items-center justify-between min-h-[400px] p-8 rounded-2xl 
      shadow-2xl bg-cover bg-center transition-all duration-500
      before:absolute before:inset-0 before:bg-black/30 before:rounded-2xl
      transform perspective-[1200px] hover:rotate-x-[8deg] hover:rotate-y-[8deg]
      hover:scale-[1.05] hover:shadow-[0_0_25px_rgba(255,0,0,0.8)]
      after:absolute after:w-full after:h-full after:top-0 after:left-0 after:rounded-2xl 
      after:border-[3px] after:border-transparent hover:after:border-red-600 overflow-hidden"
      style={{
        backgroundImage: isMobile ? "url('/Techsaavysm.gif')" : "url('/Techsaavy.gif')",
      }}
    >
      <div className="relative z-10 pr-6">
        <FloatingNavDemo />
      </div>
    </div>
  );
};

export default TitleCard;
