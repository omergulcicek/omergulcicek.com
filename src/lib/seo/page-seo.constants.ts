export type PageSeoEntry = {
	path: string
	title: string
	description: string
	changeFrequency: "daily" | "weekly" | "monthly"
	priority: number
}

export const STATIC_PAGE_SEO = {
	home: {
		path: "/",
		title: "Ömer Gülçiçek — Frontend Engineer",
		description:
			"Detaylara önem veren bir frontend mühendisi; blog, projeler ve ViraStack ekosistemi.",
		changeFrequency: "daily",
		priority: 1
	},
	blog: {
		path: "/blog",
		title: "Blog",
		description:
			"Teknik ve kişisel yazılar — React, Next.js, CSS, frontend mimarisi ve daha fazlası.",
		changeFrequency: "weekly",
		priority: 0.9
	},
	projects: {
		path: "/projects",
		title: "Projeler",
		description: "Kişisel uygulamalar ve ViraStack açık kaynak araçları.",
		changeFrequency: "weekly",
		priority: 0.8
	},
	about: {
		path: "/about",
		title: "Hakkımda",
		description:
			"Frontend mühendisliği, ViraStack ve üretim kültürü hakkında kısa bir tanışma.",
		changeFrequency: "monthly",
		priority: 0.7
	},
	experiences: {
		path: "/experiences",
		title: "Deneyimler",
		description: "Kariyer geçmişi, teknoloji etiketleri ve CV.",
		changeFrequency: "monthly",
		priority: 0.7
	},
	journey: {
		path: "/journey",
		title: "Yolculuk",
		description:
			"Kariyer ve kişisel dönüm noktalarım; yıllara göre kısa anılar ve önemli anlar.",
		changeFrequency: "monthly",
		priority: 0.6
	},
	services: {
		path: "/services",
		title: "Hizmetler",
		description: "Freelance geliştirme ve frontend eğitimi.",
		changeFrequency: "monthly",
		priority: 0.6
	},
	bookmarks: {
		path: "/bookmarks",
		title: "Yer İmleri",
		description:
			"Raindrop'ta topladığım frontend kaynakları, bloglar ve okuma listesi.",
		changeFrequency: "weekly",
		priority: 0.6
	},
	setup: {
		path: "/setup",
		title: "Kurulum",
		description:
			"Kod yazarken kullandığım editör kurulumu ve ürün geliştirirken tercih ettiğim teknolojiler.",
		changeFrequency: "monthly",
		priority: 0.6
	}
} as const satisfies Record<string, PageSeoEntry>

export const STATIC_SITEMAP_PAGES: PageSeoEntry[] = Object.values(STATIC_PAGE_SEO)
