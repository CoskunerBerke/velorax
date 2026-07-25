"use client";

import { useState, FormEvent } from "react";
import { Copy, Check, Instagram, Send, MessageSquare } from "lucide-react";
import { siteSettings } from "@/data/siteSettings";
import { services } from "@/data/services";

export default function ContactForm() {
  const activeServices = services.filter((s) => s.active && s.verified);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carModel: "",
    carYear: "",
    service: activeServices[0]?.name || "",
    date: "",
    message: ""
  });

  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getFormattedMessage = () => {
    return `Merhaba Velorax Auto Spa,

Yeni Randevu Talebi:
👤 Ad Soyad: ${formData.name}
📞 Telefon: ${formData.phone}
🚗 Araç Marka/Model: ${formData.carModel}
📅 Araç Yılı: ${formData.carYear}
🛠️ İstenen Hizmet: ${formData.service}
📆 Tercih Edilen Tarih: ${formData.date}
✉️ Ek Not/Mesaj: ${formData.message || "Belirtilmedi"}

İyi çalışmalar dilerim.`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const messageText = getFormattedMessage();

    // Check if WhatsApp is configured
    if (siteSettings.whatsapp) {
      const cleanWa = siteSettings.whatsapp.replace(/\D/g, "");
      const encodedText = encodeURIComponent(messageText);
      const waUrl = `https://wa.me/${cleanWa}?text=${encodedText}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
      setIsSubmitted(true);
    } else {
      // WhatsApp is not configured - Copy to clipboard & suggest Instagram
      navigator.clipboard.writeText(messageText)
        .then(() => {
          setIsCopied(true);
          setIsSubmitted(true);
          setTimeout(() => setIsCopied(false), 5000);
        })
        .catch((err) => {
          console.error("Metin kopyalanamadı: ", err);
        });
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
          Hızlı Randevu Talebi
        </h3>
        <p className="text-sm text-chrome-silver">
          {siteSettings.whatsapp 
            ? "Formu doldurarak WhatsApp üzerinden hızlıca randevu talebi oluşturabilirsiniz."
            : "Bilgilerinizi doldurun, mesaj otomatik olarak kopyalanacak ve Instagram DM üzerinden kolayca gönderebileceksiniz."}
        </p>
      </div>

      {isSubmitted && !siteSettings.whatsapp && (
        <div className="mb-6 p-4 rounded-lg bg-brand-red/10 border border-brand-red/30 text-white">
          <div className="flex items-center space-x-2 mb-2">
            {isCopied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-brand-red" />}
            <span className="font-bold text-sm">
              {isCopied ? "Mesaj Kopyalandı!" : "Mesajı Kopyalayın"}
            </span>
          </div>
          <p className="text-xs text-chrome-silver mb-3">
            Randevu detaylarınız panoya kopyalandı. Instagram DM kutusuna yapıştırarak bizimle hemen iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(getFormattedMessage());
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 3000);
              }}
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              {isCopied ? "Kopyalandı" : "Yeniden Kopyala"}
            </button>
            <a
              href={siteSettings.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded bg-brand-red hover:bg-brand-red-dark text-white transition-colors space-x-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram DM’e Git</span>
            </a>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Ad Soyad */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-chrome-silver uppercase tracking-wider mb-2">
              Ad Soyad *
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full bg-carbon-black border border-white/10 focus:border-brand-red rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
              placeholder="Ahmet Yılmaz"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* Telefon */}
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-chrome-silver uppercase tracking-wider mb-2">
              Telefon *
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full bg-carbon-black border border-white/10 focus:border-brand-red rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
              placeholder="0555 123 4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Araç Marka / Model */}
          <div>
            <label htmlFor="carModel" className="block text-xs font-semibold text-chrome-silver uppercase tracking-wider mb-2">
              Araç Marka / Model *
            </label>
            <input
              type="text"
              id="carModel"
              required
              className="w-full bg-carbon-black border border-white/10 focus:border-brand-red rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
              placeholder="Audi A4"
              value={formData.carModel}
              onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
            />
          </div>

          {/* Araç Yılı */}
          <div>
            <label htmlFor="carYear" className="block text-xs font-semibold text-chrome-silver uppercase tracking-wider mb-2">
              Araç Yılı *
            </label>
            <input
              type="number"
              id="carYear"
              required
              min="1900"
              max="2030"
              className="w-full bg-carbon-black border border-white/10 focus:border-brand-red rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
              placeholder="2022"
              value={formData.carYear}
              onChange={(e) => setFormData({ ...formData, carYear: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* İstenen Hizmet */}
          <div>
            <label htmlFor="service" className="block text-xs font-semibold text-chrome-silver uppercase tracking-wider mb-2">
              İstenen Hizmet *
            </label>
            <select
              id="service"
              className="w-full bg-carbon-black border border-white/10 focus:border-brand-red rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              {activeServices.map((service) => (
                <option key={service.slug} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tercih Edilen Tarih */}
          <div>
            <label htmlFor="date" className="block text-xs font-semibold text-chrome-silver uppercase tracking-wider mb-2">
              Tercih Edilen Tarih *
            </label>
            <input
              type="date"
              id="date"
              required
              className="w-full bg-carbon-black border border-white/10 focus:border-brand-red rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
        </div>

        {/* Mesaj */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-chrome-silver uppercase tracking-wider mb-2">
            Ek Not / Mesaj
          </label>
          <textarea
            id="message"
            rows={3}
            className="w-full bg-carbon-black border border-white/10 focus:border-brand-red rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors resize-none"
            placeholder="Varsa belirtmek istediğiniz hasar veya özel temizlik istekleri..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        {/* Action Button */}
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold tracking-wider uppercase text-white bg-brand-red hover:bg-brand-red-dark transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red shadow-lg shadow-brand-red/10 cursor-pointer"
        >
          {siteSettings.whatsapp ? (
            <>
              <MessageSquare className="w-4 h-4 mr-2" />
              <span>WhatsApp ile Randevu Talebi Gönder</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              <span>Kopyala ve Instagram DM’e Git</span>
            </>
          )}
        </button>
      </form>

      {/* Direct Instagram CTA */}
      <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <span className="text-chrome-silver">Formu doldurmadan iletişime geçmek ister misiniz?</span>
        <a
          href={siteSettings.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white hover:text-brand-red font-bold transition-colors space-x-1"
        >
          <Instagram className="w-4 h-4" />
          <span>Doğrudan Instagram Profili</span>
        </a>
      </div>
    </div>
  );
}
