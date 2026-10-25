import { ME, ME_EMAIL_HREF } from "@/constants/me.constants"

export const SITE_CONTENT = {
	homeSections: {
		blog: "Blog",
		experiences: "Deneyimler"
	},
	homeBlogCta: "Tüm yazıları göster",
	homeExperiencesCta: "Tüm deneyimleri göster",
	resumeButton: "Özgeçmişi İncele",
	commandPalettePlaceholder: "Sayfa, yazı veya proje ara...",
	commandPaletteEmpty: "Sonuç bulunamadı.",
	commandGroups: {
		pages: "Sayfalar",
		projects: "Projeler",
		bookmarks: "Yer İmleri",
		actions: "Eylemler"
	},
	skipToContent: "Ana içeriğe geç",
	searchTriggerLabel: "Ara",
	searchTriggerAria: "Arama paletini aç",
	scrollToTop: "Yukarı çık",
	scrollProgress: "Sayfa kaydırma durumu",
	projectsSectionApps: "Kişisel Projeler",
	projectsSectionVirastack: "ViraStack",
	projectsBadgeComingSoon: "Yakında",
	projectsBadgeArchive: "Arşiv",
	projectsBadgePaused: "Ara verildi",
	resumeModalTitle: "Özgeçmiş Önizleme",
	resumeModalDescription:
		"Özgeçmişimi buradan inceleyebilir veya indirebilirsiniz.",
	resumeDownload: "İndir",
	resumeLanguageGroup: "Özgeçmiş dili",
	resumeLanguageTr: "Türkçe CV",
	resumeLanguageEn: "English CV",
	resumeLanguageTrShort: "TR",
	resumeLanguageEnShort: "EN",
	footerNavTitle: "Keşfet",
	footerVirastackTitle: "ViraStack",
	footerVirastackAllProjects: "Tüm projeler",
	routeErrorCodeLabel: "Hata",
	routeErrorRetry: "Tekrar dene"
} as const

export const EXTERNAL_LINKS = {
	virastack: "https://virastack.com",
	github: ME.contact.github,
	x: ME.contact.x,
	linkedin: ME.contact.linkedin,
	email: ME_EMAIL_HREF,
	raindrop: ME.contact.raindrop,
	tanstackStart: "https://tanstack.com/start",
	tailwind: "https://tailwindcss.com",
	shadcn: "https://ui.shadcn.com"
} as const
