"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react";

const events = [
  {
    title: 'Codethon-2k24',
    shortDescription: 'Shivamsh GSS won CODEATHON 2K24, followed by Tasneem I in second and Karthikeyan V in third, in a two-level coding competition hosted by the IT Department.',
    longDescription: 'Shivamsh GSS secured first place, Tasneem I took second, and Karthikeyan V claimed third in CODEATHON 2K24, a coding competition hosted by the Department of Information Technology. Organized by the "TECHSAAVY" club in collaboration with the Coders Club, the event saw second and third-year students competing in a two-level challenge. Level 1 was held virtually on May 4, 2024, and Level 2 in person on May 6, 2024, with both levels testing participants coding skills on the Hackerrank platform.',
    imageSrc: '/e1.gif',
    imageSrcMobile: '/e1sm.png', // mobile version
  },
  {
    title: 'UI/UX Workshop',
    shortDescription: 'A collaborative event focusing on rapid prototyping and design thinking.',
    longDescription: 'Radhakrishnan secured first place and Thirumalai took second in a UI/UX workshop hosted by TECHSAAVY, the IT Department’s club. The workshop, conducted by Mr. Rajkumar, founder of OVI Design Academy, offered hands-on practice with Figma. The best design won Radhakrishnan a ₹1,000 Amazon gift voucher, while Thirumalai received a winner’s certificate. The workshop was highly informative, providing students with valuable UI/UX design skills and practical experience.',
    imageSrc: '/e2.gif',
    imageSrcMobile: '/e2sm.png', // mobile version
  },
];

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    mode: "snap",
    breakpoints: {
      '(max-width: 640px)': {
        slides: { perView: 1 },
      },
    },
    slideChanged(slider) {
      setSelectedEvent(events[slider.track.details.rel]);
    },
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle Previous Slide
  const handlePrev = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  // Handle Next Slide
  const handleNext = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
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
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Introductory Section */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Events
          </h1>
          <p className="text-base sm:text-lg mb-6 text-black shadow-lg rounded-lg p-6 bg-transparent hover:shadow-2xl transition-all duration-300">
            At TechSaavy, we host a variety of exciting and educational events that bring our community together. From high-energy hackathons to collaborative design sprints, our events are designed to foster learning, collaboration, and innovation.
          </p>
        </div>

        {/* Keen Slider Section */}
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {events.map((event, index) => (
              <div key={index} className="keen-slider__slide">
                <Image
                  src={isMobile ? event.imageSrcMobile : event.imageSrc}
                  alt={event.title}
                  width={800}
                  height={400}
                  className={`w-full h-full object-cover rounded-lg ${isMobile ? 'h-48' : 'h-64'}`}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
          >
            →
          </button>
        </div>

        {/* Event Details Section */}
        <div className="bg-white text-justify rounded-lg shadow-lg border border-gray-300 p-6 hover:shadow-2xl hover:border-gray-800 transition-shadow duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
            {selectedEvent.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            {selectedEvent.longDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;