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
          <div className="w-35 h-0.5 bg-black mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Description Right */}
          <div className="space-y-6 md:space-y-8 order-1 md:order-2">
            
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

          {/* Photo Left */}
          <div className="relative order-2 md:order-1">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-4/4 max-w-md mx-auto">
              <img
                src="profile.jpeg"
                alt="Nuryanti - Professional Makeup Artist"
                loading="lazy"
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
            <div className="absolute top-4 left-10 md:top-6 md:left-6 w-full h-full border-2 border-black/10 rounded-3xl z-0 max-w-md mx-auto" />
          </div>
        </div>

        {/* Our Story */}
        <div className="mt-20 md:mt-28 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif text-black mb-3">
            Our Story
          </h3>
          <div className="w-16 h-0.5 bg-black mx-auto mb-8 rounded-full" />
          <div className="space-y-4 text-black/65 leading-relaxed text-sm md:text-base">
            <p>
              Perjalanan saya dimulai dari kamar kecil dengan satu set kuas dan
              mimpi besar. Sejak kecil, saya selalu terpesona oleh seni — mulai
              dari melukis kanvas hingga akhirnya menemukan wajah sebagai media
              ekspresi terbaik.
            </p>
            <p>
              Di tahun pertama, saya belajar otodidak melalui ratusan video
              tutorial, berlatih pada teman-teman dan keluarga. Tekad untuk terus
              berkembang membawa saya mengikuti kursus profesional dan mendapatkan
              sertifikasi resmi.
            </p>
            <p>
              Kini, setelah <strong className="text-black">5+ tahun</strong> dan{" "}
              <strong className="text-black">500+ klien</strong>, setiap sentuhan
              kuas bukan lagi sekadar pekerjaan — melainkan dedikasi untuk membuat
              setiap wanita merasa percaya diri dan cantik di hari terpenting mereka.
              Dari rias wisuda hingga akad nikah sakral, saya hadir untuk mewujudkan
              tampilan impian Anda.
            </p>
          </div>
        </div>

        {/* Why Choose Me — Redesigned */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-serif text-black mb-3">
              Kenapa Memilih Saya?
            </h3>
            <div className="w-16 h-0.5 bg-black mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                ),
                title: "Produk Premium",
                desc: "Hanya menggunakan produk berkualitas tinggi dari brand ternama untuk hasil yang sempurna dan tahan lama.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                ),
                title: "Bersertifikasi",
                desc: "Terlatih dan bersertifikat resmi dari lembaga kecantikan profesional yang terpercaya.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                title: "Personal Touch",
                desc: "Setiap klien mendapat konsultasi personal sesuai bentuk wajah & skin tone unik mereka.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                title: "On-Location Service",
                desc: "Layanan langsung di lokasi Anda — rumah, venue, atau studio. Fleksibel & nyaman.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white border border-black/8 rounded-2xl p-6 md:p-8 text-center hover:shadow-xl hover:border-black/15 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 mx-auto mb-5 bg-black/5 rounded-full flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="text-black font-semibold text-base mb-2">
                  {item.title}
                </h4>
                <p className="text-black/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
