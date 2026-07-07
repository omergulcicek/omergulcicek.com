[React State Yönetim Mimarisi](/blog/react-state-yonetim-mimarisi) yazısında paylaşılan UI state'leri için Zustand'ı önermiştim. O makalede filtreler ve benzeri state'ler "global UI" kategorisinde değerlendirilmişti - çünkü Zustand burada doğru araç. Ancak "global" kelimesi, store'un uygulama genelinde tek bir instance olarak yaşaması gerektiği anlamına gelmez. Bu yazı, aynı Zustand tercihini korurken store kapsamını nasıl daraltacağımızı ele alıyor.

![Zustand ve React Context](/blog/2026/07-07/react-context.webp)

Global Zustand store'ların üç temel sınırlaması var: prop'lardan ilk değer verememe, test karmaşıklığı ve yeniden kullanılabilir bileşenler için uygunsuzluk. Bu sorunların çözümü basit ama etkili - React Context.

## Sorun: Global Store Sınırları

Zustand store'ları React bileşen yaşam döngüsü dışında oluşturulur. Bu üç soruna yol açar:

İlk olarak, store'u bir prop'tan gelen değerle başlatamayız. Varsayılan bir değerle store'u yaratıp ardından `useEffect` ile senkronize etmek zorunda kalırız. Bu hem gereksiz bir re-render'a hem de "ilk değer" yerine "senkronizasyon" mantığına neden olur.

İkinci olarak, test yazmak karmaşıklaşır. Global store her test arasında sıfırlanmalı, mock'lanmalı veya temizlenmelidir. Store bileşen ağacına bağlı olsaydı, her test izole bir örnek kullanabilirdi.

Üçüncü olarak, yeniden kullanılabilir bileşenler için uygunsuzluk. Bir sayfada aynı bileşeni birden fazla kullanmak istediğinizde, global store tüm örneklerin state'ini paylaşır. Örneğin bir seçim listesi bileşeni geliştirdiğinizde, sayfada iki ayrı liste olduğunda ikisi de aynı seçimleri paylaşır - ki bu istenen davranış değildir.

## Çözüm: Context ile Encapsulation

React Context burada state yönetimi aracı olarak değil, store örneğini paylaşmak için kullanılır. Store değerlerini Context'e koymuyoruz; store'un kendisini koyuyoruz. Context statik bir referans tutar, değer değişimleri Context'i tetiklemez. Render optimizasyonları Zustand'ın kendi selector-based abonelik sistemi üzerinden gerçekleşir; yalnızca seçilen değer değiştiğinde ilgili bileşen yeniden render olur.

```typescript
import React from "react"
import { createStore, useStore } from "zustand"
import type { StoreApi } from "zustand"

type FilterState = {
  searchQuery: string
  selectedTags: string[]
  actions: {
    setSearchQuery: (query: string) => void
    toggleTag: (tag: string) => void
    clearFilters: () => void
  }
}

const FilterStoreContext = React.createContext<StoreApi<FilterState> | null>(
  null
)

type FilterStoreProviderProps = {
  children: React.ReactNode
  initialQuery?: string
  initialTags?: string[]
}

export const FilterStoreProvider = ({
  children,
  initialQuery = "",
  initialTags = []
}: FilterStoreProviderProps) => {
  const [store] = React.useState(() =>
    createStore<FilterState>((set) => ({
      searchQuery: initialQuery,
      selectedTags: initialTags,
      actions: {
        setSearchQuery: (query) => set({ searchQuery: query }),
        toggleTag: (tag) =>
          set((state) => ({
            selectedTags: state.selectedTags.includes(tag)
              ? state.selectedTags.filter((t) => t !== tag)
              : [...state.selectedTags, tag]
          })),
        clearFilters: () => set({ searchQuery: "", selectedTags: [] })
      }
    }))
  )

  return (
    <FilterStoreContext.Provider value={store}>
      {children}
    </FilterStoreContext.Provider>
  )
}
```

Burada `createStore` kullanıyoruz - hook yerine ham store döndürür. Store yaratımını `useState` başlatıcı fonksiyonunda yapıyoruz; böylece yalnızca bir kez çalışır ve `initialQuery`, `initialTags` prop'larını doğrudan kapatabilir. Store örneğini sade bir Context'e veriyoruz.

`useState` başlatıcı fonksiyonu yalnızca mount sırasında çalışır. Bu bilinçli bir tercihtir: mount sonrası `initialQuery` veya `initialTags` prop'ları değişse bile store güncellenmez. Gerçek bir "ilk değer" ataması yapılır; `useEffect` ile senkronizasyon gerekmez.

Tüketim tarafında Context'ten store'u alıp Zustand'ın `useStore` hook'una geçiriyoruz:

```typescript
const useFilterStore = <T,>(selector: (state: FilterState) => T): T => {
  const store = React.useContext(FilterStoreContext)
  if (!store) {
    throw new Error("useFilterStore must be used within FilterStoreProvider")
  }
  return useStore(store, selector)
}

export const useSearchQuery = () =>
  useFilterStore((state) => state.searchQuery)

export const useSelectedTags = () =>
  useFilterStore((state) => state.selectedTags)

export const useFilterActions = () => useFilterStore((state) => state.actions)
```

Provider'ı ilgili feature ağacının kökünde sarmalayın:

```tsx
<FilterStoreProvider initialQuery="react" initialTags={["typescript"]}>
  <DashboardFilters />
  <DashboardContent />
</FilterStoreProvider>
```

Aynı sayfada iki bağımsız filtre paneli gerekiyorsa, her biri kendi `FilterStoreProvider` instance'ına sahip olur - state paylaşılmaz.

## Ne Zaman Kullanmalı?

Bu pattern her Zustand store'u için gerekli değil. Gerçekten global olan state'ler için standart `create()` yeterlidir; Context + store pattern'i ekstra boilerplate getirir ve yalnızca encapsulation ihtiyacı olduğunda tercih edilmelidir.

**Global store kullan:**

- Kullanıcı authentication state - tüm uygulama boyunca tek kaynak
- Tema tercihi - nadir değişir, her yerde erişilmeli
- Dil seçimi - uygulama genelinde tutarlı olmalı

**Context + Zustand pattern'i kullan:**

- Dashboard filtre state'i - yalnızca `/dashboard` rotasında gerekli
- Modal içi form state - modal kapanınca dispose edilmeli
- Multi-instance bileşenler - aynı sayfada birden fazla kullanılabilir
- Prop'lardan başlatılması gereken state'ler

[ViraStack Next.js Boilerplate](https://github.com/virastack/nextjs-boilerplate)'i geliştirirken bu pattern'i sıkça kullandım. Dashboard filtreleri, multi-step form state'leri ve panel widget'ları - hepsi kendi Context'li Zustand store'larına sahip. Global store yalnızca kullanıcı oturumu ve tema için kullanılıyor; geri kalan her şey encapsulated. Bu yaklaşım, rotalar arası geçişlerde state'in otomatik temizlenmesini ve her feature'ın izole test edilebilmesini sağladı.

---

## Kaynaklar

- [Dominik Dorfmeister - Zustand and React Context](https://tkdodo.eu/blog/zustand-and-react-context)
