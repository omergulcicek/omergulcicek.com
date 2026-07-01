# Blog Voice Guide

> **Amaç:** Yeni blog yazılarını Ömer Gülcicek'in mevcut sesine yakın üretmek. Agent veya harici AI'a bu dosyayı `@docs/blog-voice.md` ile verin; teknik blog altyapısı için `docs/BLOG.md` ile birlikte okunur.

---

## Nasıl Kullanılır

1. Bu dosyayı prompt'a ekleyin (`@docs/blog-voice.md`).
2. Konu, kategori (`technical` | `personal`), seri (varsa), etiketler ve istenen bölümleri ayrıca belirtin.
3. İlk taslağı üretin; 1–2 paragrafı elle ince ayar yapın (en kişisel kısımlar).
4. `docs/BLOG.md` frontmatter ve DB kurallarına uygun metadata üretin.

**Örnek prompt:**

```text
@docs/blog-voice.md kurallarına uy.
Konu: [konu]
Kategori: technical
Seri: site-yenileme, sıra 5
Etiketler: TanStack, Supabase
Bölümler: Ne Değişti, Neden, Sonraki Adımlar
```

---

## Ses Profili

| Özellik | Tarif |
| --- | --- |
| **Ton** | Sakin, iddiasız, pratik; hype yok |
| **Uzunluk** | Kısa — yaklaşık **400–600 kelime**, ~2 dk okuma |
| **Giriş** | 1–2 cümle; problem veya bağlam; "Bu yazıda…" ile başlama |
| **Kapanış** | Tek pratik cümle + isteğe bağlı link (GitHub, kaynak, tavsiye) |
| **Teknik yazı** | Nötr / ikinci tekil; gerekçe ve kararlar net |
| **Kişisel yazı** | Birinci tekil; dürüst eleştiri; puan verilebilir (ör. 4/5) |
| **Seri yazıları** | Seriye kısa atıf; önceki bölümle süreklilik |

---

## Yapı Şablonları

### Teknik (`technical`)

```text
[Giriş: problem veya bağlam — 1–2 cümle]

## [Somut başlık: Ne Yapıyor? / Ne Aynı Kaldı? / Kurulum]

[Karar, araç, mimari — kısa paragraflar]

## [İkinci bölüm]

[Detay veya gerekçe]

## [Üçüncü bölüm — opsiyonel]

[Sonuç, karşılaştırma veya pratik çıkarım]

[Kaynak / GitHub / dış link — tek satır]
```

**Akış:** problem → ne değişti / ne aynı → neden → pratik sonuç.

### Kişisel (`personal`) — film, kitap, seyahat vb.

```text
[Kısa özet: kim, ne, nerede — spoiler minimum]

![Başlık](/blog/YYYY/MM-DD/slug.jpg)

## [Boyut 1: Tempo / Atmosfer / Deneyim]

[Güçlü yan — somut sahneler veya anlar]

## [Boyut 2: Zayıf yan / Eleştiri]

[Dürüst eleştiri — "katılıyorum" kullanılabilir]

## Genel Değerlendirme

[Puan + kısa gerekçe + alternatif fikir (opsiyonel)]

[Tavsiye cümlesi — yumuşak kapanış]
```

### Ürün / ekosistem tanıtımı (`technical`, ViraStack tarzı)

```text
[Problem çerçevesi: kuralsız AI = çalışır görünür ama production değil]

## Ne Yapıyor?

[Ürün tanımı — abartısız]

## Kurulum veya Kullanım

[Tek komut / tek örnek prompt]

## [Fayda bölümü]

[Üretime hazır çıktı, tutarlılık — iddia kanıtlanabilir olsun]

[Dış linkler: site + GitHub]
```

---

## Dil Kuralları

| Kural | Örnek |
| --- | --- |
| Ana dil Türkçe | — |
| İngilizce terimler | _SSR_, _AI-assisted development_, _minimal ve sade_ |
| Ana kavramlar | **kalın** — `TanStack Start`, `feature-based`, `üretime hazır` |
| Rol / vurgu | *italik* — *Mad Max*, *yapay zekâ destekli geliştirme* |
| Parantez açıklama | İlk geçişte: _SSR_ _(Server-Side Rendering)_ |
| Cümle uzunluğu | Orta; akademik değil, blog dili |
| Liste | Az kullan; tercih edilen format akıcı paragraf + `##` bölümler |

---

## Frontmatter Şablonu

MDX dosyası veya DB kaydı için:

```yaml
---
locale: "tr"
publishedAt: "YYYY-MM-DD"
published: true
slug: "/yazi-slug"
title: "Başlık — kısa, açıklayıcı"
description: "Tek cümle özet; arama ve liste için."
category: "technical"  # veya "personal"
tags: ["Etiket1", "Etiket2"]  # en fazla 3
series: "seri-adi"  # opsiyonel
seriesOrder: 1  # opsiyonel
coverImage: "/blog/YYYY/MM-DD/slug.jpg"  # opsiyonel
readingTimeMinutes: 2
canonicalUrl: "https://omergulcicek.com/blog/yazi-slug"
---
```

- `description`: tek cümle, fiil içersin, hype içermesin.
- `readingTimeMinutes`: kısa yazılar için genelde `2`.
- Etiketler: `docs/BLOG.md` → Tag havuzu ile uyumlu olsun.

---

## Yap / Yapma

### Yap

- "Her şeyi sıfırdan icat etmedim" gibi abartıyı kıran ifadeler
- Ne değişmedi / ne aynı kaldı bölümü (migration yazılarında)
- Mimari ve araç seçiminin **gerekçesi**
- Dış bağlantı (GitHub, kaynak kod, resmi site)
- Kişisel yazıda zayıf yanı kabul et, sonra dengele
- Seri yazılarında önceki bölüme link

### Yapma

- "Bu yazıda ele alacağız", "Sonuç olarak" gibi şablon giriş/kapanış
- "Devrim niteliğinde", "oyun değiştirici", aşırı pazarlama dili
- Gereksiz uzatma; aynı fikri iki kez söyleme
- Akademik veya kurumsal ton
- Kanıtsız iddia ("bambaşka sonuç") — örnek veya somut senaryo ekle
- Her paragrafta emoji veya ünlem

---

## Örnek Paragraflar (Few-Shot)

Aşağıdaki pasajlar hedef ses için referans; kopyalamayın, ritmi ve yapıyı taklit edin.

### Teknik — problem girişi

> Yapay zekâ ile kod yazmak hızlı; fakat kuralsız çalıştığında çıktı çoğu zaman **çalışır görünür, üretime hazır değildir**. Tip güvenliği zayıf bileşenler, düşünülmemiş yükleme durumları, unutulmuş hata senaryoları — hepsi tanıdık senaryolar. Sorun modelin yetersizliği değil; modele **hangi standartlarda kod yazacağının** her seferinde yeniden anlatılmaması.

### Teknik — migration / ne aynı kaldı

> [Site Yenileme](/blog?tag=Site+Yenileme) serisinin bu bölümünde kişisel sitemi bir kez daha güncelledim. Bir önceki sürüm zaten güncel teknoloji ve paketlerle ayaktaydı; tasarım dili ve genel düzen için köklü bir değişikliğe ihtiyaç duymadım. **Her şeyi sıfırdan icat etmedim** — değişenler framework, veri kaynağı, geliştirme süreci ve birkaç arayüz dokunuşu.

### Teknik — gerekçe

> En büyük değişiklik **Next.js App Router** yerine **TanStack Start**'a geçmem oldu. Son yıllarda kişisel projelerde hem farklı teknolojilere hakim olmak hem de sempati duyduğum ekosistemlerle çalışmak istediğim için sitelerimi TanStack ile geliştiriyorum.

### Kişisel — eleştiri + denge

> Eleştirmenlerin "tahmin edilebilir, klişe" demesine **katılıyorum**. Olay örgüsü sürpriz çıkarmıyor; nereye gideceğini erkenden seziyorsunuz. Hikâye tarafında farklı bir şey bekleyen biri biraz hayal kırıklığına uğrayabilir.
>
> Buna rağmen gerilim ve kovalamaca sahneleri filmi ayakta tutuyor. Senaryo zayıf kalsa da bu sahneler tek başına izlemeye değer.

### Kişisel — puan ve alternatif fikir

> **Apex**'i beğendim; puanım **4/5**. Güzel bir film, fakat **daha iyisi olabilirdi**. Senaryo biraz daha cesur olsaydı iş bambaşka bir yere gidebilirdi — mesela kovalamacaya başka karakterler de dahil olabilirdi.

---

## Revizyon Kontrol Listesi

Taslak hazır olduktan sonra:

- [ ] ~400–600 kelime mi?
- [ ] Giriş 2 cümleyi geçmiyor mu?
- [ ] En az 2, en fazla 4 `##` bölümü var mı?
- [ ] Hype / pazarlama dili temizlendi mi?
- [ ] Teknik terimler doğru biçimlendirildi mi? (_italik_, **kalın**)
- [ ] Kategori tonu doğru mu? (`technical` nötr, `personal` birinci tekil)
- [ ] Seri ve etiketler `docs/BLOG.md` ile uyumlu mu?
- [ ] Kapanışta pratik link veya tavsiye var mı?
- [ ] Kişisel yazıda eleştiri dengeli mi? (zayıf yan + güçlü yan)

---

## Sınırlar

Bu kılavuz **yapı ve tonu** yakalar; tam "imza" hissi için:

- Kişisel anekdot veya alternatif senaryo fikri gibi 1–2 paragrafı yazar elle düzenlemeli.
- Derin teknik yazılarda kod örneği veya diyagram isteniyorsa prompt'ta ayrıca belirtilmeli — varsayılan kısa özet formatıdır.
- Uzun form (~1000+ kelime) isteniyorsa prompt'ta açıkça "uzun form" yazılmalı; varsayılan kısa kalır.
