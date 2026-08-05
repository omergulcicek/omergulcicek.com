"use client"

import { bleedSectionClass } from "@/components/shared/prose.styles"
import { GitHubActivity } from "@/features/projects/components/github-activity"

const GITHUB_USERNAME = "omergulcicek"

export function GitHubContributionCalendar() {
	return (
		<section className={bleedSectionClass} aria-label="GitHub katkı takvimi">
			<p className="sr-only">
				Son bir yıldaki GitHub commit aktivitesini gösteren ısı haritası. Hücreler
				üzerine gelindiğinde günlük katkı sayısı görüntülenir.
			</p>
			<div className="flex w-full justify-center overflow-x-auto py-2">
				<GitHubActivity username={GITHUB_USERNAME} showMonths />
			</div>
		</section>
	)
}
