"use client";

import { useState, useMemo } from "react";

const categories = [
  "All",
  "Prewedding",
  "Wedding",
  "Photoshoot for Event",
  "Graduation / Wisuda",
  "Sweet Seventeen",
  "Makeup Party",
];

const portfolioItems = [
  {
    src: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&q=80&w=800",
    title: "Romantic Garden Prewedding",
    category: "Prewedding",
    badge: "popular",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    title: "Elegant Engagement Look",
    category: "Photoshoot for Event",
    badge: "new",
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    title: "Glamour Wedding Resepsi",
    category: "Wedding",
    badge: "premium",
  },
  {
    src: "https://images.unsplash.com/photo-1523240715630-971c034747a2?auto=format&fit=crop&q=80&w=800",
    title: "Fresh Graduation Glow",
    category: "Graduation / Wisuda",
    badge: null,
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
    title: "Sweet 17 Glam Look",
    category: "Sweet Seventeen",
    badge: "new",
  },
  {
    src: "https://images.unsplash.com/photo-1526045612212-70caf35c11bc?auto=format&fit=crop&q=80&w=800",
    title: "Bold Party Makeup",
    category: "Makeup Party",
    badge: null,
  },
  {
    src: "https://images.unsplash.com/photo-1594462215124-91d1e463a429?auto=format&fit=crop&q=80&w=800",
    title: "Sacred Akad Nikah",
    category: "Wedding",
    badge: "popular",
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    title: "Natural Prewedding Bliss",
    category: "Prewedding",
    badge: null,
  },
  {
    src: "https://images.unsplash.com/photo-1512413316925-fd4b93f31521?auto=format&fit=crop&q=80&w=800",
    title: "Classic Graduation",
    category: "Graduation / Wisuda",
    badge: "premium",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    title: "Dreamy Event Styling",
    category: "Photoshoot for Event",
    badge: null,
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800",
    title: "Chic Party Vibes",
    category: "Makeup Party",
    badge: "new",
  },
  {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800",
    title: "Enchanting Sweet 17",
    category: "Sweet Seventeen",
    badge: "popular",
  },
];

const badgeConfig: Record<string, { label: string; className: string }> = {
  new: { label: "✨ New", className: "badge-new" },
  popular: { label: "🔥 Popular", className: "badge-popular" },
  premium: { label: "💎 Premium", className: "badge-premium" },
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Cari portfolio... (cth: wedding, graduation)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-charcoal/10 bg-cream text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder:text-muted/60"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-charcoal transition-colors"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12">
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

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredItems.map((item, index) => {
              const isGeo = index % 3 === 1;
              const isGeoAlt = index % 3 === 2;

              return (
                <div
                  key={`${item.title}-${index}`}
                  className={`gallery-card group cursor-pointer ${
                    isGeo
                      ? "gallery-card-geo"
                      : isGeoAlt
                        ? "gallery-card-geo-alt"
                        : ""
                  }`}
                  style={{ height: "clamp(250px, 40vw, 420px)" }}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Notification Badge */}
                  {item.badge && (
                    <span
                      className={`notification-badge ${badgeConfig[item.badge].className}`}
                    >
                      {badgeConfig[item.badge].label}
                    </span>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 z-[3] bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6">
                    <span className="text-primary text-[10px] md:text-xs font-semibold tracking-wider uppercase">
                      {item.category}
                    </span>
                    <h3 className="text-white font-serif text-sm md:text-lg font-semibold mt-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted text-lg font-serif italic">
              Tidak ada portfolio yang cocok dengan pencarian &quot;
              {searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 text-primary hover:text-accent font-semibold text-sm transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-10 md:mt-14">
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
