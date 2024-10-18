"use client";

import Image from 'next/image';
import '../globals.css';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

// Hierarchical Members with Quotes
const hierarchicalMembers = [
  {
    name: 'Dr. N. Ananthi',
    position: 'Head of Department',
    quote: 'TechSaavy is a beacon for young innovators, driving the future of technology.',
    imageSrc: '/hod.png',
  },
  {
    name: 'Dr. K. Sundar',
    position: 'Staff Coordinator',
    quote: 'Fostering collaboration and continuous learning at TechSaavy.',
    imageSrc: '/sundar.png',
  },
  {
    name: 'Mr. Sanjay R.',
    position: 'Founder',
    quote: 'Bridging the gap between theory and practice in the tech field.',
    imageSrc: '/sanjay.png',
  },
  {
    name: 'Mr. Hari Aditya K.',
    position: 'Club Head',
    quote: 'Leading TechSaavy to new heights with passion and innovation.',
    imageSrc: '/hari.png',
  },
];

// Office Bearers
const officeBearers = [
  {
    name: 'CYRIL JUDE VICTOR V',
    position: 'ASSOCIATE HEAD',
    imageSrc: '/Cyril Jude Victor - Associate Head .jpg',
  },
  {
    name: 'Mr.Giridharan K.',
    position: 'OPERATIONS MANAGER',
    imageSrc: '/giri.png',
  },
  {
    name: 'Mr.Arul Kumaran K V.',
    position: 'FINANCIAL HEAD',
    imageSrc: '/arul.png',
  },
  {
    name: 'Ms.Sandra Infantia Rodrigo J.',
    position: 'PUBLIC RELATION OFFICER',
    imageSrc: '/sandra.png',
  },
  {
    name: 'Ms.Divya Sree M.',
    position: 'PROJECT HEAD',
    imageSrc: '/divya.png',
  },
  {
    name: 'MANOJ KANNA K',
    position: 'TECH LEAD',
    imageSrc: '/manojkanna.jpg',
  },
  {
    name: 'PADMA SURUTHI S',
    position: 'EVENT HEAD',
    imageSrc: '/Padma Suruthi S III B.jpg',
  },
  {
    name: 'NANDHEETHA V',
    position: 'ALUMNI NETWORK MANAGER',
    imageSrc: '/Nandheetha V III IT B.jpg',
  },
  {
    name: 'SAKTHI MANIKANDAN S',
    position: 'BRAND MANAGER',
    imageSrc: '/Sakthi Manikandan .jpg',
  },
  {
    name: 'GOWTHAM M',
    position: 'JOIN ASSOCIATE HEAD',
    imageSrc: '/Gowtham .jpg',
  },
  {
    name: 'DIYA U',
    position: 'INNOVATIVE LEAD',
    imageSrc: '/DIYA ID.jpg',
  },
  {
    name: 'VIBU SREE CHARAN M S',
    position: 'EVENT LEAD',
    imageSrc: '/Vibhu - Event Lead.jpg',
  },
  {
    name: 'LINGESH J',
    position: 'DESIGN LEAD',
    imageSrc: '/Lingesh J II B.JPG',
  },
  {
    name: 'RACHEL EVA',
    position: 'CONTENT LEAD',
    imageSrc: '/Rachel Eva.jpg',
  },
];

export default function About() {
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
      <div className={`p-4 ${isMobile ? 'p-6' : 'p-8'}`}>
        <h1 className={`text-3xl font-bold mb-4 text-gray-900 ${isMobile ? 'text-2xl' : 'text-4xl'}`}>
          Who We Are?
        </h1>

        {/* Logos Section */}
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} justify-center items-center gap-8 mb-8`}>
        <div className="relative w-72 h-72 overflow-hidden rounded-lg transition-transform transform hover:scale-105 ">
            <Image
              src="/cl-logo.png"
              alt="CL Logo"
              layout="fill"
              objectFit="contain"
              className="w-full h-full bg-transparent"
            />
          </div>
          <div className="relative w-40 h-40 overflow-hidden rounded-lg transition-transform transform hover:scale-105 ">
            <Image
              src="/techsaavy.svg"
              alt="TechSaavy Logo"
              layout="fill"
              objectFit="contain"
              className="w-full h-full bg-transparent"
            />
          </div>
          
        </div>

        {/* Introductory Section */}
        <div className={`mb-8 p-6 shadow-lg rounded-lg border-0 bg-transparent hover:shadow-2xl transition-all duration-300 ${isMobile ? 'text-sm' : 'text-lg'}`}>
          <p className={`mb-4 text-black text-justify ${isMobile ? 'text-xs' : 'text-lg'}`}>
            Welcome to TechSaavy, the official student-led club of the{' '}
            <span className={`font-bold text-blue-800 ${isMobile ? 'text-sm' : 'text-xl'}`}>
              Department of Information Technology
            </span>{' '}
            at Easwari Engineering College, Ramapuram, Chennai. Founded in 2022 by Mr. Sanjay R., TechSaavy is dedicated to bridging the gap between theoretical knowledge and practical application in the tech field. Under the current leadership of Mr. Hari Aditya, our club continues to thrive and grow, organizing a variety of events such as webinars, workshops, and doubt-clearing sessions. Our mission is to create a vibrant community where technology enthusiasts can come together to learn, innovate, and excel.
          </p>

          <p className={`mb-4 text-black text-justify ${isMobile ? 'text-xs' : 'text-lg'}`}>
            Managed by a passionate team of students and supported by our staff coordinator, Dr. K. Sundar, Assistant Professor of Information Technology, TechSaavy provides a collaborative platform for all members. Our department’s Head of Department, Dr. N. Ananthi, plays a pivotal role in guiding and providing the necessary resources to help the club flourish. Together, we are committed to empowering our members and fostering an environment where everyone has the opportunity to contribute and succeed.
          </p>
        </div>

        {/* Hierarchical Members Carousel */}
        <div className={`relative p-6 mb-8 rounded-lg border-0 shadow-xl bg-transparent hover:shadow-2xl transition-all duration-300`}>
          <h2 className={`text-3xl font-bold mb-8 text-gray-900 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Meet Our Leaders
          </h2>
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-2 gap-6'}`}>
            {hierarchicalMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-transparent rounded-lg shadow-lg overflow-hidden border-0 transition-transform transform hover:scale-105 hover:shadow-2xl`}
                style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              >
                <div className="relative flex flex-col items-center p-4">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    width={isMobile ? 100 : 150}
                    height={isMobile ? 100 : 150}
                    className="rounded-full mb-4"
                  />
                  <h3 className={`text-xl font-semibold text-gray-800 ${isMobile ? 'text-lg' : 'text-xl'}`}>{member.name}</h3>
                  <p className={`text-gray-800 mb-2 ${isMobile ? 'text-sm' : 'text-base'}`}>{member.position}</p>
                  <p className={`text-gray-900 italic text-center ${isMobile ? 'text-sm' : 'text-base'}`}>{`"${member.quote}"`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Office Bearers Carousel */}
        <div className={`relative p-6 rounded-lg border-0 shadow-xl bg-transparent hover:shadow-2xl transition-all duration-300`}>
          <h2 className={`text-3xl font-bold mb-8 text-gray-900 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Meet Our Team
          </h2>
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-3 gap-6'}`}>
            {officeBearers.map((bearer, index) => (
              <div
                key={index}
                className={`bg-transparent rounded-lg shadow-lg overflow-hidden border-0 transition-transform transform hover:scale-105 hover:shadow-2xl`}
                style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              >
                <div className="relative flex flex-col items-center p-4">
                  <Image
                    src={bearer.imageSrc}
                    alt={bearer.name}
                    width={isMobile ? 80 : 100}
                    height={isMobile ? 80 : 100}
                    className="rounded-full mb-4"
                  />
                  <h3 className={`text-xl font-semibold text-gray-800 ${isMobile ? 'text-lg' : 'text-xl'}`}>{bearer.name}</h3>
                  <p className={`text-gray-600 ${isMobile ? 'text-sm' : 'text-base'}`}>{bearer.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
