"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: "/", label: "Acasă" },

    { href: "/despre", label: "Despre" },

    { href: "/produse", label: "Produse" },

    { href: "/pasunea-gainilor", label: "Pășunea Găinilor" },

    { href: "/rase-de-gaini", label: "Rase de găini" },

    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-[var(--sage)] border-b border-[var(--primary-background-darker)]">
      <div className="max-w-6xl mx-auto flex justify-between py-4 px-4 sm:px-8">
        <div className={`flex-1 text-4xl my-font text-white`}>delaDeal</div>
        {/* Desktop Menu */}
        <div className="hidden md:flex ml-auto space-x-10 text-base sm:text-lg">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-white text-3xl my-font hover:text-[var(--secondary-text)] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none transition-colors duration-300"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[var(--primary-background)] border-t border-[var(--primary-background-darker)]">
          <div className="flex flex-col space-y-2 py-4 px-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white text-3xl my-font hover:underline transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
