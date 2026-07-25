"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteSettings } from "@/data/siteSettings";

export default function KvkkPage() {
  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-carbon-black relative">
        <div className="absolute inset-0 bg-carbon-pattern opacity-[0.01] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-chrome-silver space-y-6 text-sm leading-relaxed">
          <h1 className="text-3xl font-extrabold font-display text-white mb-6">
            KVKK Aydınlatma Metni
          </h1>
          <p className="text-xs text-chrome-silver/60">Son Güncelleme: 25 Temmuz 2026</p>

          <p>
            Velorax Auto Spa (“Şirket” veya “İşletme”) olarak kişisel verilerinizin güvenliğine ve gizliliğine önem veriyoruz. Bu doğrultuda, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla, randevu talep formlarımız ve web sitemiz aracılığıyla elde ettiğimiz kişisel verilerinizin işlenme amaçları, hukuki nedenleri ve haklarınız konusunda sizleri bilgilendirmek isteriz.
          </p>

          <h2 className="text-lg font-bold text-white font-display pt-4">1. İşlenen Kişisel Verileriniz</h2>
          <p>
            Web sitemizdeki randevu formunu doldurmanız halinde şu verileriniz işlenmektedir:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Kimlik Bilgisi: Adınız ve soyadınız.</li>
            <li>İletişim Bilgisi: Telefon numaranız.</li>
            <li>Araç Bilgisi: Aracınızın markası, modeli ve üretim yılı.</li>
            <li>Talep Bilgisi: Almak istediğiniz detailing hizmeti türü, tercih ettiğiniz tarih ve ek notlarınız.</li>
          </ul>

          <h2 className="text-lg font-bold text-white font-display pt-4">2. Kişisel Verilerin İşlenme Amaçları</h2>
          <p>
            Kişisel verileriniz, KVKK’nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları dâhilinde şu amaçlarla işlenmektedir:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Detaylı araç bakım, temizlik ve pasta-cila hizmetlerine yönelik randevu taleplerinin alınması ve planlanması.</li>
            <li>Randevu teyidi ve uygulama detayları hakkında sizinle iletişim kurulması.</li>
            <li>Talep ettiğiniz hizmet kapsamında size özel fiyat tekliflerinin hazırlanabilmesi.</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi.</li>
          </ul>

          <h2 className="text-lg font-bold text-white font-display pt-4">3. Kişisel Verilerin Aktarılması</h2>
          <p>
            Toplanan kişisel verileriniz, yukarıda belirtilen amaçlar dışında üçüncü taraflarla kesinlikle paylaşılmamaktadır. Yalnızca yasal bir zorunluluk olması halinde veya adli/idari makamların resmi talepleri doğrultusunda yetkili mercilere aktarılabilecektir. Sitemiz veri tabanında randevu verileri kalıcı olarak saklanmamakta; form verileri doğrudan mesajlaşma veya kopyalama paneli kanalıyla randevunun tamamlanması amacıyla kullanılmaktadır.
          </p>

          <h2 className="text-lg font-bold text-white font-display pt-4">4. Kişisel Veri Toplamanın Hukuki Sebepleri</h2>
          <p>
            Kişisel verileriniz, “Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması” ve “Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması” hukuki sebeplerine dayanılarak elektronik ortamda form doldurmanız suretiyle toplanmaktadır.
          </p>

          <h2 className="text-lg font-bold text-white font-display pt-4">5. Kanun Kapsamındaki Haklarınız</h2>
          <p>
            KVKK’nın 11. maddesi uyarınca veri sahibi olarak şu haklara sahipsiniz:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
            <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
            <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme, silinmesini veya yok edilmesini talep etme.</li>
          </ul>
          <p>
            Haklarınızı kullanmak için Velorax Auto Spa resmi Instagram hesabı ({siteSettings.instagramUsername}) veya aktif olduğunda stüdyomuzun iletişim numaraları üzerinden bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
