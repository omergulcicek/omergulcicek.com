import { ME } from "@/constants/me.constants"
import type { Project } from "@/features/projects/types/project.types"

export const PROJECTS: Project[] = ME.projects

export const GITHUB_USERNAME = new URL(ME.contact.github).pathname.slice(1)

export const PROJECTS_UI = {
	viewListLabel: "Liste görünümü",
	viewGridLabel: "Kart görünümü",
	calendarAriaLabel: "GitHub katkı takvimi",
	calendarDescription:
		"Son bir yıldaki GitHub katkılarını gösteren ısı haritası. Bir hücrenin üzerine gelince o günün katkı sayısı görünür.",
	topReposLabel: "En çok katkı:",
	contributionsLoading: "Katkılar yükleniyor…",
	contributionsFailed: "Katkılar yüklenemedi",
	contributionsUnavailable: "GitHub katkıları şu an gösterilemiyor.",
	contributionsFetchError: "GitHub katkıları yüklenemedi",
	activityFetchError: "GitHub aktiviteleri yüklenemedi",
	contributionsInYear: (year: number, total: number) =>
		`${year} yılında ${total} katkı`,
	contributionsTotal: (total: number) => `${total} katkı`,
	dayContributions: (date: string, count: number) =>
		`${date} tarihinde ${count} katkı`,
	hideTopRepos: "En aktif depoları gizle",
	showTopRepos: "En aktif depoları göster"
} as const

export function getProjectsByGroup(group: Project["group"]): Project[] {
	return PROJECTS.filter((project) => project.group === group)
}

export function getPublishedVirastackProjects(): Project[] {
	return getProjectsByGroup("virastack").filter(
		(project) => project.status === "package"
	)
}

export function getProjectColorClass(projectId: string): string | undefined {
	return PROJECTS.find((project) => project.id === projectId)?.color
}
