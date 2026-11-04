# ViraStack AI 2.1.0 denetimi ve yol haritası

Tarih: 2026-11-04. Kapsam: `src/` (460 dosya), `.claude/rules/virastack/` altındaki 12 kurala karşı.

**Yöntem:** statik tarama (grep, dosya okuma) ve `pnpm lint / typecheck / test:run`. Tarayıcıda çalıştırma, Lighthouse ve ekran okuyucu testi yapılmadı; performans ve erişilebilirlik maddeleri koddan çıkarıldı, ölçülmedi.

**Taban durum:** lint 0 hata / 6 uyarı, typecheck temiz, 117 test geçiyor.

## Durum (2026-11-04, düzeltmeler uygulandı)

P1, P2 ve P3 maddeleri uygulandı; lint 0 hata, typecheck temiz, 140 test geçiyor, `pnpm build` geçiyor. Bilerek yapılmayanlar:

- **`components/ui/carousel.tsx` `forwardRef`:** shadcn çıktısı; `pnpm dlx shadcn@latest add carousel --overwrite` onayı gerekir.
- **`queryClient.query({ staleTime: "static" })`:** kurulu `@tanstack/query-core` 5.104.1'de yok; `ensureQueryData` kaldı.
- **`pendingComponent`:** boyutlu bir iskelet tasarımı gerektirir; blog verisi SSR ile geliyor ve 1 saat cache'li, eklenmedi.
- **Effect bağımlılığı olan `useCallback`/`useMemo`** (`use-bookmarks-search-params`, `TOCMinimap`) kuralın "precise control" istisnası olarak kaldı.
- **Ham renk sınıfları** sabit marka/etiket haritalarında kaldı (`AGENTS.md`'de adıyla muaf).
- **Karar bekleyen tablo:** nuqs, istemcide Zod ve marka renkleri `AGENTS.md`'de adıyla geçersiz kılındı.
- **`BlogRating`/`SiblingIndex` indeks key'leri** sabit dekoratif listeler; olduğu gibi bırakıldı. Carousel `img` boyutları veride yok.

## Özet

Temiz çıkanlar: `any`, `!` ifadesi, `enum`, `I`/`T` önekli tip, `../` import, `console.log`, `onClick` taşıyan `div`/`span`, `bg-gradient-to-*`, `w-N h-N` çifti, feature'lar arası import, `.validator()` kullanımı, ana görsel (`fetchPriority="high"`, boyutlu, `eager`), indeks key (yalnızca 3 yerde, aşağıda).

Gerçek sapmalar 5 başlıkta toplanıyor: **barrel dosyalar**, **tek yönlü import akışı**, **test altyapısı**, **API katmanı**, **tip cast'leri**. Bir de kuralla çakışan ama bilinçli proje kararları var; onlar "Karar bekleyen" bölümünde.

---

## P1: Yüksek etki

### 1. Barrel dosyalar (`core`: "No barrel files in application code")

2.1.0 ile gelen yeni kural. 14 barrel var, 36 import bunlardan geçiyor:

- `src/features/{home,projects,setup,about,journey,experiences,bookmarks,blog}/index.ts`
- `src/features/blog/repositories/index.ts`
- `src/components/shared/index.ts` (46 satır), `src/components/shared/icons/index.ts`
- `src/lib/{motion,seo,media}/index.ts`

`blog/index.ts` 57 satır; route dosyaları (`routes/blog/index.tsx`, `routes/dev/mdx-sandbox.tsx`) buradan tek tek import ediyor.

**Yapılacak:** her import'u tanımlayan dosyaya çevir, barrel'ları sil. Mekanik iş; `tsc` yanlış yolu yakalar. Önce `lib/*` ve `components/shared` (en az sayıda tüketici), sonra feature'lar.

**Dikkat:** `import { X } from "@/features/blog"` barrel'ı client bundle'a ne çektiğini gizliyor olabilir (MDX derleyicisi). Çevirince bundle boyutuna bakmaya değer.

### 2. Tek yönlü import akışı (`architecture`: "Shared folders never import features or routes")

14 ihlal, iki grup:

| Kaynak | Hedef | Dosyalar |
| :-- | :-- | :-- |
| `components/shared` → features | projects, blog, bookmarks | `Footer.tsx`, `VirastackProductLinks.tsx`, `CommandPaletteDialog.tsx`, `command-palette.constants.ts` |
| `lib/seo`, `lib/media` → blog | `getBlogPostPath`, `BlogPost`, `BlogSection`, `slugToRouteParam` | `build-rss-feed-xml.ts`, `build-sitemap-xml.ts`, `build-llms-txt.ts`, `resolve-blog-og-image-url.ts`, 3 test |

**Yapılacak:**
- Blog'a ait SEO üreticileri (`build-rss-feed-xml`, `build-sitemap-xml`, `build-llms-txt`, `resolve-blog-og-image-url`) `features/blog/` altına taşınır. Sitemap bütün siteyi kapsadığı için o route'ta compose edilebilir.
- Command palette ve Footer, feature verisini prop olarak alır. Veriyi route'taki (`__root.tsx`) kompozisyon katmanı verir.
- Alternatif: `getBlogPostPath` gibi saf fonksiyonlar iki yerin de kullandığı için `src/helpers/` altına çıkar.

### 3. Test altyapısı (`testing`)

Kural: Vitest + jsdom, Testing Library, MSW, `src/test/` (`render`, `server`, `setup`). Mevcut durum:

- `vitest.config.ts`: `environment: "node"`, `include: ["src/**/*.test.ts"]`. `.tsx` test çalışmaz.
- `src/test/` yok; jsdom, `@testing-library/*`, `msw` bağımlılığı yok.
- 23 test dosyası, hepsi saf fonksiyon / SEO / içerik. Hook, bileşen, API, rota akışı için test sıfır.

**Yapılacak (bağımlılık ekleme onayı gerekir):**
1. `jsdom`, `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`, `msw` ekle. Önce npm'de varlıklarını doğrula.
2. `src/test/{setup,render,server}.ts(x)` oluştur; config'i `.tsx`'i kapsayacak şekilde genişlet. Saf fonksiyon testleri `node` ortamında kalabilir (`// @vitest-environment node` ya da `environmentMatchGlobs`).
3. Öncelik sırası: `github-activity.api.ts` (MSW ile; yüklenme/hata/başarı), `use-bookmarks-search-params`, `use-blog-search-params`, `useCopyFeedback`, `useTheme`, command palette akışı.

### 4. API katmanı (`api`, `server-state`, `core`)

- `src/lib/api.ts` yok; `github-activity.api.ts` doğrudan `fetch` çağırıyor. `ApiError`, `kind`, `getHeaders` yok.
- `fetchTopRepos` `!response.ok` olunca `[]` döndürüyor: hata yutuluyor (`core`: "Never swallow an error"). `eventsResponseSchema.parse` hatası `ZodError` olarak UI'ya kadar çıkıyor.
- `githubActivityQueryOptions` `*.api.ts` içinde; kural `*.queries.ts` istiyor. Blog tarafında da `get-blog-posts.api.ts` içinde `queryOptions` var.
- Sunucu fonksiyonları `ServerResult<{data, error}>` döndürüyor (`lib/server-result.ts`). `tanstack-start` kuralı: Query/Router'ın tükettiği kodda hata **fırlatılmalı**; çözülen `{data, error}` başarı sayılır. Şu an her çağrı yerinde `unwrapServerResult` ile çevriliyor, yani davranış doğru ama desen kuralın tersi.

**Yapılacak:**
1. `src/lib/api.ts` aç (AbortError'ı olduğu gibi geçiren, HTTP/ağ/timeout/şema hatalarını `ApiError`'a çeviren ince sarmalayıcı). `github-activity.api.ts` bunu kullansın; `GITHUB_*` mutlak URL olduğu için `getHeaders` onlara gitmez.
2. `fetchTopRepos` hatayı fırlatsın; "repo listesi olmadan takvimi göster" isteniyorsa bunu `Promise.allSettled` ile hook/bileşen kararı yap, API katmanında yutma.
3. `queryOptions` tanımlarını `*.queries.ts` dosyalarına ayır (`github-activity.queries.ts`, `blog-posts.queries.ts`, `blog-post-detail.queries.ts`).
4. `ServerResult`'tan çıkış: sunucu fonksiyonu güvenli mesajla `throw` etsin (`toServerResult` yerine `toSafeError`), `unwrapServerResult` kalksın. Dosya sayısı az (`blog-post.api.ts`, `mdx-sandbox.api.ts`, 4-5 çağrı yeri), ama thrown mesajlar istemciye gittiği için `safeMessage` zorunlu.

### 5. Tip cast'leri (`typescript`: "`as` casts outside tests and low-level wrappers")

`src/components/ui` hariç, `as const` ve `as unknown` olmayan 17 gerçek cast:

| Dosya | Cast | Düzeltme |
| :-- | :-- | :-- |
| `BlogMediaInfo.tsx:70,76,83`, `BlogBookInfo.tsx:69,76,83,89` | `value as number/string` | koşul sonrası daralt (`if (director)`) ya da alanlara göre ayrı dal |
| `use-bookmarks-search-params.ts:24` | `params.category as BookmarkCategoryId` | parser'ı `parseAsStringLiteral(BOOKMARK_CATEGORY_IDS)` yap |
| `lib/content/me-content.ts:10` | `meJson as Me` | `meSchema.parse` (build'de doğrulanıyor; MEMORIES'e göre istemcide Zod yok) → burada tek kabul edilebilir istisna, yorumla belgele |
| `blog-widget-props.ts:11` | `JSON.parse(value) as T` | `unknown` döndür, çağıran şema ile doğrulasın |
| `blog-content-html.ts:224` | `Number(levelValue) as BlogHeadingLevel` | `isBlogHeadingLevel` tip koruyucusu |
| `SocialLinks.tsx:44,46` | `label as keyof typeof …` | `social.label` tipini `keyof` yap (`me.schema`) |
| `BlogLinksReviewClient`, `CornerShapeDemo`, `TextBoxDemo` | `as CSSProperties` / `as BlogCssCustomProperties` | CSS custom property için `satisfies` + tek yardımcı `cssVars()` |
| `remark-strip-custom-mdx-components.ts:30` | `child as Parent` | unist tip koruyucusu |
| `bookmark-helpers.ts:34,545`, `bookmarks.constants.ts:1551` | `X as readonly string[]` | tek `isOneOf(list, value)` yardımcısı |

---

## P2: Orta etki

### 6. Klasör ağacı (`architecture`)

İzin verilen feature alt klasörleri: `api, components, constants, helpers, hooks, icons, schemas, stores, types`. Dışında kalanlar:

- `features/blog/lib/` (9 dosya: MDX derleme, remark, hydrate), `features/blog/og/`, `features/blog/repositories/`, `features/bookmarks/data/` (2360 satırlık veri).
- `lib/` içinde yapılandırılmış kütüphane örneği olmayan saf yardımcılar: `decode-html-entities.ts`, `slugify-heading.ts`, `format-link-tooltip.ts`, `is-external-href.ts`, `outbound-url.ts`; hook'lar `lib/use-visible-headings.ts`, `lib/motion/use-*.ts`.
- `components/shared/` içinde `.ts` hook: `command-palette/use-command-palette.ts`.
- `helpers/get-blog-prerender-routes.ts` `@supabase/supabase-js` import ediyor; kural: paket import eden kod `lib/`'e.
- `src/providers/`, `src/stores/`, `src/test/` yok; kuralın saydığı yollar (`providers/root-provider.ts`, `lib/query-client.ts`) bu projede `router.tsx` ve `lib/query/create-query-client.ts`. Rule `paths:` filtreleri bu dosyaları eşlemiyor; kural yükleme etkisi: `server-state` kuralı `create-query-client.ts` için otomatik yüklenmez.

**Yapılacak:** `blog/lib`+`blog/repositories` → `api/` (sunucu) ve `helpers/` ayrımı; `bookmarks/data` → `constants/`; `lib/*` saf yardımcılar → `helpers/`; hook'lar → `hooks/`. Büyük taşıma olduğu için P1'lerden sonra, tek PR'da.

### 7. Semantik renk token'ları (`ui`)

Ham palet sınıfı (`bg-blue-500`) 113 yerde. 98'i sabit haritalarda:
`bookmark-tag-icons.constants.ts` (39), `interest-styles.constants.ts` (20), `blog-tag-icons.constants.ts` (14), `library-bookmarks.constants.ts` (9), `virastack-colors.constants.ts` (16 hex). Bileşenlerde ~15: `ComingSoonBadge`, `BlogListPostRow`, `BlogRating`, `RepoAvatar`, `JourneyEntryItem`, `BlogTagChips`, `BlogPostMeta`, `BlogMediaInfo`, `BlogBookInfo`.

Marka/etiket renkleri bilinçli olabilir; bileşenlerdekiler (`BlogRating` yıldız, durum rozetleri) semantik token'a (`--rating`, `--warning`) çevrilebilir. Karar: sabit haritalar "marka rengi" olarak muaf mı?

`styles.css` (23 hex) token tanımı olduğu için doğru yer; `RaindropIcon` (7), `create-og-image-element.tsx` (7, OG görseli CSS değişkeni okuyamaz) meşru.

### 8. Hata yönetimi (`core`)

Yutulan ya da sadece loglanan `catch`'ler:
- `blog-text-exports.api.ts:39`: `console.error` + `return null`. Bir yazı dönüşmezse llms-full.txt'den sessizce düşer. Hata izleyici yoksa en azından build'i uyaran bir sayaç.
- `get-blog-prerender-routes.ts:60`: `catch { return routes }`. Supabase hatasında prerender listesi sessizce eksik kalır; production build'de başarısız olmalı.
- `blog-widget-props.ts:12`, `outbound-url.ts:21`: `catch { return … }` (geçersiz giriş için makul, yorum ekle).
- `use-copy-feedback.ts:26`: panoya yazma hatası kullanıcıya bildirilmiyor.
- `lib/server-result.ts:14`: `console.error` var ama `cause` zinciri yok.

Proje hata izleyicisi (Sentry vb.) kullanmıyor görünüyor; ekleme kararı sende.

### 9. Rota hataları ve beklemeler (`tanstack-start`)

`errorComponent` yalnızca `blog/index`, `blog/$slug`, `notlar/*` rotalarında. `projects`, `bookmarks`, `about`, `journey`, `experiences`, `setup`, `stack` için yok; `pendingComponent` hiçbir rotada yok. Kök `__root.tsx`'te `notFoundComponent` var, genel `errorComponent` için kök düzeyi yeterli mi kontrol et. `bookmarks.tsx` `validateSearch` kullanıyor ama `loader` yok; veri statikse sorun değil.

`blog` loader'ları `ensureQueryData` kullanıyor; kural `context.queryClient.query({ …, staleTime: "static" })` istiyor. Kurulu `@tanstack/react-query` 5.104'te `queryClient.query` varsa geçiş yapılır, yoksa bu madde düşer.

### 10. Memoization (`react`)

React Compiler kurulu değil (`babel-plugin-react-compiler` yok), bu yüzden `useCallback`/`memo` "ölçülmüş sorun" gerektirir. Ölçüsüz 14 kullanım: `use-bookmarks-search-params.ts` (9 `useCallback`), `use-theme.ts` (2), `BookmarksList.tsx`, `BlogProse` (`memo`), `use-project-view-mode.ts`, `TOCMinimap`. Kural: "Do not remove existing memoization in passing"; ayrı bir görev olarak React Compiler'ı açıp bunları kaldırmak daha temiz. Bağımlılık eklemek onay gerektirir.

---

## P3: Küçük

- **`ui` primitifleri:** `components/ui/carousel.tsx` 5× `forwardRef` (React 19'da `ref` prop). shadcn ile yeniden eklenirse (`pnpm dlx shadcn@latest add carousel`) kendiliğinden düzelir; `--overwrite` onay ister. Lint uyarılarının 4'ü `ui/` (badge, button, tabs, toggle) ve shadcn çıktısı; dokunma.
- **`radix-ui` + `@radix-ui/*` birlikte:** `package.json`'da hem `radix-ui` meta paketi hem `@radix-ui/react-dialog` ve `react-slot` var; `components.json` `new-york` (Radix). Kural "never mix" Base UI ile Radix'i kastediyor, ama tek paket yeterli: `@radix-ui/*` satırlarını kaldır.
- **Bir dosyada birden çok bileşen:** `BlogMediaInfo.tsx`, `BlogBookInfo.tsx`, `BlogMdxTable.tsx` (2'şer export).
- **Dosya adı:** `features/blog/og/blog-og-image.tsx` bileşen dosyası kebab-case; `BlogOgImage.tsx` olmalı (lint uyarısı da bu dosyadan). `create-og-image-element.tsx` aynı uyarıyı veriyor: sabit/fonksiyon ayrı dosyaya.
- **İndeks key:** `ProjectDescription.tsx` (4×, segment listesi sabit), `BlogRating.tsx` (yıldız), `SiblingIndex.tsx`. İçerik değişmediği için zararsız ama kural "stable id"; segment'e `id` ekle.
- **`img` boyutu:** `RepoAvatar.tsx:29` `width/height` yok (kapsayıcı `size-*` ile sabit, CLS riski düşük). `BlogImagesCarouselClient`, `ImagesCarouselFallback` kontrol edilmeli.
- **Stale doküman:** `docs/MEMORIES.md:31` hâlâ `.cursor/rules/virastack/` diyor. Cursor kaldırıldı; satırı düzelt. `AGENTS.md` yönetilen blok dışında Cursor'dan söz etmiyor.
- **`schemas/me.schema.ts:97`** `.strict()`; Zod 4'te `z.strictObject()`.
- **`GoogleAnalytics`** idle'da yükleniyor, render-blocking değil: kurala uygun.

---

## Karar bekleyen (kural ile proje kararı çakışıyor)

Bunlar "hata" değil; `MEMORIES.md`'deki kararlarla yeni kurallar ayrışıyor. Her biri için ya kuralı proje talimatında adıyla geçersiz kıl ya da koda uy.

| Konu | Kural | Proje |
| :-- | :-- | :-- |
| **Zod istemcide** | `api`: her yanıt Zod ile ayrıştırılır | MEMORIES: Zod istemcide yok, `me.json` build'de doğrulanır; yalnızca `/projects` GitHub yanıtı istemcide ayrıştırılıyor |
| **nuqs** | `react`: URL durumu `validateSearch` + `getRouteApi().useSearch()` + `navigate({ search })`; nuqs kuralda artık geçmiyor | `use-blog-search-params`, `use-bookmarks-search-params` nuqs; `validateSearch` `createStandardSchemaV1` ile nuqs parser'larına bağlı |
| **`ServerResult`** | `tanstack-start`: hata fırlat | Sonuç nesnesi; güvenli mesaj garantisi için seçilmiş |
| **Sabit marka renkleri** | `ui`: yalnızca semantik token | etiket/marka haritalarında ham palet |
| **Module-level store yok / Zustand yok** | `client-state` | Zustand kurulu değil; tema `useTheme` ile `localStorage`, kural ihlali değil |

Öneri: nuqs'ı bırakmak büyük refactor (iki hook + iki rota); getirisi küçük. Bu sürümde "proje kararı" olarak `AGENTS.md`'ye yaz, kuralı adıyla geçersiz kıl.

---

## Önerilen sıra

| # | İş | Tahmini boyut | Bağımlılık eklenir mi |
| :-- | :-- | :-- | :-- |
| 1 | Barrel'ları kaldır (P1.1) | 1 PR, mekanik | hayır |
| 2 | Tek yönlü import akışı (P1.2) | 1 PR, 14 dosya | hayır |
| 3 | Cast'ler (P1.5) | 1 PR, ~17 yer | hayır |
| 4 | API katmanı: `lib/api.ts`, `*.queries.ts`, GitHub hata yutma (P1.4 ilk üç madde) | 1 PR | hayır |
| 5 | Test altyapısı + ilk API/hook testleri (P1.3) | 1-2 PR | **evet** (onay) |
| 6 | `ServerResult` → throw (P1.4 son madde) | 1 PR, risk orta | hayır |
| 7 | Klasör taşıma (P2.6) | 1 büyük PR | hayır |
| 8 | Rota hata/bekleme bileşenleri, `catch` temizliği (P2.8-9) | 1 PR | hayır |
| 9 | React Compiler + memo temizliği (P2.10) | 1 PR | **evet** (onay) |
| 10 | P3 maddeleri, doküman düzeltmeleri | tek küçük PR | hayır |

1-3 birbirinden bağımsız; 2 ile 7 aynı dosyalara dokunur, ardışık yapılmalı.
