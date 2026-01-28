'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Manrope } from "next/font/google";
import "../globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <header className={`mx-auto py-6 ${manrope.className}`} id="headerStyling">
      <div className="container mx-auto px-8 flex justify-center items-center border-b border-gray-200/50 dark:border-gray-700/50 pb-6">
        <h1 className="text-4xl font-normal tracking-wide text-black dark:text-white">
          Silvestre Esteban Fernández Liñero
        </h1>
      </div>
      <div className="container mx-auto px-8 pt-8">
        <nav className="flex justify-center">
          <ul className="flex space-x-16 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.name}>
                  <Link href={link.path}>
                    <span className={`
                      relative text-lg tracking-wider
                      transition-all duration-300 ease-out
                      text-black dark:text-gray-200
                      hover:text-black dark:hover:text-white
                      ${isActive ? 'font-semibold dark:opacity-60' : 'font-medium'}
                      after:content-[''] after:absolute after:bottom-[-4px] after:left-0
                      after:w-0 after:h-[2px] after:bg-black dark:after:bg-white
                      after:transition-all after:duration-300 after:ease-out
                      hover:after:w-full
                      ${isActive ? 'after:w-full' : ''}
                    `}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}