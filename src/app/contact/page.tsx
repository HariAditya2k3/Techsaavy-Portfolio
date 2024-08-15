"use client";

import React, { useState } from 'react';

const ContactPage = () => {
  const [username, setUsername] = useState('');
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      setStatus('OOPS!! An Error Occured , Please Try again Later');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-blue-100 text-gray-800 hover:shadow-2xl hover:border-gray-800 transition-all duration-600 shadow-lg rounded-lg bg-[url('/homecover.gif')] bg-cover bg-center">
       <div className="p-8">
       <h1 className="text-4xl font-bold mb-4 text-gray-900">Share Your Thoughts</h1>
      <div className="shadow-lg rounded-lg p-6 mb-8 border-0 bg-transparent hover:shadow-2xl transition-all duration-300">
       
          <p className="text-lg text-gray-700 mb-4">
          At TechSaavy, we understand that growth extends beyond just academics or club activities. This is your space—a private and confidential platform—where you can share anything that's on your mind. Whether it's related to your studies, personal life, career aspirations, or even thoughts about the club, this is the place to voice your thoughts. We're here to support you in every aspect of your journey, ensuring that your concerns and ideas are heard, valued, and addressed with the utmost care.
          </p>
          <p className="text-lg text-gray-700 mb-4">
          This isn’t just a feedback form; it’s a personal improvement hub. If you’re navigating challenges in your academic journey, contemplating your career path, dealing with personal matters, or even if you simply want to discuss something on your mind, TechSaavy's private query container is here for you. No matter how big or small, your queries and thoughts are important to us, and we’re committed to helping you find clarity and direction in every area of your life.
          </p>
          <p className="text-lg text-gray-700 mb-4">
          Your privacy is our priority. Every message you send through this form is treated with the highest level of confidentiality. We’ve created this space to allow you the freedom to express yourself without hesitation or fear of judgment. Whether you're seeking advice, looking for support, or just need to share your thoughts, we’re here to listen and help you grow—personally, academically, and professionally. Please take your time to fill out the form below, and trust that your voice will be heard in the safest and most supportive environment possible.
          </p>
          </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Send Us a Message</h3>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-lg font-medium text-gray-700 mb-2"
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
              className="block text-lg font-medium text-gray-700 mb-2"
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
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
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
