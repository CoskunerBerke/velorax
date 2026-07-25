"use client";

import { Shield, Sparkles, CheckCircle2, Calendar } from "lucide-react";

export default function TrustStrip() {
  const items = [
    {
      icon: Shield,
      title: "Profesyonel Uygulama",
      desc: "Uzman işçilik standartları"
    },
    {
      icon: Sparkles,
      title: "Detay Odaklı Temizlik",
      desc: "Her noktaya temas"
    },
    {
      icon: CheckCircle2,
      title: "Boya Yüzeyi Bakımı",
      desc: "Kılcal çizik ve hare giderme"
    },
    {
      icon: Calendar,
      title: "Randevulu Hizmet",
      desc: "Zaman kaybı olmadan hızlı teslimat"
    }
  ];

  return (
    <div className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-2xl p-6 shadow-xl border border-white/10 relative overflow-hidden bg-dark-graphite">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-carbon-pattern opacity-10 pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y-0 divide-x-0 md:divide-x divide-white/10">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex items-center space-x-4 px-2 md:px-4 py-2 md:py-0 first:pl-0 last:pr-0"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red shrink-0">
                  <Icon className="w-5 h-5 text-glow-red" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white tracking-wide uppercase font-display">
                    {item.title}
                  </h4>
                  <p className="text-xs text-chrome-silver mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
