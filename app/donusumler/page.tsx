"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BeforeAfter from "@/components/BeforeAfter";
import { siteSettings } from "@/data/siteSettings";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TransformationsPage() {
  // Appointment link
  const appointmentLink = siteSettings.whatsapp 
    ? `https://wa.me/${siteSettings.whatsapp.replace(/\D/g, "")}` 
    : siteSettings.phone 
      ? `tel:${siteSettings.phone}` 
      : "/iletisim#randevu";

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-carbon-black relative">
        <div className="absolute inset-0 bg-carbon-pattern opacity-[0.02] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-brand-red uppercase">
              Öncesi & Sonrası
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white mt-3 tracking-tight">
              Velorax Detailing Dönüşümleri
            </h1>
            <p className="text-sm sm:text-base text-chrome-silver mt-4 leading-relaxed">
              Stüdyomuzda uyguladığımız pasta-cila, hare giderici ve boya koruma işlemlerinin otomobil yüzeylerinde bıraktığı inanılmaz etkiyi sürükleyici kaydırıcılar ile kendiniz test edin.
            </p>
          </div>

          {/* Transformation Sliders Display */}
          <div className="space-y-24 max-w-4xl mx-auto mb-16">
            <div className="glass-panel rounded-2xl p-6 border border-white/5 bg-dark-graphite/40">
              <BeforeAfter 
                beforeImage="/transformations/car-01-before.webp"
                afterImage="/transformations/car-01-after.webp"
                title="Boya Düzeltme & Hare Giderme"
                description="Araç kaportasında oluşan dairesel yıkama çiziklerinin, matlığın ve oksitlenmenin boyaya zarar vermeden tamamen giderilmesi."
              />
            </div>
            
            {/* Callout explaining the importance of paint correction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-dark-graphite/30 rounded-2xl p-8 border border-white/5">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-brand-red">
                  <Sparkles className="w-5 h-5 text-glow-red" />
                  <span className="font-bold text-xs tracking-wider uppercase font-display">Ayna Yansıması Teknolojisi</span>
                </div>
                <h3 className="text-xl font-bold text-white font-display">Neden Boya Düzeltme Yaptırmalısınız?</h3>
                <p className="text-xs sm:text-sm text-chrome-silver leading-relaxed">
                  Zamanla yanlış yıkama teknikleri, tozlar ve güneş ışığı boyanın üzerinde örümcek ağına benzeyen kılcal çizikler oluşturur. Bu çizikler ışığı kırarak aracın mat ve solgun görünmesine sebep olur. Velorax stüdyolarında uygulanan boya düzeltme (pasta-cila) işlemi bu kılcal çizik tabakasını mikron seviyesinde düzelterek boyanın altındaki ilk günkü ayna yansımasını yeniden ortaya çıkarır.
                </p>
              </div>
              <div className="space-y-4 md:pl-6 border-l-0 md:border-l border-white/5">
                <h4 className="font-bold text-white text-sm uppercase tracking-wider font-display">Dönüşüm Süresi & İşçilik</h4>
                <p className="text-xs sm:text-sm text-chrome-silver leading-relaxed">
                  Boya düzeltme ve koruma işlemleri aceleye getirilemez. Ortalama bir pasta-cila ve boya koruma süreci aracın boya yıpranma durumuna göre 1 ila 2 gün sürmektedir. Her çizik için boya kalınlığını ölçüyor, en güvenli derinlikte işlem yapıyoruz.
                </p>
                <div className="pt-2">
                  <Link
                    href={appointmentLink}
                    className="inline-flex items-center text-xs font-bold text-white hover:text-brand-red uppercase transition-all group"
                  >
                    <span>Randevu Detaylarını İncele</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
