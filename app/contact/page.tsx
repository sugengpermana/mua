import Breadcrumb from "../components/Breadcrumb";
import ContactSection from "../components/Contact";
import FloatingWA from "../components/FloatingWA";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden min-h-screen">
      <Breadcrumb pageName="Contact Us" />
      <ContactSection />
      <FloatingWA />
    </main>
  );
}
