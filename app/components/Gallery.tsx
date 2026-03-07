"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { categories, portfolioItems } from "../data/portfolio";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      return activeCategory === "All" || item.category === activeCategory;
    });
  }, [activeCategory]);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 space-y-3">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal">
            Our Masterpieces
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto rounded-full" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-charcoal text-white shadow-md"
                  : "bg-cream text-muted hover:bg-charcoal/5 border border-charcoal/8"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4-Column Grid Gallery */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredItems.map((item) => (
              <Link
                href={`/gallery/${item.id}`}
                key={item.id}
                className="relative group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
              >
                {/* Media */}
                <div className="w-full aspect-[4/5] bg-gray-100 relative">
                  {item.type === "video" ? (
                    <>
                      <video
                        src={item.src}
                        poster={item.poster}
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                      {/* Video Indicator Icon */}
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white pointer-events-none">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  )}
                </div>

                {/* Subdued Overlay with Text */}
                <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                  <span className="text-primary text-[10px] md:text-xs font-semibold tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-white font-serif text-sm md:text-lg font-semibold mt-1">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted text-lg font-serif italic">
              Tidak ada portfolio di kategori ini
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="https://instagram.com/nuryantimua"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm"
          >
            Follow on Instagram for more
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
