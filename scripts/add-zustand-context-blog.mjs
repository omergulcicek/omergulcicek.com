import { createClient } from "@supabase/supabase-js"

function readRequiredEnv(name) {
	const value = process.env[name]

	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`)
	}

	return value
}

const blogPost = {
	slug: "/zustand-react-context",
	title: "Zustand ve React Context - Kapsüllü State Yönetimi",
	description:
		"Global Zustand store'larının sınırlamalarını aşmak için React Context ile entegrasyonu ve kapsüllü state yönetimi.",
	content: `[React State Yönetim Mimarisi](/blog/react-state-yonetim-mimarisi) yazısında global UI state'leri için Zustand'ı önerdim. Ancak global store'ların üç temel sınırlaması var: prop'lardan ilk değer verememe, test karmaşıklığı ve yeniden kullanılabilir bileşenler için uygunsuzluk. Bu sorunların çözümü basit ama etkili - React Context.

## Sorun: Global Store Sınırları

Zustand store'ları React bileşen yaşam döngüsü dışında oluşturulur. Bu üç soruna yol açar:

İlk olarak, store'u bir prop'tan gelen değerle başlatamayız. Varsayılan bir değerle store'u yaratıp ardından \`useEffect\` ile senkronize etmek zorunda kalırız. Bu hem gereksiz bir re-render'a hem de "ilk değer" yerine "senkronizasyon" mantığına neden olur.

İkinci olarak, test yazmak karmaşıklaşır. Global store her test arasında sıfırlanmalı, mock'lanmalı veya temizlenmelidir. Store bileşen ağacına bağlı olsaydı, her test izole bir örnek kullanabilirdi.

Üçüncü olarak, yeniden kullanılabilir bileşenler için uygunsuzluk. Bir sayfada aynı bileşeni birden fazla kullanmak istediğinizde, global store tüm örneklerin state'ini paylaşır. Örneğin bir seçim listesi bileşeni geliştirdiğinizde, sayfada iki ayrı liste olduğunda ikisi de aynı seçimleri paylaşır - ki bu istenen davranış değildir.

## Çözüm: Context ile Kapsülleme

React Context burada state yönetimi aracı olarak değil, store örneğini paylaşmak için kullanılır. Store değerlerini Context'e koymuyoruz; store'un kendisini koyuyoruz. Context statik kalır, render optimizasyonları ise Zustand'ın kendi abonelik sistemi üzerinden gerçekleşir.

\`\`\`typescript
import { createStore, useStore } from "zustand"

const BearStoreContext = React.createContext(null)

const BearStoreProvider = ({ children, initialBears }) => {
  const [store] = React.useState(() =>
    createStore((set) => ({
      bears: initialBears,
      actions: {
        increasePopulation: (by) =>
          set((state) => ({ bears: state.bears + by })),
        removeAllBears: () => set({ bears: 0 })
      }
    }))
  )

  return (
    <BearStoreContext.Provider value={store}>
      {children}
    </BearStoreContext.Provider>
  )
}
\`\`\`

Burada \`createStore\` kullanıyoruz - hook yerine ham store döndürür. Store yaratımını \`useState\` başlatıcı fonksiyonunda yapıyoruz; böylece yalnızca bir kez çalışır ve \`initialBears\` prop'unu doğrudan kapatabilir. Store örneğini sade bir Context'e veriyoruz.

Tüketim tarafında Context'ten store'u alıp Zustand'ın \`useStore\` hook'una geçiriyoruz:

\`\`\`typescript
const useBearStore = (selector) => {
  const store = React.useContext(BearStoreContext)
  
  if (!store) {
    throw new Error("Missing BearStoreProvider")
  }
  
  return useStore(store, selector)
}

export const useBears = () => useBearStore((state) => state.bears)
\`\`\`

## Ne Zaman Kullanmalı?

Bu pattern her Zustand store'u için gerekli değil. Global, tekil ve uygulama genelinde paylaşılan state'ler (tema, dil tercihi, kullanıcı oturumu) için klasik global store yeterlidir.

Context ile kapsülleme şu durumlarda faydalıdır: Bileşen ağacının bir alt bölümünde yaşayan state'ler, rota bazlı state'ler (dashboard filtreleri yalnızca dashboard rotasında gerekli), yeniden kullanılabilir bileşenlerin iç state'leri ve prop'lardan başlatılması gereken store'lar.

Kişisel projelerimdeki kullanımlarıma baktığımda, global Zustand store'larından çok bu kapsüllü pattern'i tercih ettiğimi fark ettim. Çünkü çoğu durumda state gerçekten uygulama genelinde değil, belirli bir özellik veya rota kapsamında yaşıyor.

---

Bu yaklaşımı ve detaylarını [TkDodo'nun yazısında](https://tkdodo.eu/blog/zustand-and-react-context) bulabilirsiniz. Zustand'ın basitliğini korurken, kapsülleme ve yeniden kullanılabilirlik kazandırıyor.`,
	category: "technical",
	tags: ["React", "Zustand", "TypeScript"],
	locale: "tr",
	medium_url: null,
	interactive: false,
	featured: false,
	published: false,
	published_at: "2026-07-07T12:00:00.000Z",
	og_image_path: null,
	series: null,
	series_order: null
}

async function main() {
	const supabaseUrl =
		process.env.SUPABASE_URL ??
		process.env.VITE_SUPABASE_URL ??
		readRequiredEnv("SUPABASE_URL")
	const serviceRoleKey = readRequiredEnv("SUPABASE_SERVICE_ROLE_KEY")

	const supabase = createClient(supabaseUrl, serviceRoleKey, {
		auth: {
			autoRefreshToken: false,
			persistSession: false
		}
	})

	const { error } = await supabase.from("blog_posts").upsert([blogPost], {
		onConflict: "slug"
	})

	if (error) {
		throw new Error(`Failed to add blog post: ${error.message}`)
	}

	console.log(`✅ Successfully added blog post: ${blogPost.title}`)
	console.log(`   Slug: ${blogPost.slug}`)
	console.log(`   Published: ${blogPost.published}`)
}

main().catch((error) => {
	console.error(error instanceof Error ? error.message : error)
	process.exit(1)
})
