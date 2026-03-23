import Hero from "./components/Hero";
import BrandCarousel from "./components/liveStatHome";
import FloatingWA from "./components/FloatingWA";
import TrustedArtists from "./components/FotoArtist";
import Link from "next/link";
import { featuredWorks } from "./data/portfolio";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <BrandCarousel />
      {/* Featured Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl md:text-[40px] font-sans text-charcoal font-normal tracking-wide">
              Best Portfolio
            </h2>
            <div className="w-16 h-[2px] bg-black mx-auto rounded-full" />
            <p className="text-muted max-w-lg mx-auto text-sm md:text-base pt-1">
              Lihat beberapa koleksi tampilan makeup terbaik kami untuk berbagai
              acara spesial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {featuredWorks.map((work, index) => (
              <Link
                href={`/gallery/${work.slug}`}
                key={index}
                className="group flex flex-col items-center cursor-pointer"
              >
                <div className="w-full aspect-4/5 mb-6 overflow-hidden bg-gray-100 relative rounded-xl shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={work.src}
                    alt={work.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-white/70 text-xs font-semibold tracking-wider uppercase mb-1">
                      {work.category}
                    </span>
                    <h3 className="text-white font-serif text-xl font-semibold">
                      {work.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block border border-charcoal text-charcoal p-3 rounded-xl hover:bg-charcoal hover:text-white transition-colors duration-300 font-sans text-[15px]"
            >
              Cari tahu lebih banyak →
            </Link>
          </div>
        </div>
      </section>

      <TrustedArtists />

      <FloatingWA />
    </main>
  );
}
