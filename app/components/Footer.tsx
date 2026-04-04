export default function Footer() {
  return (
    <footer className="bg-dark py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "Tentang Saya", href: "/about" },
                { name: "Paket & Layanan", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Layanan
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Wedding", href: "/services/makeup-wedding" },
                { name: "Prewedding", href: "/services/makeup-prewedding" },
                { name: "Wisuda", href: "/services/makeup-wisuda" },
                {
                  name: "Photoshoot",
                  href: "/services/makeup-photoshoot",
                },
                {
                  name: "Engagement",
                  href: "/services/makeup-engagement",
                },
                { name: "Makeup Party", href: "/services/makeup-party" },
                {
                  name: "Makeup Daily",
                  href: "/services/makeup-daily",
                },
                {
                  name: "Makeup Character",
                  href: "/services/makeup-character",
                },
              ].map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Kontak
            </h4>
            <ul className="space-y-3 text-white/40 text-sm">
              <li className="flex items-center gap-2">
                <span>📍</span> Jabodetabek
              </li>
              <li className="flex items-center gap-1">
                <span>📱</span> +6281299755483
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-around items-center gap-4 text-white/80 text-xs md:text-sm">
          <p>
            &copy; {new Date().getFullYear()} Nuryanti MUA. All rights reserved.
          </p>
          <p>Crafted with ♥ by Nuryanti MUA</p>
        </div>
      </div>
    </footer>
  );
}
