---
date: "2022-04-22"
path: "/kisisel-sitemin-nextjs-versiyonu"
title: "Kişisel Sitemin Next.js Versiyonu"
category: "Teknik"
keywords: ["Next.js"]
medium: "https://omergulcicek.medium.com/kişisel-sitemin-nextjs-versiyonu-898ade092187"
---

Düzenli aralıklarla kişisel sitemi farklı yazılım dilleriyle baştan yazıyorum. Teknolojinin yanı sıra, tasarımsal olarakta daha minimal, sade ve şık bir arayüz yapmaya özen gösteriyorum.

v6 olarak isimlendirdiğim bir önceki versiyonda React başlangıç kiti olan <a href="https://www.gatsbyjs.com/" rel="noopener noreferrer" target="_blank">Gatsby</a> ile geliştirmiştim. Kaynak kodlara <a href="https://github.com/omergulcicek/omergulcicek.com-old-versions/tree/main/v6" rel="noopener noreferrer" target="_blank">GitHub'tan ulaşabilirsiniz</a>.

v7 yani Next.js ile geliştirilmiş olan versiyonu yayına almış bulunmaktayım. Detaylar ve performans testleri için okumaya devam edin.

## Kullanılan Teknolojiler

Next.js'in yanı sıra, Tailwind Css'i de ilk kez denemiş oldum.

### Next.js

React tecrübemden ötürü Next.js'e geçmek çok kolay oldu. Zaten neredeyse birebir aynısı. Kişisel sitemde SSG _(Static Site Generation)_ render methodunu kullandım. Tüm site çıktısını HTML dosyaları olarak ürettiği için tam performans veriyor. Ayrıca tüm kaynak kod hazır bir şekilde sayfaya yüklendiği için SEO problemi ortadan kalkıyor.

### Tailwind CSS

Tailwind CSS ilk çıktığında inline css yazmaya benzetmiş ve ısınamamıştım. Uzun bir sürede mesafeli yaklaştım. Deneyimledikten sonra gördüm ki, çok hızlı proje çıkılabiliyor. CSS'te körelmemek adına kendim yazma fikrine hâlâ sıcak bakıyorum fakat bu tarz projelerde zaman kaybı yaşamamak ve tutarlılık için çok mantıklı bir seçenek olduğuna aşikar.

---

Kaynak kodlara <a href="https://github.com/omergulcicek/omergulcicek.com" rel="noopener noreferrer" target="_blank">Github üzerinden</a> ulaşabilirsiniz.

## Yeni Arayüz

Blog sayfasında teknik ve kişisel makaleleri filtrelemek adına linkler ekledim. Makale sayısı arttığı için buna ihtiyaç duyulmaya başlanmıştı.

Tasarımsal olarak beyaz sade tasarımları beğeniyorum. Yine bu çizgide kaldım. Genelde her yeni sürümde tema rengimi değiştiririm. Next.js versionunda yeşilin `#16a34a` tonunu kullandım.

![Yeşil Rengi - omergulcicek.com](/img/blog/2022-04-22/renk.png)

---

Logo olarak henüz kendime bir logo bulabilmiş/çizebilmiş değilim. Sürekli değiştiriyorum. Bu sefer hem İstanbul'ın simgesi olması, hemde soyadıma bir çağrışım olabileceğini düşündüğüm için gül logosu ekledim.

![Gül Logosu - omergulcicek.com](/img/blog/2022-04-22/logo.png)

## Performans

SSG yani static HTML çıktıları ile site oluştuğu için performans harika. Mobile ve Desktop testlerinden **100'er puan** alıyor.

![Lighthouse Performansı - omergulcicek.com](/img/blog/2022-04-22/performans.png)

## Eklenecek Yenilikler

Site teknoloji ve tasarımsal olarak yenilenmenin yanı sıra, içerik olarakta güncellendi. Fakat bu versiyona yeni farklı sayfalarda geliştirmek istiyorum.

Bu sayfalardan ilki **Seyahat** olacak. 2022 yılı içerisinde karış karış İstanbul'u gezme hayalime çok güzel devam ediyorum. Bunları bir kişisel gezi sayfasında arşivlemek istiyorum.

Ek olarak, Frontend Developer'lara nacizane bir yol haritası oluşturmak hedeflerim arasında. Youtube ve Udemy kaynaklarının çoğu giriş seviyesi yada eksik/yanlış bilgilerle dolu. Geçmiş yıllarda verdiğim Frontend eğitiminlerindeki konularla harmanlayıp, güncel ve temiz bir liste oluşturduğumda bu **yol haritası** sayfası ile ilgili detayları _hakkımda sayfasında_ görebileceksiniz.

---

Site ile ilgili görüş/öneri/eleştirilerinizi tarafıma çekinmeden iletebilirsiniz.
