import { Link } from "@tanstack/react-router"
import { Bot, ChevronRight } from "lucide-react"

import { cardTitleClass, pageSectionClass } from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import {
	getInteractiveCardClassName,
	interactiveCardChevronClass
} from "@/components/shared/interactive-card.styles"

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
					<span className="bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 inline-flex size-12 shrink-0 items-center justify-center rounded-xl">
						<Bot className="size-7" strokeWidth={1.75} aria-hidden />
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
