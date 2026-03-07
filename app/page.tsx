import Hero from "./components/Hero";
import BrandCarousel from "./components/BrandCarousel";
import FloatingWA from "./components/FloatingWA";
import Link from "next/link";

const featuredWorks = [
  {
    title: "Sacred Akad Nikah",
    category: "Wedding",
    src: "https://images.unsplash.com/photo-1594462215124-91d1e463a429?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Fresh Graduation Glow",
    category: "Wisuda",
    src: "https://images.unsplash.com/photo-1523240715630-971c034747a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Romantic Garden",
    category: "Prewedding",
    src: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Elegant Engagement",
    category: "Engagement",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Bold Party Makeup",
    category: "Party",
    src: "https://images.unsplash.com/photo-1526045612212-70caf35c11bc?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Classic Glamour",
    category: "Photoshoot",
    src: "https://images.unsplash.com/photo-1512413316925-fd4b93f31521?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <BrandCarousel />

      {/* Quick Links / Navigation Shortcuts */}
      <section className="py-12 bg-cream border-b border-black/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Link
              href="/about"
              className="flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <span className="text-primary mb-4 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-accent">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="font-serif text-charcoal text-base md:text-lg font-medium group-hover:text-primary transition-colors">
                About Us
              </span>
            </Link>

            <Link
              href="/gallery"
              className="flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <span className="text-primary mb-4 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-accent">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span className="font-serif text-charcoal text-base md:text-lg font-medium group-hover:text-primary transition-colors">
                Gallery
              </span>
            </Link>

            <Link
              href="/services"
              className="flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <span className="text-primary mb-4 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-accent">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>
              <span className="font-serif text-charcoal text-base md:text-lg font-medium group-hover:text-primary transition-colors">
                Services
              </span>
            </Link>

            <Link
              href="/contact"
              className="flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <span className="text-primary mb-4 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-accent">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span className="font-serif text-charcoal text-base md:text-lg font-medium group-hover:text-primary transition-colors">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-16 space-y-3">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Highlight
            </p>
            <h2 className="text-3xl md:text-[40px] font-sans text-charcoal font-normal tracking-wide">
              Featured Portfolio
            </h2>
            <div className="w-16 h-[2px] bg-primary mx-auto rounded-full" />
            <p className="text-muted max-w-lg mx-auto text-sm md:text-base pt-1">
              Karya terbaik dari artist kami untuk momen spesial Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {featuredWorks.map((work, index) => (
              <Link
                href="/gallery"
                key={index}
                className="group flex flex-col items-center cursor-pointer"
              >
                <div className="w-full aspect-[4/5] mb-6 overflow-hidden bg-gray-100 relative rounded-xl shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={work.src}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary text-xs font-semibold tracking-wider uppercase mb-1">
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
              className="inline-block border border-charcoal text-charcoal px-10 py-3 rounded-full hover:bg-charcoal hover:text-white transition-colors duration-300 font-sans text-[15px] tracking-wide"
            >
              Lihat Semua Portfolio
            </Link>
          </div>
        </div>
      </section>

      <FloatingWA />
    </main>
  );
}
