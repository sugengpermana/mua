"use client";

import { useRef, useState, useEffect } from "react";

const galleryPhotos = [
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
    caption: "Bersama klien di sesi makeup wedding",
    location: "Jakarta",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200",
    caption: "Behind the scene prewedding session",
    location: "Bandung",
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200",
    caption: "Makeup untuk artis di event spesial",
    location: "Bali",
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1200",
    caption: "Sesi foto bersama setelah rias wisuda",
    location: "Surabaya",
  },
  {
    src: "https://images.unsplash.com/photo-1595991209266-5126c15bf2f0?auto=format&fit=crop&q=80&w=1200",
    caption: "Makeup photoshoot editorial bersama tim",
    location: "Yogyakarta",
  },
  {
    src: "https://images.unsplash.com/photo-1594462215124-91d1e463a429?auto=format&fit=crop&q=80&w=1200",
    caption: "Persiapan akad nikah klien tercinta",
    location: "Jakarta",
  },
];

export default function TrustedArtists() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationId: number;
    let paused = false;

    const autoScroll = () => {
      if (!paused && el) {
        el.scrollLeft += 0.5;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause);
    el.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-white/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-3xl md:text-[42px] font-serif font-medium tracking-wide leading-tight animate-fade-in-up delay-100">
            Dipercaya Oleh Artis Terkenal
          </h2>

          <p className="text-white/50 text-sm md:text-base max-w-lg mx-auto animate-fade-in-up delay-200">
            Koleksi Foto Make up Kami, Bersama Artis Terkenal
          </p>
        </div>

        {/* Scrollable Landscape Gallery */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          className={`flex gap-5 overflow-x-auto pb-4 scrollbar-hide animate-fade-in-up ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryPhotos.map((photo, index) => (
            <div
              key={index}
              className="group relative shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] aspect-16/10 rounded-2xl overflow-hidden snap-center"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-serif text-base md:text-lg font-semibold leading-snug">
                  {photo.caption}
                </p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <svg
                    className="w-3.5 h-3.5 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-white/60 text-xs tracking-wide">
                    {photo.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-6 gap-1.5 ">
          {galleryPhotos.map((_, i) => (
            <div key={i} className="w-8 h-1 bg-white/15 rounded-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
