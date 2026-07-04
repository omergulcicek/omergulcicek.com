import { ActivityCalendar } from "react-activity-calendar"

import {
	GITHUB_CALENDAR_BLOCK_MARGIN,
	GITHUB_CALENDAR_BLOCK_SIZE,
	GITHUB_CALENDAR_THEME
} from "@/features/about/constants/github-calendar.constants"
import type { GitHubContribution } from "@/features/about/schemas/github-contribution.schema"
import { useTheme } from "@/hooks/use-theme"

type GitHubContributionCalendarInnerProps = {
	contributions: GitHubContribution[]
}

export function GitHubContributionCalendarInner({
	contributions
}: GitHubContributionCalendarInnerProps) {
	const { theme } = useTheme()

	return (
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
	)
}
