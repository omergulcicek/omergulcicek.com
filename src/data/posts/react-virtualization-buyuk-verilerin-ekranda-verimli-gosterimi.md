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

Grafikten görüldüğü üzere, 2024 yılına kadar *(önceki yıllar dahil)* **react-virtualized** paketinin kullanımı oldukça yaygındı. Ancak 2024 yılından itibaren,  **react-window** paketinin kullanımı artmaya başladı. Bu iki kütüphane de performanslı listeleme yapmak için kullanılan popüler React paketleridir.


![npm trends: react-virtualized vs react-window](/img/blog/2025-01-10/npm-trends.png)

Son dönemde **react-window** paketinin daha fazla tercih edilmesinin nedenlerinden bazıları şunlardır:

- **react-window** paketi, **react-virtualized** paketinden yaklaşık <u>3.5 kat daha hafiftir</u>.
- **react-window** paketi <u>daha sık güncellenmektedir</u>. Bu yazıyı yazdığım gün itibarıyla, react-window paketi 24 gün önce güncellenmişken, react-virtualized paketi en son 2 yıl önce güncellenmiş.

Ancak, bunlar react-virtualized paketinin kullanılmaması gerektiği anlamına gelmez. GitHub star sayılarına bakıldığında, **react-virtualized** paketinin 26.500 star ile, 16.000 starı olan **react-window** paketinden daha fazla ilgi gördüğü görülmektedir.

Grafik bu şekilde devam ederse, ilerleyen yıllarda **react-window** paketinin daha fazla tercih edileceğini söyleyebiliriz.

## Nasıl Kullanılır?

Resmi dokümantasyondaki kod örneğiyle **react-window** paketini nasıl kullanabileceğinizi görelim.

```javascript
import { FixedSizeList as List } from 'react-window'

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
)

const Example = () => ( 
  <List
    height={150}      // Liste alanının yüksekliği 150px
    itemCount={1000}  // Toplam öğe sayısı 1000
    itemSize={35}     // Her öğenin yüksekliği 35px
    width={300}       // Liste alanının genişliği 300px
  >
    {Row}
  </List>
)
```

Bu kodun nasıl çalıştığını incelemek için <a href="https://codesandbox.io/p/sandbox/github/bvaughn/react-window/tree/master/website/sandboxes/variable-size-list-vertical" target="_blank" rel="noreferrer noopener">Codesandbox</a> örneğine göz atabilirsiniz.

Burada *itemCount*, *itemSize*, *height* ve *width* gibi özellikleri özelleştirebilirsiniz. Ayrıca, *Row* fonksiyonu ile her bir öğenin nasıl render edileceğini belirleyebilirsiniz.

Ayrıca, yatay kaydırma, hem yatay hem dikey kaydırma gibi özelliklerin yanı sıra, memoization gibi ek özellikler de mevcut. Detaylı bilgi için <a href="https://react-window.now.sh/" target="_blank" rel="noreferrer noopener">resmi dokümantasyonu</a> inceleyebilirsiniz.


***

*Yazının kapak görseli yapay zeka tarafından üretilmiştir. 🤖*

### Kaynaklar

- <a href="https://github.com/bvaughn/react-window" target="_blank" rel="noreferrer noopener">react-window Github</a>
- <a href="https://npmtrends.com/react-virtualized-vs-react-window" target="_blank" rel="noreferrer noopener">npm trends: react-virtualized vs react-window</a>
