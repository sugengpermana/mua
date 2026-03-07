import Breadcrumb from "../components/Breadcrumb";
import GallerySection from "../components/Gallery";
import FloatingWA from "../components/FloatingWA";

export default function GalleryPage() {
  return (
    <main className="overflow-x-hidden min-h-screen">
      <Breadcrumb pageName="Gallery Makeup" />
      <GallerySection />
      <FloatingWA />
    </main>
  );
}
