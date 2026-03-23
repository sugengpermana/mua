"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const desktopLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Makeup Wisuda", href: "/services#wisuda" },
      { name: "Wedding", href: "/services#wedding" },
      { name: "Prewedding", href: "/services#prewedding" },
      { name: "Photoshoot", href: "/services#photoshoot" },
      { name: "Engagement", href: "/services#engagement" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

const mobileLinks = [
  { name: "Gallery", href: "/gallery" },
  { name: "Services", href: "/services" },
  { name: "About us", href: "/about" },
  { name: "- Makeup Wisuda", href: "/services#wisuda" },
  { name: "- Wedding", href: "/services#wedding" },
  { name: "- Prewedding", href: "/services#prewedding" },
  { name: "- Photoshoot", href: "/services#photoshoot" },
  { name: "- Engagement", href: "/services#engagement" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? "glass-dark py-3 shadow-lg"
          : pathname === "/"
            ? "bg-transparent py-5"
            : "bg-charcoal py-4 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex justify-between items-center">
        <Link
          href="/"
          className="hover:opacity-80 transition-opacity z-50"
        >
          <Image
            src="/remove.png"
            alt="Nuryanti MUA"
            width={120}
            height={40}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {desktopLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(true)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(false)}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 relative px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-full ${
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href))
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
                {link.dropdown && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && activeDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48 animate-fade-in-up">
                  <div className="bg-white rounded-xl shadow-premium border border-black/5 overflow-hidden flex flex-col p-2">
                    {link.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        href={dropItem.href}
                        className="px-4 py-2.5 text-sm text-charcoal hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/90 focus:outline-none p-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
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
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-400 z-40 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Nav Panel */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-[70%] sm:w-[50%] bg-white shadow-2xl transition-transform duration-500 ease-out z-50 flex flex-col overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button
            className="text-charcoal focus:outline-none p-2 bg-charcoal/5 rounded-full hover:bg-charcoal/10 transition"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col px-6 pt-2 pb-8 gap-1 grow text-right">
          {mobileLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`py-3.5 px-4 rounded-xl text-base font-medium transition-all ${
                pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-charcoal/80 hover:text-charcoal hover:bg-charcoal/5"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-auto pt-6 border-t border-charcoal/10 space-y-4">
            <div className="flex flex-col gap-2 items-end">
              <span className="text-charcoal/50 text-xs font-semibold uppercase tracking-wider">
                Hubungi Kami
              </span>
              <a
                href="https://wa.me/628568890683"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal text-lg font-medium hover:text-primary transition-colors flex items-center justify-end gap-2"
              >
                +62 856-8890-683
              </a>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <a
                href="https://instagram.com/nuryantimua"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal/50 hover:text-primary p-2 bg-charcoal/5 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@nuryantimua"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal/50 hover:text-primary p-2 bg-charcoal/5 rounded-full transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
