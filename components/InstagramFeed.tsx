"use client";

import { useState } from "react";
import { Instagram, Heart, MessageCircle } from "lucide-react";
import { instagramPosts } from "@/data/socialMedia";
import { siteSettings } from "@/data/siteSettings";

export default function InstagramFeed() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const renderInstaFallbackSvg = (caption: string) => {
    return (
      <div className="w-full h-full aspect-square bg-dark-graphite border border-white/5 flex flex-col justify-between p-4 select-none relative overflow-hidden group">
        <div className="absolute inset-0 bg-carbon-pattern opacity-[0.03]"></div>
        
        {/* Instagram Header Mock */}
        <div className="flex items-center space-x-2 relative z-10">
          <div className="w-6 h-6 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red">
            <Instagram className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-bold text-white">velorax_auto_spa</span>
        </div>

        {/* Caption snippet */}
        <p className="text-xs text-chrome-silver leading-relaxed line-clamp-3 my-auto relative z-10 font-medium">
          {caption}
        </p>

        {/* Mock Interactions */}
        <div className="flex items-center space-x-3 text-chrome-silver/60 text-[10px] relative z-10 border-t border-white/5 pt-2">
          <span className="flex items-center"><Heart className="w-3 h-3 mr-1 text-brand-red fill-brand-red/10" /> Beğen</span>
          <span className="flex items-center"><MessageCircle className="w-3 h-3 mr-1" /> Yorum Yap</span>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-carbon-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-bold tracking-widest text-brand-red uppercase mb-3">
            Sosyal Medya
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight">
            Velorax’tan Son Görüntüler
          </h3>
          <p className="text-sm text-chrome-silver mt-4 leading-relaxed">
            Bizi Instagram’da takip ederek en son tamamlanan araçları, detailing süreçlerini ve güncel kampanyaları canlı olarak izleyebilirsiniz.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => {
            const hasError = imageErrors[post.id];
            return (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-square rounded-xl overflow-hidden border border-white/5 bg-dark-graphite shadow-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              >
                {hasError ? (
                  renderInstaFallbackSvg(post.caption)
                ) : (
                  <div className="w-full h-full relative overflow-hidden bg-black/40">
                    <img
                      src={post.imagePath}
                      alt="Velorax Auto Spa Instagram Paylaşımı"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() => handleImageError(post.id)}
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                      {/* Top header */}
                      <div className="flex items-center space-x-2">
                        <Instagram className="w-4 h-4 text-brand-red" />
                        <span className="text-[10px] font-bold text-white">@velorax_auto_spa</span>
                      </div>
                      
                      {/* Caption text */}
                      <p className="text-[10px] sm:text-xs text-chrome-silver leading-relaxed line-clamp-4">
                        {post.caption}
                      </p>

                      {/* View Link */}
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue border-b border-brand-blue/30 w-fit">
                        Paylaşımı Gör
                      </span>
                    </div>
                  </div>
                )}
              </a>
            );
          })}
        </div>

        {/* Follow CTA Button */}
        <div className="text-center mt-12">
          <a
            href={siteSettings.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold tracking-wider uppercase text-white bg-dark-graphite border border-white/10 hover:border-brand-red hover:bg-white/5 transition-all rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red group"
          >
            <Instagram className="w-4 h-4 mr-2 text-brand-red transition-transform group-hover:scale-110" />
            <span>@velorax_auto_spa’yı Takip Et</span>
          </a>
        </div>
      </div>
    </section>
  );
}
