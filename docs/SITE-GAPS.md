# Site Eksikleri — Legacy vs Yeni Kıyası

> Ana yol haritası ve faz sırası: [`PHASES.md`](./PHASES.md)  
> Kaynak: `_legacy/` (v14 Next.js) ile güncel TanStack Start (v15) karşılaştırması; modern FE / product engineer siteleri referans.

**Güncelleme:** 2026-07-01

Parantez içindeki faz notları (`Faz 3`, `Faz 4` vb.) ilgili madde `PHASES.md` içinde de tanımlıysa oraya işaret eder.

---

## Kesinlikle yap

Lansman öncesi blocker. Yeni site bu maddeler tamamlanmadan eski siteyi geçemez.

- [ ] `sitemap.xml` — yalnızca yayında içerik (Faz 4)
- [ ] `robots.txt` (Faz 4)
- [ ] Web manifest (`manifest.ts` / `site.webmanifest`) (Faz 4)
- [ ] Blog OG + Twitter kartları — kapak görseli, `article` type, `summary_large_image` (Faz 4)
- [ ] Google Analytics entegrasyonu (Faz 4)
- [ ] `llms.txt` + `llms-full.txt` taşı (`_legacy/public/` → `public/`) (Faz 4)
- [ ] İnteraktif MDX bileşenlerini yeni blog pipeline'a port et — chart, carousel, clip-path, corner-shape vb. (Faz 4)
- [ ] Görsel optimizasyonu — `next/image` eşdeğeri veya CDN + `srcset` / lazy load (Faz 4)
- [ ] Sayfa bazlı tam `head` meta — canonical, keywords, hreflang TR/EN çiftleri (Faz 4)
- [ ] Production build + Lighthouse / Core Web Vitals doğrulaması (Faz 4)
- [ ] Blog içerik ve asset migration'ını bitir — `public/blog/`, tüm slug'lar, görseller (Faz 3)
- [ ] Supabase blog taşıması veya MDX pipeline'ın production-ready olduğunu doğrula (Faz 3)

---

## Yap

Lansman sonrası kısa vadede; site kalitesini belirgin yükseltir.

- [ ] View Transitions veya hafif giriş animasyonları — `prefers-reduced-motion` uyumlu (Faz 5)
- [ ] RSS / Atom feed — `published = true` only (Faz 4)
- [ ] Newsletter veya bülten CTA (cassidoo / leerob modeli)
- [ ] Blog okuma ilerlemesi + paylaşım butonları
- [ ] `text-wrap: balance` veya `react-wrap-balancer` — başlık ve hero metinleri
- [ ] Bundle analyzer + performans bütçesi (`ANALYZE=true` script)
- [ ] Speaking / talks bölümü (varsa konuşmalar listesi)
- [ ] ViraStack'i ana sayfada daha görünür case study kartı
- [ ] Blog seri navigasyonu UI — schema hazır, liste/detayda seri geçişi
- [ ] Test coverage — en az blog helpers, slug redirect, routing
- [ ] Web Vitals raporlama (`web-vitals` paketi) (Faz 4)
- [ ] Dinamik OG görselleri — route veya edge function (Faz 4)

---

## Yapsan da olur

Farklılaştırıcı; blocker değil.

- [ ] Akademi sayfası — içerik doldur (şu an stub) (Faz 2 stub mevcut)
- [ ] Hero doodle'ları — Ramazan, Türkiye (`hero-doodle.constants.ts` toggle) (Faz 5)
- [ ] Link preview hover card — blog içi dış linkler
- [ ] Blog yazı rating bileşeni
- [ ] Konuk yazı / spotlight bölümü
- [ ] Karanlık mod geçiş animasyonu
- [ ] "Şu an ne yapıyorum" / now page
- [ ] Spotify / kitap / oyun widget'ları
- [ ] Site changelog sayfası
- [ ] "Bu siteyi nasıl yaptım" interaktif tur
- [ ] Özel tema paneli (Faz 5)
- [ ] Engagement: view, like, comment — Supabase (Faz 5)
- [ ] i18n — çoklu dil (Faz 5)

---

## Referans rating (100 üzerinden)

Kıyas notu; checklist değil.

| Site | TR (senior FE) | Global |
| --- | ---: | ---: |
| **Eski site (v14, canlı)** | 78 | 74 |
| **Yeni site (v15, WIP)** | 70 | 66 |
| emilkowal.ski | — | 97 |
| joshwcomeau.com | — | 96 |
| leerob.io | — | 94 |
| rauno.me | — | 93 |
| onur.dev | 89 | 88 |
| ademilter.com | 86 | 82 |

**Hedef (migration + Faz 4 tamam):** TR ~84, global ~80.

---

## Eski → Yeni özet

| Kayıp (geri getir) | Kazanç (koru) |
| --- | --- |
| SEO altyapısı, analytics, LLM dosyaları | Prose-first design system |
| İnteraktif blog MDX | ⌘K command palette |
| Motion polish, image optimization | Open to Work + TR/EN CV modal |
| OG zenginliği | Hizmetler sayfası, GitHub calendar |
| | Blog filtreleri (nuqs URL state), tooltip linkler |
