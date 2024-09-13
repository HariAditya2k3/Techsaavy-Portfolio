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
      className={`bg-blue-100 text-black font-bold hover:shadow-2xl hover:border-gray-800 transition-all duration-600 shadow-lg rounded-lg ${isMobile ? 'bg-[url("/homecoversm.gif")]' : 'bg-[url("/homecover.gif")]'} bg-cover bg-center`}
    >
      <div className="p-8">
        <h1 className={`text-3xl font-bold mb-4 text-gray-900 ${isMobile ? 'text-2xl' : 'text-4xl'}`}>
          Share Your Thoughts
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
        <div className={`shadow-lg rounded-lg p-6 mb-8 border-0 bg-transparent hover:shadow-2xl transition-all duration-300 ${isMobile ? 'text-sm' : 'text-lg'}`}>
  <p className={`mb-4 ${isMobile ? 'text-sm' : 'text-lg'} text-black`}>
    At TechSaavy, we're here for you beyond academics. This private and secure space is your platform to share anything on your mind—whether it’s about studies, personal matters, or career aspirations. Think of it as more than a feedback form—it’s a place to seek guidance or support, and we’re committed to listening with care and confidentiality. Whatever you’re facing, your voice is important to us, and we’re here to help you grow and find direction.
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
              className="w-full p-3 border rounded-lg bg-gray-100 bg-opacity-70 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 ${isMobile ? 'text-sm' : 'text-base'}`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
          {status && (
            <p className="mt-6 text-center text-gray-700">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
