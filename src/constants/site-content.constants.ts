import { ME, ME_EMAIL_HREF } from "@/constants/me.constants"

export const SITE_CONTENT = {
	homeSections: {
		blog: "Blog",
		experiences: "Deneyimler"
	},
	homeBlogCta: "Tüm yazıları göster",
	homeExperiencesCta: "Tüm deneyimleri göster",
	resumeButton: "Özgeçmişi incele",
	commandPalettePlaceholder: "Sayfa, yazı ya da proje ara...",
	commandPaletteTitle: "Arama paleti",
	commandPaletteDescription: "Sayfa, yazı ya da eylem ara",
	commandPaletteEmpty: "Sonuç bulunamadı.",
	commandGroups: {
		pages: "Sayfalar",
		projects: "Projeler",
		bookmarks: "Yer imleri",
		actions: "Eylemler"
	},
	skipToContent: "Ana içeriğe geç",
	searchTriggerLabel: "Ara",
	searchTriggerAria: "Arama paletini aç",
	scrollToTop: "Yukarı çık",
	scrollProgress: "Sayfa kaydırma durumu",
	mainNavAria: "Ana menü",
	mobileNavOpen: "Menüyü aç",
	mobileNavTitle: "Menü",
	mobileNavAria: "Mobil menü",
	socialLinksAria: "Sosyal linkler",
	githubProfileAria: "GitHub profilini ziyaret et",
	themeLoading: "Tema yükleniyor",
	themeToLight: "Aydınlık temaya geç",
	themeToDark: "Karanlık temaya geç",
	helperLinksAria: "Yardımcı bağlantılar",
	headingAnchorAria: "Bu bölüme link",
	homeBlogAria: "Son blog yazıları",
	stackStripAria: "Teknoloji şeridi",
	projectsSectionApps: "Kişisel projeler",
	projectsSectionVirastack: "ViraStack",
	projectsBadgeComingSoon: "Yakında",
	projectsBadgeArchive: "Arşiv",
	projectsBadgePaused: "Ara verildi",
	resumeModalTitle: "Özgeçmiş",
	resumeModalDescription:
		"Özgeçmişimi buradan inceleyebilir ya da indirebilirsin.",
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
	virastackGithub: "https://github.com/virastack",
	github: ME.contact.github,
	x: ME.contact.x,
	linkedin: ME.contact.linkedin,
	email: ME_EMAIL_HREF,
	raindrop: ME.contact.raindrop,
	tanstackStart: "https://tanstack.com/start",
	tailwind: "https://tailwindcss.com",
	shadcn: "https://ui.shadcn.com"
} as const
