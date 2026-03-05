"use client";

const brands = [
  { name: "MAC Cosmetics", logo: "💄" },
  { name: "Wardah", logo: "🌸" },
  { name: "Make Over", logo: "✨" },
  { name: "Charlotte Tilbury", logo: "👑" },
  { name: "NARS", logo: "💎" },
  { name: "Laura Mercier", logo: "🌟" },
  { name: "Urban Decay", logo: "🔮" },
  { name: "Bobbi Brown", logo: "🌺" },
  { name: "Estée Lauder", logo: "💐" },
  { name: "Maybelline Pro", logo: "🎨" },
];

export default function BrandCarousel() {
  return (
    <section className="py-12 md:py-16 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-8 md:mb-10 text-center">
        <p className="text-white/40 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
          Trusted by Leading Brands
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />

        {/* Track */}
        <div className="brand-track">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-3 flex-shrink-0 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-default"
            >
              <span className="text-2xl">{brand.logo}</span>
              <span className="text-white/60 font-medium text-sm whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
