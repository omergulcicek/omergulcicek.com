---
date: "2020-09-13"
path: "/resimlerde-srcset-kullanimi"
title: "Resimlerde Srcset Kullanımı"
category: "Yazılım"
keywords: ["HTML"]
medium: "https://medium.com/@omergulcicek/resimlerde-srcset-kullan%C4%B1m%C4%B1-acaf458181ac"
---

<a href="https://httparchive.org/reports/state-of-images" target="_blank" rel="noreferrer noopener">HTTP Arşivine</a> göre, tipik bir mobil web sayfasının ağırlığı 2.6 MB'nin üzerindedir ve bu ağırlığın üçte ikisinden fazlası resimlerdir. Resimleri en iyi şekilde optimize edersek, çok iyi bir performans kazancı elde edebiliriz.

Resimler sayfa genişliğinden daha büyük olmamalıdır. Resimleri farklı breakpoint'lere göre birden çok kaydedin ve tarayıcının en uygun olanı seçmesini sağlamak için `srcset` özelliğini kullanın.

srcset'in içinde `w` değeri, tarayıcıya her resmin genişliğini söyler.

```html
<img
	src="small.jpg"
	srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w"
	alt="…"
/>
```

## Resimleri Doğru Çözünürlükte Kaydedin

Aşağıdaki 2 resim neredeyse aynı görünüyor. Fakat birinin dosya boyutu diğerinden 10 kat daha büyük.

![Görsellerde Srcset Kullanımı](/img/blog/2020-09-13/kedi.jpeg)

İlk resmin dosya boyutu çok daha büyüktür. Eğer kullanacağımız resim sayfada 300px genişliğinde görüntülenecek ise bu resmi 1000px olarak sayfaya çağırmamız gereksiz yük oluşturacaktır.

**Sabit genişlikler için** ekran boyutuyla aynı boyutlarda kaydedilmiş resimler kullanın.

## Tarayıcının Doğru Resmi Seçmesine Yardımcı Olun

Bir web tarayıcısı performans açısından en küçük resmi kullanmalıdır ancak bir resmin genişliğini indirmeden bilemez. `srcset` yardımı ile tarayıcıya görsellerin genişliklerini bildirebiliriz.

```html
<img
	src="small.jpg"
	srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w"
	alt="…"
/>
```

`w` değeri, her resmin genişiliğini piksel cinsinden gösterir. Örneğin `small.jpg 500w` tarayıcıya small.jpg'nin 500 piksel genişliğinde olduğunu söyler. Bu sayede tarayıcının ekran genişliğine göre mümkün olan en küçük resmi seçmesine yardımcı olur.

**Küçük bir not:** `srcset` özelliği, tarayıcıya her bir resim dosyasının kaydedilen genişliği hakkında bilgi verir. Resmin sayfada görüntüleneceği boyutu belirtmez, bunun için hâlâ CSS'e ihtiyacımız var.

## Farklı Çözünürlüklerde Farklı Resimler Göstermek

`<picture>` etiketi sayesinde farklı çözünürlüklerde farklı resimler gösterebiliriz.

```html
<picture>
	<source media="(max-width: 600px)" srcset="flower-square.jpg" />
	<source media="(max-width: 1023px)" srcset="flower-rectangle.jpg" />
	<source media="(min-width: 1024px)" srcset="flower-large.jpg" />
	<img src="flower-large.jpg" />
</picture>
```

Bu kod, tarayıcı tarafından yukarıdan aşağı doğru okunurken ilk eşleştiği resmi seçer ve diğerlerini okumaz. Örneğin 375px genişliğinde ki bir telefon ilk satırda `media="(max-width: 600px)"` şartını sağladığı için `flower-square.jpg` yüklenecektir. Diğer resimler sayfaya çekilmeyecektir.

Sayfa genişliği değişirse tekrardan media özelliği kontrol edilir ve uygun görsel yüklenir. Eğer hiçbir media özelliği şartı sağlamıyorsa yada kullandığınız tarayıcı `<source>` etiketini desteklemiyorsa son satırdaki `<img>` etiketi kullanılır. `<img>` etiketini son satıra eklemeyi unutmayın.

`srcset` ile `picture` kullanıındaki fark, `srcset`te tarayıcı o an ki genişliğine göre en uygun resmi çeker ve o görsel sayfada kalır. `picture` etiketinde ise sayfa genişliği değiştiğinde sayfadaki resim DOM'da tekrardan güncellenir.

## Örnekler ile Test Et

`srcset` örneği için <a href="https://imagekitio.github.io/responsive-images-guide/srcset-density.html" target="_blank" rel="noreferrer noopener">imagekitio src set örneği</a>ni açın ve DevTools'ta (_F12_) network sekmesinden farklı çözünürlüklerde sayfayı yenileyin, sayfaya yüklenen görselin boyutuna dikkat edin.

`picture` etiketinin nasıl çalıştığını deneyimlemek için <a href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_picture" target="_blank" rel="noreferrer noopener">w3schools'un picture örneği</a>ni açın ve genişliği değiştirin.
