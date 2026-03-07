import Breadcrumb from "../components/Breadcrumb";
import FloatingWA from "../components/FloatingWA";
import ServicesSection from "../components/Services";

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden min-h-screen">
      <Breadcrumb pageName="Services" />
      <ServicesSection />
      <FloatingWA />
    </main>
  );
}
