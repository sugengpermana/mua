"use client";

const testimonials = [
  {
    name: "Sarah Amanda",
    role: "Bride — Wedding Package",
    content:
      "Nuryanti benar-benar mengerti apa yang saya inginkan. Riasan akad nikah saya sangat natural tapi tetap terlihat mewah. Suami saya sampai terpukau! Terima kasih banyak.",
    rating: 5,
    avatar: "S",
  },
  {
    name: "Dinda Rizky",
    role: "Graduation — Wisuda UGM",
    content:
      "Suka banget sama hasilnya! Make up nya tahan lama seharian walaupun cuaca panas. Foto-foto wisuda jadi kelihatan flawless banget. Recommended!",
    rating: 5,
    avatar: "D",
  },
  {
    name: "Putri Utami",
    role: "Engagement — Lamaran",
    content:
      "Proses bookingnya gampang banget lewat WA. Orangnya ramah dan sangat profesional. Riasan engagement nya cantik banget, smooth dan tahan lama!",
    rating: 5,
    avatar: "P",
  },
  {
    name: "Anisa Rahmawati",
    role: "Sweet Seventeen",
    content:
      "Kak Nuryanti bikin aku kelihatan dewasa tapi tetap natural. Semua teman dan keluarga muji terus. Best MUA ever! 💕",
    rating: 5,
    avatar: "A",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 space-y-3">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal">
            What They Say
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto rounded-full" />
          <p className="text-muted max-w-lg mx-auto text-sm md:text-base pt-1">
            Kepercayaan klien adalah prioritas utama kami.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className="relative bg-cream p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-card group hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
            >
              {/* Stars */}
              <div className="text-primary flex gap-0.5 mb-4 text-sm">
                {[...Array(testi.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal/80 leading-relaxed text-sm md:text-base mb-6 italic">
                &ldquo;{testi.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-11 md:h-11 bg-primary/15 rounded-full flex items-center justify-center font-serif font-bold text-primary text-sm md:text-base">
                  {testi.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal text-sm">
                    {testi.name}
                  </h4>
                  <p className="text-xs text-muted">{testi.role}</p>
                </div>
              </div>

              {/* Decorative Quote */}
              <div className="absolute top-4 right-6 md:right-8 text-5xl md:text-6xl text-primary/8 font-serif leading-none select-none">
                &ldquo;
              </div>

              {/* Subtle gradient stripe */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
