import GallerySection from "../components/Gallery";
import FloatingWA from "../components/FloatingWA";
import Breadcrumb from "../components/Breadcrumb";

export default function GalleryPage() {
  return (
    <main className="overflow-x-hidden min-h-screen">
      <Breadcrumb pageName="Gallery" />
      <GallerySection />
      <FloatingWA />
    </main>
  );
}
