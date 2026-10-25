export type ContributionLevel = 0 | 1 | 2 | 3 | 4

export type Contribution = {
	date: string
	count: number
	level: ContributionLevel
}

export type RepoContribution = {
	name: string
	count: number
	href: string
	/** Owner avatar for repos owned by someone else; own repos show an initial. */
	avatarUrl?: string
}

export type GitHubActivityData = {
	contributions: Contribution[]
	repos: RepoContribution[]
}

export type LevelStyle = { backgroundColor: string; opacity: number }

export type HoveredDay = { day: Contribution; x: number; y: number }
