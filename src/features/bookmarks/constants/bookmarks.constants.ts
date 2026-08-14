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
import { LIBRARY_BOOKMARKS } from "@/features/bookmarks/data/library-bookmarks.data"

export type BookmarkCategory = {
	id: BookmarkCategoryId
	sortOrder: number
	title: string
	description: string
	accent: string
}

export const DEFAULT_BOOKMARK_CATEGORY_ID = "blog" satisfies BookmarkCategoryId

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
			id: "blog-daktilo1984-com",
			title: "Daktilo1984",
			url: "https://daktilo1984.com/",
			imageUrl: bookmarkImage("blog-daktilo1984-com"),
			description: "Politika, ekonomi ve kültür odaklı bağımsız düşünce yayını; yazı, video ve podcast.",
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
			id: "frontend-mesurer-dev",
			title: "Mesurer",
			url: "https://mesurer.dev/",
			imageUrl: bookmarkImage("frontend-mesurer-dev"),
			description: "Localhost'ta ölçü ve hizalama aracı",
			categoryId: "frontend",
			tags: ["npm"]
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
			id: "media-youtube-cdf6d19etmc",
			title: "Maradona Warm-Up: UEFA Cup Semi-Final 1989",
			url: "https://www.youtube.com/watch?v=Cdf6D19Etmc",
			author: "TheUnComfortZONE",
			imageUrl: bookmarkImage("media-youtube-cdf6d19etmc"),
			categoryId: "media",
			tags: ["Youtube"]
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
	...LIBRARY_BOOKMARKS
]

export const BOOKMARK_GRID_COLUMN_COUNT = {
	mobile: 2,
	desktop: 5
} as const

export const BOOKMARK_MEDIA_RATING_TAGS = ["Film", "Dizi"] as const

export const YOUTUBE_BOOKMARK_TAG = "Youtube"

export const YOUTUBE_BOOKMARK_SUBTAGS = [
	"Futbol",
	"Oyun",
	"Spor",
	"Dövüş",
	"Dizi ve Belgesel"
] as const

export type YoutubeBookmarkSubtag = (typeof YOUTUBE_BOOKMARK_SUBTAGS)[number]

export const YOUTUBE_BOOKMARK_SUBTAG_BY_ID: Record<string, YoutubeBookmarkSubtag> = {
	"media-youtube-cdf6d19etmc": "Futbol",
	"media-youtube--gc2twgghfa": "Futbol",
	"media-youtube-rs8xja8ctoq": "Futbol",
	"media-youtube-hvmbmwuheaw": "Futbol",
	"media-youtube-lmwpop3pulg": "Futbol",
	"media-youtube-x7158uqk1yi": "Futbol",
	"media-youtube-ijbde6pkw2o": "Futbol",
	"media-youtube-6ey6xucwf0y": "Oyun",
	"media-youtube-g-swvee9him": "Oyun",
	"media-youtube-uo1chltdryq": "Oyun",
	"media-youtube-jqvx5i4cso8": "Oyun",
	"media-youtube-pxygbwx4dks": "Oyun",
	"media-youtube-u1oivnfpfii": "Spor",
	"media-youtube-mhsg2m25pzy": "Spor",
	"media-youtube-fexzy4evllo": "Spor",
	"media-youtube-m22nwszycce": "Dövüş",
	"media-youtube-81txboyjrjw": "Dövüş",
	"media-youtube-4rpm6g6odvg": "Dizi ve Belgesel",
	"media-youtube-ueec_ebjgfu": "Dizi ve Belgesel",
	"media-youtube-5x2yp2wm16i": "Dizi ve Belgesel"
}

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
	genreAriaLabel: "Tür filtresi",
	authorAriaLabel: "Yazar filtresi",
	youtubeSubtagAriaLabel: "YouTube kategori filtresi",
	allFilterLabel: "Tümü",
	allCategoriesLabel: "Tüm kategoriler",
	allGenresLabel: "Tüm türler",
	allAuthorsLabel: "Tüm yazarlar",
	sortAriaLabel: "Sıralama",
	listAriaLabel: "Yer imleri listesi",
	emptyState: "Seçili etikete uygun yer imi bulunamadı.",
	showTags: "Tümünü göster",
	hideTags: "Daha az göster",
	tagsToggleAriaLabel: "Tümünü göster veya gizle",
	libraryCoverAttribution: "Kitap görselleri Kitapyurdu'ndan alınmıştır."
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
