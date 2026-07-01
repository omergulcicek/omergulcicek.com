import { BrandMark } from "@/components/shared/brand-mark"
import { SiteNavLink } from "@/components/shared/site-nav-link"
import { Container } from "@/components/shared/Container"
import { ProseLink } from "@/components/shared/prose-link"
import { sectionHeadingClass } from "@/components/shared/prose.styles"
import {
	FOOTER_NAV,
	FOOTER_SOURCE_CODE,
	getFooterCopyright
} from "@/constants/footer-nav.constants"
import { EXTERNAL_LINKS, SITE_CONTENT } from "@/constants/site-content.constants"
import { getPublishedVirastackProjects } from "@/features/projects/constants/projects.constants"
import { cn } from "@/lib/utils"

const footerNavClass =
	"text-muted-foreground flex flex-col gap-2 text-xs md:text-sm"

export function Footer() {
	const virastackProjects = getPublishedVirastackProjects()

	return (
		<footer className="mt-12 border-t md:mt-20">
			<Container className="py-8 md:py-12">
				<div className="flex flex-col gap-8 md:gap-10">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-5 sm:gap-x-8 md:gap-x-12">
						<div className="flex w-fit flex-col sm:col-span-1">
							<BrandMark />
						</div>

						<div className="flex min-w-0 flex-col gap-3 sm:col-span-2">
							<p className={cn(sectionHeadingClass, "leading-5")}>
								{SITE_CONTENT.footerNavTitle}
							</p>
							<nav
								className={footerNavClass}
								aria-label={SITE_CONTENT.footerNavTitle}
							>
								{FOOTER_NAV.map((item) => (
									<SiteNavLink
										key={item.href}
										href={item.href}
										label={item.label}
										external={item.external}
									/>
								))}
							</nav>
						</div>

						<div className="flex min-w-0 flex-col gap-3 sm:col-span-2">
							<p className={cn(sectionHeadingClass, "leading-5")}>
								{SITE_CONTENT.footerVirastackTitle}
							</p>
							<nav
								className={footerNavClass}
								aria-label={SITE_CONTENT.footerVirastackTitle}
							>
								{virastackProjects.map((project) => (
									<SiteNavLink
										key={project.id}
										href={project.href}
										label={project.title}
										external
									/>
								))}
								<SiteNavLink
									href="/projects#virastack"
									label={SITE_CONTENT.footerVirastackAllProjects}
								/>
							</nav>
						</div>
					</div>

					<div
						className={cn(
							footerNavClass,
							"border-border gap-2 border-t pt-6 md:pt-8"
						)}
					>
						<p>
							<ProseLink href={EXTERNAL_LINKS.virastack}>ViraStack</ProseLink>
							,{" "}
							<ProseLink href={EXTERNAL_LINKS.tanstackStart}>
								TanStack Start
							</ProseLink>
							,{" "}
							<ProseLink href={EXTERNAL_LINKS.tailwind}>
								Tailwind CSS
							</ProseLink>{" "}
							ve{" "}
							<ProseLink href={EXTERNAL_LINKS.shadcn}>shadcn/ui</ProseLink>{" "}
							ile geliştirildi.
						</p>
						<p>
							Kaynak kod{" "}
							<ProseLink href={FOOTER_SOURCE_CODE.href}>GitHub</ProseLink>
							&apos;da.
						</p>
						<p>{getFooterCopyright()}</p>
					</div>
				</div>
			</Container>
		</footer>
	)
}
