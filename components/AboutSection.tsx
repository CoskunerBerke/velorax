"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckSquare, Award, Clock, Star } from "lucide-react";


export default function AboutSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hakkimizda" className="py-20 relative bg-dark-graphite overflow-hidden">
      {/* Carbon fiber grid pattern background */}
      <div className="absolute inset-0 bg-carbon-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest text-brand-red uppercase">
              Biz Kimiz?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight leading-tight">
              Her detayda kusursuzluk
            </h2>
            <div className="space-y-4 text-chrome-silver leading-relaxed text-sm sm:text-base">
              <p>
                Velorax Auto Spa, aracın yalnızca temiz görünmesini değil, boyasından iç mekânına kadar bütün detaylarının özenle yenilenmesini hedefleyen profesyonel araç bakım merkezidir.
              </p>
              <p>
                Oto yıkama, detaylı temizlik, pasta-cila ve boya koruma uygulamaları; aracın yüzey durumuna ve ihtiyaçlarına göre planlanır. Otomobilinizi sıradan bir temizlik sürecinden değil, premium bir dönüşüm aşamasından geçiriyoruz.
              </p>
            </div>

            {/* Core Values list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3">
                <CheckSquare className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm font-display">Bireysel Yaklaşım</h4>
                  <p className="text-xs text-chrome-silver">Aracın boya kondisyonuna göre özel uygulama planı.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm font-display">Kusursuz İşçilik</h4>
                  <p className="text-xs text-chrome-silver">Ulaşılması en zor noktalarda bile titiz temizlik.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm font-display">Zamanında Teslimat</h4>
                  <p className="text-xs text-chrome-silver">Önceden planlanmış süreçlerle vakit kaybı yaşatmayız.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm font-display">Ayna Yansıması</h4>
                  <p className="text-xs text-chrome-silver">Pasta-cila sonrası pürüzsüz boya yüzeyi garantisi.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link 
                href="/hakkimizda"
                className="inline-flex items-center text-sm font-bold text-white hover:text-brand-red tracking-wider uppercase transition-colors group"
              >
                <span>Hakkımızda Daha Fazla Bilgi</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Image with Fallbacks */}
          <div className="relative group">
            {/* Outline highlight red frame */}
            <div className="absolute -inset-2 rounded-2xl border border-brand-red/10 group-hover:border-brand-red/20 transition-colors pointer-events-none z-0"></div>
            
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 bg-carbon-black shadow-2xl">
              {imageError ? (
                /* Detailing Studio Styling Fallback Graphic */
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-carbon-black to-dark-graphite select-none relative overflow-hidden">
                  <div className="absolute inset-0 bg-carbon-pattern opacity-10"></div>
                  
                  {/* Hexagon detailing LED simulation */}
                  <div className="w-24 h-24 mb-6 stroke-brand-red stroke-[1.5] opacity-35 animate-pulse">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                      <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" stroke="currentColor" strokeWidth="2" />
                      <polygon points="50,25 72,38 72,62 50,75 28,62 28,38" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>
                  
                  <span className="text-xs font-bold text-brand-red uppercase tracking-widest mb-2">
                    Velorax Detailing Studio
                  </span>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider max-w-xs mb-3 font-display">
                    Mikrofiber Bez, Pasta Makinesi & Köpük Uygulamaları
                  </h4>
                  <p className="text-xs text-chrome-silver max-w-sm leading-relaxed">
                    Stüdyomuzdaki tüm pasta-cila, mikrofiber parlatma ve profesyonel köpük yıkama aşamaları üst düzey ekipmanlarla yapılır.
                  </p>
                </div>
              ) : (
                <img
                  src="/images/about-detailing.webp"
                  alt="Velorax Auto Spa Detailing ve Pasta Cila Stüdyosu"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  onError={() => setImageError(true)}
                  loading="lazy"
                />
              )}
              {/* Image bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-20"></div>
            </div>

            {/* Overlay badge */}
            <div className="absolute -bottom-4 -right-4 z-20 bg-brand-red text-white py-3 px-5 rounded-xl shadow-lg border border-white/10 hidden sm:block">
              <span className="block text-2xl font-black tracking-tight font-display text-center leading-none">5/5</span>
              <span className="block text-[9px] font-bold uppercase tracking-widest text-center mt-1">Özen & Kalite</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
