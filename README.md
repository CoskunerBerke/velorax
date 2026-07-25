# Velorax Auto Spa - Premium Web Sitesi

Velorax Auto Spa için Next.js 16 App Router, Tailwind CSS, TypeScript ve Framer Motion kullanılarak tasarlanmış, SEO uyumlu ve son derece etkileyici premium otomobil detailing ve temizlik stüdyosu web sitesi.

## Teknolojiler
- **Framework:** Next.js 16 (App Router)
- **Arayüz/Stil:** Tailwind CSS v4, Vanilla CSS (Premium Karbon fiber dokusu, Neon detailing stüdyo ambiyansı)
- **Animasyonlar:** Framer Motion (Mikro-etkileşimler, yumuşak parallax ve kamera yakınlaştırma hareketleri)
- **İkonlar:** Lucide React
- **Optimizasyon:** SEO Uyumlu Semantik HTML, dynamic sitemap.xml, robots.txt, dynamic web manifest, ve Schema.org JSON-LD yapılandırılmış veri entegrasyonu (AutoWash/LocalBusiness & Breadcrumb).

---

## Kurulum ve Çalıştırma

Projenin bağımlılıklarını kurmak ve yerel geliştirme sunucusunu başlatmak için aşağıdaki adımları uygulayın:

### 1. Bağımlılıkları Yükleme
```bash
npm install
```

### 2. Yerel Geliştirme Sunucusunu Başlatma
```bash
npm run dev
```
Sunucu başlatıldıktan sonra tarayıcınızdan `http://localhost:3000` adresine giderek siteyi görüntüleyebilirsiniz.

### 3. Production Build Alma
Unicode klasör yolları (örneğin `Masaüstü` gibi Türkçe karakterler) üzerinde Rust tabanlı Turbopack derleyicisinin hata vermesini önlemek için projenin build komutu **Webpack** altyapısıyla çalışacak şekilde optimize edilmiştir:
```bash
npm run build
```

### 4. Build Sonrası Sunucuyu Başlatma
```bash
npm run start
```

---

## Merkezi Ayarlar & Yönetim Klavuzu

Sitenin tüm operasyonel verileri `data/` klasöründeki bağımsız TypeScript dosyalarından yönetilir.

### 1. Açılış Durumunu Değiştirme (`data/siteSettings.ts`)
Site açılış hazırlığındayken (Coming Soon) veya hizmete başladıktan sonra (Open) metinlerin, butonların ve iletişim formunun davranışını otomatik kontrol etmek için:
- **Dosya:** `data/siteSettings.ts`
- **Ayar:** `openingStatus`
  - `openingStatus: "coming-soon"`: Anasayfada **"ÇOK YAKINDA • PURSAKLAR"** rozeti, büyük açılış duyurusu ve Instagram yönlendirmesi aktif olur.
  - `openingStatus: "open"`: Anasayfada **"ŞİMDİ HİZMETİNİZDE"** rozeti, harita konumu ve aktif randevu alma modülleri açılır.

### 2. İletişim, Adres ve Harita Bilgilerini Ekleme (`data/siteSettings.ts`)
Aşağıdaki alanlar boş (`""`) bırakıldığında, arayüzdeki ilgili butonlar, telefon/WhatsApp hatları, çalışma saatleri veya harita penceresi **kırık veya boş görünmeyecek şekilde otomatik olarak gizlenir**. Yalnızca Instagram kanalı aktif kalır.
- `phone`: Müşterilerin doğrudan arayabileceği telefon numarası.
- `whatsapp`: WhatsApp mesajlaşma numarası (ülke koduyla, örn: `+905551234567`). Eklendiği an randevu formu otomatik olarak bu hatta WhatsApp mesajı hazırlar.
- `address`: Stüdyonun açık adresi. Eklendiğinde arayüze basılır ve SEO şemasına (PostalAddress) dahil edilir.
- `mapUrl`: Google Maps üzerinden alınan `iframe src` bağlantısı. Eklendiği an harita görseli aktifleşir.
- `workingHours`: Çalışma saatleri aralığı (örn: `09:00 - 20:00`).

### 3. Hizmet Ekleme & Aktifleştirme (`data/services.ts`)
İşletme sahibi tarafından henüz onaylanmamış veya ilerleyen dönemde sunulması planlanan hizmetler varsayılan olarak gizlenmiştir.
- **Hizmet Aktifleştirme:** İlgili hizmet nesnesindeki `active` ve `verified` değerlerini `true` yapmanız yeterlidir. Site genelinde ve sitemap.xml üzerinde anında yayınlanacaktır.
- Her hizmet için tahmini işlem süresi (`duration`) ve fiyat (`price`) parametreleri eklenebilir. Bu alanlar boş veya eksik bırakıldığında fiyat alanı arayüzde gizlenir; rastgele veya hatalı bilgi basılmaz.

### 4. Öncesi / Sonrası Dönüşüm Görselleri (`data/transformations.ts`)
Sürükleyebilir ayna yansıması slider'ına yeni araçlar eklemek için bu dosyayı düzenleyebilirsiniz. Eğer ilgili klasörde (`/public/transformations/`) görsel bulunmuyorsa bileşen otomatik olarak şık bir LED stüdyo fırça yansıması ve kılcal çizik simülasyonu yapan SVG fallbacks render eder.

### 5. Sık Sorulan Soruları Düzenleme (`data/faqs.ts`)
Anasayfa altındaki S.S.S. akordiyonunda bulunan tüm soru ve cevapları bu dosyadan ekleyebilir veya güncelleyebilirsiniz.

---

## Git Entegrasyonu

Projeyi kendi GitHub deponuza göndermek için aşağıdaki komutları kullanabilirsiniz:
```bash
git remote add origin https://github.com/CoskunerBerke/velorax.git
git branch -M main
git add .
git commit -m "feat: Velorax Auto Spa premium launch-ready website setup"
git push -u origin main
```
