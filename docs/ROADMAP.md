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
- [ ] EN blog sayfası: şimdilik iki dil birlikte; İngilizce yazılar birikince EN'de yalnızca İngilizce yazılar
- [ ] Etiketlerin İngilizce karşılıkları (Supabase'de etiketler Türkçe)
- [x] `/virastack` sayfası (9 bölüm; ürün başına 3 aylık, toplamda tüm zamanların npm indirmesi; günlük cache)
- [x] Proje kartlarında npm indirme sayıları (son 3 ay) ve GitHub yıldızları, günlük cache ile canlı
- [ ] Takvim ve Footy için somut metrikler (kullanıcıdan alınacak)
- [x] Keşfet: Yer imleri (115 link, kategori filtresi), Kitaplık (222 kitap, tür filtresi), Film ve diziler (13 favori + 22 YouTube videosu)
- [ ] Müzik sayfası: taslak hazır (4 grup, sticky video); grup şarkı listeleri, öne çıkan videolar, Spotify linkleri kullanıcıdan
- [ ] Film kartlarından Notlar'daki "Film ve Dizi" yazılarına link
- [x] Yolculuk (13 kayıt, ViraStack noktaları); Kullandıklarım (/uses; /setup ve /workspace 301 ile yönleniyor)
- [x] Hakkımda (tanışma, işin dışında, favoriler; menü grubu "Kişisel")
- [x] Şu an sayfası kaldırıldı: içeriği Hakkımda, ViraStack ve Yolculuk sayfalarında
- [x] Ana sayfa test ve commit

## ViraStack Start şablonunda düzeltilecekler

- [x] `commitlint.config.js` ESM; commit hook'u çalışıyor
- [ ] `components/ui/separator.tsx` yüksekliği `data-horizontal`'a bağlı, Base UI `data-orientation` koyuyor; yatay separator 0px kalıyor
- [ ] `src/routeTree.gen.ts` içinde TanStack Start `Register` bloğu eksik geliyor

## Yayından önce (zorunlu)

### SEO ve meta

- [x] Ana sayfa `<title>`: "Ömer Gülçiçek · Frontend Mühendisi"
- [x] Ana sayfa meta description (`site_description`)
- [x] Alt sayfa başlık şablonu: "Blog · Ömer Gülçiçek" (`pageHead()` in `config/seo.config.ts`)
- [x] Her sayfaya kendi OG ve Twitter etiketleri
- [x] Yazı sayfalarında paylaşım kartı (Supabase'deki `og_image_path` artık kullanılmıyor)
- [x] Paylaşım kartları dinamik: `/og/<dil>/<yol>`, tüm sayfalar ve yazılar aynı şablonla (`features/og-image`)
- [ ] Favicon ve manifest ikonları (şu an ViraStack Start'ın `favicon.ico` ve `logo.webp` dosyaları; 192 ve 512 px ikon)
- [x] Sitemap: sayfalar iki dilde (hreflang ile), yazılar yalnızca kendi dillerinde
- [x] JSON-LD: ana sayfada `WebSite` ve `Person`, yazılarda `BlogPosting`
- [x] Canonical: tüm sayfalar; yazılar kendi dillerindeki adresi gösterir
- [x] `siteConfig` değerleri `me.json`'dan; `VITE_APP_NAME` kaldırıldı
- [x] Taslak sayfalar `noindex`: Müzik (sitemap'te de yok); bitince `noindex` kaldırılıp sitemap'e eklenmeli

### Yönlendirmeler ve geçiş

- [ ] v10 URL'leri için 301: `/notlar/*` → `/notes/*` ve değişen diğer adresler
- [ ] Güncelliğini yitiren yazılar (ör. `/blog/kaide-yapay-zeka-odakli-mimari-kit`): 301 ile yerini alan sayfaya; hedef sayfada eski ad ("eski adıyla Kaide") geçsin
- [ ] Legacy reposundaki `v10/` için `noindex` + `robots.txt`, `v10.omergulcicek.com` deploy'u, README güncellemesi
- [ ] Vercel env değişkenleri: `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `VITE_APP_URL`, `GITHUB_TOKEN` (yetkisiz, sadece okuma limiti için)

### Son kontroller

- [ ] `pnpm lint && pnpm typecheck && pnpm test` ve `pnpm build`
- [ ] Lighthouse: LCP, CLS, erişilebilirlik
- [ ] TanStack Redact denemesi (ayrı branch, v10 ile karşılaştırma)
