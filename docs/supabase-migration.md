# omergulcicek.com — Supabase Migration

> **Agent onboarding:** Blog veritabanı, Storage ve legacy taşıma için tek kaynak. UI/UX → `docs/BLOG.md` · stack → `docs/TECH-STACK.md`.

---

## Proje

- **Yeni Supabase projesi** — sıfırdan oluşturulur; mevcut proje kullanılmaz.
- Site yeniden yazımının iki ana nedeni: **TanStack Start** + **Supabase**.
- İçerik yazımı: agent + prompt; **admin paneli yok** (Supabase Studio + migration script'leri).
- Engagement (view, like, comment): **site lansmanından sonra** — bu migration kapsamında tablo oluşturulmaz.

---

## İsimlendirme Kuralları

| Katman | Dil |
| --- | --- |
| Tablo / sütun / enum değerleri | **İngilizce** (`snake_case`) |
| UI etiketleri | Türkçe (`docs/SITE-CONTENT.md`, `features/blog/constants/`) |

---

## Postgres Enum'ları

```sql
CREATE TYPE post_category AS ENUM ('technical', 'personal');
CREATE TYPE post_locale AS ENUM ('tr', 'en');
CREATE TYPE asset_bleed AS ENUM ('none', 'wide', 'full');
```

---

## Tablo: `blog_posts`

| Sütun | Tip | Not |
| --- | --- | --- |
| `id` | `uuid` PK | `gen_random_uuid()` |
| `slug` | `text` UNIQUE | Başında `/` — örn. `/react-ai-stack-2026` |
| `title` | `text` | |
| `description` | `text` | Liste + SEO özeti |
| `content` | `text` | **Yalnızca MDX gövdesi** (frontmatter yok) |
| `category` | `post_category` | `technical` \| `personal` |
| `tags` | `text[]` | Yazı başına en fazla 3 öneri |
| `locale` | `post_locale` | Varsayılan `tr` |
| `medium_url` | `text` nullable | Dış yayın linki |
| `interactive` | `boolean` | Varsayılan `false` |
| `featured` | `boolean` | Ana sayfa havuzu |
| `published` | `boolean` | **`true` = yayında** — manuel toggle; cron / tarih kontrolü yok |
| `published_at` | `timestamptz` nullable | Görünen yayın tarihi (sıralama, liste); otomatik yayın tetiklemez |
| `og_image_path` | `text` nullable | Mantıksal path; null → dinamik OG fallback |
| `created_at` | `timestamptz` | Varsayılan `now()` |
| `updated_at` | `timestamptz` | Trigger ile güncellenir |

### Yayın mantığı

- Yazı **yalnızca** `published = true` olduğunda production'da görünür.
- `published_at` gelecek tarihli olsa bile otomatik yayınlanmaz; yayına almak için `published` boolean'ı manuel `true` yapılır.
- **Cron veya `published_at <= now()` filtresi kullanılmaz.**

### Taslak / fikir notları (eski `futurePosts`)

- `published = false` → taslak veya planlanmış başlık (blog fikir notları).
- **Development:** taslaklar blog listesinde görünür (üstte veya ayrı bölüm; muted **Taslak** badge).
- **Production:** taslaklar listelenmez, detay URL'leri `404`, sitemap/RSS/⌘K dışında kalır, `noindex`.

### Görünürlük sorgusu (özet)

```text
development  → published = true OR published = false
production     → published = true
```

---

## Tablo: `post_assets` (opsiyonel, önerilir)

| Sütun | Tip | Not |
| --- | --- | --- |
| `id` | `uuid` PK | |
| `post_id` | `uuid` FK → `blog_posts.id` | `ON DELETE CASCADE` |
| `storage_path` | `text` | Örn. `blog/2026/01-28/react-stack.png` |
| `alt` | `text` | |
| `bleed` | `asset_bleed` | `none` \| `wide` \| `full` |
| `sort_order` | `int` | |

Migration sırasında MDX içindeki görseller taranıp doldurulabilir.

---

## Engagement (lansman sonrası — şimdilik yok)

Site tamamlandıktan sonra değerlendirilecek; migration'da oluşturulmaz:

| Tablo (taslak) | Amaç |
| --- | --- |
| `post_views` | Okunma sayısı |
| `post_likes` | Beğeni |
| `post_comments` | Yorum (şimdilik geç) |

---

## Row Level Security (RLS)

- **Public read (production):** `published = true` olan `blog_posts` satırları.
- **Development:** uygulama katmanında taslakları dahil et (service role veya `NODE_ENV` / `import.meta.env.DEV` ile genişletilmiş sorgu).
- **Write:** service role (migration script, agent iş akışı); anonim insert yok.

---

## Medya sağlayıcı (aşamalı geçiş)

Blog görselleri **tek env değişkeni** ile kaynak değiştirir. MDX ve DB'de **mantıksal path** saklanır; migration sırasında tam URL'ye çevrilmez.

### Path convention (tüm aşamalar)

```text
blog/{yyyy}/{mm-dd}/{filename}
```

Örnek: `blog/2026/01-28/react-stack.png`  
MDX'te: `![](/blog/2026/01-28/react-stack.png)` veya aynı path öneksiz.

### Aşamalar

| Aşama | `VITE_MEDIA_PROVIDER` | Dosya konumu | URL çıktısı |
| --- | --- | --- | --- |
| **1 — Başlangıç** | `local` (varsayılan) | `public/blog/` | `/blog/2026/01-28/react-stack.png` |
| **2 — Storage** | `supabase` | Supabase `media` bucket | `.../object/public/media/blog/...` |
| **3 — Transform** | `supabase-transform` | Aynı bucket | `.../render/image/public/media/blog/...?width=800&quality=80` |

Kod: `src/lib/media/get-media-url.ts` → `getMediaUrl(path, { transform? })`.

```ts
// MDX img bileşeni — provider'dan bağımsız
<img src={getMediaUrl("/blog/2026/01-28/react-stack.png")} alt="..." />

// Aşama 3: responsive srcSet (yalnızca supabase-transform)
srcSet={getMediaSrcSet(path, { widths: [{ width: 400 }, { width: 800 }] })}
```

### Env

```bash
# .env.example
VITE_MEDIA_PROVIDER=local          # local | supabase | supabase-transform
VITE_SUPABASE_URL=                 # Aşama 2–3 için zorunlu
```

### Build başlangıcı (Aşama 1)

```bash
# Görselleri public'e bağla (symlink veya kopya)
ln -sf ../_legacy/public/blog public/blog
# veya: cp -R _legacy/public/blog public/blog
```

Vercel CDN üzerinden servis edilir; Supabase egress / transform maliyeti yok.

### OG görselleri

`og_image_path` DB'de mantıksal path tutar. OG route `getMediaUrl(path, { transform: { format: 'origin' } })` veya `local`/`supabase` provider kullanır — sosyal crawler uyumluluğu için transform WebP'den kaçınılabilir.

### Maliyet notu

- **Aşama 1:** Storage ve transform ücreti yok; egress Vercel bandına dahil.
- **Aşama 2:** Storage + egress (Pro Spend Cap varsayılan açık).
- **Aşama 3:** + Image Transformations kotası (Pro: 100 origin image/ay).

---

## Storage

### Bucket

| Ayar | Değer |
| --- | --- |
| Ad | `media` |
| Public read | Evet (blog görselleri) |
| Smart CDN | Açık |

### Path convention

Legacy ile uyumlu kronolojik yapı:

```text
blog/{yyyy}/{mm-dd}/{filename}
```

Örnek: `blog/2026/01-28/react-stack.png`

Legacy path `/blog/2026/01-28/react-stack.png` → Storage `blog/2026/01-28/react-stack.png`.

### MDX içinde URL

**Migration sırasında image path'leri rewrite edilmez** — mantıksal path DB'de kalır (`/blog/2026/...`). Render pipeline'da `getMediaUrl(path)` çözümler. Provider değişince içerik güncellemesi gerekmez.

---

## Legacy → Supabase Taşıma

### Kaynak

- `_legacy/src/content/*.mdx` (~94 yazı)
- `_legacy/public/blog/**` görseller

### Frontmatter → kolon eşlemesi

| Legacy frontmatter | DB sütun |
| --- | --- |
| `title` | `title` |
| `description` | `description` |
| `slug` (veya dosya adından) | `slug` — başında `/` olmalı |
| `createdAt` | `published_at` |
| `category` | `category` — aşağıdaki map |
| `tags` | `tags` |
| `languages` | `locale` (`["en"]` → `en`) |
| `medium` | `medium_url` |
| `featured` | `featured` |
| `interactive` | `interactive` |
| gövde | `content` |
| — | `published` — mevcut yayınlar `true`; gelecek fikirler `false` |

### Kategori map (legacy → DB enum)

| Legacy `category` | `post_category` |
| --- | --- |
| `teknik`, `css`, `web geliştirme`, `technical` | `technical` |
| `kişisel`, `yıl değerlendirmesi`, `kitap`, `dizi/film`, `sosyal`, `tasarım` | `personal` |

### Eski `futurePosts` mantığı

Legacy: `createdAt > today` → liste üstünde gösterim.

Yeni: `published = false` + isteğe bağlı `published_at` (planlanan tarih). Development'ta listede; production'da gizli.

---

## MDX Render — Kayıp Olmamalı

Supabase yalnızca depolama; render sunucuda:

```text
blog_posts.content (ham MDX string)
  → remark / rehype
  → Shiki (kod renklendirme)
  → custom MDX component map
  → prose + bleed CSS
  → HTML
```

- Markdown stilleri (`**bold**`, `*italic*`, blockquote) korunur.
- Özel bileşenler (Rating, MediaInfo, Chart, interactive demo'lar) legacy ile aynı export isimlerini destekler veya migration'da güncellenir.
- Detay: `docs/BLOG.md` → MDX bileşenleri, bleed, yazı detay sayfası.

---

## Migration Script Adımları (checklist)

### Aşama A — DB + local görseller (önerilen başlangıç)

1. [ ] Supabase projesi oluştur; env: `VITE_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
2. [ ] SQL migration: enum'lar, `blog_posts`, `post_assets`, RLS, `updated_at` trigger
3. [ ] `public/blog` ← `_legacy/public/blog` (symlink veya kopya)
4. [ ] `VITE_MEDIA_PROVIDER=local`
5. [ ] Her `.mdx`: frontmatter parse → `blog_posts` insert; **görsel path'leri olduğu gibi bırak**
6. [ ] `published` bayraklarını ata (yayında olanlar `true`, fikir notları `false`)
7. [ ] Slug doğrulama: tüm slug'lar `/` ile başlar
8. [ ] Smoke test: SSR render, `getMediaUrl` ile görseller yüklenir

### Aşama B — Supabase Storage (isteğe bağlı, sonra)

9. [ ] `media` bucket + public policy + Smart CDN
10. [ ] `_legacy/public/blog/**` → Storage upload
11. [ ] `VITE_MEDIA_PROVIDER=supabase` — smoke test

### Aşama C — Image transform (isteğe bağlı, Pro plan)

12. [ ] Dashboard: Enable Image Transformations
13. [ ] `VITE_MEDIA_PROVIDER=supabase-transform` — MDX `img` + `getMediaSrcSet`
14. [ ] OG görselleri için `format: 'origin'` veya `supabase` provider

---

## Agent Notları

1. DB şema değişikliği kullanıcı onayı gerektirir (`core-principles.mdc`).
2. Tablo/sütun adları İngilizce; UI Türkçe kalır.
3. Engagement tablolarını site lansmanından önce oluşturma.
4. Admin paneli ekleme — Supabase Studio yeterli.
5. Görsel URL'lerini migration'da tam URL'ye çevirme — `getMediaUrl` render'da çözer.
