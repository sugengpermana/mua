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
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Makeup Artist Service Categories */}
        <div className="text-center mb-10 md:mb-14 lg:mt-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans text-charcoal mb-3">
            Paket & Layanan
          </h2>
          <div className="w-30 h-0.5 bg-black mx-auto rounded-full" />
          <p className="text-charcoal/70 max-w-2xl mx-auto text-sm md:text-base pt-1 mt-4">
            Kami Menyediakan jasa makeup yang murah dan cocok untuk berbagai
            acara seperti wedding, prewedding, photoshoot, dan event spesial
            lainnya
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
                  loading="lazy"
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
              </div>
            </Link>
          ))}
        </div>

        {/* Makeup Package Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 px-4 md:px-12">
          {/* Left Column: Services list */}
          <div>
            <h3 className="text-3xl md:text-4xl font-serif text-[#8B5E5C] text-center mb-8 leading-snug">
              List Makeup
            </h3>
            <ul className="flex flex-col gap-4 text-[17px] text-charcoal/80">
              {[
                { name: "Prewedding", badge: "Ready" },
                { name: "Wedding", badge: "Ready" },
                { name: "Widuda", badge: "Ready" },
                { name: "Engagement", badge: "Ready" },
                { name: "Photoshoot", badge: "Ready" },
                { name: "Makeup Party", badge: "Ready" },
                { name: "Makeup Daily", badge: "Ready" },
                { name: "Makeup Character", badge: "Ready" },

              ].map((item, i) => (
                <li
                  key={i}
                  className="border-b border-black/10 pb-3 pl-2 flex items-center justify-between"
                >
                  {item.name}
                  {item.badge && (
                    <span className="bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: T&C and Packages */}
          <div className="flex flex-col gap-10 mt-3">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif text-[#8B5E5C] text-center mb-6">
                Syarat & Ketentuan
              </h3>
              <ul className="list-disc list-outside space-y-3 text-[17px] text-charcoal/80 ml-6">
                <li>DP Minimal 30% Dari Total Layanan</li>
                <li>Pelunasan Maksimal H-1 Acara</li>
                <li>Harga Layanan Belum Termasuk Transport</li>
                <li>Bisa Melakukan Reschedule Maksimal 1x</li>
                <li>DP Tidak Bisa di Refund</li>
              </ul>
            </div>

            <div></div>
          </div>
        </div>

        <div className="w-50 md:w-100 h-0.5 bg-black mx-auto rounded-full" />

        <div className="text-center pb-10 mt-12">
          <Link
            href="https://wa.me/628568890683"
            className="border border-charcoal text-charcoal px-5 py-3 flex justify-center items-center w-fit mx-auto  gap-2 rounded-xl hover:bg-charcoal hover:text-white transition-colors duration-300 font-sans text-[15px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M16 2a1 1 0 0 1 .993 .883l.007 .117v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 1.993 -.117l.007 .117v1h6v-1a1 1 0 0 1 1 -1m3 8h-14v8.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16zm-9 4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z" />
            </svg>
            Make an Appointment Now
          </Link>
        </div>
      </div>
    </section>
  );
}
