import React from "react";
import { FloatingNavDemo } from './Navbar'; // Ensure Navbar is correctly imported
import { TypewriterEffectDemo } from './typewriter.tsx';


const TitleCard = () => {
  return (
    <div
  className="relative  text-white p-8 mb-8 rounded-lg shadow-xl flex items-center justify-between min-h-[200px] bg-[url('/Techsaavy.gif')] bg-cover bg-center">

          
        
      {/* Logo on the Top-Left */}
      <div className="absolute top-4 left-4 flex items-center">
        <img 
          src="/techsaavy.svg" // Correct path to logo in the public directory
          alt="Company Logo"
          className="w-32 h-auto"
        />
      </div>

      {/* Title and Navbar */}
      <div className="flex flex-col items-center flex-grow">
        <div className="sticky top-4 z-50">
          <FloatingNavDemo />
        </div>
       < TypewriterEffectDemo />
      </div>
    </div>
  );
};

export default TitleCard; // Ensure TitleCard is exported correctly
