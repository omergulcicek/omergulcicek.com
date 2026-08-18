# omergulcicek.com — Projeler

> **Agent onboarding:** Proje listesi, gruplama ve `/projects` yerleşimi için tek kaynak (SSOT) bu dosyadır. `docs/PROJECT-BRIEF.md` → Projeler bölümü ile birlikte okunur.

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
| `id` | string | Benzersiz anahtar (`footy`, `ai`) |
| `title` | string | Proje adı |
| `description` | string | 1 cümle; kart ve liste önizlemesi |
| `group` | enum | `personal` \| `virastack` |
| `status` | enum | `live` \| `package` \| `coming_soon` \| `archived` |
| `href` | string | Birincil dış bağlantı (canlı site veya GitHub) |
| `sortOrder` | number | Grup içi sıra (küçük önce) |

Legacy `tags`, `color`, `image`, `showcase` alanları **kullanılmaz**. Kart görselleri Lucide / Lucide Labs ikonlarıyla `FeaturedProjectCard` içinde tanımlıdır.

### `status` değerleri

| Değer | Anlam | UI |
| --- | --- | --- |
| `live` | Canlı ürün / site | `FeaturedProjectCard` — live yüzey |
| `package` | Yayınlanmış npm/GitHub paketi | `FeaturedProjectCard` — live yüzey |
| `coming_soon` | Aktif geliştirme | `FeaturedProjectCard` — muted yüzey + **Yakında** badge |
| `archived` | Bakım dışı kişisel proje | `FeaturedProjectCard` — dashed border + **Arşiv** badge |

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

| `id` | `title` | `description` | `status` | `href` |
| --- | --- | --- | --- | --- |
| `takvim` | Takvim | Takvim abonelikleri için ücretsiz, açık kaynak arayüzler ve içerik. | `live` | `https://takvim.omergulcicek.com/` |
| `footy` | Footy | Futbol bilgini sına: Bil Bakalım, Skor Avcısı, Kupon Ustası ve Kadro Bulmacası. | `archived` | `https://footy.omergulcicek.com/` |
| `turkuaz` | Turkuaz | Modern ve hızlı web tasarımı | `archived` | `https://github.com/omergulcicek/turkuaz` |
| `turkcedokuman` | Türkçe Doküman | Yazılım geliştirme için Türkçe kaynaklar | `archived` | `https://github.com/omergulcicek/turkcedokuman.com` |

### ViraStack — `group: virastack`

**Yayında** (`status: package` veya `live`)

| `id` | `title` | `description` | `status` | `href` | `showcase` |
| --- | --- | --- | --- | --- | --- |
| `start` | ViraStack Start | Üretime hazır Next.js ve TanStack başlangıç şablonları. | `package` | `https://virastack.com/start` | `none` |
| `ai` | ViraStack AI | Ajan uyumlu kurallar ve mimari kit. | `package` | `https://virastack.com/ai` | `none` |
| `mask` | ViraStack Mask | Formlar için erişilebilir input maskeleri. | `package` | `https://virastack.com/mask` | `none` |
| `password` | ViraStack Password | Erişilebilir parola görünürlük toggle'ı. | `package` | `https://virastack.com/password` | `none` |
| `guide` | ViraStack Guide | Modern web standartlarını adım adım gösteren interaktif rehber. | `package` | `https://virastack.com/guide` | `none` |

---

## Onaylı Metinler (SSOT)

UI string'leri `docs/SITE-CONTENT.md` → Projeler ile senkron tutulur.

### Sayfa girişi — `projectsPageIntro` (1 cümle)

> Kişisel uygulamalarım ve frontend geliştiriciler için kurduğum [ViraStack](https://virastack.com) ekosistemindeki araçlar.

### ViraStack bölümü — `virastackSectionIntro` (1 paragraf, 2 cümle + linkler)

> **ViraStack**, bir frontend projesine başlarken ihtiyaç duyduğun parçaları bir araya getiren açık kaynak bir ekosistemdir: Next.js ve TanStack başlangıç şablonları, yapay zekâyı mimarine göre yönlendiren ViraStack AI ve formlar ile erişilebilirlik gibi alanlarda kullanılan React paketleri.
>
> [virastack.com](https://virastack.com) · [GitHub](https://github.com/virastack)

**Konumlandırma:** ViraStack bir GitHub organizasyonu olarak depoları barındırır; ziyaretçiye anlatılan mesaj **frontend ekosistemi**dir (şablon → ViraStack AI → paketler). Legacy'deki 3 paragraf manifesto kullanılmaz.

---

## Sayfa Kapsamı

`/projects` tek sayfadır. Ayrı showcase rotası yok; önizlemeler kart içinde veya hemen altında gösterilir.

**Sayfada olanlar:**

- Kısa giriş metni + [ViraStack](https://virastack.com) / [GitHub org](https://github.com/virastack) bağlantısı
- Kişisel ürünler (Takvim, Footy, Turkuaz, Türkçe Doküman) — `FeaturedProjectCard` grid
- ViraStack bloğu — aynı kart grid

**Sayfada olmayanlar:** tag chip, filtre, arama, thumbnail grid (blog gibi düz metin listesi değil).

---

## `/projects` — UI Yerleşimi

Dar container (`max-w-2xl`) içinde **grid kart** layout. Stil SSOT: `docs/UI-PATTERNS.md`.

### Giriş (üst)

`projectsPageIntro` — tek cümle, `h1` altında. ViraStack bağlantısı `ProseLink`. Bkz. [Onaylı Metinler](#onaylı-metinler-ssot).

### Bölüm 1 — Kişisel Projeler

Alt başlık: **Kişisel Projeler** (`projectsSectionApps`)

Takvim, Footy, Turkuaz, Türkçe Doküman — `FeaturedProjectCard` grid (`grid-cols-2`).

### Bölüm 2 — ViraStack

Alt başlık: **ViraStack** (`projectsSectionVirastack`)

- `virastackSectionIntro` — ekosistem tanımı + `ProseLink` (virastack.com · GitHub)
- Aynı `FeaturedProjectCard` grid

### Wireframe

```text
Projeler

Kişisel uygulamalarım ve frontend geliştiriciler için kurduğum
ViraStack ekosistemindeki araçlar.

── Kişisel Projeler ─────────────────────────

┌──────────────────┐  ┌──────────────────┐
│  [icon] Takvim   │  │  [icon] Footy    │
│  …description    │  │  …description    │
└──────────────────┘  └──────────────────┘
┌──────────────────┐  ┌──────────────────┐
│  [logo] Turkuaz  │  │  [icon] Türkçe   │
│  …description    │  │  Doküman         │
└──────────────────┘  └──────────────────┘

── ViraStack ────────────────────────────────

…intro + virastack.com · GitHub (ProseLink)…

┌──────────────────┐  ┌──────────────────┐
│  [icon] ViraStack AI │  │  [icon] Start    │
└──────────────────┘  └──────────────────┘
┌──────────────────┐  ┌──────────────────┐
│  [icon] Mask     │  │  [icon] Guide    │
└──────────────────┘  └──────────────────┘
```

---

## Ana Sayfa (`/`)

ViraStack kartı (`VirastackCaseStudyCard`) ana sayfada kalır. Kişisel projeler yalnızca `/projects` üzerindedir.

---

## İkonlar

Kart ikonları `FeaturedProjectCard` içindeki `PROJECT_VISUALS` haritasında (Lucide, Lucide Lab `SoccerPitch`, Turkuaz SVG).

---

## Teknoloji

- Sabit veri: `features/projects/constants/projects.constants.ts`
- Kart bileşeni: `features/projects/components/featured-project-card.tsx`
- Sayfa: `features/projects/components/projects-page.tsx`
- UI stilleri: `docs/UI-PATTERNS.md`

---

## Agent Notları

1. Sayfa girişi ve ViraStack bölüm metinleri `docs/SITE-CONTENT.md` → Projeler SSOT'undan gelmeli; bölüm başlıkları aynı dosyadaki tablodan.
2. `tags` alanı **eklenmez**; filtre UI yok.
3. Prose linklerde `ProseLink` kullan; `text-primary underline-offset-4` yasak (`docs/UI-PATTERNS.md`).
4. Tüm dış linkler `ProseLink` ile; `http` href'lerde `target="_blank"` + `rel="noopener noreferrer"` otomatik.
