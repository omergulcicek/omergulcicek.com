import type { Project } from "@/features/projects/types/project.types"

export const PROJECTS: Project[] = [
	{
		id: "footy",
		title: "Footy",
		description:
			"Futbol bilgini sına — Bil Bakalım, Skor Avcısı, Kupon Ustası, Kadro Bulmacası.",
		group: "personal",
		status: "live",
		href: "https://footyplay.vercel.app/",
		sortOrder: 1,
		featured: true
	},
	{
		id: "takvim",
		title: "Takvim",
		description:
			"Takvim abonelikleri için ücretsiz, açık kaynak arayüzler ve içerik.",
		group: "personal",
		status: "live",
		href: "https://takvim-abonelik.vercel.app/",
		sortOrder: 2,
		featured: true
	},
	{
		id: "ai-rules",
		title: "AI Rules",
		description:
			"Modern React uygulamaları için yapay zekâ odaklı mimari kurallar ve Cursor rules.",
		group: "virastack",
		status: "package",
		href: "https://github.com/virastack/ai-rules",
		sortOrder: 3
	},
	{
		id: "nextjs-boilerplate",
		title: "Next.js Boilerplate",
		description:
			"Tailwind CSS 4 ve TypeScript ile üretime hazır Next.js 16+ başlangıç şablonu.",
		group: "virastack",
		status: "package",
		href: "https://github.com/virastack/nextjs-boilerplate",
		sortOrder: 4
	},
	{
		id: "input-mask",
		title: "Input Mask",
		description: "React Hook Form için hafif, bağımlılıksız input maskeleme.",
		group: "virastack",
		status: "package",
		href: "https://github.com/virastack/input-mask",
		sortOrder: 5
	},
	{
		id: "password-toggle",
		title: "Password Toggle",
		description:
			"React için erişilebilir ve özelleştirilebilir şifre görünürlük hook'u.",
		group: "virastack",
		status: "package",
		href: "https://github.com/virastack/password-toggle",
		sortOrder: 6
	},
	{
		id: "modern-web-in-3-minutes",
		title: "Modern Web in 3 Minutes",
		description: "Üç dakikada modern web geliştirme standartlarına giriş.",
		group: "virastack",
		status: "package",
		href: "https://github.com/virastack/modern-web-in-3-minutes",
		sortOrder: 7
	},
	{
		id: "tanstack-boilerplate",
		title: "TanStack Boilerplate",
		description:
			"Tailwind CSS 4 ve TypeScript ile üretime hazır TanStack Start şablonu.",
		group: "virastack",
		status: "coming_soon",
		href: "https://github.com/virastack/tanstack-boilerplate",
		sortOrder: 8
	},
	{
		id: "start-cli",
		title: "Start (CLI)",
		description:
			"ViraStack mimarilerini başlatmak için otomatik iskelet oluşturma aracı.",
		group: "virastack",
		status: "coming_soon",
		href: "https://github.com/virastack/cli",
		sortOrder: 9
	},
	{
		id: "standards",
		title: "Standards",
		description: "Yapılandırma gerektirmeyen ESLint ve Prettier paketi.",
		group: "virastack",
		status: "coming_soon",
		href: "https://github.com/virastack/standards",
		sortOrder: 10
	},
	{
		id: "error-guard",
		title: "Error Guard",
		description: "React için profesyonel hata yönetimi ve akıllı kurtarma.",
		group: "virastack",
		status: "coming_soon",
		href: "https://github.com/virastack/error-guard",
		sortOrder: 11
	},
	{
		id: "turkuaz",
		title: "Turkuaz",
		description: "Hızlı ve sade web sayfaları için CSS odaklı framework (2017).",
		group: "archive",
		status: "archived",
		href: "https://github.com/omergulcicek/turkuaz",
		sortOrder: 12
	},
	{
		id: "turkcedokuman",
		title: "Türkçe Doküman",
		description: "Yazılım geliştirme konularında Türkçe kaynak projesi.",
		group: "archive",
		status: "archived",
		href: "https://github.com/omergulcicek/turkcedokuman.com",
		sortOrder: 13
	}
]

export function getFeaturedProjects() {
	return PROJECTS.filter((project) => project.featured).slice(0, 2)
}

export function getProjectsByGroup(group: Project["group"]) {
	return PROJECTS.filter((project) => project.group === group).sort(
		(a, b) => a.sortOrder - b.sortOrder
	)
}

export function getPublishedVirastackProjects() {
	return getProjectsByGroup("virastack").filter(
		(project) => project.status === "package"
	)
}
