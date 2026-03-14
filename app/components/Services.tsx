"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { services } from "../data/services";
import { trackRecordStats } from "../data/services";

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
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
    <span ref={ref} className="counter-value">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Makeup Artist Service Categories */}
        <div className="text-center mb-16 lg:mt-16">
          <h2 className="text-3xl md:text-[40px] font-sans text-charcoal font-normal tracking-wide mb-2">
            Paket & Layanan
          </h2>
          <div className="w-30 h-[2px] bg-black mx-auto rounded-full" />
          <p className="text-charcoal/70 max-w-lg mx-auto text-sm md:text-base pt-1 mt-4">
             Kami Menyediakan jasa makeup yang murah dan cocok untuk anda
             untuk berbagai acara seperti wedding, prewedding, photoshoot, dan event spesial lainnya
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24">
          {services.map((service) => (
            <Link
              href={`/services/${service.slug}`}
              key={service.slug}
              className="group flex flex-col items-center bg-white border border-black/8 rounded-2xl overflow-hidden hover:shadow-xl hover:border-black/15 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-full aspect-4/3 overflow-hidden bg-gray-100 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-charcoal px-6 py-2.5 rounded-full text-sm font-medium shadow-lg">
                    Lihat Detail →
                  </span>
                </div>
              </div>
              <div className="p-6 text-center w-full">
                <h3 className="text-lg md:text-xl font-sans text-charcoal font-medium mb-2">
                  {service.title}
                </h3>
                <p className="text-muted text-sm">{service.startingPrice}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Track Record Stats — Individual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          {trackRecordStats.map((stat, index) => (
            <div
              key={index}
              className="border border-black/10 rounded-2xl p-8 md:p-10 text-center hover:border-black/25 hover:shadow-card transition-all duration-300 bg-white"
            >
              <p className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-3">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-muted text-sm md:text-base tracking-wide uppercase font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
