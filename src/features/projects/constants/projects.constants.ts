import type { Project } from "@/features/projects/types/project.types"

export const PROJECTS: Project[] = [
	{
		id: "footy",
		title: "Footy",
		description:
			"Futbol bilgini sına: Bil Bakalım, Skor Avcısı, Kupon Ustası ve Kadro Bulmacası.",
		group: "personal",
		status: "live",
		href: "https://footy.omergulcicek.com/",
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
		href: "https://takvim.omergulcicek.com/",
		sortOrder: 2,
		featured: true
	},
	{
		id: "start",
		title: "ViraStack Start",
		description:
			"Üretime hazır Next.js ve TanStack başlangıç şablonları.",
		group: "virastack",
		status: "package",
		href: "https://virastack.com/start",
		sortOrder: 3
	},
	{
		id: "ai",
		title: "ViraStack AI",
		description: "Ajan uyumlu kurallar ve mimari kit.",
		group: "virastack",
		status: "package",
		href: "https://virastack.com/ai",
		sortOrder: 4
	},
	{
		id: "mask",
		title: "ViraStack Mask",
		description: "Formlar için erişilebilir input maskeleri.",
		group: "virastack",
		status: "package",
		href: "https://virastack.com/mask",
		sortOrder: 5
	},
	{
		id: "password",
		title: "ViraStack Password",
		description: "Erişilebilir parola görünürlük toggle'ı.",
		group: "virastack",
		status: "package",
		href: "https://virastack.com/password",
		sortOrder: 6
	},
	{
		id: "guide",
		title: "ViraStack Guide",
		description:
			"Modern web standartlarını adım adım gösteren interaktif rehber.",
		group: "virastack",
		status: "package",
		href: "https://virastack.com/guide",
		sortOrder: 7
	},
	{
		id: "turkuaz",
		title: "Turkuaz",
		description: "Hızlı ve sade web sayfaları için CSS odaklı framework (2017).",
		group: "archive",
		status: "archived",
		href: "https://github.com/omergulcicek/turkuaz",
		sortOrder: 8
	},
	{
		id: "turkcedokuman",
		title: "Türkçe Doküman",
		description: "Yazılım geliştirme konularında Türkçe kaynak projesi.",
		group: "archive",
		status: "archived",
		href: "https://github.com/omergulcicek/turkcedokuman.com",
		sortOrder: 9
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
