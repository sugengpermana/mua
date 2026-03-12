"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ pageName }: { pageName: string }) {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-white pt-32 pb-8 border-b border-black/5 lg:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-8 text-center flex flex-col items-center">
        {/* Title visible on mobile */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif text-black mb-4 wrap-break-word max-w-[280px] sm:max-w-full">
          {pageName}
        </h1>

        {/* Mobile Navbar links */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs md:text-sm uppercase tracking-widest font-semibold">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors ${
                  isActive ? "text-black" : "text-black/40 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
