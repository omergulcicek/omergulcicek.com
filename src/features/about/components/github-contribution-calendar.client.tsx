import { lazy, Suspense } from "react"

import { bleedSectionClass } from "@/components/shared/prose.styles"
import {
	GITHUB_CALENDAR_CONTAINER_HEIGHT_PX,
	GITHUB_CALENDAR_CONTENT_HEIGHT_PX,
	GITHUB_CALENDAR_WIDTH_PX
} from "@/features/about/constants/github-calendar.constants"
import type { GitHubContribution } from "@/features/about/schemas/github-contribution.schema"
import { useTheme } from "@/hooks/use-theme"
import { cn } from "@/lib/utils"

type GitHubContributionCalendarProps = {
	contributions: GitHubContribution[]
}

function GitHubCalendarSkeleton() {
	return (
		<div
			className="bg-muted/40 w-full max-w-[699px] animate-pulse rounded-md"
			style={{
				minHeight: GITHUB_CALENDAR_CONTENT_HEIGHT_PX,
				height: GITHUB_CALENDAR_CONTENT_HEIGHT_PX
			}}
			aria-hidden
		/>
	)
}

const LazyGitHubContributionCalendarInner = lazy(async () => {
	const module = await import(
		"@/features/about/components/github-contribution-calendar-inner.client"
	)

	return { default: module.GitHubContributionCalendarInner }
})

export function GitHubContributionCalendar({
	contributions
}: GitHubContributionCalendarProps) {
	const { isMounted } = useTheme()

	return (
		<section className={bleedSectionClass} aria-label="GitHub katkı takvimi">
			<p className="sr-only">
				Son bir yıldaki GitHub commit aktivitesini gösteren ısı haritası. Hücreler
				üzerine gelindiğinde günlük katkı sayısı görüntülenir.
			</p>
			<div
				className="text-muted-foreground flex w-full justify-center overflow-x-auto overflow-y-hidden py-2"
				style={{
					minHeight: GITHUB_CALENDAR_CONTAINER_HEIGHT_PX,
					height: GITHUB_CALENDAR_CONTAINER_HEIGHT_PX
				}}
			>
				<div
					className={cn("github-calendar", "w-fit shrink-0")}
					style={{
						minWidth: GITHUB_CALENDAR_WIDTH_PX,
						minHeight: GITHUB_CALENDAR_CONTENT_HEIGHT_PX
					}}
				>
					{isMounted ? (
						<Suspense fallback={<GitHubCalendarSkeleton />}>
							<LazyGitHubContributionCalendarInner
								contributions={contributions}
							/>
						</Suspense>
					) : (
						<GitHubCalendarSkeleton />
					)}
				</div>
			</div>
		</section>
	)
}
