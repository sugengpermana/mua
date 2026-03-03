"use client";

const testimonials = [
  {
    name: "Sarah Amanda",
    role: "Bride",
    content:
      "Nuryanti benar-benar mengerti apa yang saya inginkan. Riasan akad nikah saya sangat natural tapi tetap terlihat mewah. Terima kasih!",
    rating: 5,
  },
  {
    name: "Dinda Rizky",
    role: "Graduation",
    content:
      "Suka banget sama hasilnya! Make up nya tahan lama seharian walaupun cuaca panas, dan tetap terlihat flawless di foto.",
    rating: 5,
  },
  {
    name: "Putri Utami",
    role: "Engagement",
    content:
      "Proses bookingnya gampang banget lewat WA. Orangnya ramah dan sangat profesional. Sangat merekomendasikan Nuryanti MUA!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            What They Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Kepercayaan Anda adalah prioritas utama kami.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl shadow-premium space-y-6 relative overflow-hidden"
            >
              <div className="text-primary flex gap-1">
                {[...Array(testi.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "{testi.content}"
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-bold text-accent">
                  {testi.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testi.name}</h4>
                  <p className="text-sm text-gray-500">{testi.role}</p>
                </div>
              </div>
              <div className="absolute top-4 right-8 text-6xl text-primary/10 font-serif leading-none">
                "
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
