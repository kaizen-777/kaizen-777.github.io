import React from "react";
import Link from "next/link";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="w-full h-16 dark:bg-black bg-white">
      <div className="container mx-auto h-full flex justify-center items-center">
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