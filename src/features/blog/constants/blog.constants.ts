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
	"Tailwind CSS",
	"shadcn/ui",
	"Supabase",
	"Vite",
	"Yıl Özeti",
	"Kitap",
	"Dizi",
	"Seyahat",
	"Kişisel"
] as const

export const BLOG_UI = {
	pageTitle: "Blog",
	pageDescription:
		"Teknik ve kişisel yazılar — React, Next.js, CSS, frontend mimarisi ve daha fazlası.",
	draftBadge: "Taslak",
	englishBadge: "EN",
	englishTooltip: "Read in English",
	maxVisibleTags: 2,
	filtersAriaLabel: "Blog filtreleri",
	categoryAriaLabel: "Kategori filtresi",
	tagAriaLabel: "Etiket filtresi",
	sortAriaLabel: "Sıralama",
	emptyState: "Seçili filtrelere uygun yazı bulunamadı.",
	listAriaLabel: "Blog yazıları"
} as const
