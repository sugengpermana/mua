import Breadcrumb from "../components/Breadcrumb";
import About from "../components/About";
import FloatingWA from "../components/FloatingWA";

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden min-h-screen">
      <Breadcrumb pageName="About Us" />
      <About />
      <FloatingWA />
    </main>
  );
}
