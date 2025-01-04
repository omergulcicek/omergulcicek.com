---
date: "2025-01-04"
path: "/frontendin-parlayan-yildizi-shadcn-ui-ile-tanisin"
title: "Frontend'in Parlayan Yıldızı: shadcn/ui ile Tanışın"
category: "Yazılım"
keywords: ["shadcn/ui" ,"Tailwind CSS", "React"]
medium: "https://omergulcicek.medium.com/frontendin-parlayan-y%C4%B1ld%C4%B1z%C4%B1-shadcn-ui-ile-tan%C4%B1%C5%9F%C4%B1n-d0e6b821b4ec"
---

shadcn/ui, geliştiricilerin uygulamalarına hızlı ve kolay bir şekilde entegre edebilecekleri, güzel tasarlanmış ve yeniden kullanılabilir bileşenlerden oluşan bir bileşen kütüphanesidir.

![shadcn/ui](/img/blog/2025-01-04/shadcn-ui.png)

## Neden shadcn/ui?

shadcn/ui, Radix UI ve Tailwind CSS kullanılarak geliştirilmiştir. Bu sayede bileşenler hem şık hem de modern bir tasarıma sahiptir. Geliştiricilere şu avantajları sunar:

* **Kolay Kullanım**: Bileşenleri kopyalayıp yapıştırarak hızla projelerinize entegre edebilirsiniz.

* **Özelleştirilebilir**: Her bileşen, geliştiricilerin ihtiyaçlarına göre kolayca özelleştirilebilir.

* **Performans Artışı**: Basit ve optimize edilmiş yapısı, uygulama geliştirme sürecinizi hızlandırır.

* **Esneklik**: Next.js, Vite, Remix, Astro, Laravel, Gatsby gibi farklı frameworklerle çalışabilir veya manuel olarak projeye dahil edilebilir.

## Bileşenler

shadcn/ui, kendi geliştirdiği bileşenlerin yanı sıra farklı başarılı JavaScript paketlerini de kendi tasarım anlayışı ve kod syntax'ı ile birleştirerek geliştiricilere sunar. Bunlardan bazıları şunlardır:

* **Calendar**: Takvim bileşenleri için <a href="https://daypicker.dev/" target="_blank" rel="noreferrer noopener">React DayPicker</a> kütüphanesini kullanır.

* **Charts**: Grafik bileşenleri için <a href="https://recharts.org/" target="_blank" rel="noreferrer noopener">Recharts</a> kütüphanesini kullanır ve kendi tasarım anlayışına göre özelleştirir.

* **Command**: Grafik bileşenleri için <a href="https://cmdk.paco.me/" target="_blank" rel="noreferrer noopener">cmdk</a> kütüphanesini kullanır.

* **Drawer**: Çekmece bileşenleri için Emil Kowalski'in geliştirmiş olduğu <a href="https://vaul.emilkowal.ski/" target="_blank" rel="noreferrer noopener">Vaul</a> kütüphanesini kullanır.


## Nasıl Yüklenir?

Örnek olarak Next.js projenize yüklemek için ```npx shadcn@latest init``` komutunu kullanabilirsiniz.

Kurulum işlemi tamamlandıktan sonra örneğin bir button bileşeni projenize eklemek için ```npx shadcn@latest add button``` komutunu kullanabilirsiniz. Bu komut, projenize button bileşenini ekler ve gerekli dosyaları oluşturur.

```javascript
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

Farklı kütüphanelere göre yükleme işlemleri değişebilir. Detaylı bilgi için <a href="https://ui.shadcn.com/docs/installation" target="_blank" rel="noreferrer noopener">shadcn/ui dokümantasyon</a>una göz atabilirsiniz.

## Kişisel Görüşüm

Güncel teknolojilerle geliştirilmiş, hızlı ve kolay entegre edilebilen, tasarım sadeliği, özelleştirilebilirliği ile dikkat çekiyor. Üstelik Tailwind CSS kullanılarak geliştirilmiş olması, bu deneyimi daha da çekici hale getiriyor. Kişisel sitemi geliştirirken shadcn/ui kullandım. Herkese tavsiye ediyorum.

***

### Kaynak

- <a href="https://ui.shadcn.com/" target="_blank" rel="noreferrer noopener">shadcn/ui dokümantasyonu</a>
