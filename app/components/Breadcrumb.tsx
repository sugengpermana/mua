"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ pageName }: { pageName: string }) {
  const pathname = usePathname();

  // Format pathname to get the current route name
  let currentPath = "home";
  if (pathname.includes("/about")) currentPath = "about us";
  else if (pathname.includes("/gallery")) currentPath = "gallery";
  else if (pathname.includes("/services")) currentPath = "services";
  else if (pathname.includes("/contact")) currentPath = "contact";

  return (
    <div className="bg-[#fbf9f6] pt-32 pb-8 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-8 text-center flex flex-col items-center">
        {/* Title hidden on lg because Navbar active state already indicates current page, but visible on mobile */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif text-charcoal mb-3 sm:mb-4 lg:hidden break-words max-w-[280px] sm:max-w-full">
          {pageName}
        </h1>

        {/* Breadcrumb links */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs md:text-sm text-muted uppercase tracking-widest font-semibold">
          <Link href="/" className="hover:text-primary transition-colors">
            home
          </Link>
          <span className="text-charcoal/30">/</span>
          <span className="text-primary">
            {currentPath === "home" ? pageName : currentPath}
          </span>
        </div>
      </div>
    </div>
  );
}
