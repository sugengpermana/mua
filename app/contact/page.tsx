import Breadcrumb from "../components/Breadcrumb";
import ContactSection from "../components/Contact";
import FloatingWA from "../components/FloatingWA";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden min-h-screen flex flex-col bg-white">
      <Breadcrumb pageName="Contact Us" />
      <div className="grow flex items-center justify-center py-10 bg-white">
        <ContactSection />
      </div>
      <FloatingWA />
    </main>
  );
}
