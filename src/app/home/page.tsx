'use client';

import "../globals.css";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Image from "next/image"; // Import Next.js Image

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<null | (typeof events)[0]>(null); // Fixed Type

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const events = [
    {
      imgSrc: "/ev1.png",
      title: "A workshop on AR/VR Design",
      description: "Master UI/UX design in our hands-on workshop!",
      participants: "1",
      amount: "₹100",
      prize: "nil",
      venue: "TRP Auditorium Hall",
      date: "March 10, 2025",
      time: "9:00 AM",
      registrationLink: "https://forms.gle/JLFaHyPk8cy8ETt88",
    },
    {
      imgSrc: "/ev2.png",
      title: "Competitive Coding Contest",
      description: "Solve problems within time limits and showcase your skills!",
      participants: "1",
      amount: "₹100",
      prize: "Win exciting gadgets and prizes!",
      venue: "Lab 1, IT Block",
      date: "March 11, 2025",
      time: "10:00 AM",
      registrationLink: "https://forms.gle/w9fndi6fZCEHJ3An6",
    },
    {
      imgSrc: "/ev3.png",
      title: "Debugging Challenge",
      description: "Find and fix bugs under time constraints!",
      participants: "2",
      amount: "₹100/team",
      prize: "Win exciting gadgets and prizes!",
      venue: "Lab 2, IT Block",
      date: "March 12, 2025",
      time: "10:00 AM",
      registrationLink: "https://forms.gle/JWcpuqJ6fEw3kydH7",
    },
    {
      imgSrc: "/ev4.png",
      title: "Hackathon",
      description: "Create innovative websites in our fast-paced hackathon!",
      participants: "5",
      amount: "₹500/team",
      prize: "Win a prize pool worth ₹12,000",
      venue: "Hi-Tech Hall-2",
      date: "March 13, 2025",
      time: "10:00 AM",
      registrationLink: "https://forms.gle/1wGL612kfSaMXmkP6",
    },
    {
      imgSrc: "/ev5.png",
      title: "Paper Presentation",
      description: "Present your ideas and research to a knowledgeable audience!",
      participants: "2-4",
      amount: "₹200/team",
      prize: "₹4000",
      venue: "Win exciting gadgets and prizes!",
      date: "March 14, 2025",
      time: "10:00 AM",
      registrationLink: "https://forms.gle/bApaqaqwFDzAWuhq9",
    },
  ];

  return (
    <div className={`${inter.className} min-h-screen bg-black text-white p-4`}>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative border-2 border-red-600 rounded-lg overflow-hidden transition-all duration-500 transform 
              hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.8)] cursor-pointer bg-gray-900 p-4"
            onClick={() => setSelectedEvent(event)}
          >
            <div className="w-full aspect-[4/5] flex items-center justify-center">
              <Image
                src={event.imgSrc}
                alt={event.title}
                width={300}
                height={375}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg text-red-500">{event.title}</h3>
              <p className="text-gray-300">{event.description}</p>
              <p className="text-sm text-gray-400 mt-2">
                {event.date} | {event.time}
              </p>
              <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full border border-red-600">
            <h2 className="text-red-500 text-2xl font-bold">{selectedEvent.title}</h2>
            <p className="text-gray-300 mt-2">{selectedEvent.description}</p>

            <div className="text-sm text-gray-400 mt-4 space-y-2">
              <p>
                <strong>Date:</strong> {selectedEvent.date} | <strong>Time:</strong> {selectedEvent.time}
              </p>
              <p>
                <strong>Participants:</strong> {selectedEvent.participants} | <strong>Fee:</strong> {selectedEvent.amount}
              </p>
              <p>
                <strong>Prize:</strong> {selectedEvent.prize} | <strong>Venue:</strong> {selectedEvent.venue}
              </p>
            </div>

            <div className="flex justify-between mt-6">
              <button
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all"
                onClick={() => setSelectedEvent(null)}
              >
                Cancel
              </button>
              <a href={selectedEvent.registrationLink} target="_blank">
                <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">
                  Register Here
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
