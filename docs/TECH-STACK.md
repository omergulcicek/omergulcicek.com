# omergulcicek.com — Tech Stack

> **Agent onboarding:** Teknoloji seçimleri, paketler ve AI araçları için tek kaynak (SSOT) bu dosyadır. Build oturumuna başlamadan önce **Kurulum** bölümündeki komutları çalıştır.

---

## Uygulama Katmanları

| Katman | Seçim | Not |
| --- | --- | --- |
| Framework | TanStack Start (Vite, SSR) | File-based routing: `src/routes/` |
| UI | shadcn/ui + Tailwind CSS 4 | `components.json` registry; renkler OKLCH (`oklch()`) |
| İkonlar (UI) | Lucide React | `@lucide/lab` — header marka: `rose` ikonu |
| Marka SVG'leri | SVGL | shadcn registry: `@svgl/*` |
| Fontlar | Inter | `@fontsource-variable/inter` |
| Server state | TanStack Query | SSR prefetch + dehydrate; blog ve cache |
| Client state | Zustand | Gerektiğinde |
| Validasyon | Zod | Form/API şemaları |
| URL state | nuqs | Blog filtreleri, paylaşılabilir search params |
| Arama | cmdk + shadcn Command | ⌘K Command Palette — MVP zorunlu → `docs/SEARCH.md` |
| Veritabanı | Supabase (Postgres) | Yeni proje — blog MDX + metadata → `docs/supabase-migration.md` |
| Dosya depolama | Aşamalı — `getMediaUrl` | Başlangıç: `public/blog/` (local); sonra Supabase Storage → transform |
| Blog | MDX + Shiki + Supabase | Ham MDX DB'de; SSR render; bileşenler korunur |
| Analytics | Google Analytics | Lansman öncesi zorunlu |
| Web Vitals | `web-vitals` + raporlama | GA veya console — lansman öncesi |
| Deploy | Vercel | GitHub push → otomatik deploy |

---

## AI Araçları ve Kurallar (Zorunlu)

Build oturumunda **hepsi birlikte** kullanılır: ViraStack mimari disiplini + UI cila + motion kararları.

| Araç | Amaç | Kurulum |
| --- | --- | --- |
| **ViraStack AI Rules** | Mimari, klasör yapısı, TypeScript/React kalıpları, `.cursor/rules/*.mdc` | `npx @virastack/ai-rules init` |
| **make-interfaces-feel-better** | Statik UI cila — tipografi, radius, alignment, tabular numbers | `npx skills add jakubkrehel/make-interfaces-feel-better` |
| **emil-design-eng** | Motion kararları — easing, süre, stagger, micro-interaction, `prefers-reduced-motion` | `npx skills add emilkowalski/skill` |

### Skill birlikte kullanımı

İkisi **çakışmaz, tamamlar** — ikisi de kurulmalı. Örtüşen konularda (stagger, enter/exit, scale-on-press) öncelik:

| Konu | Tercih edilen skill |
| --- | --- |
| Tipografi, concentric radius, optical alignment, tabular numbers, font smoothing | **make-interfaces-feel-better** |
| Animasyon yapıp yapmama, easing, süre, gesture/drag, popover/tooltip motion | **emil-design-eng** |
| Stagger / enter-exit (her ikisi de önerirse) | **emil-design-eng** (motion odağı daha derin) |
| `prefers-reduced-motion`, perf / Web Vitals | **emil-design-eng** + `PROJECT-BRIEF` performans hedefleri |
| Kart gölgesi, border | **make-interfaces-feel-better** — minimal; `PROJECT-BRIEF` varsayılanı düz yüzey |

Manuel çağrı: `/make-interfaces-feel-better` · `/emil-design-eng`

### ViraStack AI Rules

- Proje kökünde `.cursor/rules/` altına kural dosyalarını yazar
- `docs/architecture-guide.md` ile birlikte okunur
- Kod organizasyonu: `features/`, `@/` path alias'ları, SSOT kalıpları
- **Ne zaman:** Her implementasyon adımında; mimari karar ve dosya yerleşimi için

### make-interfaces-feel-better

[Jakub Krehel](https://jakub.kr/writing/details-that-make-interfaces-feel-better) skill'i — arayüz detaylarını cilalamak için.

**Kapsam:**

- `text-wrap: balance` / `pretty`
- Concentric border radius (iç içe öğeler)
- İkon animasyonları (opacity, scale, blur)
- macOS font smoothing
- Tabular numbers (dinamik değerler)
- Interruptible animasyonlar (CSS transition vs keyframe)
- Enter/exit animasyonları, stagger
- Optical vs geometric alignment
- Gölge ve derinlik (image outline vb.)
- Scale-on-press (`0.96`), minimum hit area (`40×40px`)

**Ne zaman:**

- UI bileşeni yazarken veya gözden geçirirken
- **v1 MVP:** Statik cila — tipografi, spacing, alignment (birincil skill)
- v2 cila: hover geçişleri, micro-interaction (motion ile birlikte)
- Manuel: `/make-interfaces-feel-better`

**Proje ile çelişki:** `docs/PROJECT-BRIEF.md` → Tasarım Sistemi bölümü **önceliklidir**. Varsayılan düz yüzey; border/gölge yalnızca minimal ve seçici kullanılır — skill'in ağır gölge önerileri her yüzeye uygulanmaz.

### emil-design-eng

[Emil Kowalski](https://emilkowal.ski/skill) skill'i — motion ve etkileşim kararları için.

**Kapsam:**

- Animasyon karar çerçevesi (ne zaman, ne kadar, hangi easing)
- Custom cubic-bezier, süre kuralları
- Button press, origin-aware popover, tooltip delay
- Stagger, clip-path reveal, blur masking
- Gesture/drag, momentum, boundary damping
- `prefers-reduced-motion`, touch/hover ayrımı

**Ne zaman:**

- **v2 (Faz 5)** — animasyon ekleme ve review aşaması
- v1'de kullanma — `PROJECT-BRIEF` animasyon fazları
- Manuel: `/emil-design-eng` (repo'da `review-animations` da varsa animasyon review için)

**Proje ile çelişki:** Animasyonlar **subtle** kalmalı; Web Vitals 100 hedefi bozulmaz (`PROJECT-BRIEF`).

## Kurulum (Build Oturumu Öncesi)

Sıra önemli. **Skill ve ViraStack kurulumu atlanmaz.**

```bash
# 1. Bağımlılıklar
pnpm install

# 2. ViraStack AI Rules (henüz yoksa veya güncelleme gerekiyorsa)
npx @virastack/ai-rules init

# 3. UI skills — ZORUNLU (ikisi birlikte)
npx skills add jakubkrehel/make-interfaces-feel-better
npx skills add emilkowalski/skill

# 4. Geliştirme
pnpm dev
```

Doğrulama:

- [ ] `.cursor/rules/` altında ViraStack `.mdc` dosyaları mevcut
- [ ] `make-interfaces-feel-better` skill yüklü
- [ ] `emil-design-eng` skill yüklü (`emilkowalski/skill`)
- [ ] `pnpm lint && pnpm check-types` geçiyor

---

## Geliştirme Komutları

```bash
pnpm install && pnpm dev      # Dev server :3000
pnpm generate-routes          # Route dosyası değişikliğinden sonra
pnpm build                    # Production build
pnpm preview                  # Production build önizleme
pnpm lint                     # ESLint
pnpm check-types              # TypeScript
```

### shadcn / Magic UI / SVGL

```bash
pnpm dlx shadcn@latest add button              # UI bileşeni
pnpm dlx shadcn@latest add @magicui/marquee    # Ana sayfa stack strip
pnpm dlx shadcn@latest add @svgl/react         # Stack / deneyim marka ikonu
pnpm dlx shadcn@latest add @svgl/tanstack       # TanStack (SVGL; PNG kullanılmaz)
```

Ana sayfa tech stack: **Magic UI Marquee** + **SVGL** logoları (`src/features/home/components/StackStrip.tsx`). Registry: `components.json` → `@magicui`, `@svgl`.

---

## Supabase

Tam şema, Storage ve taşıma → **`docs/supabase-migration.md`**

| Konu | Karar |
| --- | --- |
| Proje | Sıfırdan yeni Supabase projesi |
| DB isimlendirme | Tablo, sütun, enum — **İngilizce** |
| İçerik yazımı | Agent + prompt; admin paneli yok |
| Yayın | `published` boolean manuel; cron yok |
| Taslaklar | Dev'de görünür; production'da gizli |
| Engagement | View / like / comment — **site lansmanından sonra** |

### Medya sağlayıcı (blog görselleri)

Tek değişkenle kaynak değiştirilir; MDX ve DB path'leri sabit kalır (`blog/{yyyy}/{mm-dd}/{file}`).

| `VITE_MEDIA_PROVIDER` | Kaynak | Ne zaman |
| --- | --- | --- |
| `local` (varsayılan) | `public/blog/` → `/blog/...` | İlk build, düşük maliyet / egress riski yok |
| `supabase` | Storage object URL (orijinal PNG/JPG) | Görseller bucket'a taşındıktan sonra |
| `supabase-transform` | Storage render URL (resize + WebP) | Pro plan + transform açıkken |

Kod: `src/lib/media/` → `getMediaUrl(path)`, `getMediaSrcSet(path, { widths })`.

```bash
# .env — başlangıç
VITE_MEDIA_PROVIDER=local

# Aşama 2
VITE_MEDIA_PROVIDER=supabase
VITE_SUPABASE_URL=https://xxx.supabase.co

# Aşama 3
VITE_MEDIA_PROVIDER=supabase-transform
```

Blog görselleri build başında `_legacy/public/blog` → `public/blog` (kopya veya symlink). Detay → `docs/supabase-migration.md` → Medya sağlayıcı.

---

## MVP Dışı (lansman sonrası)

| Teknoloji | Amaç |
| --- | --- |
| i18n | Çoklu dil |
| Admin paneli | Yok — Supabase Studio + agent yazım |
| `post_views`, `post_likes`, `post_comments` | Engagement — site bittikten sonra |

---

## Animasyon (v2 — Faz 5)

v1'de **Framer Motion ve sayfa giriş animasyonları kullanılmaz**. **CSS hover, focus ve transition serbest.**

| Sürüm | Paket / API | Kapsam |
| --- | --- | --- |
| v1 | CSS only | Hover/focus; showcase tıklama; statik UI cila |
| v2 | Framer Motion + View Transitions API | Stack carousel, sayfa geçişleri, hero stagger — subtle |

v2'de **emil-design-eng** skill ile motion review. v1 build'inde motion skill'i zorunlu değil; statik cila için **make-interfaces-feel-better** yeterli.

---

## Performans ve Kalite

| Hedef | Araç / Yöntem |
| --- | --- |
| Web Vitals 100 | Production build + `pnpm preview`, gizli mod |
| Google Analytics | Lansman öncesi entegre |
| Blog SSR | Supabase sunucu fetch; CLS / içerik flaşı yok |
| Taslak yazılar | `import.meta.env.DEV` ile genişletilmiş sorgu |
| Görseller | `getMediaUrl` + lazy load | Aşama 1: local `public/blog/`; Aşama 2–3: Supabase → transform (WebP) |
| HTTP cache | SSR `Cache-Control`; TanStack Query `staleTime` |
| Syntax highlighting | Shiki, özel tema |
| Lint / types | `pnpm lint && pnpm check-types` |

---

## Agent Notları

1. Tech stack değişikliği **kullanıcı onayı** gerektirir (`core-principles.mdc`).
2. Yeni npm paketi eklemeden önce mevcut stack'te çözüm var mı kontrol et.
3. UI implementasyonunda: **ViraStack** yapıyı, **make-interfaces-feel-better** statik cila, **emil-design-eng** motion kararlarını yönetir (örtüşmede yukarıdaki tabloya bak).
4. Skill otomatik tetiklenmese bile UI fazlarında manuel `/make-interfaces-feel-better` ve `/emil-design-eng` çağrılabilir.
