# Site denetimi: before / after notları (28 Ekim 2026)

Makale için ham notlar. Ölçümlerin hepsi aynı makinede, yerel production build'leri (`pnpm build`) üzerinde alındı:

- **before:** commit `6417e64` (değişikliklerden önce), ayrı bir git worktree'de derlendi, `localhost:4301`.
- **after:** bu çalışmadaki değişiklikler, `localhost:4300`.

Lighthouse: mobil profil (simüle Slow 4G, 4x CPU yavaşlatma). Her sayfa 3 kez ölçüldü ve before ile after dönüşümlü çalıştırıldı (aynı makine yükünü görsünler diye); tablolarda medyan var.

Klasörler:

- `before/`, `after/`: ham ölçüm çıktıları (JSON).
- `*/theme-filmstrip/`: koyu tema yüklemesinden kareler (390×844, Slow 4G, 4x CPU). Dosya adı: `<senaryo>-<kare>-<ms>-<tema>.png`.
- `theme-before-after.png`: karşılaştırma görseli.

## Canlı site (before, tek ölçüm, 28 Ekim)

| Sayfa | Perf | A11y | BP | SEO | LCP |
| --- | --- | --- | --- | --- | --- |
| / | 82 | 99 | 100 | 92 | 3,6 sn |
| /blog | 85 | 100 | 100 | 92 | 3,4 sn |
| /blog/tanstack-start-vs-nextjs | 84 | 100 | 100 | 92 | 3,3 sn |
| /projects | 72 | 96 | 96 | 92 | 4,2 sn |
| /experiences | 87 | 100 | 100 | 92 | 3,2 sn |
| /about | 91 | 95 | 100 | 92 | 2,9 sn |

/projects'te konsolda React #418 (hydration) hatası vardı.

## 1. Koyu temada beyaz yanıp sönme

**Sorun:** Sayfalar prerender ediliyor; HTML ziyaretçinin temasını bilemiyor. Tema React hydrate olduktan sonra uygulanıyordu. Kayıtlı tercih yoksa işletim sistemi teması hiç okunmuyordu (varsayılan hep açık tema).

**Çözüm:** `<head>`'in en başında, ilk boyamadan önce çalışan küçük bir script (`src/lib/theme/theme-boot-script.ts`). Sıra: localStorage → çerez → `prefers-color-scheme`. `dark` sınıfını artık React değil bu script yönetiyor. Kullanıcı seçim yapana kadar işletim sistemi tema değişikliklerini canlı takip ediyor. `color-scheme` da eklendi (kaydırma çubukları ve form kontrolleri).

| Senaryo (/about, Slow 4G, 4x CPU) | before | after |
| --- | --- | --- |
| Kayıtlı koyu tema: ilk içerik karesi | 938 ms, **açık** | 876 ms, **koyu** |
| Kayıtlı koyu tema: koyuya geçiş | 2.671 ms | ilk karede |
| Beyaz ekran süresi | **~1,7 sn** (17 kare) | **0** |
| Sistem koyu, kayıt yok | hiç koyu olmuyor | ilk karede koyu |

Kanıt kareleri: `before/theme-filmstrip/`, `after/theme-filmstrip/`.

## 2. /projects hydration hatası (React #418)

**Sorun:** GitHub katkı takvimi veri gelene kadar bugünün tarihinden üretilen boş bir ızgara gösteriyor. Ay etiketleri bu tarihten hesaplanıyordu. Prerender anındaki tarih ile ziyaretçinin tarihi farklı olunca (build'den günler sonra) sunucu HTML'i ile istemci render'ı uyuşmuyor, React kökü istemcide baştan çiziyordu.

**Yeniden üretme:** Tarayıcı saatini 40 gün ileri alarak (`Date` override) sayfayı açmak. Build günüyle aynı tarihte hata çıkmıyor; bu yüzden deploy'dan hemen sonra fark edilmiyor, günler geçtikçe ortaya çıkıyor.

| | before | after |
| --- | --- | --- |
| Build günü | hata yok | hata yok |
| Build + 40 gün | **React #418** | hata yok |

**Çözüm:** Yer tutucu ızgara ay etiketi satırının yüksekliğini koruyor ama tarih yazmıyor. Aynı sınıftan ikinci bir hata da kapatıldı: footer'daki `© 2026` yılı. Yılbaşında tüm prerender sayfalar aynı hatayı verecekti.

## 3. LCP ve gereksiz preload'lar

**Sorun:**

- Ana sayfadaki teknoloji şeridinin logoları `loading="eager"` idi. React 19 SSR, eager her `<img>` için `<link rel="preload">` üretiyor. Açık ve koyu varyantlarla birlikte `<head>`'de 29 görsel preload vardı ve kritik isteklerle bant genişliği için yarışıyorlardı. /setup'ta 28 tane vardı.
- Header ve hero fotoğrafında ilk yüklemede CSS giriş animasyonu çalışıyordu (opacity 0, blur). Bu, "ilk yüklemede animasyon yok" kararına aykırıydı ve LCP öğesini (hero fotoğrafı) geciktiriyordu.
- Blog yazılarında kapak görseli (LCP öğesi) `loading="lazy"` idi.

**Çözüm:** Logolar lazy (gizli tema varyantı hiç indirilmiyor). Header'daki giriş animasyonu kaldırıldı, hero fotoğrafı yalnızca site içi gezinmede animasyonla geliyor. İlk başlıktan önceki görsel `loading="eager" fetchpriority="high"`.

| Sayfa | Görsel preload (before → after) |
| --- | --- |
| / | 29 → 1 (yalnızca hero fotoğrafı) |
| /setup | 28 → 0 |

**Lighthouse (mobil, 3 çalıştırmanın medyanı, before/after dönüşümlü):**

| Sayfa | Perf | LCP | FCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- |
| / | 76 → 75 | 4,59 → 4,59 sn | 3,61 → 3,71 sn | 42 → 48 ms | 0 → 0 |
| /blog | 76 → **80** | 4,39 → **3,92 sn** | 3,80 → 3,47 sn | 49 → 68 ms | 0 → 0 |
| /blog/tanstack-start-vs-nextjs | 77 → **80** | 4,35 → **4,01 sn** | 3,62 → 3,49 sn | 58 → 32 ms | 0,039 → **0** |
| /experiences | 82 → 83 | 3,77 → 3,69 sn | 3,32 → 3,16 sn | 38 → 72 ms | 0 → 0 |
| /projects | 78 → 80 | 3,46 → 3,46 sn | 3,16 → 3,16 sn | 294 → 260 ms | 0 → 0 |
| /setup | 81 → **85** | 3,99 → **3,40 sn** | 3,16 → 3,16 sn | 44 → 28 ms | 0 → 0 |
| /about | 86 → 86 | 3,46 → 3,39 sn | 3,01 → 3,02 sn | 24 → 36 ms | 0 → 0 |

Dürüst not: Ana sayfa laboratuvarda yerinden oynamadı. İlk 1,5 saniyedeki istek sayısı 73'ten 45'e, görsel baytı 86 KB'tan 56 KB'a indi. Ama asıl darboğaz artık görseller değil, tek parça giriş JS'i: `index-*.js` 661 KB ham, 215 KB gzip ve ana sayfada yarısı kullanılmıyor. Simüle Slow 4G'de bu dosya CSS ile bant genişliği için yarışıyor ve FCP'yi ~3,5 sn'de tutuyor. Bir sonraki adımın adayı: `me.json`'u istemcide çalışma anında Zod ile doğrulamak (`ME = meSchema.parse(meJson)`) Zod'un tamamını her sayfanın giriş paketine sokuyor. Doğrulama zaten testte var; build/test anına taşınabilir.

## 4. Inline SVG şişkinliği

**Sorun:** Deneyimler ve blog etiketlerindeki marka logoları inline SVG bileşeniydi. Aynı SVG her rozet için HTML'e yeniden basılıyordu: 12 KB'lık jQuery logosu açık ve koyu haliyle 8 kez. Aynı `clip-path` id'si tekrarlandığı için geçersiz HTML de üretiliyordu.

**Çözüm:** Marka logoları `public/logos/stack/` altında statik SVG oldu (önceki commit'teki yaklaşımla aynı). Rozetler `<img alt="">` kullanıyor; tarayıcı her logoyu bir kez indirip önbellekten kullanıyor. 26 inline SVG bileşeni ve kullanılmayan `ThemeAwareDualIcon` silindi.

| Sayfa | HTML (ham) | HTML (gzip) | Inline SVG | Tekrarlanan id |
| --- | --- | --- | --- | --- |
| /experiences | 274,8 → **81,9 KB** (−%70) | 37,0 → **10,3 KB** (−%72) | 211,3 → 8,7 KB | 8 → 0 |
| /blog | 207,0 → **158,7 KB** | 37,4 → **26,7 KB** | 82,4 → 29,0 KB | 7 → 0 |
| / | 164,5 → 150,5 KB | 31,1 → 27,4 KB | 31,8 → 19,3 KB | 2 → 0 |
| /setup | 63,6 → 61,7 KB | 10,2 → 10,0 KB | 9,1 → 9,1 KB | 0 → 0 |

## 5. İngilizce yazılar: lang ve hreflang

**Sorun:** 4 yazı iki dilde yayınlanmış. İngilizce sürümlerde `<html lang="tr">` ve `og:locale tr_TR` vardı, `hreflang` yoktu. Ekran okuyucular İngilizce metni Türkçe telaffuzla okuyordu (WCAG 3.1.2). Arama motorları da iki sürümü birbirine bağlayamıyordu.

**Çözüm:**

- Çeviri çiftleri `blog-translations.constants.ts`'te tanımlı.
- Her iki sürümün head'inde `hreflang="tr"`, `hreflang="en"` ve `x-default` var.
- İngilizce yazılarda `og:locale en_US` ve `og:locale:alternate tr_TR` var.
- Yazı gövdesi ve listelerdeki İngilizce başlık ve açıklamalar `lang="en"` taşıyor.

## 6. AI çağı: llms.txt, Markdown sürümleri, tam içerikli RSS

| Çıktı | before | after |
| --- | --- | --- |
| `/llms.txt` | statik, 1,7 KB, **0 yazı** | dinamik, ~29 KB, 69 teknik yazı + 38 not, hepsi `.md` linkiyle |
| `/llms-full.txt` | statik, 2,4 KB, **0 yazı metni** | dinamik, ~299 KB, 69 teknik yazının tam metni |
| `/blog/<slug>.md`, `/notlar/<slug>.md` | yok | 107 yazı; YAML front matter, `Link: rel=canonical` header'ı; eski sluglar ve yanlış bölüm için 301, bilinmeyen slug için 404 |
| `/feed.xml` | yalnızca açıklama | 69 yazıda `content:encoded` (tam metin) |
| `/notlar/feed.xml` | yalnızca açıklama | 38 yazıda `content:encoded` |
| Yazı head'i | — | `<link rel="alternate" type="text/markdown">` |

MDX → Markdown dönüşümü (`src/features/blog/lib/mdx-to-markdown.ts`) MDX'in kendi parser'ını kullanıyor ve kaynağı konum (offset) bazlı yeniden yazıyor:

- Markdown ve kod blokları kaynakta nasıl yazıldıysa öyle kopyalanıyor.
- `import`, `{" "}` gibi ifadeler ve etkileşimli widget'lar çıkarılıyor.
- `BlogNotice` alıntıya, satır içi `<a>`, `<strong>`, `<em>` Markdown'a dönüşüyor.
- Göreli linkler mutlak URL oluyor.

107 yazının tamamı tarandı. Kod dışında kalan MDX artığı yok; 3 eşleşmenin hepsi satır içi koddaki örneklerdi (`<App />` gibi).

## Canlı doğrulama (deploy sonrası, 28 Ekim, commit `0d9d03d`)

- **Tema:**
  - Kayıtlı koyu tema: ilk içerik karesi (1.394 ms) koyu.
  - Sistem koyu, kayıt yok: ilk karede koyu.
  - Kareler `live-after/theme-filmstrip/` altında.
- **Hydration:** Saat 0, 40 ve 400 gün ileri alındığında /projects dahil 10 sayfanın hiçbirinde konsol hatası yok. 400 gün yılbaşını da geçiyor.
- **Metin çıktıları:**
  - `/llms.txt`: 107 `.md` linki.
  - RSS: blog akışında 69, notlar akışında 38 `content:encoded`.
  - `.md` yanıtlarında `Link: rel=canonical` var; 301 ve 404 doğru dönüyor.
- **Head:** Kaide çiftinde hreflang tr/en/x-default, `og:locale en_US` ve `lang="en"` canlıda var.
- **Lighthouse (canlı, mobil, 3 çalıştırmanın medyanı):**

| Sayfa | Perf (önce → sonra) | LCP (önce → sonra) | Not |
| --- | --- | --- | --- |
| / | 82 → **86** | 3,6 → **3,37 sn** | |
| /blog/tanstack-start-vs-nextjs | 84 → **91** | 3,3 → **3,06 sn** | CLS 0,039 → 0 |
| /projects | 72 → 73 | 4,2 → 4,07 sn | TBT 340 → 209 ms, konsol hatası 1 → 0 |
| /about | 91 → 91 | 2,9 → 2,95 sn | |
| /blog | 85 → 84 | 3,4 → 3,40 sn | |
| /experiences | 87 → 84 | 3,2 → 3,72 sn | Gürültülü: iki geçerli çalıştırma 2,90 ve 4,54 sn, biri NO_FCP ile düştü. Aynı LCP öğesi (metin), fark render gecikmesinde. Yereldeki eşleştirilmiş ölçüm 3,77 → 3,69 sn. |

"Önce" sütunu canlı sitede tek ölçümdü; "sonra" 3 ölçümün medyanı. Canlı ölçüm ağ dalgalanmasına açık. Kesin karşılaştırma için yerel eşleştirilmiş tablo daha güvenilir.
