---
date: "2025-02-07"
path: "/tailwind-css-v4"
title: "Tailwind CSS v4.0"
category: "Teknik"
keywords: ["Tailwind CSS"]
medium: "https://omergulcicek.medium.com/tailwind-css-v4-0-7678b29262f3"
---

![Tailwind CSS v4.0](/img/blog/2025-01-29/tailwind-css-v4.png)

Frontend dünyasında popülerleşen Tailwind CSS, v4.0 sürümüyle karşımıza çıktı. Doğrudan HTML içinde hızlı ve modern web siteleri oluşturmayı sağlayan bu CSS framework'ü, yeni sürümüyle esneklik ve performansı artırıyor.

## Geçmişten Günümüze CSS Kullanımı

CSS'in gelişimine kronolojik olarak baktığımızda şu aşamaları görebiliriz:

- Başlangıçta tüm CSS kodlarımızı tek bir **style.css** dosyasına yazıyorduk.
- Karmaşıklığı azaltmak için **@import** kullanarak farklı dosyalara bölmeye başladık. Ancak bu yöntem performans sorunlarına yol açtı.
- Daha sonra <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS</a>, <a href="https://lesscss.org/" target="_blank" rel="noopener noreferrer">LESS</a>, <a href="https://stylus-lang.com/" target="_blank" rel="noopener noreferrer">Stylus</a> gibi CSS pre-processor'lar hayatımıza girdi ve birçok sorunu çözdüler.
- Ardından, <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a> gibi kütüphanelerin öncülüğünde çeşitli CSS framework'leri geliştirildi. Bu framework'ler, sundukları hazır grid yapıları ve bileşenler sayesinde daha hızlı ve kolay web sitesi geliştirmeyi mümkün kıldı.
- Tailwind CSS ise tüm bu gelişmelerin ötesinde, çeşitli açılardan daha avantajlı bir çözüm sunuyor. Hazır sınıfları, yüksek özelleştirilebilirliği, performansı ve daha az kod yazma imkânı sayesinde günümüzün en popüler CSS framework'lerinden biri haline geldi. Ayrıca, UI açısından şık ve performans açısından kaliteli bir çözüm sunan <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">shadcn/ui</a> gibi kütüphanelerin Tailwind ile entegre çalışması ve Next.js'in kurulum aşamasında Tailwind'i otomatik olarak yüklemesi gibi avantajlar, kullanım oranını her geçen gün artırıyor.

## Tailwind CSS nedir?

En temel anlatımıyla Tailwind CSS, HTML ve JavaScript bileşenlerini sınıf isimlerine göre tarar, karşılık gelen stilleri oluşturur ve bunları statik bir CSS dosyasına yazar. Örneğin, *bg-red-500* sınıfını eklediğimizde, Tailwind CSS bir stil dosyası oluşturur ve bu sınıfın karşılığı olan *background-color: #fb2c36;* değerini ekler.

```html
<div className="bg-red-500">
  <p>Merhaba, dünya!</p>
</div>
```

```css
.bg-red-500 {
  background-color: #fb2c36;
}
```

Bunun yanı sıra, özel sınıflar da tanımlayabiliriz. Örneğin, aşağıdaki yapılandırmayı kullanarak brand-10 sınıfını tanımladığımızda, Tailwind bu sınıfı farklı CSS özelliklerinde kullanmamıza olanak tanır:

- **bg-brand-10** → *background-color: #FAFFE5;*
- **text-brand-10** → *color: #FAFFE5;*
- **fill, stroke, border** gibi diğer CSS özellikleri için de bu rengi kullanabiliriz.

```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: {
        "10": "#FAFFE5",
        "20": "#F5FFCC",
      },
    },
  },
}
```

Bu esneklik sayesinde, projelerimizde özel renk paletleri ve stiller oluşturmak çok daha kolay hâle gelir.

## Tailwind CSS v4.0 ile Neler Değişti?

Tailwind CSS v4.0, performans ve esneklik için optimize edilmiş, yeniden tasarlanmış bir yapı sunar ve web platformundaki en yeni özellikleri tam anlamıyla kullanır.

Bu sürümle birlikte gelen bazı önemli değişiklikler şunlardır:

- Yeni yüksek performanslı motor sayesinde derleme süreleri 5 kata kadar hızlandı.
- Direkt olarak <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">Vite</a> entegrasyonu sağlandı.
- Dinamik utility değerleri sayesinde belirli türden keyfi değerler, herhangi bir ek yapılandırmaya gerek kalmadan kullanılabiliyor.
- Renk paleti, RGB yerine OKLCH kullanacak şekilde güncellendi, bu da daha geniş ve doğru renk seçenekleri sunuyor.
- CSS *container* sorguları ve *:not()* seçici desteği eklendi.

Bunların yanı sıra, önceki sürüme kıyasla daha az bağımlılık, sıfır yapılandırma gereksinimi ve CSS dosyasına tek satır kod ekleyerek Tailwind'i yükleyebilme gibi birçok yenilik bulunuyor.

Tüm değişiklikler için <a href="https://tailwindcss.com/blog/tailwindcss-v4" target="_blank" rel="noopener noreferrer">Tailwind'in resmi dokümantasyonunu</a> inceleyebilirsiniz.