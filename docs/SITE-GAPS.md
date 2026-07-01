# Site Eksikleri — Legacy vs Yeni Kıyası

> Ana yol haritası ve faz sırası: [`PHASES.md`](./PHASES.md)  
> Kaynak: `_legacy/` (v14 Next.js) ile güncel TanStack Start (v15) karşılaştırması; modern FE / product engineer siteleri referans.

**Güncelleme:** 2026-07-01 (SEO paketi, GA, Web Vitals, llms, görsel optimizasyon, text-balance — statik rotalar)

Parantez içindeki faz notları (`Faz 3`, `Faz 4` vb.) ilgili madde `PHASES.md` içinde de tanımlıysa oraya işaret eder.

**Supabase / blog list-detay beklerken:** Aşağıdaki [Supabase beklerken](#supabase-beklerken-blog-list--detay-hariç) bölümüne bak.

---

## Kesinlikle yap

Lansman öncesi blocker. Yeni site bu maddeler tamamlanmadan eski siteyi geçemez.

- [x] `sitemap.xml` — statik rotalar (`public/sitemap.xml`); blog URL'leri veri hazır olunca eklenir (Faz 4)
- [x] `robots.txt` (Faz 4)
- [x] Web manifest (`site.webmanifest`) (Faz 4)
- [ ] Blog OG + Twitter kartları — kapak görseli, `article` type, `summary_large_image` (Faz 4) — blog detay `head` güncellendi; kapak görselleri Supabase sonrası
- [x] Google Analytics entegrasyonu (Faz 4)
- [x] `llms.txt` + `llms-full.txt` — yeni site için sıfırdan (`public/`) (Faz 4)
- [ ] İnteraktif MDX bileşenlerini yeni blog pipeline'a port et — chart, carousel, clip-path, corner-shape vb. (Faz 4)
- [ ] Bleed CSS — `wide` / `full` görseller (`max-w-3xl` → `max-w-5xl`) (Faz 4)
- [x] Görsel optimizasyonu — `OptimizedImage` bileşeni (`srcset` / lazy load / `picture`); hero ayrı LCP preload (`Faz 4`)
- [x] Sayfa bazlı tam `head` meta — canonical, OG, Twitter (hreflang: i18n yok, atlandı) (Faz 4)
- [x] Statik sayfalar OG + Twitter meta — `/about`, `/projects`, `/experiences`, `/services`, `/bookmarks`
- [x] Ana sayfa JSON-LD — `Person` + `WebSite` schema (blog `BlogPosting` ayrı)
- [x] `env.ts` — GA env anahtarı Zod doğrulama (`VITE_GA_ID`) + `.env.example`
- [ ] Vercel deploy — GitHub bağlantısı, production env, domain geçişi (Faz 4)
- [ ] Production build + Lighthouse / Core Web Vitals doğrulaması — blog sayfaları hariç rotalar dahil (Faz 4)
- [ ] Blog içerik ve asset migration'ını bitir — `public/blog/` mevcut; Supabase taşıması bekliyor (Faz 3)
- [ ] Supabase blog taşıması veya MDX pipeline'ın production-ready olduğunu doğrula (Faz 3) — yerel MDX (`src/content/`) çalışıyor; Supabase bekliyor

---

## Yap

Lansman sonrası kısa vadede; site kalitesini belirgin yükseltir.

- [ ] View Transitions veya hafif giriş animasyonları — `prefers-reduced-motion` uyumlu (Faz 5)
- [ ] RSS / Atom feed — `published = true` only (Faz 4)
- [ ] Newsletter veya bülten CTA (cassidoo / leerob modeli)
- [ ] Blog okuma ilerlemesi + paylaşım butonları
- [x] `text-wrap: balance` — başlık, hero unvan, kart ve liste başlıkları (`prose.styles.ts`)
- [ ] Bundle analyzer + performans bütçesi (`ANALYZE=true` script)
- [ ] Speaking / talks bölümü (varsa konuşmalar listesi)
- [ ] ViraStack'i ana sayfada daha görünür case study kartı
- [ ] Blog seri navigasyonu UI — schema hazır, liste/detayda seri geçişi
- [ ] Test coverage — en az blog helpers, slug redirect, routing
- [x] Web Vitals raporlama (`web-vitals` paketi) (Faz 4)
- [ ] Dinamik OG görselleri — route veya edge function (Faz 4)
- [x] Header ↔ `SITE-CONTENT.md` uyumu — GitHub ikonu header'da (tema + ⌘K yanında)
- [ ] Projeler sayfası — `docs/PROJECTS.md` metin ve showcase uyumu
- [ ] İçerik sayfaları SSOT denetimi — about, services, experiences, bookmarks metinleri
- [ ] İnteraktif MDX bileşenlerini izole sandbox'ta geliştir — blog detay UI'sız ön çalışma
- [ ] ⌘K blog araması — `MOCK_BLOG_POSTS` yerine gerçek veri kaynağına bağla
- [ ] `/about` stack mobil kaydırmalı carousel (Faz 5)
- [ ] Statik rotalar smoke testi — tüm sayfa rotaları + 404

---

## Yapsan da olur

Farklılaştırıcı; blocker değil.

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

## Supabase beklerken (blog list / detay hariç)

> Supabase MDX taşıması bloklu; blog liste ve detay UI'sına dokunmadan ilerlenebilir işler. Üst bölümlerdeki maddelerle çakışanlar oraya referans verir.

### Şimdi başla (önerilen sıra)

- [x] `robots.txt` → [Kesinlikle yap](#kesinlikle-yap)
- [x] Web manifest → [Kesinlikle yap](#kesinlikle-yap)
- [x] `llms.txt` + `llms-full.txt` → [Kesinlikle yap](#kesinlikle-yap)
- [x] Google Analytics + `env.ts` → [Kesinlikle yap](#kesinlikle-yap)
- [x] Web Vitals raporlama → [Yap](#yap)
- [x] Statik sayfalar OG meta → [Kesinlikle yap](#kesinlikle-yap)
- [x] Ana sayfa JSON-LD → [Kesinlikle yap](#kesinlikle-yap)
- [x] `public/blog/` asset kopyası
- [ ] Vercel deploy iskeleti → [Kesinlikle yap](#kesinlikle-yap)
- [x] Hero / proje görsel optimizasyon bileşeni → [Kesinlikle yap](#kesinlikle-yap) (`OptimizedImage`; hero LCP ayrı)
- [ ] İnteraktif MDX izole sandbox → [Yap](#yap)

### Supabase çözülene kadar ertele

- [ ] RSS / Atom feed
- [ ] Dinamik OG (tüm blog yazıları)
- [ ] Engagement: view, like, comment
- [ ] `sitemap.xml` blog URL'leri (tam liste)
- [x] Ana sayfa öne çıkan blog — `getBlogPostsFn` veri hattı (list/detay ile aynı)
- [ ] Supabase blog taşıması → [Kesinlikle yap](#kesinlikle-yap)

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
