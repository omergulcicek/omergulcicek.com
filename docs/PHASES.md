# omergulcicek.com — Geliştirme Fazları

> **Agent onboarding:** Build oturumuna başlamadan önce bu dosyayı oku. Detaylar ilgili SSOT dokümanlarında; burada yalnızca sıra ve checklist.

**Mevcut durum (2026-07-04):** Faz 1–4 çekirdeği tamamlandı (Supabase SSR, liste/detay, ⌘K, RSS, sitemap, dinamik OG). Deploy sırada. **Faz 6** — SEO ve Lighthouse performans iyileştirmeleri (kullanıcı incelemesi) devam ediyor.

**Lansman kuralı:** RSS, dinamik OG, llms.txt, GA ve WebVitals bitmeden production'a çıkılmaz. Fazlar organizasyon içindir; MVP tek seferde yayınlanır.

**Eksik listesi (öncelik sırası):** [`SITE-GAPS.md`](./SITE-GAPS.md) — legacy vs yeni kıyası, kesinlikle yap / yap / yapsan da olur, [Supabase beklerken](./SITE-GAPS.md#supabase-beklerken-blog-list--detay-hariç) işleri.

---

## Dokümantasyon Okuma Sırası

Build oturumunda sırayla oku:

`PROJECT-BRIEF.md` → `TECH-STACK.md` → `SITE-CONTENT.md` → `PROJECTS.md` → `BLOG.md` → `supabase-migration.md` → `ABOUT.md` → `EXPERIENCES.md` → `SERVICES.md` → `BOOKMARKS.md` → `SEARCH.md` → `architecture-guide.md`

---

## Ön Hazırlık — Kurulum (Faz öncesi)

Bu adımlar tamamlanmadan Faz 1'e geçilmez.

### A. TanStack Start Kurulumu

- [x] TanStack Start projesi oluştur (Vite + SSR, file-based routing: `src/routes/`)
- [x] `pnpm install` — bağımlılıklar kuruldu
- [x] `package.json` script'leri: `dev`, `build`, `preview`, `lint`, `check-types`, `generate-routes`
- [x] Path alias `@/` → `src/` (`tsconfig.json`)
- [x] `.gitignore`, `.prettierrc`, `eslint.config` yapılandırması
- [x] `components.json` — shadcn/ui + `@svgl/*` registry
- [x] Tailwind CSS 4 + `src/styles.css` — OKLCH renk değişkenleri (açık/koyu)
- [x] Inter font (`@fontsource-variable/inter`, `src/styles/inter-font.css`)
- [x] `src/env.ts` — Zod ile env doğrulama (`.env.example` ile uyumlu)
- [x] `public/` — legacy asset'ler taşınır (`omergulcicek.JPG`, `projects/`, `favicon.svg` vb.)
- [x] `pnpm dev` çalışıyor (`:3000`)
- [x] `pnpm lint && pnpm check-types` geçiyor

**Referans:** `docs/TECH-STACK.md` · `docs/architecture-guide.md`

### B. ViraStack AI Rules + Skills

- [x] `npx @virastack/ai-rules init` — `.cursor/rules/*.mdc` doğrulandı
- [x] `npx skills add jakubkrehel/make-interfaces-feel-better` (**zorunlu** — v1 statik UI cila)
- [x] `npx skills add emilkowalski/skill` (**zorunlu** — v2 motion; kurulu olmalı, v1'de kullanılmaz)
- [x] Skill doğrulama: `.cursor/rules/` + her iki skill yüklü

**Referans:** `docs/TECH-STACK.md` → AI Araçları ve Kurallar

### C. Mimari İskelet

- [x] `src/features/` klasör yapısı (`architecture-guide.md` ağacı)
- [x] `src/components/shared/` — `Container`, `SiteLayout` iskeleti
- [x] `src/constants/` — `header-nav`, `footer-nav`, `social`, `site-flags` iskeleti
- [x] `src/lib/utils.ts` — `cn()`
- [x] `src/lib/media/` — mevcut `getMediaUrl` entegre (`VITE_MEDIA_PROVIDER=local`)
- [x] Tüm sayfa rotaları için route'lar (`src/routes/`)
- [x] `pnpm generate-routes` çalışıyor

---

## Faz 1 — Kabuk, Tasarım Sistemi ve Ana Sayfa

**Hedef:** Ziyaretçinin gördüğü ilk deneyim — layout, tema, ana sayfa ve ⌘K.

**SSOT:** `SITE-CONTENT.md` · `PROJECTS.md` (öne çıkan 2) · `SEARCH.md` · `PROJECT-BRIEF.md` → Tasarım Sistemi

### Layout ve Navigasyon

- [x] `Container` — `max-w-2xl`, `px-4 sm:px-6`, ortalanmış
- [x] `SiteLayout` — `<main id="main-content">` landmark
- [x] `Header` — marka: `@lucide/lab` rose ikonu yalnızca (metin yok) → `/`; nav: Ana Sayfa · Blog · Projeler · Hakkımda
- [x] Header'da tema düğmesi + ⌘K tetikleyici + **GitHub ikonu**
- [x] `Footer` — üst: `BrandMark`; orta: Keşfet + ViraStack (iki sütun); alt: build credit + kaynak kod + telif
- [x] Tipografi — hero isim/unvan/metin `text-base` (16px); isim + unvan `font-medium` (500); bölüm başlıkları `text-base` (`SITE-CONTENT.md`)
- [x] Tema geçişi: Açık → Koyu; `localStorage` + `__root.tsx` flash önleme script'i

### Ana Sayfa (`/`)

- [x] **Hero** — portre (`public/omergulcicek-672.webp`), isim, unvan (Frontend Engineer), sosyal linkler, 2 paragraf
- [x] `hero-doodle.constants.ts` — boolean toggle'lar, varsayılan `false` (render Faz 5'te)
- [x] **Öne çıkan projeler (2)** — Footy + Takvim; showcase **kapalı** (yalnızca kart)
- [x] **Mini stack strip** — ~8–10 logo; Magic UI Marquee (`@magicui/marquee`); SVGL ikonları
- [x] **Öne çıkan blog (3)** — `getBlogPostsFn` ile gerçek veri
- [x] **Deneyim özeti (3)** — şirket logosu + 1 satır (CV düğmesi yalnızca `/experiences`)

### ⌘K Command Palette (MVP — kısmi)

- [x] `cmdk` + shadcn `Command` — modal dialog
- [x] Sayfa araması (8 rota)
- [x] Proje araması (`projects.constants.ts`)
- [x] Yer imleri araması — 7 kategori (`bookmarks.constants.ts`)
- [x] Hızlı eylemler (e-posta, GitHub, ViraStack)
- [x] Blog yazıları grubu: gerçek veri kaynağı (`getBlogPostsFn`, yalnızca `published = true`)

### Kurallar (Faz 1)

- [x] v1'de **Framer Motion yok** — CSS hover/focus/transition serbest
- [x] Görünen Türkçe metinler `SITE-CONTENT.md`'den; metin uydurma yok
- [x] `pnpm lint && pnpm check-types` geçiyor

---

## Faz 2 — İçerik Sayfaları

**Hedef:** Header dışındaki tüm sayfaların içerikle doldurulması (blog hariç).

**SSOT:** ilgili `docs/*.md` dosyaları

### `/about` — Hakkımda

- [x] Bölüm sırası ve metinler (`ABOUT.md`)
- [x] `SITE_FLAGS.isOpenToWork` badge — “Yeni fırsatlara açık”
- [x] Tech stack grid (statik ikonlar, v1 carousel yok)
- [x] GitHub contribution calendar
- [x] Hobiler — statik liste (carousel yok)

### `/projects` — Projeler

- [x] `projects.constants.ts` — kişisel + ViraStack + archive grupları
- [x] Proje kartları; inline showcase yalnızca `/projects`'te (Footy, Takvim vb.)
- [x] Görseller: `public/projects/`
- [x] Legacy `tags` ve `color` alanları **kullanılmaz**

### `/experiences` — Deneyimler

- [x] Zaman çizelgesi (`EXPERIENCES.md`)
- [x] Şirket logoları (SVGL)
- [x] CV indirme düğmesi
- [x] Open-to-work badge

### `/services` — Hizmetler

- [x] Freelance + eğitim kartları (`SERVICES.md`)

### `/bookmarks` — Yer İmleri

- [x] 7 kategori (Blog, Eklenti, Frontend, Kitaplık, Kişisel, Makale, Teknik)
- [x] Raindrop koleksiyon linkleri + önizleme (`BOOKMARKS.md`)

### Genel

- [x] Tüm sayfalarda prose `max-w-2xl`; bleed katmanı gerektiğinde
- [x] Sayfa metadata (başlık, açıklama) — `SITE-CONTENT.md` SEO bölümü
- [x] `pnpm lint && pnpm check-types` geçiyor

---

## Faz 3 — Blog Çekirdeği

**Hedef:** ~94 yazının Supabase'e taşınması, liste + detay sayfası, temel MDX render.

**SSOT:** `BLOG.md` · `supabase-migration.md` · `TECH-STACK.md`

### Supabase Altyapısı

- [x] Yeni Supabase projesi oluştur
- [x] SQL migration: enum'lar, `blog_posts`, `post_assets`, RLS, `updated_at` trigger
- [x] Env: `VITE_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
- [x] Migration script: `_legacy/src/content/*.mdx` → `blog_posts` (~94 yazı)
- [x] `published` bayrakları: yayında olanlar `true`, fikir notları `false`
- [x] Slug doğrulama: tüm slug'lar `/` ile başlar
- [x] Kategori map (legacy → `technical` | `personal`)

### Medya (Aşama 1 — local)

- [x] `public/blog` ← `_legacy/public/blog` (symlink veya kopya)
- [x] `VITE_MEDIA_PROVIDER=local`
- [x] `getMediaUrl` — MDX `img` bileşeninde kullanım

### Blog Ön Yüz

- [x] TanStack Start MDX pipeline (Shiki, remark/rehype)
- [x] `/blog` — SSR liste; kategori pill + tag chip filtreler; sıralama `newest`/`oldest`
- [x] nuqs URL state — paylaşılabilir filtre params
- [x] Taslaklar: dev'de listede (**Taslak** badge); production'da gizli
- [x] `/blog/[slug]` — yazı detayı: BlogInfo, komşu yazılar, görsel zoom, seri nav, okuma ilerlemesi
- [x] **chanhdai TOC minimap** (kesin)
- [x] Temel MDX bileşenleri: prose, kod (Shiki), img — tam set **Faz 4'te** (interaktif set port edildi)
- [x] TanStack Query SSR prefetch + dehydrate + cache header'ları
- [x] Ana sayfa öne çıkan blog (3) — gerçek veriyle bağlandı

### ⌘K — Blog Araması

- [x] Blog yazıları grubu aktif (`published = true` only)
- [x] Taslaklar ⌘K'da listelenmez

### Doğrulama

- [ ] Smoke test: SSR render, görseller `getMediaUrl` ile yüklenir
- [ ] Eski `/blog/[slug]` URL'leri korunur
- [ ] Yayında olan hiçbir yazı gizlenmez
- [ ] `pnpm lint && pnpm check-types` geçiyor

---

## Faz 4 — MDX Tam Set, SEO ve Lansman

**Hedef:** Production'a çıkmaya hazır tam site — tüm MDX bileşenleri, SEO, analytics, deploy.

**SSOT:** `BLOG.md` (MDX bileşenleri) · `SITE-CONTENT.md` (SEO) · `PROJECT-BRIEF.md` (performans)

### MDX Bileşen Seti (tam)

- [x] Legacy referans alınarak sıfırdan yazılır — kod kopyalanmaz
- [x] Rating, MediaInfo, Chart, interactive demo'lar, MDX tablo vb.
- [x] Bleed CSS — `wide` / `full` görseller (`max-w-3xl` → `max-w-5xl`)
- [ ] Kullanıcı son inceleme

### SEO ve Keşfedilebilirlik

- [x] RSS feed (`published = true` only) — `/feed.xml`
- [x] Dinamik OG görselleri — `/og/blog/$slug` edge route
- [x] `llms.txt` / `llms-full.txt`
- [x] `sitemap.xml` — statik + blog slug'ları (`/sitemap.xml` dinamik route)
- [x] `robots.txt`
- [x] Sayfa metadata — tüm rotalar (`SITE-CONTENT.md` SEO SSOT)
- [x] Taslaklar: `noindex`, sitemap/RSS/⌘K dışı

### Analytics ve Performans

- [x] Google Analytics entegrasyonu
- [x] Web Vitals raporlama (`web-vitals`)
- [x] Lighthouse / CWV — `pnpm lighthouse:ci` (CI job + LCP/CLS/TBT eşikleri)
- [x] Görseller: lazy load, AVIF/WebP where applicable (`OptimizedImage`, hero LCP preload)

### Deploy

- [ ] Vercel projesi bağlantısı (GitHub push → otomatik deploy)
- [ ] Production env değişkenleri
- [ ] Domain geçişi (`omergulcicek.com`)
- [ ] Son doğrulama: tüm rotalar, blog filtreleri, ⌘K, tema, mobil

### Opsiyonel (lansman sonrası da olabilir)

- [ ] Supabase Storage `media` bucket + upload (`supabase-migration.md` Aşama B)
- [ ] `VITE_MEDIA_PROVIDER=supabase` veya `supabase-transform`

---

## Faz 5 — Cila ve Gelişmiş Özellikler

**Hedef:** Lansman sonrası veya zamanlanmış iyileştirmeler. v1 blocker değil.

**SSOT:** `PROJECT-BRIEF.md` → Animasyon fazları · `TECH-STACK.md` → emil-design-eng

### Motion ve Animasyon (v2)

- [x] Framer Motion kurulumu
- [x] View Transitions API — sayfa geçişleri
- [x] Stack carousel kaydırması (`/about`) — Magic UI Marquee, mevcut
- [x] Hero stagger / giriş animasyonları (subtle)
- [x] `prefers-reduced-motion` desteği
- [x] **emil-design-eng** skill ile motion review

### Ana Sayfa Cila

- [ ] Hero doodle'ları — `hero-doodle.constants.ts` toggle'ları `true`
- [ ] Ayet/alıntı bileşeni (muted, ana sayfa alt bölüm)

### Gelecek Özellikler

- [ ] Özel tema paneli
- [ ] Engagement: view, like, comment (Supabase tabloları — site bittikten sonra)
- [ ] i18n (çoklu dil)
- [ ] Alt alan adları: `futbol.omergulcicek.com`, `takvim.omergulcicek.com`

---

## Faz 6 — SEO ve Lighthouse Performans İyileştirmeleri

**Hedef:** CI eşiklerini karşılayan Core Web Vitals; SEO meta ve yapılandırılmış veri denetimi. Faz 4 altyapısı üzerine iteratif iyileştirme — **kullanıcı son inceleme**.

**SSOT:** `SITE-CONTENT.md` (SEO) · `PROJECT-BRIEF.md` (performans hedefleri) · `lighthouserc.cjs` (CI eşikleri)

**Mevcut baseline (`pnpm lighthouse:ci`, 2026-07-04, son koşu):** Performance 56–88 (eşik 90 — geçmiyor); LCP 3.3–11.7s (eşik 2.5s — geçmiyor); TBT 0ms ✓; CLS 0 ✓; SEO 100 ✓; best-practices 96 ✓; `/blog/virastack-ai` accessibility 94 (eşik 95 — geçmiyor).

### Lighthouse CI — tüm URL'ler

CI rotaları: `/`, `/blog`, `/blog/virastack-ai`, `/about`, `/projects`, `/experiences`, `/services`, `/bookmarks`

- [ ] `categories:performance` ≥ 0.90 — tüm URL'ler (56–88; geçmiyor)
- [ ] `largest-contentful-paint` ≤ 2500ms — tüm URL'ler (3.3–11.7s; geçmiyor)
- [x] `total-blocking-time` ≤ 200ms — tüm URL'ler (0ms)
- [x] `cumulative-layout-shift` ≤ 0.1 — tüm URL'ler (0)
- [ ] `categories:accessibility` ≥ 0.95 — tüm URL'ler (`/blog/virastack-ai` 94)
- [x] `categories:seo` ≥ 0.95 — korunur (100)
- [x] `categories:best-practices` ≥ 0.95 — korunur (96)
- [ ] `pnpm lighthouse:ci` yeşil — kullanıcı doğrulaması (a11y + perf + LCP hâlâ kırık)

### Görsel ve LCP

- [x] Statik asset WebP pipeline — `scripts/optimize-static-images.mjs` + `public/` thumb varyantları (`build` öncesi `optimize:images`)
- [x] Hero portre — LCP preload, doğru `fetchpriority` / boyut (`index.tsx` preload, `omergulcicek-672.webp`)
- [x] Blog kapak / carousel — responsive `srcset` (`build-blog-responsive-image.ts`, `resolve-carousel-images.ts`)
- [x] Şirket logoları, hobi avatarları, ViraStack logo — küçük WebP varyantları (48px / 96px / 112px)
- [x] MDX içi görseller — lazy load, uygun boyut, `getMediaUrl` ile tutarlı çözümleme (`enrichBlogContentHtml` → `loading="lazy"` + `decoding="async"`)

### JS bundle ve hydration

- [x] Ağır client bileşenler — `ClientOnly` / lazy + SSR fallback (Hero, GitHub calendar, carousel)
- [x] Google Analytics — deferred / lazy yükleme (`requestIdleCallback`, `google-analytics.tsx`)
- [x] Blog detay — okuma ilerlemesi kaldırıldı; paylaşım tek client bileşende
- [x] Font yükleme — Inter latin/latin-ext subset + `font-display: swap` + preload (`inter-font.css`, `__root.tsx`)
- [x] Bundle analyzer — `pnpm analyze` (`vite build --mode analyze`, `dist/bundle-stats.html`)

### SEO derinleştirme

- [x] JSON-LD denetimi — `Person` + `WebSite` (ana sayfa), `BlogPosting` + breadcrumb (yazı detay)
- [ ] Blog detay — canonical, `article:*` OG, Twitter kartları, kapak görseli boyutu (canonical + Twitter + `og:type=article` var; `article:published_time` vb. eksik)
- [x] Sitemap — blog slug'ları + `lastmod` (`publishedAt`, yalnızca `published = true`)
- [ ] RSS — yalnızca `published = true`; kapak URL'leri geçerli (`published` filtresi ✓; item'larda kapak/enclosure yok)
- [x] İç linkleme — komşu yazılar, breadcrumb JSON-LD
- [x] Taslaklar — `noindex`, sitemap/RSS/⌘K dışı (regresyon yok)

### Doğrulama

- [ ] Production build + preview (`pnpm build && pnpm preview`) — gizli mod manuel audit
- [ ] Mobil viewport — tüm CI URL'leri
- [ ] Kullanıcı son inceleme — bu faz checklist'i

---

## Faz Özeti

| Faz | Kapsam | Lansman blocker? |
| --- | --- | --- |
| **Ön Hazırlık** | TanStack Start + ViraStack + skills + mimari iskelet | Evet |
| **Faz 1** | Layout, tema, ana sayfa, ⌘K (kısmi) | Evet |
| **Faz 2** | About, Projects, Experiences, Services, Bookmarks, Academy | Evet |
| **Faz 3** | Supabase, blog taşıma, liste + detay, temel MDX | Evet |
| **Faz 4** | Tam MDX, RSS, OG, llms, sitemap, GA, WebVitals, deploy | Evet |
| **Faz 5** | Motion, doodle, ayet, engagement, i18n | Hayır |
| **Faz 6** | Lighthouse CWV, görsel/bundle optimizasyonu, SEO denetimi | Hayır (kalite) |

---

## Kesin Yasaklar (tüm fazlar)

- `_legacy/` kodunu kopyalama — yalnızca referans
- v1'de (Faz 1–4) Framer Motion / sayfa giriş animasyonu
- Eski blog yazılarını kısaltma veya gizleme
- `/blog/[slug]` URL'lerini bozma
- Kullanıcı istemedikçe commit atma
- Admin paneli ekleme (blog Supabase Studio + agent)
- `.cursor/rules/*.mdc` ve ViraStack mimarisine aykırı klasör yapısı

---

## Agent Handoff Prompt

```
docs/PHASES.md dosyasını oku ve Ön Hazırlık → Faz 1 sırasıyla uygula.
Ön Hazırlık: TanStack Start kur, ardından npx @virastack/ai-rules init && npx skills add jakubkrehel/make-interfaces-feel-better && npx skills add emilkowalski/skill.
docs/PROJECT-BRIEF.md ve ilgili SSOT dosyalarına uy. v1'de Framer Motion yok.
Görünen Türkçe metinler docs SSOT dosyalarından gelmeli — metin uydurma.
MDX ve veri için yalnızca _legacy/ referans; legacy kodu kopyalama.
Her faz sonunda pnpm lint && pnpm check-types çalıştır.
Faz 4 bitmeden production'a çıkma.
```
