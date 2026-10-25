export const projectsKeys = {
	all: ["projects"] as const,
	githubActivity: (login: string) =>
		[...projectsKeys.all, "github-activity", login] as const
}
