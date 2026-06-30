import { GitHubCalendar } from "react-github-calendar"

import { bleedSectionClass } from "@/components/shared/prose.styles"
import {
	GITHUB_CALENDAR_BLOCK_MARGIN,
	GITHUB_CALENDAR_BLOCK_SIZE,
	GITHUB_CALENDAR_CONTAINER_HEIGHT_PX,
	GITHUB_CALENDAR_THEME
} from "@/features/about/constants/github-calendar.constants"
import { useTheme } from "@/hooks/use-theme"

export function GitHubContributionCalendar() {
	const { theme, isMounted } = useTheme()

	return (
		<section className={bleedSectionClass} aria-label="GitHub katkı takvimi">
			<div
				className="text-muted-foreground relative flex w-full justify-center overflow-x-auto py-2"
				style={{ minHeight: GITHUB_CALENDAR_CONTAINER_HEIGHT_PX }}
			>
				{!isMounted ? (
					<div
						className="bg-muted absolute inset-0 animate-pulse rounded-lg"
						aria-hidden
					/>
				) : (
					<GitHubCalendar
						username="omergulcicek"
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
					/>
				)}
			</div>
		</section>
	)
}
