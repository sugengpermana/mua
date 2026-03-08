import Breadcrumb from "../components/Breadcrumb";
import ContactSection from "../components/Contact";
import FloatingWA from "../components/FloatingWA";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden min-h-screen flex flex-col bg-cream">
      <Breadcrumb pageName="Contact Us" />
      <div className="grow flex items-center justify-center py-20 bg-cream">
        <ContactSection />
      </div>
      <FloatingWA />
    </main>
  );
}
