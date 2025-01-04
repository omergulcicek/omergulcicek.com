---
date: "2022-06-26"
path: "/css-object-view-box"
title: "CSS object-view-box Özelliği ile Görüntüyü Kırpmak"
category: "Teknik"
keywords: ["CSS"]
medium: "https://omergulcicek.medium.com/css-object-view-box-%C3%B6zelli%C4%9Fi-ile-g%C3%B6r%C3%BCnt%C3%BCy%C3%BC-k%C4%B1rpmak-1c9d8bf1fb82"
---

CSS'te bir resmin istediğimiz bir bölümünü kırpmamız için doğal bir yöntem yoktu. Ya resmi saran farklı bir elemente ihtiyacımız vardı (_`<figure>` gibi_) yada `background-image` kodu ile resmin pozisyonunu ve boyutunu ayarlamak gerekiyordu.

![CSS object-view-box - Crop Image CSS](/img/blog/2022-06-26/crop-image-css.png)

İki yöntemide nasıl kullanacağımıza bakalım.

## Resmi Farklı Bir Element ile Sarmak

Bu yöntemde üç adımda istediğimiz sonuca ulaşabiliyoruz.

- `<img />` etiketimizi bir kapsayıcı element ile sarmak (_`<figure>` kullanacağız._)
- Figure'e `position: relative` ve `overflow: hidden` kodlarını ekleyeceğiz.
- Son olarakta resme `position: absolute` ekleyip pozisyonuyla oynayacağız.

```html
<figure>
	<img src="/img/omergulcicek.png" alt="" />
</figure>
```

```css
figure {
	aspect-ratio: 1;
	border-radius: 15px;
	position: relative;
	overflow: hidden;
	width: 350px;
}

img {
	bottom: 0;
	height: 100%;
	left: -20%;
	object-fit: cover;
	position: absolute;
	right: 0;
	top: 0;
	width: 160%;
}
```

## Resme Background Vermek

Bu yöntemde `<img />` etiketi yerine farklı bir etiket kullanıp arkaplanına görsel ekleyeceğiz.

```html
<div class="omer"></div>
```

```css
.omer {
	aspect-ratio: 3 / 2;
	background-image: url("/img/omer.jpg");
	background-position: 14% 53%;
	background-repeat: no-repeat;
	background-size: 350px auto;
	width: 150px;
}
```

Yukarıdaki iki yöntem eskiden kullanmak zorunda olduğumuz seçeneklerdi. Fakat artık CSS direkt olarak bunu sağlayabiliyor.

---

## Object-View-Box Özelliğinin Tanıtımı

`object-view-box` özelliği henüz çok yeni; Chrome Canary'de mevcut fakat <a href="https://groups.google.com/a/chromium.org/g/blink-dev/c/-s-nu3A-qAo/m/YYlxSLKkAgAJ?pli=1" target="_blank" rel="noreferrer noopener">Google Chrome'a 104. versiyondan itibaren geleceği</a> söyleniyor.

Bu özellik görselin üzerinde dikdörtgen çizip o alanı göstermeyi sağlıyor. 4 taraftan (_üst, sağ, alt, sol_) ne kadarlık bir alanı göstermek istediğimizi belirteceğiz.

```html
<img src="/img/omergulcicek.png" alt="" />
```

```css
img {
	aspect-ratio: 1;
	object-fit: cover;
	object-view-box: inset(25% 20% 15% 0%);
	width: 300px;
}
```

Buradaki `inset()` kodunun mantığı şu; üstten 25%, sağdan 20%, alttan 15%'lik alanı alma, kalan kısmı ekranda göster.

![CSS object-view-box - Crop Image Object View Box Inset](/img/blog/2022-06-26/crop-image-object-view-box-inset.png)

![CSS object-view-box - Crop Image Inset Explainer](/img/blog/2022-06-26/crop-image-inset-explainer.png)

### Kaynak

- <a href="https://ishadeed.com/article/css-object-view-box/" target="_blank" rel="noreferrer noopener">Ahmad Shadeed - First Look At The CSS object-view-box Property</a>
