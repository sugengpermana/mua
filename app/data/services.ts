export interface Service {
  slug: string;
  title: string;
  image: string;
  description: string;
  features: string[];
  notIncluded: string[];
  startingPrice: string;
}

export const services: Service[] = [
  {
    slug: "makeup-photoshoot",
    title: "Makeup Photoshoot",
    image: "/foto/fts-6.webp",
    description:
      "Kami hadirkan tampilan wajah yang seamless dan berdimensi di depan lensa. Dengan teknik yang disesuaikan untuk pencahayaan studio maupun outdoor, riasan kami memastikan tekstur kulit tetap terlihat halus namun tertutup sempurna. Fokus kami adalah membuat kamu bisa tampil percaya diri di setiap sesi foto. dari awal sampai akhir. Jika berminat segera booking layanan kami",
    features: [
      "Konsultasi konsep Makeup",
      "Kualitas produk premium dan tahan lama",
      "Menyesuaikan konsep & tema foto",
    ],
    notIncluded: ["Hairdo", "Transportasi", "Standbye", "Retouch"],
    startingPrice: "Mulai dari Rp 1.500.000",
  },
  {
    slug: "makeup-character",
    title: "Makeup Character",
    image: "/foto/m-char-2.webp",
    description:
      "Layanan makeup karakter profesional untuk kebutuhan teater, film, cosplay, dan acara bertema. Kami menggunakan teknik khusus dan produk berkualitas tinggi untuk menciptakan transformasi karakter yang luar biasa dan tahan lama. Setiap detail diperhatikan untuk menghasilkan look yang autentik dan memukau. Jika berminat segera booking layanan kami",
    features: [
      "Konsultasi konsep Makeup",
      "Kualitas produk premium dan tahan lama",
      "Menyesuaikan konsep & tema foto",
    ],
    notIncluded: ["Hairdo", "Transportasi", "Standbye", "Retouch"],
    startingPrice: "Mulai dari Rp 1.000.000",
  },
  {
    slug: "makeup-party",
    title: "Makeup Party",
    image: "/foto/m-party-8.webp",
    description:
      "Layanan makeup party dengan fokus pada riasan mata yang dramatic dan bibir yang statement. layanan ini cocok untuk ulang tahun, pesta kantor, dan event lainnya.Jika berminat segera booking layanan kami",
    features: [
      "Konsultasi konsep Makeup",
      "Kualitas produk premium dan tahan lama",
      "Menyesuaikan konsep & tema foto",
    ],
    notIncluded: ["Hairdo", "Transportasi", "Standbye", "Retouch"],
    startingPrice: "Mulai dari Rp 1.000.000",
  },
  {
    slug: "makeup-wedding",
    title: "Makeup Wedding",
    image: "/foto/wedding-2.webp",
    description:
      "Kami menyediakan layanan makeup pernikahan lengkap untuk hari pernikahan Anda. Mulai dari akad nikah hingga resepsi, kami memastikan penampilan Anda sempurna sepanjang hari. Jika berminat segera booking layanan kami.",
    features: [
      "Konsultasi konsep Makeup",
      "Kualitas produk premium dan tahan lama",
      "Menyesuaikan konsep & tema foto",
    ],
    notIncluded: ["Hairdo", "Transportasi", "Standbye", "Retouch"],
    startingPrice: "Mulai dari Rp 2.500.000",
  },
  {
    slug: "makeup-prewedding",
    title: "Makeup Prewedding",
    image: "/foto/prewedding-2.webp",
    description:
      "Layanan makeup untuk berbagai acara sehari-hari maupun formal. Cocok untuk sesi foto di alam, Night Session, photoshoot, hingga acara lain nya. Kami menyesuaikan riasan dengan kebutuhan dan preferensi Anda agar tampil percaya diri di setiap momen. Jika berminat segera booking layanan kami",
    features: [
      "Konsultasi konsep Makeup",
      "Kualitas produk premium dan tahan lama",
      "Menyesuaikan konsep & tema foto",
    ],
    notIncluded: ["Hairdo", "Transportasi", "Standbye", "Retouch"],
    startingPrice: "Mulai dari Rp 1.500.000",
  },
  {
    slug: "makeup-wisuda",
    title: "Makeup Wisuda",
    image: "/foto/m-c",
    description:
      "Abadikan pencapaian terbaik Anda dengan tampilan yang memukau dan tahan lama. Kami menghadirkan jasa makeup wisuda profesional yang dirancang khusus untuk tetap terlihat fresh sejak acara seremonial di pagi hari hingga sesi foto keluarga di siang hari. Kami memastikan riasan Anda tetap flawless tanpa perlu khawatir retak atau luntur. Jika berminat segera booking layanan kami",
    features: [
      "Konsultasi konsep Makeup",
      "Kualitas produk premium dan tahan lama",
      "Menyesuaikan konsep & tema foto",
    ],
    notIncluded: ["Hairdo", "Transportasi", "Standbye", "Retouch"],
    startingPrice: "Mulai dari Rp 800.000",
  },

  {
    slug: "makeup-engagement",
    title: "Makeup Engagement",
    image: "/foto/eng-1.webp",
    description:
      "Awali langkah menuju hari bahagia Anda dengan pesona yang sempurna. Kami menghadirkan layanan makeup engagement yang memadukan keanggunan dan ketahanan. Berbekal pengalaman lebih dari 18 tahun, kami memastikan Anda tampil menonjol namun tetap menjadi diri sendiri di hadapan keluarga besar dan lensa kamera. Jika berminat segera booking layanan kami",
    features: [
      "Konsultasi konsep Makeup",
      "Kualitas produk premium dan tahan lama",
      "Menyesuaikan konsep & tema foto",
    ],
    notIncluded: ["Hairdo", "Transportasi", "Standbye", "Retouch"],
    startingPrice: "Mulai dari Rp 1.000.000",
  },

  {
    slug: "makeup-daily",
    title: "Makeup Daily",
    image: "/foto/m-daily-2.webp",
    description:
      "Tampil percaya diri dengan riasan yang ringan namun mampu menonjolkan fitur terbaik wajah Anda. Layanan Makeup Daily kami dirancang untuk memberikan kesan wajah yang segar, cerah, dan bersih tanpa terlihat berlebihan. Menggunakan teknik skin-like finish, kami memastikan Anda siap menjalani hari dengan tampilan yang elegan dan nyaman. Jika berminat segera booking layanan kami",
    features: [
      "Konsultasi konsep Makeup",
      "Kualitas produk premium dan tahan lama",
      "Menyesuaikan konsep & tema foto",
    ],
    notIncluded: ["Hairdo", "Transportasi", "Standbye", "Retouch"],
    startingPrice: "Mulai dari Rp 800.000",
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
