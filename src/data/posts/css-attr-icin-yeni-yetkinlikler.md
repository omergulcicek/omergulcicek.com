---
date: "2025-03-22"
path: "/css-attr-icin-yeni-yetkinlikler"
title: "CSS attr() İçin Yeni Yetkinlikler"
category: "Teknik"
keywords: ["CSS"]
medium: "https://omergulcicek.medium.com/css-attr-i%CC%87%C3%A7in-yeni-yetkinlikler-47c9b2fabe10"
---

![CSS attr() Fonksiyonu](/img/blog/2025-03-22/css-attr.png)

CSS gelişmeye, JavaScript'ten rol çalmaya devam ediyor. CSS'te **attr()** fonksiyonu, eskiden her zaman bir string döndürdüğü için, sadece content özelliğinde veya bazı özel metin efektlerinde kullanılabiliyordu.

```css
div::after {
  content: attr(data-title); 
}
```

Örneğin, **data-number="10"** gibi bir değer tanımlasanız bile, CSS içinde bu değeri gerçek bir sayı olarak kullanamazsınız. Aynı şekilde, **data-size="3rem"** gibi bir değer de CSS tarafından gerçek bir uzunluk birimi olarak algılanmazdı.

Artık bu mümkün. Tek yapmanız gereken, hangi türde bir değer kullanacağınızı belirtmek.

```css
attr(<attr-name> <attr-type>? , <fallback-value>?)
```

**fallback-value** değeri, özelliğin değeri yoksa kullanılacak olan değerdir, zorunlu alan değil.

```css
div {
  font-size: attr(data-font-size type(<length>));
  grid-column-start: attr(data-column-start type(<integer>));

  /* data-color özelliği yoksa, black değerini alır. */
  color: attr(data-color type(<color>), black);
}
```

## Geçerli Türler

```html
<angle>
<color>
<custom-ident>
<image>
<integer>
<length>
<length-percentage>
<number>
<percentage>
<resolution>
<string>
<time>
<transform-function>
<url>
``` 


***

## Kullanım Örneği

```html
<div data-rotation="-3"> -3 derece çevrildim</div>
<div data-rotation="2">ve ben 2 derece</div>
<div>ben ise 1.5 derecelik yedek değeri kullanıyorum</div>
```

```css
div {
  width: fit-content;
  transform-origin: 50% 50%;
  rotate: attr(data-rotation deg, 1.5deg);
}
```

Misal buradaki kodda CSS rotate özelliğini `attr()` fonksiyonu ile kullanıyoruz. `data-rotation` özelliği yoksa, varsayılan olarak `1.5deg` değeri kullanılacak.

Çıktısı şu şekilde görünecek:

![CSS attr() Fonksiyonu](/img/blog/2025-03-22/css-attr-rotate.png)

CodePen kurucu ortağı <a href="https://x.com/chriscoyier" target="_blank" rel="noopener noreferrer">Chris Coyier</a>'ın konu ile ilgili bir kaç örneği mevcut.

**attr()** özelliği ile çeşitli örnekleri inceleyebilirsiniz:

- grid kolon örneği için <a href="https://codepen.io/chriscoyier/pen/LEYRzMz" target="_blank" rel="noopener noreferrer">attr() with columns</a>
- renkler ile kullanımı için <a href="https://codepen.io/chriscoyier/pen/VYwKyGe" target="_blank" rel="noopener noreferrer">attr() for colors</a>
- font-size ile kullanımı için <a href="https://codepen.io/chriscoyier/pen/zxYKaxO" target="_blank" rel="noopener noreferrer">attr() for font-size</a>

## CSS attr() desteği

Şimdilik sadece **Chrome** ve Chromium tabanlı olan **Edge** tarayıcılarında destekleniyor.

Mobil tarayıcılar içinde durum aynı, sadece **Android Browser** ve **Android Chrome**'da destekleniyor.

![CSS attr() Fonksiyonu](/img/blog/2025-03-22/can-i-use-css-attr.png)

***

Yazının kapak görseli yapay zeka tarafından üretilmiştir. 🤖

### Kaynaklar

- <a href="https://frontendmasters.com/blog/how-to-use-attr-in-css-for-columns-colors-and-font-size/" target="_blank" rel="noreferrer noopener">FrontendMasters - How to Use attr() in CSS for Columns, Colors, and Font-Size</a>
- <a href="https://codepen.io/chriscoyier" target="_blank" rel="noreferrer noopener">Chris Coyier CodePen</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/attr" target="_blank" rel="noreferrer noopener">MDN Web Docs - attr()</a>