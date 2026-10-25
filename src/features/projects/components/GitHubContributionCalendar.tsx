"use client"

import { bleedSectionClass } from "@/components/shared/prose.styles"
import { GitHubActivity } from "@/features/projects/components/GitHubActivity"
import {
	GITHUB_USERNAME,
	PROJECTS_UI
} from "@/features/projects/constants/projects.constants"

export function GitHubContributionCalendar() {
	return (
		<section className={bleedSectionClass} aria-label={PROJECTS_UI.calendarAriaLabel}>
			<p className="sr-only">{PROJECTS_UI.calendarDescription}</p>
			<div className="flex w-full justify-center overflow-x-auto py-2">
				<GitHubActivity username={GITHUB_USERNAME} showMonths />
			</div>
		</section>
	)
}
