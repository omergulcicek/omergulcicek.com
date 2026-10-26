import type { ReactNode } from "react"
import { Container } from "@/components/shared/Container"
import { pageShellClass, pageStackGapClass } from "@/components/shared/prose.styles"
import { ContactCta } from "@/features/home/components/ContactCta"
import { Hero } from "@/features/home/components/Hero"
import { StackStrip } from "@/features/home/components/StackStrip"
import { VirastackCaseStudyCard } from "@/features/home/components/VirastackCaseStudyCard"
import { cn } from "@/lib/utils"

type HomePageProps = {
	/** Composed at the route level so the home feature never imports other features. */
	blogSection: ReactNode
	experiencesSection: ReactNode
}

export function HomePage({ blogSection, experiencesSection }: HomePageProps) {
	return (
		<div className={pageShellClass}>
			<Container className={cn("flex flex-col", pageStackGapClass)}>
				<Hero />
			</Container>
			<StackStrip />
			<Container className={cn("flex flex-col", pageStackGapClass)}>
				<VirastackCaseStudyCard />
				{blogSection}
				{experiencesSection}
				<ContactCta />
			</Container>
		</div>
	)
}
