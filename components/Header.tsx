"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Instagram } from "lucide-react";
import { siteSettings } from "@/data/siteSettings";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "Dönüşümler", href: "/donusumler" },
    { name: "Galeri", href: "/galeri" },
    { name: "Nasıl Çalışıyoruz?", href: "/#surec" },
    { name: "Sık Sorulanlar", href: "/#faq" },
    { name: "İletişim", href: "/iletisim" },
  ];

  // Appointment action link
  const appointmentLink = siteSettings.whatsapp 
    ? `https://wa.me/${siteSettings.whatsapp.replace(/\D/g, "")}` 
    : siteSettings.phone 
      ? `tel:${siteSettings.phone}` 
      : "/iletisim#randevu";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-graphite/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:outline-none"
            aria-label="Velorax Auto Spa Ana Sayfa"
          >
            <img 
              src="/brand/logo-light.svg" 
              alt="Velorax Auto Spa Logo" 
              className="h-10 w-auto sm:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Ana Menü">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red ${
                    isActive
                      ? "text-brand-red font-semibold"
                      : "text-chrome-silver hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Dynamic CTA Button */}
          <div className="hidden lg:block">
            <Link
              href={appointmentLink}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold tracking-wider uppercase text-white bg-brand-red hover:bg-brand-red-dark transition-all duration-300 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red shadow-lg shadow-brand-red/10 hover:shadow-brand-red/20 group"
            >
              <span>Randevu Al</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-chrome-silver hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Menüyü aç</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-[60px] sm:top-[68px] z-40 bg-carbon-black/95 backdrop-blur-lg border-t border-white/5 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-4 py-6 space-y-3 h-[calc(100vh-68px)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-base font-semibold tracking-wider transition-colors ${
                  isActive
                    ? "bg-brand-red/10 text-brand-red border-l-4 border-brand-red"
                    : "text-chrome-silver hover:bg-white/5 hover:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-6 border-t border-white/5">
            <Link
              href={appointmentLink}
              className="flex items-center justify-center w-full px-5 py-4 text-base font-bold tracking-wider uppercase text-white bg-brand-red hover:bg-brand-red-dark transition-all rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Randevu Al
            </Link>
            
            {/* Instagram Quick Link */}
            <a
              href={siteSettings.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full mt-4 px-5 py-3 text-sm font-semibold tracking-wider text-chrome-silver hover:text-white border border-white/10 hover:border-brand-red transition-all rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Instagram className="w-4 h-4 mr-2" />
              <span>@velorax_auto_spa</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
