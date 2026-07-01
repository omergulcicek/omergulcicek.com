# Project Memories & Context

Kalıcı kararlar ve bağlam. Kodda açık olmayan tercihler burada.

## Context

- **Proje:** omergulcicek.com — kişisel site ve blog (Ömer Gülçiçek)
- **Unvan:** Frontend Engineer (kesin)
- **Rewrite:** TanStack Start + Supabase (sıfırdan yeni Supabase projesi)
- **Legacy:** `_legacy/` — referans; kod kopyalanmaz

## Key Decisions (2026-06)

- **Layout:** Sayfa `max-w-2xl`; en fazla iki genişlik katmanı (prose + bleed). Blog görselleri ve stack slider bleed'de; viewport full değil.
- **About:** Yeni versiyon kalıcı; legacy Vizyon/İletişim/uzun teknik metin bilinçli kaldırıldı. Hobiler statik liste.
- **Header:** Marka yalnızca `@lucide/lab` rose ikonu — "Ömer" metni yok. GitHub ikonu yok; sosyaller hero'da.
- **Footer:** Sol — `BrandMark` (rose ikonu) + build credit + kaynak kod + telif (alt alta); sağ — ikincil nav Deneyimler → Hizmetler → Yer İmleri → ViraStack (harici, alt alta). LinkPreview yok.
- **Tipografi:** Hero isim/unvan/metin 16px; isim + unvan font-weight 500. Bölüm başlıkları 16px.
- **Bookmarks:** 7 legacy başlık (Blog, Eklenti, Frontend, Kitaplık, Kişisel, Makale, Teknik); Raindrop slug'ları legacy'den; Donanım/İçerik Arşivi sitede yok.
- **DB:** Tablo/sütun/enum İngilizce; UI Türkçe. Kategori: `technical` | `personal`.
- **Slug:** Başında `/` — örn. `/react-ai-stack-2026`.
- **Yayın:** `published` boolean manuel; cron ve `published_at <= now()` yok.
- **Taslaklar:** `published = false` — development'ta listede; production'da gizli (eski futurePosts).
- **Blog filtre:** Kategori pill + tag chip (kesin). Sıralama: `newest` / `oldest` only.
- **Blog TOC:** chanhdai minimap (kesin).
- **Blog görselleri:** Aşamalı — `local` (`public/blog/`) → `supabase` → `supabase-transform`; `getMediaUrl` + `VITE_MEDIA_PROVIDER`.
- **MDX tam set:** Faz 4; Faz 3 yalnızca temel render.
- **SEO (RSS, OG, llms, sitemap, GA):** Faz 4.
- **Hero doodle / ayet:** Faz 5; constants Faz 1'de kapalı.
- **Engagement:** view/like/comment site lansmanından sonra; yorum şimdilik geç.
- **v1 motion:** Framer Motion yok; CSS hover/focus serbest.
- **İçerik:** Agent + prompt; admin paneli yok.

## Evolution

- 2026-06 — Dokümantasyon SSOT tamamlandı; `docs/supabase-migration.md` eklendi.
- 2026-06 — Blog görselleri aşamalı medya sağlayıcı: `src/lib/media/`, varsayılan `local`.
- 2026-06-29 — `SITE-CONTENT.md` tamamlandı (footer, SEO, hata sayfaları). `BOOKMARKS.md` 7 kategori SSOT. Faz haritası güncellendi (MDX/SEO Faz 4, cila Faz 5).
- 2026-06-29 — Header rose ikonu (metin yok); footer iki sütun; hero + bölüm başlıkları 16px tipografi kararları.
