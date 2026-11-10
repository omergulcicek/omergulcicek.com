# v11 Roadmap

## Sıradaki işler

- [x] Mobil menü (768px altında header'da menü butonu, soldan açılan sheet) ve mobil kenar boşluğu (20px)
- [x] Blog ve notlar: yazı detay sayfası, listedeki başlıkları linke çevirme
- [x] Yazılardaki özel MDX bileşenleri (15): sabit olanlar sunucuda, demolar tarayıcıda canlanan adalar
- [x] Yazı sayfası: görsel zoom (medium-zoom), görsel açıklamaları, uzun kodu kısaltma
- [x] Yazı sayfası: paylaş (X, LinkedIn, link kopyala), önceki/sonraki yazı
- [x] Yazı sayfası: içindekiler (h2/h3, sağ alanda)
- [x] Yazı sayfası: görsellere boyut (`pnpm blog:image-sizes`), okuma süresi, mobil içindekiler, ilgili yazılar
- [x] Kod blokları: dil etiketi, `title="…"` ile dosya adı, kopyala butonu
- [x] Blog ve Notlar: etiket filtresi (`?tag=css`, sağ alanda liste, mobilde çipler)
- [x] Her dil kendi yazılarını listeliyor (notlar yalnızca Türkçe, iki dilde de hepsi); çevirisi olan yazılar birbirine link veriyor
- [x] Etiketlerin İngilizce karşılıkları (`EN_TAG_LABELS`; Supabase'de etiketler Türkçe kalıyor)
- [x] `/virastack` sayfası (9 bölüm; ürün başına 3 aylık, toplamda tüm zamanların npm indirmesi; günlük cache)
- [x] Proje kartlarında npm indirme sayıları (son 3 ay) ve GitHub yıldızları, günlük cache ile canlı
- [x] Takvim ve Footy metrikleri: Takvim'de ölçülecek veri yok (abonelikler takvim uygulamasına iniyor), GitHub yıldızı yeterli; Footy durduruldu (`paused`)
- [x] Keşfet: Yer imleri (115 link, kategori filtresi), Kitaplık (222 kitap, tür filtresi), Film ve diziler (13 favori + 22 YouTube videosu)
- [ ] Müzik sayfası (gizli: `noindex`, menüden, sitemap'ten, llms.txt'ten ve Hakkımda/Kullandıklarım linklerinden çıktı; kod duruyor): taslak hazır (4 grup, sticky video); grup şarkı listeleri, öne çıkan videolar, Spotify linkleri kullanıcıdan
- [x] Yolculuk (13 kayıt, ViraStack noktaları); Kullandıklarım (/uses; /setup ve /workspace 301 ile yönleniyor)
- [x] Hakkımda (tanışma, işin dışında, favoriler; menü grubu "Kişisel")
- [x] Şu an sayfası kaldırıldı: içeriği Hakkımda, ViraStack ve Yolculuk sayfalarında
- [x] Ana sayfa test ve commit
- [x] Mobil menü alttan açılan drawer; profil ikonları menünün altında; hero ve ViraStack mobil düzeni
- [x] Hakkımda: kişisel giriş, fotoğraflı bölümler (yürüyüş, kitap, satranç), favoriler
- [x] Footer: RSS, llms.txt ve kaynak kod linkleri; sitemap ve llms.txt sayfa listesi menüden
- [x] ViraStack menüden çıktı (sayfa duruyor, ana sayfadaki butondan)
- [x] Google Analytics ve Search Console doğrulaması v10'dan taşındı
- [x] 404 başlığı ve `noindex`; yazıların Markdown sürümü (`/blog/slug.md`)
- [x] ⌘K komut paleti (cmdk)
- [x] Turkuaz vurgu rengi ve animasyon cilası

## Yayından önce (zorunlu)

### SEO ve meta

- [x] Ana sayfa `<title>`: "Ömer Gülçiçek · Frontend Mühendisi"
- [x] Ana sayfa meta description (`site_description`)
- [x] Alt sayfa başlık şablonu: "Blog · Ömer Gülçiçek" (`pageHead()` in `config/seo.config.ts`)
- [x] Her sayfaya kendi OG ve Twitter etiketleri
- [x] Yazı sayfalarında paylaşım kartı (Supabase'deki `og_image_path` artık kullanılmıyor)
- [x] Paylaşım kartları dinamik: `/og/<dil>/<yol>`, tüm sayfalar ve yazılar aynı şablonla (`features/og-image`)
- [x] Favicon ve manifest ikonları: hepsi çintemani çinisinden `pnpm favicon` ile üretiliyor (SVG, ICO, 180, 192 ve 512 px PNG)
- [x] Sitemap: sayfalar iki dilde (hreflang ile), yazılar yalnızca kendi dillerinde
- [x] JSON-LD: ana sayfada `WebSite` ve `Person`, yazılarda `BlogPosting`
- [x] Canonical: tüm sayfalar; yazılar kendi dillerindeki adresi gösterir
- [x] `siteConfig` değerleri `me.json`'dan; `VITE_APP_NAME` kaldırıldı
- [x] Taslak sayfa için `noindex` gerekmiyor: site, bütün sayfalar tamamlanınca yayına girecek

### Yönlendirmeler ve geçiş

- [x] v10 URL'leri için 301: `/notlar/*` → `/notes/*`, `/stack` ve `/setup` → `/uses`, `/services` → `/about`, `slug.md` → yazı sayfası
- [x] RSS: `/feed.xml` (blog) ve `/notes/feed.xml` (notlar; `/notlar/feed.xml` 301 ile buraya); `llms.txt` ve `llms-full.txt` (teknik yazılar Markdown olarak)
- [x] Güncelliğini yitiren yazılar 301 ile yerini alan yazıya (Nizam ve Next.js 15 Boilerplate → `virastack-start`, Kaide → `virastack-ai`); listelerden ve sitemap'ten çıktılar (`RETIRED_POSTS`)
- [x] Legacy reposundaki `v10/` için `noindex` + `robots.txt`, `v10.omergulcicek.com` deploy'u, README güncellemesi (10 Kasım; v1–v10'daki ters `ignoreCommand` de düzeldi)
- [x] Vercel env değişkenleri: v10 projesinde tanımlı, main'e push ile aynen geliyor (`VITE_API_URL` kaldırıldı)

### Son kontroller

- [x] `pnpm lint && pnpm typecheck && pnpm test` ve `pnpm build` (9 Kasım)
- [x] Lighthouse (9 Kasım, mobil, gzip ile): erişilebilirlik, best practices ve SEO her sayfada 100; performans metin sayfalarında 100, görsel ağırlıklı sayfalarda 83–94 (LCP görseli)
- [x] TanStack Redact denemesi (10 Kasım): JS −%8, TBT 2–4 kat arttı, mobil menü kapanmıyor; şimdilik alınmadı (`docs/redact-denemesi.md`)
