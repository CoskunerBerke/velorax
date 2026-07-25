"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";

export default function GalleryPage() {
  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-10 bg-carbon-black relative">
        <div className="absolute inset-0 bg-carbon-pattern opacity-[0.01] pointer-events-none"></div>
        
        {/* Render our detailed interactive gallery component */}
        <GallerySection />
      </main>

      <Footer />
    </>
  );
}
