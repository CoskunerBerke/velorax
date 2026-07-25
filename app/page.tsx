"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Crosshair, 
  SlidersHorizontal, 
  ClipboardCheck, 
  Sparkles, 
  CalendarRange, 
  MapPin,
  ChevronDown,
  Instagram,
  Map,
  MessageSquare
} from "lucide-react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfter from "@/components/BeforeAfter";
import Process from "@/components/Process";
import GallerySection from "@/components/GallerySection";
import InstagramFeed from "@/components/InstagramFeed";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

import { siteSettings } from "@/data/siteSettings";
import { faqs } from "@/data/faqs";

export default function Home() {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  const isComingSoon = siteSettings.openingStatus === "coming-soon";

  // Why Us Feature Cards
  const whyUsFeatures = [
    {
      icon: Crosshair,
      title: "Detay Odaklı Uygulama",
      desc: "Gözden kaçabilecek en küçük aralıklar ve detaylar bile stüdyomuzda titizlikle arındırılır."
    },
    {
      icon: SlidersHorizontal,
      title: "Araca Özel Bakım Planı",
      desc: "Her aracın boya kondisyonu ve malzeme yapısı farklıdır. Uygulamalarımızı aracınızın ihtiyacına göre uyarlıyoruz."
    },
    {
      icon: ClipboardCheck,
      title: "Kontrollü Uygulama Süreci",
      desc: "Her aşamada kalite kontrol testleri uygulayarak, işlemleri stüdyo ışıkları altında doğruluyoruz."
    },
    {
      icon: Sparkles,
      title: "Premium Görsel Sonuç",
      desc: "Uygulamalarımız sonucunda aracınız ilk günkü derin parlaklığına ve pürüzsüz boya yüzeyine kavuşur."
    },
    {
      icon: CalendarRange,
      title: "Kolay Randevu",
      desc: "Sosyal medya ve mesaj hatlarımız üzerinden günün her saati hızlıca randevu talebi oluşturabilirsiniz."
    },
    {
      icon: MapPin,
      title: "Ankara / Pursaklar Konumu",
      desc: "Pursaklar Şehitlik bölgesinde, kolay ulaşılabilir stüdyomuzda detailing hizmeti vermekteyiz."
    }
  ];

  const toggleFaq = (index: number) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  return (
    <>
      {/* Header Sticky Navigation */}
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Services Section */}
        <ServicesSection />

        {/* 5. Before / After Transformation Slider */}
        <section className="py-20 bg-dark-graphite border-y border-white/5 relative">
          <div className="absolute inset-0 bg-carbon-pattern opacity-[0.02] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <BeforeAfter 
              beforeImage="/transformations/car-01-before.webp"
              afterImage="/transformations/car-01-after.webp"
            />
          </div>
        </section>

        {/* 6. How We Work / Process Section */}
        <Process />

        {/* 7. Gallery Section */}
        <GallerySection />

        {/* 8. Why Velorax Section */}
        <section className="py-20 bg-dark-graphite relative overflow-hidden">
          <div className="absolute inset-0 bg-carbon-pattern opacity-[0.03] pointer-events-none"></div>
          <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold tracking-widest text-brand-red uppercase mb-3">
                Neden Biz?
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight">
                Velorax Farkı Nedir?
              </h3>
              <p className="text-sm text-chrome-silver mt-4 leading-relaxed">
                Standart yıkama hizmetlerinin ötesinde, otomobil tutkunlarına hitap eden profesyonel bir detailing yaklaşımı sunuyoruz.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyUsFeatures.map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <div 
                    key={index}
                    className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/5 bg-dark-graphite flex flex-col space-y-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shrink-0">
                      <Icon className="w-6 h-6 text-glow-red" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-white font-display">
                        {feat.title}
                      </h4>
                      <p className="text-sm text-chrome-silver leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 9. Opening Announcement or Dynamic Section */}
        {isComingSoon ? (
          <section className="py-20 bg-carbon-black border-t border-white/5 relative overflow-hidden text-center">
            {/* Glow ambient background lights */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                Açılış Hazırlıkları
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-tight max-w-2xl mx-auto">
                Velorax deneyimi çok yakında başlıyor.
              </h2>
              <p className="text-sm sm:text-base text-chrome-silver leading-relaxed max-w-xl mx-auto">
                Pursaklar’da otomobil bakımına yeni bir standart getirmek için hazırlanıyoruz. Açılış duyuruları, hizmet detayları ve kampanyalar için Instagram hesabımızı takip edin.
              </p>
              <div className="pt-4">
                <a
                  href={siteSettings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-4 text-sm font-bold tracking-wider uppercase text-white bg-brand-red hover:bg-brand-red-dark transition-all rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red group"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  <span>Instagram’da Takip Et</span>
                </a>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-20 bg-carbon-black border-t border-white/5 relative text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <span className="text-xs font-bold tracking-widest text-brand-red uppercase">
                Aktif Hizmet
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight">
                Hizmete açıldık!
              </h2>
              <p className="text-sm sm:text-base text-chrome-silver leading-relaxed max-w-xl mx-auto">
                Ankara Pursaklar stüdyomuz tamamlandı ve aracınızın dönüşümü için kapılarımızı açtık. Rezervasyonunuzu hemen planlayın.
              </p>
            </div>
          </section>
        )}

        {/* 10. Instagram Section */}
        <InstagramFeed />

        {/* 11. FAQ Section */}
        <section id="faq" className="py-20 bg-dark-graphite border-t border-white/5 relative">
          <div className="absolute inset-0 bg-carbon-pattern opacity-[0.02] pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-xs font-bold tracking-widest text-brand-red uppercase mb-3">
                Merak Edilenler
              </h2>
              <h3 className="text-3xl font-extrabold font-display text-white tracking-tight">
                Sıkça Sorulan Sorular
              </h3>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = faqOpenIndex === index;
                return (
                  <div 
                    key={index}
                    className="glass-panel rounded-xl overflow-hidden border border-white/5 bg-dark-graphite/40 transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-5 text-left text-white focus:outline-none select-none cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-sm sm:text-base font-display">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-chrome-silver transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180 text-brand-red" : ""}`} />
                    </button>
                    
                    {/* Collapsible Panel */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-[200px] border-t border-white/5" : "max-h-0"
                      }`}
                    >
                      <p className="p-5 text-xs sm:text-sm text-chrome-silver leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 12. Contact Form & Location Section */}
        <section id="iletisim" className="py-20 bg-carbon-black border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Form Side */}
              <ContactForm />

              {/* Location & Map info side */}
              <div className="space-y-8 lg:pl-6">
                <div>
                  <h3 className="text-2xl font-bold font-display text-white mb-4">
                    Stüdyo Detayları
                  </h3>
                  <p className="text-sm text-chrome-silver leading-relaxed mb-6">
                    Detailing stüdyomuz Ankara Pursaklar Şehitlik mevkiinde yer almaktadır. Randevunuzu planladıktan sonra aracınızı belirtilen saatte teslim edebilirsiniz.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-1" />
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
                      <Instagram className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-white text-sm font-display">Telefon</h4>
                        <p className="text-xs sm:text-sm text-chrome-silver">{siteSettings.phone}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start space-x-4">
                    <Instagram className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white text-sm font-display">Sosyal Medya</h4>
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

                {/* Conditional Map View */}
                {siteSettings.mapUrl && (
                  <div className="rounded-xl overflow-hidden border border-white/10 aspect-video w-full bg-dark-graphite shadow-lg">
                    <iframe
                      src={siteSettings.mapUrl}
                      className="w-full h-full border-none"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Velorax Auto Spa Konum Haritası"
                    />
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer component */}
      <Footer />
      
      {/* Bottom Sticky Action Bar (Instagram & Randevu) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-dark-graphite/95 backdrop-blur border-t border-white/5 py-3 px-4 flex items-center justify-around md:hidden shadow-2xl">
        <a 
          href={siteSettings.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-chrome-silver hover:text-white"
        >
          <Instagram className="w-5 h-5 text-brand-red" />
          <span className="text-[9px] font-bold mt-1 uppercase tracking-wider">Instagram</span>
        </a>
        
        <Link 
          href="/iletisim#randevu"
          className="flex flex-col items-center text-chrome-silver hover:text-white"
        >
          <CalendarRange className="w-5 h-5 text-brand-red" />
          <span className="text-[9px] font-bold mt-1 uppercase tracking-wider">Randevu</span>
        </Link>
        
        {siteSettings.mapUrl ? (
          <a 
            href={siteSettings.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-chrome-silver hover:text-white"
          >
            <Map className="w-5 h-5 text-brand-red" />
            <span className="text-[9px] font-bold mt-1 uppercase tracking-wider">Yol Tarifi</span>
          </a>
        ) : (
          <a 
            href={siteSettings.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-chrome-silver hover:text-white"
          >
            <MessageSquare className="w-5 h-5 text-brand-red" />
            <span className="text-[9px] font-bold mt-1 uppercase tracking-wider">DM Mesaj</span>
          </a>
        )}
      </div>
    </>
  );
}
