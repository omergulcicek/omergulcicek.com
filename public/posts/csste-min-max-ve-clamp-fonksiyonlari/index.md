---
date: "2021-06-27"
path: "/csste-min-max-ve-clamp-fonksiyonlari"
title: "CSS'te Min Max ve Clamp Fonksiyonları"
category: "Yazılım"
medium: "https://omergulcicek.medium.com/csste-min-max-ve-clamp-fonksiyonları-3705078f7f7b"
---

CSS yazarken hayatımızı kolaylaştıran bazı fonksiyonlar var. Bazı durumlarda kullanılan genişlik, font-size gibi değerlerin dinamik olarak hesaplanmasına ihtiyacımız olabiliyor. Örneğin, bir kart sayfada 70% yer kaplasın fakat 300px'den küçük olmasın gibi bir senaryomuz varsa, bu durumda şöyle bir CSS yazılmasını bekleriz;

```css
.card {
  width: 70%;
  min-width: 300px;
}
```

CSS `min()` fonksiyonu bu kodu tek satırda çözmeyi sağlıyor;

```css
.card {
  width: min(300px, 70%);
}
```

Her iki kodda kartın 300px'den küçük olmayacak şekilde bulunduğu kapsayıcıya 70% sığacak şekilde hesaplama yapar. Aynı şeyi max-width değeri içinde kullanıp, kısa yazımını `max()` fonksiyonu ile kullanabiliriz.

```css
.card {
  width: 70%;
  max-width: 1000px;
}

.card {
  /* Bu kod yukarıdaki kod ile aynı şekilde çalışır. */
  width: max(70%, 1000px);
}
```

Peki her iki özelliği bir arada kullanmak istersek nasıl bir kod yazmalıyız? Aynı örnek üzerinden devam edelim.

Şöyle geliştirmeye ihtiyacımız olsun; kart sayfaya 70% sığsın fakat min 300px, max 1000px'te sınırlandırılsın. Bu durumda `clamp()` fonksiyonu işi tek satırda çözüyor.

clamp fonksiyonu 3 parametre alıyor; min, value ve max değeri.

```css
.card {
  width: 70%;
  min-width: 300px;
  max-width: 1000px;
}

.card {
  /* Bu kod yukarıdaki kod ile aynı şekilde çalışır. */
  width: clamp(300px, 70%, 1000px);
}
```

Bu fonksiyonları sadece width değerinde değil istediğimiz CSS ile kullanabiliriz. Aşağıdaki video'da hem logo hemde yazı font-size'ında clamp fonksiyonundan yararlanılmıştır. Dikkatlice izlerseniz, logo genişliğinin ve font-size'ın sayfa çözünürlüğü değiştiğinde dinamik olarak hesaplanıp belli değerden aşağı inmiyor.

Video'da kullanılan CSS kodları şu şekilde;

```css
.logo {
  width: clamp(350px, 75%, 800px);
}

.title {
  font-size: clamp(1.5rem, 5vw, 4rem);
}
```

<iframe width="100%" height="800" src="https://www.youtube.com/embed/ROFKG0jacwE" title="CSS'te Min Max ve Clamp Fonksiyonları" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Kişisel sitemde clamp fonksiyonunu aktif olarak kullanmaktayım. Herhangi bir başlık yada paragrafın CSS kodlarını incelerseniz değerlerin dinamik olarak hesaplandığını görebilirsiniz.

Tarayıcı desteği konusunda gayet başarılı;

![Min Max ve Clamp Fonksiyonları Tarayıcı Desteği](/img/blog/2021-06-27/min-max-ve-clamp-caniuse.png)

### Kaynaklar

- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp()" target="_blank" rel="noreferrer noopener">developer.mozilla.org</a>
- <a href="https://css-tricks.com/min-max-and-clamp-are-css-magic/" target="_blank" rel="noreferrer noopener">css-tricks.com</a>
- <a href="https://www.youtube.com/channel/UCy_hqs-R621ZWUrNHf7vJAA" target="_blank" rel="noreferrer noopener">Paige Niedringhaus Youtube Kanalı</a>
