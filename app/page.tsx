import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FloatingWA from "./components/FloatingWA";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <FloatingWA />
    </main>
  );
}
