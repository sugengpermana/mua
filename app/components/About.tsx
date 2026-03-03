"use client";

export default function About() {
  return (
    <section id="about" className="py-24 bg-ivory">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800"
              alt="Nuryanti - Professional MUA"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-0" />
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-secondary/30 rounded-full blur-3xl -z-0" />
        </div>
        <div className="space-y-8 order-1 md:order-2">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Meet Your Artist
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed italic font-serif">
            "Kecantikan bukan hanya tentang apa yang Anda lihat, tapi bagaimana
            perasaan Anda saat melihat diri sendiri."
          </p>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Halo, saya **Nuryanti**. Berawal dari kecintaan saya pada dunia
              seni dan kecantikan, saya telah mendedikasikan bertahun-tahun
              untuk membantu para wanita menemukan versi terbaik diri mereka di
              momen paling spesial.
            </p>
            <p>
              Dengan teknik riasan yang terus berkembang dan penggunaan produk
              premium (High-End), saya memastikan setiap klien mendapatkan hasil
              yang *flawless*, tahan lama, dan tetap terasa ringan di wajah.
            </p>
            <p>
              Visi saya sederhana: **Elegansi yang Timeless**. Saya percaya
              setiap wajah memiliki karakter unik yang layak ditonjolkan tanpa
              harus mengubah identitas aslinya.
            </p>
          </div>
          <div className="pt-6 grid grid-cols-2 gap-8 border-t border-gray-200">
            <div>
              <p className="text-3xl font-serif text-primary">5+</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-3xl font-serif text-primary">500+</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                Happy Clients
              </p>
            </div>
          </div>
          <div className="pt-4">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Nuryanti,%20saya%20ingin%20konsultasi%20make%20up."
              className="inline-block bg-accent hover:bg-foreground text-white px-8 py-3 rounded-full transition-all shadow-md"
            >
              Hubungi Nuryanti
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
