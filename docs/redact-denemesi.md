# TanStack Redact denemesi (10 Kasım 2026)

`@tanstack/redact` 0.3.1, React yerine geçen daha küçük bir çalışma zamanı. Bileşenler, hook'lar ve `react` importları aynı kalıyor; Vite eklentisi `react` ve `react-dom` importlarını build sırasında Redact'a yönlendiriyor. Farkı: render senkron, React'teki zaman dilimleme (time slicing) ve kesilebilir render yok.

## Kurulum

```ts
// vite.config.ts (yalnızca production build'de)
const isBuild = command === "build"
...(isBuild ? { ssr: { noExternal: true, external: ["shiki"] } } : {}),
plugins: [..., viteReact(), babel({ presets: [reactCompilerPreset()] }), isBuild && redact(), ...]
```

- `ssr.noExternal: true` belgelerde isteniyor: sunucu bağımlılıkları da paketlenince onların React importları da Redact'a gidiyor.
- `shiki` dışarıda kalmalı: wasm dosyası paketlenemiyor, build kırılıyor. Shiki React kullanmıyor.
- `pnpm dev` için açılmadı: `noExternal: true` geliştirme sunucusunda CommonJS paketlerini (`lucide-react`, `lodash.debounce`, `acorn-jsx`…) satır içi yükleyip `require is not defined` ile her sayfayı 500'e düşürüyor. Bu yüzden geliştirme React'le, production Redact'la çalıştı.

## Yöntem

- Production build, `node .output/server/index.mjs` ile yerelde; önüne Vercel gibi Brotli/gzip sıkıştıran bir ara sunucu kondu.
- Lighthouse 13.6.0, mobil (varsayılan yavaşlatma), sayfa başına 5 çalıştırma, ortanca. Önce/sonra ikişer tur alındı; tablolar iki turun ortalaması.
- Sunucu yanıt süresi: sayfa başına 200 istek, ilk 5 ısınma sayılmadı, ortanca.
- Sayfalar: ana sayfa, bir blog yazısı, Hakkımda, Marka.

## Sonuçlar

### Paket boyutu

|                                    |      React |     Redact |             Fark |
| :--------------------------------- | ---------: | ---------: | ---------------: |
| Tüm JS (gzip)                      |   917.6 KB |   873.2 KB | −44.4 KB (−4.8%) |
| Tüm JS (Brotli)                    |   806.2 KB |   768.8 KB | −37.4 KB (−4.6%) |
| Sayfa başına aktarılan JS (Brotli) | 417–436 KB | 383–402 KB |     −34 KB (−8%) |
| CSS                                |    22.0 KB |    22.0 KB |                0 |

### Lighthouse (mobil)

| Sayfa       | Puan      | LCP            | TBT         | Speed Index    |
| :---------- | :-------- | :------------- | :---------- | :------------- |
| Ana sayfa   | 100 → 97  | 1.75 → 1.91 sn | 37 → 163 ms | 1.66 → 1.80 sn |
| Blog yazısı | 96 → 99   | 2.70 → 1.98 sn | 44 → 106 ms | 1.64 → 1.76 sn |
| Hakkımda    | 100 → 100 | 1.07 → 1.10 sn | 23 → 31 ms  | 1.08 → 1.70 sn |
| Marka       | 100 → 99  | 1.68 → 1.84 sn | 28 → 70 ms  | 1.12 → 1.27 sn |

FCP her sayfada aynı kaldı (±%3, gürültü içinde). CLS her iki durumda 0.

### Sunucu (SSR) yanıt süresi

| Sayfa                  |    React |   Redact |                                                      Fark |
| :--------------------- | -------: | -------: | --------------------------------------------------------: |
| Hakkımda               |  2.00 ms |  1.58 ms |                                                      −%21 |
| Marka                  |  1.56 ms |  1.25 ms |                                                      −%20 |
| Ana sayfa, blog yazısı | ≈ 330 ms | ≈ 330 ms | Fark yok (süreyi Supabase ve GitHub istekleri belirliyor) |

### Build süresi

React 6.1–10.7 sn, Redact 6.6–10.8 sn: açık geliştirme sunucuları yüzünden dağınık, anlamlı fark yok.

## İşlevler

Production build'de denendi: sayfa geçişleri, etiket filtresi, geri tuşu, dil değiştirme, tema, komut paleti (⌘K), logo sağ tık menüsü, kod renklendirme, Hakkımda'daki fotoğraf açılışları. Hepsi çalıştı, konsolda hata yok. Lint, typecheck ve 118 test geçti (testler Vitest'te gerçek React ile çalışıyor; Redact'ı sınamıyor).

**Bozulan:** mobil menü. Menüden bir sayfaya geçince çekmece `data-closed` oluyor ama ekrandan çıkmıyor; sayfanın ortasında, bulanık arka planla takılı kalıyor. Aynı adımlarda React'te çekmece aşağı kayıp kayboluyor. Base UI Drawer'ın kapanma animasyonu Redact'ta tamamlanmıyor.

## Değerlendirme

- Kazanç: sayfa başına ≈ 34 KB daha az JS (−%8) ve sunucuda %20 daha hızlı render. Ancak render zaten 2 ms altında olduğu için kullanıcı bunu fark etmez.
- Bedel: TBT 2–4 kat arttı. Redact sayfayı tek seferde, bölmeden hydrate ediyor; React ise bu işi parçalara bölüyor. Mobilde ilk dokunuşun gecikmesi artabilir. Blog yazısında LCP iyileşti, diğer sayfalarda biraz kötüleşti.
- Mobil menü hatası düzelmeden yayına alınamaz.

Öneri: bu site için şimdilik alınmasın; deneme sonrası kurulum geri alındı, ayarı yukarıda. Site zaten 96–100 puanda; 34 KB kazanç TBT artışını ve menü hatasını karşılamıyor. Redact 0.x sürümünde; Drawer sorunu çözülünce ve TBT farkı kapanınca yeniden denenebilir.
