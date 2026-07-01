# omergulcicek.com — Arama (⌘K)

> **Agent onboarding:** Command Palette kapsamı ve davranışı için tek kaynak. **MVP zorunlu** — Faz 1'den itibaren.

---

## Teknoloji

| Paket | Not |
| --- | --- |
| `cmdk` | shadcn `Command` bileşeni üzerine |
| Konum | Header'da arama ikonu + `⌘K` / `Ctrl+K` kısayolu |

Legacy referans: `_legacy/src/components/shared/command-palette/CommandPalette.tsx` — kod kopyalanmaz.

---

## Arama kapsamı

| Grup | Öğeler | Faz |
| --- | --- | --- |
| Sayfalar | Ana Sayfa, Blog, Projeler, Hakkımda, Deneyimler, Hizmetler, Yer İmleri | Faz 1 |
| Projeler | Başlık + açıklama (`docs/PROJECTS.md` kataloğu) | Faz 1 |
| Yer İmleri | 7 kategori başlık + açıklama (`docs/BOOKMARKS.md`); seçilince `/bookmarks` | Faz 1 |
| Hızlı eylemler | E-posta, GitHub, ViraStack | Faz 1 |
| Blog yazıları | Başlık + slug (Supabase; yalnızca `published = true`) | Blog hazır olunca |

Blog hazır olmadan önce sayfa + proje + yer imi + eylem araması çalışır. Taslaklar (`published = false`) ⌘K'da listelenmez — development'ta da palette'te gösterme (yalnızca blog liste sayfasında taslak badge).

---

## UI

- Modal / dialog; `max-w-2xl` ile uyumlu dar panel
- Sonuç grupları: Sayfalar · Projeler · Yer İmleri · Yazılar · Eylemler (grup başlıkları `SITE_CONTENT.commandGroups`)
- Klavye navigasyonu (cmdk varsayılanı)
- **v1:** Framer Motion açılış animasyonu yok; CSS hover/focus serbest

---

## Veri

- Sayfalar ve eylemler: sabit constants
- Projeler: `projects.constants.ts`
- Yer imleri: `bookmarks.constants.ts` → `SEARCH_BOOKMARK_CATEGORIES`
- Blog: SSR meta listesi veya build-time import (Faz 3)

---

## Agent notları

1. `PROJECT-BRIEF` yasağından çıkarıldı — ⌘K MVP'de zorunlu.
2. Blog Faz 3 öncesi palette boş “Yazılar” grubu göstermez veya gizler.
