# omergulcicek.com — Hakkımda

> **Agent onboarding:** `/about` sayfa metinleri, bölüm sırası, tech stack ikon SSOT ve “yeni fırsatlara açık” bayrağı için tek kaynak. Footer ikincil nav → `docs/SITE-CONTENT.md`. Deneyim → `docs/EXPERIENCES.md`. Hizmetler → `docs/SERVICES.md`.

---

## Sayfa Tonu

- Hikâye odaklı; CV dökümü değil
- Samimi ama abartısız — craft ve kalite vurgusu
- Bölüm başına 1–3 cümle veya kısa madde
- Hero (`docs/SITE-CONTENT.md`) ile tekrar etme
- **Yeni About versiyonu kalıcı** — legacy'deki Vizyon, İletişim, uzun Teknik Yaklaşım bölümlerine dönüş yok; kaldırma bilinçli

---

## Site Bayrakları

| Sabit | Dosya | Açıklama |
| --- | --- | --- |
| `SITE_FLAGS.isOpenToWork` | `src/constants/site-flags.constants.ts` | `true` → “Yeni fırsatlara açık” badge |

**Badge metni:** `Yeni fırsatlara açık`

**Gösterim:** `/about` ve `/experiences` sayfa başlığı yanında. Env değil — constants + deploy ile toggle.

---

## Bölüm Sırası (`/about`)

| Sıra | Anahtar | Tip |
| --- | --- | --- |
| 1 | `aboutIntro` | Metin (3 paragraf) |
| 2 | `aboutStack` | Logo marquee (home ile aynı strip) |
| 3 | `aboutProduction` | Metin + GitHub contribution calendar |
| 4 | `aboutHobbies` | Statik liste + küçük avatar |
| 5 | `aboutLinks` | CTA → Deneyimler · Hizmetler |

About'ta yok: tam deneyim listesi, hizmet detayı, iletişim bloğu (hero + footer yeterli).

---

## Onaylı Metinler

### Sayfa başlığı

**Hakkımda**

### `aboutIntro`

Merhaba, ben Ömer. Sakarya'da yaşayan, Trabzonlu bir yazılım mühendisiyim.

Detaylara ve kaliteye *büyük bir tutku* duyuyorum; işimle insanlara faydalı olmayı ve deneyimlerine değer katmayı seviyorum. Şu aralar kişisel projelerimin yanı sıra [ViraStack](https://virastack.com) ekosistemine odaklanıyorum.

Yıllardır farklı ölçeklerde frontend projelerinde çalışıyorum; **mimari, performans ve geliştirici deneyimine** önem veriyorum. Ekibin daha güvenle ilerlemesini sağlamayı da önemsiyorum. Yapay zekâyı da bu disiplinin içinde, *bilinçli ve kontrollü* şekilde kullanıyorum.

### `aboutVirastack`

[ViraStack](https://virastack.com), bir frontend projesine başlarken ihtiyaç duyduğun parçaları bir araya getiren açık kaynak ekosistemim: Next.js ve TanStack şablonları, yapay zekâyı mimarine göre yönlendiren AI Rules ve formlar ile erişilebilirlik gibi alanlarda React paketleri.

Bağlantılar: [virastack.com](https://virastack.com) · [GitHub](https://github.com/virastack)

### `aboutProduction`

Projelerimi **açık kaynakta**, tecrübelerimi **blogda** paylaşıyorum.

Son bir yıldaki [GitHub](https://github.com/omergulcicek) katkılarım:

*(altında: `GitHubCalendar` — `username: omergulcicek`, tema site light/dark ile senkron)*

### `aboutHobbies` (statik liste — carousel yok)

Legacy `AnimatedTestimonials` **kullanılmaz**. Dikey liste; avatar ~28px.

| Avatar | Başlık | Metin | Link |
| --- | --- | --- | --- |
| `/avatars/photographer.png` | Fotoğraf | Gezdiğim yerleri paylaşmayı seviyorum. | [instagram.com/omerilekesfet](https://instagram.com/omerilekesfet) |
| `/avatars/chess.png` | Satranç | 5+0 blitz oynuyorum. | [chess.com/member/omergulcicek](https://chess.com/member/omergulcicek) |
| `/avatars/footballer.png` | Futbol | Halı sahada stoper. | — |
| `/avatars/walk.png` | Yürüyüş | Bir şehri sokak sokak keşfetmeyi seviyorum. | — |
| `/avatars/book.png` | Kitap | Tarih ve tasavvuf okumaları. | — |
| `/avatars/draw.png` | Resim | Karakalem ve geleneksel sanatlar. | — |

Avatar ~28px, dikey liste.

### `aboutLinks`

- [Deneyimlerim](/experiences) — kariyer geçmişi ve CV
- [Hizmetler](/services) — freelance geliştirme ve frontend eğitimi

---

## Tech Stack (`aboutStack`)

Tam grid `/about` sayfasında. Ana sayfada **mini marquee strip** (~8–10 logo) — `docs/SITE-CONTENT.md`.

**Genişlik:** Stack strip **bleed** katmanında (`max-w-3xl`–`max-w-5xl`, ortalı) — sayfa prose `max-w-2xl` kalır → `docs/PROJECT-BRIEF.md`

| Konum | Davranış |
| --- | --- |
| **`/` (ana sayfa)** | Tek satır **Magic UI Marquee** — CSS kaydırma; `pauseOnHover`; kenar fade mask |
| **`/about`** | Magic UI Marquee — tüm stack logoları; home strip ile aynı bileşen |

**Kurulum (Marquee):**

```bash
pnpm dlx shadcn@latest add @magicui/marquee
```

**Logolar:** SVGL registry (`@svgl/*`) — legacy `@/icons` kullanılmaz. Veri: `stack.constants.ts` içinde `svglSlug` alanı.

Veri: `src/features/about/constants/stack.constants.ts` (about + home strip paylaşır).

| `id` | Görünen ad |
| --- | --- |
| `html` | HTML |
| `css` | CSS |
| `javascript` | JavaScript |
| `typescript` | TypeScript |
| `git` | Git |
| `react` | React |
| `nextjs` | Next.js |
| `tailwind` | Tailwind CSS |
| `shadcn` | shadcn/ui |
| `tanstack` | TanStack |
| `zod` | Zod |
| `zustand` | Zustand |
| `graphql` | GraphQL |
| `supabase` | Supabase |
| `vite` | Vite |
| `framer` | Framer Motion |
| `react-hook-form` | React Hook Form |
| `storybook` | Storybook |
| `cursor` | Cursor |
| `virastack` | ViraStack |

Layout: desktop 5 sütun, mobil 3 sütun.

---

## Bileşenler

| Bileşen | Sayfa | v1 |
| --- | --- | --- |
| `OpenToWorkBadge` | `/about`, `/experiences` | ✓ |
| `StackStrip` (Marquee) | `/`, `/about` | Magic UI Marquee + SVGL |
| `GitHubCalendar` | `/about` | bleed `max-w-5xl` |
| `HobbyList` | `/about` | ✓ |

Legacy kod kopyalanmaz; davranış referans alınır. Giriş animasyonları v2.
