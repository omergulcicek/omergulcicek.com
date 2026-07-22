import { Link } from "@tanstack/react-router"
import { ChevronRight } from "lucide-react"

import {
	getInteractiveCardClassName,
	interactiveCardChevronClass
} from "@/components/shared/interactive-card.styles"
import { cardTitleClass, pageSectionClass } from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { VirastackLogo } from "@/components/shared/virastack-logo"

export function VirastackCaseStudyCard() {
	return (
		<section className={pageSectionClass}>
			<SectionHeading>ViraStack</SectionHeading>
			<Link
				to="/projects"
				hash="virastack"
				className={getInteractiveCardClassName()}
			>
				<div className="flex items-start gap-4">
					<span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted">
						<VirastackLogo className="size-7" />
					</span>
					<div className="flex min-w-0 flex-1 flex-col gap-2">
						<div className="flex items-start justify-between gap-2 md:gap-3">
							<h3 className={cardTitleClass}>ViraStack</h3>
							<ChevronRight
								className={interactiveCardChevronClass}
								aria-hidden
							/>
						</div>
						<p className="text-muted-foreground text-pretty text-xs leading-relaxed md:text-sm">
							Frontend geliştiriciler için şablonlardan npm paketlerine uzanan açık
							kaynak ekosistem — AI Rules, Next.js ve TanStack boilerplate&apos;leri.
						</p>
					</div>
				</div>
			</Link>
		</section>
	)
}
