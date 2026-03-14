"use client";

import Image from "next/image";

const artists = [
  {
    name: "Luna M.",
    role: "Aktris & Model",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    quote: "Hasil makeup yang sangat flawless dan tahan lama seharian.",
  },
  {
    name: "Anya G.",
    role: "Public Figure",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    quote: "Selalu jadi pilihan pertama untuk acara-acara penting aku.",
  },
  {
    name: "Raisa A.",
    role: "Penyanyi",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600",
    quote: "Sangat profesional dan mengerti apa yang cocok untuk fitur wajahku.",
  },
  {
    name: "Maudy A.",
    role: "Aktris & Penyanyi",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&q=80&w=600",
    quote: "Detailnya luar biasa! Bikin tampil lebih percaya diri di panggung.",
  },
];

export default function TrustedArtists() {
  return (
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm md:text-base">
            Trusted Choice
          </p>
          <h2 className="text-3xl md:text-[42px] font-serif font-medium tracking-wide leading-tight">
            Dipercaya oleh <br className="hidden md:block" />
            <span className="italic font-light">Artis Terkenal</span>
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center backdrop-blur-sm"
            >
              <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-2 border-primary/50 relative group-hover:border-primary transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <p className="text-white/80 text-sm italic mb-6 leading-relaxed grow">
                "{artist.quote}"
              </p>
              <div>
                <h3 className="font-serif text-lg font-semibold text-white tracking-wide">
                  {artist.name}
                </h3>
                <p className="text-primary/80 text-xs font-medium uppercase tracking-wider mt-1">
                  {artist.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
