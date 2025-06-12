---
date: "2025-06-09"
path: "/react-hook-form-icin-akilli-mask-ve-dogrulama"
title: "React Hook Form için Akıllı Mask ve Doğrulama"
category: "Teknik"
keywords: ["React"]
medium: "https://omergulcicek.medium.com/react-hook-form-i%C3%A7in-ak%C4%B1ll%C4%B1-mask-ve-do%C4%9Frulama-97dfe79d9123"
---

## @omergulcicek/forms

React projelerinde form doğrulama ve input mask işlemleriyle uğraşmak çoğu zaman zahmetli olabiliyor. Bu ihtiyacı karşılamak için geliştirdiğim **@omergulcicek/forms** paketi ile, TypeScript desteğiyle birlikte kolayca maskeleme ve doğrulama işlemlerini yönetebilirsin.

### 🚀 Canlı Önizleme

Paketi canlı olarak denemek için: <a href="https://omergulcicek-forms.vercel.app" target="_blank" rel="noreferrer noopener">omergulcicek-forms.vercel.app</a>

![npm package @omergulcicek/forms](/img/blog/2025-06-09/forms-mask.png)

### Özellikler

- **Akıllı mask**: Kart numarası, telefon, TCKN gibi alanlarda otomatik maskeleme
- **Regex doğrulama**: Gömülü desenlerle hızlı doğrulama
- **Klavye kısıtlaması**: Sadece rakam veya harf kabul eden alanlar
- **TypeScript desteği**: Tam tip güvenliği
- **shadcn/ui uyumluluğu**: Modern ve şık arayüzlerle sorunsuz entegrasyon

### Kurulum

Peer dependency olarak react, react-hook-form ve use-mask-input gerektirir.

```bash
npm install @omergulcicek/forms
npm install react react-hook-form use-mask-input
```

### Kullanım

Aşağıdaki gibi kolayca entegre edebilirsin:

```javascript
import { useForm } from "react-hook-form"
import { useHookFormMask } from "use-mask-input"
import { useFormFields } from "@omergulcicek/forms"

const form = useForm()
const registerWithMask = useHookFormMask(form.register)

const { cardNumber, phone, email, tckn } = useFormFields({
  fields: [
    { name: "cardNumber", type: "cardNumber" },
    { name: "phone", type: "phone" },
    { name: "email", type: "email" },
    { name: "tckn", type: "tckn" }
  ],
  registerWithMask,
  form
})

console.log(cardNumber.value)      // "1234567890123456" (unmasked)
console.log(cardNumber.maskedValue) // "1234 5678 9012 3456" (masked)
```

```html
<form onSubmit={form.handleSubmit(console.log)}>
  <input {...cardNumber} placeholder="**** **** **** ****" />
  <input {...phone} placeholder="(5xx) xxx xx xx" />
  <input {...email} placeholder="email@example.com" />
  <input {...tckn} placeholder="12345678950" />
  <button type="submit">Gönder</button>
</form>
```

### shadcn/ui ile Kullanım

shadcn/ui bileşenleriyle de tam uyumlu çalışır:

```javascript
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

<form onSubmit={form.handleSubmit(console.log)} className="space-y-4">
  <div>
    <Label htmlFor="cardNumber">Kart Numarası</Label>
    <Input {...cardNumber} placeholder="**** **** **** ****" />
  </div>
  <div>
    <Label htmlFor="phone">Telefon</Label>
    <Input {...phone} placeholder="(5xx) xxx xx xx" />
  </div>
  <Button type="submit">Gönder</Button>
</form>
```

### Neden @omergulcicek/forms?

- Form alanlarını hızlıca tanımla, mask ve doğrulama otomatik gelsin
- Modern arayüzlerle sorunsuz çalışır
- TypeScript ile güvenli ve hatasız kod yaz
- Türkiye'ye özel TCKN ve telefon gibi alanlar hazır

***

### Katkıda Bulun

GitHub üzerinden açık kaynak olarak geliştirmekteyim. Herhangi bir sorunla karşılaştığınızda issue açabilir veya PR gönderebilirsiniz. GitHub üzerinden repo'yu yıldızlayıp bana destek olabilirsiniz.