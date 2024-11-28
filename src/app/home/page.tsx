"use client";

import '../globals.css';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  
    const [isMobile, setIsMobile] = useState(false);
    const [username, setUsername] = useState('');
    const [query, setQuery] = useState('');
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [challengeLink, setChallengeLink] = useState('');

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

    useEffect(() => {
      // Function to calculate the next Friday and update the challenge link
      const calculateNextChallengeLink = () => {
        const today = new Date();
        const daysUntilFriday = (5 - today.getDay() + 7) % 7; // 5 is Friday
        const nextFriday = new Date(today);
        nextFriday.setDate(today.getDate() + daysUntilFriday);

        // Instead of calculating the actual week number, we hardcode it to 9
        const weekNumber = 9; // Always set to week 9
        setChallengeLink(`https://unstop.com/p/codethon2k24-srm-easwari-engineering-college-1199852`);
      };

      calculateNextChallengeLink(); // Set the challenge link with week number 9
    }, []);
    
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      setIsLoading(true);

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, query }),
        });

        if (res.ok) {
          setStatus('Query Sent!');
          setUsername('');
          setQuery('');
        } else {
          setStatus('OOPS!! Try Again');
        }
      } catch (error) {
        console.error('Error:', error);
        setStatus('OOPS!! An Error Occurred, Please Try Again Later');
      } finally {
        setIsLoading(false);
      }
    };

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
          {/* <div className="relative mb-8">
          
            <img 
              src={isMobile ? "/hc.jpg" : "/hclg.jpg"} 
              alt="Event Poster" 
              className={`w-full ${isMobile ? 'h-auto' : 'h-96'} object-cover rounded-lg shadow-lg`} 
            />
          
            <div className="flex justify-center mt-4">
              <a href={challengeLink}>
                <button className="bg-blue-500 text-white px-4 py-2 text-base md:text-lg lg:text-xl rounded-lg hover:bg-blue-600 hover:shadow-lg focus:outline-none transition-all duration-300 ease-in-out">
                  Start Test
                </button>
              </a>
            </div>
          </div> */}

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
                      description: "Participate in our coding challenges designed to test and improve your skills in a fun and competitive environment."
                    },
                    {
                      imgSrc: "/hc3.jpg",
                      title: "Workshops on Emerging Technologies",
                      description: "Join our hands-on workshops to explore and learn about emerging technologies."
                    },
                    {
                      imgSrc: "/hc4.jpg",
                      title: "Knowledge Sharing in Our Tech Club",
                      description: "In our tech club, classmates share insights and expertise through workshops, discussions, and projects."
                    },
                    {
                      imgSrc: "/hc5.png",
                      title: "Fostering Growth Through Peer Support",
                      description: "In our tech club, senior members host weekly sessions to address questions and guide on technical topics."
                    },
                    {
                      imgSrc: "/hc2.png",
                      title: "Guest Lectures by Industry Experts",
                      description: "Gain insights from leading industry professionals who share their experiences and knowledge."
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
                        <p className={`text-black ${isMobile ? 'text-xs' : 'text-m'}`}>{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`shadow-lg rounded-lg p-6 mb-8 border-0 bg-transparent hover:shadow-2xl transition-all duration-300 ${isMobile ? 'text-sm' : 'text-lg'}`}>
            <p className={`mb-4 text-justify ${isMobile ? 'text-sm' : 'text-xl'} text-black`}>
              At TechSaavy, we're here for you beyond academics. This private and secure space is your platform to share anything on your mind—whether it’s about studies, personal matters, or career aspirations.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`bg-white bg-opacity-80 p-8 rounded-lg shadow-md transition-transform duration-300 hover:shadow-2xl ${isMobile ? 'text-xs' : 'text-base'}`}
            style={{ transform: isLoading ? 'scale(0.98)' : 'scale(1)' }}
          >
            <h3 className={`text-xl font-semibold mb-4 text-gray-900 ${isMobile ? 'text-lg' : 'text-2xl'}`}>
              Send Us a Message
            </h3>
            <div className="mb-4">
              <label
                htmlFor="username"
                className={`block ${isMobile ? 'text-sm' : 'text-lg'} font-medium text-gray-700 mb-2`}
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Let us know who you are"
                className="w-full p-3 border rounded-lg bg-gray-100 bg-opacity-70 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="query"
                className={`block ${isMobile ? 'text-sm' : 'text-lg'} font-medium text-gray-700 mb-2`}
              >
                Your Query
              </label>
              <textarea
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
                placeholder="Voice your thoughts here"
                className="w-full p-3 border rounded-lg bg-gray-100 bg-opacity-70 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out ${isMobile ? 'text-sm' : 'text-lg'} ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
              {status && (
                <p className={`text-${status === "Query Sent!" ? "green" : "red"}-500 text-sm`}>
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    );
}
