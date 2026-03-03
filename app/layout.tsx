import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Nuryanti MUA | Professional Makeup Artist for Graduation, Wedding & Engagement",
  description:
    "Transform your beauty with Nuryanti MUA. Expert services for graduation (wisuda), engagement (lamaran), pre-wedding, and wedding ceremonies. Professional, modern, and high-quality makeup artist services.",
  keywords: [
    "MUA",
    "Makeup Artist",
    "Wisuda",
    "Lamaran",
    "Pre-wedding",
    "Akad Nikah",
    "Resepsi",
    "Nuryanti MUA",
  ],
  openGraph: {
    title: "Nuryanti MUA | Stunning Professional Makeup Services",
    description:
      "Expert makeup for your most special moments. Book your session today!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
