# omergulcicek.com — Site İçerikleri

> Onaylı UI metinleri bu dosyada. Sayfa içerik SSOT: Hakkımda → `docs/ABOUT.md` · Deneyimler → `docs/EXPERIENCES.md` · Hizmetler → `docs/SERVICES.md` · Yer İmleri → `docs/BOOKMARKS.md` · Arama → `docs/SEARCH.md`.

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
| Hakkımda  | `/about`    |

Header'da ayrıca: tema düğmesi + ⌘K arama (`docs/SEARCH.md`). **Header'da GitHub ikonu yok** — sosyal linkler yalnızca hero'da.

**Unvan (kesin):** `Frontend Engineer` — hero, SEO, metadata; `Staff Frontend Engineer` kullanılmaz.

Implementasyon: `src/constants/header-nav.constants.ts`.

---

## Footer

İki sütun layout (`flex` / `justify-between`). LinkPreview **yok** — düz `<a>`, `text-muted-foreground`, `underline-offset-4`.

### Sol — credit bloğu (üstten alta)

| Sıra | İçerik | Anahtar |
| ---- | ------ | ------- |
| 1 | Marka (gül ikonu) | `BrandMark` |
| 2 | Build credit | `footerBuildCredit` |
| 3 | Kaynak kod | `footerSourceCode` |
| 4 | Telif | `footerCopyright` |

**Marka (`BrandMark`):** Header ile aynı — `@lucide/lab` **rose** ikonu (`lucide-react` `Icon`); yalnızca ikon, metin yok. Link `/` · `aria-label`: Ana sayfa. Implementasyon: `src/components/shared/brand-mark.tsx`.

**Build credit (`footerBuildCredit`):** [ViraStack](https://virastack.com), [TanStack Start](https://tanstack.com/start), [Tailwind CSS](https://tailwindcss.com) ve [shadcn/ui](https://ui.shadcn.com) ile geliştirildi.

**Kaynak kod (`footerSourceCode`):** Kaynak kod [GitHub](https://github.com/omergulcicek/omergulcicek.com)'da. Build credit'ten ayrı satır; düz link, hover önizlemesi yok.

**Telif (`footerCopyright`):** © {yıl} Ömer Gülçiçek — `{yıl}` runtime'da `new Date().getFullYear()`.

### Sağ — ikincil nav (üstten alta)

Header'da yok. Sıra implementasyonda korunur (`src/constants/footer-nav.constants.ts`).

| Sıra | Etiket     | Rota           |
| ---- | ---------- | -------------- |
| 1    | Deneyimler | `/experiences` |
| 2    | Hizmetler  | `/services`    |
| 3    | Yer İmleri | `/bookmarks`   |
| 4    | ViraStack  | (harici link)  |

Sayfa gövde metinleri → ilgili `docs/*.md` dosyaları.

---

## Tipografi ve metin vurguları

### Boyut ve ağırlık (kesin)

| Öğe | Boyut | Ağırlık | Tailwind |
| --- | --- | --- | --- |
| Hero — isim | 16px | 600 | `text-base font-semibold text-foreground` |
| Hero — unvan (Frontend Engineer) | 16px | 400 | `text-base font-normal text-muted-foreground` |
| Hero — paragraflar | 16px | 400 (normal) | `text-base` |
| Bölüm başlıkları (ana sayfa, projeler vb.) | 16px | 500 | `text-base font-medium` |

Bölüm başlıkları: örn. öne çıkan projeler, son blog yazıları, Uygulamalar, ViraStack, Arşiv.

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
2. **Ömer Gülçiçek** · Frontend Engineer
3. Sosyal ikonlar (GitHub, LinkedIn, X — `src/constants/social.constants.ts`)
4. Paragraf 1
5. Paragraf 2

### Başlık

**Ömer Gülçiçek** — `text-base font-semibold text-foreground` (16px, ağırlık 600)  
Frontend Engineer — `text-base font-normal text-muted-foreground` (16px, ağırlık 400)

Sosyal ikonlar marka renkleriyle: GitHub `#181717` / dark `#f0f6fc`, LinkedIn `#0A66C2`, X `foreground`.

### Paragraf 1 (`heroParagraph1`)

Detaylara ve kaliteye *büyük bir tutku* duyuyorum; projelerim aracılığıyla insanlara faydalı olup onların deneyimlerine değer katmayı seviyorum. [ViraStack](https://virastack.com) ile frontend geliştiriciler için şablonlardan paketlere uzanan açık kaynak bir ekosistem inşa ediyorum.

### Paragraf 2 (`heroParagraph2`)

Bana [@omergulcicek](https://x.com/omergulcicek) ve [e-posta](mailto:iletisim@omergulcicek.com) yoluyla ulaşabilir ya da [GitHub](https://github.com/omergulcicek)'daki kodlarıma göz atabilirsiniz.

GitHub ve e-posta linklerinin önünde küçük ikon; yalnızca metin altı çizili, ikon tıklanabilir. `@omergulcicek` X profiline gider — düz metin linki, ikon yok.

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
| 6 | Ayet/alıntı | **Faz 5** — ilk build'de yok |

---

## Site geneli (SEO SSOT)

Implementasyon: `src/constants/site.constants.ts`. Tam teknik metadata (OG, sitemap, RSS) → **Faz 4** (`docs/PROJECT-BRIEF.md`).

| Anahtar | Değer |
| --- | --- |
| `siteName` | Ömer Gülçiçek |
| `siteUrl` | `https://omergulcicek.com` |
| `jobTitle` | Frontend Engineer |
| `titleTemplate` | `%s · Ömer Gülçiçek` |
| `defaultTitle` | Ömer Gülçiçek — Frontend Engineer |
| `defaultDescription` | Frontend Engineer. React, Next.js ve TypeScript ile performanslı arayüzler; blog, projeler ve açık kaynak (ViraStack). |
| `defaultOgImage` | `/omergulcicek.JPG` (dinamik OG şablonu Faz 4) |
| `repository` | `https://github.com/omergulcicek/omergulcicek.com` |
| `locale` | `tr_TR` |

`keywords` meta kullanılmaz (modern SEO — gereksiz).

### Sayfa `title` ve `description`

| Rota | `title` | `description` |
| --- | --- | --- |
| `/` | Ömer Gülçiçek — Frontend Engineer | Detaylara önem veren bir frontend mühendisi; blog, projeler ve ViraStack ekosistemi. |
| `/blog` | Blog | Teknik ve kişisel yazılar — React, Next.js, CSS, frontend mimarisi ve daha fazlası. |
| `/blog/[slug]` | `{post.title}` | `{post.description}` (Supabase) |
| `/projects` | Projeler | Kişisel uygulamalar ve ViraStack açık kaynak araçları. |
| `/about` | Hakkımda | Frontend mühendisliği, ViraStack ve üretim kültürü hakkında kısa bir tanışma. |
| `/experiences` | Deneyimler | Kariyer geçmişi, teknoloji etiketleri ve CV. |
| `/services` | Hizmetler | Freelance geliştirme ve frontend eğitimi. |
| `/bookmarks` | Yer İmleri | Raindrop'ta topladığım frontend kaynakları, bloglar ve okuma listesi. |

Blog yazısı: `titleTemplate` → `React AI Stack 2026 · Ömer Gülçiçek`.

---

## Hata sayfaları

### 404 (`notFound`)

| Anahtar | Metin |
| --- | --- |
| `notFoundTitle` | Sayfa bulunamadı |
| `notFoundDescription` | Aradığın sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. |
| `notFoundHomeCta` | Ana sayfaya dön → `/` |
| `notFoundBlogCta` | Blog'a git → `/blog` |

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

### `/projects` — sayfa girişi (`projectsPageIntro`)

Kişisel uygulamalarım ve frontend geliştiriciler için kurduğum [ViraStack](https://virastack.com) ekosistemindeki araçlar.

### ViraStack bölümü (`virastackSectionIntro`)

**ViraStack**, bir frontend projesine başlarken ihtiyaç duyduğun parçaları bir araya getiren açık kaynak bir ekosistemdir: Next.js ve TanStack başlangıç şablonları, yapay zekâyı mimarine göre yönlendiren AI Rules ve formlar ile erişilebilirlik gibi alanlarda kullanılan React paketleri.

Bağlantılar: [virastack.com](https://virastack.com) · [GitHub](https://github.com/virastack)

### Bölüm başlıkları

16px (`text-base font-medium`). Metinler:

| Anahtar | Metin |
| --- | --- |
| `projectsSectionApps` | Uygulamalar |
| `projectsSectionVirastack` | ViraStack |
| `projectsSectionArchive` | Arşiv |
| `projectsBadgeComingSoon` | Yakında |
| `projectsPreview` | Önizle |
