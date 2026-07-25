"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { siteSettings } from "@/data/siteSettings";
import { MapPin, Phone, Instagram, Clock, AlertTriangle } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-carbon-black relative">
        <div className="absolute inset-0 bg-carbon-pattern opacity-[0.02] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-brand-red uppercase">
              İletişim & Rezervasyon
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white mt-3 tracking-tight">
              Randevu Alın veya Bize Ulaşın
            </h1>
            <p className="text-sm sm:text-base text-chrome-silver mt-4 leading-relaxed">
              Aracınızı profesyonel detailing, pasta-cila veya detaylı temizlik uygulamalarıyla dönüştürmek için aşağıdaki rezervasyon talep formunu doldurabilir ya da sosyal medya hesaplarımızdan yazabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Form Column */}
            <div id="randevu" className="scroll-mt-36">
              <ContactForm />
            </div>

            {/* Information Column */}
            <div className="space-y-8 lg:pl-6">
              <div className="glass-panel rounded-2xl p-6 border border-white/5 bg-dark-graphite/40">
                <h3 className="text-lg font-bold text-white font-display mb-4">Stüdyomuz Hakkında</h3>
                <p className="text-xs sm:text-sm text-chrome-silver leading-relaxed">
                  Velorax Auto Spa, Ankara Pursaklar Şehitlik mevkiinde profesyonel araç bakım standartlarıyla hizmet vermektedir. Her marka ve model araç stüdyomuza kabul edilmektedir. Randevunuz onaylandıktan sonra aracı stüdyomuza kendiniz getirebilir ya da ek hizmetlerimizi öğrenebilirsiniz.
                </p>
              </div>

              {/* Dynamic details listing */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shrink-0">
                    <MapPin className="w-5 h-5 text-glow-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm font-display">Adres</h4>
                    <p className="text-xs sm:text-sm text-chrome-silver">Pursaklar / Şehitlik, Ankara</p>
                    {siteSettings.address && (
                      <p className="text-xs text-chrome-silver/70 mt-1">{siteSettings.address}</p>
                    )}
                  </div>
                </div>

                {siteSettings.phone && (
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shrink-0">
                      <Phone className="w-5 h-5 text-glow-red" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm font-display">Telefon İletişim</h4>
                      <p className="text-xs sm:text-sm text-chrome-silver">{siteSettings.phone}</p>
                    </div>
                  </div>
                )}

                {siteSettings.workingHours && (
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shrink-0">
                      <Clock className="w-5 h-5 text-glow-red" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm font-display">Çalışma Saatleri</h4>
                      <p className="text-xs sm:text-sm text-chrome-silver">{siteSettings.workingHours}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shrink-0">
                    <Instagram className="w-5 h-5 text-glow-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm font-display">Instagram Kanalı</h4>
                    <a
                      href={siteSettings.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-brand-blue hover:text-brand-red underline transition-colors"
                    >
                      {siteSettings.instagramUsername}
                    </a>
                  </div>
                </div>
              </div>

              {/* Conditional Google Maps Embed */}
              {siteSettings.mapUrl ? (
                <div className="rounded-2xl overflow-hidden border border-white/5 aspect-video w-full bg-dark-graphite shadow-lg">
                  <iframe
                    src={siteSettings.mapUrl}
                    className="w-full h-full border-none"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Velorax Auto Spa Konum Haritası"
                  />
                </div>
              ) : (
                <div className="p-4 rounded-xl border border-white/5 bg-dark-graphite/20 flex items-center space-x-3 text-xs text-chrome-silver">
                  <AlertTriangle className="w-5 h-5 text-brand-red shrink-0" />
                  <p>Açık adres ve Google Maps konumu doğrulandığında harita görünümü burada aktif olacaktır.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
