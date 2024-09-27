"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
      className={`${inter.className} text-black font-bold hover:shadow-2xl hover:border-gray-800 transition-all duration-600 shadow-lg rounded-lg`}
      style={{
        backgroundImage: isMobile ? "url('/homecoversm.gif')" : "url('/homecover.gif')", // Conditional background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="p-4 sm:p-2 lg:p-8">



      <div className="relative mb-8">
  {/* Mobile and desktop view image */}
  <img 
    src={isMobile ? "/hc1.png" : "/hc1lg.png"} 
    alt="Event Poster" 
    className={`w-full ${isMobile ? 'h-auto' : 'h-96'} object-cover rounded-lg shadow-lg`} 
  />
  

  
  {/* Button for Challenge - Responsive and below the poster */}
  <div className="flex justify-center mt-4">
    <a href="https://www.hackerrank.com/weekly-code-challenge-second-years-week-6">
      <button className="bg-blue-500 text-white px-4 py-2 text-base md:text-lg lg:text-xl rounded-lg hover:bg-blue-600 hover:shadow-lg focus:outline-none transition-all duration-300 ease-in-out">
        Start Challenge
      </button>
    </a>
  </div>
</div>




        {/* Events Carousel */}
        <div className={`relative p-4 sm:p-6 mb-8 rounded-lg border-0 shadow-xl bg-transparent hover:shadow-2xl transition-all duration-300 ${isMobile ? 'h-auto' : 'h-auto'}`}>
          <h2 className={`text-xl font-bold mb-4 text-black ${isMobile ? 'text-lg' : 'text-2xl'}`}>
            Events We Organize
          </h2>
          <div className="relative overflow-x-auto custom-scrollbar">
            <div className="carousel flex space-x-4 overflow-auto">
              <div className="carousel-inner flex space-x-4">
                {[
                  {
                    imgSrc: "/hc1.jpg",
                    title: "Weekly Code Challenges",
                    description: "Participate in our coding challenges designed to test and improve your skills in a fun and competitive environment. Each month, tackle new problems and compete with your peers."
                  },
                  {
                    imgSrc: "/hc3.jpg",
                    title: "Workshops on Emerging Technologies",
                    description: "Join our hands-on workshops to explore and learn about emerging technologies. Whether it's AI, blockchain, or web development, our workshops provide practical experience and valuable skills."
                  },
                  {
                    imgSrc: "/hc4.jpg",
                    title: "Knowledge Sharing in Our Tech Club",
                    description: "In our tech club, classmates share insights and expertise through workshops, discussions, and projects, fostering collaboration and practical skill development. This peer-driven approach enhances learning and innovation."
                  },
                  {
                    imgSrc: "/hc5.png",
                    title: "Fostering Growth Through Peer Support",
                    description: "In our tech club, senior members host weekly sessions to address questions, clarify doubts, and guide on technical topics, fostering support, idea exchange, and community growth."
                  },
                  {
                    imgSrc: "/hc2.png",
                    title: "Guest Lectures by Industry Experts",
                    description: "Gain insights from leading industry professionals who share their experiences and knowledge on the latest trends and technologies. Our guest lectures are a great opportunity to learn from the best and network with experts."
                  }
                ].map((event, index) => (
                  <div
                    key={index}
                    className={`carousel-item border-0 rounded-lg overflow-hidden relative hover:shadow-2xl transition-transform transform hover:scale-105 ${isMobile ? 'w-48 h-auto' : 'w-72 h-100'} bg-transparent`}
                    style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                  >
                    <img src={event.imgSrc} alt={event.title} className="w-full object-cover" />
                    <div className={`p-2 ${isMobile ? 'text-xs' : 'p-4'}`}>
                      <h3 className={`font-semibold mb-2 ${isMobile ? 'text-sm' : 'text-lg'} text-gray-700`}>{event.title}</h3>
                      <p className={`text-black ${isMobile ? 'text-xs' : 'text-sm'}`}>{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
