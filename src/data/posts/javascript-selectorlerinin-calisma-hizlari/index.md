---
date: "2021-10-29"
path: "/javascript-selectorlerinin-calisma-hizlari"
title: "JavaScript Selectorlerinin Çalışma Hızları"
category: "Yazılım"
medium: "https://omergulcicek.medium.com/javascript-selectorlerinin-çalışma-hızları-b8f2775b1f8d"
---

Her yiğidin yoğurt yiğişi ayrıdır, bir kodu birden çok şekilde yazabilirsiniz. Hepsi doğru çıktığı verebilir fakat performans anlamında birbirlerine göre artı eksileri olabilir. 

Şöyle örnek bir resim etiketimiz olsun:

```html
<img
  id="logo"
  src="/logos/turkey-national-day-2021.png"
  alt="Cumhuriyet Bayramı kutlu olsun!"
  title="Cumhuriyet Bayramı kutlu olsun!"
  height="200"
  width="500"
/>
```

JavaScript'te bir HTML etiketine erişmek için çeşitli seçiciler kullanılabiliyor. Yukarıdaki resim etiketine;

- `document.getElementById("logo")`
- `document.querySelector("#logo")`
- `document.querySelectorAll("#logo")[0]`
- ...

gibi farklı şekillerde erişebilirsiniz. Hiçbirisi yanlış seçim değil fakat aralarındaki performans farkını inceleyelim.

## Fonksiyonun Çalışma Süresini Hesaplamak

Bu fonksiyonlar çok kısa sürede çalışacağı için, yazacağımız fonksiyonda süreyi fazla ölçebilmek için aynı işlemi çok kez yaptıracağız. Yani `document.getElementById("logo")` kodunu 1 kez değil, 1.000.000 kez çalıştırdığımızda ne kadar süre geçtiğini hesaplayacağız.

Aşağıdaki JavaScript kodu, parametre olarak aldığı fonksiyonu tam 1 milyon kez çalıştıracak ve bitiş ile başlangıç arasındaki süresi milisaniye cinsinden bize gösterecektir.

```javascript
function runBench(cb) {
    const start = new Date();

    for(let i=0; i<100000000; i++) {
        cb();
    }
    
    const end = new Date();

    console.log(`Toplam süre: ${end - start} ms`);
}
```

## Selectorlerin Çalışma Hızlarını Ölçümlemek

Oluşturduğumuz `runBench()` fonksiyonuna selectorlerimizi yollayıp çıktılara bakalım. Örnek olarak Google'ın ana sayfasındaki logo üzerinde testlerimi yaptım.

```javascript
document.getElementById("logo")         // Toplam süre: 2133 ms
document.querySelector("#logo")         // Toplam süre: 3992 ms
document.querySelectorAll("#logo")[0]   // Toplam süre: 22758 ms
```

Bunun sebebi, `getElementById` direkt olarak o id'ye odaklanıyor, `querySelector` o id'yi bulana kadar tarıyor bulunca bırakıyor, `querySelectorAll` ise bulduktan sonra bile var mı diye aramaya devam ediyor. Sonuç ise neredeyse tam 10 kat hız farkı.

***

Örneği biraz daha geliştirip şöyle bir HTML üzerinde `article` sınıfına sahip div'e erişmeye çalışalım.

```html
<div id="wrapper">
  <div class="article">
    <!-- bu div'e erişilecek -->
  </div>
</div>
```

Bu elementin kapsayısında `#wrapper` adında bir id var; `querySelectorAll("#wrapper .article")[0]` div'e erişir. Fakat `getElementById("#wrapper").querySelector(".article")`'da erişir ve çok daha hızlı.

İlk kod tüm sayfada `wrapper`id'lerinin içindeki `article` sınıflarını ararken, ikinci kod `wrapper` id'sine ulaşıp sadece onun içindeki sınıfları taramaya başlıyor; yani kodun aranacağı scope'u sınırlandırmış oluyoruz.

Süre farkları ise şu şekilde;

```javascript
document.querySelectorAll("#wrapper .article")[0]                 // Toplam süre: 106813 ms
document.getElementById("#wrapper").querySelector(".article")     // Toplam süre: 7512 ms
```

Örnekleri selectorler arasında göstermiş olsamda bunu bir çok şeyde test edebilirsiniz.
