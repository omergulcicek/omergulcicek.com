import { SITE } from "@/constants/site.constants"
import { SITE_COPY } from "@/constants/site-copy.constants"

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
		title: SITE.defaultTitle,
		description: SITE_COPY.meta.home,
		changeFrequency: "daily",
		priority: 1
	},
	blog: {
		path: "/blog",
		title: "Blog",
		description: SITE_COPY.meta.blog,
		changeFrequency: "weekly",
		priority: 0.9
	},
	notes: {
		path: "/notlar",
		title: SITE_COPY.notes.title,
		description: SITE_COPY.meta.notes,
		changeFrequency: "weekly",
		priority: 0.6
	},
	projects: {
		path: "/projects",
		title: "Projeler",
		description: SITE_COPY.meta.projects,
		changeFrequency: "weekly",
		priority: 0.8
	},
	about: {
		path: "/about",
		title: "Hakkımda",
		description: SITE_COPY.meta.about,
		changeFrequency: "monthly",
		priority: 0.7
	},
	experiences: {
		path: "/experiences",
		title: "Deneyimler",
		description: SITE_COPY.meta.experiences,
		changeFrequency: "monthly",
		priority: 0.7
	},
	journey: {
		path: "/journey",
		title: "Yolculuk",
		description: SITE_COPY.meta.journey,
		changeFrequency: "monthly",
		priority: 0.6
	},
	bookmarks: {
		path: "/bookmarks",
		title: "Yer İmleri",
		description: SITE_COPY.meta.bookmarks,
		changeFrequency: "weekly",
		priority: 0.6
	},
	setup: {
		path: "/setup",
		title: "Kurulum",
		description: SITE_COPY.meta.setup,
		changeFrequency: "monthly",
		priority: 0.6
	}
} as const satisfies Record<string, PageSeoEntry>

export type StaticPageSeoKey = keyof typeof STATIC_PAGE_SEO

export const STATIC_SITEMAP_PAGES: PageSeoEntry[] = Object.values(STATIC_PAGE_SEO)
