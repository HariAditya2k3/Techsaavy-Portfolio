"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "A",
      className: "text-gray-800",
    },
    {
      text: "club",
      className: "text-gray-800",
    },
    {
      text: "for",
      className: "text-gray-800",
    },
    {
      text: "Tech",
      className: "text-blue-700 dark:text-blue-700",
    },
    {
      text: "Enthusiasts",
      className: "text-blue-700 dark:text-blue-700",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem] ">
      <p className="text-neutral-100 dark:text-neutral-50 text-bold text-base  mb-5">
      Innovate, Collaborate, Elevate.
      </p>
      <TypewriterEffect words={words} />
      
        
      
    </div>
  );
}
