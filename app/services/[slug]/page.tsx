import { services } from "../../data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import FloatingWA from "../../components/FloatingWA";
import Breadcrumb from "../../components/Breadcrumb";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden min-h-screen bg-white">
      <Breadcrumb pageName={service.title} />
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          {/* Back Button */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-muted hover:text-charcoal transition-colors mb-10 text-sm font-medium border border-black/20 rounded-full px-5 py-2.5 hover:border-black"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Kembali ke Layanan
          </Link>

          {/* Main Content — Image & Description Side-by-Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image Section */}
            <div className="w-full">
              <div className="aspect-4/5 rounded-2xl overflow-hidden bg-gray-100 shadow-premium">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Description Section */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-4">
                Paket Layanan
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6 leading-tight">
                {service.title}
              </h1>

              <div className="w-12 h-0.5 bg-black rounded-full mb-6" />

              <p className="text-muted leading-relaxed text-base md:text-lg mb-8">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-charcoal mb-4">
                  Yang Termasuk
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted text-[15px]"
                    >
                      <svg
                        className="w-5 h-5 text-charcoal shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="border border-black/10 rounded-xl p-5 mb-8">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted mb-1">
                  Harga
                </p>
                <p className="text-2xl font-serif text-charcoal">
                  {service.startingPrice}
                </p>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Halo, saya tertarik dengan paket ${service.title}. Boleh info lebih lanjut?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-charcoal text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg text-[15px] tracking-wide hover:bg-charcoal/85 hover:shadow-xl w-full sm:w-auto text-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Booking via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <FloatingWA />
    </main>
  );
}
