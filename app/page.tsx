import Hero from "./components/Hero";
import BrandCarousel from "./components/BrandCarousel";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Contact from "./components/Contact";
import FloatingWA from "./components/FloatingWA";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <BrandCarousel />
      <About />
      <Gallery />
      <Services />
      <Contact />
      <FloatingWA />
    </main>
  );
}
