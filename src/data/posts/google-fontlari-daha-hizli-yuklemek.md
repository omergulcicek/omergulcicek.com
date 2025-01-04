---
date: "2020-09-26"
path: "/google-fontlari-daha-hizli-yuklemek"
title: "Google Fontları Daha Hızlı Yüklemek"
category: "Teknik"
keywords: ["HTML"]
medium: "https://medium.com/@omergulcicek/google-fontlar%C4%B1-daha-h%C4%B1zl%C4%B1-y%C3%BCklemek-d2afb28494dc"
---

Web sitenizde <a href="https://fonts.google.com/" target="_blank" rel="noreferrer noopener">Google Font</a> kullanıyorsanız, basit birkaç adım ile daha hızlı yükleme sürelerine ulaşabilirsiniz.

Öncelikle bu sitede kullandığım **Inter** yazı stilini HTML'e eklediğimizde olanları inceleyelim.

```html
<link
	href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
	rel="stylesheet"
/>
```

Bağlantı bir yazı tipi dosyası değil bir stil sayfası için gibi görünüyor. Bu kodda bulunan `href`ini tarayıcımızda açarsak Google Fonts'un `@font-face` ile her karakter setinde istediğimiz tüm yazı tipleri için bir sayfa yüklediğini görüyoruz.

Ardından her `@font-face` tarayıcıya, dosyayı `fonts.gstatic.com`'dan indirmeye çalışmadan önce, eğer varsa yazı tipinin localden kullanılmasını söyler.

```css
/* latin */
@font-face {
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-display: swap;
	src: url(https://fonts.gstatic.com/s/inter/v2/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2)
		format("woff2");
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
}
```

Sayfamız fontu yükleyebilmek için önce `fonts.googleapis.com`'a ardından `fonts.gstatic.com`'a istek atıyor. Peki neden yazı tipini doğrudan kullanmıyoruz?

## Bağlantıya Önceden Bağlanmak

Yazı tiplerinin kaynağına önceden bağlanmak iyi bir fikirdir.

```html
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
	rel="stylesheet"
/>
```

Karşılaştırma yapabilmek için bu kod yokken sayfanın yüklenme hızına bakalım.

Google Font'a **preconnect** olmadan bağlanmak:

![preconnect olmadan bağlanmak](/img/blog/2020-09-26/without-preconnect.png)

Sayfamızın `fonts.gstatic.com`'a istek atacağını bildiğimiz için bu boşa zaman kaybını azaltabiliriz. preconnect ekleyerek kazandığımız süreyi inceleyelim:

![preconnect ile bağlanmak](/img/blog/2020-09-26/with-preconnect.png)

## Yazı Stilini Kendimiz Barındırmak

preconnect yardımıyla çok iyi bir süre kazandık. Fakat bir yazı stili için farklı bir linke istek atıp sonucunu beklemektense bu yazı stilini kendi hostumuzdan çekersek daha iyi bir süre kazanabiliriz. <a href="https://mranftl.com/" target="_blank" rel="noreferrer noopener">Mario Ranftl</a>'ın geliştirdiği <a href="https://google-webfonts-helper.herokuapp.com/fonts" target="_blank" rel="noreferrer noopener">Google Webfonts Helper</a> projesi yardımıyla seçtiğimiz yazı stilini çeşitli özelleştirmelerden geçirerek indirmemize olanak sağlıyor.

İlk olarak arama çubuğu üzerinden istediğimiz Google Font'unu seçip, ardından charsets, styles gibi bölümlerden ihtiyaçlarımızı belirleyelim.

![Google Webfonts Helper](/img/blog/2020-09-26/google-webfonts-helper.png)

Ardından hangi tarayıcıları desteklemek istediğinizi seçmeniz gerekiyor. Burada _Best Support_ TDD, EOT, SVG formatlarını verirken, _Modern Browsers_ ise WOFF ve WOFF2 formatlarını verecektir.

![Google Webfonts Helper](/img/blog/2020-09-26/google-webfonts-helper-2.png)

Ardından özelleştirilmiş font dosyanızı indirin ve projenize dahil edin.

## Font Display Swap

`font-display` özelliği ile yazı stilin nasıl yüklenmesi gerektiğini belirtebiliriz. Bu özellik modern tarayıcıların tamamı tarafından desteklenir.

`font-display: block` özelliği ile, kısa bir süre için yazılarınız görünmez. Yazı stiliniz hazır olduğunda tüm metin ekranda görüntülenir. Buna FOIT (Flash of Invisible Text) denir.

![font-display block özelliği](/img/blog/2020-09-26/display-block.png)

---

`font-display: swap` özelliği ile, yazı stiliniz yüklenene kadar yedek yazı stili ile yazıyı hızlıca ekranda gösterir. Yazı stili yüklendiğinde ise bunu değiştirir. Buna FOUT (Flash of Unstyled Text) denir. Yazınız ekranda hızlı görüntülenmesine rağmen, yedek yazı stilinde özel yazı stilinize geçerken özellikle yavaş bağlantılarda oluşturacağı değişim hoşunuza gitmeyebilir. Burada önceliği belirlemek size kalmış.

![font-display swap özelliği](/img/blog/2020-09-26/display-swap.png)

Hangisini kullanmanız gerektiğinde kararsız kaldıysanız `swap` kullanın. Google font'un size verdiği linki incelerseniz swap kullanıldığını göreceksiniz.

```html
<link href="...&display=swap" ... />
```

### Kaynaklar

- <a href="https://ahmadawais.com/google-fonts-load-faster/" target="_blank" rel="noreferrer noopener">https://ahmadawais.com/google-fonts-load-faster/</a>
- <a href="https://medium.com/clio-calliope/making-google-fonts-faster-aadf3c02a36d" target="_blank" rel="noreferrer noopener">https://medium.com/clio-calliope/making-google-fonts-faster-aadf3c02a36d</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display#Browser_compatibility" target="_blank" rel="noreferrer noopener">https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display#Browser_compatibility</a>
- <a href="https://font-display.glitch.me/" target="_blank" rel="noreferrer noopener">https://font-display.glitch.me/</a>
