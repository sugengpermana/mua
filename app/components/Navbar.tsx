"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Profile", href: "#about" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "glass py-4 shadow-premium"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-serif font-bold tracking-widest text-primary"
        >
          NURYANTI MUA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/6281234567890?text=Halo%20Nuryanti%20MUA,%20saya%20ingin%20tanya%20tentang%20layanan%20make%20up."
            className="bg-primary hover:bg-accent text-white px-6 py-2 rounded-full transition-all shadow-md transform hover:scale-105 active:scale-95"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col space-y-4 px-6 pb-8 bg-white/90 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/6281234567890?text=Halo%20Nuryanti%20MUA,%20saya%20ingin%20tanya%20tentang%20layanan%20make%20up."
            className="bg-primary text-white text-center py-3 rounded-full font-semibold shadow-md active:scale-95 transition-transform"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
