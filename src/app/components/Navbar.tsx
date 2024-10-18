"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconBrandPnpm, IconUser, IconCalendarSearch } from "@tabler/icons-react";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { GiArchiveRegister } from "react-icons/gi";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About Us",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Register",
      link: "/contact",
      icon: (
        < GiArchiveRegister  className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
      },
    
      {
        name: "Events",
        link: "/events",
        icon: (
          <MdOutlineEmojiEvents className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
        
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      
    </div>
  );
}

