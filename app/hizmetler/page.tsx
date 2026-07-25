"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import DynamicIcon from "@/components/DynamicIcon";
import { ArrowRight, MessageSquare, AlertCircle } from "lucide-react";
import { siteSettings } from "@/data/siteSettings";

export default function ServicesPage() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Render only verified and active services
  const activeServices = services.filter((s) => s.active && s.verified);

  const handleImageError = (slug: string) => {
    setImageErrors((prev) => ({ ...prev, [slug]: true }));
  };

  const renderServiceFallback = (name: string, iconName: string) => {
    return (
      <div className="w-full h-full min-h-[200px] bg-gradient-to-br from-carbon-black to-dark-graphite flex flex-col items-center justify-center p-6 select-none text-center">
        <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red mb-3">
          <DynamicIcon name={iconName} className="text-glow-red" size={24} />
        </div>
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">{name}</h3>
      </div>
    );
  };

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-carbon-black relative">
        <div className="absolute inset-0 bg-carbon-pattern opacity-[0.02] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-brand-red uppercase">
              Uygulamalarımız & Çözümler
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white mt-3 tracking-tight">
              Velorax Detailing Hizmetleri
            </h1>
            <p className="text-sm sm:text-base text-chrome-silver mt-4 leading-relaxed">
              Aracınızı korumak, değerini artırmak ve ilk günkü parlaklığına geri döndürmek için sunduğumuz tüm profesyonel çözümleri aşağıda inceleyebilirsiniz.
            </p>
          </div>

          {/* Grid Layout of Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {activeServices.map((service) => {
              const hasError = imageErrors[service.slug];
              return (
                <div 
                  key={service.slug}
                  className="glass-panel rounded-2xl overflow-hidden border border-white/5 bg-dark-graphite flex flex-col sm:flex-row h-full"
                >
                  {/* Left Side: Visual Image */}
                  <div className="relative sm:w-2/5 shrink-0 bg-black aspect-video sm:aspect-auto">
                    {hasError ? (
                      renderServiceFallback(service.name, service.iconName)
                    ) : (
                      <img
                        src={service.imagePath}
                        alt={`${service.name} Detayları`}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(service.slug)}
                        loading="lazy"
                      />
                    )}
                    {/* Floating category icon */}
                    <div className="absolute top-4 left-4 w-9 h-9 rounded-lg bg-carbon-black/80 border border-white/10 flex items-center justify-center text-brand-red">
                      <DynamicIcon name={service.iconName} size={18} />
                    </div>
                  </div>

                  {/* Right Side: Details */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white font-display">
                        {service.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-chrome-silver leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Operational parameters if present */}
                    {(service.duration || service.price) && (
                      <div className="flex items-center justify-between text-xs text-chrome-silver border-t border-white/5 pt-3">
                        {service.duration && <span>⏰ Ortalama Süre: {service.duration}</span>}
                        {service.price && <span className="font-bold text-white">💰 {service.price}</span>}
                      </div>
                    )}

                    <div className="pt-2">
                      <Link
                        href={`/hizmetler/${service.slug}`}
                        className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-white hover:text-brand-red transition-all group"
                      >
                        <span>Detayları ve Süreci İncele</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pricing Policy Box */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 bg-dark-graphite/40 max-w-3xl mx-auto flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white font-display">Fiyatlandırma ve Randevu Koşulları</h3>
              <p className="text-xs sm:text-sm text-chrome-silver leading-relaxed">
                Stüdyomuzdaki tüm uygulamalar, aracın segmentine (sedan, SUV, pikap vb.) ve yüzey yıpranma durumuna göre özel olarak belirlenmektedir. Sabit fiyatlar yerine, aracınız stüdyomuzda incelendikten sonra en doğru çözümler ve şeffaf fiyatlandırma sizinle paylaşılır.
              </p>
              <div className="pt-2">
                <a
                  href={siteSettings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-white hover:text-brand-red uppercase transition-colors"
                >
                  <MessageSquare className="w-4 h-4 mr-2 text-brand-red" />
                  <span>Instagram DM Üzerinden Fiyat Teklifi Alın</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
