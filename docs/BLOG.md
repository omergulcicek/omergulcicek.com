# omergulcicek.com — Blog

> **Agent onboarding:** Blog listesi UI, filtreler, URL durumu, MDX ve Supabase için tek kaynak (SSOT). `docs/supabase-migration.md` · `docs/PROJECT-BRIEF.md` ile birlikte okunur.

---

## Veri Kaynağı

- **Depolama:** Supabase (Postgres) — sıfırdan yeni proje → `docs/supabase-migration.md`
- **Taşıma:** `_legacy/src/content/*.mdx` → migration script
- **~94 yazı** taşınır; yayında olanların hiçbiri gizlenmez
- **Görseller:** Başlangıçta `public/blog/` (local); `getMediaUrl` ile Supabase'e geçiş — `docs/supabase-migration.md` → Medya sağlayıcı
- İçerik yazımı: agent + prompt; admin paneli yok

### Rewrite nedenleri (blog tarafı)

1. TanStack Start
2. Supabase — ileride view / like / comment (lansman sonrası); şimdilik yalnızca içerik + metadata

---

## SSR ve ön yüz aktarımı

Blog verisi **sunucuda** çekilir; ön yüzde kayma (CLS) ve içerik flaşı olmaz.

| Sayfa | SSR davranışı |
| --- | --- |
| `/blog` | Yazı meta listesi sunucuda; URL params ile uyumlu HTML |
| `/blog/[slug]` | Yazı + derlenmiş MDX; tam HTML ilk yanıtta |

**Kurallar:**

- İlk paint'te boş skeleton → dolu içerik geçişi **yasak**
- nuqs URL state SSR ile uyumlu
- TanStack Query: SSR prefetch + dehydrate → `docs/TECH-STACK.md`

---

## Veritabanı (özet)

Tam şema → **`docs/supabase-migration.md`**

| Sütun | Tip | Not |
| --- | --- | --- |
| `slug` | `text` UNIQUE | `/blog-slug` — başında `/` zorunlu |
| `title` | `text` | |
| `description` | `text` | |
| `content` | `text` | Ham MDX gövdesi |
| `category` | enum | `technical` \| `personal` (DB İngilizce) |
| `tags` | `text[]` | |
| `locale` | enum | `tr` \| `en` |
| `medium_url` | `text` nullable | |
| `interactive` | `boolean` | |
| `featured` | `boolean` | |
| `published` | `boolean` | Manuel yayın; cron yok |
| `published_at` | `timestamptz` | Sıralama / görünen tarih; otomatik yayın tetiklemez |
| `og_image_path` | `text` nullable | Mantıksal path (`blog/...`); `getMediaUrl` ile çözülür |

### Yayın ve taslak

| Ortam | Görünürlük |
| --- | --- |
| **Production** | Yalnızca `published = true` |
| **Development** | `published = true` **ve** `published = false` (taslaklar listede, **Taslak** badge) |

- Yayına alma: `published` boolean'ını `true` yap — tarih veya cron bekleme yok.
- Taslaklar production'da: 404, sitemap/RSS/⌘K dışı, `noindex`.
- Eski `futurePosts`: `published = false` + blog fikir notları; dev'de liste üstünde gösterilebilir.

---

## Frontmatter → DB (taşıma)

Migration sırasında frontmatter ayrıştırılır; dosyada kalması gerekmez.

### Zorunlu (taşıma sonrası DB'de)

| Alan | DB | Açıklama |
| --- | --- | --- |
| `title` | `title` | |
| `createdAt` | `published_at` | `YYYY-MM-DD` |
| `slug` | `slug` | `/blog-slug` |
| `category` | `category` | `technical` \| `personal` |
| `tags` | `tags` | En fazla 3 |
| `description` | `description` | |

### Opsiyonel

| Alan | DB |
| --- | --- |
| `featured` | `featured` |
| `locale` / `languages` | `locale` |
| `medium` | `medium_url` |
| `interactive` | `interactive` |

### Kategori map (legacy → DB)

| Legacy | `post_category` |
| --- | --- |
| `teknik`, `css`, `web geliştirme`, `technical` | `technical` |
| `kişisel`, `yıl değerlendirmesi`, `kitap`, … | `personal` |

### UI etiketleri (Türkçe — DB değil)

| DB `category` | Pill etiketi |
| --- | --- |
| `technical` | Teknik |
| `personal` | Kişisel |

### Tag havuzu

`React`, `Next.js`, `TanStack`, `ViraStack`, `TypeScript`, `Yapay Zekâ`, `Frontend`, `CSS`, `JavaScript`, `Tailwind CSS`, `shadcn/ui`, `Supabase`, `Vite`

Kişisel: `Yıl Özeti`, `Kitap`, `Dizi`, `Seyahat`, `Kişisel`

---

## Layout — İki container genişliği

Sayfa gövdesi **`max-w-2xl`**; en fazla **iki** genişlik katmanı (4–5 ayrı container yok).

| Katman | Sınıf (örnek) | Kullanım |
| --- | --- | --- |
| **Prose** | `max-w-2xl mx-auto` | Paragraf, başlık, kod, dar tablolar, blog listesi |
| **Bleed** | `max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto` | Yatay görseller, geniş MDX bileşenleri, stack slider |

- Viewport tam genişlik **yok** — bleed öğeleri her zaman ortalı.
- Breakpoint'e göre üst sınır artar; full-bleed edge-to-edge kullanılmaz.

### Görsel bleed kuralları

- **Tüm görseller genişlemez** — yalnızca yatay / genişlemeye uygun olanlar.
- `fullWidth` attribute veya MDX `img` bileşeninde `bleed: wide | full`.
- Sabit `max-height` + serbest genişlik (aspect korunarak) kullanılabilir.
- Aynı kural özel MDX bileşenleri için geçerli (carousel, chart vb. gerektiğinde bleed).
- MDX `img` `src` değeri render'da `getMediaUrl(path)` ile çözülür — DB'de tam URL saklanmaz.

Legacy referans: `_legacy` `md:-mx-20` — yeni planda kontrollü `bleed` sınıfları tercih edilir.

---

## Blog Listesi — UI

Dar **prose** container; metin listesi — thumbnail yok.

### Kategori pill (URL: İngilizce enum değeri)

| Pill (TR) | `category` param |
| --- | --- |
| Tümü | yok |
| Teknik | `technical` |
| Kişisel | `personal` |

### Sıralama

| `sort` | Etiket | Alan |
| --- | --- | --- |
| `newest` | En yeni | `published_at` azalan (varsayılan) |
| `oldest` | En eski | `published_at` artan |

Başlığa göre sıralama (`title-asc/desc`) **yok** — yalnızca `newest` / `oldest`.

Yıl başlıkları `published_at` yılına göre gruplanır.

### Arama

`title`, `description`, `tags` — debounce ~200ms, nuqs `q` param.

### Tag chip'leri

Çoklu toggle, AND mantığı — önceki dokümanla aynı.

### Liste satırı

Tarih · başlık · description · en fazla 2 tag · `EN` badge (`locale === 'en'`).

Development'ta taslak satırlarında ek **Taslak** badge.

---

## Blog Yazı Detayı (`/blog/[slug]`)

### Zorunlu özellikler (lansman öncesi)

| Özellik | Not |
| --- | --- |
| `BlogInfo` | Meta satırı (tarih, kategori, tag, Medium link vb.) |
| Komşu yazılar | Önceki / sonraki |
| Görsel zoom | `medium-zoom` veya eşdeğeri |
| İçindekiler | **[chanhdai TOC minimap](https://chanhdai.com/components/toc-minimap)** — kesin; masaüstünde sabit yan panel, mobilde collapse |
| Prose + bleed | Dar metin, uygun görseller geniş katmanda |

### MDX bileşenleri

**Faz 3:** Temel render (prose, `pre`/`code`, `img`, linkler).  
**Faz 4:** Tam bileşen seti — legacy referans; kod kopyalanmaz; kullanıcı son inceleme.

**Örnek havuz:** `Rating`, `MediaInfo`, `BookInfo`, `Code` + `CopyButton`, `ImagesCarousel`, `MdxTable`, `ChartAreaLinear`, interactive (`CornerShape`, `ClipPath`, `TextBox`, …), `Tabs`, `Accordion`, notice bileşenleri.

Render pipeline:

```text
Supabase content → remark/rehype → Shiki → mdx-components map → HTML
                              ↑ img src → getMediaUrl(path)
```

Supabase'e taşımak stilleri veya bileşenleri **bozmaz** — içerik ham MDX string kalır; görsel path'leri mantıksal (`/blog/2026/...` veya `blog/2026/...`).

### Metin vurguları (yazı içi)

- `**bold**`, `*italic*`, link vurguları
- Gerektiğinde `text-primary` span'ler (legacy ile uyumlu)
- Blockquote / alıntı: opsiyonel serif (`Newsreader`) — `docs/PROJECT-BRIEF.md`

---

## URL Durumu — nuqs

| Parametre | Örnek | Varsayılan |
| --- | --- | --- |
| `category` | `?category=technical` | yok |
| `tags` | `?tags=React&tags=CSS` | yok |
| `q` | `?q=optimistic` | yok |
| `sort` | `?sort=oldest` | `newest` |

Slug rota: `/blog/react-ai-stack-2026` (URL'de baştaki `/` route param'da strip edilebilir; DB'de `/` ile saklanır).

---

## Lansman öncesi tamamlanacak (blog)

| Madde | Faz |
| --- | --- |
| Supabase migration + SSR blog | 3 |
| MDX pipeline + temel bileşenler | 3 |
| chanhdai TOC minimap | 3 |
| Kategori pill + tag chip filtreler | 3 |
| MDX tam bileşen seti | 4 |
| RSS feed | 4 |
| Dinamik OG görselleri | 4 |
| `llms.txt` / `llms-full.txt` | 4 |
| Sitemap (yalnızca `published = true`) | 4 |
| ⌘K blog yazı araması | 3 |

---

## Lansman sonrası (engagement)

`docs/supabase-migration.md` → view, like, comment tabloları. Yorum şimdilik geç; site bittikten sonra değerlendirilir.

---

## Teknoloji

- **Supabase** — `docs/supabase-migration.md`
- **nuqs** — filtre URL senkronu
- **TanStack Query** — SSR prefetch
- **Shiki** — syntax highlighting

---

## Agent Notları

1. DB tablo/sütun/enum İngilizce; görünen etiketler Türkçe.
2. `published` dışında otomatik yayın filtresi kullanma.
3. Development'ta taslakları göster; production'da gizle.
4. Legacy `FilterSort` dropdown kullanılmaz — chip modeli.
5. Thumbnail liste satırına eklenmez.
6. Görsel URL'leri için yalnızca `getMediaUrl` kullan; MDX'e tam Supabase URL yazma.
