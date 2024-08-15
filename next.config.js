// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'assets.aceternity.com', // Added Aceternity domain here
      'images.unsplash.com'   // Ensure Unsplash domain is also included
    ],
  },
};

module.exports = nextConfig;
