"use client";

import { motion } from "framer-motion";
import { Search, BarChart3, Droplets, Wrench, ShieldCheck, LucideIcon } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Araç Kontrolü",
    description: "Aracınızı stüdyomuza kabul ederken detaylı bir dış kontrol gerçekleştiriyoruz ve genel durum kaydını oluşturuyoruz.",
    icon: Search
  },
  {
    number: "02",
    title: "İhtiyaç Analizi",
    description: "Boya kalınlığı, çizik derinlikleri ve iç mekân kondisyonunu inceleyerek araca özel ihtiyaç listesi oluşturuyoruz.",
    icon: BarChart3
  },
  {
    number: "03",
    title: "Ön Temizlik",
    description: "Yüzeydeki kaba kirleri, demir tozu ve reçine kalıntılarını özel ön yıkama ajanlarıyla arındırarak boyayı hazırlıyoruz.",
    icon: Droplets
  },
  {
    number: "04",
    title: "Detaylı Uygulama",
    description: "Seçilen pasta-cila, boya koruma ya da detaylı iç temizlik işlemlerini üstün işçilik ve titizlikle uyguluyoruz.",
    icon: Wrench
  },
  {
    number: "05",
    title: "Son Kontrol & Teslim",
    description: "Tüm uygulamaları stüdyo ışıkları altında tek tek denetliyor ve kusursuz haliyle teslimatını gerçekleştiriyoruz.",
    icon: ShieldCheck
  }
];

export default function Process() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="surec" className="py-20 relative bg-carbon-black overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-brand-red uppercase mb-3">
            Uygulama Aşamaları
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight">
            Aracınıza Nasıl Dokunuyoruz?
          </h3>
          <p className="text-sm sm:text-base text-chrome-silver mt-4 leading-relaxed">
            Velorax Auto Spa stüdyomuzda her otomobil, standartlaşmış beş aşamalı kusursuzluk sürecinden geçerek teslim edilir.
          </p>
        </div>

        {/* Timeline Desktop (Horizontal) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden lg:grid lg:grid-cols-5 gap-6 relative"
        >
          {/* Connector Line */}
          <div className="absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-red via-brand-blue to-brand-red opacity-20 z-0"></div>

          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.number} 
                variants={itemVariants}
                className="flex flex-col items-center text-center relative z-10 px-2 group"
              >
                {/* Number badge */}
                <div className="text-sm font-bold tracking-widest text-brand-red bg-carbon-black border border-brand-red/30 px-3 py-1 rounded-full mb-4">
                  {step.number}
                </div>

                {/* Icon Container */}
                <div className="w-20 h-20 rounded-2xl bg-dark-graphite border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-red transition-all duration-300 shadow-lg shadow-black/50 group-hover:shadow-brand-red/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Icon className="w-8 h-8 text-chrome-silver group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-white mb-3 font-display">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-chrome-silver leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline Mobile (Vertical) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:hidden space-y-8 relative before:absolute before:top-4 before:bottom-4 before:left-[27px] before:w-[2px] before:bg-white/5"
        >
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.number} 
                variants={itemVariants}
                className="flex items-start space-x-6 relative z-10 group"
              >
                {/* Left side timeline icon bubble */}
                <div className="w-14 h-14 shrink-0 rounded-xl bg-dark-graphite border border-white/10 flex items-center justify-center group-hover:border-brand-red transition-all shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Icon className="w-6 h-6 text-chrome-silver group-hover:text-white transition-colors" />
                </div>

                {/* Right side content */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold text-brand-red tracking-widest">{step.number}</span>
                    <h4 className="text-lg font-bold text-white font-display">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-sm text-chrome-silver leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
