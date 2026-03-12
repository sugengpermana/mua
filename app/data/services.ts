export interface Service {
  slug: string;
  title: string;
  image: string;
  description: string;
  features: string[];
  startingPrice: string;
}

export const services: Service[] = [
  {
    slug: "makeup-karakter",
    title: "Makeup Karakter",
    image:
      "https://images.unsplash.com/photo-1595991209266-5126c15bf2f0?auto=format&fit=crop&q=80&w=800",
    description:
      "Layanan makeup karakter profesional untuk kebutuhan teater, film, cosplay, dan acara bertema. Kami menggunakan teknik khusus dan produk berkualitas tinggi untuk menciptakan transformasi karakter yang luar biasa dan tahan lama. Setiap detail diperhatikan untuk menghasilkan look yang autentik dan memukau.",
    features: [
      "Konsultasi konsep karakter",
      "Teknik SFX & body painting",
      "Produk hypoallergenic & skin-safe",
      "Durasi tahan hingga 12 jam",
      "Touch-up kit selama acara",
    ],
    startingPrice: "Mulai dari Rp 500.000",
  },
  {
    slug: "makeup-wedding",
    title: "Makeup Wedding",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    description:
      "Paket makeup pernikahan lengkap untuk hari terpenting dalam hidup Anda. Mulai dari akad nikah hingga resepsi, kami memastikan penampilan Anda sempurna sepanjang hari. Menggunakan teknik airbrush dan produk premium yang tahan lama, disesuaikan dengan tema dan dress code pernikahan Anda.",
    features: [
      "Makeup akad & resepsi",
      "Trial makeup sebelum hari H",
      "Hairdo & pemasangan veil",
      "Touch-up sepanjang acara",
      "Makeup keluarga (opsional)",
      "Produk premium & tahan lama",
    ],
    startingPrice: "Mulai dari Rp 2.500.000",
  },
  {
    slug: "makeup-wisuda",
    title: "Makeup Wisuda",
    image:
      "https://images.unsplash.com/photo-1523240715630-971c034747a2?auto=format&fit=crop&q=80&w=800",
    description:
      "Tampil segar dan percaya diri di hari wisuda Anda. Riasan natural hingga glam yang disesuaikan dengan kepribadian dan outfit wisuda. Tahan lama meskipun cuaca panas, cocok untuk sesi foto indoor maupun outdoor sepanjang hari.",
    features: [
      "Riasan natural hingga glam",
      "Hairdo & styling hijab",
      "Tahan cuaca panas seharian",
      "Cocok untuk foto indoor & outdoor",
      "Paket hemat untuk grup wisuda",
    ],
    startingPrice: "Mulai dari Rp 350.000",
  },
  {
    slug: "makeup-reguler",
    title: "Makeup Reguler",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    description:
      "Layanan makeup untuk berbagai acara sehari-hari maupun formal. Cocok untuk pesta, gathering, photoshoot, hingga acara kantor. Kami menyesuaikan riasan dengan kebutuhan dan preferensi Anda agar tampil percaya diri di setiap momen.",
    features: [
      "Look natural hingga bold",
      "Cocok untuk segala acara",
      "Hairdo sederhana termasuk",
      "Durability hingga 8 jam",
      "Konsultasi look gratis",
    ],
    startingPrice: "Mulai dari Rp 250.000",
  },
  {
    slug: "makeup-prewedding",
    title: "Makeup Prewedding",
    image:
      "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&q=80&w=800",
    description:
      "Riasan prewedding yang dirancang untuk menghasilkan foto-foto terbaik Anda. Dari konsep natural romantis hingga glamour editorial, kami menyesuaikan makeup dengan tema, lokasi, dan pencahayaan sesi foto Anda. Hasil sempurna di setiap angle kamera.",
    features: [
      "Menyesuaikan konsep & tema foto",
      "Cocok untuk outdoor & studio",
      "Makeup camera-ready",
      "Ganti look untuk beda outfit",
      "Hairdo & styling lengkap",
    ],
    startingPrice: "Mulai dari Rp 1.500.000",
  },
  {
    slug: "makeup-party",
    title: "Makeup Party",
    image:
      "https://images.unsplash.com/photo-1526045612212-70caf35c11bc?auto=format&fit=crop&q=80&w=800",
    description:
      "Tampil bold dan memukau di setiap pesta. Layanan makeup party dengan fokus pada riasan mata yang dramatic dan bibir yang statement. Sempurna untuk ulang tahun, sweet seventeen, prom night, dan event malam lainnya.",
    features: [
      "Bold & dramatic look",
      "Glitter & smokey eye specialist",
      "Tahan untuk acara malam",
      "Paket grup tersedia",
      "Free false lashes premium",
    ],
    startingPrice: "Mulai dari Rp 300.000",
  },
];

export interface TrackRecordStat {
  value: number;
  suffix: string;
  label: string;
}

export const trackRecordStats: TrackRecordStat[] = [
  { value: 500, suffix: "+", label: "Client" },
  { value: 99, suffix: "%", label: "Happy Client" },
  { value: 5, suffix: "+", label: "Tahun Experience" },
];
