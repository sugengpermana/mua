"use client";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=2000"
          alt="Nuryanti MUA Background"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 overlay-dark opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
        <div className="inline-block px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary text-sm font-semibold tracking-wider uppercase border border-primary/30">
          Professional Makeup Artist
        </div>
        <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight">
          Reveal Your <br />
          <span className="text-primary italic">Timeless Beauty</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Abadikan momen spesial Anda dengan sentuhan make up profesional yang
          modern dan elegan. Spesialisasi Graduation, Wedding, dan Engagement.
        </p>
        <div className="flex flex-col sm:row gap-6 justify-center pt-4">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Nuryanti%20MUA,%20saya%20ingin%20tanya%20tentang%20layanan%20make%20up."
            className="bg-primary hover:bg-accent text-white px-10 py-4 rounded-full font-semibold transition-all shadow-premium hover:-translate-y-1 animate-pulse-gold inline-block"
          >
            Konsultasi Sekarang
          </a>
          <a
            href="#gallery"
            className="glass text-white px-10 py-4 rounded-full font-semibold transition-all hover:bg-white hover:text-foreground"
          >
            Lihat Portofolio
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a
          href="#services"
          className="text-white opacity-70 hover:opacity-100 transition-opacity"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
