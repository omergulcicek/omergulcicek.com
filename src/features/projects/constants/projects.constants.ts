import type { Project } from "@/features/projects/types/project.types"

export const PROJECTS: Project[] = [
	{
		id: "takvim",
		title: "Takvim",
		description:
			"Takvim abonelikleri için ücretsiz, açık kaynak arayüzler ve içerik.",
		group: "personal",
		status: "live",
		href: "https://takvim.omergulcicek.com/",
		sortOrder: 1
	},
	{
		id: "footy",
		title: "Footy",
		description:
			"Futbol bilgini sına: Bil Bakalım, Skor Avcısı, Kupon Ustası ve Kadro Bulmacası.",
		group: "personal",
		status: "archived",
		href: "https://footy.omergulcicek.com/",
		sortOrder: 2
	},
	{
		id: "turkuaz",
		title: "Turkuaz",
		description: "Modern ve hızlı web tasarımı",
		group: "personal",
		status: "archived",
		href: "https://github.com/omergulcicek/turkuaz",
		sortOrder: 3
	},
	{
		id: "turkcedokuman",
		title: "Türkçe Doküman",
		description: "Yazılım geliştirme için Türkçe kaynaklar",
		group: "personal",
		status: "archived",
		href: "https://github.com/omergulcicek/turkcedokuman.com",
		sortOrder: 4
	},
	{
		id: "start",
		title: "ViraStack Start",
		description:
			"Üretime hazır Next.js ve TanStack başlangıç şablonları.",
		group: "virastack",
		status: "package",
		href: "https://virastack.com/start",
		sortOrder: 5
	},
	{
		id: "ai",
		title: "ViraStack AI",
		description: "Ajan uyumlu kurallar ve mimari kit.",
		group: "virastack",
		status: "package",
		href: "https://virastack.com/ai",
		sortOrder: 6
	},
	{
		id: "mask",
		title: "ViraStack Mask",
		description: "Formlar için erişilebilir input maskeleri.",
		group: "virastack",
		status: "package",
		href: "https://virastack.com/mask",
		sortOrder: 7
	},
	{
		id: "password",
		title: "ViraStack Password",
		description: "Erişilebilir parola görünürlük toggle'ı.",
		group: "virastack",
		status: "package",
		href: "https://virastack.com/password",
		sortOrder: 8
	},
	{
		id: "guide",
		title: "ViraStack Guide",
		description:
			"Modern web standartlarını adım adım gösteren interaktif rehber.",
		group: "virastack",
		status: "package",
		href: "https://virastack.com/guide",
		sortOrder: 9
	}
]

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
