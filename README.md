<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/brand/logo-light.svg">
    <img src="public/brand/logo-dark.svg" alt="Velorax Auto Spa logo" width="320">
  </picture>
</p>

# Velorax Auto Spa — Website

**Launch-ready website for Velorax Auto Spa, a car wash and detailing studio in Pursaklar, Ankara.**

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)

> Client project — designed and developed by Berke Coşkuner for **Velorax Auto Spa**.

**Status:** pre-launch. The site ships in `coming-soon` mode and switches to `open` mode with a single setting once the studio opens. Phone, WhatsApp, address and map fields are intentionally empty until the business confirms them, and the domain in `data/siteSettings.ts` is still a placeholder.

---

## Overview

A Turkish-language, dark "detailing studio" themed website for Velorax Auto Spa (car wash, interior cleaning, paint correction and paint protection). It introduces the brand before opening, collects appointment requests and points visitors to the studio's Instagram account. All operational data is kept in small TypeScript files so the owner's details can be filled in without touching components.

## Features

- **Two launch modes** (`openingStatus`): `coming-soon` shows a "Çok yakında • Pursaklar" badge and Instagram call-to-action; `open` enables the location, map and booking blocks
- **Graceful empty states**: phone, WhatsApp, address, map and working-hours elements hide automatically when their value is empty
- **Services** (`/hizmetler`, `/hizmetler/[slug]`): 5 active services (car wash, interior & exterior cleaning, detailed interior cleaning, polishing, paint protection) plus 7 prepared but hidden ones, toggled with `active` / `verified` flags; price and duration are shown only when provided
- **Before / after slider** (`/donusumler`) — draggable comparison component with an SVG fallback when images are missing
- **Gallery** (`/galeri`), Instagram feed section, process steps, trust strip and FAQ accordion
- **Appointment form**: builds a pre-filled WhatsApp message when a number is configured; otherwise copies the request to the clipboard and suggests Instagram
- **SEO**: `AutoWash` / `LocalBusiness` and `BreadcrumbList` JSON-LD, dynamic `sitemap.xml`, `robots.txt` and web app manifest
- **Legal pages**: KVKK, privacy policy, cookie policy

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4, custom CSS |
| Animation | Framer Motion |
| Icons | lucide-react |

## Project structure

```text
app/                    # /, /hakkimizda, /hizmetler, /hizmetler/[slug], /donusumler,
│                       # /galeri, /iletisim, /kvkk, /gizlilik-politikasi, /cerez-politikasi
├── manifest.ts, robots.ts, sitemap.ts
components/             # Hero, ServicesSection, BeforeAfter, Process, GallerySection,
│                       # InstagramFeed, ContactForm, Header, Footer, ...
data/
├── siteSettings.ts     # Brand, contact fields, opening status, SEO
├── services.ts         # Services with active/verified flags
├── transformations.ts  # Before/after items
├── faqs.ts, gallery.ts, socialMedia.ts
public/brand/           # Logo and favicon SVGs
```

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # uses Webpack (see note below)
npm run start
```

> The `dev` and `build` scripts run with `--webpack` instead of Turbopack to avoid build errors when the project folder path contains Unicode characters (e.g. `Masaüstü`).

No environment variables are required.

## Configuration guide

| What | Where |
| --- | --- |
| Launch mode (`coming-soon` / `open`) | `data/siteSettings.ts` → `openingStatus` |
| Phone, WhatsApp, address, map embed, working hours | `data/siteSettings.ts` (empty values stay hidden) |
| Enable a service, set price / duration | `data/services.ts` → `active`, `verified`, `price`, `duration` |
| Before / after images | `data/transformations.ts` + `public/transformations/` |
| FAQ entries | `data/faqs.ts` |

---

## Türkçe

**Velorax Auto Spa için açılışa hazır web sitesi — Ankara Pursaklar'da oto yıkama ve detailing stüdyosu.**

> Müşteri projesi — **Velorax Auto Spa** için Berke Coşkuner tarafından tasarlandı ve geliştirildi.

**Durum:** açılış öncesi. Site `coming-soon` modunda yayınlanır; stüdyo açıldığında tek bir ayarla `open` moduna geçer. Telefon, WhatsApp, adres ve harita alanları işletme onaylayana kadar bilerek boş bırakılmıştır.

### Genel bakış

Oto yıkama, iç temizlik, pasta-cila ve boya koruma hizmetleri sunan Velorax Auto Spa için koyu "detailing stüdyosu" temalı Türkçe web sitesi. Açılış öncesinde markayı tanıtır, randevu talebi toplar ve ziyaretçileri Instagram hesabına yönlendirir. Tüm operasyonel veriler `data/` klasöründeki TypeScript dosyalarından yönetilir.

### Özellikler

- **İki açılış modu:** `coming-soon` ("Çok yakında • Pursaklar" rozeti, Instagram yönlendirmesi) ve `open` (konum, harita, randevu modülleri)
- Boş bırakılan iletişim alanları arayüzde otomatik gizlenir
- 5 aktif hizmet ve `active` / `verified` bayraklarıyla açılabilen 7 hazır hizmet; fiyat ve süre yalnızca girildiğinde gösterilir
- Sürüklenebilir **öncesi / sonrası** karşılaştırma slider'ı (`/donusumler`)
- Galeri, Instagram akışı, süreç adımları ve S.S.S. akordiyonu
- Randevu formu: WhatsApp numarası varsa hazır mesaj açar, yoksa talebi panoya kopyalayıp Instagram'ı önerir
- `AutoWash` JSON-LD şeması, dinamik sitemap, robots ve web manifest
- KVKK, gizlilik ve çerez politikası sayfaları

### Teknolojiler

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, lucide-react.

### Kurulum

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

`dev` ve `build` komutları, Türkçe karakterli klasör yollarında (örn. `Masaüstü`) Turbopack hatalarını önlemek için Webpack ile çalışır. Ortam değişkeni gerekmez.

### Yönetim

- Açılış modu ve iletişim bilgileri → `data/siteSettings.ts`
- Hizmetler → `data/services.ts`
- Öncesi / sonrası görselleri → `data/transformations.ts`
- S.S.S. → `data/faqs.ts`

---

Built by [Berke Coşkuner](https://github.com/CoskunerBerke)
