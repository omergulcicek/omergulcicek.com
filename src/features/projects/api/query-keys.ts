export const projectKeys = {
	all: ["projects"] as const,
	githubContributions: () => [...projectKeys.all, "github-contributions"] as const
}
