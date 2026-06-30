# omergulcicek.com — Proje Özeti

> **Agent onboarding:** Sırayla oku: `docs/PROJECT-BRIEF.md` → `docs/TECH-STACK.md` → `docs/SITE-CONTENT.md` → `docs/PROJECTS.md` → `docs/BLOG.md` → `docs/supabase-migration.md` → `docs/ABOUT.md` → `docs/EXPERIENCES.md` → `docs/SERVICES.md` → `docs/BOOKMARKS.md` → `docs/ACADEMY.md` → `docs/SEARCH.md` → `docs/architecture-guide.md`. Burada kayıtlı kararları kullanıcı açıkça değiştirmek istemedikçe yeniden sorma.

## Proje Nedir?

**Ömer Gülçiçek**'in kişisel sitesi ve blogu — Frontend Engineer. Eski Next.js sitesi referans ve içerik taşıması için `_legacy/` altında korunuyor.

## Dokümantasyon Öncelikli İş Akışı

Dokümantasyon tamamlanana kadar geliştirme **duraklatıldı**. Hedef: dokümanları okuyup siteyi **tek seferde** implement eden bir agent oturumu.


| Doküman                      | Amaç                                                                   |
| ---------------------------- | ---------------------------------------------------------------------- |
| `docs/PROJECT-BRIEF.md`      | Proje özeti, bilgi mimarisi, tasarım sistemi, fazlar, yasaklar         |
| `docs/TECH-STACK.md`         | **Tech stack SSOT** — paketler, deploy, ViraStack AI Rules + UI skills |
| `docs/SITE-CONTENT.md`       | **UI metinleri SSOT** — nav, hero, projeler, sayfa başlıkları, footer  |
| `docs/PROJECTS.md`           | **Projeler SSOT** — katalog, showcase, UI yerleşimi, onaylı ViraStack metinleri |
| `docs/BLOG.md`               | **Blog SSOT** — frontmatter, liste UI, filtreler, nuqs URL sözleşmesi   |
| `docs/ABOUT.md`              | **Hakkımda SSOT** — bölümler, metinler, stack carousel, site bayrakları |
| `docs/EXPERIENCES.md`        | **Deneyimler SSOT** — zaman çizelgesi, CV                               |
| `docs/SERVICES.md`           | **Hizmetler SSOT** — freelance ve eğitim                                |
| `docs/BOOKMARKS.md`          | **Yer imleri SSOT** — Raindrop koleksiyonları, önizleme linkleri        |
| `docs/ACADEMY.md`            | **Akademi SSOT** — stub sayfa (v1 boş)                                  |
| `docs/SEARCH.md`             | **⌘K Command Palette SSOT** — MVP zorunlu                               |
| `docs/supabase-migration.md` | **Supabase SSOT** — şema, Storage, taşıma, yayın mantığı                |
| `docs/architecture-guide.md` | Klasör yapısı, ViraStack kalıpları                                     |
| `_legacy/`                   | MDX yazılar, görseller, veri — yalnızca referans; kod kopyalanmaz      |


`src/` altında kısmi iskelet (layout, hero, projeler bölümü) erken keşif aşamasından kalmıştır; kod ile doküman çelişirse **dokümanlar esas alınır**.

- **Dil:** Türkçe (i18n sonra, MVP dışı)
- **Hedef kitle:** Herkes — teknik ziyaretçiler beceri/projeleri görür; genel ziyaretçiler net bir giriş alır
- **Ton:** Detayları önemseyen zanaatkâr; hikâye odaklı Hakkımda, CV dökümü değil; uzun paragraflar yerine kısa metin
- **Lansman stratejisi:** Tam MVP, ardından tek seferde geçiş (kademeli yayın yok)
- **Production kriteri:** RSS, dinamik OG, llms.txt, GA, WebVitals dahil her şey bitmeden canlıya çıkılmaz — fazlar yalnızca organizasyon içindir
- **Rewrite nedenleri:** (1) Next.js → TanStack Start (2) dosya MDX → Supabase

### Okunabilirlik ≠ sadeleştirme feragati

`max-w-2xl` dar bir sütun verir; görsel kalite, renk ve etkileşimden vazgeçilmez. **Kontrollü zenginlik:**

| Okunabilirlik | Kalite (korunur) |
| --- | --- |
| Kısa paragraf (1–3 cümle) | Hero portre fotoğrafı |
| CV/deneyim ayrı sayfada | Inline proje showcase |
| Footer'da ikincil sayfalar | Logo strip, GitHub calendar |
| | ⌘K, şirket logoları, bookmark önizlemeleri |

Renk ve hareket **chrome'a değil içeriğe** — marka logoları, GitHub yeşili, kategori accent noktaları, canlı demo'lar.

### İki container genişliği

En fazla **iki** genişlik katmanı — ayrı ayrı 4–5 container yok.

| Katman | Genişlik | Kullanım |
| --- | --- | --- |
| **Prose** | `max-w-2xl` | Sayfa gövdesi, blog listesi, paragraf, kod |
| **Bleed** | `max-w-3xl` → `max-w-4xl` → `max-w-5xl` (breakpoint) | Yatay blog görselleri, geniş MDX bileşenleri, tech stack slider |

Bleed öğeleri viewport'a taşmaz; her zaman `mx-auto` ortalı. Tüm görseller değil — `fullWidth` veya bleed uygun olanlar (`docs/BLOG.md`).

### Animasyon fazları

| Faz | Kapsam |
| --- | --- |
| **v1 (MVP)** | Framer Motion / sayfa giriş animasyonu yok; **hover, focus, CSS transition serbest**; showcase tıklama/input; ana sayfa stack strip **Magic UI Marquee** (CSS scroll) |
| **v2 (Cila)** | Framer Motion, View Transitions, `/about` stack kaydırması, sayfa geçişleri, emil-design-eng review |

v1'de Framer Motion **yasak**; CSS micro-interaction **serbest**.

---

## Tech Stack

Tam liste, kurulum komutları ve **zorunlu AI araçları** (ViraStack AI Rules + UI skills) → `**docs/TECH-STACK.md`**

Build oturumuna başlamadan önce:

```bash
npx @virastack/ai-rules init
npx skills add jakubkrehel/make-interfaces-feel-better
npx skills add emilkowalski/skill
```

---

## Tasarım Sistemi

### Layout

- **Dar container:** `max-w-2xl` (~672px), ortalanmış, `px-4 sm:px-6`
- **Mobile-first:** Mobil ve masaüstünde kusursuz çalışmalı
- **Ana landmark:** `SiteLayout` içinde `<main id="main-content">`

### Görsel Stil

- shadcn esintili, minimal, bol boşluk
- **Varsayılan yüzey:** border ve gölgesiz — içerik doğrudan arka plan üzerinde
- **Border/gölge:** Yasak değil; gerektiğinde **minimal** kullanılabilir (ince border, hafif gölge). Her öğeye uygulanmaz — ağırlıklı tercih yine düz yüzey
- **CSS renkleri OKLCH ile tanımlanmalı** — tüm renk değişkenleri `oklch()` formatında (`src/styles.css`)
- **Açık mod:** beyaz arka plan, koyu metin
- **Koyu mod:** siyah arka plan (tam siyah), açık metin
- Tüm renkler `src/styles.css` içindeki **CSS değişkenleri** ile
- Blog prose dar kalır; uygun görseller **bleed** katmanında genişler (Medium tarzı — `docs/BLOG.md`)

### Tipografi

- Gövde: Inter
- Kod: system monospace (`ui-monospace`, `monospace`)
- Hero: isim, unvan ve paragraflar **16px** (`text-base`); isim ve unvan **font-weight 500** (`font-medium`)
- Bölüm başlıkları: **16px** (`text-base`) — ana sayfa, projeler vb.
- Vurgu: **bold**, *italic*, gerektiğinde `text-primary` span; blockquote/alıntı için opsiyonel serif (ör. Newsreader) — `docs/SITE-CONTENT.md`

### Tema Geçişi

- Tek düğme, döngü: **Açık → Koyu**
- `localStorage` `theme` anahtarında kalıcı
- `__root.tsx` içindeki init script flash'ı önler

### Referans İlham

- Brian Do / bento portfolio layout (hero + proje listesi) — **yalnızca ilham, klon değil**
- Linear, Vercel, subtle.framer.website (dar editorial his)

---

## Bilgi Mimarisi

### Header Nav (birincil)

Marka: `@lucide/lab` **rose** ikonu yalnızca — **metin yok**; link `/`, `aria-label`: Ana sayfa. Nav öğeleri **Ana Sayfa** ile başlar:


| Sıra | Etiket               | Rota        | Not                     |
| ---- | -------------------- | ----------- | ----------------------- |
| —    | *(rose ikonu → `/`)* | `/`         | `aria-label`: Ana sayfa |
| 1    | Ana Sayfa            | `/`         | `exact: true` ile aktif |
| 2    | Blog                 | `/blog`     |                         |
| 3    | Projeler             | `/projects` |                         |
| 4    | Hakkımda             | `/about`    |                         |


Metinler `docs/SITE-CONTENT.md` → Header. Header'da **GitHub ikonu yok** (yalnızca tema + ⌘K). Implementasyon: `src/constants/header-nav.constants.ts`.

### Footer

İki sütun: **sol** — `BrandMark` (header ile aynı rose ikonu), build credit, kaynak kod, telif (üstten alta); **sağ** — ikincil nav (üstten alta). Metinler ve sıra → `docs/SITE-CONTENT.md` → Footer. Implementasyon: `src/components/shared/brand-mark.tsx`, `src/constants/footer-nav.constants.ts`.

| Sıra | Etiket      | Rota           |
| ---- | ----------- | -------------- |
| 1    | Deneyimler  | `/experiences` |
| 2    | Hizmetler   | `/services`    |
| 3    | Yer İmleri  | `/bookmarks`   |
| 4    | Akademi     | `/academy`     |

LinkPreview **yok**.

### Ana Sayfa Planı (scroll landing)

1. **Hero** — legacy portre (`public/omergulcicek.JPG`) + isim/unvan + sosyal + 2 paragraf → `docs/SITE-CONTENT.md`
2. **Öne çıkan projeler (2)** — inline showcase zorunlu
3. **Mini stack strip** — ~8–10 logo; Magic UI Marquee (CSS); SVGL ikonları — `pnpm dlx shadcn@latest add @magicui/marquee`
4. **Öne çıkan blog (3)** — metin listesi
5. **Deneyim özeti (3)** — şirket logosu + 1 satır; CV düğmesi yalnızca `/experiences`

**Öne çıkan sayılar:** Bölüm başına **tek sayı** tercih et — çift değil. Örnek: 3 blog, 3 deneyim, 2 öne çıkan proje. Ana sayfada showcase **kapalı** — yalnızca `/projects`'te (`docs/PROJECTS.md`).

**Faz 5 (sonra):** ayet/alıntı bileşeni; hero doodle'ları (`docs/SITE-CONTENT.md`).

**ViraStack konumlandırması:** Frontend ekosistemi (şablon → AI Rules → paketler); onaylı metinler `docs/SITE-CONTENT.md` ve `docs/PROJECTS.md`. Kişisel marka ve ViraStack yan yana — kişisel sitede dokümantasyon ağırlığı yok.

### Alt alan adları (gelecek)

- Yan projeler için `futbol.omergulcicek.com`, `takvim.omergulcicek.com`

---

## Blog (`_legacy`'den)

Tam spec → **`docs/BLOG.md`** · Supabase → **`docs/supabase-migration.md`**

- **~94 MDX yazı** Supabase'e taşınır; yayında olanlar gizlenmez
- **DB:** tablo/sütun/enum İngilizce; UI etiketleri Türkçe
- **Slug:** başında `/` — örn. `/react-ai-stack-2026`
- **Yayın:** `published` boolean manuel; cron / `published_at <= now()` yok
- **Taslaklar:** `published = false` — development'ta listede, production'da gizli (eski `futurePosts` mantığı)
- **Kategoriler (DB):** `technical` \| `personal`
- **MDX bileşenleri:** sıfırdan yazılır; güncellenir / yenileri eklenir; Supabase taşıması render'ı bozmaz
- **Yazı detayı:** BlogInfo, komşu yazılar, zoom, TOC veya chanhdai minimap (opsiyonel)
- **Lansman öncesi:** RSS, dinamik OG, llms.txt, sitemap
- **Engagement (view/like/comment):** site lansmanından sonra — v1'de yok

### Öne Çıkanlar vs Arşiv

İleride "Öne Çıkanlar" vs tam arşiv arayüzü değerlendirilebilir.

---

## Mevcut Durum

### Dokümantasyon

- [x] `docs/PROJECT-BRIEF.md` (bu dosya)
- [x] `docs/TECH-STACK.md` — tech stack + AI araçları SSOT
- [x] `docs/SITE-CONTENT.md` — UI metinleri SSOT (Türkçe, hiyerarşik)
- [x] `docs/architecture-guide.md`
- [x] `docs/BLOG.md` — blog frontmatter, filtre UI, nuqs URL
- [x] `docs/ABOUT.md` — hakkımda bölümleri, metinler, stack carousel
- [x] `docs/EXPERIENCES.md` — deneyim zaman çizelgesi
- [x] `docs/SERVICES.md` — freelance ve eğitim
- [x] `docs/BOOKMARKS.md` — yer imleri, Raindrop, önizlemeler
- [x] `docs/ACADEMY.md` — stub sayfa
- [x] `docs/SEARCH.md` — ⌘K Command Palette
- [x] `docs/supabase-migration.md` — Supabase şema ve taşıma
- [x] `docs/SITE-CONTENT.md` — UI metinleri SSOT (footer, SEO, hata sayfaları dahil)
- [ ] `npx skills add jakubkrehel/make-interfaces-feel-better` kurulumu (build öncesi zorunlu)
- [ ] `npx skills add emilkowalski/skill` kurulumu (build öncesi zorunlu)

### Kod (kısmi — erken keşif, lansmana hazır değil)

- [x] `_legacy/` eski Next.js sitesi yedeği
- [x] TanStack Start iskeleti (temiz, template şişkinliği yok)
- [x] ViraStack AI Rules
- [ ] Inter font, CSS değişkenleri, açık/koyu tema
- [x] `Container`, `SiteLayout`, `Header`, `Footer`
- [x] Header: Blog · Projeler · Hakkımda + tema düğmesi *(Ana Sayfa nav öğesi bekliyor — SITE-CONTENT'e bak)*
- [x] Footer: ikincil nav + build credit satırı
- [x] Ana sayfada hero + projeler bölümü (metinler SITE-CONTENT ile uyumlu)
- [x] Tüm sayfalar için stub route'lar (çoğu boş)
- [x] `<main>` landmark, `components.json` içinde SVGL registry

---

## Yapılacaklar (Öncelik Sırası)

### Faz 0 — Ortam Hazırlığı

- [ ] `pnpm install`
- [ ] `npx @virastack/ai-rules init` (`.cursor/rules/` doğrula)
- [ ] `npx skills add jakubkrehel/make-interfaces-feel-better` (**zorunlu**)
- [ ] `npx skills add emilkowalski/skill` (**zorunlu**)
- [ ] `docs/TECH-STACK.md`, `docs/SITE-CONTENT.md`, `docs/BLOG.md`, `docs/architecture-guide.md` okundu

### Faz 1 — Kabuk ve Ana Sayfa

- [ ] Hero — portre foto + metin + sosyal (`docs/SITE-CONTENT.md`; animasyonsuz)
- [ ] `hero-doodle.constants.ts` — boolean toggle'lar, varsayılan `false` (render Faz 5)
- [ ] Mini stack strip (Magic UI Marquee + SVGL)
- [ ] Footer — `BrandMark` + build credit + kaynak kod + telif (`docs/SITE-CONTENT.md`)
- [ ] ⌘K Command Palette — sayfa + proje + yer imi + eylem (`docs/SEARCH.md`)
- [ ] Ana sayfada öne çıkan projeler (2 kart; showcase kapalı) + `/projects` sayfası
- [ ] Ana sayfada öne çıkan blog yazıları (blog hazır olana kadar placeholder)
- [ ] Ana sayfada deneyim özeti (3); CV düğmesi yalnızca `/experiences`

### Faz 2 — Temel Sayfalar

- [ ] `/about` — `docs/ABOUT.md`: hikâye, stack grid (statik), GitHub calendar, hobiler (statik liste)
- [ ] `/projects` — kişisel + ViraStack gruplu
- [ ] `/experiences` — `docs/EXPERIENCES.md`: zaman çizelgesi, CV, open-to-work badge
- [ ] `/services` — `docs/SERVICES.md`: freelance + eğitim kartları
- [ ] `/bookmarks` — `docs/BOOKMARKS.md`: 7 kategori + Raindrop + önizlemeler
- [ ] `/academy` — `docs/ACADEMY.md`: stub (yakında)

### Faz 3 — Blog (çekirdek)

- [ ] Supabase şeması + migration (`docs/supabase-migration.md`)
- [ ] Taşıma script'i: `_legacy/src/content/*.mdx` → Supabase
- [ ] Blog görselleri: `public/blog/` + `getMediaUrl` (`VITE_MEDIA_PROVIDER=local`)
- [ ] TanStack Start MDX pipeline (Shiki, remark/rehype); `img` → `getMediaUrl`
- [ ] Blog listesi SSR + **kategori pill + tag chip** filtreler; sıralama `newest`/`oldest`
- [ ] Blog yazı detayı: BlogInfo, komşu yazılar, zoom, **chanhdai TOC minimap**
- [ ] MDX — yalnızca temel bileşenler (prose, kod, img); tam set **Faz 4**
- [ ] TanStack Query SSR prefetch + cache header'ları
- [ ] ⌘K blog yazı araması

### Faz 3b — Blog görselleri Supabase (isteğe bağlı, lansman sonrası da olabilir)

- [ ] `media` bucket + upload
- [ ] `VITE_MEDIA_PROVIDER=supabase` veya `supabase-transform`

### Faz 4 — MDX tam set + SEO / lansman

- [ ] MDX bileşen seti — legacy referans; kod kopyalanmaz; kullanıcı son inceleme
- [ ] RSS feed
- [ ] Dinamik OG görselleri
- [ ] `llms.txt` / `llms-full.txt`
- [ ] Sitemap, robots, sayfa metadata (`docs/SITE-CONTENT.md` SEO SSOT; `published = true` only)
- [ ] Google Analytics + WebVitals
- [ ] Lighthouse 100 (`pnpm build && pnpm preview`, gizli mod)
- [ ] Vercel deploy + domain geçişi

### Faz 5 — Cila (lansman sonrası veya zamanlanır)

- [ ] Framer Motion, View Transitions, stack carousel (`emil-design-eng`)
- [ ] Hero doodle'ları (constants `true` ile aktif)
- [ ] Ayet/alıntı bileşeni (ana sayfa, muted)
- [ ] Özel tema paneli — sonra
- [ ] Engagement: view, like, comment (Supabase) — site bittikten sonra

---

## Performans Hedefleri

- **Web Vitals:** Mümkün olduğunca tüm kategorilerde 100
- **Doğru ölçüm:** production build + preview, dev server değil; gizli mod (eklentiler hydration gürültüsü yapar)
- **Görseller:** AVIF/WebP, lazy load, taşıma sonrası Supabase Smart CDN
- **Animasyonlar:** v1'de Framer Motion yok; CSS hover/focus serbest; v2 subtle motion
- **Analytics:** Google Analytics + WebVitals — lansman öncesi zorunlu
- **Üçüncü taraf script'ler:** Minimum (GA dahil)

---

## Önemli Dosya ve Yollar

```text
src/
├── routes/              # TanStack file route'ları
├── components/
│   ├── shared/          # Container, Header, Footer, SiteLayout
│   └── ui/svgs/         # SVGL marka ikonları
├── constants/           # site, header-nav, footer-nav, social, site-flags
├── lib/utils.ts         # cn()
└── styles.css           # Tailwind + CSS değişkenleri + fontlar

_legacy/                 # Eski site (MDX, görseller, bileşenler, veri)
components.json          # shadcn + @svgl registry
docs/
├── PROJECT-BRIEF.md     # Proje özeti, IA, fazlar
├── TECH-STACK.md        # Tech stack + AI araçları SSOT
├── SITE-CONTENT.md      # UI metinleri SSOT (Türkçe)
├── BLOG.md              # Blog frontmatter, filtre UI, nuqs
├── ABOUT.md             # Hakkımda bölümleri ve metinler
├── EXPERIENCES.md       # Deneyim zaman çizelgesi
├── SERVICES.md          # Hizmetler
├── BOOKMARKS.md         # Yer imleri
├── ACADEMY.md           # Akademi stub
├── SEARCH.md            # ⌘K Command Palette
├── supabase-migration.md # DB, Storage, taşıma
├── architecture-guide.md
└── MEMORIES.md
```

---

## Komutlar

Geliştirme ve kurulum komutları → `**docs/TECH-STACK.md**`

---

## Kesin Yasaklar

- `_legacy/` kodunu kopyalama — yalnızca referans
- Faz çağırmadıkça admin paneli ekleme (blog Supabase Faz 3'te zorunlu)
- v1'de Framer Motion / sayfa giriş animasyonu ekleme — Faz 5 (v2 cila); CSS hover/focus serbest
- Eski blog yazılarını kısaltma veya gizleme
- `/blog/[slug]` URL'lerini bozma
- Kullanıcı istemedikçe commit atma
- `.cursor/rules/*.mdc` ve ViraStack mimarisine uy (`features/`, `@/` path alias'ları)

---

## Açık Kararlar (takılırsan kullanıcıya sor)


| Konu                | Karar                                                                     |
| ------------------- | ------------------------------------------------------------------------- |
| Unvan               | **Frontend Engineer** (kesin) — Staff kullanılmaz                        |
| Hero fotoğrafı      | Evet — `public/omergulcicek.JPG` (legacy ile aynı)                        |
| Header marka        | `@lucide/lab` rose ikonu yalnızca — "Ömer" metni yok                      |
| Header GitHub       | Yok — sosyaller yalnızca hero'da                                          |
| Footer layout       | Sol: `BrandMark` + credit bloğu (alt alta); sağ: ikincil nav (alt alta)    |
| Footer nav sırası   | Deneyimler → Hizmetler → Yer İmleri → Akademi                             |
| Footer kaynak kod   | Evet — düz GitHub linki; açık kaynak kültürü; LinkPreview yok             |
| Hero tipografi      | İsim, unvan, paragraflar 16px; isim + unvan font-weight 500               |
| Bölüm başlıkları    | 16px (`text-base`)                                                        |
| Animasyonlar        | v1: CSS hover/focus; Framer Motion + doodle + ayet **Faz 5**              |
| Hero doodle         | `hero-doodle.constants.ts`; varsayılan kapalı; aktif render **Faz 5**     |
| Ayet/alıntı         | **Faz 5** — ilk build blocker değil                                       |
| Hobiler             | Statik liste — carousel yok (`docs/ABOUT.md`)                             |
| Blog TOC            | **chanhdai minimap** (kesin)                                              |
| Blog sıralama       | Yalnızca `newest` / `oldest`                                              |
| Blog filtre         | Kategori pill + tag chip (kesin)                                          |
| MDX tam bileşen set | **Faz 4** — kullanıcı son inceleme                                        |
| SEO (RSS, OG, …)    | **Faz 4**                                                                 |
| Blog görselleri     | Lansman: `local`; Supabase Storage sonra (Faz 3b)                         |
| ⌘K arama            | MVP zorunlu — `docs/SEARCH.md`                                            |
| Ana sayfa projeleri | 2 kart (Footy + Takvim); showcase kapalı                                |
| Blog depolama       | Supabase Postgres; görseller aşamalı — `getMediaUrl` → `docs/supabase-migration.md` |
| Blog slug           | Başında `/` — `/react-ai-stack-2026`                                      |
| Yayın               | `published` boolean manuel; cron yok                                      |
| Taslaklar           | Dev'de görünür; production'da gizli                                      |
| DB isimlendirme     | Tablo/sütun/enum İngilizce                                                |
| About               | Yeni versiyon kalıcı; legacy bölümlere dönüş yok — `docs/ABOUT.md`        |
| Deneyimler          | Ayrı `/experiences` — `docs/EXPERIENCES.md`                               |
| Hizmetler           | Ayrı `/services` — `docs/SERVICES.md`                                     |
| Open to work badge  | `SITE_FLAGS.isOpenToWork` — `docs/ABOUT.md`                               |
| Container           | Prose `max-w-2xl` + bleed katmanı (max 2 genişlik) — `docs/BLOG.md`       |
| Engagement          | View/like/comment site lansmanından sonra                                 |
| Lansman             | RSS, OG, llms, GA, WebVitals bitmeden production yok                      |


---

## Agent Handoff Prompt

**Tam build oturumunu** başlatmak için kopyala-yapıştır:

```
docs/PROJECT-BRIEF.md, docs/TECH-STACK.md, docs/SITE-CONTENT.md, docs/PROJECTS.md, docs/BLOG.md, docs/supabase-migration.md, docs/ABOUT.md, docs/EXPERIENCES.md, docs/SERVICES.md, docs/BOOKMARKS.md, docs/ACADEMY.md, docs/SEARCH.md ve docs/architecture-guide.md dosyalarını baştan sona oku.
Faz 0: npx @virastack/ai-rules init && npx skills add jakubkrehel/make-interfaces-feel-better && npx skills add emilkowalski/skill (henüz yoksa).
.cursor/rules/ altındaki ViraStack kurallarına uy. v1'de Framer Motion yok; CSS hover/focus serbest; make-interfaces-feel-better öncelikli.
Production öncesi RSS, OG, llms, GA, WebVitals zorunlu. DB isimleri İngilizce. Taslaklar dev'de görünür, production'da gizli.
PROJECT-BRIEF TODO fazlarına göre siteyi eksiksiz implement et. Görünen Türkçe metinler ilgili docs SSOT dosyalarından gelmeli — metin uydurma.
MDX taşıması ve veri referansı için yalnızca _legacy/ kullan; legacy kodu kopyalama.
Bitirmeden önce pnpm lint && pnpm check-types çalıştır.
```

