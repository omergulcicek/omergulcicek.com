---
date: "2025-01-10"
path: "/react-virtualization-buyuk-verilerin-ekranda-verimli-gosterimi"
title: "React Virtualization: Büyük Verilerin Ekranda Verimli Gösterimi"
category: "Teknik"
keywords: ["React"]
medium: ""
---

## React Virtualization Nedir?

React Virtualization, büyük veri setleriyle çalışan React uygulamalarında performans optimizasyonu sağlamaya yönelik bir tekniktir. Özellikle, sayfalarda veya listelerde çok sayıda öğe olduğunda, tüm öğeleri aynı anda render etmek, uygulamanın hızını olumsuz yönde etkileyebilir. Bu noktada, **React Virtualization** kütüphaneleri devreye girer. Bu kütüphaneler, yalnızca görünürdeki öğeleri render ederek, bellek kullanımını ve render süresini önemli ölçüde azaltır.

![React Virtualization](/img/blog/2025-01-10/virtualization.png)

Instagram veya Twitter gibi sosyal medya platformlarında kullanıcılar sürekli olarak içeriklere göz atar ve sayfa kaydırıldıkça yeni içerikler yüklenir. Bu tür platformlarda, ekranın üzerinde yalnızca sınırlı sayıda içerik görüntülenebilirken, kullanıcı yukarıya veya aşağıya doğru kaydırdıkça **görünmeyen öğeler DOM'dan kaldırılır ve yenileri eklenir**. Bu sayede, yalnızca ekranda görünen öğeler render edilerek, bellek ve işlemci kaynakları verimli kullanılır. React Virtualization, bu tür uygulamalarda kaydırma deneyimini kesintisiz ve hızlı hale getirmek için ideal bir çözümdür.

React Virtualization’ın nasıl çalıştığını daha basit bir örnekle açıklayalım. Diyelim ki ekranda 1, 2, 3, 4, 5 numaralı öğeler görünmekte. Kullanıcı bir adım daha kaydırdığında, 6 numaralı öğe görünürken, 1 numaralı öğe ekrandan silinir. Böylece, her zaman ekranda yalnızca belirli sayıda öğe yer alır *(bu örnekte 5 öğe)*.

## Yaygın Kullanılan React Virtualization Kütüphaneleri

Grafikten görüldüğü gibi, 2024 yılına kadar *(önceki yıllar dahil)* **react-virtualized** paketi yaygın olarak kullanılıyordu. Ancak, 2024 yılından itibaren **react-window** paketinin kullanımı artış göstermeye başladı.

Son dönemde ise **TanStack**'in **@tanstack/react-virtual** paketi, öne çıkarak en çok tercih edilen virtualization paketi haline geldi. Bu üç paket, performans odaklı listeleme yapmak için popüler React çözümleri arasında yer almaktadır.

![npm trends: react-virtualized vs react-window vs @tanstack/react-virtual](/img/blog/2025-01-10/npm-trends.png)

Bunun nedenlerinden bazıları şunlardır:

- **@tanstack/react-virtual** paketi, **react-window** paketinden yaklaşık <u>5.5 kat</u>, **react-virtualized** paketinden ise yaklaşık <u>19 kat daha hafiftir</u>.
- **@tanstack/react-virtual** ve **react-window** paketileri <u>daha sık güncellenmektedir</u>. Bu yazıyı yazdığım gün itibarıyla, react-window paketi <u>25 gün önce</u> güncellenmişken, react-virtualized paketi ise en son <u>2 yıl önce</u> güncellenmiş.

![npm trends istatistikleri](/img/blog/2025-01-10/npm-trends-stats.png)

Diğerlerine kıyasla çok daha yeni olan ve yaklaşık 5.700 yıldız alan **@tanstack/react-virtual**, 26.500 yıldıza sahip  **react-virtualized** ve 16.000 yıldıza sahip **react-window** paketlerine göre daha fazla ilgi görmekte.

TanStack'in son zamanlardaki dikkat çekici yükselişi, ilerleyen yıllarda **@tanstack/react-virtual** paketinin daha fazla tercih edileceğine işaret ediyor.

## Nasıl Kullanılır?

Resmi dokümantasyondaki kod örneğiyle **react-window** paketini nasıl kullanabileceğinizi görelim.

```javascript
import { useVirtualizer } from '@tanstack/react-virtual';

function App() {
  const parentRef = React.useRef(null)

  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  })

  return (
    <>
      <div
        ref={parentRef}
        style={{
          height: `400px`,
          overflow: 'auto', // Scroll yap!
        }}
      >
        {/* Tüm öğeleri tutacak kapsayıcı eleman */}
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Virtualizerda yalnızca görünür öğeler, görünümde olacak şekilde manuel olarak konumlandırılır */}
          {rowVirtualizer.getVirtualItems().map((virtualItem) => (
            <div
              key={virtualItem.key}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              Row {virtualItem.index}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
```

Bu kodun nasıl çalıştığını incelemek için <a href="https://codesandbox.io/p/devbox/github/tanstack/virtual/tree/main/examples/react/fixed?embed=1&theme=dark" target="_blank" rel="noreferrer noopener">Codesandbox</a> örneğine göz atabilirsiniz.

Ayrıca, yatay kaydırma, hem yatay hem dikey kaydırma gibi özelliklerin yanı sıra, memoization gibi ek özellikler de mevcut. Detaylı bilgi için <a href="https://tanstack.com/virtual/latest/docs/framework/react/examples/fixed" target="_blank" rel="noreferrer noopener">resmi dokümantasyonu</a> inceleyebilirsiniz.


***

*Yazının kapak görseli yapay zeka tarafından üretilmiştir. 🤖*

### Kaynaklar

- <a href="https://tanstack.com/virtual/latest/docs/framework/react/examples/fixed" target="_blank" rel="noreferrer noopener">TanStack Virtual Dokümantasyon</a>
- <a href="https://npmtrends.com/@tanstack/react-virtual-vs-react-virtualized-vs-react-window" target="_blank" rel="noreferrer noopener">npm trends: @tanstack/react-virtual vs react-virtualized vs react-window</a>
