"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Learn,",
      className: "text-gray-800",
    },
    {
      text: "Code,",
      className: "text-gray-800",
    },
    {
      text: "Rise:",
      className: "text-gray-800",
    },
    {
      text: "IGNITE",
      className: "text-blue-700 dark:text-red-700",
    },
    {
      text: "'25",
      className: "text-blue-700 dark:text-red-700",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem] ">
      {/* <p className="text-neutral-100 dark:text-neutral-50 text-bold text-base  mb-5">
      Innovate, Collaborate, Elevate.
      </p> */}
      <TypewriterEffect words={words} />
      
        
      
    </div>
  );
}
