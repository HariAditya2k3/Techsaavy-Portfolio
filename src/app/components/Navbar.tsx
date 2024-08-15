"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconBrandPnpm, IconUser, IconCalendarSearch } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About Us",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconCalendarSearch className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
      },
    
      {
        name: "Events",
        link: "/events",
        icon: (
          <IconBrandPnpm className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
        
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      
    </div>
  );
}

