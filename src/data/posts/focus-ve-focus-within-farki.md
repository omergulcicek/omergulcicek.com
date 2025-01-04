---
date: "2020-10-10"
path: "/focus-ve-focus-within-farki"
title: "Focus ve Focus-Within Farkı"
category: "Teknik"
keywords: ["CSS"]
medium: "https://medium.com/@omergulcicek/focus-ve-focus-within-fark%C4%B1-df66708fafc7"
---

CSS'te `:link`, `:visited`, `hover`, `:active` gibi bazı pseudo class'lar (sözde sınıf) vardır. Bugün pseudo class'lardan `:focus` ve `:focus-within`in farkını göreceğiz. Makale sonunda iki farklı örnek bulunmakta.

## CSS'te Focus Özelliği

`:focus` özelliği, sayfada `tab` tuşu ile gezdiğimizde linklerin ve form alanlarının sırasıyla üzerine gelindiğinde çalışan bir pseudo class'tır.

Google Chrome tarayıcısı, varsayılan olarak bir input'un üzerine geldiğinde, inputun etrafını bir kenarlık ile sarar.

```css
:focus {
	outline: -webkit-focus-ring-color auto 1px;
}
```

![CSS :focus](/img/blog/2020-10-10/focus.png)

Varsayılan olarak gelen bu `:focus` özelliğini beğenmediğimden dolayı, `outline` kodunu kaldırıp, `box-shadow` ile daha hoş bir görsellik sunmak adına aşağıdaki kodu projelerime dahil etmeyi tercih ediyorum.

```css
:focus {
	box-shadow: 0 0 0 3px rgba(0, 209, 178, 0.25);
	outline: none;
}
```

Kişisel projem olan Turkuaz ile focus'u test etmek için <a href="https://turkuazcss.com/docs/form/input/" target="_blank" rel="noreferrer noopener">Input</a> linkinde form elemanlarının üzerine `tab` tuşu ile gelebilirsiniz.

## CSS'te Focus Within Özelliği

`:focus-within`'de `:focus`'a benzer çalışmasına rağmen küçük bir farkı var.

Örneğin içerisinde input barındıran bir `<form>` etiketi düşünelim;

```html
<form>
	<input type="text" name="ad" />
	<input type="text" name="soyad" />
</form>
```

CSS'te `form:focus-within` seçicine kod yazdığımızda, bu form alanının içerisindeki bir input'a `:focus` olunduğunda form'un CSS'ine müdahale etmemize olanak sağlıyor; yani bir nevi CSS'te parent selector (üst seçiciye ulaşmak) kullanmış oluyoruz.

```css
form:focus-within {
	background-color: #26a69a;
}
```

Örnek olarak bu kod form içerisindeki bir elemente `:focus` olunduğunda `:focus-within` kodu sayesinde form'un arka plan rengini turkuaz yapacaktır.

<iframe height="500" style="width: 100%;" scrolling="no" title=":focus &amp; :focus-within Örneği - Input" src="https://codepen.io/omergulcicek/embed/LYZVVVq?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowfullscreen="true"></iframe>

Bir başka örnek ile öğrendiklerimizi pekiştirelim.

Aşağıdaki örnekte tab menü ile menüyü gezmek isterseniz linkleri sırasıyla gezersiniz. Fakat açılır menü kodu `:hover` için yazılmıştır. Klavye ile siteyi gezerken açılır menüyü aktif etmek için `:focus-within` özelliğinden faydalanılmıştır.

<iframe height="500" style="width: 100%;" scrolling="no" title=":focus &amp; :focus-within Örneği - Menü" src="https://codepen.io/omergulcicek/embed/vYKOOxY?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowfullscreen="true"></iframe>

### Kaynaklar

- <a href="https://tenmilesquare.com/focus-vs-focus-within/" target="_blank" rel="noreferrer noopener">https://tenmilesquare.com/focus-vs-focus-within/</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within" target="_blank" rel="noreferrer noopener">https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within</a>
- <a href="https://css-tricks.com/almanac/selectors/f/focus-within/" target="_blank" rel="noreferrer noopener">https://css-tricks.com/almanac/selectors/f/focus-within/</a>
- <a href="https://www.digitalocean.com/community/tutorials/css-focus-within-pseudo-class" target="_blank" rel="noreferrer noopener">https://www.digitalocean.com/community/tutorials/css-focus-within-pseudo-class</a>
