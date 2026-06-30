export const BLOG_SERIES = {
	yillikDegerlendirme: "yillik-degerlendirme",
	siteYenileme: "site-yenileme",
	virastack: "virastack"
} as const

export const BLOG_SERIES_LABELS: Record<
	(typeof BLOG_SERIES)[keyof typeof BLOG_SERIES],
	string
> = {
	[BLOG_SERIES.yillikDegerlendirme]: "Yıllık Değerlendirme",
	[BLOG_SERIES.siteYenileme]: "Site Yenileme",
	[BLOG_SERIES.virastack]: "ViraStack"
}

export type BlogSeries = (typeof BLOG_SERIES)[keyof typeof BLOG_SERIES]
