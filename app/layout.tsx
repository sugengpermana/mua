import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "| Professional Makeup Artist — Wedding, Wisuda & Event",
  description:
    "Jasa makeup artist profesional untuk wedding, wisuda, prewedding, engagement, sweet seventeen & event. Hasil flawless, produk premium, pengalaman 5+ tahun. Booking sekarang via WhatsApp!",
  keywords: [
    "MUA",
    "Makeup Artist",
    "MUA Jakarta",
    "MUA jabodetabek",
    "MUA Artist",
    "MUA Tangerang",
    "Makeup Wisuda",
    "Makeup Wedding",
    "Makeup Prewedding",
    "Makeup Lamaran",
    "Makeup Sweet Seventeen",
    "Makeup Party",
    "Makeup Event",
    "Nuryanti MUA",
    "Jasa MUA",
    "Makeup Artist Profesional",
  ],
  openGraph: {
    title: "Nuryanti MUA | Professional Makeup Artist",
    description:
      "Transform your beauty with Nuryanti MUA. Expert makeup services for weddings, graduation, engagement & events. Book now!",
    type: "website",
    locale: "id_ID",
    siteName: "Nuryanti MUA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuryanti MUA | Professional Makeup Artist",
    description:
      "Expert makeup services for weddings, graduation, engagement & events.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Nuryanti MUA",
              description:
                "Jasa makeup artist profesional untuk wedding, wisuda, prewedding, engagement, sweet seventeen & event.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tangerang",
                addressRegion: "Banten",
                addressCountry: "ID",
              },
              telephone: "+628568890683",
              priceRange: "Rp 350.000 - Rp 2.500.000",
              openingHours: "Mo-Su 08:00-21:00",
              sameAs: ["https://instagram.com/nuryantimua"],
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
