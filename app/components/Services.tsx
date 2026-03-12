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

const services = [
  {
    title: "Makeup Karakter",
    image:
      "https://images.unsplash.com/photo-1595991209266-5126c15bf2f0?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Makeup Wedding",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Makeup Wisuda",
    image:
      "https://images.unsplash.com/photo-1523240715630-971c034747a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Makeup Reguler",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Makeup Reguler",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Makeup Reguler",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
  },
];

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
            Berikut adalah paket layanan yang kami sediakan
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-30">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-square mb-6 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl md:text-[22px] font-sans text-center text-charcoal font-normal mb-6 max-w-[200px] leading-snug">
                {service.title.split(" ").map((word, i) => (
                  <span key={i}>
                    {word}
                    <br />
                  </span>
                ))}
              </h3>
              <a
                href={`https://wa.me/6281234567890?${encodeURIComponent(service.title)}.`}
                className="inline-block border border-charcoal text-charcoal px-10 py-2.5 hover:bg-charcoal hover:text-white transition-colors duration-300 font-sans text-[15px] tracking-wide"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
        {/* Track Record Stats */}
        <div className="bg-charcoal rounded-4xl md:rounded-3xl p-8 md:p-10 grid grid-cols-3 md:grid-cols-3 gap-10 mb-6 text-center">
          <div>
            <p className="text-2xl md:text-4xl font-serif font-bold text-white">
              <AnimatedCounter target={500} suffix="+" />
            </p>
            <p className="text-white/70 text-xs md:text-base mt-2">Client</p>
          </div>
          <div className="md:border-x border-white/10">
            <p className="text-2xl md:text-4xl font-serif font-bold text-white">
              <AnimatedCounter target={99} suffix="%" />
            </p>
            <p className="text-white/70 text-xs md:text-base mt-2">
              Happy Client
            </p>
          </div>
          <div>
            <p className="text-2xl md:text-4xl font-serif font-bold text-white">
              <AnimatedCounter target={5} suffix="+" />
            </p>
            <p className="text-white/70 text-xs md:text-base mt-2">
              Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
