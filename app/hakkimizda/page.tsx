"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, Award, Eye, Compass, Heart } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Güven ve Şeffaflık",
      desc: "Araç teslim alınırken yapılan ön kontrollerden, uygulama esnasındaki işlemlere kadar tüm süreçleri dürüstlük ve açıklık ilkesiyle yönetiriz."
    },
    {
      icon: Award,
      title: "Üst Düzey İşçilik",
      desc: "Her aracın boyası, iç döşemesi ve malzemesi farklıdır. Malzemeye en doğru ve güvenli tekniklerle müdahale ederek sıfır hata hedefliyoruz."
    },
    {
      icon: Eye,
      title: "Detay Tutkusu",
      desc: "Sıradan temizliklerin gözden kaçırdığı, kapı fitillerinin içi, koltuk altı rayları, havalandırma ızgaraları gibi tüm kör noktaları temizleriz."
    },
    {
      icon: Compass,
      title: "Doğru Teşhis",
      desc: "Çizik giderme işlemlerinden önce boya kalınlığını ölçer, boya ömrünü azaltmadan en parlak ve pürüzsüz sonucu alabileceğimiz seviyeyi koruruz."
    }
  ];

  return (
    <>
      <Header />
      
      <main className="flex-grow pt-32 pb-20 bg-carbon-black relative">
        <div className="absolute inset-0 bg-carbon-pattern opacity-[0.02] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-brand-red uppercase">
              Hikayemiz & Değerlerimiz
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white mt-3 tracking-tight">
              Velorax Detailing Felsefesi
            </h1>
            <div className="w-12 h-1 bg-brand-red mx-auto mt-6"></div>
          </div>

          {/* Content Block */}
          <div className="space-y-8 text-chrome-silver leading-relaxed text-sm sm:text-base mb-16">
            <p>
              Velorax Auto Spa, Ankara Pursaklar’da otomobil tutkunlarına hak ettikleri premium araç bakım standartlarını sunmak amacıyla kurulmuştur. Bizim için araç temizliği, sadece yüzeydeki çamurun veya tozun giderilmesi değil; otomobilin orijinal estetiğini ve değerini ortaya çıkarma sanatıdır.
            </p>
            <p>
              Stüdyomuza giren her araca, kendi segmenti ve marka değeri ne olursa olsun birer sanat eseri gibi yaklaşıyoruz. Boya düzeltme (pasta-cila), boya koruma, detaylı iç temizlik ve yıkama aşamalarımızda kullandığımız her kimyasal ve ekipman, otomotiv sektöründe kendini kanıtlamış güvenli ve profesyonel ürün gruplarından seçilmektedir.
            </p>
            
            <div className="p-6 rounded-xl bg-dark-graphite border border-white/5 my-10">
              <h3 className="text-lg font-bold text-white mb-2 font-display">Temizlik Değil, Dönüşüm</h3>
              <p className="text-xs sm:text-sm">
                Velorax felsefesinde “kabul edilebilir temizlik” yoktur. Her araç, stüdyomuzdan ayrılırken ayna gibi parlayan bir boyaya, derinlemesine temizlenmiş ve dezenfekte edilmiş bir kabine ve uzun süreli yüzey korumasına kavuşmalıdır. Bu standardı yakalamak için işlemlerimizde süreyi değil, doğrudan sonucu hedefleriz.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-display text-white text-center mb-10">
              Bizi Biz Yapan İlkelerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="glass-panel rounded-xl p-6 border border-white/5 bg-dark-graphite/40">
                    <div className="w-10 h-10 rounded-lg bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red mb-4">
                      <Icon className="w-5 h-5 text-glow-red" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-display mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-chrome-silver leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center p-8 rounded-2xl bg-brand-red/5 border border-brand-red/20 max-w-2xl mx-auto">
            <Heart className="w-8 h-8 text-brand-red mx-auto mb-4 animate-pulse" />
            <h3 className="text-lg font-bold text-white font-display mb-2">
              Aracınızı Dönüştürmeye Hazır mısınız?
            </h3>
            <p className="text-xs sm:text-sm text-chrome-silver mb-6">
              Bizimle Instagram DM veya WhatsApp üzerinden iletişime geçerek aracınız için en uygun detailing randevusunu oluşturun.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center px-5 py-3 text-xs font-bold tracking-wider uppercase text-white bg-brand-red hover:bg-brand-red-dark transition-all rounded-lg"
            >
              Randevu Kanallarını Gör
            </Link>
          </div>

        </div>
      </main>
      
      <Footer />
    </>
  );
}
