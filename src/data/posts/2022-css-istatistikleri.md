---
date: "2022-10-09"
path: "/2022-css-istatistikleri"
title: "2022 CSS İstatistikleri"
category: "Teknik"
keywords: ["CSS"]
medium: "https://omergulcicek.medium.com/2022-css-i%CC%87statistikleri-9035c376d3b5"
---

2022 yılı geride kalırken, CSS ile ilgili güzel istatistikler açıklandı. Bunları birlikte inceleyelim.

## En Sık Kullanılan CSS Class'ları

2020 ve 2021'de olduğu gibi yine en sık kullanılan class adı `active`. Ardından Font Awesome'ın kullandığı `fa` ve `fa-*` 2. ve 3. sıradaki yerlerini korumuş.

`clearfix` class'ı ise ilk 20'den kayboldu ve sayfaların sadece %10'unda kullanılıyormuş. Bu veri aslında bize CSS'te float'ın yerini flex'in aldığını gösteriyor.

![2022 En Sık Kullanılan CSS Class'ları](/img/blog/2022-10-09/en-populer-css-siniflari.png)

## !important Kullanımı

![2022 !important Kullanımı](/img/blog/2022-10-09/important-kullanimi.png)

Son zamanlarda `!important` kullanımı artmış görünüyor. Buna aslında CSS'te `@layer` kullanımın etkili olduğu söylenebilir.

## Pseudo-Class'lar ve Pseudo-Elementler

![2022 Pseudo-Class'lar ve Pseudo-Elementler](/img/blog/2022-10-09/pseudo-siniflar-ve-elementler.png)

Şaşırılmayacak bir tablo, pseudo-class'ların ilk üç sırası her zaman ki gibi `:hover`, `:focus` ve `:active`.

Pseudo-Elementlerde ise `::before` ve `::after` başı çekiyor.

`:root` kullanımı giderek artıyor ama bence halen çok düşük. CSS variable'larının kullanımı esnek geliştirme ve çıktı için çok faydalı ve ilerleyen yıllarda üst sıraları zorlayacağını düşünüyorum.

## Değerler ve Birimler

CSS'te `em`, `rem` vb biçimler olsa da `px` kullanımı açık ara önde görünüyor. Geçen sene de bu oran yine %71-72'ydi.

## Görsel Uzantıları

![2022 Görsel Uzantıları](/img/blog/2022-10-09/gorsel-uzantilari.png)

`.png` ve `.svg` görsellerin arkaplanı şeffaf olmasından dolayı bu sonuç şaşırtıcı değil. Fakat aynı görsel kalitesini daha düşük ve performanslı şekilde sağlayan `.webp`'in ilerleyen yıllarda değerleneceğini düşünüyorum.

## Flex ve Grid

![2022 Flex ve Grid](/img/blog/2022-10-09/flex-grid.png)

Her sene kullanımı yaygınlaşıyor, bu ikili bir arada ise harikalar başarıyor. Float'ın ömrünü tamamlaması, IE desteğinin noktalanması haliyle güncel CSS kullanımlarına yönelmemize sebep oldu.

### Kaynaklar

- <a href="https://almanac.httparchive.org/tr/2022/" target="_blank" rel="noreferrer noopener">HTTP Archive’ın yıllık web durumu raporu</a> (Görsel kaynak)
