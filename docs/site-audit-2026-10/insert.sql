INSERT INTO blog_posts
	(slug, title, description, content, category, tags, locale, medium_url, interactive, published, published_at, og_image_path)
VALUES (
	'/kisisel-site-denetimi',
	'Kişisel Site Denetimi: Ölçerek Düzelttiklerim',
	'Sitemi denetleyip ölçerek düzelttim: koyu temada beyaz ekran, gecikmeli hydration hatası, gereksiz byte''lar, llms.txt ve kırmızı CI.',
	$mdx$Sitemi Claude Code'a sayfa sayfa denetlettim, sonra bulduklarını ölçerek düzelttim. Lighthouse puanları iyi görünüyordu, ama koyu temada beyaz ekran, birkaç gün sonra ortaya çıkan bir hydration hatası ve uzun süredir kırmızı bir CI vardı.

## Nasıl Ölçtüm?

Canlı sitede tek bir Lighthouse ölçümü çok oynak. Aynı sayfa bir seferinde 2,9 sn, bir sonrakinde 4,5 sn LCP verebiliyor. Bu yüzden değişikliklerden önceki commit'i ayrı bir git worktree'de derledim ve iki production build'i aynı makinede, iki ayrı portta yan yana çalıştırdım.

Lighthouse'u mobil profilde, her sayfa için dönüşümlü 3 kez çalıştırdım: önce, sonra, önce, sonra. Tablolardaki değerler medyan. Tema ve hydration gibi Lighthouse'un görmediği sorunlar için Puppeteer ile küçük scriptler yazdım.

## Kullanıcının Gördüğü İki Hata

İlki koyu temadaydı. Sayfalar build sırasında prerender ediliyor ve HTML ziyaretçinin temasını bilemiyor. Tema, React hydrate olduktan sonra uygulanıyordu. Yavaş bir bağlantıda bu, koyu tema seçen birinin her sayfa açılışında yaklaşık 1,7 saniye beyaz ekran görmesi demekti. Kayıtlı tercih yoksa işletim sisteminin teması da hiç okunmuyordu.

![Koyu tema: önce 938 ms'de beyaz, 2.671 ms'de koyu; sonra ilk karede koyu](/blog/2026/10-28/tema-once-sonra.webp)

Çözüm, `<head>`'in en başında ilk boyamadan önce çalışan küçük bir script oldu:

```js
var t = localStorage.getItem("theme")
var dark = t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches
document.documentElement.classList.toggle("dark", dark)
```

Artık `dark` sınıfını React değil bu script koyuyor. Kullanıcı seçim yapana kadar işletim sistemindeki tema değişikliği de canlı takip ediliyor.

İkinci hata daha sinsiydi. Projeler sayfasındaki GitHub katkı takvimi, veri gelene kadar bugünün tarihinden boş bir ızgara çiziyordu. Build günü sunucunun ve tarayıcının tarihi aynı olduğu için hata görünmüyordu. Günler geçtikçe ay etiketleri değişiyor, sunucu HTML'i ile tarayıcının render'ı uyuşmuyor ve React #418 hatası veriyordu. Hatayı tarayıcı saatini 40 gün ileri alarak yeniden ürettim. Footer'daki `© 2026` de aynı türden bir hataydı ve yılbaşında her sayfada ortaya çıkacaktı.

## Gereksiz Byte'lar

Sayfa ağırlığında üç kaynak buldum.

- **Preload'lar:** Ana sayfadaki teknoloji logoları `loading="eager"` idi. React 19, eager her görsel için `<head>`'e bir preload ekliyor. Açık ve koyu varyantlarla birlikte 29 preload vardı.
- **Inline SVG:** Deneyimler sayfasında 12 KB'lık jQuery logosu, açık ve koyu haliyle 8 kez HTML'e basılıyordu.
- **Zod:** İstemci paketine dört yoldan giriyordu. `me.json`'u ve env değerlerini her ziyaretçinin tarayıcısında yeniden doğruluyordum. Artık ikisi de build başlarken doğrulanıyor; hatalı bir değer build'i durduruyor.

| | Önce | Sonra |
| --- | --- | --- |
| Ana sayfadaki görsel preload | 29 | 1 |
| /experiences HTML (gzip) | 37 KB | 10 KB |
| Giriş JS (gzip) | 209,6 KB | 191,5 KB |
| Ana sayfada JS başlatma süresi | 445 ms | 381 ms |
| /setup LCP | 3,99 sn | 3,40 sn |
| /blog LCP | 4,39 sn | 3,92 sn |

Ana sayfanın LCP'si ise laboratuvarda yerinden oynamadı. Artık darboğaz görseller değil, react-dom ve router'ın çoğunu oluşturduğu giriş paketi. Mobilde 2,5 saniyelik hedefin hâlâ üstündeyim.

## Makineler ve CI İçin

Daha önce [llms.txt üzerine bir yazı](/blog/makineler-icin-dokumantasyon-llms-txt) yazmıştım, ama kendi sitemdeki `llms.txt` 1,7 KB'lık statik bir dosyaydı ve tek bir yazıyı listelemiyordu. Şimdi Supabase'den dinamik üretiliyor:

- `/llms.txt` 107 yazıyı Markdown linkiyle listeliyor.
- Her yazının `.md` sürümü var. Örneğin bu yazı `/blog/kisisel-site-denetimi.md` adresinde.
- `/llms-full.txt` teknik yazıların tam metnini tek dosyada veriyor.
- RSS akışları artık yazının tamamını içeriyor.

İki dilde yayınladığım dört yazıya `hreflang` ve `lang="en"` ekledim. Ekran okuyucular İngilizce metni Türkçe telaffuzla okuyordu.

CI ise en az 15 commit'tir kırmızıydı ve fark etmemiştim. Build, Supabase'e erişemediği için prerender sırasında düşüyordu. Bunu düzeltince bir sonraki adım ortaya çıktı: Lighthouse CI için sunucuyu açan `npx srvx` komutu, srvx doğrudan bağımlılık olmadığı için hiç çalışmıyordu. Son olarak footer'daki "Start" linki Lighthouse'un SEO kontrolünü düşürüyordu. Ekranda yine "Start" görünüyor, ama metinde gizli bir "ViraStack" öneki var.

Hepsi canlıda ve CI yeşil. Yeni sürümü [llms.txt](/llms.txt) üzerinden de okuyabilirsin.$mdx$,
	'technical',
	ARRAY['Site Yenileme', 'Frontend', 'Yapay Zekâ'],
	'tr',
	NULL,
	false,
	false,
	'2026-10-28 12:00:00+00',
	NULL
);
