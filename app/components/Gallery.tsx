"use client";

import { useState, useMemo } from "react";

const categories = [
  "All",
  "Video",
  "Prewedding",
  "Wedding",
  "Photoshoot for Event",
  "Graduation / Wisuda",
  "Sweet Seventeen",
  "Makeup Party",
];

const portfolioItems = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&q=80&w=800",
    title: "Romantic Garden Prewedding",
    category: "Prewedding",
    aspect: "aspect-[3/4]",
  },
  {
    type: "video",
    src: "https://cdn.pixabay.com/video/2021/08/23/85934-591866380_large.mp4",
    poster:
      "https://images.unsplash.com/photo-1595991209266-5126c15bf2f0?auto=format&fit=crop&q=80&w=800",
    title: "Elegant Makeup Tutorial",
    category: "Video",
    aspect: "aspect-square",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    title: "Elegant Engagement Look",
    category: "Photoshoot for Event",
    aspect: "aspect-video",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    title: "Glamour Wedding Resepsi",
    category: "Wedding",
    aspect: "aspect-[4/5]",
  },
  {
    type: "video",
    src: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
    poster:
      "https://images.unsplash.com/photo-1523240715630-971c034747a2?auto=format&fit=crop&q=80&w=800",
    title: "Behind The Scenes",
    category: "Video",
    aspect: "aspect-[9/16]",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1523240715630-971c034747a2?auto=format&fit=crop&q=80&w=800",
    title: "Fresh Graduation Glow",
    category: "Graduation / Wisuda",
    aspect: "aspect-square",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
    title: "Sweet 17 Glam Look",
    category: "Sweet Seventeen",
    aspect: "aspect-[3/4]",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1526045612212-70caf35c11bc?auto=format&fit=crop&q=80&w=800",
    title: "Bold Party Makeup",
    category: "Makeup Party",
    aspect: "aspect-[4/5]",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1594462215124-91d1e463a429?auto=format&fit=crop&q=80&w=800",
    title: "Sacred Akad Nikah",
    category: "Wedding",
    aspect: "aspect-square",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    title: "Natural Prewedding Bliss",
    category: "Prewedding",
    aspect: "aspect-video",
  },
  {
    type: "video",
    src: "https://cdn.pixabay.com/video/2019/11/14/29165-373950466_large.mp4",
    poster:
      "https://images.unsplash.com/photo-1512413316925-fd4b93f31521?auto=format&fit=crop&q=80&w=800",
    title: "Bridal Preparation",
    category: "Video",
    aspect: "aspect-[3/4]",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1512413316925-fd4b93f31521?auto=format&fit=crop&q=80&w=800",
    title: "Classic Graduation",
    category: "Graduation / Wisuda",
    aspect: "aspect-[4/5]",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      return activeCategory === "All" || item.category === activeCategory;
    });
  }, [activeCategory]);

  return (
    <section id="gallery" className="section-padding bg-white">
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
          <p className="text-muted max-w-lg mx-auto text-sm md:text-base pt-1">
            Lihat transformasi kecantikan yang telah kami ciptakan untuk klien
            setia kami.
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

        {/* Masonry Gallery Grid */}
        {filteredItems.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="relative group break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                {/* Media */}
                <div className={`w-full ${item.aspect} bg-gray-100 relative`}>
                  {item.type === "video" ? (
                    <>
                      <video
                        src={item.src}
                        poster={item.poster}
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
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
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>

                {/* Subdued Overlay with Text */}
                <div className="absolute inset-0 z-3 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                  <span className="text-primary text-[10px] md:text-xs font-semibold tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-white font-serif text-sm md:text-lg font-semibold mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
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
