---
date: "2022-01-25"
path: "/styled-component-ile-dinamik-css-yazmak"
title: "Styled Component ile Dinamik Css Yazmak"
category: "Yazılım"
medium: "https://omergulcicek.medium.com/styled-component-ile-dinamik-css-yazmak-4fa03084bd5c"
---

Çalıştığım projede tasarımı dinamik olarak render edilen componentlere ihtiyacımız oldu. Detaylandırmak gerekirse, default bir butonumuz var fakat bu butonu isteyen kişi istediği gibi stillerini customize edebilecek ve özelleştirilmiş stilleri içeren JSON Frontend'e geldiğinde buna uygun bir çıktı elde edecek.

Buradaki asıl sıkıntımız ise, var olan CSS'lerin üzerine yeni bir CSS basıldığında tarayıcıya kullanılmayacak birçok CSS'in basılacak ve ezilecek olmasıydı.

Bu makalede bunu nasıl aştığımı anlatacağım.

## Styled Component Nedir?

Styled Component, JavaScript dosyasında CSS yazmamıza olanak sağlayan, React'taki componentlerde olduğu gibi propslar alabilen, critical CSS özelliği bulunan, farklı temalarla CSS componentleri oluşturmanızı sağlayan bir kütüphane.

Parametre alabilmesi sayesinde dinamik CSS'ler oluşturmayı sağlıyor. Parametre alabilen örnek bir buton;

```js
import styled, { ThemeProvider } from "styled-components"

const Button = styled.button`
    background-color: ${({theme}) => theme.backgroundColor};
    border: 1px solid rgba(0 0 0 / 10%);
    border-radius: ${{theme} => theme.borderRadius};
    color: ${{theme} => theme.color};
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
    transition: .2s ease-out;

    &:hover {
        background-color: ${{theme} => theme.hoverBackgroundColor};
    }
`;
```

Yukarıdaki kodda `Button` adında bir CSS componenti parametre alacağı `theme` adında bir objeden besleniyor. Eğer bir stil içeren parametre gelmezse default olarak belli stillerimi kullanabilmek adına bir `defaults` objesi oluşturdum.

```js
const defaults = {
    color: "#fff",
    backgroundColor: "#4caf50",
    borderRadius: "4px",
    hoverBackgroundColor: "#4caf50"
};
```

`Object.assign()` yardımıyla API'den özelleştirilmiş bir stil dosyası gelirse defaults ile değiştirilmesini sağlayabiliyoruz.

```js
export default function App({theme, children, ...attr}) {
    // Parametre olarak stil içeren bir theme dosyası alıyoruz

    const css = Object.assign(defaults, theme);
    // Burada API'den bir stil objesi gelirse varsayılan CSS'imizin yerine geçmesini sağlıyoruz

    return (
        <ThemeProvider theme={css}>
        // Styled Component bileşeni olan ThemeProvider ile dinamik stilli bir buton oluşturuyoruz  
            <Button {...attr}>{children}</Button>
        </ThemeProvider>
    )
}
```

Oluşturduğumuz `Button` componentini çağıralım; ilk örnek herhangi bir ek stillendirme istemeyen ve default stille render edilecek olan butonumuz, ikinisi ise `dataAPI` adında bir JSON'dan besleniyor ve yeniden stillendiriliyor.

```js
<Button>
  Default Buton
</Button>

<Button theme={dataAPI}>
  APIden Stillenen Buton
</Button>

// Backendden geleceğini düşündüğümüz bir JSON örneği
const dataAPI = {
  color: "#fff",
  backgroundColor: "#0070f3",
  borderRadius: "28px",
  hoverBackgroundColor: "blue"
};
```

***

Sonuç olarak bir CSS kodu ezilmiyor. Yani önce default kırmızı olan buton, sonradan inline CSS ile ezilerek maviye dönüşmüyor; direkt mavi bir buton oluşturuluyor.