"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const events = [
  {
    title:'Codethon-2k24',
    shortDescription: 'Shivamsh GSS won CODEATHON 2K24, followed by Tasneem I in second and Karthikeyan V in third, in a two-level coding competition hosted by the IT Department.',
    longDescription: 'Shivamsh GSS secured first place, Tasneem I took second, and Karthikeyan V claimed third in CODEATHON 2K24, a coding competition hosted by the Department of Information Technology. Organized by the "TECHSAAVY" club in collaboration with the Coders Club, the event saw second and third-year students competing in a two-level challenge. Level 1 was held virtually on May 4, 2024, and Level 2 in person on May 6, 2024, with both levels testing participants coding skills on the Hackerrank platform.',
    imageSrc: '/e1.gif',
  },
  { title:'UI/UX Workshop',
    shortDescription: 'A collaborative event focusing on rapid prototyping and design thinking.',
    longDescription: 'Radhakrishnan secured first place and Thirumalai took second in a UI/UX workshop hosted by TECHSAAVY, the IT Departments club. The workshop, conducted by Mr. Rajkumar, founder of OVI Design Academy, offered hands-on practice with Figma. The best design won Radhakrishnan a ₹1,000 Amazon gift voucher, while Thirumalai received a winners certificate. The workshop was highly informative, providing students with valuable UI/UX design skills and practical experience.',
    imageSrc: '/e2.gif',
  },
];

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(events[0]);

  return (
    <div className="bg-blue-100 text-gray-800 hover:shadow-2xl hover:border-gray-800 transition-all duration-600 shadow-lg rounded-lg"
         style={{ backgroundImage: "url('/homecover.gif')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="p-8">
        {/* Introductory Section */}
        <div className="mb-12 ">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Events</h1>
          <p className="text-lg mb-6 text-gray-700 shadow-lg rounded-lg p-6 mb-8 border-0 bg-transparent hover:shadow-2xl transition-all duration-300">
            At TechSaavy, we host a variety of exciting and educational events that bring our community together. From high-energy hackathons to collaborative design sprints, our events are designed to foster learning, collaboration, and innovation.
            <br /><br />
            These events are an excellent opportunity for all of you to actively participate and benefit. Top performers are recognized based on their involvement, and internship referrals will be provided to standout participants.
            <br /><br />
            Explore our recent events below and get a glimpse of how we're making an impact in the tech world.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative p-6 mb-8 rounded-lg border-0 shadow-xl bg-transparent hover:shadow-2xl transition-all duration-300">
        <div className="relative mb-8">
          <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            onChange={(index) => setSelectedEvent(events[index])}
            className="rounded-lg shadow-lg"
          >
            {events.map((event) => (
              <div key={event.title} className="relative">
                <Image
                  src={event.imageSrc}
                  alt={event.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg"
                />
                {/* Removed the black overlay */}
              </div>
            ))}
          </Carousel>
        </div>

        {/* Event Details Section */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-300 p-6 hover:shadow-2xl hover:border-gray-800 transition-shadow duration-300"
             style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} // Transparent background for details section
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900">{selectedEvent.title}</h2>
          <p className="text-lg text-gray-700 mb-4">{selectedEvent.longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
