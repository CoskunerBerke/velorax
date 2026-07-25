"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Instagram, Calendar } from "lucide-react";
import { siteSettings } from "@/data/siteSettings";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  // Dynamic values based on settings
  const isComingSoon = siteSettings.openingStatus === "coming-soon";
  const badgeText = isComingSoon ? "ÇOK YAKINDA • PURSAKLAR" : "ŞİMDİ HİZMETİNİZDE";
  
  const hasContact = !!(siteSettings.phone || siteSettings.whatsapp);
  const primaryButtonText = hasContact ? "Randevu Al" : "Instagram'dan Randevu Al";
  const primaryButtonHref = hasContact 
    ? "/iletisim#randevu" 
    : siteSettings.instagramUrl;

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-carbon-black pt-16">
      {/* Background Image with Framer Motion Zoom */}
      <div className="absolute inset-0 z-0">
        {imageError ? (
          /* Premium Detailing Studio Fallback Background in CSS */
          <div className="absolute inset-0 bg-gradient-to-br from-carbon-black via-dark-graphite to-carbon-black flex items-center justify-end overflow-hidden">
            {/* Hexagonal Studio Lights Grid Visual representation */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#242a30_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
            
            {/* Glowing red & blue ambiance light tubes */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            {/* Minimalist Vector Car Silhouette with Glowing lights */}
            <div className="hidden md:block w-1/2 h-full relative pr-8 opacity-25">
              <svg className="w-full h-full" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Glowing LED bars of detailing studio */}
                <path d="M 250 50 L 450 50 M 230 80 L 430 80 M 210 110 L 410 110" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.6" filter="drop-shadow(0 0 8px #fff)"/>
                {/* Car Silhouette line */}
                <path d="M 50 250 C 120 250 160 210 180 200 C 230 170 310 160 380 180 C 420 190 440 220 460 250" stroke="#C8D0D7" strokeWidth="3" strokeLinecap="round" />
                {/* Glowing Headlights */}
                <circle cx="450" cy="245" r="8" fill="#43BCEB" filter="drop-shadow(0 0 10px #43BCEB)" />
                {/* Underglow light */}
                <path d="M 120 255 L 420 255" stroke="#E3202A" strokeWidth="8" opacity="0.8" filter="drop-shadow(0 0 12px #E3202A)"/>
              </svg>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            {/* Desktop Hero Image */}
            <img
              src="/images/hero-velorax.webp"
              alt="Velorax Auto Spa Premium Detailing"
              className="hidden md:block w-full h-full object-cover object-right"
              onError={() => setImageError(true)}
            />
            {/* Mobile Hero Image */}
            <img
              src="/images/hero-velorax-mobile.webp"
              alt="Velorax Auto Spa Premium Detailing Mobile"
              className="block md:hidden w-full h-full object-cover object-center"
              onError={() => setImageError(true)}
            />
          </motion.div>
        )}
        
        {/* Sinematic Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-black via-carbon-black/75 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="max-w-2xl text-left">
          {/* Opening Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest text-brand-red uppercase">
              {badgeText}
            </span>
          </motion.div>

          {/* Small Top Header */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs sm:text-sm font-extrabold tracking-widest text-chrome-silver uppercase mb-3 flex items-center"
          >
            <Sparkles className="w-4 h-4 mr-2 text-brand-red text-glow-red" />
            PREMIUM CAR CARE • ANKARA
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-tight mb-4"
          >
            Aracınızın gerçek <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-chrome-silver to-white underline decoration-brand-red decoration-4 underline-offset-8">
              ışıltısını
            </span>{" "}
            ortaya çıkarın.
          </motion.h1>

          {/* Highlight Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-lg sm:text-xl font-bold text-brand-blue tracking-wide uppercase mb-6"
          >
            Temizlik değil, dönüşüm.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm sm:text-base text-chrome-silver leading-relaxed mb-8 max-w-lg"
          >
            Profesyonel oto yıkama, detaylı temizlik, pasta-cila ve boya koruma uygulamalarıyla aracınızı hak ettiği görünüme kavuşturuyoruz.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary Action Button */}
            <Link
              href={primaryButtonHref}
              target={hasContact ? "_self" : "_blank"}
              rel={hasContact ? undefined : "noopener noreferrer"}
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold tracking-wider uppercase text-white bg-brand-red hover:bg-brand-red-dark transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red shadow-lg shadow-brand-red/10 group cursor-pointer"
            >
              {hasContact ? (
                <Calendar className="w-4 h-4 mr-2" />
              ) : (
                <Instagram className="w-4 h-4 mr-2" />
              )}
              <span>{primaryButtonText}</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary Action Button */}
            <Link
              href="#hizmetler"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold tracking-wider uppercase text-white border border-white/10 hover:border-brand-red hover:bg-white/5 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
            >
              <span>Hizmetleri İncele</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical red side light bar */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-transparent via-brand-red to-transparent opacity-30 hidden lg:block"></div>
    </section>
  );
}
