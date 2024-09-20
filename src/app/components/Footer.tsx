'use client';
import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check screen size on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className={`bg-blue-500 text-white py-8 mt-8 ${isMobile ? "text-xs" : "text-base"}`}>
      <div className={`container mx-auto flex flex-col items-center justify-center ${isMobile ? "px-4" : "px-8"}`}>
        {/* First Row: Social Media Icons */}
        <div className="flex items-center justify-center mb-4">
          <a
            href="https://www.instagram.com/techsaavyiteec?igsh=MXR1MWRwcGszbDVqNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 flex items-center mx-4"
          >
            <FaInstagram className={`text-${isMobile ? '2xl' : '3xl'}`} />
          </a>
          <a
            href="https://www.linkedin.com/in/techsaavy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 flex items-center mx-4"
          >
            <FaLinkedin className={`text-${isMobile ? '2xl' : '3xl'}`} />
          </a>
        </div>
        
        {/* Second Row: Address */}
        <div className="flex flex-col items-center text-center mb-4">
          <div className="flex items-center justify-center mb-2">
            <FaMapMarkerAlt className={`text-${isMobile ? 'xl' : '3xl'} mr-2`} />
            <p className={`mb-0 ${isMobile ? "text-xs max-w-xs" : "text-base"}`}>
              Department of Information Technology
            </p>
          </div>
          <p className={`mb-0 text-justify${isMobile ? "text-xs max-w-xs" : "text-base"}`}>
            Main Block,2nd Floor,SRM Easwari Engineering College,<br/>
            Ramapuram, Chennai-89
          </p>
        </div>
      </div>
      <p className={`mt-4 text-center ${isMobile ? "text-xs" : "text-base"}`}>&copy; {new Date().getFullYear()} Techsaavy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
