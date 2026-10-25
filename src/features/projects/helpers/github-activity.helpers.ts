import { TURKISH_SHORT_MONTHS } from "@/constants/date.constants"
import {
	CONTRIBUTION_LEVELS,
	MIN_LABEL_WEEKS,
	WEEKS_PER_MONTH
} from "@/features/projects/constants/github-activity.constants"
import { PROJECTS_UI } from "@/features/projects/constants/projects.constants"
import type {
	Contribution,
	ContributionLevel,
	LevelStyle
} from "@/features/projects/types/github-activity.types"

const DAY_FORMAT = new Intl.DateTimeFormat("tr-TR", {
	day: "numeric",
	month: "long",
	year: "numeric"
})

export function gapFor(cellSize: number): number {
	return Math.max(2, Math.round(cellSize / 4))
}

export function weeksFor(months: number): number {
	return Math.max(1, Math.ceil(months * WEEKS_PER_MONTH))
}

export function toContributionLevel(level: number): ContributionLevel {
	const clamped = Math.min(4, Math.max(0, Math.round(level)))

	return CONTRIBUTION_LEVELS[clamped] ?? 0
}

export function toWeeks(contributions: Contribution[]): Contribution[][] {
	const weeks: Contribution[][] = []

	for (let index = 0; index < contributions.length; index += 7) {
		weeks.push(contributions.slice(index, index + 7))
	}

	return weeks
}

/** One label per week column; a month is labelled only when it spans enough weeks. */
export function toMonthLabels(
	weeks: Contribution[][]
): { key: string; label: string | null }[] {
	const monthAt = (index: number) => weeks[index]?.[0]?.date.slice(5, 7)
	const labels = weeks.map((week, index) => ({
		key: week[0]?.date ?? String(index),
		label: null as string | null
	}))

	let start = 0
	for (let index = 1; index <= weeks.length; index++) {
		if (index < weeks.length && monthAt(index) === monthAt(start)) continue

		const startLabel = labels[start]
		if (index - start >= MIN_LABEL_WEEKS && startLabel) {
			startLabel.label = TURKISH_SHORT_MONTHS[Number(monthAt(start)) - 1] ?? null
		}
		start = index
	}

	return labels
}

export function describeDay({ count, date }: Contribution): string {
	return PROJECTS_UI.dayContributions(
		DAY_FORMAT.format(new Date(`${date}T00:00:00`)),
		count
	)
}

/** Placeholder grid shown while the real calendar loads. */
export function emptyDays(weeks: number): Contribution[] {
	const today = new Date()

	return Array.from({ length: weeks * 7 }, (_, index) => {
		const date = new Date(today)
		date.setDate(date.getDate() - (weeks * 7 - 1 - index))

		return { date: date.toISOString().slice(0, 10), count: 0, level: 0 }
	})
}

export function toScale(accent: readonly string[]): LevelStyle[] {
	const colors = ["transparent", ...accent]

	return CONTRIBUTION_LEVELS.map((level) => {
		const color = colors[level] ?? colors.at(-1) ?? "transparent"
		return { backgroundColor: color, opacity: color === "transparent" ? 0 : 1 }
	})
}
