---
date: "2021-05-29"
path: "/renk-kontrastini-hesaplama"
title: "Renk Kontrastını Hesaplama"
category: "Yazılım"
keywords: ["JavaScript"]
medium: "https://omergulcicek.medium.com/renk-kontrastını-hesaplama-9a42a1bc7dee"
---

Bu makalede, arka plan rengine bağlı olarak yazı rengini değiştirmeyi göreceğiz.

CSS tarafında bir yazıya `color: #fff` verdiğimizi düşünelim. Koyu arka plan renklerinde bu yazı okunabilirken, açık tonlu renk üzerinde okunamaz olacaktır. Burada dinamik olarak arka plan rengi koyu ise beyaz yazı, arka plan açık tonlar ise siyah renkte yazı yazmamız sorunu çözecektir. Peki bunu nasıl yapabiliriz?

**Brian Suda** isimli bir geliştiricinin geliştirmiş olduğu şu kod işimizi görüyor;

```js
function getContrastYIQ(hexcolor) {
	var r = parseInt(hexcolor.substr(0, 2), 16)
	var g = parseInt(hexcolor.substr(2, 2), 16)
	var b = parseInt(hexcolor.substr(4, 2), 16)
	var yiq = (r * 299 + g * 587 + b * 114) / 1000
	return yiq >= 128 ? "black" : "white"
}
```

- Bu kodu biraz okuyalım. Öncelikle `hexcolor` adında bir parametre (_rengimizin 6 haneli HEX kodunu_) istiyor.

- `.substr(X,2)` fonksiyonu sayesinde `26a69a` diye bir renk gönderirsek `26`, `a6` ve `9a` şeklinde parçalıyor.

- `r`, `g`, `b` değerleri CSS'te 0-255 ve arasındaki değerleri alabiliyor. Bu yüzden oluşturulan 26, a6 ve 9a değerlerini `parseInt(X,16)` fonksiyonu ile 16'lık tabanda bir değere dönüştürüyor.

- Bu işlemlerden sonra `r=38`, `g=166` ve `b=154` olarak hesaplanmış oluyor.

- Son adımda ise `((r*299)+(g*587)+(b*114))/1000` formulü ile rengin kontrast değeri hesaplanıyor. Bu değer `128` ve üstü ise parametre olarak gönderdiğimiz değer açık tonda bir renktir, 128'den küçükse koyu bir renktir.

Debug adımlarını gösterecek olursak kod şu şekilde çalışıyor;

```js
function getContrastYIQ(hexcolor) {
	// hexcolor = 26a69a
	var r = parseInt(hexcolor.substr(0, 2), 16) // r = 38
	var g = parseInt(hexcolor.substr(2, 2), 16) // g = 166
	var b = parseInt(hexcolor.substr(4, 2), 16) // b = 154
	var yiq = (r * 299 + g * 587 + b * 114) / 1000 // yiq = 126.36
	return yiq >= 128 ? "black" : "white" // return "white"
}
```

---

Aşağıda React ile oluşturulmuş basit bir CodePen örneğinde arkaplana göre yazı rengi dinamik olarak hesaplanmaktadır.

<iframe height="840" style="width: 100%;" scrolling="no" title="Renk Konstratı" src="https://codepen.io/omergulcicek/embed/MWpEdaQ?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/omergulcicek/pen/MWpEdaQ'>Renk Konstratı</a> by Ömer Gülçiçek
  (<a href='https://codepen.io/omergulcicek'>@omergulcicek</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Kaynaklar

- <a href="https://24ways.org/2010/calculating-color-contrast/" target="_blank" rel="noreferrer noopener">Brian Suda - Calculating Color Contrast</a>
- <a href="https://www.youtube.com/watch?v=tJNltOn-2Yg" target="_blank" rel="noreferrer noopener">Tayfun Erbilen - React ile Brand Colors Uygulaması</a>
