"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedStat({
  target,
  suffix = "",
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
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
    <div ref={ref} className="flex flex-col items-center gap-1 px-4 md:px-8">
      <span className="counter-value text-2xl md:text-3xl font-serif font-bold text-white">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="text-white/40 text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase">
        {label}
      </span>
    </div>
  );
}

export default function BrandCarousel() {
  return (
    <section className="py-6 md:py-8 bg-charcoal overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex items-center justify-center gap-6 md:gap-0 md:justify-around flex-wrap">
          {/* Live indicator */}
          <div className="flex items-center gap-2 order-first md:order-0">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-white/50 text-[11px] md:text-xs font-medium tracking-wide">
              Live Stats
            </span>
          </div>

          {/* Stats */}
          <div className="flex items-center divide-x divide-white/10">
            <AnimatedStat target={1689} suffix="+" label="client" />
            <AnimatedStat target={13} suffix="+" label="experience" />
            <AnimatedStat target={98} suffix="%" label="happy client" />
          </div>

          {/* Rating badge */}
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3.5 h-3.5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/60 text-xs font-semibold">4.9</span>
          </div>
        </div>
      </div>
    </section>
  );
}
