import { useReducedMotion } from "motion/react"

import { ContributionGrid } from "@/features/projects/components/ContributionGrid"
import { TopReposPanel } from "@/features/projects/components/TopReposPanel"
import {
	ACTIVITY_ACCENT,
	ACTIVITY_CELL_SIZE,
	ACTIVITY_MONTHS,
	CARD_PADDING,
	MIN_CARD_WIDTH
} from "@/features/projects/constants/github-activity.constants"
import { PROJECTS_UI } from "@/features/projects/constants/projects.constants"
import {
	emptyDays,
	gapFor,
	toScale,
	weeksFor
} from "@/features/projects/helpers/github-activity.helpers"
import { useGitHubActivity } from "@/features/projects/hooks/use-github-activity"
import { cn } from "@/lib/utils"

const ACTIVITY_SCALE = toScale(ACTIVITY_ACCENT)

type GitHubActivityProps = {
	username: string
	showMonths?: boolean
	className?: string
}

/** Contribution calendar with a collapsible list of the most active repositories. */
export function GitHubActivity({
	username,
	showMonths = false,
	className
}: GitHubActivityProps) {
	const reduceMotion = useReducedMotion()
	const { data, error, isPending } = useGitHubActivity(username)

	const contributions = data?.contributions ?? emptyDays(weeksFor(ACTIVITY_MONTHS))
	const repos = data?.repos ?? []
	const total = contributions.reduce((sum, day) => sum + day.count, 0)
	const year = Number(contributions.at(-1)?.date.slice(0, 4))

	const heading = isPending
		? PROJECTS_UI.contributionsLoading
		: error
			? PROJECTS_UI.contributionsFailed
			: Number.isFinite(year)
				? PROJECTS_UI.contributionsInYear(year, total)
				: PROJECTS_UI.contributionsTotal(total)

	const columns = Math.min(
		Math.ceil(contributions.length / 7),
		weeksFor(ACTIVITY_MONTHS)
	)
	const width = Math.max(
		MIN_CARD_WIDTH,
		columns * (ACTIVITY_CELL_SIZE + gapFor(ACTIVITY_CELL_SIZE)) -
			gapFor(ACTIVITY_CELL_SIZE) +
			CARD_PADDING
	)
	const showRepos = repos.length > 0 && !error

	return (
		<div
			data-slot="github-activity"
			className={cn(
				"bg-card relative max-w-full overflow-hidden rounded-[28px] p-4",
				showRepos && "pb-[76px]",
				className
			)}
			style={{ width }}
		>
			<p className="text-foreground mb-4 px-1.5 text-base font-medium">{heading}</p>

			{error ? (
				<p className="text-muted-foreground px-1.5 text-sm" role="alert">
					{error.message || PROJECTS_UI.contributionsUnavailable}
				</p>
			) : (
				<div
					className={cn(isPending && "animate-pulse opacity-70")}
					aria-busy={isPending || undefined}
				>
					<ContributionGrid
						contributions={contributions}
						scale={ACTIVITY_SCALE}
						cellSize={ACTIVITY_CELL_SIZE}
						months={ACTIVITY_MONTHS}
						showMonths={showMonths}
						label={heading}
						reduceMotion={reduceMotion}
					/>
				</div>
			)}

			{showRepos ? <TopReposPanel repos={repos} reduceMotion={reduceMotion} /> : null}
		</div>
	)
}
