---
date: "2020-10-30"
path: "/linkleri-yeni-sekmede-acmak"
title: "Linkleri Yeni Sekmede Açmak"
category: "Yazılım"
medium: "https://omergulcicek.medium.com/linkleri-yeni-sekmede-a%C3%A7mak-f51f355d9041"
---

HTML geliştirme yaparken bir linki yeni sayfada açılmasını istediğimizde linke attribute olarak `target="_blank"` ekleriz.

```html
<a href="..." target="_blank">Link</a>
```

React geliştirme yaparken eğer yukarıdaki kodu kullanırsanız, bunu `rel="noopener noreferrer"` ile beraber kullanmanız gerektiği konusunda konsolda bir uyarı görürsünüz.

Bunun sebebi, `target="_blank"`ın ortaya çıkardığı güvenlik açığıdır. Bağlandığınız sayfa, geldiğiniz siteye erişim sağlayabiliyor.

Test etmek için <a href="https://mathiasbynens.github.io/rel-noopener" target="_blank" rel="noreferrer noopener">Mathias Bynens'in konuda hakkında yazmış olduğu makaleyi</a> inceleyin.

`Click me!!1 (same-origin)` ve `Click me!!1 (cross-origin)` linklerine gittiğinizde açılan sayfa bizi *"Why don’t you go back to the previous tab? (Neden önceki sekmeye geri dönmüyorsun?)"* yazısıyla karşılıyor. Önceki sayfaya gittiğimizde ise daha önce sayfada olmayan şu yazı ile karşılaşıyoruz;

<div align="center">

![Linkleri Yeni Sekmede Açmak](https://miro.medium.com/max/430/1*K86RTPgR5bQs-uGMJAN-0g.png)
<figcaption>Linkleri Yeni Sekmede Açmak</figcaption>
</div>

Aynı makalede `Click me!!1 (now with rel=noopener)` veya `Click me!!1 (now with rel=noreferrer-based workaround)` linklerine girdiğimizde ise karşımıza *"The previous tab is safe and intact. window.opener was null; mischief not managed! (Önceki sekme güvenli, windowopener null olduğu için yaramazlık yönetilmedi)"* uyarısı çıkıyor.

## Güvenlik Sorununun Çözümü

Sayfaların `window.opener`ı kötüye kullanımını önlemek için linke `rel="noreferrer noopener"` eklemek gerekiyor.

```html
<a href="..." target="_blank" rel="noreferrer noopener">Link</a>
```

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target" target="_blank" rel="noreferrer noopener">Developer Mozilla'nın konu ile ilgili yazısı</a>nda da `target="_blank"` kullanırken `window.opener` API'sinin kötüye kullanımını önlemek için `rel="noreferrer noopener"` ile birlikte kullanmamız gerektiği konusunda uyarıyor.

Firefox 79+ sürümü ile sadece target kullansak bile, tarayıcı güvenlik sorununu ortadan kaldırmak için noreferrer noopener kısmını kendisi ekliyor. Genel olarak tarayıcı desteği ise oldukça iyi görünüyor;

<div align="center">

![noopener Tarayıcı Desteği](https://miro.medium.com/max/700/1*1ruo2dfb3NC9Rd_Jlyp7mg.png)
<figcaption>noopener Tarayıcı Desteği</figcaption>
</div>

### Kaynaklar

- <a href="https://mathiasbynens.github.io/rel-noopener/" target="_blank" rel="noreferrer noopener">https://mathiasbynens.github.io/rel-noopener/</a>
- <a href="https://zlypher.github.io/posts/secure-target-blank-with-noopener-noreferrer" target="_blank" rel="noreferrer noopener">https://zlypher.github.io/posts/secure-target-blank-with-noopener-noreferrer</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target" target="_blank" rel="noreferrer noopener">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target</a>
- <a href="https://caniuse.com/?search=noopener" target="_blank" rel="noreferrer noopener">https://caniuse.com/?search=noopener</a>
