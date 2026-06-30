# omergulcicek.com — Projeler

> **Agent onboarding:** Proje listesi, gruplama, showcase ve ana sayfa öne çıkanları için tek kaynak (SSOT) bu dosyadır. `docs/PROJECT-BRIEF.md` → Projeler bölümü ile birlikte okunur.

---

## Veri Kaynağı

- **Depolama:** Uygulama içi sabit veri — `src/features/projects/constants/projects.constants.ts` (veya eşdeğer yol)
- **Referans:** `_legacy/src/features/projects/data/projects.data.ts` — metin ve linkler taşınır; `tags` ve `color` alanları **kullanılmaz**
- **Görseller:** `public/projects/` — legacy asset'ler taşınır
- Filtreleme, tag chip veya arama **yok**

Veri build zamanında sabittir; SSR'da doğrudan import edilir. Client-only fetch ile liste doldurulmaz.

---

## Veri Şeması (SSOT)

### Zorunlu alanlar

| Alan | Tip | Açıklama |
| --- | --- | --- |
| `id` | string | Benzersiz anahtar (`footy`, `ai-rules`) |
| `title` | string | Proje adı |
| `description` | string | 1 cümle; kart ve liste önizlemesi |
| `group` | enum | `personal` \| `virastack` \| `archive` |
| `status` | enum | `live` \| `package` \| `coming_soon` \| `archived` |
| `href` | string | Birincil dış bağlantı (canlı site veya GitHub) |
| `sortOrder` | number | Grup içi sıra (küçük önce) |

### Opsiyonel alanlar

| Alan | Tip | Açıklama |
| --- | --- | --- |
| `featured` | boolean | Ana sayfa havuzu (en fazla 2) |

Legacy `tags`, `color`, `image`, `showcase` alanları **kullanılmaz**. Kart görselleri Lucide / Lucide Labs ikonlarıyla `FeaturedProjectCard` içinde tanımlıdır.

### `status` değerleri

| Değer | Anlam | UI |
| --- | --- | --- |
| `live` | Canlı ürün / site | `FeaturedProjectCard` — live yüzey |
| `package` | Yayınlanmış npm/GitHub paketi | `FeaturedProjectCard` — live yüzey |
| `coming_soon` | Aktif geliştirme | `FeaturedProjectCard` — muted yüzey + **Yakında** badge |
| `archived` | Eski / bakım dışı | Arşiv listesi; `ProseLink variant="muted"` |

Legacy `isCompleted: false` → `status: coming_soon`.

---

## UI standartları

Link ve kart stilleri için SSOT: **`docs/UI-PATTERNS.md`**

- **Prose linkler:** `ProseLink` (hero referansı: `Hero.tsx`)
- **Proje kartları:** `FeaturedProjectCard` — ana sayfa ve `/projects` ortak bileşen
- **Kart yüzeyi:** `getInteractiveCardClassName` — ring, border, hover chevron

Inline showcase / Önizle akışı **kaldırıldı**; ayrı showcase rotası yok.

---

## Proje Kataloğu (SSOT)

Sıra implementasyonda `sortOrder` ile korunur.

### Kişisel — `group: personal`

| `id` | `title` | `description` | `status` | `href` | `featured` | `showcase` |
| --- | --- | --- | --- | --- | --- | --- |
| `footy` | Footy | Futbol bilgini sına — Bil Bakalım, Skor Avcısı, Kupon Ustası, Kadro Bulmacası. | `live` | `https://footyplay.vercel.app/` | ✓ | `inline` → `footy-prediction` |
| `takvim` | Takvim | Takvim abonelikleri için ücretsiz, açık kaynak arayüzler ve içerik. | `live` | `https://takvim-abonelik.vercel.app/` | ✓ | `inline` → `calendar-mini` |

### ViraStack — `group: virastack`

**Yayında** (`status: package` veya `live`)

| `id` | `title` | `description` | `status` | `href` | `showcase` |
| --- | --- | --- | --- | --- | --- |
| `ai-rules` | AI Rules | Modern React uygulamaları için yapay zekâ odaklı mimari kurallar ve Cursor rules. | `package` | `https://github.com/virastack/ai-rules` | `inline` → `rules-preview` |
| `nextjs-boilerplate` | Next.js Boilerplate | Tailwind CSS 4 ve TypeScript ile üretime hazır Next.js 16+ başlangıç şablonu. | `package` | `https://github.com/virastack/nextjs-boilerplate` | `inline` → `boilerplate-diff` |
| `input-mask` | Input Mask | React Hook Form için hafif, bağımlılıksız input maskeleme. | `package` | `https://github.com/virastack/input-mask` | `inline` → `input-mask` |
| `password-toggle` | Password Toggle | React için erişilebilir ve özelleştirilebilir şifre görünürlük hook'u. | `package` | `https://github.com/virastack/password-toggle` | `inline` → `password-toggle` |
| `modern-web-in-3-minutes` | Modern Web in 3 Minutes | Üç dakikada modern web geliştirme standartlarına giriş. | `package` | `https://github.com/virastack/modern-web-in-3-minutes` | `none` |

**Yakında** (`status: coming_soon`)

| `id` | `title` | `description` | `href` |
| --- | --- | --- | --- |
| `tanstack-boilerplate` | TanStack Boilerplate | Tailwind CSS 4 ve TypeScript ile üretime hazır TanStack Start şablonu. | `https://github.com/virastack/tanstack-boilerplate` |
| `start-cli` | Start (CLI) | ViraStack mimarilerini başlatmak için otomatik iskelet oluşturma aracı. | `https://github.com/virastack/cli` |
| `standards` | Standards | Yapılandırma gerektirmeyen ESLint ve Prettier paketi. | `https://github.com/virastack/standards` |
| `error-guard` | Error Guard | React için profesyonel hata yönetimi ve akıllı kurtarma. | `https://github.com/virastack/error-guard` |

Yakında projeler ViraStack bloğunun altında, yayında olanlardan sonra listelenir. Her satırda **Yakında** badge görünür.

### Arşiv — `group: archive`

| `id` | `title` | `description` | `status` | `href` |
| --- | --- | --- | --- | --- |
| `turkuaz` | Turkuaz | Hızlı ve sade web sayfaları için CSS odaklı framework (2017). | `archived` | `https://github.com/omergulcicek/turkuaz` |
| `turkcedokuman` | Türkçe Doküman | Yazılım geliştirme konularında Türkçe kaynak projesi. | `archived` | `https://github.com/omergulcicek/turkcedokuman.com` |

---

## Onaylı Metinler (SSOT)

UI string'leri `docs/SITE-CONTENT.md` → Projeler ile senkron tutulur.

### Sayfa girişi — `projectsPageIntro` (1 cümle)

> Kişisel uygulamalarım ve frontend geliştiriciler için kurduğum [ViraStack](https://virastack.com) ekosistemindeki araçlar.

### ViraStack bölümü — `virastackSectionIntro` (1 paragraf, 2 cümle + linkler)

> **ViraStack**, bir frontend projesine başlarken ihtiyaç duyduğun parçaları bir araya getiren açık kaynak bir ekosistemdir: Next.js ve TanStack başlangıç şablonları, yapay zekâyı mimarine göre yönlendiren AI Rules ve formlar ile erişilebilirlik gibi alanlarda kullanılan React paketleri.
>
> [virastack.com](https://virastack.com) · [GitHub](https://github.com/virastack)

**Konumlandırma:** ViraStack bir GitHub organizasyonu olarak depoları barındırır; ziyaretçiye anlatılan mesaj **frontend ekosistemi**dir (şablon → AI Rules → paketler). Legacy'deki 3 paragraf manifesto kullanılmaz.

---

## Sayfa Kapsamı

`/projects` tek sayfadır. Ayrı showcase rotası yok; önizlemeler kart içinde veya hemen altında gösterilir.

**Sayfada olanlar:**

- Kısa giriş metni + [ViraStack](https://virastack.com) / [GitHub org](https://github.com/virastack) bağlantısı
- Kişisel ürünler (Footy, Takvim) — öne çıkan kartlar
- ViraStack bloğu — compact liste (yayında + yakında)
- Arşiv — muted link listesi

**Sayfada olmayanlar:** tag chip, filtre, arama, thumbnail grid (blog gibi düz metin listesi değil).

---

## `/projects` — UI Yerleşimi

Dar container (`max-w-2xl`) içinde **grid kart** layout. Stil SSOT: `docs/UI-PATTERNS.md`.

### Giriş (üst)

`projectsPageIntro` — tek cümle, `h1` altında. ViraStack bağlantısı `ProseLink`. Bkz. [Onaylı Metinler](#onaylı-metinler-ssot).

### Bölüm 1 — Uygulamalar

Footy ve Takvim — `FeaturedProjectCard` grid (`sm:grid-cols-2`). Lucide ikonları; live kart yüzeyi.

### Bölüm 2 — ViraStack

Alt başlık: **ViraStack** (`projectsSectionVirastack`)

- `virastackSectionIntro` — ekosistem tanımı + `ProseLink` (virastack.com · GitHub)
- Aynı `FeaturedProjectCard` grid; yayında ve yakında projeler birlikte
- `coming_soon`: dashed border, muted ikon, amber **Yakında** badge (`projectsBadgeComingSoon`)

### Bölüm 3 — Arşiv

Alt başlık: **Arşiv**

- `ArchiveProjectList` — başlık + dış link; `ProseLink variant="muted"`
- Görsel ve kart yok; sayfanın en altında

### Wireframe

```text
Projeler

Kişisel uygulamalarım ve frontend geliştiriciler için kurduğum
ViraStack ekosistemindeki araçlar.

── Uygulamalar ──────────────────────────────

┌──────────────────┐  ┌──────────────────┐
│  [icon] Footy    │  │  [icon] Takvim   │
│  …description    │  │  …description    │
└──────────────────┘  └──────────────────┘

── ViraStack ────────────────────────────────

…intro + virastack.com · GitHub (ProseLink)…

┌──────────────────┐  ┌──────────────────┐
│  [icon] AI Rules │  │  [icon] Next.js  │
└──────────────────┘  └──────────────────┘
┌ ─ ─ ─ ─ ─ ─ ─ ─ ┐  …
│ Yakında badge   │
└ ─ ─ ─ ─ ─ ─ ─ ─ ┘

── Arşiv ────────────────────────────────────

  Turkuaz ↗
  Türkçe Doküman ↗
```

---

## Ana Sayfa (`/`)

`docs/PROJECT-BRIEF.md` ile uyumlu:

- **En fazla 2** öne çıkan proje: Footy + Takvim (`featured: true`)
- `FeaturedProjectCard` — `/projects` ile **aynı bileşen** (`featured-project-card.tsx`)
- Tam liste CTA: `ArrowLink` → `/projects`
- ViraStack hero metninde `ProseLink`; ayrı ViraStack kartı ana sayfada **zorunlu değil**

---

## İkonlar

Kart ikonları `FeaturedProjectCard` içindeki `PROJECT_VISUALS` haritasında (Lucide + Lucide Labs). `public/projects/` asset'leri kartlarda **kullanılmaz**.

---

## Teknoloji

- Sabit veri: `features/projects/constants/projects.constants.ts`
- Kart bileşeni: `features/projects/components/featured-project-card.tsx`
- Sayfa: `features/projects/components/projects-page.tsx`
- Ana sayfa bölümü: `features/home/components/FeaturedProjects.tsx`
- UI stilleri: `docs/UI-PATTERNS.md`

---

## Agent Notları

1. Sayfa girişi ve ViraStack bölüm metinleri `docs/SITE-CONTENT.md` → Projeler SSOT'undan gelmeli; bölüm başlıkları aynı dosyadaki tablodan.
2. `tags` alanı **eklenmez**; filtre UI yok.
3. `coming_soon` projeler gizlenmez — aktif çalışma sinyali olarak listelenir.
4. Prose linklerde `ProseLink` kullan; `text-primary underline-offset-4` yasak (`docs/UI-PATTERNS.md`).
5. Tüm dış linkler `ProseLink` ile; `http` href'lerde `target="_blank"` + `rel="noopener noreferrer"` otomatik.
