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
];

const packages = [
  {
    name: "Wisuda / Graduation",
    price: "Rp 350.000",
    priceNote: "start from",
    features: [
      "Natural or Bold Makeup",
      "Hairdo Styling",
      "Eyelash Application",
      "Touch-up Kit",
      "1 Jam Durasi",
    ],
    icon: "🎓",
    popular: false,
  },
  {
    name: "Engagement / Lamaran",
    price: "Rp 800.000",
    priceNote: "start from",
    features: [
      "Flawless Bridal Makeup",
      "Premium Hairdo",
      "Eyelash Premium",
      "Touch-up Kit",
      "Hijab Styling (optional)",
      "2 Jam Durasi",
    ],
    icon: "💍",
    popular: false,
  },
  {
    name: "Wedding Package",
    price: "Rp 2.500.000",
    priceNote: "start from",
    features: [
      "Akad + Resepsi Makeup",
      "2x Hairdo Change",
      "Premium Products",
      "False Lash Premium",
      "Hijab Styling",
      "Full Day Service",
      "Free Touch-up",
    ],
    icon: "👰",
    popular: true,
  },
  {
    name: "Prewedding",
    price: "Rp 1.200.000",
    priceNote: "start from",
    features: [
      "2 Look Makeup",
      "Hairdo Styling x2",
      "Eyelash Premium",
      "Sesuai Konsep Foto",
      "4 Jam Durasi",
    ],
    icon: "📸",
    popular: false,
  },
  {
    name: "Sweet Seventeen",
    price: "Rp 500.000",
    priceNote: "start from",
    features: [
      "Glam Youthful Makeup",
      "Hairdo Styling",
      "Eyelash Application",
      "Touch-up Kit",
      "1.5 Jam Durasi",
    ],
    icon: "🎂",
    popular: false,
  },
  {
    name: "Makeup Party / Event",
    price: "Rp 400.000",
    priceNote: "per person",
    features: [
      "Party Glam Makeup",
      "Simple Hairdo",
      "Eyelash Application",
      "Min. 3 Orang",
      "1 Jam / Orang",
    ],
    icon: "🎉",
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Makeup Artist Service Categories */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] font-sans text-charcoal font-normal tracking-wide">
            Makeup Artist Service
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
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
                href={`https://wa.me/6281234567890?text=Halo%20Nuryanti%20MUA,%20saya%20ingin%20booking%20${encodeURIComponent(service.title)}.`}
                className="inline-block border border-charcoal text-charcoal px-10 py-2.5 hover:bg-charcoal hover:text-white transition-colors duration-300 font-sans text-[15px] tracking-wide"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        {/* Track Record Stats */}
        <div className="bg-charcoal rounded-2xl md:rounded-3xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-serif font-bold text-primary">
              <AnimatedCounter target={500} suffix="+" />
            </p>
            <p className="text-white/70 text-sm md:text-base mt-2">
              Total Client
            </p>
          </div>
          <div className="md:border-x border-white/10">
            <p className="text-3xl md:text-4xl font-serif font-bold text-primary">
              <AnimatedCounter target={99} suffix="%" />
            </p>
            <p className="text-white/70 text-sm md:text-base mt-2">
              Client Puas
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-serif font-bold text-primary">
              <AnimatedCounter target={5} suffix="+" />
            </p>
            <p className="text-white/70 text-sm md:text-base mt-2">
              Tahun Pengalaman
            </p>
          </div>
        </div>

        {/* Paket & Layanan */}
        <div className="text-center mb-12 space-y-3">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal">
            Paket & Layanan
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto rounded-full" />
          <p className="text-muted max-w-lg mx-auto text-sm md:text-base pt-1">
            Pilih paket layanan yang sesuai dengan kebutuhan momen spesial Anda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${
                pkg.popular
                  ? "bg-charcoal text-white ring-2 ring-primary shadow-glow"
                  : "bg-white shadow-card border border-charcoal/5"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full tracking-wider uppercase">
                  Recommended
                </div>
              )}
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div>
                  <h3
                    className={`text-lg md:text-xl font-serif font-bold ${pkg.popular ? "text-white" : "text-charcoal"}`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-xs mt-0.5 ${pkg.popular ? "text-white/50" : "text-muted"}`}
                  >
                    {pkg.priceNote}
                  </p>
                </div>
                <span className="text-2xl md:text-3xl">{pkg.icon}</span>
              </div>
              <p
                className={`text-2xl md:text-3xl font-serif font-bold mb-5 md:mb-6 ${pkg.popular ? "text-primary" : "text-charcoal"}`}
              >
                {pkg.price}
              </p>
              <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.popular ? "text-primary" : "text-primary"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={
                        pkg.popular ? "text-white/80" : "text-charcoal/70"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/6281234567890?text=Halo%20Nuryanti%20MUA,%20saya%20tertarik%20paket%20${encodeURIComponent(pkg.name)}.`}
                className={`block text-center py-3 rounded-full font-semibold text-sm transition-all ${
                  pkg.popular
                    ? "bg-primary hover:bg-accent text-white shadow-md"
                    : "bg-charcoal hover:bg-primary text-white"
                }`}
              >
                Book via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
