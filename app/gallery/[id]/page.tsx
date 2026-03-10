import { portfolioItems } from "../../data/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import FloatingWA from "../../components/FloatingWA";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({
    id: item.id,
  }));
}

export default async function GalleryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const item = portfolioItems.find((p) => p.id === id);

  if (!item) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden min-h-screen bg-white">
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8 text-sm font-medium border border-black rounded-full px-4 py-2"
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
            Kembali ke Gallery
          </Link>

          <div className="space-y-12">
            <div className="bg-cream rounded-3xl overflow-hidden shadow-premium border border-charcoal/5">
              {item.type === "video" ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  controls
                  autoPlay
                  className="w-full aspect-6/5 sm:aspect-10/7 object-cover"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto max-h-[80vh] object-cover"
                />
              )}
            </div>

            {/* content descripsi galery */}
            <div className="max-w-3xl">
              <span className="text-primary text-sm lg:text-lg  font-semibold tracking-[0.2em] uppercase block mb-4 border border-black rounded-xl px-4 py-1 max-w-fit">
                {item.category}
              </span>
              <hr className="mt-5 mb-5" />
              <h2 className=" text-3xl md:text-5xl font-serif text-charcoal mb-8">
                {item.title}
              </h2>

              <div className="space-y-6 text-muted leading-relaxed text-base md:text-lg mb-10">
                <p>{item.description}</p>
                {/* Additional spacing if needed for more description content */}
              </div>
              <hr className="mt-5 mb-5 max-w-xs" />
              <div className="pt-4">
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Hi aku tertarik dengan Makeup ${item.title}`)}`}
                  className="inline-block bg-charcoal hover:bg-primary text-white px-10 py-4 rounded-full font-semibold transition-colors duration-300 shadow-lg text-[15px] tracking-wide"
                >
                  Booking Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FloatingWA />
    </main>
  );
}
