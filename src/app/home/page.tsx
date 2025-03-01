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

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    useEffect(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
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
        className={`${inter.className} text-black font-bold hover:shadow-3xl hover:border-gray-800 transition-all duration-600 shadow-lg rounded-lg`}
        style={{
          backgroundImage: isMobile ? "none" : "url('/homecover.gif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="p-4 sm:p-2 lg:p-8">
          
          
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
  {
    imgSrc: "/ev1.png",
    title: "A workshop on UI/UX Design",
    description: "Master UI/UX design in our hands-on workshop!",
    participants: 1,
    amount: "100",
    date: "March 10, 2025",
    time: "10:00 AM",
    registrationLink: "https://forms.gle/JLFaHyPk8cy8ETt88"
  },
    {
      imgSrc: "/ev2.png",
      title: "Competetive Coding Contest",
      description: "Join our coding contest to solve problems within time limits and showcase your skills!",
      participants: 1,
      amount: "₹ 50",
      date: "March 11, 2025",
      time: "10:00 AM",
      registrationLink: "https://forms.gle/w9fndi6fZCEHJ3An6"
    },
    
    
    {
      imgSrc: "/ev3.png",
      title: "Debugging Challenge",
      description: "Join our Bug Hunt to find and fix bugs in code under time constraints!",
      participants: "2",
      amount: "₹ 100/team",
      date: "March 12, 2025",
      time: "10:00 AM",
      registrationLink: "https://forms.gle/JWcpuqJ6fEw3kydH7"
    },
    {
      imgSrc: "/ev4.png",
      title: "Hackathon",
      description: "Create innovative websites in our fast-paced hackathon!",
      participants: "2",
      amount: "₹ 500/team",
      date: "March 13, 2025",
      time: "10:00 AM",
      registrationLink: "https://forms.gle/1wGL612kfSaMXmkP6"
    },
    {
      imgSrc: "/ev5.png",
      title: "Paper Presentation",
      description: "Present your ideas and research to a knowledgeable audience in our paper presentation!",
      participants: "2-4",
      amount: "₹ 200/team",
      date: "March 14, 2025",
      time: "10:00 AM",
      registrationLink: "https://forms.gle/bApaqaqwFDzAWuhq9"
      }
            ].map((event, index) => (
    
              <a
              key={index}
              href={event.registrationLink}
              className="border-0 rounded-lg overflow-hidden relative hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer hover:translate-z-4 mb-6"
            >
              <div className="w-full h-80 relative">
                <img
                  src={event.imgSrc}
                  alt={event.title}
                  className="w-full h-full object-contain"  
                />
        
                <div className="absolute top-2 right-2 bg-white bg-opacity-90 p-2 text-sm text-black rounded-lg shadow-md">
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className={`font-semibold mb-2 text-black text-center ${isMobile ? 'text-sm' : 'text-lg'}`}>{event.title}</h3>
                <p className="text-black text-sm mb-4 flex-grow">{event.description}</p>
                <div className="flex justify-between items-center">
                
                  <div className="text-left text-black text-bold text-sm">
                    <p>Max Participants: {event.participants}</p>
                    <p>Amount: {event.amount}</p>
                  </div>
               
                  <div className="block py-4 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200">
                    Register Now
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>



          <form
            onSubmit={handleSubmit}
            className={`bg-white bg-opacity-80 p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-2xl ${isMobile ? 'text-xs' : 'text-base'}`}
            style={{ transform: isLoading ? 'scale(0.98)' : 'scale(1)' }}
          >
            <h3 className={`text-xl font-semibold mb-4 text-gray-900 ${isMobile ? 'text-lg' : 'text-2xl'}`}>
              Raise Your Query
            </h3>
            <div className="mb-4">
              <label htmlFor="username" className={`block ${isMobile ? 'text-sm' : 'text-lg'} font-medium text-gray-700 mb-2`}>
                Name
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Name"
                className="w-full p-3 border rounded-lg bg-gray-100 bg-opacity-70 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="query" className={`block ${isMobile ? 'text-sm' : 'text-lg'} font-medium text-gray-700 mb-2`}>
                Your Query
              </label>
              <textarea
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
                placeholder="Type your query here..."
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
