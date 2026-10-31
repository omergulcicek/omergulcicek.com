UPDATE blog_posts
SET content = $mdx$Sitemde gözden kaçan hatalar vardı ve Lighthouse puanları bunların çoğunu göstermiyordu. Claude Code ile siteyi sayfa sayfa denetledim, bulduğu sorunları ölçtüm ve tek tek düzelttim.

## Nasıl Ölçtüm?

Canlı sitede tek bir Lighthouse ölçümü çok oynak. Aynı sayfa bir seferinde 2,9 sn, bir sonrakinde 4,5 sn LCP verebiliyor. Bu yüzden sitenin eski ve yeni halini aynı makinede yan yana çalıştırıp karşılaştırdım.

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

İkinci hata daha sinsiydi. Projeler sayfasındaki GitHub katkı takvimi, veri gelene kadar bugünün tarihinden boş bir ızgara çiziyordu. Build günü sunucunun ve tarayıcının tarihi aynı olduğu için hata görünmüyordu. Günler geçtikçe ay etiketleri değişiyor, sunucu HTML'i ile tarayıcının render'ı uyuşmuyor ve React #418 hatası veriyordu. Hatayı tarayıcı saatini 40 gün ileri alarak yeniden ürettim. Yer tutucu ızgara artık tarih yazmıyor. Footer'daki `© 2026` de aynı türden bir hataydı ve yılbaşında her sayfada ortaya çıkacaktı.

## Gereksiz Byte'lar

Sayfa ağırlığında üç kaynak buldum.

- **Preload'lar:** Ana sayfadaki teknoloji logoları `loading="eager"` idi. React 19, eager her görsel için `<head>`'e bir preload ekliyor. Açık ve koyu varyantlarla birlikte 29 preload vardı. Logoları `loading="lazy"` yaptım; gizli tema varyantı artık hiç indirilmiyor.
- **Inline SVG:** Deneyimler sayfasında 12 KB'lık jQuery logosu, açık ve koyu haliyle 8 kez HTML'e basılıyordu. Logoları `public/` altında statik SVG dosyalarına taşıdım. Rozetler artık `<img>` kullanıyor ve tarayıcı her logoyu bir kez indiriyor.
- **Zod:** Client paketine dört yoldan giriyordu. Bunlardan biri, sitedeki deneyim, proje ve teknoloji bilgilerini tuttuğum [`me.json`](https://github.com/omergulcicek/omergulcicek.com/blob/main/src/constants/me.json) dosyasıydı: her ziyaretçinin tarayıcısında şemayla yeniden doğrulanıyordu. Env değerleri de aynı şekildeydi. İkisini de Vite'ın build başlangıcında çalışan küçük bir eklentiye taşıdım; hatalı bir değer artık build'i durduruyor. Server function şemalarını da ayrı bir dosyaya aldım. TanStack Start Client build'inde `.validator()` çağrısını zaten siliyor, şema ayrı dosyada olunca Zod da paketten düşüyor.

Eklenti `vite.config.ts` içinde duruyor. Env değerlerini Vite açılırken, `me.json`'u build başlarken şemadan geçiriyor:

```ts
function validateContentPlugin(): Plugin {
	return {
		name: "validate-content",
		configResolved(config) {
			clientEnvSchema.parse(config.env)
		},
		async buildStart() {
			const meJson = JSON.parse(await readFile("src/constants/me.json", "utf8"))

			meSchema.parse(meJson)
		}
	}
}
```

| | Önce | Sonra | İyileşme |
| --- | --- | --- | --- |
| Ana sayfadaki görsel preload | 29 | 1 | −%97 |
| /experiences HTML (gzip) | 37,0 KB | 10,3 KB | −%72 |
| Giriş JS (gzip) | 209,6 KB | 191,5 KB | −%9 |
| Ana sayfada JS başlatma süresi | 445 ms | 381 ms | −%14 |
| /setup LCP | 🟡 3,99 sn | 🟡 3,40 sn | −%15 |
| /blog LCP | 🔴 4,39 sn | 🟡 3,92 sn | −%11 |

LCP hücrelerindeki renkler Google'ın eşikleri: 🟢 2,5 sn'ye kadar iyi, 🟡 4 sn'ye kadar geliştirilmeli, 🔴 4 sn'nin üstü kötü.

Ana sayfanın LCP'si ise Lighthouse ölçümünde değişmedi: önce de sonra da 4,59 sn. Artık darboğaz görseller değil, react-dom ve router'ın çoğunu oluşturduğu giriş paketi. Mobilde 2,5 saniyelik hedefin hâlâ üstündeyim.

## Makineler ve CI İçin

Daha önce [llms.txt üzerine bir yazı](/blog/makineler-icin-dokumantasyon-llms-txt) yazmıştım. Terzi kendi söküğünü dikemedi: kendi sitemdeki `llms.txt` 1,7 KB'lık statik bir dosyaydı ve tek bir yazıyı listelemiyordu. Statik dosyayı kaldırıp yerine TanStack Start'ta bir server route yazdım. Route yazıları Supabase'den çekip metni o an üretiyor, `Cache-Control` ile CDN sonucu bir saat tutuyor:

```ts
export const Route = createFileRoute("/llms.txt")({
	server: {
		handlers: {
			GET: async () => {
				const posts = await getBlogRepository().getAllPosts()

				return new Response(buildLlmsTxt(posts), {
					headers: {
						"Content-Type": "text/plain; charset=utf-8",
						"Cache-Control": BLOG_PAGE_CACHE_CONTROL
					}
				})
			}
		}
	}
})
```

Yeni bir yazı yayınladığımda dosyaya elle dokunmam gerekmiyor:

- `/llms.txt` tüm yazıları Markdown linkiyle listeliyor.
- Her yazının `.md` sürümü var. MDX kaynağını MDX'in kendi parser'ıyla okuyup Markdown'a çeviriyorum: kod blokları olduğu gibi kalıyor, etkileşimli demolar çıkarılıyor.
- `/llms-full.txt` teknik yazıların tam metnini tek dosyada veriyor.
- RSS akışları artık yazının tamamını içeriyor.

İki dilde yayınladığım dört yazıya `hreflang` ve `lang="en"` ekledim. Ekran okuyucular İngilizce metni Türkçe telaffuzla okuyordu.

CI ise en az 15 commit'tir kırmızıydı ve fark etmemiştim. Build, Supabase'e erişemediği için prerender sırasında düşüyordu; anahtarları GitHub secret'ı olarak ekleyince geçti. Ayrıca footer'daki "Start" linki Lighthouse'un SEO kontrolünü düşürüyordu. Ekranda yine "Start" görünüyor, ama metinde gizli bir "ViraStack" öneki var.

Bu hataların hiçbiri sitenin çalışmasını durdurmuyordu, o yüzden gözümden kaçmışlardı. Hepsini, denetimin bulduğu her sorunu önce ölçüp sonra düzelterek kapattım. Mobil LCP ise bir sonraki iş olarak listemde.$mdx$
WHERE slug = '/kisisel-site-denetimi' AND published = false;
