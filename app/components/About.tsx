"use client";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-black">
            Tentang Saya
          </h2>
          <div className="w-35 h-[2px] bg-black mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Photo Left */}
          <div className="relative order-2 md:order-1">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-3/4 max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800"
                alt="Nuryanti - Professional Makeup Artist"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="text-white font-serif text-lg md:text-xl font-semibold">
                  Nuryanti
                </p>
                <p className="text-white/70 text-sm">Professional MUA</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-48 md:h-48 bg-black/5 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-32 h-32 md:w-48 md:h-48 bg-black/10 rounded-full blur-3xl" />
            {/* Frame accent */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 w-full h-full border-2 border-black/10 rounded-3xl z-0 max-w-md mx-auto" />
          </div>

          {/* Description Right */}
          <div className="space-y-6 md:space-y-8 order-1 md:order-2">
            <p className="text-lg md:text-xl text-black/60 leading-relaxed italic font-serif">
              &ldquo;Kecantikan bukan hanya tentang apa yang Anda lihat, tapi
              bagaimana perasaan Anda saat melihat diri sendiri.&rdquo;
            </p>

            <div className="space-y-4 text-black/70 leading-relaxed text-sm md:text-base">
              <p>
                Halo, saya <strong className="text-black">Nuryanti</strong>.
                Berawal dari kecintaan pada dunia seni dan kecantikan, saya
                telah mendedikasikan bertahun-tahun untuk membantu para wanita
                menemukan versi terbaik diri mereka di momen paling spesial.
              </p>
              <p>
                Dengan teknik riasan yang terus berkembang dan penggunaan produk
                premium, saya memastikan setiap klien mendapatkan hasil yang{" "}
                <em>flawless</em>, tahan lama, dan tetap terasa ringan di wajah.
              </p>
              <p>
                Visi saya sederhana:{" "}
                <strong className="text-black">Elegansi yang Timeless</strong>.
                Setiap wajah memiliki karakter unik yang layak ditonjolkan tanpa
                mengubah identitas aslinya.
              </p>
            </div>

            {/* Why Choose Me */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-black">
                Kenapa Memilih Saya?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: "✦",
                    title: "Produk Premium",
                    desc: "Hanya menggunakan produk berkualitas tinggi dari brand ternama untuk hasil sempurna.",
                  },
                  {
                    icon: "✦",
                    title: "Bersertifikasi",
                    desc: "Terlatih dan bersertifikat dari lembaga kecantikan profesional.",
                  },
                  {
                    icon: "✦",
                    title: "Personal Touch",
                    desc: "Setiap klien mendapat konsultasi personal sesuai bentuk wajah & skin tone.",
                  },
                  {
                    icon: "✦",
                    title: "On-Location Service",
                    desc: "Layanan di lokasi Anda — rumah, venue, atau studio. Fleksibel & nyaman.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-3 rounded-xl bg-black/3 border border-black/5"
                  >
                    <span className="text-black text-sm mt-0.5 shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-black font-semibold text-sm">
                        {item.title}
                      </p>
                      <p className="text-black/50 text-xs leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-4 border-t border-black/10">
              <div>
                <p className="text-2xl md:text-3xl font-serif text-black font-bold">
                  5+
                </p>
                <p className="text-xs text-black/50 uppercase tracking-wider mt-1">
                  Tahun
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-serif text-black font-bold">
                  500+
                </p>
                <p className="text-xs text-black/50 uppercase tracking-wider mt-1">
                  Klien
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-serif text-black font-bold">
                  4.9/5
                </p>
                <p className="text-xs text-black/50 uppercase tracking-wider mt-1">
                  Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
