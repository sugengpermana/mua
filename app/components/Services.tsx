"use client";

const services = [
  {
    title: "Wisuda",
    description:
      "Tampil mempesona di hari kelulusan dengan riasan yang fresh, tahan lama, dan menonjolkan kecantikan alami Anda.",
    icon: "🎓",
    image:
      "https://images.unsplash.com/photo-1523240715630-971c034747a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Lamaran / Engagement",
    description:
      "Sentuhan lembut dan romantis untuk momen pertunangan. Membuat Anda tampil flawless dan penuh percaya diri.",
    icon: "💍",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Pre-Wedding",
    description:
      "Konsep riasan yang disesuaikan dengan tema sesi foto Anda, memastikan hasil jepretan terlihat sempurna dari segala sudut.",
    icon: "📸",
    image:
      "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Akad Nikah",
    description:
      "Riasan sakral yang anggun dan timeless. Fokus pada kesucian dan keindahan paras pengantin wanita.",
    icon: "🕌",
    image:
      "https://images.unsplash.com/photo-1594462215124-91d1e463a429?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Resepsi",
    description:
      "Tampil glamor dan spektakuler di puncak acara. Riasan bold yang tahan lama untuk bersinar di pelaminan.",
    icon: "✨",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Layanan Eksklusif
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Pilih paket layanan yang sesuai dengan kebutuhan momen spesial Anda.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-ivory shadow-premium transition-all hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif text-foreground">
                    {service.title}
                  </h3>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="pt-4">
                  <a
                    href={`https://wa.me/6281234567890?text=Halo%20Nuryanti%20MUA,%20saya%20ingin%20tanya%20paket%20${service.title}.`}
                    className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
                  >
                    Tanya Detail Paket
                    <svg
                      className="w-5 h-5 ml-2"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
