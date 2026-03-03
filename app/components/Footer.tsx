export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-serif font-bold text-primary">
            NURYANTI MUA
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Menghadirkan kecantikan terbaik untuk momen paling berharga dalam
            hidup Anda dengan teknik riasan modern dan produk berkualitas.
          </p>
        </div>
        <div className="space-y-6">
          <h4 className="text-lg font-semibold uppercase tracking-wider text-primary">
            Navigasi
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Profile
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-lg font-semibold uppercase tracking-wider text-primary">
            Kontak
          </h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center">
              <span className="mr-3">📍</span> Tangerang, Banten, Indonesia
            </li>
            <li className="flex items-center">
              <span className="mr-3">📱</span> +62 812-3456-7890
            </li>
            <li className="flex items-center">
              <span className="mr-3">✉️</span> hello@nuryantimua.com
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 pt-16 mt-16 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Nuryanti MUA. All rights reserved.
          Optimized for SEO.
        </p>
      </div>
    </footer>
  );
}
