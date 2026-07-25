"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteSettings } from "@/data/siteSettings";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-carbon-black relative">
        <div className="absolute inset-0 bg-carbon-pattern opacity-[0.01] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-chrome-silver space-y-6 text-sm leading-relaxed">
          <h1 className="text-3xl font-extrabold font-display text-white mb-6">
            Gizlilik Politikası
          </h1>
          <p className="text-xs text-chrome-silver/60">Son Güncelleme: 25 Temmuz 2026</p>

          <p>
            Velorax Auto Spa (“biz”, “bizim” veya “işletmemiz”) olarak, web sitemizi ziyaret eden kullanıcıların gizlilik haklarına saygı duyuyor ve buna büyük önem veriyoruz. Bu Gizlilik Politikası, sitemizde sunulan randevu formu doldurulduğunda veya siteyi taradığınızda verilerinizin nasıl toplandığı, korunduğu ve kullanıldığı hakkında bilgi vermektedir.
          </p>

          <h2 className="text-lg font-bold text-white font-display pt-4">1. Toplanan Bilgiler ve Toplanma Yöntemi</h2>
          <p>
            Sitemizi ziyaret ettiğinizde, randevu talep formunu doldurmadığınız sürece herhangi bir kişisel veri (isim, telefon vb.) kaydetmeyiz. Randevu formunda isteğe bağlı olarak paylaştığınız bilgiler (Ad-Soyad, Telefon, Araç Marka ve Modeli, İstediğiniz Detailing Hizmeti) yalnızca sizin onayınızla toplanır.
          </p>

          <h2 className="text-lg font-bold text-white font-display pt-4">2. Bilgilerin Kullanım Şekli</h2>
          <p>
            Topladığımız bilgiler sadece şu amaçlar doğrultusunda kullanılmaktadır:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Randevu talebinizin alınması, organize edilmesi ve size teyit mesajı gönderilmesi.</li>
            <li>Aracınızın markası ve yılına uygun detailing veya pasta-cila analizlerinin yapılması.</li>
            <li>Aracınız için stüdyomuz tarafından verilecek tahmini fiyat ve süre bilgisinin iletilmesi.</li>
          </ul>

          <h2 className="text-lg font-bold text-white font-display pt-4">3. Güvenlik ve Saklama Süresi</h2>
          <p>
            Kişisel verileriniz, sitemizin barındırıldığı güvenli sunucularda geçici olarak işlenir. Formu gönderdiğinizde, eğer WhatsApp ile gönderimi seçerseniz veriler doğrudan şifreli WhatsApp mesajına aktarılır; kopyalama seçeneğinde ise tarayıcınızın panosuna kopyalanır. Verileriniz sunucularımızda izinsiz erişimleri engellemek adına saklanmaz ve üçüncü şahıslara kesinlikle kiralanmaz veya satılmaz.
          </p>

          <h2 className="text-lg font-bold text-white font-display pt-4">4. Dış Bağlantılar (Instagram vb.)</h2>
          <p>
            Web sitemiz, Instagram profilimiz ({siteSettings.instagramUrl}) gibi dış bağlantılar içermektedir. Bu harici web sitelerinin kendilerine ait gizlilik politikaları bulunmaktadır ve bizim bu sitelerin gizlilik uygulamaları üzerinde herhangi bir denetimimiz veya sorumluluğumuz bulunmamaktadır.
          </p>

          <h2 className="text-lg font-bold text-white font-display pt-4">5. Değişiklikler</h2>
          <p>
            İşletmemiz, hizmet standartları veya yasal mevzuatlar çerçevesinde bu Gizlilik Politikası üzerinde güncelleme yapma hakkını saklı tutar. Güncellemeler bu sayfada yayınlandığı andan itibaren geçerli olur.
          </p>

          <h2 className="text-lg font-bold text-white font-display pt-4">6. İletişim</h2>
          <p>
            Politikamızla ilgili her türlü soru ve önerileriniz için Instagram hesabımız ({siteSettings.instagramUsername}) üzerinden bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
