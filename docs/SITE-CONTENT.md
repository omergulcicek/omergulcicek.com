# omergulcicek.com — Site İçerikleri

> **2026-10-25'ten itibaren metin SSOT koddadır:** olgular, projeler, deneyimler, Yolculuk, hobiler, favoriler ve teknoloji seçimleri `src/constants/me.json` (`me.constants.ts` içinde `src/schemas/me.schema.ts` ile doğrulanır), sayfa metinleri `src/constants/site-copy.constants.ts`, UI kalıpları `src/constants/site-content.constants.ts`. Bu dosya kararları özetler; metin değişikliği önce koda girer. Hizmetler sayfası kaldırıldı (`/services` → 301 `/about#birlikte-calisalim`). Akademi ViraStack'e taşındı (`/academy/*` → 301 `https://virastack.com/academy`). Diğer SSOT'lar: Yer İmleri → `docs/BOOKMARKS.md` · Arama → `docs/SEARCH.md`.

---

## Header

### Marka

- `@lucide/lab` → **`rose`** ikonu (`lucide-react` `Icon` bileşeni ile render)
- Yalnızca ikon; **"Ömer" veya başka metin yok**
- Link `/` · `aria-label`: Ana sayfa

### Ana menü

| Etiket    | Rota        |
| --------- | ----------- |
| Ana Sayfa | `/`         |
| Blog      | `/blog`     |
| Projeler  | `/projects` |
| Yer İmleri | `/bookmarks` |
| Keşfet ▾  | Hakkımda `/about` · Deneyimler `/experiences` · Yolculuk `/journey` · Kurulum `/setup` |

Keşfet bir açılır menüdür (`src/components/shared/explore-nav-menu.tsx`, `EXPLORE_NAV`). Mobil menü ve ⌘K arama `HEADER_NAV` + `EXPLORE_NAV` listesini düz kullanır.

Header'da ayrıca: tema düğmesi + ⌘K arama + **GitHub ikonu** (`IconLinkButton` → `EXTERNAL_LINKS.github`, `aria-label`: GitHub profilini ziyaret et). Hero'da da sosyal linkler (`SocialLinks`) bulunur.

**Unvan (kesin):** `Frontend Mühendisi` (`ME.personal.title`) — hero, SEO, metadata. Frontend Architect hedef; unvan olarak yazılmaz.

Implementasyon: `src/constants/header-nav.constants.ts`.

---

## Footer

Üst bölüm: tek satır grid — rose `1` · Keşfet `2` · ViraStack `2` (`sm:grid-cols-5`; mobilde alt alta). Alt: meta şeridi (build credit, kaynak kod, telif) — `border-t` ile ayrılmış. LinkPreview **yok** — düz `<a>`, `text-muted-foreground`, `underline-offset-4`.

### Üst — marka

| Sıra | İçerik | Anahtar |
| ---- | ------ | ------- |
| 1 | Marka (gül ikonu) | `BrandMark` |

**Marka (`BrandMark`):** Header ile aynı — `@lucide/lab` **rose** ikonu (`lucide-react` `Icon`); yalnızca ikon, metin yok. Link `/` · `aria-label`: Ana sayfa. Implementasyon: `src/components/shared/brand-mark.tsx`.

### Orta — nav satırı (1 : 2 : 2)

Header'da yok. Sıra implementasyonda korunur (`src/constants/footer-nav.constants.ts`, ViraStack listesi `getPublishedVirastackProjects()`).

**Keşfet (`footerNavTitle`):** header'daki Keşfet menüsüyle aynı liste (`FOOTER_NAV = EXPLORE_NAV`): Hakkımda, Deneyimler, Yolculuk, Kurulum.

**ViraStack (`footerVirastackTitle`):** Başlık [virastack.com](https://virastack.com)'a link. Altında yalnızca `status: package` projeler (`docs/PROJECTS.md`); sıra `sortOrder`. Son satır: **Tüm projeler** → `/projects` (`footerVirastackAllProjects`).

| Sıra | Etiket                    | Rota / link |
| ---- | ------------------------- | ----------- |
| 1    | ViraStack Start           | virastack.com/start |
| 2    | ViraStack AI              | virastack.com/ai |
| 3    | ViraStack Mask            | virastack.com/mask |
| 4    | ViraStack Password        | virastack.com/password |
| 5    | ViraStack Guide           | virastack.com/guide |
| 6    | Tüm projeler              | `/projects` |

### Alt — meta şeridi (üstten alta)

| Sıra | İçerik | Anahtar |
| ---- | ------ | ------- |
| 1 | Build credit | `footerBuildCredit` |
| 2 | Kaynak kod | `footerSourceCode` |
| 3 | Telif | `footerCopyright` |

**Build credit (`footerBuildCredit`):** [ViraStack](https://virastack.com), [TanStack Start](https://tanstack.com/start), [Tailwind CSS](https://tailwindcss.com) ve [shadcn/ui](https://ui.shadcn.com) ile geliştirildi.

**Kaynak kod (`footerSourceCode`):** Kaynak kod [GitHub](https://github.com/omergulcicek/omergulcicek.com)'da. Build credit'ten ayrı satır; düz link, hover önizlemesi yok.

**Telif (`footerCopyright`):** © {yıl} Ömer Gülçiçek — `{yıl}` runtime'da `new Date().getFullYear()`.

Sayfa gövde metinleri → ilgili `docs/*.md` dosyaları.

---

## Tipografi ve metin vurguları

### Boyut ve ağırlık (kesin)

| Öğe | Boyut | Ağırlık | Tailwind |
| --- | --- | --- | --- |
| Hero — isim | 16px | 600 | `text-base font-semibold text-foreground` |
| Hero — unvan (Frontend Mühendisi) | 16px | 400 | `text-base font-normal text-muted-foreground` |
| Hero — paragraflar | 16px | 400 (normal) | `text-base` |
| Bölüm başlıkları (ana sayfa, projeler vb.) | 16px | 500 | `text-base font-medium` |

Bölüm başlıkları: örn. son blog yazıları, Kişisel Projeler, ViraStack.

### Vurgu stilleri

Site genelinde (about, blog yazıları, sayfa metinleri):

| Stil | Kullanım |
| --- | --- |
| **Bold** | Önemli terimler, isimler, vurgu |
| *Italic* | Vurgu, yabancı kelime, editorial ton |
| `text-primary` span | Anahtar kelimeler (legacy ile uyumlu) |
| Serif (ör. Newsreader) | Blockquote, ayet/alıntı — opsiyonel |

Markdown kaynakta `**` / `*`; UI'da tutarlı prose sınıfları. DB'ye taşınan MDX'te aynı kurallar geçerli. Blog yazı gövdesi ve sayfa `h1` bu tablonun dışında — kendi prose ölçeği (`docs/BLOG.md`).

---

## Hero (`/`)

Legacy ile aynı portre görseli: `public/omergulcicek.JPG` (`_legacy` → `USER.avatar`). Container genişliğinde (`max-w-2xl`), `rounded-xl`, `aspect-square`, `object-cover object-bottom`, `priority`.

### Layout (dikey editorial — v1 animasyonsuz)

1. Portre fotoğraf (tam container genişliği)
2. **Ömer Gülçiçek** · Frontend Mühendisi
3. Sosyal ikonlar (GitHub, LinkedIn, X — `src/constants/social.constants.ts`)
4. Paragraf 1
5. Paragraf 2

### Başlık

**Ömer Gülçiçek** — `text-base font-semibold text-foreground` (16px, ağırlık 600)  
Frontend Mühendisi — `text-base font-normal text-muted-foreground` (16px, ağırlık 400)

Sosyal ikonlar marka renkleriyle: GitHub `#181717` / dark `#f0f6fc`, LinkedIn `#0A66C2`, X `foreground`.

### Metin

`SITE_COPY.home.hero` — copy.md'deki dört cümle: mimari, ViraStack kuruculuğu, AI çalışma biçimi, iletişim (e-posta, LinkedIn, X, GitHub).

E-posta ve GitHub linklerinin önünde küçük ikon; LinkedIn ve X düz metin linki.

Paragraflar: `text-base` (16px), normal ağırlık. Ardışık paragraflar arası: `proseFlowClass` (`gap-4`, 16px) — `docs/UI-PATTERNS.md`.

---

## Ana sayfa — bölüm sırası

Tam plan → `docs/PROJECT-BRIEF.md` → Ana Sayfa Planı.

| Sıra | Bölüm | Not |
| --- | --- | --- |
| 1 | Hero | Foto + metin + sosyal |
| 2 | Öne çıkan projeler (2) | Inline showcase zorunlu — `docs/PROJECTS.md` |
| 3 | Mini stack strip | ~8–10 logo; **bleed** genişlik; Magic UI Marquee (CSS scroll); SVGL ikonları |
| 4 | Son 3 blog | Metin listesi |
| 5 | Son 3 deneyim | Şirket logosu + 1 satır; CV düğmesi yalnızca `/experiences` |
| 6 | Birlikte çalışalım | `ContactCta` — e-posta kartı (`SITE_COPY.contactCta`) |
| 7 | Ayet/alıntı | **Faz 5** — ilk build'de yok |

---

## Site geneli (SEO SSOT)

Implementasyon: `src/constants/site.constants.ts`. Tam teknik metadata (OG, sitemap, RSS) → **Faz 4** (`docs/PROJECT-BRIEF.md`).

| Anahtar | Değer |
| --- | --- |
| `siteName` | Ömer Gülçiçek |
| `siteUrl` | `https://omergulcicek.com` |
| `jobTitle` | Frontend Mühendisi |
| `titleTemplate` | `%s · Ömer Gülçiçek` |
| `defaultTitle` | Ömer Gülçiçek — Frontend Mühendisi |
| `defaultDescription` | `SITE_COPY.meta.home` |
| `defaultOgImage` | `/omergulcicek.JPG` (dinamik OG şablonu Faz 4) |
| `repository` | `https://github.com/omergulcicek/omergulcicek.com` |
| `locale` | `tr_TR` |

`keywords` meta kullanılmaz (modern SEO — gereksiz).

### Sayfa `title` ve `description`

Implementasyon: `src/lib/seo/page-seo.constants.ts`; açıklamalar `SITE_COPY.meta.*`.

| Rota | `title` | `description` |
| --- | --- | --- |
| `/` | Ömer Gülçiçek — Frontend Mühendisi | React ve TanStack ile arayüz mimarisi kuran frontend mühendisi. ViraStack kurucusu. |
| `/blog` | Blog | React, Next.js, TanStack ve frontend mimarisi üzerine yazılar. |
| `/blog/[slug]` | `{post.title}` | `{post.description}` (Supabase) |
| `/projects` | Projeler | ViraStack araçları ve kişisel uygulamalarım. |
| `/about` | Hakkımda | Sakarya'da yaşayan frontend mühendisi. Nasıl çalıştığım ve ilgi alanlarım. |
| `/experiences` | Deneyimler | 2017'den bugüne frontend deneyimim ve özgeçmişim. |
| `/journey` | Yolculuk | Yıllara göre iş, proje ve hayat. |
| `/setup` | Kurulum | Kod yazarken kullandığım araçlar ve teknolojiler. |
| `/bookmarks` | Yer İmleri | Takip ettiğim frontend kaynakları, bloglar ve okuma listesi. |

Blog yazısı: `titleTemplate` → `React AI Stack 2026 · Ömer Gülçiçek`.

---

## Hata sayfaları

### 404 (`SITE_COPY.notFound`)

| Anahtar | Metin |
| --- | --- |
| `title` | Sayfa bulunamadı |
| `description` | Aradığın sayfa taşınmış ya da hiç olmamış olabilir. |
| `homeCta` | Ana sayfa → `/` |
| `blogCta` | Blog → `/blog` |

### Runtime error (`error.tsx`)

| Anahtar | Metin |
| --- | --- |
| `errorTitle` | Bir şeyler ters gitti |
| `errorDescription` | Beklenmedik bir hata oluştu. Biraz sonra tekrar deneyebilirsin. |
| `errorRetryCta` | Tekrar dene |
| `errorHomeCta` | Ana sayfa → `/` |

**Production'da `error.message` gösterilmez** — yalnızca yukarıdaki genel metin.

---

## Hero doodle'ları (Faz 5)

`src/constants/hero-doodle.constants.ts` — boolean toggle; **Faz 1'de dosya + varsayılan `false`**, görsel render Faz 5.

| Sabit | Varsayılan | Asset |
| --- | --- | --- |
| `SHOW_RAMAZAN_DOODLE` | `false` | `/doodle/ramazan.png` |
| `SHOW_TURKEY_DOODLE` | `false` | Türkiye ikonu (legacy `TurkeyRounded`) |

Legacy referans: `_legacy/src/features/home/constants/doodle.constants.ts`.

---

## Projeler

Tam proje kataloğu, showcase kuralları ve UI yerleşimi → `docs/PROJECTS.md`.

### `/projects` — sayfa girişi (`SITE_COPY.projects.intro`)

[ViraStack](https://virastack.com) ekosistemi ve kişisel uygulamalarım.

### ViraStack bölümü (`SITE_COPY.projects.virastackIntro`)

Bir frontend projesine başlarken gereken parçalar tek yerde: şablonlar, AI kuralları, erişilebilir form paketleri ve ücretsiz rehberler. Rakam (indirme, yıldız) gösterilmez.

Bağlantılar: [virastack.com](https://virastack.com) · [GitHub](https://github.com/virastack)

### Bölüm başlıkları

16px (`text-base font-medium`). Metinler:

| Anahtar | Metin |
| --- | --- |
| `projectsSectionApps` | Kişisel Projeler |
| `projectsSectionVirastack` | ViraStack |
| `projectsBadgeComingSoon` | Yakında |
| `projectsBadgeArchive` | Arşiv |
| `projectsBadgePaused` | Ara verildi (Footy) |
| `projectsPreview` | Önizle |
