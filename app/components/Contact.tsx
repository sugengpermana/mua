"use client";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 ">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 space-y-3 lg:mt-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-3">
            Hubungi Kami
          </h2>
          <div className="w-30 h-0.5 bg-black mx-auto rounded-full" />
          <p className="text-charcoal/70 max-w-lg mx-auto text-sm md:text-base pt-1">
            anda bisa menghubungi kami untuk informasi lebih lanjut tentang jasa
            makeup kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left — Contact Info */}
          <div className="space-y-6 md:space-y-8">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-black/10 rounded-xl flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-charcoal font-semibold text-sm md:text-base">
                  Lokasi
                </p>
                <p className="text-charcoal/60 text-sm mt-0.5">Jabodetabek</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-black/10 rounded-xl flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-charcoal font-semibold text-sm md:text-base">
                  Telepon / WhatsApp
                </p>
                <p className="text-charcoal/60 text-sm mt-0.5">
                  +62 856-8890-683
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-black/10 rounded-xl flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-charcoal font-semibold text-sm md:text-base">
                  Jam Operasional
                </p>
                <p className="text-charcoal/60 text-sm mt-0.5">Setiap Hari</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4 border-t border-charcoal/10">
              <p className="text-charcoal/50 text-xs uppercase tracking-wider mb-4">
                Follow Us
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/nuryantimua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-charcoal/5 hover:bg-black/10 flex items-center justify-center text-charcoal/60 hover:text-black transition-all"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-charcoal/5 hover:bg-black/10 flex items-center justify-center text-charcoal/60 hover:text-black transition-all"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.023L0 24l6.163-1.617a11.828 11.828 0 005.887 1.564h.005c6.637 0 12.05-5.414 12.05-12.05 0-3.217-1.252-6.241-3.522-8.514" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right — CTA Card */}
          <div className="bg-white shadow-card border border-charcoal/5 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-center space-y-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-black/10 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.023L0 24l6.163-1.617a11.828 11.828 0 005.887 1.564h.005c6.637 0 12.05-5.414 12.05-12.05 0-3.217-1.252-6.241-3.522-8.514" />
                </svg>
              </div>
              <h3 className="text-charcoal text-xl md:text-2xl font-serif font-bold">
                Butuh bantuan? Segera konsultasi dengan kami!
              </h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Chat langsung via WhatsApp untuk diskusi kebutuhan makeup Anda.
                Respon cepat & ramah!
              </p>
            </div>

            <a
              href="https://wa.me/628568890683?"
              className="block bg-black hover:bg-black/80 text-white text-center py-3.5 md:py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-xs md:text-sm lg:text-base"
            >
              Klik di sini untuk konsultasi gratis!
            </a>

            <div className="text-center">
              <p className="text-charcoal/50 text-xs">
                Respon rata-rata dalam 5 - 10 menit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
