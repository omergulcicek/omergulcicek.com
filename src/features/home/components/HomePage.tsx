import { lazy, Suspense, type ReactNode } from "react"
import { Container } from "@/components/shared/Container"
import { pageShellClass, pageStackGapClass } from "@/components/shared/prose.styles"
import { ContactCta } from "@/features/home/components/ContactCta"
import { Hero } from "@/features/home/components/Hero"
import { VirastackCaseStudyCard } from "@/features/home/components/VirastackCaseStudyCard"
import { cn } from "@/lib/utils"
import { StackStripFallback } from "@/features/home/components/StackStripFallback"

const StackStrip = lazy(async () => {
	const module = await import("@/features/home/components/StackStrip")
	return { default: module.StackStrip }
})

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
			<Suspense fallback={<StackStripFallback />}>
				<StackStrip />
			</Suspense>
			<Container className={cn("flex flex-col", pageStackGapClass)}>
				<VirastackCaseStudyCard />
				{blogSection}
				{experiencesSection}
				<ContactCta />
			</Container>
		</div>
	)
}
