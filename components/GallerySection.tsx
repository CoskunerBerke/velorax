"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { galleryItems, galleryCategories } from "@/data/gallery";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  // Lightbox Navigation
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  // Fallback visual SVG for photos
  const renderFallbackSvg = (title: string, catName: string) => {
    return (
      <div className="w-full h-full min-h-[250px] aspect-[4/3] bg-dark-graphite border border-white/5 rounded-xl flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden group">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-carbon-pattern opacity-5"></div>
        <div className="w-12 h-12 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red mb-4 group-hover:scale-110 transition-transform">
          <Camera className="w-6 h-6 text-glow-red" />
        </div>
        <span className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-1">
          {catName}
        </span>
        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
          {title}
        </h4>
        <p className="text-xs text-chrome-silver max-w-[200px] leading-relaxed">
          Görsel yüklenemedi. Gerçek stüdyo fotoğrafı yakında güncellenecektir.
        </p>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-brand-red"></div>
      </div>
    );
  };

  return (
    <section id="galeri" className="py-20 relative bg-carbon-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold tracking-widest text-brand-red uppercase mb-3">
            Görsel Albüm
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight">
            Velorax Detailing Galeri
          </h3>
          <p className="text-sm text-chrome-silver mt-4 leading-relaxed">
            Stüdyomuzda işlem gören premium otomobillerin yıkama, pasta-cila, boya koruma ve iç temizlik aşamalarından en özel kareler.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setImageErrors({}); // Reset error states when switching
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase border transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/10"
                  : "bg-white/5 border-white/5 hover:border-brand-red/30 text-chrome-silver hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const hasError = imageErrors[item.id];
            const catName = galleryCategories.find(c => c.id === item.category)?.name || "Detailing";

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="relative overflow-hidden rounded-xl border border-white/5 bg-dark-graphite cursor-pointer group shadow-lg"
              >
                {hasError ? (
                  renderFallbackSvg(item.title, catName)
                ) : (
                  <div className="aspect-[4/3] w-full overflow-hidden bg-black relative">
                    <img
                      src={item.imagePath}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleImageError(item.id)}
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-[10px] font-extrabold text-brand-red tracking-widest uppercase mb-1">
                        {catName}
                      </span>
                      <h4 className="text-base font-extrabold text-white font-display mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-chrome-silver leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-brand-red text-white transition-colors cursor-pointer"
              aria-label="Kapat (ESC)"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-brand-red text-white transition-colors cursor-pointer"
              aria-label="Önceki Görsel"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Content Area */}
            <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
              <div className="relative aspect-[16/10] max-h-[70vh] rounded-lg overflow-hidden bg-carbon-black border border-white/10 flex items-center justify-center">
                {imageErrors[filteredItems[lightboxIndex].id] ? (
                  <div className="p-8 text-center max-w-sm">
                    <Camera className="w-12 h-12 text-brand-red mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">
                      {filteredItems[lightboxIndex].title}
                    </h4>
                    <p className="text-sm text-chrome-silver">
                      Görsel yüklenemedi. Bu alan daha sonra stüdyo görselleriyle güncellenecektir.
                    </p>
                  </div>
                ) : (
                  <img
                    src={filteredItems[lightboxIndex].imagePath}
                    alt={filteredItems[lightboxIndex].title}
                    className="max-w-full max-h-[70vh] object-contain"
                    onError={() => handleImageError(filteredItems[lightboxIndex].id)}
                  />
                )}
              </div>
              
              {/* Caption details below image */}
              <div className="text-center mt-4 max-w-xl px-4">
                <span className="text-xs font-bold text-brand-red tracking-widest uppercase">
                  {galleryCategories.find(c => c.id === filteredItems[lightboxIndex].category)?.name || "Detailing"}
                </span>
                <h4 className="text-lg font-bold text-white font-display mt-1">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p className="text-sm text-chrome-silver mt-1 leading-relaxed">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-brand-red text-white transition-colors cursor-pointer"
              aria-label="Sonraki Görsel"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
