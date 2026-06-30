# omergulcicek.com — Yer İmleri

> **Agent onboarding:** `/bookmarks` sayfa metinleri, Raindrop koleksiyonları ve kategori önizlemeleri için tek kaynak. Footer ikincil nav → `docs/SITE-CONTENT.md`.

---

## Sayfa

**Rota:** `/bookmarks`  
**Başlık:** Yer İmleri  
**Footer:** ikincil nav (header'da yok)

Ana kaynak [raindrop.io/omergulcicek](https://raindrop.io/omergulcicek). Sayfa, legacy'deki önemli üst başlıklara yönlendirir; her kategoride 2–4 önizleme linki ile somutlaştırır.

Raindrop'taki derin alt ağaç (Frontend → npm/Siteler, Kişisel → Edebiyat/Film vb.) sitede **kopyalanmaz** — tam liste Raindrop'ta kalır.

**Sitede gösterilmeyen Raindrop koleksiyonları:** Donanım (kişisel alışveriş), İçerik Arşivi (Makale ile örtüşür).

---

## Giriş (`bookmarksIntro`)

Yer imlerimi [raindrop.io/omergulcicek](https://raindrop.io/omergulcicek)'da saklıyorum; özellikle **frontend kaynaklarımı**, **kitaplığımı**, okuduğum **makaleleri**, günlük takip ettiğim **blogları**, **teknik içerikleri** ve kullandığım **uygulama-eklentileri** burada tutuyorum.

---

## UI

- Dikey liste (`max-w-2xl`); legacy 4 kolon grid **kullanılmaz**
- Sıra: legacy `bookmarks.data.ts` ile aynı — Blog → Eklenti → Frontend → Kitaplık → Kişisel → Makale → Teknik
- Her kategori: accent nokta + başlık + 1 cümle açıklama + 2–4 önizleme linki (muted) + **Raindrop'ta tümü →**
- Renk: `accent` OKLCH — tam renkli kart arka planı yok (legacy `bgColor` kullanılmaz)
- Önizleme görselleri opsiyonel (favicon/OG); v1'de link metni yeterli
- LinkPreview yok — düz `<a>`

**v1:** Animasyon yok — statik liste.

---

## Veri şeması

Depolama: `src/features/bookmarks/constants/bookmarks.constants.ts`  
Referans: `_legacy/src/features/bookmarks/data/bookmarks.data.ts`

| Alan | Tip | Açıklama |
| --- | --- | --- |
| `id` | string | Benzersiz anahtar |
| `sortOrder` | number | Liste sırası (küçük önce) |
| `title` | string | Kategori adı (legacy başlıkları) |
| `description` | string | 1 cümle |
| `raindropSlug` | string | Koleksiyon slug'ı |
| `accent` | string | OKLCH renk — küçük görsel vurgu |
| `previews` | array | 2–4 öğe: `{ title, url }` — `image` opsiyonel |

**Raindrop URL:** `https://raindrop.io/omergulcicek/{raindropSlug}`

---

## Kategori kataloğu (SSOT)

### 1 — `blog`

| Alan | Değer |
| --- | --- |
| `sortOrder` | 1 |
| `title` | Blog |
| `description` | Günlük takip ettiğim bloglar |
| `raindropSlug` | `takip-ettigim-bloglar-58171252` |
| `accent` | `oklch(0.70 0.19 45)` |

**previews:** kullanıcı Raindrop'tan günceller — implementasyonda 2–4 favori blog URL'si.

### 2 — `extension`

| Alan | Değer |
| --- | --- |
| `sortOrder` | 2 |
| `title` | Eklenti |
| `description` | Chrome ve Cursor eklentilerim |
| `raindropSlug` | `uygulama-ve-eklentiler-53474205` |
| `accent` | `oklch(0.70 0.17 155)` |

**previews:** TBD — sık kullanılan eklenti/araç linkleri.

### 3 — `frontend`

| Alan | Değer |
| --- | --- |
| `sortOrder` | 3 |
| `title` | Frontend |
| `description` | npm paketleri ve kütüphaneler |
| `raindropSlug` | `frontend-55191450` |
| `accent` | `oklch(0.62 0.19 300)` |

**previews (onaylı örnekler):**

| `title` | `url` |
| --- | --- |
| TanStack Query | `https://tanstack.com/query` |
| shadcn/ui | `https://ui.shadcn.com` |
| React | `https://react.dev` |

### 4 — `library`

| Alan | Değer |
| --- | --- |
| `sortOrder` | 4 |
| `title` | Kitaplık |
| `description` | Kitaplarım ve okuduğum kitaplar |
| `raindropSlug` | `kitapligim-53478275` |
| `accent` | `oklch(0.75 0.15 85)` |

**previews:** TBD — son okunan veya önerilen kitap linkleri.

### 5 — `personal`

| Alan | Değer |
| --- | --- |
| `sortOrder` | 5 |
| `title` | Kişisel |
| `description` | Edebiyat, ekonomi, videolar |
| `raindropSlug` | `kisisel-58170823` |
| `accent` | `oklch(0.65 0.20 15)` |

**previews:** TBD — Raindrop Kişisel alt koleksiyonlarından 2–4 favori.

### 6 — `article`

| Alan | Değer |
| --- | --- |
| `sortOrder` | 6 |
| `title` | Makale |
| `description` | Okuyup beğendiğim yazılar |
| `raindropSlug` | `okunan-makaleler-58171316` |
| `accent` | `oklch(0.75 0.18 130)` |

**previews:** TBD — son arşivlenen makale linkleri.

### 7 — `technical`

| Alan | Değer |
| --- | --- |
| `sortOrder` | 7 |
| `title` | Teknik |
| `description` | Kod, tasarım, tweetler |
| `raindropSlug` | `teknik-58171314` |
| `accent` | `oklch(0.55 0.02 260)` |

**previews:** TBD — AI prompt, tasarım veya yararlı site linkleri.

---

## UI string'leri

| Anahtar | Metin |
| --- | --- |
| `bookmarksRaindropCta` | Raindrop'ta tümü → |

---

## ⌘K

Command Palette'te ayrı **Yer İmleri** grubu: yukarıdaki 7 kategori başlığı + açıklama aranabilir; seçilince `/bookmarks` açılır. Sayfa navigasyonu “Yer İmleri” satırı **Sayfalar** grubundadır → `docs/SEARCH.md`.
