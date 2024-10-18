"use client";

import React, { useState, useEffect } from 'react';

const ContactPage = () => {
  const [username, setUsername] = useState('');
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Set initial value
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this runs once on mount

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
      className={`text-black font-bold hover:shadow-2xl hover:border-gray-800 transition-all duration-600 shadow-lg rounded-lg ${isMobile ? "bg-[url('/homecoversm.gif')]" : "bg-[url('/homecover.gif')]"}`}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="p-8">
        <h1 className={`text-3xl font-bold mb-4 text-gray-900 ${isMobile ? 'text-2xl' : 'text-4xl'}`}>
          Stay Connected
        </h1>
        

<div className="bg-gray-100 rounded-lg p-6 mb-8 shadow-md">
  <h2 className="text-2xl font-bold text-center mb-4">Membership Opening Soon!</h2>
  <p className="text-lg text-center mb-6">Join our community and be the first to know when memberships open. Stay tuned for exciting updates and opportunities.</p>
  <div className="flex justify-center">
    <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-600 transition-all duration-300">
      Register Your Interest
    </button>
  </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactPage;
