import { ME } from "@/constants/me.constants"
import { SITE_COPY } from "@/constants/site-copy.constants"
import type { BlogCategory } from "@/features/blog/types/blog.types"

export const BLOG_CATEGORY_LABELS: Record<BlogCategory, string> = {
	technical: "Teknik",
	personal: "Kişisel"
}

export const BLOG_TECHNICAL_TAG_POOL = [
	"React",
	"Zustand",
	"Next.js",
	"TanStack",
	"ViraStack",
	"TypeScript",
	"Yapay Zekâ",
	"Frontend",
	"CSS",
	"JavaScript",
	"HTML",
	"Tailwind CSS",
	"shadcn/ui",
	"Supabase",
	"Vite",
	"npm",
	"GitHub",
	"Site Yenileme",
	"Proje"
] as const

/** Number of latest technical posts shown on the home page. */
export const LATEST_TECHNICAL_POSTS_COUNT = 3

export const BLOG_PERSONAL_TAG_POOL = [
	"Yıl Değerlendirmesi",
	"Deneyim",
	"Düşünce",
	"Kitap",
	"Dizi",
	"Film",
	"Seyahat",
	"Proje"
] as const

export type BlogSectionPath = "/blog" | "/notlar"

export type BlogSection = {
	category: BlogCategory
	path: BlogSectionPath
	title: string
	description: string
	feedPath: string
	tagPool: readonly string[]
	featuredSlugs: readonly string[]
}

/** Technical posts live under /blog, personal posts under /notlar; both share the blog feature. */
export const BLOG_SECTIONS = {
	technical: {
		category: "technical",
		path: "/blog",
		title: SITE_COPY.blog.title,
		description: SITE_COPY.blog.intro,
		feedPath: "/feed.xml",
		tagPool: BLOG_TECHNICAL_TAG_POOL,
		featuredSlugs: ME.featuredPosts
	},
	personal: {
		category: "personal",
		path: "/notlar",
		title: SITE_COPY.notes.title,
		description: SITE_COPY.notes.intro,
		feedPath: "/notlar/feed.xml",
		tagPool: BLOG_PERSONAL_TAG_POOL,
		featuredSlugs: []
	}
} as const satisfies Record<BlogCategory, BlogSection>

export const BLOG_SECTION_LIST: BlogSection[] = [
	BLOG_SECTIONS.technical,
	BLOG_SECTIONS.personal
]

export const BLOG_UI = {
	draftBadge: "Taslak",
	englishLabel: "English",
	englishTooltip: "Read in English",
	interactiveLabel: "İnteraktif",
	mediumLinkLabel: "Medium'da oku",
	mediumLinkShortLabel: "Medium",
	maxVisibleTags: 3,
	initialVisiblePosts: 12,
	loadMorePosts: 12,
	loadMorePostsLabel: "Daha fazla yazı göster",
	filtersAriaLabel: "Blog filtreleri",
	tagAriaLabel: "Etiket filtresi",
	sortAriaLabel: "Sıralama",
	sortToggleLabel: {
		newest: "En eski yazıları önce göster",
		oldest: "En yeni yazıları önce göster"
	},
	yearNavAriaLabel: "Yıla git",
	sectionAnchorLabel: (section: string) => `${section} bölümüne git`,
	featuredLabel: "Öne çıkan",
	rssLabel: "RSS",
	draftsHeading: "Taslaklar",
	clearFilters: "Filtreleri temizle",
	showTags: "Tüm etiketleri göster",
	hideTags: "Daha az göster",
	tagsToggleAriaLabel: "Etiket filtrelerini göster veya gizle",
	emptyState: "Seçili filtrelere uygun yazı bulunamadı.",
	listAriaLabel: "Blog yazıları",
	previousPost: "Önceki yazı",
	nextPost: "Sonraki yazı",
	tocLabel: "İçindekiler",
	tocAriaLabel: "Yazı içindekileri",
	tocMinimapAriaLabel: "Yazı bölümleri minimap",
	closeImageZoom: "Görseli kapat",
	shareLabel: "Paylaş",
	copyLink: "Bağlantıyı kopyala",
	copyCode: "Kodu kopyala",
	codeCopied: "Kopyalandı",
	linkCopied: "Bağlantı kopyalandı",
	shareOnX: "X'te paylaş",
	shareOnLinkedIn: "LinkedIn'de paylaş",
	errorTitle: "Bir şeyler ters gitti",
	errorDescription:
		"Blog içeriği yüklenirken bir sorun oluştu. Kısa süre sonra tekrar deneyebilirsin.",
	errorRetry: "Tekrar dene",
	postsLoadError: "Yazılar şu an yüklenemedi.",
	postLoadError: "Yazı şu an yüklenemedi."
} as const

export const BLOG_TOC_MIN_HEADINGS = 3
