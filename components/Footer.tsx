"use client";

import Link from "next/link";
import { Instagram, MapPin, Phone, MessageSquare, Clock } from "lucide-react";
import { siteSettings } from "@/data/siteSettings";
import { services } from "@/data/services";

export default function Footer() {
  const activeServices = services.filter((s) => s.active && s.verified);
  const currentYear = new Date().getFullYear();

  // Navigation Links
  const quickLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "Dönüşümler", href: "/donusumler" },
    { name: "Galeri", href: "/galeri" },
    { name: "İletişim", href: "/iletisim" },
  ];

  // Appointment link
  const appointmentLink = siteSettings.whatsapp 
    ? `https://wa.me/${siteSettings.whatsapp.replace(/\D/g, "")}` 
    : siteSettings.phone 
      ? `tel:${siteSettings.phone}` 
      : "/iletisim#randevu";

  return (
    <footer className="bg-dark-graphite border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img 
                src="/brand/logo-light.svg" 
                alt="Velorax Auto Spa Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-chrome-silver leading-relaxed max-w-sm">
              Velorax Auto Spa, sıradan temizliğin ötesine geçerek aracınızı detaylı işçilik, pasta-cila ve boya koruma ile adeta yeniden dönüştürür.
            </p>
            <div className="flex space-x-3">
              <a
                href={siteSettings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-brand-red text-chrome-silver hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                aria-label="Instagram sayfamız"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {siteSettings.phone && (
                <a
                  href={`tel:${siteSettings.phone}`}
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-brand-red text-chrome-silver hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                  aria-label="Telefon ile ara"
                >
                  <Phone className="w-5 h-5" />
                </a>
              )}
              {siteSettings.whatsapp && (
                <a
                  href={`https://wa.me/${siteSettings.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-brand-red text-chrome-silver hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                  aria-label="WhatsApp üzerinden mesaj gönder"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Active Services */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-6 border-l-2 border-brand-red pl-3">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-3 text-sm text-chrome-silver">
              {activeServices.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/hizmetler/${service.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-6 border-l-2 border-brand-red pl-3">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-3 text-sm text-chrome-silver">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={appointmentLink} className="hover:text-white transition-colors">
                  Randevu Al
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Working Info */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-6 border-l-2 border-brand-red pl-3">
              İletişim & Konum
            </h3>
            <ul className="space-y-4 text-sm text-chrome-silver">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-red shrink-0" />
                <div>
                  <span className="block font-semibold text-white">Konum</span>
                  <span className="text-xs">Pursaklar / Şehitlik, Ankara</span>
                  {siteSettings.address && (
                    <span className="block text-xs mt-1 text-chrome-silver/80">{siteSettings.address}</span>
                  )}
                </div>
              </li>
              
              {siteSettings.workingHours && (
                <li className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 text-brand-red shrink-0" />
                  <div>
                    <span className="block font-semibold text-white">Çalışma Saatleri</span>
                    <span className="text-xs">{siteSettings.workingHours}</span>
                  </div>
                </li>
              )}
              
              <li className="flex items-start">
                <Instagram className="w-5 h-5 mr-3 text-brand-red shrink-0" />
                <div>
                  <span className="block font-semibold text-white">Instagram</span>
                  <a
                    href={siteSettings.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs hover:text-white transition-colors underline decoration-brand-red decoration-2"
                  >
                    {siteSettings.instagramUsername}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-8"></div>

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-xs text-chrome-silver/60 space-y-4 md:space-y-0">
          <div>
            &copy; {currentYear} {siteSettings.brandName}. Tüm hakları saklıdır.
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/kvkk" className="hover:text-white transition-colors">
              KVKK Aydınlatma Metni
            </Link>
            <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/cerez-politikasi" className="hover:text-white transition-colors">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
