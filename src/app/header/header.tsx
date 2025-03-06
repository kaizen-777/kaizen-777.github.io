import React from "react";
import Link from "next/link";
import "../globals.css";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="mx-auto h-32" id="headerStyling">
      <div className="container mx-auto h-22 flex justify-center items-center border-b">
        <p className="text-3xl">Silvestre Fernandez</p>
      </div>
      <div className="container mx-auto h-12 flex justify-center items-center">
      <nav>
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path}>
                  <span className="dark:text-white-700 font-medium">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        </div>
    </header>
  );
}