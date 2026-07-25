"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteSettings } from "@/data/siteSettings";

export default function CookiePolicyPage() {
  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20 bg-carbon-black relative">
        <div className="absolute inset-0 bg-carbon-pattern opacity-[0.01] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-chrome-silver space-y-6 text-sm leading-relaxed">
          <h1 className="text-3xl font-extrabold font-display text-white mb-6">
            Çerez Politikası
          </h1>
          <p className="text-xs text-chrome-silver/60">Son Güncelleme: 25 Temmuz 2026</p>

          <p>
            Velorax Auto Spa (“biz”, “bizim” veya “işletmemiz”) olarak, web sitemizin en verimli şekilde çalışması ve kullanıcı deneyiminin iyileştirilmesi amacıyla çerezler (cookies) kullanmaktayız. Bu Çerez Politikası, hangi çerezlerin ne amaçla kullanıldığını ve bunları nasıl kontrol edebileceğinizi açıklamaktadır.
          </p>

          <h2 className="text-lg font-bold text-white font-display pt-4">1. Çerez (Cookie) Nedir?</h2>
          <p>
            Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin daha hızlı çalışmasını, tercihlerinize uygun içerikler sunulmasını ve sitenin analiz edilmesini sağlar.
          </p>

          <h2 className="text-lg font-bold text-white font-display pt-4">2. Hangi Çerez Türlerini Kullanıyoruz?</h2>
          <p>
            Sitemizde kullanılan çerezler genel olarak şu şekildedir:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Zorunlu Çerezler:</strong> Web sitemizin düzgün şekilde çalışması, sayfalar arasında geçiş yapılabilmesi ve güvenlik altyapısının sürdürülmesi için zorunludur. Bu çerezler olmadan site düzgün çalışamaz.
            </li>
            <li>
              <strong>İşlevsel Çerezler:</strong> Tercih ettiğiniz dil, koyu mod ayarları veya form alanlarındaki geçici girdiler gibi kullanıcı tercihlerini hatırlamak amacıyla kullanılır.
            </li>
            <li>
              <strong>Analitik ve Performans Çerezleri:</strong> Sitemizi kaç kişinin ziyaret ettiğini, hangi sayfaların daha çok tıklandığını anlamamıza ve site performansını optimize etmemize yardımcı olan anonim verilerdir.
            </li>
          </ul>

          <h2 className="text-lg font-bold text-white font-display pt-4">3. Çerezlerin Yönetimi ve Devre Dışı Bırakılması</h2>
          <p>
            Çoğu internet tarayıcısı, çerezleri varsayılan olarak kabul edecek şekilde yapılandırılmıştır. Ancak çerezlerin saklanmasını istemiyorsanız, tarayıcınızın ayarlarından çerezleri engelleyebilir, silebilir veya çerez gönderildiğinde uyarı almayı seçebilirsiniz. Çerezleri tamamen devre dışı bırakmanız durumunda, web sitemizin bazı fonksiyonlarının tam olarak çalışmayabileceğini hatırlatmak isteriz.
          </p>
          <p>
            Tarayıcınızın çerez ayarlarını nasıl değiştireceğinizi öğrenmek için ilgili tarayıcının (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge vb.) destek veya yardım sayfalarını ziyaret edebilirsiniz.
          </p>

          <h2 className="text-lg font-bold text-white font-display pt-4">4. Güncellemeler ve İletişim</h2>
          <p>
            Zaman zaman Çerez Politikamız üzerinde güncellemeler yapabiliriz. Herhangi bir değişiklik olması halinde bu sayfada yeni tarihiyle birlikte yayınlanacaktır. Çerezler hakkında merak ettiğiniz diğer detaylar için Instagram profilimiz ({siteSettings.instagramUsername}) üzerinden bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
