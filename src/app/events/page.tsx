"use client";

import "../globals.css";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${inter.className} min-h-screen bg-black text-white p-6`}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-red-500 text-center mb-8">
          Events We Organize
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            {
              imgSrc: "/hc1.jpg",
              title: "Weekly Code Challenges",
              description: "Test and improve your coding skills.",
            },
            {
              imgSrc: "/hc3.jpg",
              title: "Workshops on Emerging Tech",
              description: "Explore the latest technologies.",
            },
            {
              imgSrc: "/hc4.jpg",
              title: "Knowledge Sharing",
              description: "Discuss and learn in our tech club.",
            },
            {
              imgSrc: "/hc5.png",
              title: "Peer Support Sessions",
              description: "Guidance from experienced peers.",
            },
            {
              imgSrc: "/hc2.png",
              title: "Guest Lectures",
              description: "Insights from industry experts.",
            },
          ].map((event, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl border-2 border-red-600 transition-transform duration-300 hover:scale-105 hover:shadow-red-600 hover:shadow-xl bg-gray-900"
            >
              {/* Image with 3D Effect */}
              <div className="relative">
                <img
                  src={event.imgSrc}
                  alt={event.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity"></div>
              </div>

              {/* Card Content */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-red-500 group-hover:text-red-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2">{event.description}</p>
              </div>

              {/* Glowing Border Animation */}
              <div className="absolute inset-0 rounded-xl border-2 border-red-500 opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_20px_#ff0000] transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
