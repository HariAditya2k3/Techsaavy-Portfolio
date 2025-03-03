"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated";
const people = [
  {
    id: 1,
    name: "CYRIL JUDE VICTOR V",
    designation: "ASSOCIATE HEAD",
    image:
      "/Cyril Jude Victor - Associate Head .jpg",
  },
  {
    id: 2,
    name: "Mr.Giridharan K.",
    designation: "OPERATIONS MANAGER",
    image:
      "/giri.png",
  },
  {
    id: 4,
    name: "Mr.Arul Kumaran K V.",
    designation: "FINANCIAL HEAD",
    image:
      "/arul.png",
  },
  {
    id: 5,
    name: "Ms.Sandra Infantia Rodrigo J.",
    designation: "PUBLIC RELATION OFFICER",
    image:
      "/sandra.png",
  },
  {
    id: 6,
    name: "Ms.Divya Sree M.",
    designation: "PROJECT HEAD",
    image:
      "/divya.png",
  },
  {
    id: 7,
    name: "MANOJ KANNA K",
    designation: "TECH LEAD",
    image:
      "/manojkanna.jpg",
  },
  {
    id: 8,
    name: "PADMA SURUTHI S",
    designation: "EVENT HEAD",
    image:
      "/Padma Suruthi S III B.jpg",
  },
  {
    id: 9,
    name: "NANDHEETHA V",
    designation: "ALUMNI NETWORK MANAGER",
    image:
      "/Nandheetha V III IT B.jpg",
  },
  {
    id: 10,
    name: "SAKTHI MANIKANDAN S",
    designation: "BRAND MANAGER",
    image:
      "/Sakthi Manikandan .jpg",
  },
  {
    id: 11,
    name: "GOWTHAM M",
    designation: "JOIN ASSOCIATE HEAD",
    image:
      "/Gowtham .jpg",
  
  },
  {
    id: 12,
    name: "DIYA U",
    designation: "INNOVATIVE LEAD",
    image:
      "/DIYA ID.jpg",
  },
  {
    id: 14,
    name: "LINGESH J",
    designation: "DESIGN LEAD",
    image:
      "/Lingesh J II B.JPG",
  },
  {
    id: 15,
    name: "RACHEL EVA",
    designation: "CONTENT LEAD",
    image:
      "/Rachel Eva.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
