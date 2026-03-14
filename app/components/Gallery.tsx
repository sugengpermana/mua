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
        <div className="text-center mb-10 md:mb-14 lg:mt-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal">
            Our Portfolio
          </h2>
          <div className="w-30 h-[2px] bg-black mx-auto rounded-full" />
          <p className="text-charcoal/70 max-w-lg mx-auto text-sm md:text-base pt-1">
            anda bisa mencari refrensi yang cocok dari beberapa kategori yang
            kami sediakan
          </p>
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
                <div className="w-full aspect-4/5 bg-gray-100 relative">
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
                  <span className="text-white/70 text-[10px] md:text-xs font-semibold tracking-wider uppercase">
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
          <Link
            href="https://instagram.com/nuryantimua"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-charcoal text-charcoal px-5 py-3 flex justify-center items-center w-fit mx-auto  gap-2 rounded-xl hover:bg-charcoal hover:text-white transition-colors duration-300 font-sans text-[15px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M16.5 7.5v.01" />
            </svg>
            kunjungi instagram kami
          </Link>
        </div>
      </div>
    </section>
  );
}
