---
date: "2025-06-19"
path: "/react-parola-inputlari-icin-goster-gizle-hooku"
title: "React Parola Inputları için Göster/Gizle Hooku"
category: "Teknik"
keywords: ["React"]
medium: "https://omergulcicek.medium.com/react-parola-inputlar%C4%B1-i%C3%A7in-g%C3%B6ster-gizle-hooku-1f0085624887"
---

## @omergulcicek/password-input

React projelerinde parola inputları için göster/gizle işlevselliği eklemek için bir çok şey yapmamız gerekiyor. State tanımlamak, onClick eventleri yazmak, ikonları yönetmek gibi işlemler zaman alıcı ve tekrarlayıcı olabilir. Özellikle TypeScript ile çalışırken, bu işlemleri daha da karmaşık hale getirebilir.

Bu ihtiyacı karşılamak için geliştirdiğim **@omergulcicek/password-input** paketi ile, TypeScript desteğiyle birlikte kolayca parola alanlarını yönetebilirsin.

### 🚀 Canlı Önizleme

Paketi canlı olarak denemek için: <a href="https://omergulcicek-password-input.vercel.app/" target="_blank" rel="noreferrer noopener">omergulcicek-password-input.vercel.app/</a>

![npm package @omergulcicek/password-input](/img/blog/2025-06-16/password-input.png)

### Özellikler

- **Parola Maskesi**: Parola alanlarında otomatik maskeleme
- **Gizle/Göster Butonu**: Parola alanlarını göster/gizle butonu ile kontrol etme
- **Özel İkonlar**: Herhangi bir ikon paketi yada farklı içerikler ile uyumlu
- **TypeScript Desteği**: Tam tip güvenliği ile geliştirme
- **Esneklik**: Herhangi bir CSS framework veya özel stillerle çalışma

### Kurulum
```bash
npm install @omergulcicek/password-input
```

### Kullanım

Aşağıdaki gibi kolayca entegre edebilirsin:

```javascript
import { usePasswordInput } from "@omergulcicek/password-input"

const { inputProps, InputWrapper, wrapperProps } = usePasswordInput({
  password: true
});

return (
  <InputWrapper {...wrapperProps}>
    <input {...inputProps} />
  </InputWrapper>
)
```

### Özelleştirme

Parola inputunu özelleştirmek için `usePasswordInput` fonksiyonuna çeşitli parametreler geçebilirsin:

Varsayılan ikon Lucide React ikonlarıdır. İstersen kendi ikonlarını veya metinleri kullanabilirsin.

**Özelleştirilmiş Metinler**

```javascript
import { usePasswordInput } from "@omergulcicek/password-input"

const { inputProps, InputWrapper, wrapperProps } = usePasswordInput({
  password: {
    icons: {
      show: <span className="text-xs">Show</span>,
      hide: <span className="text-xs">Hide</span>,
    }
  }
});

return (
  <InputWrapper {...wrapperProps}>
    <input {...inputProps} />
  </InputWrapper>
)
```

**Özelleştirilmiş İkon**

```javascript
import { usePasswordInput } from "@omergulcicek/password-input"
import { House, Star } from "lucide-react"

const { inputProps, InputWrapper, wrapperProps } = usePasswordInput({
  password: {
    icons: {
      show: <House className="size-4" />,
      hide: <Star className="size-4" />,
    }
  }
});

return (
  <InputWrapper {...wrapperProps}>
    <input {...inputProps} />
  </InputWrapper>
)
```

**Özelleştirilmiş sınıf isimleri**

```javascript
import { usePasswordInput } from "@omergulcicek/password-input"

const { inputProps, InputWrapper, wrapperProps } = usePasswordInput({
  password: true,
  classNames: {
    wrapper: "my-custom-wrapper", // outer container div
    suffix: "my-custom-suffix",     // right-side icon container
    button: "my-custom-button"    // toggle button element
  }
});

return (
  <InputWrapper {...wrapperProps}>
    <input {...inputProps} />
  </InputWrapper>
)
```

**cn() fonksiyonu**

Bu fonksiyon, sınıf isimlerini birleştirmek için kullanılır. Opsiyonel bir alandır. Projenizde var olan bir cn() fonksiyonunu kullanmak isterseniz, bu şekilde entegre edebilirsiniz:

```javascript
import { usePasswordInput } from "@omergulcicek/password-input"
import { cn } from "@/lib/utils" // your class name utility

const { inputProps, InputWrapper, wrapperProps } = usePasswordInput({
  password: true,
  classNames: {
    wrapper: "my-custom-wrapper",
    suffix: "my-custom-suffix", 
    button: "my-custom-button"
  },
  cn // optional
});

return (
  <InputWrapper {...wrapperProps} className="border rounded-md">
    <input {...inputProps} className="px-3 py-2 w-full" />
  </InputWrapper>
)
```

### Neden @omergulcicek/password-input?

Bu paket, React projelerinde parola inputları için göster/gizle işlevselliğini kolayca eklemek amacıyla tasarlandı. TypeScript desteği ile birlikte, esnek ve özelleştirilebilir bir çözüm sunuyor. Ayrıca, farklı ikon setleri ve stillerle uyumlu çalışabilmesi sayesinde projelerinizde rahatlıkla kullanabilirsiniz.

***

### Katkıda Bulun

GitHub üzerinden açık kaynak olarak geliştirmekteyim. Herhangi bir sorunla karşılaştığınızda issue açabilir veya PR gönderebilirsiniz. GitHub üzerinden repo'yu yıldızlayıp bana destek olabilirsiniz.