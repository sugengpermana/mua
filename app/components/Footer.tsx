export default function Footer() {
  return (
    <footer className="bg-dark py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-xl font-serif font-bold text-primary tracking-widest">
              NURYANTI<span className="text-white font-light"> MUA</span>
            </h3>
            <p className="text-white/40 leading-relaxed text-sm">
              Menghadirkan kecantikan terbaik untuk momen paling berharga dalam
              hidup Anda.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Gallery", href: "#gallery" },
                { name: "Services", href: "#services" },
                { name: "Contact", href: "#contact" },
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
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Layanan
            </h4>
            <ul className="space-y-2.5">
              {[
                "Wedding",
                "Graduation",
                "Prewedding",
                "Engagement",
                "Sweet 17",
                "Party",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Kontak
            </h4>
            <ul className="space-y-2.5 text-white/40 text-sm">
              <li className="flex items-center gap-2">
                <span>📍</span> Tangerang, Banten
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span> +62 812-3456-7890
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span> hello@nuryantimua.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 md:mt-14 pt-6 md:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/30 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Nuryanti MUA. All rights reserved.
          </p>
          <p>Crafted with ♥ for beauty enthusiasts</p>
        </div>
      </div>
    </footer>
  );
}
