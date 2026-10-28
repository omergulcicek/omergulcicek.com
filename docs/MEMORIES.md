# Project Memories

Kalıcı kararlar ve kodda açık olmayan bağlam. Metin ve içerik kodda yaşar (`src/constants/me.json`, `src/constants/site-copy.constants.ts`); burada yalnızca kararlar tutulur.

## Bağlam

- **Proje:** omergulcicek.com, Ömer Gülçiçek'in kişisel sitesi ve blogu. Yalnızca Türkçe; i18n paketi yok.
- **Stack:** TanStack Start + Supabase (`blog_posts`) + Tailwind CSS 4 + shadcn/ui. Deploy: Vercel.
- **Unvan:** "Frontend Mühendisi". Frontend Architect hedef, unvan olarak yazılmaz.

## Kararlar

- **Tek kaynak:** Kişisel olgular, projeler, deneyimler, Yolculuk, hobiler, favoriler ve teknoloji seçimleri `me.json`'da; `me.schema.ts` ile doğrulanır. Sayfa metinleri `site-copy.constants.ts`'te.
- **Layout:** Sayfa `max-w-2xl`; en fazla iki genişlik katmanı (prose + bleed). Boşluklar `spacing-standard` skill'indeki token'larla.
- **Navigasyon:** Header: Ana Sayfa, Blog, Projeler, Hakkımda, Keşfet. Keşfet ve footer aynı liste (`EXPLORE_NAV`), Türkçe alfabetik. Arama (⌘K) ve tema header'da; sağ altta kaydırma göstergesi.
- **Blog / Notlar:** Teknik yazılar `/blog`, kişisel yazılar `/notlar` (`BLOG_SECTIONS`). Kategoriler arası 301 yönlendirme; ayrı RSS (`/feed.xml`, `/notlar/feed.xml`). Öne çıkan yazılar `me.json` → `featuredPosts`.
- **Yayın:** `published` boolean manuel; cron veya `published_at <= now()` yok. Taslaklar (`published = false`) yalnızca development'ta listelenir.
- **Slug:** Başında `/`. Görseller `public/blog/YYYY/MM-DD/` altında, tarih yazının `published_at` günü (ay önce).
- **Medya sağlayıcı:** `getMediaUrl` + `VITE_MEDIA_PROVIDER` (`local` varsayılan → `supabase` → `supabase-transform`). DB mantıksal yolu tutar; sağlayıcı değişince içerik güncellenmez.
- **Supabase yazma:** Her yazma işleminden önce SQL önizlemesi ve açık onay.
- **Kaldırılanlar:** Hizmetler (`/services` → 301 `/about#birlikte-calisalim`), Akademi (`/academy/*` → 301 virastack.com/academy).
- **Motion:** İlk yüklemede giriş animasyonu yok (`useSkipInitialMotion`); animasyon yalnızca site içi gezinmede.
- **Tema:** Kayıtlı seçim yoksa işletim sistemi teması geçerli. `dark` sınıfını React değil, `<head>`'deki `THEME_BOOT_SCRIPT` ilk boyamadan önce koyar; prerender edilen HTML ziyaretçinin temasını bilemez.
- **Logolar:** Marka logoları `public/logos/stack/` altında statik SVG; inline SVG bileşeni ve eager logo yok (eager `<img>` React'ın preload üretmesine yol açar).
- **Makine okunur çıktılar:** `/llms.txt`, `/llms-full.txt` (yalnızca teknik yazılar), `/blog/<slug>.md`, `/notlar/<slug>.md` ve RSS'teki `content:encoded` sunucuda Supabase'den üretilir; `public/`'te statik kopya yok.
- **Çeviri çiftleri:** TR/EN yazılar `blog-translations.constants.ts`'te eşlenir; hreflang ve `og:locale` buradan gelir. İngilizce metin `lang="en"` taşır.

## Ajan kuralları

- Kod kuralları: ViraStack AI (`.claude/rules/virastack/`, `.cursor/rules/virastack/`).
- Proje skill'leri: `writing-voice`, `blog-post`, `spacing-standard` (`.claude/skills/`).
- UI skill'leri: `better-ui`, `better-accessibility`, `emil-design-eng` (`.agents/skills/`, `skills-lock.json`).
