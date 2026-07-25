"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { services } from "@/data/services";
import DynamicIcon from "./DynamicIcon";

export default function ServicesSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Filter only verified and active services
  const activeServices = services.filter((s) => s.active && s.verified);

  const handleImageError = (slug: string) => {
    setImageErrors((prev) => ({ ...prev, [slug]: true }));
  };

  const renderServiceFallbackSvg = (name: string, iconName: string) => {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-carbon-black to-dark-graphite flex flex-col items-center justify-center text-center p-6 select-none relative overflow-hidden group">
        <div className="absolute inset-0 bg-carbon-pattern opacity-[0.05]"></div>
        <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red mb-3 group-hover:scale-110 transition-transform">
          <DynamicIcon name={iconName} className="text-glow-red" size={24} />
        </div>
        <h4 className="text-sm font-bold text-white uppercase tracking-wider">
          {name}
        </h4>
        <span className="text-[10px] text-chrome-silver/60 mt-1 uppercase tracking-widest">
          Velorax Auto Spa
        </span>
      </div>
    );
  };

  return (
    <section id="hizmetler" className="py-20 relative bg-carbon-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-brand-red uppercase mb-3">
            Hizmet Kataloğu
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight">
            Profesyonel Detailing Çözümleri
          </h3>
          <p className="text-sm sm:text-base text-chrome-silver mt-4 leading-relaxed">
            Aracınızın ihtiyacı olan tüm temizlik, koruma ve yenileme uygulamalarını son teknoloji ekipmanlar ve premium işçilikle sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeServices.map((service) => {
            const hasError = imageErrors[service.slug];
            return (
              <div 
                key={service.slug}
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/5 bg-dark-graphite flex flex-col h-full"
              >
                {/* Image / Graphic Container */}
                <div className="relative overflow-hidden aspect-video bg-black/50">
                  {hasError ? (
                    renderServiceFallbackSvg(service.name, service.iconName)
                  ) : (
                    <img
                      src={service.imagePath}
                      alt={`${service.name} Hizmeti - Velorax Auto Spa`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={() => handleImageError(service.slug)}
                      loading="lazy"
                    />
                  )}
                  {/* Category icon float badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-carbon-black/80 backdrop-blur border border-white/10 flex items-center justify-center text-brand-red">
                    <DynamicIcon name={service.iconName} size={20} />
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white font-display">
                      {service.name}
                    </h4>
                    <p className="text-sm text-chrome-silver leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Operational parameters (time, price) if present */}
                  {(service.duration || service.price) && (
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-chrome-silver">
                      {service.duration && (
                        <span>⏰ Süre: {service.duration}</span>
                      )}
                      {service.price && (
                        <span className="font-bold text-white">💰 {service.price}</span>
                      )}
                    </div>
                  )}

                  {/* CTA link */}
                  <div className="pt-2">
                    <Link
                      href={`/hizmetler/${service.slug}`}
                      className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-white hover:text-brand-red transition-colors group"
                    >
                      <span>Hizmeti İncele</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic information card for custom needs */}
        <div className="mt-12 p-6 rounded-2xl border border-white/5 bg-dark-graphite/40 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <HelpCircle className="w-6 h-6 text-brand-blue shrink-0" />
          <p className="text-xs sm:text-sm text-chrome-silver leading-relaxed">
            Aradığınız özel kaplama, restorasyon veya başka bir detailing hizmeti listede yok mu? Bizimle iletişime geçerek bilgi alabilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}
