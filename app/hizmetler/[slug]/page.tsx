import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicIcon from "@/components/DynamicIcon";
import { services } from "@/data/services";
import { siteSettings } from "@/data/siteSettings";
import { ArrowLeft, MessageSquare, Clock, Shield, Sparkles } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routes for all active services at build time
export async function generateStaticParams() {
  return services
    .filter((s) => s.active && s.verified)
    .map((s) => ({
      slug: s.slug,
    }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug && s.active && s.verified);

  if (!service) {
    notFound();
  }

  const appointmentLink = siteSettings.whatsapp 
    ? `https://wa.me/${siteSettings.whatsapp.replace(/\D/g, "")}` 
    : siteSettings.phone 
      ? `tel:${siteSettings.phone}` 
      : "/iletisim#randevu";

  // Dummy step details that feel highly premium and automotive themed
  const detailingSubSteps = [
    {
      title: "Yüzey Hazırlığı ve Dekontaminasyon",
      desc: "İşlem yapılacak boya veya iç alanlar, demir tozu ve çevresel kalıntılardan arındırılarak uygulamaya hazır hale getirilir."
    },
    {
      title: "Hassas Maskeleme ve Koruma",
      desc: "Plastik fitiller, logolar ve hassas kenarlar özel bantlarla maskelenerek korumaya alınır."
    },
    {
      title: "Profesyonel El İşçiliği Uygulaması",
      desc: "Velorax stüdyo standartlarında, malzemenin yapısına en uygun makineler ve kimyasal solüsyonlar kullanılarak işlem uygulanır."
    },
    {
      title: "Kalite Kontrol ve Koruyucu Katman",
      desc: "Işık altında denetimler tamamlandıktan sonra, koruyucu cila veya temizleyici katmanlar eklenerek işlem tamamlanır."
    }
  ];

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-carbon-black relative">
        <div className="absolute inset-0 bg-carbon-pattern opacity-[0.02] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/hizmetler"
              className="inline-flex items-center text-xs font-bold text-chrome-silver hover:text-white uppercase tracking-wider space-x-2"
            >
              <ArrowLeft className="w-4 h-4 text-brand-red" />
              <span>Tüm Hizmetlere Dön</span>
            </Link>
          </div>

          {/* Service Title Area */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12 pb-8 border-b border-white/5">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-brand-red/10 border border-brand-red/30">
                <DynamicIcon name={service.iconName} className="w-4 h-4 text-brand-red" />
                <span className="text-[10px] font-bold tracking-widest text-brand-red uppercase">DETAYLI UYGULAMA</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
                {service.name}
              </h1>
            </div>
            
            {/* CTA action */}
            <Link
              href={appointmentLink}
              className="inline-flex items-center justify-center px-5 py-3 text-xs font-bold tracking-wider uppercase text-white bg-brand-red hover:bg-brand-red-dark transition-all rounded-lg"
            >
              Randevu Talep Et
            </Link>
          </div>

          {/* Service Description Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {/* Main Info */}
            <div className="md:col-span-2 space-y-6 text-chrome-silver leading-relaxed text-sm sm:text-base">
              <h3 className="text-lg font-bold text-white font-display">Uygulama Açıklaması</h3>
              <p>{service.description}</p>
              <p>
                Velorax Auto Spa güvencesiyle yapılan bu uygulama, standart oto yıkama ve temizliklerin aksine aracınızın boya ve iç aksam ömrünü uzatmayı hedefler. İşlemler sırasında yüzeye zarar verebilecek asidik temizleyiciler veya kalitesiz kimyasallar kesinlikle kullanılmaz.
              </p>

              {/* Sub-steps of detailing */}
              <div className="pt-6 space-y-6">
                <h3 className="text-lg font-bold text-white font-display">Uygulama Adımları</h3>
                <div className="space-y-4">
                  {detailingSubSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm font-display">{step.title}</h4>
                        <p className="text-xs text-chrome-silver/90 mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Card Parameters */}
            <div className="space-y-6">
              <div className="glass-panel rounded-xl p-6 border border-white/5 bg-dark-graphite/60 space-y-4">
                <h4 className="font-bold text-white font-display text-sm border-b border-white/5 pb-2">Uygulama Detayları</h4>
                
                <div className="flex items-center space-x-3 text-chrome-silver text-xs">
                  <Clock className="w-4 h-4 text-brand-red shrink-0" />
                  <div>
                    <span className="block font-semibold text-white">Tahmini Süre</span>
                    <span>{service.duration || "Araç İncelemesine Bağlı"}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-chrome-silver text-xs">
                  <Shield className="w-4 h-4 text-brand-red shrink-0" />
                  <div>
                    <span className="block font-semibold text-white">Yüzey Koruması</span>
                    <span>Aktif Güvenlik Tabakası</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-chrome-silver text-xs">
                  <Sparkles className="w-4 h-4 text-brand-red shrink-0" />
                  <div>
                    <span className="block font-semibold text-white">Parlaklık Seviyesi</span>
                    <span>Maksimum Derinlik</span>
                  </div>
                </div>
              </div>

              {/* Price inquiry callout */}
              <div className="p-4 rounded-xl border border-white/5 bg-dark-graphite/20 text-center text-xs text-chrome-silver">
                <p className="mb-3">
                  Bu hizmetin fiyatı aracınızın segmentine ve boya yüzeyine göre değişiklik gösterir.
                </p>
                <a
                  href={siteSettings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-bold text-brand-blue hover:text-brand-red transition-colors uppercase space-x-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Fiyat Bilgisi İsteyin</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
