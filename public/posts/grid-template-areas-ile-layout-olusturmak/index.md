---
path: "/grid-template-areas-ile-layout-olusturmak"
date: "2022-09-09"
title: "grid-template-areas ile Layout Oluşturmak"
category: "Yazılım"
medium: "https://omergulcicek.medium.com/grid-template-areas-ile-layout-olu%C5%9Fturmak-619a93489ebf"
---

CSS Grid ile layout'u oluşturmak çok kolay ve fonksiyonel. Bu makalede grid özelliklerinden olan `grid-template-areas` özelliği ile HTML bileşenlerimizi nasıl component gibi kullanabiliriz, bunu göreceğiz.

## Layout'umuzu Parçalara Bölmek

Uzun bir süre Bootstrap'ten gelen bir alışkanlık olarak layout'u kolonlar ile bölerdik. Örneğin, 3 eşit parça için `3 x .col-4` yapısını kullanırdık. Flex ve grid ile gelen özelliklerden sonra artık Bootstrap'in grid yapısına ihtiyaç kalmadığını düşünüyorum.

Adım adım grid ile layout'u bölümlendirmeyi ve HTML bileşenlerimizi nasıl componentmiş gibi yönetebileceğimizi görelim.

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 200px);
}
```

Bu kod, içerisinde bulunan tag'lerini;

- Kolon olarak 50% 50% yapacak,
- Row olarak 200px'lik 3 eşit parça oluşturacak.

![grid-template-areas ile Layout Oluşturmak](/img/blog/2022-09-09/grid-template-areas-ile-layout-olusturmak-1.jpg)

Ekranda 6 parça alanımız oldu. Bu alanlara grid ile isim vererek, HTML bileşenlerimize konumlanacakları yeri belirtmiş olacağız.

```css
grid-template-areas:
  "head head"
  "nav main"
  "foot foot";
```

Dört adet bileşenimiz var; head, nav, main, foot.

Kodu okumaya çalışalım, `head` üstteki 2 alanı almış. Yani bu layoutun tepesinde 100%'lük bir alanı kapsayacağı anlamına geliyor.

`nav` ve `main` yatayda 50%'lik bir alan kapsıyor.

`foot` ise layout'un en altında 100%'lük alan kapsıyor.

Sonuç olarak;

![grid-template-areas ile Layout Oluşturmak](/img/blog/2022-09-09/grid-template-areas-ile-layout-olusturmak-2.jpg)

## Componentleri Layout'ta İlgili Alana Konumlandırmak

Layout'umuz hazır, sıra ilgili tag'leri konumlandırmak.

Yapmamız gereken tek şey `grid-area` ile aynı isimleri vermek.

Yani `<header>` tag'ine `header { grid-area: head; }` kodunu yazmak. Bu kod, header'ın layout'ta `head` alanlarına gitmesi demek.

Aynı şekilde;

```css
nav {
  grid-area: nav;
}
main {
  grid-area: main;
}
footer {
  grid-area: foot;
}
```

Bu tabii `grid-template-areas`'ın küçük bir özelliği, onlarca özelliği ile her türlü esnekliği bize sağlıyor. Yukarıda oluşturduğumuz yapıda, HTML'e müdahale etmeden sadece CSS ile HTML tag'lerinin yerlerini değiştirmekte mümkün.

Örneğin kapsayıcımızı aşağıda bulunan koda çevirirsek, HTML'de footer elemanımız DOM'da en altta olsa dahi, UI'da header'dan sonra gelecektir.

```css
grid-template-areas:
  "head head"
  "foot foot"
  "nav main";
```

Kurcalamanız için bir codepen linki bırakıyorum;

<iframe height="300" style="width: 100%;" scrolling="no" title="Grid Template Areas" src="https://codepen.io/omergulcicek/embed/LYmNmeY?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/omergulcicek/pen/LYmNmeY">
  Grid Template Areas</a> by Ömer Gülçiçek (<a href="https://codepen.io/omergulcicek">@omergulcicek</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

### Kaynak

- <a href="https://css-tricks.com/using-grid-named-areas-to-visualize-and-reference-your-layout/" target="_blank" rel="noreferrer noopener">Using Grid Named Areas to Visualize (and Reference) Your Layout</a> (Görsel kaynaklar)
