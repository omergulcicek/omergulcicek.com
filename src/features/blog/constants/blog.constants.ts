import type { BlogCategory, BlogSort } from "@/features/blog/types/blog.types"

export const BLOG_CATEGORY_LABELS: Record<BlogCategory, string> = {
	technical: "Teknik",
	personal: "Kişisel"
}

export const BLOG_CATEGORY_OPTIONS = [
	{ value: null, label: "Tümü" },
	{ value: "technical" as const, label: BLOG_CATEGORY_LABELS.technical },
	{ value: "personal" as const, label: BLOG_CATEGORY_LABELS.personal }
]

export const BLOG_SORT_LABELS: Record<BlogSort, string> = {
	newest: "En yeni",
	oldest: "En eski"
}

export const BLOG_SORT_OPTIONS: BlogSort[] = ["newest", "oldest"]

export const BLOG_TAG_POOL = [
	"React",
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
	"Yıl Değerlendirmesi",
	"Kitap",
	"Dizi",
	"Film",
	"Seyahat",
	"Deneyim",
	"Düşünce",
	"Proje"
] as const

export const BLOG_UI = {
	pageTitle: "Blog",
	pageDescription:
		"Teknik ve kişisel yazılar — React, Next.js, CSS, frontend mimarisi ve daha fazlası.",
	draftBadge: "Taslak",
	englishLabel: "English",
	englishTooltip: "Read in English",
	interactiveLabel: "İnteraktif",
	mediumLinkLabel: "Medium'da oku",
	maxVisibleTags: 3,
	filtersAriaLabel: "Blog filtreleri",
	categoryAriaLabel: "Kategori filtresi",
	tagAriaLabel: "Etiket filtresi",
	sortAriaLabel: "Sıralama",
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
	closeImageZoom: "Görseli kapat"
} as const

export const BLOG_TOC_MIN_HEADINGS = 3
