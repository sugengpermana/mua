"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="counter-value text-3xl md:text-4xl font-serif font-bold text-primary"
    >
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000"
        >
          <source
            src="https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center space-y-6 md:space-y-8 pt-20 mb-30">
        <div className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-primary text-xs md:text-sm font-semibold tracking-[0.2em] uppercase border border-primary/20 animate-fade-in">
          ✦ Professional Makeup Artist ✦
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] animate-fade-in-up">
          Reveal Your
          <br />
          <span className="text-gradient italic">Timeless Beauty</span>
        </h1>

        <p
          className="text-base md:text-lg text-white/70 max-w-xl mx-auto leading-relaxed animate-fade-in-up delay-200"
          style={{ animationFillMode: "backwards", animationDelay: "0.3s" }}
        >
          Abadikan momen spesial Anda dengan sentuhan makeup profesional.
          Spesialisasi Wedding, Graduation, Pre-Wedding & Event.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-2 animate-fade-in-up"
          style={{ animationFillMode: "backwards", animationDelay: "0.5s" }}
        >
          <a
            href="https://wa.me/6281234567890?text=Halo%20Nuryanti%20MUA,%20saya%20ingin%20booking."
            className="bg-primary hover:bg-accent text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm md:text-base"
          >
            Booking Sekarang
          </a>
          <a
            href="#gallery"
            className="glass text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-semibold transition-all hover:bg-white/20 text-sm md:text-base"
          >
            Lihat Portofolio
          </a>
        </div>
      </div>
    </section>
  );
}
