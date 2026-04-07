'use client';

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Manrope } from "next/font/google";
import "../globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
    { name: "Apply", path: "/apply" },
  ];

  return (
    <header className={`mx-auto py-4 ${manrope.className}`} id="headerStyling">
      <div className="container mx-auto px-4 md:px-8 flex justify-between md:justify-center items-center border-b border-gray-200/50 dark:border-gray-700/50 pb-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-wide text-black dark:text-white">
          Silvestre Esteban Fernández Liñero
        </h1>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-black dark:text-white focus:outline-none z-50 relative"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="container mx-auto px-8 pt-6 hidden md:block">
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

      {/* Mobile Navigation Overlay */}
      <div className={`
        md:hidden fixed inset-0 bg-white dark:bg-[#0a0a0a] z-40
        transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <nav className="flex items-center justify-center h-full">
          <ul className="flex flex-col space-y-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className={`
                      text-3xl tracking-wider
                      transition-all duration-300 ease-out
                      text-black dark:text-gray-200
                      ${isActive ? 'font-semibold dark:opacity-60' : 'font-medium'}
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