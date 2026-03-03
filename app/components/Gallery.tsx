"use client";

const images = [
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1512413316925-fd4b93f31521?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1526045612212-70caf35c11bc?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1594462215124-91d1e463a429?auto=format&fit=crop&q=80&w=800",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Our Masterpieces
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-gray-500 max-w-2xl mx-auto pt-2">
            Lihat transformasi kecantikan yang telah kami ciptakan untuk klien
            setia kami.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative h-[300px] md:h-[450px] overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all hover:shadow-2xl"
            >
              <img
                src={img}
                alt={`MUA Portfolio ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white border border-white px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Result
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            className="text-primary font-semibold hover:text-accent flex items-center justify-center gap-2"
          >
            Follow on Instagram for more
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
