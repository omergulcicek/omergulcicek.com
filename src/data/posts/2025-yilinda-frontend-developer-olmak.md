---
date: "2025-01-19"
path: "/2025-yilinda-frontend-developer-olmak"
title: "2025 Yılında Frontend Developer Olmak"
category: "Teknik"
keywords: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"]
medium: ""
---

## Frontend dünyası, neler bilmeliyiz?

Frontend dünyası bundan seneler önce Bootstrap ve jQuery'in hakimiyetindeydi. Hızlı gelişen JavaScript sayesinde sürekli hayatımıza React, Vue, Angular gibi kütüphaneler girdi.

CSS tarafında ise uzun süren Bootstrap hegomonyasına Tailwind CSS gibi  tahtın yeni sahibi oldu. İlk başta tekrar inline CSS'e dönüş yapmış gibi hissettirdiği için çokça eleştiri alıp mesafe koyulsada, Tailwind CSS'in gücünü keşfettikçe ondan vazgeçemeyeceğinizi göreceksiniz.

2025 yılında Frontend stack'inizin nasıl görünebileceğin bahsedelim.

## Temel: React + TypeScript

![React TypeScript](/img/blog/2025-01-19/react-typescript.png)

### React

Yakın zamana kadar Frontend şu soruyu soruyordu: *"React mı, Vue mu, Angular mı?"*

npm istatistiklerine ve iş ilanlarına bakıldığında React'in açık ara önde olduğunu görebiliriz. Bende kariyerimde çok kısa Vue.js deneyimim olmasına rağmen en başından beri React'i tercih ettim, yeni başlayanlara da tavsiyem React olacaktır.

![React, Vue, Angular](/img/blog/2025-01-19/react-vue-angular.png)

### TypeScript

Bir çok Frontend geliştiricisi TypeScript'i JavaScript'in gelişmiş hali olarak tanımlar. TypeScript'i kullanarak daha güvenli ve daha okunabilir kodlar yazabilirsiniz. Hataları erken yakalar, yeniden düzenlemeyi daha az acı verici hale getirir, IDE'nizin otomatik tamamlamasını güçlendirir ve ekibinizdeki yeni geliştiricilere yerleşik belgeler sunar.

Bir çok kişinin TypeScript'e mesafeli olduğu aşikar. Çünkü JavaScript ile tamamladığınız koda ek olarak tip tanımlamaları yapmanız gerekiyor. Bu da kod zaten çalışıyor niye uğraşayım düşüncesine sebep olabilir. Hele ki type olarak any vermemeliyim diyorsanız, işler daha da zorlaşabilir. Ufak çaplı projelerde kullanmamayı tercih edebiliyorum fakat büyük ölçekli projelerde özellikle çalıştığım şirketlerde TypeScript kullanmanın faydalarını görebilirsiniz. TypeScript'i öğrenmek, kariyerinizdeki gelişim için önemli bir adım olabilir.

## Next.js

![Next.js](/img/blog/2025-01-19/nextjs.png)

React'ın İsviçre çakısı: <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> React 19'a tam destek, entegre routing, server-side rendering, SEO, font ve resim optimizasyonu vb bir çok özelliği içerisinde barındırır. Next.js ile geliştirdiğiniz projeleri kolayca deploy edebilir, hızlıca geliştirebilirsiniz.

Bunun tek seçenek olduğunu söylemiyorum. <a href="https://remix.run/" target="_blank" rel="noopener noreferrer">Remix</a>, <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a>,
<a href="https://expo.dev/" target="_blank" rel="noopener noreferrer">Expo</a>  gibi diğer kütüphaneleri de inceleyebilirsiniz. Son yıllarda harika işlere imza atan TanStack ekibinin geliştirdiği, henüz beta aşamasında olan <a href="https://tanstack.com/start/latest" target="_blank" rel="noopener noreferrer">TanStack Start</a>'ı da mutlaka takip edin.


## Tailwind CSS + shadcn/ui

![Tailwind CSS, shadcn/ui](/img/blog/2025-01-19/tailwind-shadcn.png)

İlk zamanlarda <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>'i kullanmaya başladığımda bir çok kişi gibi inline CSS'e dönüş yapmış gibi hissettim ve mesafe koydum. Fakat Tailwind CSS'in gücünü keşfettikçe ve bunu <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">shadcn/ui</a> ile birleştirdiğimde güçlü bir stil mekanizması elde ettim.


## Zustand

Client tarafında state yönetimi için <a href="https://zustand-demo.pmnd.rs/" target="_blank" rel="noopener noreferrer">Zustand</a> doğru yoldur. Sıfır bağımlılık, sıfır boilerplate, sıfır karmaşıklık. Sadece birkaç satır kodla bir mağaza oluşturabilirsiniz.

![Zustand, Redux](/img/blog/2025-01-19/zustand-redux.png)

## TanStack

Sunucu tarafında tüm can sıkıcı kısmı <a href="https://tanstack.com/query/latest" target="_blank" rel="noopener noreferrer">TanStack Query</a> ile halledin. TanStack Query, verileri otomatik olarak yeniler, çok iyi çalışan önbelleğe alma özelliğine sahiptir.

TanStack'in çıkardığı tüm paketleri incelinesi.

## Animasyon, Form, Tablo ve daha fazlası

Ek olarakta kısa kısa diğer paketlerden bahsedelim.

Animasyonlar için <a href="https://motion.dev/" target="_blank" rel="noopener noreferrer">Framer Motion</a> ve <a href="https://ui.aceternity.com/" target="_blank" rel="noopener noreferrer">Aceternity UI</a>, form için <a href="https://react-hook-form.com/" target="_blank" rel="noopener noreferrer">React Hook Form</a> *(ek olarak yeni çıkan <a href="https://tanstack.com/form/latest" target="_blank" rel="noopener noreferrer">TanStack Form</a> paketini de inceleyebilirsiniz)*, <a href="https://zod.dev/" target="_blank" rel="noopener noreferrer">Zod</a> ile validasyonlar, tablo için <a href="https://tanstack.com/table/latest" target="_blank" rel="noopener noreferrer">TanStack Table</a>, componentlerinizi geliştirmek için <a href="https://storybook.js.org/" target="_blank" rel="noopener noreferrer">Storybook</a> ve daha fazlası.

## Yapay zeka

Yapay zeka artık bir çok alanda hayatımıza girdi. Frontend tarafında da yapay zeka kullanımı artıyor. <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot</a> ile başlayan bu süreç, <a href="https://www.cursor.com/" target="_blank" rel="noopener noreferrer">Cursor</a> gibi kod editörleriyle devam ediyor. Yapay zeka ile kod yazmak, kod yazma işini çok daha hızlı hale getiriyor.

Yapay zekayı kullanmamak olmaz fakat bize kazandırdıklarının yanı sıra kaybettireceklerini de göz ardı etmemek gerekir. Her şeyi yapay zekaya sormak yada ona yaptırma kısmını doğru bulmuyorum. Algoritma kurma, doküman okuma özelliklerimizi kaybetmemek gerekiyor.

Ben kod tarafında yapay zekayı, işin hamallık kısmını yaptırmak, zaten çokça deneyimlediğim kodları yazarken zaman kaybetmemek için kullanıyorum. Yeni bir şey deneyimleyeceksem önce doküman okudup, bu konuda videolar izleyip önce kendim yapmaya çalışıyorum. Sonrasında yazdığım kodu yapay zekaya sorarak eksiklerimi görmeye çalışıyorum.

## Özet

2025 yılında Frontend Developer olmak için tavsiye edeceğim kütüphaneler React, TypeScript, Next.js, Tailwind CSS, shadcn/ui, Zustand, TanStack Query, Framer Motion, React Hook Form, TanStack Form, Zod, TanStack Table ve Storybook.


### Kaynaklar

- <a href="https://npmtrends.com/@angular/core-vs-react-vs-vue" target="_blank" rel="noopener noreferrer">npm trends: React Vue Angular</a>