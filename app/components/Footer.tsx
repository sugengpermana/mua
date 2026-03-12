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
                { name: "About", href: "/about" },
                { name: "Gallery", href: "/gallery" },
                { name: "Services", href: "/services" },
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
                { name: "Wedding", href: "/services/#wedding" },
                { name: "Graduation", href: "/services/#wisuda" },
                { name: "Prewedding", href: "/services/#prewedding" },
                { name: "Engagement", href: "/services/#engagement" },
                { name: "Sweet 17", href: "/services/#sweet-17" },
                { name: "Party", href: "/services/#party" },
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
            <ul className="space-y-2.5 text-white/40 text-sm">
              <li className="flex items-center gap-2">
                <span>📍</span> Jabodetabek
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span> +628568890683
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span> nury@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 md:mt-14 pt-6 md:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/30 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Nuryanti MUA. All rights reserved.
          </p>
          <p>Crafted with ♥ by Nuryanti MUA</p>
        </div>
      </div>
    </footer>
  );
}
