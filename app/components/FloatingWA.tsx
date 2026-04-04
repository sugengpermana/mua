"use client";

import { useState, useEffect } from "react";

export default function FloatingWA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    requestAnimationFrame(() => setIsAnimating(true));
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const waNumber = "+6281299755483";
  const waMessage = encodeURIComponent(
    "Halo, saya ingin bertanya tentang layanan makeup",
  );

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-30 flex flex-col gap-4 items-end">
        {/* Scroll To Top Button */}
        <div
          className={`transition-all duration-300 ${
            showScrollTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          <button
            onClick={scrollToTop}
            className="w-10 h-10 md:w-11 md:h-11 bg-black/20 hover:bg-black/40 text-white rounded-xl shadow-lg flex items-center justify-center transition-all backdrop-blur-sm"
            aria-label="Scroll to top"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>

        {/* Floating WA Button */}
        <button
          onClick={openModal}
          className="group flex items-center cursor-pointer relative"
          aria-label="Contact on WhatsApp"
        >
          <div className="mr-3 bg-white px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 font-semibold text-charcoal text-sm hidden sm:block">
            Booking via WA?
          </div>
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white animate-pulse-gold transform transition-transform group-hover:scale-110">
            <svg
              className="w-6 h-6 md:w-7 md:h-7"
              fill="currentColor"
              stroke="none"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.023L0 24l6.163-1.617a11.828 11.828 0 005.887 1.564h.005c6.637 0 12.05-5.414 12.05-12.05 0-3.217-1.252-6.241-3.522-8.514" />
            </svg>
          </div>
        </button>
      </div>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-60 flex items-end justify-end p-4 md:p-6">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
              isAnimating ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeModal}
          />

          {/* Modal */}
          <div
            className={`relative w-full max-w-95 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ease-out ${
              isAnimating
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
            style={{ maxHeight: "min(520px, 80vh)" }}
          >
            {/* Navbar */}
            <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Nuryanti MUA</p>
                  <p className="text-[11px] text-white/70">
                    Biasanya membalas dalam 10 menit
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Chat Body */}
            <div
              className="flex-1 p-4 overflow-y-auto"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5ddd5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundColor: "#ECE5DD",
              }}
            >
              {/* Chat bubble */}
              <div
                className={`max-w-[85%] bg-white rounded-xl rounded-tl-none p-3 shadow-sm transition-all duration-500 delay-200 ${
                  isAnimating
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-[13px] text-gray-800 leading-relaxed">
                  Halo kak, ingin bertanya soal layanan makeup kami? jangan
                  ragu, bisa langsung chat kami ya kak
                </p>
                <p className="text-[10px] text-gray-400 text-right mt-1">
                  {new Date().toLocaleTimeString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>

            {/* Chat Input / CTA */}
            <div className="px-3 py-3 bg-[#F0F0F0] flex items-center gap-2 shrink-0">
              <a
                href={`https://wa.me/${waNumber}?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fba59] text-white py-2.5 px-4 rounded-full font-semibold text-sm transition-all hover:shadow-lg"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.023L0 24l6.163-1.617a11.828 11.828 0 005.887 1.564h.005c6.637 0 12.05-5.414 12.05-12.05 0-3.217-1.252-6.241-3.522-8.514" />
                </svg>
                Tanya via WhatsApp
              </a>
              <button
                onClick={() => {
                  window.open(
                    `https://wa.me/${waNumber}?text=${waMessage}`,
                    "_blank",
                  );
                }}
                className="w-10 h-10 bg-[#25D366] hover:bg-[#1fba59] rounded-full flex items-center justify-center text-white transition-all hover:shadow-lg shrink-0 cursor-pointer"
                aria-label="Send message"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
