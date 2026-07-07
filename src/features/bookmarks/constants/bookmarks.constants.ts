import type {
	Bookmark,
	BookmarkCategoryId,
	BookmarkSort,
	LibraryBookmarkSort,
	MediaRatingBookmarkSort
} from "@/features/bookmarks/types/bookmarks.types"
import {
	BOOKMARK_CATEGORY_IDS,
	LIBRARY_BOOKMARK_SORTS,
	MEDIA_RATING_BOOKMARK_SORTS
} from "@/features/bookmarks/types/bookmarks.types"

export type BookmarkCategory = {
	id: BookmarkCategoryId
	sortOrder: number
	title: string
	description: string
	accent: string
}

export const DEFAULT_BOOKMARK_CATEGORY_ID = "frontend" satisfies BookmarkCategoryId

export { BOOKMARK_CATEGORY_IDS }

export const BOOKMARK_CATEGORIES: BookmarkCategory[] = [
	{
		id: "blog",
		sortOrder: 1,
		title: "Blog",
		description: "Günlük takip ettiğim bloglar",
		accent: "oklch(0.70 0.19 45)"
	},
	{
		id: "frontend",
		sortOrder: 2,
		title: "Frontend",
		description: "npm paketleri ve kütüphaneler",
		accent: "oklch(0.62 0.19 300)"
	},
	{
		id: "library",
		sortOrder: 3,
		title: "Kitaplık",
		description: "Kitaplarım ve okuduğum kitaplar",
		accent: "oklch(0.75 0.15 85)"
	},
	{
		id: "media",
		sortOrder: 4,
		title: "Medya",
		description: "Film, dizi ve videolar",
		accent: "oklch(0.65 0.20 15)"
	}
]

function bookmarkImage(id: string) {
	return `/img/bookmarks/${id}.webp`
}

export const BOOKMARKS: Bookmark[] = [
	{
			id: "blog-addy-osmani-com-blog",
			title: "AddyOsmani.com",
			url: "https://addyosmani.com/blog/",
			imageUrl: bookmarkImage("blog-addy-osmani-com-blog"),
			description: "Google'da Chrome mühendisi; performans, JavaScript ve web mühendisliği yazıları.",
			categoryId: "blog",
			tags: ["Kişi"]
		},
	{
			id: "blog-ishadeed-com-articles",
			title: "Ahmad Shadeed",
			url: "https://ishadeed.com/articles/",
			imageUrl: bookmarkImage("blog-ishadeed-com-articles"),
			description: "CSS uzmanı; modern CSS, layout ve görsel açıklamalı derinlemesine makaleler.",
			categoryId: "blog",
			tags: ["Kişi"]
		},
	{
			id: "blog-anthropic-com-research",
			title: "Anthropic Research",
			url: "https://www.anthropic.com/research",
			imageUrl: bookmarkImage("blog-anthropic-com-research"),
			description: "Anthropic'in araştırma sayfası; AI modelleri, güvenlik ve teknik duyurular.",
			categoryId: "blog",
			tags: ["Kurum"]
		},
	{
			id: "blog-builder-io-blog",
			title: "Builder.io",
			url: "https://www.builder.io/blog",
			imageUrl: bookmarkImage("blog-builder-io-blog"),
			description: "Builder.io resmi blogu; görsel geliştirme, headless CMS ve frontend mimarisi.",
			categoryId: "blog",
			tags: ["Kurum"]
		},
	{
			id: "blog-css-irl-info",
			title: "CSS { In Real Life }",
			url: "https://css-irl.info/",
			imageUrl: bookmarkImage("blog-css-irl-info"),
			description: "Michelle Barker'ın blogu; pratik CSS, layout ve erişilebilirlik yazıları.",
			categoryId: "blog",
			tags: ["Kişi"]
		},
	{
			id: "blog-css-tricks-com",
			title: "CSS-Tricks",
			url: "https://css-tricks.com/",
			imageUrl: bookmarkImage("blog-css-tricks-com"),
			description: "Frontend ve CSS odaklı rehberler, ipuçları ve teknik makaleler.",
			categoryId: "blog",
			tags: ["Yayın"]
		},
	{
			id: "blog-daron-blog",
			title: "Daron Blog",
			url: "https://daron.blog/",
			imageUrl: bookmarkImage("blog-daron-blog"),
			description: "AWS Serverless Hero Daron Yöndem; bulut, serverless ve .NET yazıları.",
			categoryId: "blog",
			tags: ["Kişi"]
		},
	{
			id: "blog-fatihhayrioglu-com",
			title: "Fatih Hayrioğlu",
			url: "https://fatihhayrioglu.com/",
			imageUrl: bookmarkImage("blog-fatihhayrioglu-com"),
			description: "Frontend geliştirici; Türkçe JavaScript, CSS ve web teknolojileri yazıları.",
			categoryId: "blog",
			tags: ["Kişi"]
		},
	{
			id: "blog-raindrop-io-ahmetsehacar",
			title: "Ahmet Seha Acar",
			url: "https://raindrop.io/ahmetsehacar",
			imageUrl: bookmarkImage("blog-raindrop-io-ahmetsehacar"),
			description: "Raindrop arşivi; yazılım ve teknoloji odaklı paylaşılan link koleksiyonu.",
			categoryId: "blog",
			tags: ["Kişi"]
		},
	{
			id: "blog-jakub-kr",
			title: "Jakub Krehel",
			url: "https://jakub.kr/",
			imageUrl: bookmarkImage("blog-jakub-kr"),
			description: "Design engineer; arayüz detayları, animasyon ve etkileşim tasarımı.",
			categoryId: "blog",
			tags: ["Kişi"]
		},
	{
			id: "blog-medium-com-kodcular",
			title: "Kodcular",
			url: "https://medium.com/kodcular",
			imageUrl: bookmarkImage("blog-medium-com-kodcular"),
			description: "Medium yayını; Türkçe yazılım geliştirme ve teknoloji makaleleri.",
			categoryId: "blog",
			tags: ["Yayın"]
		},
	{
			id: "blog-nextradar-dev-content-nextjs",
			title: "NextRadar",
			url: "https://nextradar.dev/content/nextjs",
			imageUrl: bookmarkImage("blog-nextradar-dev-content-nextjs"),
			description: "Next.js ekosisteminden haberler, kaynaklar ve içerik derlemesi.",
			categoryId: "blog",
			tags: ["Yayın"]
		},
	{
			id: "blog-smashingmagazine-com-articles",
			title: "Smashing Magazine",
			url: "https://www.smashingmagazine.com/articles/",
			imageUrl: bookmarkImage("blog-smashingmagazine-com-articles"),
			description: "Web tasarım ve frontend için derinlemesine makaleler ve rehberler.",
			categoryId: "blog",
			tags: ["Yayın"]
		},
	{
			id: "blog-taniarascia-com-blog",
			title: "Tania Rascia",
			url: "https://www.taniarascia.com/blog/",
			imageUrl: bookmarkImage("blog-taniarascia-com-blog"),
			description: "Yazılım geliştirici; JavaScript, React ve web temelleri öğreticileri.",
			categoryId: "blog",
			tags: ["Kişi"]
		},
	{
			id: "blog-tidewave-net-categories-nextjs",
			title: "Tide Wave",
			url: "https://tidewave.net/categories/nextjs",
			imageUrl: bookmarkImage("blog-tidewave-net-categories-nextjs"),
			description: "Next.js odaklı newsletter; framework haberleri, rehberler ve kaynaklar.",
			categoryId: "blog",
			tags: ["Yayın"]
		},
	{
			id: "blog-tkdodo-eu-blog-all",
			title: "TkDodo",
			url: "https://tkdodo.eu/blog/all",
			imageUrl: bookmarkImage("blog-tkdodo-eu-blog-all"),
			description: "TanStack Query maintainer'ı; React Query ve modern frontend yazıları.",
			categoryId: "blog",
			tags: ["Kişi"]
		},
	{
			id: "blog-medium-com-turkiye",
			title: "Türkçe Yayın",
			url: "https://medium.com/t%C3%BCrkiye",
			imageUrl: bookmarkImage("blog-medium-com-turkiye"),
			description: "Medium Türkiye; Türkçe teknoloji, kültür ve güncel konu yazıları.",
			categoryId: "blog",
			tags: ["Yayın"]
		},
	{
			id: "blog-una-im",
			title: "Una Kravets",
			url: "https://una.im/",
			imageUrl: bookmarkImage("blog-una-im"),
			description: "UI/CSS uzmanı; design systems, animasyon ve modern CSS deneyleri.",
			categoryId: "blog",
			tags: ["Kişi"]
		},
	{
			id: "blog-upstash-com-blog",
			title: "Upstash Blog",
			url: "https://upstash.com/blog",
			imageUrl: bookmarkImage("blog-upstash-com-blog"),
			description: "Upstash resmi blogu; serverless Redis, Kafka ve edge backend rehberleri.",
			categoryId: "blog",
			tags: ["Kurum"]
		},
	{
			id: "frontend-evilcharts-com-docs",
			title: "Evil Charts",
			url: "https://evilcharts.com/docs",
			imageUrl: bookmarkImage("frontend-evilcharts-com-docs"),
			description: "shadcn + Recharts grafik bileşenleri",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-ui-bklit-com",
			title: "Bklit UI",
			url: "https://ui.bklit.com/",
			imageUrl: bookmarkImage("frontend-ui-bklit-com"),
			description: "shadcn tabanlı grafik bileşenleri",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-transitions-dev",
			title: "Transitions.dev",
			url: "https://transitions.dev/",
			imageUrl: bookmarkImage("frontend-transitions-dev"),
			description: "Kopyala-yapıştır web geçiş animasyonları",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-emailmd-dev",
			title: "Email.md",
			url: "https://www.emailmd.dev/",
			imageUrl: bookmarkImage("frontend-emailmd-dev"),
			description: "Markdown'dan e-posta HTML'i",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-printer-animation-vercel-app",
			title: "Printer Animation",
			url: "https://printer-animation.vercel.app/",
			imageUrl: bookmarkImage("frontend-printer-animation-vercel-app"),
			description: "Yazıcı animasyon demosu",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-3dsvg-design",
			title: "3dsvg",
			url: "https://3dsvg.design/",
			imageUrl: bookmarkImage("frontend-3dsvg-design"),
			description: "SVG'den 3D nesne oluşturma",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-data-table-openstatus-dev",
			title: "openstatus",
			url: "https://data-table.openstatus.dev/",
			imageUrl: bookmarkImage("frontend-data-table-openstatus-dev"),
			description: "Filtrelenebilir React data table",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-thesvg-org",
			title: "theSVG",
			url: "https://www.thesvg.org/",
			imageUrl: bookmarkImage("frontend-thesvg-org"),
			description: "Marka SVG ikon kütüphanesi",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-iocombats-com",
			title: "IO Combats",
			url: "https://iocombats.com/",
			imageUrl: bookmarkImage("frontend-iocombats-com"),
			description: "Frontend pratik ve mülakat platformu",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-spell-sh",
			title: "Spell UI",
			url: "https://spell.sh/",
			imageUrl: bookmarkImage("frontend-spell-sh"),
			description: "React + Tailwind UI bileşenleri",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-favicon-io",
			title: "Favicon.io",
			url: "https://favicon.io/",
			imageUrl: bookmarkImage("frontend-favicon-io"),
			description: "Ücretsiz favicon oluşturucu",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-blobmaker-app",
			title: "Blobmaker",
			url: "https://www.blobmaker.app/",
			imageUrl: bookmarkImage("frontend-blobmaker-app"),
			description: "Organik SVG blob üretici",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-repostars-dev",
			title: "RepoStars",
			url: "https://www.repostars.dev/",
			imageUrl: bookmarkImage("frontend-repostars-dev"),
			description: "GitHub yıldız geçmişi grafikleri",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-npmjs-com-package-react-use-wizard",
			title: "react-use-wizard",
			url: "https://www.npmjs.com/package/react-use-wizard",
			imageUrl: bookmarkImage("frontend-npmjs-com-package-react-use-wizard"),
			description: "Çok adımlı form yönetimi",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-npmjs-com-package-react-grab",
			title: "react-grab",
			url: "https://www.npmjs.com/package/react-grab",
			imageUrl: bookmarkImage("frontend-npmjs-com-package-react-grab"),
			description: "AI agent'lara bağlam seçme",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-markdown-new",
			title: "markdown.new",
			url: "https://markdown.new/",
			imageUrl: bookmarkImage("frontend-markdown-new"),
			description: "URL'den AI dostu Markdown",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-sileo-aaryan-design",
			title: "sileo",
			url: "https://sileo.aaryan.design/",
			imageUrl: bookmarkImage("frontend-sileo-aaryan-design"),
			description: "Animasyonlu toast bildirimleri",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-gitingest-com",
			title: "Gitingest",
			url: "https://gitingest.com/",
			imageUrl: bookmarkImage("frontend-gitingest-com"),
			description: "GitHub repo'sunu metne çevirme",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-squoosh-app",
			title: "Squoosh",
			url: "https://squoosh.app/",
			imageUrl: bookmarkImage("frontend-squoosh-app"),
			description: "Tarayıcıda görsel sıkıştırma",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-creative-tim-com-ui",
			title: "Creative Tim UI",
			url: "https://www.creative-tim.com/ui",
			imageUrl: bookmarkImage("frontend-creative-tim-com-ui"),
			description: "shadcn/ui blok ve şablonları",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-animateicons-in",
			title: "AnimateIcons",
			url: "https://animateicons.in/",
			imageUrl: bookmarkImage("frontend-animateicons-in"),
			description: "Animasyonlu React ikonları",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-moondream-ai",
			title: "Moondream",
			url: "https://moondream.ai/",
			imageUrl: bookmarkImage("frontend-moondream-ai"),
			description: "Hızlı görsel AI modeli",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-squircle-art",
			title: "squircle.art",
			url: "https://www.squircle.art/",
			imageUrl: bookmarkImage("frontend-squircle-art"),
			description: "CSS köşe şekli oluşturucu",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-mapcn-dev",
			title: "mapcn",
			url: "https://www.mapcn.dev/",
			imageUrl: bookmarkImage("frontend-mapcn-dev"),
			description: "shadcn harita bileşenleri",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-lucide-animated-com",
			title: "lucide-animated",
			url: "https://lucide-animated.com/",
			imageUrl: bookmarkImage("frontend-lucide-animated-com"),
			description: "Animasyonlu Lucide ikonları",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-grubersjoe-github-io-react-github-calendar",
			title: "react-github-calendar",
			url: "https://grubersjoe.github.io/react-github-calendar/#/?user=omergulcicek",
			imageUrl: bookmarkImage("frontend-grubersjoe-github-io-react-github-calendar"),
			description: "GitHub katkı takvimi",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-squircle-style",
			title: "squircle.style",
			url: "https://www.squircle.style/",
			imageUrl: bookmarkImage("frontend-squircle-style"),
			description: "Squircle köşe önizleme aracı",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-revola-sameerjs-com",
			title: "Revola",
			url: "https://revola.sameerjs.com/",
			imageUrl: bookmarkImage("frontend-revola-sameerjs-com"),
			description: "Mobilde drawer, masaüstünde modal",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-buouui-com-docs-animations-event-calendar",
			title: "BuouUI",
			url: "https://buouui.com/docs/animations/event-calendar",
			imageUrl: bookmarkImage("frontend-buouui-com-docs-animations-event-calendar"),
			description: "Tailwind UI bileşen kütüphanesi",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-better-upload-com",
			title: "Better Upload",
			url: "https://better-upload.com/",
			imageUrl: bookmarkImage("frontend-better-upload-com"),
			description: "React dosya yükleme (S3 uyumlu)",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-square-lndev-me",
			title: "Square UI",
			url: "https://square.lndev.me/",
			imageUrl: bookmarkImage("frontend-square-lndev-me"),
			description: "shadcn/ui layout koleksiyonu",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-npmjs-com-package-tonl",
			title: "tonl",
			url: "https://www.npmjs.com/package/tonl",
			imageUrl: bookmarkImage("frontend-npmjs-com-package-tonl"),
			description: "LLM dostu veri serileştirme",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-logo-dev",
			title: "Logo API",
			url: "https://www.logo.dev/",
			imageUrl: bookmarkImage("frontend-logo-dev"),
			description: "Şirket logoları API'si",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-bansal-io-pattern-css",
			title: "pattern.css",
			url: "https://bansal.io/pattern-css",
			imageUrl: bookmarkImage("frontend-bansal-io-pattern-css"),
			description: "CSS arka plan desenleri",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-shadcn-image-cropper-vercel-app",
			title: "Image cropper",
			url: "https://shadcn-image-cropper.vercel.app/",
			imageUrl: bookmarkImage("frontend-shadcn-image-cropper-vercel-app"),
			description: "shadcn görsel kırpma aracı",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-wigggle-ui-vercel-app",
			title: "Wigggle UI",
			url: "https://wigggle-ui.vercel.app/",
			imageUrl: bookmarkImage("frontend-wigggle-ui-vercel-app"),
			description: "Kopyala-yapıştır widget koleksiyonu",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-big-calendar-vercel-app-month-view",
			title: "Big Calendar",
			url: "https://big-calendar.vercel.app/month-view",
			imageUrl: bookmarkImage("frontend-big-calendar-vercel-app-month-view"),
			description: "Next.js takvim uygulaması",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-design-dev",
			title: "Design.dev",
			url: "https://design.dev/",
			imageUrl: bookmarkImage("frontend-design-dev"),
			description: "Web geliştirme kaynak ve araçları",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-ui-x-junwen-k-dev",
			title: "junwen-k/ui-x",
			url: "https://ui-x.junwen-k.dev/",
			imageUrl: bookmarkImage("frontend-ui-x-junwen-k-dev"),
			description: "Kopyala-yapıştır UI bileşenleri",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-ui-spectrumhq-in",
			title: "Spectrum UI",
			url: "https://ui.spectrumhq.in/",
			imageUrl: bookmarkImage("frontend-ui-spectrumhq-in"),
			description: "Tailwind React bileşen kütüphanesi",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-shadcn-builder-com",
			title: "Shadcn Builder",
			url: "https://www.shadcn-builder.com/",
			imageUrl: bookmarkImage("frontend-shadcn-builder-com"),
			description: "shadcn form oluşturucu",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-base-ui-com-react-overview-quick-start",
			title: "Base UI",
			url: "https://base-ui.com/react/overview/quick-start",
			imageUrl: bookmarkImage("frontend-base-ui-com-react-overview-quick-start"),
			description: "Headless React bileşenleri",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-reactflow-dev",
			title: "React Flow",
			url: "https://reactflow.dev/",
			imageUrl: bookmarkImage("frontend-reactflow-dev"),
			description: "Node tabanlı akış diyagramları",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-tweakcn-com",
			title: "tweakcn",
			url: "https://tweakcn.com/",
			imageUrl: bookmarkImage("frontend-tweakcn-com"),
			description: "shadcn/ui tema editörü",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-codediagram-io",
			title: "Code Diagram",
			url: "https://www.codediagram.io/",
			imageUrl: bookmarkImage("frontend-codediagram-io"),
			description: "VS Code içi diyagram aracı",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-forgeui-in",
			title: "ForgeUI",
			url: "https://forgeui.in/",
			imageUrl: bookmarkImage("frontend-forgeui-in"),
			description: "Erişilebilir açık kaynak UI",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-npmjs-com-package-react-just-parallax",
			title: "react-just-parallax",
			url: "https://www.npmjs.com/package/react-just-parallax",
			imageUrl: bookmarkImage("frontend-npmjs-com-package-react-just-parallax"),
			description: "Scroll/mouse parallax efekti",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-github-com-francoischalifour-medium-zoom",
			title: "medium-zoom",
			url: "https://github.com/francoischalifour/medium-zoom",
			imageUrl: bookmarkImage("frontend-github-com-francoischalifour-medium-zoom"),
			description: "Medium tarzı resim zoom",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-suchi-imharsh-in",
			title: "suchi",
			url: "https://www.suchi.imharsh.in/",
			imageUrl: bookmarkImage("frontend-suchi-imharsh-in"),
			description: "React index/liste bileşeni",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-auto-animate-formkit-com",
			title: "auto-animate",
			url: "https://auto-animate.formkit.com/",
			imageUrl: bookmarkImage("frontend-auto-animate-formkit-com"),
			description: "Otomatik DOM animasyonları",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-zustand-demo-pmnd-rs",
			title: "zustand",
			url: "https://zustand-demo.pmnd.rs/",
			imageUrl: bookmarkImage("frontend-zustand-demo-pmnd-rs"),
			description: "Hafif React state yönetimi",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-imask-js-org",
			title: "imask",
			url: "https://imask.js.org/",
			imageUrl: bookmarkImage("frontend-imask-js-org"),
			description: "Input mask (telefon, tarih)",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-react-svgr-com",
			title: "svgr",
			url: "https://react-svgr.com/",
			imageUrl: bookmarkImage("frontend-react-svgr-com"),
			description: "SVG'yi React bileşenine çevirir",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-npmjs-com-package-clsx",
			title: "clsx",
			url: "https://www.npmjs.com/package/clsx",
			imageUrl: bookmarkImage("frontend-npmjs-com-package-clsx"),
			description: "Koşullu className birleştirme",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-tailwindcss-com",
			title: "tailwindcss",
			url: "https://tailwindcss.com/",
			imageUrl: bookmarkImage("frontend-tailwindcss-com"),
			description: "Sınıf tabanlı CSS framework",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-skeletongenerator-com",
			title: "skeleton-generator",
			url: "https://skeletongenerator.com/",
			imageUrl: bookmarkImage("frontend-skeletongenerator-com"),
			description: "Skeleton loading UI üretici",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-tanstack-com",
			title: "tanstack",
			url: "https://tanstack.com/",
			imageUrl: bookmarkImage("frontend-tanstack-com"),
			description: "Headless React araçları",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-storybook-js-org",
			title: "storybook",
			url: "https://storybook.js.org/",
			imageUrl: bookmarkImage("frontend-storybook-js-org"),
			description: "Bileşen geliştirme ortamı",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-ui-shadcn-com",
			title: "shadcn/ui",
			url: "https://ui.shadcn.com/",
			imageUrl: bookmarkImage("frontend-ui-shadcn-com"),
			description: "Kopyala-yapıştır UI bileşenleri",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-react-hook-form-com",
			title: "react-hook-form",
			url: "https://www.react-hook-form.com/",
			imageUrl: bookmarkImage("frontend-react-hook-form-com"),
			description: "Form validasyon hook'ları",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-platejs-org",
			title: "platejs",
			url: "https://platejs.org/",
			imageUrl: bookmarkImage("frontend-platejs-org"),
			description: "Zengin metin editörü",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-nextjs-org",
			title: "next",
			url: "https://nextjs.org/",
			imageUrl: bookmarkImage("frontend-nextjs-org"),
			description: "Tam yığın React framework",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-motion-dev",
			title: "motion",
			url: "https://motion.dev/",
			imageUrl: bookmarkImage("frontend-motion-dev"),
			description: "React/JS/Vue animasyonları",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-typicode-github-io-husky",
			title: "husky",
			url: "https://typicode.github.io/husky/",
			imageUrl: bookmarkImage("frontend-typicode-github-io-husky"),
			description: "Git hook'larını kolay yönetme",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-github-com-duskload-react-device-detect-tab-readme-ov-file",
			title: "react-device-detect",
			url: "https://github.com/duskload/react-device-detect?tab=readme-ov-file",
			imageUrl: bookmarkImage("frontend-github-com-duskload-react-device-detect-tab-readme-ov-file"),
			description: "Cihaz/tarayıcı tespiti",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-usehooks-ts-com",
			title: "usehooks-ts",
			url: "https://usehooks-ts.com/",
			imageUrl: bookmarkImage("frontend-usehooks-ts-com"),
			description: "Hazır TypeScript React hook'ları",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-react-querybuilder-js-org",
			title: "react-querybuilder",
			url: "https://react-querybuilder.js.org/",
			imageUrl: bookmarkImage("frontend-react-querybuilder-js-org"),
			description: "Filtre/sorgu oluşturucu",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-joren-co-tailwindcss-debug-screens-demo",
			title: "tailwindcss-debug-screens",
			url: "https://www.joren.co/tailwindcss-debug-screens-demo/",
			imageUrl: bookmarkImage("frontend-joren-co-tailwindcss-debug-screens-demo"),
			description: "Breakpoint debug eklentisi",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-react-scan-com",
			title: "react-scan",
			url: "https://react-scan.com/",
			imageUrl: bookmarkImage("frontend-react-scan-com"),
			description: "Yavaş render tespiti",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-cva-style-docs",
			title: "cva",
			url: "https://cva.style/docs",
			imageUrl: bookmarkImage("frontend-cva-style-docs"),
			description: "Tip güvenli CSS variant API",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-tailwind-variants-org",
			title: "tailwind-variants",
			url: "https://www.tailwind-variants.org/",
			imageUrl: bookmarkImage("frontend-tailwind-variants-org"),
			description: "Tailwind variant sistemi",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-trpc-io",
			title: "trpc",
			url: "https://trpc.io/",
			imageUrl: bookmarkImage("frontend-trpc-io"),
			description: "Uçtan uca type-safe API",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-nuqs-47ng-com",
			title: "nuqs",
			url: "https://nuqs.47ng.com/",
			imageUrl: bookmarkImage("frontend-nuqs-47ng-com"),
			description: "URL tabanlı React state",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-cmdk-paco-me",
			title: "cmdk",
			url: "https://cmdk.paco.me/",
			imageUrl: bookmarkImage("frontend-cmdk-paco-me"),
			description: "Komut paleti bileşeni",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-frimousse-liveblocks-io-ref-dailydev",
			title: "frimousse",
			url: "https://frimousse.liveblocks.io/?ref=dailydev",
			imageUrl: bookmarkImage("frontend-frimousse-liveblocks-io-ref-dailydev"),
			description: "Hafif emoji seçici",
			categoryId: "frontend",
			tags: ["npm"]
		},
	{
			id: "frontend-animateicons-vercel-app",
			title: "AnimateIcons",
			url: "https://animateicons.vercel.app/",
			imageUrl: bookmarkImage("frontend-animateicons-vercel-app"),
			description: "Animasyonlu React ikonları",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-21st-dev-home",
			title: "21st.dev",
			url: "https://21st.dev/home",
			imageUrl: bookmarkImage("frontend-21st-dev-home"),
			description: "Topluluk React bileşen kaydı",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-launchmvpfast-com",
			title: "Launch MVP Fast",
			url: "https://www.launchmvpfast.com/",
			imageUrl: bookmarkImage("frontend-launchmvpfast-com"),
			description: "MVP geliştirme hizmeti",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-formcn-dev",
			title: "Formcn",
			url: "https://formcn.dev/",
			imageUrl: bookmarkImage("frontend-formcn-dev"),
			description: "shadcn form builder",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-docusaurus-io",
			title: "Docusaurus",
			url: "https://docusaurus.io/",
			imageUrl: bookmarkImage("frontend-docusaurus-io"),
			description: "Dokümantasyon sitesi oluşturucu",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-shadcn-svelte-extras-com",
			title: "shadcn-svelte-extras",
			url: "https://www.shadcn-svelte-extras.com/",
			imageUrl: bookmarkImage("frontend-shadcn-svelte-extras-com"),
			description: "Svelte shadcn ek bileşenleri",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-cult-ui-com",
			title: "Cult UI",
			url: "https://www.cult-ui.com/",
			imageUrl: bookmarkImage("frontend-cult-ui-com"),
			description: "shadcn blok ve şablonları",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-andreasbm-github-io-web-skills",
			title: "Web Skills",
			url: "https://andreasbm.github.io/web-skills/",
			imageUrl: bookmarkImage("frontend-andreasbm-github-io-web-skills"),
			description: "Web geliştirici beceri haritası",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-fancycomponents-dev-components",
			title: "Fancy Components",
			url: "https://www.fancycomponents.dev/components",
			imageUrl: bookmarkImage("frontend-fancycomponents-dev-components"),
			description: "Etkileşimli React bileşenleri",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-skiper-ui-com",
			title: "Skiper UI",
			url: "https://skiper-ui.com/",
			imageUrl: bookmarkImage("frontend-skiper-ui-com"),
			description: "shadcn için ek bileşenler",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-github-com-birobirobiro-awesome-shadcn-ui",
			title: "awesome-shadcn-ui",
			url: "https://github.com/birobirobiro/awesome-shadcn-ui",
			imageUrl: bookmarkImage("frontend-github-com-birobirobiro-awesome-shadcn-ui"),
			description: "shadcn/ui kaynak listesi",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-frontendchecklist-io",
			title: "Front-End Checklist",
			url: "https://frontendchecklist.io/",
			imageUrl: bookmarkImage("frontend-frontendchecklist-io"),
			description: "Frontend kalite kuralları",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-conventionalcommits-org-en-v1-0-0",
			title: "Conventional Commits",
			url: "https://www.conventionalcommits.org/en/v1.0.0/",
			imageUrl: bookmarkImage("frontend-conventionalcommits-org-en-v1-0-0"),
			description: "Commit mesajı standardı",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-component-party-dev",
			title: "Component Party",
			url: "https://component-party.dev/",
			imageUrl: bookmarkImage("frontend-component-party-dev"),
			description: "Framework bileşen karşılaştırması",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-tailwind-colors-meidev-co",
			title: "Tailwind Colors",
			url: "https://tailwind-colors.meidev.co/",
			imageUrl: bookmarkImage("frontend-tailwind-colors-meidev-co"),
			description: "Tailwind renk paleti aracı",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-tailwindgen-com",
			title: "Tailwind Grid Generator",
			url: "https://www.tailwindgen.com/",
			imageUrl: bookmarkImage("frontend-tailwindgen-com"),
			description: "Tailwind grid oluşturucu",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-shadcn-form-build-vercel-app",
			title: "shadcn Form Builder",
			url: "https://shadcn-form-build.vercel.app/",
			imageUrl: bookmarkImage("frontend-shadcn-form-build-vercel-app"),
			description: "Görsel shadcn form builder",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-originui-com",
			title: "Origin UI",
			url: "https://originui.com/",
			imageUrl: bookmarkImage("frontend-originui-com"),
			description: "Modern UI bileşen kütüphanesi",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-magicui-design",
			title: "Magic UI",
			url: "https://magicui.design/",
			imageUrl: bookmarkImage("frontend-magicui-design"),
			description: "Landing page bileşen ve şablonları",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "frontend-ui-aceternity-com",
			title: "Aceternity UI",
			url: "https://ui.aceternity.com/",
			imageUrl: bookmarkImage("frontend-ui-aceternity-com"),
			description: "Animasyonlu UI bileşenleri",
			categoryId: "frontend",
			tags: ["Siteler"]
		},
	{
			id: "personal-imdb-com-title-tt4154796",
			title: "Avengers Serisi",
			url: "https://www.imdb.com/title/tt4154796/",
			imageUrl: bookmarkImage("personal-imdb-com-title-tt4154796"),
			description: "Süper kahramanların insanlığı korumak için verdiği epik mücadele.",
			imdbRating: "8.4",
			categoryId: "media",
			tags: ["Film"]
		},
	{
			id: "personal-imdb-com-title-tt0468569",
			title: "The Dark Knight",
			url: "https://www.imdb.com/title/tt0468569/",
			imageUrl: bookmarkImage("personal-imdb-com-title-tt0468569"),
			description: "Batman'in Joker'e karşı adalet ve ahlak sorgulayan karanlık mücadelesi.",
			imdbRating: "9.1",
			categoryId: "media",
			tags: ["Film"]
		},
	{
			id: "personal-imdb-com-title-tt7286456",
			title: "Joker",
			url: "https://www.imdb.com/title/tt7286456/",
			imageUrl: bookmarkImage("personal-imdb-com-title-tt7286456"),
			description: "Dışlanmış Arthur Fleck'in Joker'e dönüşümünü anlatan psikolojik dram.",
			imdbRating: "8.3",
			categoryId: "media",
			tags: ["Film"]
		},
	{
			id: "personal-imdb-com-title-tt1831164",
			title: "Leyla ile Mecnun",
			url: "https://www.imdb.com/title/tt1831164/",
			imageUrl: bookmarkImage("personal-imdb-com-title-tt1831164"),
			description: "Kireçburnu'nun absürt ve gerçeküstü maceralarını anlatan durum komedisi.",
			imdbRating: "9.0",
			categoryId: "media",
			tags: ["Dizi"]
		},
	{
			id: "personal-imdb-com-title-tt1475582",
			title: "Sherlock",
			url: "https://www.imdb.com/title/tt1475582/",
			imageUrl: bookmarkImage("personal-imdb-com-title-tt1475582"),
			description: "Sherlock ve Watson'ın karmaşık suçları çözdüğü polisiye.",
			imdbRating: "9.0",
			categoryId: "media",
			tags: ["Dizi"]
		},
	{
			id: "personal-imdb-com-title-tt0167260",
			title: "The Lord of the Rings Serisi",
			url: "https://www.imdb.com/title/tt0167260/",
			imageUrl: bookmarkImage("personal-imdb-com-title-tt0167260"),
			description: "Frodo'nun Tek Yüzük'ü yok etmek için çıktığı destansı yolculuk.",
			imdbRating: "9.0",
			categoryId: "media",
			tags: ["Film"]
		},
	{
			id: "personal-imdb-com-title-tt1795096",
			title: "Behzat Ç.",
			url: "https://www.imdb.com/title/tt1795096/",
			imageUrl: bookmarkImage("personal-imdb-com-title-tt1795096"),
			description: "Behzat Ç. ve ekibinin Ankara suç dünyasıyla tavizsiz mücadelesi.",
			imdbRating: "8.8",
			categoryId: "media",
			tags: ["Dizi"]
		},
	{
			id: "personal-imdb-com-title-tt7920978",
			title: "Şahsiyet",
			url: "https://www.imdb.com/title/tt7920978/",
			imageUrl: bookmarkImage("personal-imdb-com-title-tt7920978"),
			description: "Emekli memurun geçmişiyle hesaplaşırken adaleti kendi eliyle araması.",
			imdbRating: "9.0",
			categoryId: "media",
			tags: ["Dizi"]
		},
	{
			id: "personal-imdb-com-title-tt7949218",
			title: "See",
			url: "https://www.imdb.com/title/tt7949218/",
			imageUrl: bookmarkImage("personal-imdb-com-title-tt7949218"),
			description: "Kör bir dünyada gören ikizlerin doğumuyla sarsılan kabileler arası mücadele.",
			imdbRating: "7.6",
			categoryId: "media",
			tags: ["Dizi"]
		},
	{
			id: "personal-imdb-com-title-tt31323988",
			title: "Mehmed: Fetihler Sultanı",
			url: "https://www.imdb.com/title/tt31323988/",
			imageUrl: bookmarkImage("personal-imdb-com-title-tt31323988"),
			description: "Fatih Sultan Mehmed'in İstanbul fetih hayali ve saray mücadeleleri.",
			imdbRating: "7.9",
			categoryId: "media",
			tags: ["Dizi"]
		},
	{
			id: "personal-imdb-com-title-tt0252488",
			title: "Hababam Sınıfı Sınıfta Kaldı",
			url: "https://www.imdb.com/title/tt0252488/",
			imageUrl: bookmarkImage("personal-imdb-com-title-tt0252488"),
			description: "Sahte diploması ortaya çıkan Hababam Sınıfı'nın yeni öğretmenlerle verdiği efsanevi mücadele.",
			imdbRating: "8.9",
			categoryId: "media",
			tags: ["Film"]
		},
	{
			id: "personal-imdb-com-title-tt10431500",
			title: "Yedinci Koğuştaki Mucize",
			url: "https://www.imdb.com/title/tt10431500/",
			imageUrl: bookmarkImage("personal-imdb-com-title-tt10431500"),
			description: "Haksız yere hapse giren babanın kızıyla olan bağını anlatan duygusal dram.",
			imdbRating: "8.2",
			categoryId: "media",
			tags: ["Film"]
		},
	{
			id: "personal-imdb-com-title-tt6316138",
			title: "Ayla",
			url: "https://www.imdb.com/title/tt6316138/",
			imageUrl: bookmarkImage("personal-imdb-com-title-tt6316138"),
			description: "Kore Savaşı'nda küçük bir kızla kurulan bağın yıllarca süren hikayesini anlatan biyografik dram.",
			imdbRating: "8.2",
			categoryId: "media",
			tags: ["Film"]
		},
	{
			id: "media-youtube--gc2twgghfa",
			title: "Brezilya - Portekiz: Euro 2004",
			url: "https://www.youtube.com/watch?v=-Gc2twGGHFA",
			author: "This Is Football",
			imageUrl: bookmarkImage("media-youtube--gc2twgghfa"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-rs8xja8ctoq",
			title: "Fransa 2018 Dünya Kupası Müziği",
			url: "https://www.youtube.com/watch?v=rs8xJa8ctOQ",
			author: "GLOBAL BUZZ",
			imageUrl: bookmarkImage("media-youtube-rs8xja8ctoq"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-6ey6xucwf0y",
			title: "Aurora - Vitality: IEM Krakow 2026",
			url: "https://www.youtube.com/watch?v=6Ey6xUCWF0Y",
			author: "rootthegamer",
			imageUrl: bookmarkImage("media-youtube-6ey6xucwf0y"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-5x2yp2wm16i",
			title: "Mehmed: Fetihler Sultanı 59. Bölüm",
			url: "https://youtu.be/5X2yp2Wm16I?si=qwuSoZU9fb4g4BlG&t=2067",
			author: "Mehmed: Fetihler Sultanı",
			imageUrl: bookmarkImage("media-youtube-5x2yp2wm16i"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-hvmbmwuheaw",
			title: "You'll Never Walk Alone",
			url: "https://www.youtube.com/watch?v=HVmbMWUhEaw",
			author: "Sky Sports Premier League",
			imageUrl: bookmarkImage("media-youtube-hvmbmwuheaw"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-m22nwszycce",
			title: "Muhammad Ali - George Foreman: Rumble in the Jungle",
			url: "https://www.youtube.com/watch?v=M22nWSzyccE",
			author: "ElTerribleProduction",
			imageUrl: bookmarkImage("media-youtube-m22nwszycce"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-lmwpop3pulg",
			title: "Barcelona - Real Madrid: 2010/2011",
			url: "https://www.youtube.com/watch?v=LmwPop3Pulg",
			author: "LALIGA EA SPORTS",
			imageUrl: bookmarkImage("media-youtube-lmwpop3pulg"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-4rpm6g6odvg",
			title: "Hedef Kızılelma Belgeseli",
			url: "https://www.youtube.com/watch?v=4RPm6g6odVg",
			author: "Baykar Technologies",
			imageUrl: bookmarkImage("media-youtube-4rpm6g6odvg"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-ueec_ebjgfu",
			title: "Akıncı Belgeseli",
			url: "https://www.youtube.com/watch?v=UEec_EbJgfU",
			author: "Baykar Technologies",
			imageUrl: bookmarkImage("media-youtube-ueec_ebjgfu"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-x7158uqk1yi",
			title: "Brezilya - Fransa: 2006 Dünya Kupası",
			url: "https://www.youtube.com/watch?v=X7158uQk1yI",
			author: "FIFA",
			imageUrl: bookmarkImage("media-youtube-x7158uqk1yi"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-u1oivnfpfii",
			title: "Roger Federer - Rafael Nadal: Battle of Surfaces 2007",
			url: "https://www.youtube.com/watch?v=u1oivnfpfII",
			author: "Raz Ols",
			imageUrl: bookmarkImage("media-youtube-u1oivnfpfii"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-81txboyjrjw",
			title: "Habib Nurmagomedov - Conor McGregor: UFC 229",
			url: "https://www.youtube.com/watch?v=81tXbOYJRJw",
			author: "UFC Eurasia",
			imageUrl: bookmarkImage("media-youtube-81txboyjrjw"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-mhsg2m25pzy",
			title: "Roger Federer - Rafael Nadal: Wimbledon 2008 Final",
			url: "https://www.youtube.com/watch?v=mHsg2M25PzY",
			author: "Wimbledon",
			imageUrl: bookmarkImage("media-youtube-mhsg2m25pzy"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-g-swvee9him",
			title: "Eternal Fire - Spirit: BLAST Premier Bounty Final",
			url: "https://www.youtube.com/watch?v=g-swVEE9hiM",
			author: "BLAST Premier",
			imageUrl: bookmarkImage("media-youtube-g-swvee9him"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-uo1chltdryq",
			title: "Türkiye - Arjantin: CS:GO Major Final",
			url: "https://www.youtube.com/watch?v=uo1chlTDrYQ",
			author: "Robert Brown",
			imageUrl: bookmarkImage("media-youtube-uo1chltdryq"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-jqvx5i4cso8",
			title: "XANTARES Nerede?!",
			url: "https://www.youtube.com/watch?v=JqVx5I4CsO8",
			author: "ESL Counter-Strike",
			imageUrl: bookmarkImage("media-youtube-jqvx5i4cso8"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-pxygbwx4dks",
			title: "Teşekkürler CS:GO",
			url: "https://www.youtube.com/watch?v=pXyGBwx4dks",
			author: "Virre CS2",
			imageUrl: bookmarkImage("media-youtube-pxygbwx4dks"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-ijbde6pkw2o",
			title: "Liverpool - Milan: 2005 Şampiyonlar Ligi Finali",
			url: "https://www.youtube.com/watch?v=iJbDE6PKW2o",
			author: "GoalGlory Classics",
			imageUrl: bookmarkImage("media-youtube-ijbde6pkw2o"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "media-youtube-fexzy4evllo",
			title: "Kobe Bryant: 81 Sayı vs Raptors",
			url: "https://www.youtube.com/watch?v=FeXZY4eVLlo",
			author: "NBA",
			imageUrl: bookmarkImage("media-youtube-fexzy4evllo"),
			categoryId: "media",
			tags: ["Youtube"]
		},
	{
			id: "library-osmanli-turkcesi-kilavuzu2-106298",
			title: "Osmanlı Türkçesi Kılavuzu-2",
			url: "https://www.kitapyurdu.com/kitap/osmanli-turkcesi-kilavuzu2/106298.html",
			author: "Hayati Develi",
			imageUrl: bookmarkImage("library-osmanli-turkcesi-kilavuzu2-106298"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-osmanlilar-kulturel-tarih-460636",
			title: "Osmanlılar Kültürel Tarih",
			url: "https://www.kitapyurdu.com/kitap/osmanlilar-kulturel-tarih/460636.html",
			author: "Suraiya Faroqhi",
			translator: "Çağdaş Sümer",
			imageUrl: bookmarkImage("library-osmanlilar-kulturel-tarih-460636"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-avrupanin-fethi-osmanli-cihana-nasil-hukmetti-701864",
			title: "Avrupa'nın Fethi",
			subtitle: "Osmanlı Cihana Nasıl Hükmetti?",
			url: "https://www.kitapyurdu.com/kitap/avrupanin-fethi-osmanli-cihana-nasil-hukmetti/701864.html",
			author: "Gabor Agoston",
			translator: "Kahraman Şakul",
			imageUrl: bookmarkImage("library-avrupanin-fethi-osmanli-cihana-nasil-hukmetti-701864"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-biz-osmanliya-neden-isyan-ettik-arap-gozuyle-osmanli-80245",
			title: "Biz Osmanlı'ya Neden İsyan Ettik?",
			subtitle: "Arap Gözüyle Osmanlı",
			url: "https://www.kitapyurdu.com/kitap/biz-osmanliya-neden-isyan-ettik-arap-gozuyle-osmanli/80245.html",
			author: "Kral Abdullah",
			translator: "Halit Özkan",
			imageUrl: bookmarkImage("library-biz-osmanliya-neden-isyan-ettik-arap-gozuyle-osmanli-80245"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-imparatorun-imgesi-fatih-sultan-mehmedin-kamusal-imaji-ve-imparatorluk-siyaseti-582119",
			title: "İmparator'un İmgesi",
			subtitle: "Fatih Sultan Mehmed'in Kamusal İmajı ve İmparatorluk Siyaseti",
			url: "https://www.kitapyurdu.com/kitap/imparatorun-imgesi-fatih-sultan-mehmedin-kamusal-imaji-ve-imparatorluk-siyaseti/582119.html",
			author: "Gizem Magemizoğlu",
			imageUrl: bookmarkImage("library-imparatorun-imgesi-fatih-sultan-mehmedin-kamusal-imaji-ve-imparatorluk-siyaseti-582119"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-evraki-perisan-selahaddin-eyyubi-fatih-sultan-mehmed-yavuz-sultan-selim-715169",
			title: "Evrak-ı Perîşan",
			subtitle: "Selahaddin Eyyûbî • Fatih Sultan Mehmed • Yavuz Sultan Selim",
			url: "https://www.kitapyurdu.com/kitap/evraki-perisan-selahaddin-eyyubi-fatih-sultan-mehmed-yavuz-sultan-selim-/715169.html",
			author: "Namık Kemal",
			imageUrl: bookmarkImage("library-evraki-perisan-selahaddin-eyyubi-fatih-sultan-mehmed-yavuz-sultan-selim-715169"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-yavuz-sultan-selim-324084",
			title: "Yavuz Sultan Selim",
			url: "https://www.kitapyurdu.com/kitap/yavuz-sultan-selim/324084.html",
			author: "Namık Kemal",
			imageUrl: bookmarkImage("library-yavuz-sultan-selim-324084"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-muhtesem-suleyman-415302",
			title: "Muhteşem Süleyman",
			url: "https://www.kitapyurdu.com/kitap/muhtesem-suleyman/415302.html",
			author: "Prof. Dr. Feridun M. Emecen",
			imageUrl: bookmarkImage("library-muhtesem-suleyman-415302"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-bektasilik-710982",
			title: "Bektaşilik",
			url: "https://www.kitapyurdu.com/kitap/bektasilik/710982.html",
			author: "Ahmet Yaşar Ocak",
			imageUrl: bookmarkImage("library-bektasilik-710982"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-futuhul-gayb-alemlerin-kesfi-487377",
			title: "Fütuhul Gayb",
			subtitle: "Alemlerin Keşfi",
			url: "https://www.kitapyurdu.com/kitap/futuhul-gayb-alemlerin-kesfi/487377.html",
			author: "Seyyid Abdülkadir Geylani",
			translator: "Mehmet Bilal Yamak",
			imageUrl: bookmarkImage("library-futuhul-gayb-alemlerin-kesfi-487377"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-uyur-idik-uyardilar-turk-sufizminin-izleri-uzerine-anadolu-halk-islami-arastirmalari-620987",
			title: "Uyur İdik Uyardılar",
			subtitle: "Türk Sufizminin İzleri Üzerine Anadolu Halk İslamı Araştırmaları",
			url: "https://www.kitapyurdu.com/kitap/uyur-idik-uyardilar-turk-sufizminin-izleri-uzerine-anadolu-halk-islami-arastirmalari/620987.html",
			author: "Irene Melikoff",
			translator: "Başak Bıçak",
			imageUrl: bookmarkImage("library-uyur-idik-uyardilar-turk-sufizminin-izleri-uzerine-anadolu-halk-islami-arastirmalari-620987"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-bu-dunya-icin-yaratilmadin-641708",
			title: "Bu Dünya İçin Yaratılmadın",
			url: "https://www.kitapyurdu.com/kitap/bu-dunya-icin-yaratilmadin/641708.html",
			author: "Seyyid Abdülkadir Geylani",
			imageUrl: bookmarkImage("library-bu-dunya-icin-yaratilmadin-641708"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-son-osmanli-sarayinda-gorduklerim-sultan-mehmed-resad-han-donemi-721477",
			title: "Son Osmanlı Sarayında Gördüklerim",
			subtitle: "Sultan Mehmed Reşad Han Dönemi",
			url: "https://www.kitapyurdu.com/kitap/son-osmanli-sarayinda-gorduklerim-sultan-mehmed-resad-han-donemi/721477.html",
			author: "Lütfi Simavi",
			imageUrl: bookmarkImage("library-son-osmanli-sarayinda-gorduklerim-sultan-mehmed-resad-han-donemi-721477"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-itikadin-muhafizlari-osmanlilar-689752",
			title: "İtikadın Muhafızları Osmanlılar",
			url: "https://www.kitapyurdu.com/kitap/itikadin-muhafizlari-osmanlilar/689752.html",
			author: "Osman Doğan · Selman Soydemir",
			imageUrl: bookmarkImage("library-itikadin-muhafizlari-osmanlilar-689752"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-iskendersezar-paralel-hayatlar-karton-kapak-371513",
			title: "İskender-Sezar Paralel Hayatlar",
			url: "https://www.kitapyurdu.com/kitap/iskendersezar-paralel-hayatlar-karton-kapak/371513.html",
			author: "Plutarkhos",
			translator: "İo Çokona",
			imageUrl: bookmarkImage("library-iskendersezar-paralel-hayatlar-karton-kapak-371513"),
			categoryId: "library",
			tags: ["Dünya Tarihi"]
		},
	{
			id: "library-spqr-antik-roma-tarihi-449296",
			title: "SPQR",
			subtitle: "Antik Roma Tarihi",
			url: "https://www.kitapyurdu.com/kitap/spqr-antik-roma-tarihi-/449296.html",
			author: "Mary Beard",
			translator: "İrem Sağlamer",
			imageUrl: bookmarkImage("library-spqr-antik-roma-tarihi-449296"),
			categoryId: "library",
			tags: ["Dünya Tarihi"]
		},
	{
			id: "library-zeytindagi-gunumuz-turkcesiyle-668164",
			title: "Zeytindağı",
			url: "https://www.kitapyurdu.com/kitap/zeytindagi-gunumuz-turkcesiyle/668164.html",
			author: "Falih Rıfkı Atay",
			imageUrl: bookmarkImage("library-zeytindagi-gunumuz-turkcesiyle-668164"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-ataturkun-hatiralari-524510",
			title: "Atatürk'ün Hatıraları",
			url: "https://www.kitapyurdu.com/kitap/ataturkun-hatiralari-/524510.html",
			author: "Falih Rıfkı Atay",
			imageUrl: bookmarkImage("library-ataturkun-hatiralari-524510"),
			categoryId: "library",
			tags: ["Cumhuriyet"]
		},
	{
			id: "library-sair-fatih-avni-150920",
			title: "Şair Fatih",
			subtitle: "Avni",
			url: "https://www.kitapyurdu.com/kitap/sair-fatih-avni/150920.html",
			author: "Prof. Dr. İskender Pala",
			imageUrl: bookmarkImage("library-sair-fatih-avni-150920"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-surname-bir-osmanli-macerasi-631391",
			title: "Surname",
			subtitle: "Bir Osmanlı Macerası",
			url: "https://www.kitapyurdu.com/kitap/surname-bir-osmanli-macerasi/631391.html",
			author: "Prof. Dr. İskender Pala",
			imageUrl: bookmarkImage("library-surname-bir-osmanli-macerasi-631391"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-kutulamare-kahramani-halil-kut-pasanin-hatiralari-374330",
			title: "Kutü'l-Amare Kahramanı",
			subtitle: "Halil Kut Paşa'nın Hatıraları",
			url: "https://www.kitapyurdu.com/kitap/kutulamare-kahramani-halil-kut-pasanin-hatiralari/374330.html",
			author: "Halil Kut",
			imageUrl: bookmarkImage("library-kutulamare-kahramani-halil-kut-pasanin-hatiralari-374330"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-osmanli-turkcesi-kilavuzu1-106297",
			title: "Osmanlı Türkçesi Kılavuzu-1",
			url: "https://www.kitapyurdu.com/kitap/osmanli-turkcesi-kilavuzu1/106297.html",
			author: "Hayati Develi",
			imageUrl: bookmarkImage("library-osmanli-turkcesi-kilavuzu1-106297"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-yavuz-sultan-selim-401713",
			title: "Yavuz Sultan Selim",
			url: "https://www.kitapyurdu.com/kitap/yavuz-sultan-selim/401713.html",
			author: "Prof. Dr. Feridun M. Emecen",
			imageUrl: bookmarkImage("library-yavuz-sultan-selim-401713"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-fetih-ve-kiyamet-1453-595100",
			title: "Fetih ve Kıyamet 1453",
			url: "https://www.kitapyurdu.com/kitap/fetih-ve-kiyamet-1453/595100.html",
			author: "Prof. Dr. Feridun M. Emecen",
			imageUrl: bookmarkImage("library-fetih-ve-kiyamet-1453-595100"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-yeni-roma-dogudaki-roma-imparatorlugu-395700-642279",
			title: "Yeni Roma",
			subtitle: "Doğu'daki Roma İmparatorluğu (395-700)",
			url: "https://www.kitapyurdu.com/kitap/yeni-roma-dogudaki-roma-imparatorlugu-395700/642279.html",
			author: "Paul Stephenson",
			translator: "Bahattin Bayram",
			imageUrl: bookmarkImage("library-yeni-roma-dogudaki-roma-imparatorlugu-395700-642279"),
			categoryId: "library",
			tags: ["Dünya Tarihi"]
		},
	{
			id: "library-buyuk-konstantin-yenilmez-imparator-705347",
			title: "Büyük Konstantin",
			subtitle: "Yenilmez İmparator",
			url: "https://www.kitapyurdu.com/kitap/buyuk-konstantin-yenilmez-imparator/705347.html",
			author: "Paul Stephenson",
			translator: "Gürkan Ergin",
			imageUrl: bookmarkImage("library-buyuk-konstantin-yenilmez-imparator-705347"),
			categoryId: "library",
			tags: ["Dünya Tarihi"]
		},
	{
			id: "library-antik-misirin-peygamberleri-hz-idris-hz-yusuf-hz-musa-701428",
			title: "Antik Mısır'ın Peygamberleri",
			subtitle: "Hz. İdris, Hz. Yusuf, Hz. Musa",
			url: "https://www.kitapyurdu.com/kitap/antik-misirin-peygamberleri-hz-idris-hz-yusuf-hz-musa/701428.html",
			author: "Bülent Şahin Erdeğer",
			imageUrl: bookmarkImage("library-antik-misirin-peygamberleri-hz-idris-hz-yusuf-hz-musa-701428"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-fihi-ma-fih-mevlananin-konusma-ve-sohbetleri-461625",
			title: "Fihi Ma Fih",
			subtitle: "Mevlana'nın Konuşma ve Sohbetleri",
			url: "https://www.kitapyurdu.com/kitap/fihi-ma-fih-mevlananin-konusma-ve-sohbetleri/461625.html",
			author: "Mevlana",
			translator: "Cemal Aydın",
			imageUrl: bookmarkImage("library-fihi-ma-fih-mevlananin-konusma-ve-sohbetleri-461625"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-sultanlar-ve-imparatorlar-bir-bizanslinin-gozunden-osmanlilar-691634",
			title: "Sultanlar ve İmparatorlar",
			subtitle: "Bir Bizanslının Gözünden Osmanlılar",
			url: "https://www.kitapyurdu.com/kitap/sultanlar-ve-imparatorlar-bir-bizanslinin-gozunden-osmanlilar/691634.html",
			author: "Hüseyin Uçar",
			imageUrl: bookmarkImage("library-sultanlar-ve-imparatorlar-bir-bizanslinin-gozunden-osmanlilar-691634"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-dersaadette-bayram-sabahlari-509826",
			title: "Dersaadet'te Bayram Sabahları",
			url: "https://www.kitapyurdu.com/kitap/dersaadette-bayram-sabahlari/509826.html",
			author: "Dursun Gürlek",
			imageUrl: bookmarkImage("library-dersaadette-bayram-sabahlari-509826"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-40-pratik-sunnet-599358",
			title: "40 Pratik Sünnet",
			url: "https://www.kitapyurdu.com/kitap/40-pratik-sunnet/599358.html",
			author: "Ali Hammuda",
			translator: "İbrahim Eski",
			imageUrl: bookmarkImage("library-40-pratik-sunnet-599358"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-japon-savas-sanati-busido-396401",
			title: "Japon Savaş Sanatı",
			subtitle: "Buşido",
			url: "https://www.kitapyurdu.com/kitap/japon-savas-sanati-busido/396401.html",
			author: "Inoze Nitobe",
			translator: "Doruk Akyüz",
			imageUrl: bookmarkImage("library-japon-savas-sanati-busido-396401"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-fatih-sultan-mehmed-717193",
			title: "Fatih Sultan Mehmed",
			url: "https://www.kitapyurdu.com/kitap/fatih-sultan-mehmed-/717193.html",
			author: "Prof. Dr. İlber Ortaylı",
			imageUrl: bookmarkImage("library-fatih-sultan-mehmed-717193"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-turke-tapmak-sekuler-din-ve-iki-savas-arasi-kemalizm-471959",
			title: "Türk'e Tapmak",
			subtitle: "Seküler Din ve İki Savaş Arası Kemalizm",
			url: "https://www.kitapyurdu.com/kitap/turke-tapmak-sekuler-din-ve-iki-savas-arasi-kemalizm/471959.html",
			author: "Onur Atalay",
			imageUrl: bookmarkImage("library-turke-tapmak-sekuler-din-ve-iki-savas-arasi-kemalizm-471959"),
			categoryId: "library",
			tags: ["Cumhuriyet"]
		},
	{
			id: "library-cumhuriyetin-tarihi-58230",
			title: "Cumhuriyetin Tarihi",
			url: "https://www.kitapyurdu.com/kitap/cumhuriyetin-tarihi/58230.html",
			author: "Celaleddin Vatandaş",
			imageUrl: bookmarkImage("library-cumhuriyetin-tarihi-58230"),
			categoryId: "library",
			tags: ["Cumhuriyet"]
		},
	{
			id: "library-islam-dusuncesi-551964",
			title: "İslam Düşüncesi",
			url: "https://www.kitapyurdu.com/kitap/islam-dusuncesi/551964.html",
			author: "Muhammed İkbal",
			imageUrl: bookmarkImage("library-islam-dusuncesi-551964"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-islamin-vadettikleri-467400",
			title: "İslam'ın Vadettikleri",
			url: "https://www.kitapyurdu.com/kitap/islamin-vadettikleri/467400.html",
			author: "Roger Garaudy",
			translator: "Cemal Aydın",
			imageUrl: bookmarkImage("library-islamin-vadettikleri-467400"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-insanligin-medeniyet-destani-461827",
			title: "İnsanlığın Medeniyet Destanı",
			url: "https://www.kitapyurdu.com/kitap/insanligin-medeniyet-destani/461827.html",
			author: "Roger Garaudy",
			translator: "Cemal Aydın",
			imageUrl: bookmarkImage("library-insanligin-medeniyet-destani-461827"),
			categoryId: "library",
			tags: ["Dünya Tarihi"]
		},
	{
			id: "library-omuzlarimda-dunya-hikayem-hayatimdir-572093",
			title: "Omuzlarımda Dünya",
			subtitle: "Hikayem, Hayatımdır",
			url: "https://www.kitapyurdu.com/kitap/omuzlarimda-dunya-hikayem-hayatimdir/572093.html",
			author: "Prof. Dr. Nurullah Genç",
			imageUrl: bookmarkImage("library-omuzlarimda-dunya-hikayem-hayatimdir-572093"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-soyle-bana-hindiba-549240",
			title: "Söyle Bana Hindiba",
			url: "https://www.kitapyurdu.com/kitap/soyle-bana-hindiba/549240.html",
			author: "Prof. Dr. Nurullah Genç",
			imageUrl: bookmarkImage("library-soyle-bana-hindiba-549240"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-ayasofyanin-gizli-tarihi-386572",
			title: "Ayasofya'nın Gizli Tarihi",
			url: "https://www.kitapyurdu.com/kitap/ayasofyanin-gizli-tarihi/386572.html",
			author: "Pelin Çift",
			imageUrl: bookmarkImage("library-ayasofyanin-gizli-tarihi-386572"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-bir-cihan-hukumdari-fatih-sultan-mehmed-455566",
			title: "Bir Cihan Hükümdarı Fatih Sultan Mehmed",
			url: "https://www.kitapyurdu.com/kitap/bir-cihan-hukumdari-fatih-sultan-mehmed/455566.html",
			author: "Erhan Afyoncu",
			imageUrl: bookmarkImage("library-bir-cihan-hukumdari-fatih-sultan-mehmed-455566"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-timur-yildizlarin-bahtina-hukmeden-son-cihangir-459664",
			title: "Timur",
			subtitle: "Yıldızların Bahtına Hükmeden Son Cihangir",
			url: "https://www.kitapyurdu.com/kitap/timur-yildizlarin-bahtina-hukmeden-son-cihangir/459664.html",
			author: "Cüneyt Kanat",
			imageUrl: bookmarkImage("library-timur-yildizlarin-bahtina-hukmeden-son-cihangir-459664"),
			categoryId: "library",
			tags: ["Dünya Tarihi"]
		},
	{
			id: "library-medine-mudafaasi-col-kaplani-fahrettin-pasa-88173",
			title: "Medine Müdafaası",
			subtitle: "Çöl Kaplanı Fahrettin Paşa",
			url: "https://www.kitapyurdu.com/kitap/medine-mudafaasi-col-kaplani-fahrettin-pasa/88173.html",
			author: "İsmail Bilgin",
			imageUrl: bookmarkImage("library-medine-mudafaasi-col-kaplani-fahrettin-pasa-88173"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-sarikamisbeyaz-huzun-75913",
			title: "Sarıkamış",
			subtitle: "Beyaz Hüzün",
			url: "https://www.kitapyurdu.com/kitap/sarikamisbeyaz-huzun/75913.html",
			author: "İsmail Bilgin",
			imageUrl: bookmarkImage("library-sarikamisbeyaz-huzun-75913"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-yasamak-618603",
			title: "Yaşamak",
			url: "https://www.kitapyurdu.com/kitap/yasamak/618603.html",
			author: "Cahit Zarifoğlu",
			imageUrl: bookmarkImage("library-yasamak-618603"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-bu-ulke-18263",
			title: "Bu Ülke",
			url: "https://www.kitapyurdu.com/kitap/bu-ulke/18263.html",
			author: "Cemil Meriç",
			imageUrl: bookmarkImage("library-bu-ulke-18263"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-bes-sehir-4787",
			title: "Beş Şehir",
			url: "https://www.kitapyurdu.com/kitap/bes-sehir/4787.html",
			author: "Ahmet Hamdi Tanpınar",
			imageUrl: bookmarkImage("library-bes-sehir-4787"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-muslumanca-dusunme-uzerine-denemeler-727",
			title: "Müslümanca Düşünme Üzerine Denemeler",
			url: "https://www.kitapyurdu.com/kitap/muslumanca-dusunme-uzerine-denemeler/727.html",
			author: "Rasim Özdenören",
			imageUrl: bookmarkImage("library-muslumanca-dusunme-uzerine-denemeler-727"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-gul-yetistiren-adam-488",
			title: "Gül Yetiştiren Adam",
			url: "https://www.kitapyurdu.com/kitap/gul-yetistiren-adam/488.html",
			author: "Rasim Özdenören",
			imageUrl: bookmarkImage("library-gul-yetistiren-adam-488"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-turkiyenin-maarif-davasi-4879",
			title: "Türkiye'nin Maarif Davası",
			url: "https://www.kitapyurdu.com/kitap/turkiyenin-maarif-davasi/4879.html",
			author: "Nurettin Topçu",
			imageUrl: bookmarkImage("library-turkiyenin-maarif-davasi-4879"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-dogu-bati-arasinda-islam-495562",
			title: "Doğu Batı Arasında İslam",
			url: "https://www.kitapyurdu.com/kitap/dogu-bati-arasinda-islam/495562.html",
			author: "Aliya İzzetbegoviç",
			translator: "Edina Nurikiç",
			imageUrl: bookmarkImage("library-dogu-bati-arasinda-islam-495562"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-sir-4798",
			title: "Sır",
			url: "https://www.kitapyurdu.com/kitap/sir/4798.html",
			author: "Mustafa Kutlu",
			imageUrl: bookmarkImage("library-sir-4798"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-ya-tahammul-ya-sefer-4801",
			title: "Ya Tahammül Ya Sefer",
			url: "https://www.kitapyurdu.com/kitap/ya-tahammul-ya-sefer/4801.html",
			author: "Mustafa Kutlu",
			imageUrl: bookmarkImage("library-ya-tahammul-ya-sefer-4801"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-yoksulluk-icimizde-4775",
			title: "Yoksulluk İçimizde",
			url: "https://www.kitapyurdu.com/kitap/yoksulluk-icimizde/4775.html",
			author: "Mustafa Kutlu",
			imageUrl: bookmarkImage("library-yoksulluk-icimizde-4775"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-uzun-hikaye-19088",
			title: "Uzun Hikaye",
			url: "https://www.kitapyurdu.com/kitap/uzun-hikaye/19088.html",
			author: "Mustafa Kutlu",
			imageUrl: bookmarkImage("library-uzun-hikaye-19088"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-bu-boyledir-4776",
			title: "Bu Böyledir",
			url: "https://www.kitapyurdu.com/kitap/bu-boyledir/4776.html",
			author: "Mustafa Kutlu",
			imageUrl: bookmarkImage("library-bu-boyledir-4776"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-dirilis-neslinin-amentusu-6522",
			title: "Diriliş Neslinin Amentüsü",
			url: "https://www.kitapyurdu.com/kitap/dirilis-neslinin-amentusu/6522.html",
			author: "Sezai Karakoç",
			imageUrl: bookmarkImage("library-dirilis-neslinin-amentusu-6522"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-yitik-cennet-6384",
			title: "Yitik Cennet",
			url: "https://www.kitapyurdu.com/kitap/yitik-cennet/6384.html",
			author: "Sezai Karakoç",
			imageUrl: bookmarkImage("library-yitik-cennet-6384"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-ideolocya-orgusu-kod36-1099",
			title: "İdeolocya Örgüsü",
			url: "https://www.kitapyurdu.com/kitap/ideolocya-orgusu-kod36/1099.html",
			author: "Necip Fazıl Kısakürek",
			imageUrl: bookmarkImage("library-ideolocya-orgusu-kod36-1099"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-cole-inen-nur-kod39-1102",
			title: "Çöle İnen Nur",
			url: "https://www.kitapyurdu.com/kitap/cole-inen-nur-kod39/1102.html",
			author: "Necip Fazıl Kısakürek",
			imageUrl: bookmarkImage("library-cole-inen-nur-kod39-1102"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-okumak-nedir-663010",
			title: "Okumak Nedir?",
			url: "https://www.kitapyurdu.com/kitap/okumak-nedir/663010.html",
			author: "Yusuf Kaplan",
			imageUrl: bookmarkImage("library-okumak-nedir-663010"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-medeniyet-tasavvuru-futuhati-medeniyyeye-giris-607691",
			title: "Medeniyet Tasavvuru",
			subtitle: "Fütuhat-ı Medeniyye'ye Giriş",
			url: "https://www.kitapyurdu.com/kitap/medeniyet-tasavvuru-futuhati-medeniyyeye-giris-/607691.html",
			author: "Yusuf Kaplan",
			imageUrl: bookmarkImage("library-medeniyet-tasavvuru-futuhati-medeniyyeye-giris-607691"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-askin-gozyaslari-4-hamus-olumu-open-dervis-305588",
			title: "Aşkın Gözyaşları 4",
			subtitle: "Hamuş - Ölümü Öpen Derviş",
			url: "https://www.kitapyurdu.com/kitap/askin-gozyaslari-4-hamus-olumu-open-dervis/305588.html",
			author: "Sinan Yağmur",
			imageUrl: bookmarkImage("library-askin-gozyaslari-4-hamus-olumu-open-dervis-305588"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-askin-gozyaslari-2-hz-mevlana-408175",
			title: "Aşkın Gözyaşları 2",
			subtitle: "Hz. Mevlana",
			url: "https://www.kitapyurdu.com/kitap/askin-gozyaslari-2-hz-mevlana/408175.html",
			author: "Sinan Yağmur",
			imageUrl: bookmarkImage("library-askin-gozyaslari-2-hz-mevlana-408175"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-askin-gozyaslari-1-sems-tebrizi-408363",
			title: "Aşkın Gözyaşları 1",
			subtitle: "Şems Tebrizi",
			url: "https://www.kitapyurdu.com/kitap/askin-gozyaslari-1-sems-tebrizi/408363.html",
			author: "Sinan Yağmur",
			imageUrl: bookmarkImage("library-askin-gozyaslari-1-sems-tebrizi-408363"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-tennure-ve-ates-hz-mevlana-karton-kapak-240852",
			title: "Tennure ve Ateş",
			subtitle: "Hz. Mevlana",
			url: "https://www.kitapyurdu.com/kitap/tennure-ve-ates-hz-mevlana-karton-kapak/240852.html",
			author: "Sinan Yağmur",
			imageUrl: bookmarkImage("library-tennure-ve-ates-hz-mevlana-karton-kapak-240852"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-kesintisiz-ogrenme-42711",
			title: "Kesintisiz Öğrenme",
			url: "https://www.kitapyurdu.com/kitap/kesintisiz-ogrenme/42711.html",
			author: "Mümin Sekman",
			imageUrl: bookmarkImage("library-kesintisiz-ogrenme-42711"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-piyon-321683",
			title: "Piyon",
			url: "https://www.kitapyurdu.com/kitap/piyon/321683.html",
			author: "Michael Sikkofield",
			imageUrl: bookmarkImage("library-piyon-321683"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-od-261783",
			title: "Od",
			url: "https://www.kitapyurdu.com/kitap/od-/261783.html",
			author: "Prof. Dr. İskender Pala",
			imageUrl: bookmarkImage("library-od-261783"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-allah-de-otesini-birak-311263",
			title: "Allah De Ötesini Bırak",
			url: "https://www.kitapyurdu.com/kitap/allah-de-otesini-birak/311263.html",
			author: "Uğur Koşar",
			imageUrl: bookmarkImage("library-allah-de-otesini-birak-311263"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-kusatma-1453-130135",
			title: "Kuşatma 1453",
			url: "https://www.kitapyurdu.com/kitap/kusatma-1453/130135.html",
			author: "Okay Tiryakioğlu",
			imageUrl: bookmarkImage("library-kusatma-1453-130135"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-sadece-aptallar-8-saat-uyur-81650",
			title: "Sadece Aptallar 8 Saat Uyur",
			url: "https://www.kitapyurdu.com/kitap/sadece-aptallar-8-saat-uyur/81650.html",
			author: "Erdal Demirkıran",
			imageUrl: bookmarkImage("library-sadece-aptallar-8-saat-uyur-81650"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-hemdem-kalpten-kalbe-bir-yol-vardir-677801",
			title: "Hemdem",
			subtitle: "Kalpten kalbe Bir Yol Vardır",
			url: "https://www.kitapyurdu.com/kitap/hemdem-kalpten-kalbe-bir-yol-vardir/677801.html",
			author: "Sait Köşk",
			imageUrl: bookmarkImage("library-hemdem-kalpten-kalbe-bir-yol-vardir-677801"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-gelecegi-kesfedenler-dijital-cagin-biyografisi-416958",
			title: "Geleceği Keşfedenler",
			subtitle: "Dijital Çağın Biyografisi",
			url: "https://www.kitapyurdu.com/kitap/gelecegi-kesfedenler-dijital-cagin-biyografisi/416958.html",
			author: "Walter Isaacson",
			translator: "Duygu Dalgakıran",
			imageUrl: bookmarkImage("library-gelecegi-kesfedenler-dijital-cagin-biyografisi-416958"),
			categoryId: "library",
			tags: ["Dünya Tarihi"]
		},
	{
			id: "library-59-yuz-portreler-457862",
			title: "59 Yüz",
			subtitle: "Portreler",
			url: "https://www.kitapyurdu.com/kitap/59-yuz-portreler/457862.html",
			author: "Necmettin Asma",
			imageUrl: bookmarkImage("library-59-yuz-portreler-457862"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-fabrika-ayari-528784",
			title: "Fabrika Ayarı",
			url: "https://www.kitapyurdu.com/kitap/fabrika-ayari/528784.html",
			author: "Hayati İnanç",
			imageUrl: bookmarkImage("library-fabrika-ayari-528784"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-japonizm-ciltli-499470",
			title: "Japonizm",
			url: "https://www.kitapyurdu.com/kitap/japonizm-ciltli/499470.html",
			author: "Erin Niimi Longhurst",
			translator: "Sevinç Seyla Tezcan",
			imageUrl: bookmarkImage("library-japonizm-ciltli-499470"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-islamin-dirilisi-6514",
			title: "İslamın Dirilişi",
			url: "https://www.kitapyurdu.com/kitap/islamin-dirilisi/6514.html",
			author: "Sezai Karakoç",
			imageUrl: bookmarkImage("library-islamin-dirilisi-6514"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-insanligin-dirilisi-6385",
			title: "İnsanlığın Dirilişi",
			url: "https://www.kitapyurdu.com/kitap/insanligin-dirilisi/6385.html",
			author: "Sezai Karakoç",
			imageUrl: bookmarkImage("library-insanligin-dirilisi-6385"),
			categoryId: "library",
			tags: ["İslam"]
		},
	{
			id: "library-kanuni-sultan-suleyman-335517",
			title: "Kanuni Sultan Süleyman",
			url: "https://www.kitapyurdu.com/kitap/kanuni-sultan-suleyman/335517.html",
			author: "Yılmaz Öztuna",
			imageUrl: bookmarkImage("library-kanuni-sultan-suleyman-335517"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-yavuz-sultan-selim-430261",
			title: "Yavuz Sultan Selim",
			url: "https://www.kitapyurdu.com/kitap/yavuz-sultan-selim/430261.html",
			author: "Yılmaz Öztuna",
			imageUrl: bookmarkImage("library-yavuz-sultan-selim-430261"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-ii-abdulhamid-zamani-ve-sahsiyeti-311444",
			title: "II. Abdülhamid Zamanı ve Şahsiyeti",
			url: "https://www.kitapyurdu.com/kitap/ii-abdulhamid-zamani-ve-sahsiyeti/311444.html",
			author: "Yılmaz Öztuna",
			imageUrl: bookmarkImage("library-ii-abdulhamid-zamani-ve-sahsiyeti-311444"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-sultan-ii-mahmud-342725",
			title: "Sultan II. Mahmud",
			url: "https://www.kitapyurdu.com/kitap/sultan-ii-mahmud/342725.html",
			author: "Yılmaz Öztuna",
			imageUrl: bookmarkImage("library-sultan-ii-mahmud-342725"),
			categoryId: "library",
			tags: ["Osmanlı"]
		},
	{
			id: "library-bir-darbenin-anatomisi-13641",
			title: "Bir Darbenin Anatomisi",
			url: "https://www.kitapyurdu.com/kitap/bir-darbenin-anatomisi/13641.html",
			author: "Yılmaz Öztuna",
			imageUrl: bookmarkImage("library-bir-darbenin-anatomisi-13641"),
			categoryId: "library",
			tags: ["Cumhuriyet"]
		},
	{
			id: "library-bozkurtlar-243385",
			title: "Bozkurtlar",
			url: "https://www.kitapyurdu.com/kitap/bozkurtlar/243385.html",
			author: "Hüseyin Nihal Atsız",
			imageUrl: bookmarkImage("library-bozkurtlar-243385"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-turancilik-milli-degerler-ve-genclik-251503",
			title: "Turancılık",
			subtitle: "Milli Değerler ve Gençlik",
			url: "https://www.kitapyurdu.com/kitap/turancilik-milli-degerler-ve-genclik/251503.html",
			author: "Hüseyin Nihal Atsız",
			imageUrl: bookmarkImage("library-turancilik-milli-degerler-ve-genclik-251503"),
			categoryId: "library",
			tags: ["Cumhuriyet"]
		},
	{
			id: "library-turk-tarihinde-meseleler-246740",
			title: "Türk Tarihinde Meseleler",
			url: "https://www.kitapyurdu.com/kitap/turk-tarihinde-meseleler/246740.html",
			author: "Hüseyin Nihal Atsız",
			imageUrl: bookmarkImage("library-turk-tarihinde-meseleler-246740"),
			categoryId: "library",
			tags: ["Cumhuriyet"]
		},
	{
			id: "library-yollarin-sonu-595418",
			title: "Yolların Sonu",
			url: "https://www.kitapyurdu.com/kitap/yollarin-sonu/595418.html",
			author: "Hüseyin Nihal Atsız",
			imageUrl: bookmarkImage("library-yollarin-sonu-595418"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-turk-ulkusu-251501",
			title: "Türk Ülküsü",
			url: "https://www.kitapyurdu.com/kitap/turk-ulkusu/251501.html",
			author: "Hüseyin Nihal Atsız",
			imageUrl: bookmarkImage("library-turk-ulkusu-251501"),
			categoryId: "library",
			tags: ["Cumhuriyet"]
		},
	{
			id: "library-deli-kurt-243383",
			title: "Deli Kurt",
			url: "https://www.kitapyurdu.com/kitap/deli-kurt/243383.html",
			author: "Hüseyin Nihal Atsız",
			imageUrl: bookmarkImage("library-deli-kurt-243383"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-ruh-adam-588450",
			title: "Ruh Adam",
			url: "https://www.kitapyurdu.com/kitap/ruh-adam-/588450.html",
			author: "Hüseyin Nihal Atsız",
			imageUrl: bookmarkImage("library-ruh-adam-588450"),
			categoryId: "library",
			tags: ["Edebiyat"]
		},
	{
			id: "library-atsiz-hikayeler-452636",
			title: "Atsız Hikayeler",
			url: "https://www.kitapyurdu.com/kitap/atsiz-hikayeler/452636.html",
			author: "Hüseyin Nihal Atsız",
			imageUrl: bookmarkImage("library-atsiz-hikayeler-452636"),
			categoryId: "library",
			tags: ["Edebiyat"]
		}
]

export const BOOKMARK_GRID_COLUMN_COUNT = {
	mobile: 2,
	desktop: 5
} as const

export const BOOKMARK_MEDIA_RATING_TAGS = ["Film", "Dizi"] as const

export type BookmarkChipLabel = {
	desktop: string
	mobile: string
}

export const BOOKMARK_CATEGORY_CHIP_LABELS: Record<
	BookmarkCategoryId,
	BookmarkChipLabel
> = {
	blog: { desktop: "Blog", mobile: "Blog" },
	frontend: { desktop: "Frontend", mobile: "Frontend" },
	library: { desktop: "Kitaplık", mobile: "Kitap" },
	media: { desktop: "Medya", mobile: "Medya" }
}

export const LIBRARY_BOOKMARK_SORT_LABELS: Record<
	LibraryBookmarkSort,
	BookmarkChipLabel
> = {
	title: { desktop: "Başlığa göre", mobile: "Başlık" },
	author: { desktop: "Yazara göre", mobile: "Yazar" }
}

export const MEDIA_RATING_BOOKMARK_SORT_LABELS: Record<
	MediaRatingBookmarkSort,
	BookmarkChipLabel
> = {
	"rating-desc": { desktop: "En yüksek", mobile: "Yüksek" },
	"rating-asc": { desktop: "En düşük", mobile: "Düşük" }
}

export const BOOKMARK_UI = {
	pageTitle: "Yer İmleri",
	pageDescription:
		"Takip ettiğim kaynaklar, eklentiler ve okuma listem. Kategori ve etiketlerle süzülmüş favori bağlantılar.",
	filtersAriaLabel: "Yer imi filtreleri",
	categoryAriaLabel: "Kategori filtresi",
	tagAriaLabel: "Etiket filtresi",
	sortAriaLabel: "Sıralama",
	listAriaLabel: "Yer imleri listesi",
	emptyState: "Seçili etikete uygun yer imi bulunamadı.",
	showTags: "Tüm etiketleri göster",
	hideTags: "Daha az göster",
	tagsToggleAriaLabel: "Etiket filtrelerini göster veya gizle"
} as const

export function getBookmarkSortOptions(
	categoryId: BookmarkCategoryId,
	tag: string | null
): readonly BookmarkSort[] {
	if (categoryId === "library") {
		return LIBRARY_BOOKMARK_SORTS
	}

	if (
		categoryId === "media" &&
		tag !== null &&
		(BOOKMARK_MEDIA_RATING_TAGS as readonly string[]).includes(tag)
	) {
		return MEDIA_RATING_BOOKMARK_SORTS
	}

	return []
}

export function getSortedBookmarkCategories() {
	return [...BOOKMARK_CATEGORIES].sort((left, right) => left.sortOrder - right.sortOrder)
}
