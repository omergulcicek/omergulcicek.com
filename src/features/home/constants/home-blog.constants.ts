export type HomeBlogPost = {
	slug: string
	title: string
	publishedAt: string
}

export const HOME_FEATURED_BLOG_PLACEHOLDER: HomeBlogPost[] = [
	{
		slug: "/frontend-ekosistemi-insa-etmek",
		title: "Frontend Ekosistemi İnşa Etmek: Zanaattan Mühendisliğe Bir Yolculuk",
		publishedAt: "2026-04-05"
	},
	{
		slug: "/2026da-hayatimiza-girecek-yeni-css-ozellikleri",
		title: "2026'da Hayatımıza Girecek Yeni CSS Özellikleri",
		publishedAt: "2025-12-25"
	},
	{
		slug: "/ai-caginda-frontend-bitti-mi",
		title: "AI Çağında Frontend Bitti mi?",
		publishedAt: "2025-12-01"
	}
]
