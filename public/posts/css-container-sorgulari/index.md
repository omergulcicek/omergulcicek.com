---
date: "2021-11-26"
path: "/css-container-sorgulari"
title: "CSS Container Sorguları"
category: "Yazılım"
medium: "https://omergulcicek.medium.com/css-container-sorguları-50f1163fb23d"
---

**Responsive Design** kavramı 25 Mayıs 2010 tarihinde <a href="https://ethanmarcotte.com/" target="_blank" rel="noreferrer noopener">Ethan Marcotte</a> adlı bir arayüz tasarımcısı sayesinde hayatımıza girmişti. <a href="https://alistapart.com/article/responsive-web-design/" target="_blank" rel="noreferrer noopener">Responsive Web Design</a> başlığı ile duyrulan bu fikir, her Frontend geliştiricisinin aktif olarak kullandığı bir özellik konumunda.

## CSS Media Sorgularıyla İlgili Sorunlar

Responsive design harika fakat yetersiz kaldığı noktalar olabiliyor. Bunu bir örnek üzerinden kavramaya çalışalım.

Aşağıdaki tasarımda görüldüğü gibi, _Top Articles_ ve _Latest Articles_ başlığı altında `article` bileşenimizi çağıralım. Farkındaysanız soldaki bileşende görsel üstte, başlık ve açıklaması altında kalıyorken; sağdaki bileşenlerde görsel solda, detaylar sağında kalıyor.

![Responsive Design Problemi](/img/blog/2021-11-26/responsive-problem-1.jpg)

Responsive kod yazarken `@media` sorguları kullandığımız için CSS koşulumuz **sayfanın genişliğini** baz alarak hesaplama yapacaktır. Haliyle tasarımdaki gibi hem alt alta yada hemde yan yana görüntülemek için sağdaki alanın kapsayıcısına class ekleyerek _(örnekte `.c-article--horizontal` sınıfı)_ oraya özel CSS'ler yazmamız gerekiyor.

Peki bu class'ı yazmazsak nasıl görünecekti? Aynı bileşen kullanıldığı için bulunduğu alana yayılarak daha büyük kartlarımız görünecekti; ama bizim istediğimiz sonuç bu değildi.

![Responsive Design Problemi](/img/blog/2021-11-26/responsive-problem-2.jpg)

## CSS Container Sorguları Bize Nasıl Yardımcı Olacak?

CSS Container sorgularında koşullar **sayfa genişliğine göre değil, kapsayıcı genişliğine göre** hareket edecekti. Görsel üzerinden anlamaya çalışalım;

![Media Query vs Container Query](/img/blog/2021-11-26/container-query.jpg)

Böylece ilk bölümde anlatılan problemlerin önüne geçebileceğiz. Kart daha geniş bir alana geçtiğinde, sayfa genişliğinden bağımsız olacak şekilde farklı stillere bürünebilecekler.

## Container Sorguları Nasıl Çalışır?

Öncelikle CSS Container özelliğinin bu makaleyi yazdığım zaman diliminde henüz varsayılan olarak tarayıcı desteğinin olmadığını belirteyim. <a href="https://caniuse.com/css-container-queries" target="_blank" rel="noreferrer noopener">caniuse</a>'dan görüldüğü üzere container sorguları şimdilik sadece **Chromium tabanlı olan Chrome, Edge ve Opera'da bulunuyor**; fakat varsayılan olarak aktif değiller, bu özelliği aktif etmeniz gerekiyor. Diğer tarayıcılarda destek şimdilik bulunmuyor.

Chrome, Edge yada Opera'da `chrome://flags` adresine girerek CSS Container'ları aktifleştirip deneyebilirsiniz.

---

Kod kısmına geçecek olursak, bir bileşen üst genişliğine göre adapte olacağından, tarayıcıya tüm sayfayı değil, yalnızca etkilenen alanı yeniden boyamasını söylememiz gerekir. Bunu `contain` özelliği sayesinde tarayıcıya bildirebiliriz. İlk kısımlarda gösterdiğimiz gibi resim, başlık ve açıklama alanı içeren basit bir kart bileşeninin kodları şuna benzer olacaktır _(Kod içerisindeki yorum satırlarını okumaya devam edin)_ ;

```html
<section class="container">
  <div class="article-wrap">
    <!-- contain özelliğini vereceğimiz kapsayıcı -->
    <article class="article">
      <!-- kartın kendisi -->
      <!-- içerik -->
    </article>
  </div>

  <div class="article-wrap">
    <!-- contain özelliğini vereceğimiz kapsayıcı -->
    <article class="article">
      <!-- kartın kendisi -->
      <!-- içerik -->
    </article>
  </div>

  <!-- diğer kartlar -->
</section>
```

```css
.article-wrap {
  contain: layout inline-size;
  /* kartların kapsayıcısına contain özelliği ekledik. */
}

@container (min-width: 400px) {
  /*
    @container sorgusu ile kart bileşeni
    400px'den fazla genişliğe sahip olduğunda
    flex özelliklerini almasını sağlıyoruz.
    Böylece resim ve içerik yan yana geçecek.
  */

  .article {
    display: flex;
    flex-wrap: wrap;
  }

  /* diğer CSS'ler */
}
```

---

Son olarak aşağıdaki video'yu inceleyelim.

Aynı kart bileşeni, aynı sayfa üzerinde kapsayıcısının genişliğine göre çıktı üretiyor.

<video autoplay controls loop muted src="https://css-tricks.com/wp-content/uploads/2021/04/Kapture-2021-03-24-at-12.04.23.mp4" playsinline></video>

### Kaynaklar

- <a href="https://ishadeed.com/article/say-hello-to-css-container-queries/" target="_blank" rel="noreferrer noopener">Ahmad Shadeed - Say Hello To CSS Container Queries</a> (Makale içinde kullanılan görseller)
- <a href="https://css-tricks.com/say-hello-to-css-container-queries/" target="_blank" rel="noreferrer noopener">Next Gen CSS: @container</a> (Makale içinde kullanılan video)
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries" target="_blank" rel="noreferrer noopener">MDN Web Docs - CSS Container Queries</a>
- <a href="https://www.smashingmagazine.com/2021/05/complete-guide-css-container-queries/" target="_blank" rel="noreferrer noopener">Smashing Magazine - A Primer On CSS Container Queries</a>
- <a href="https://caniuse.com/css-container-queries" target="_blank" rel="noreferrer noopener">Can I Use - CSS Container Queries</a>
