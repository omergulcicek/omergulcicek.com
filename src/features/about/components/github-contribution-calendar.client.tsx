import { ActivityCalendar } from "react-activity-calendar"

import { bleedSectionClass } from "@/components/shared/prose.styles"
import {
	GITHUB_CALENDAR_BLOCK_MARGIN,
	GITHUB_CALENDAR_BLOCK_SIZE,
	GITHUB_CALENDAR_CONTAINER_HEIGHT_PX,
	GITHUB_CALENDAR_CONTENT_HEIGHT_PX,
	GITHUB_CALENDAR_THEME,
	GITHUB_CALENDAR_WIDTH_PX
} from "@/features/about/constants/github-calendar.constants"
import type { GitHubContribution } from "@/features/about/schemas/github-contribution.schema"
import { useTheme } from "@/hooks/use-theme"
import { cn } from "@/lib/utils"

type GitHubContributionCalendarProps = {
	contributions: GitHubContribution[]
}

export function GitHubContributionCalendar({
	contributions
}: GitHubContributionCalendarProps) {
	const { theme } = useTheme()

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
					<ActivityCalendar
						data={contributions}
						colorScheme={theme === "dark" ? "dark" : "light"}
						theme={GITHUB_CALENDAR_THEME}
						labels={{
							months: [
								"Oca",
								"Şub",
								"Mar",
								"Nis",
								"May",
								"Haz",
								"Tem",
								"Ağu",
								"Eyl",
								"Eki",
								"Kas",
								"Ara"
							],
							totalCount: "Son yıl içerisinde {{count}} katkı",
							legend: {
								less: "Az",
								more: "Çok"
							}
						}}
						blockSize={GITHUB_CALENDAR_BLOCK_SIZE}
						blockMargin={GITHUB_CALENDAR_BLOCK_MARGIN}
						weekStart={1}
						maxLevel={4}
					/>
				</div>
			</div>
		</section>
	)
}
