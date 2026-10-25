import { BrandMark } from "@/components/shared/BrandMark"
import { SiteNavLink } from "@/components/shared/SiteNavLink"
import { interactiveSurfaceBgClass } from "@/components/shared/interactive-card.styles"
import { ProseLink } from "@/components/shared/ProseLink"
import {
	bleedSectionClass,
	sectionHeadingClass
} from "@/components/shared/prose.styles"
import {
	FOOTER_NAV,
	getFooterCopyright
} from "@/constants/footer-nav.constants"
import { EXTERNAL_LINKS, SITE_CONTENT } from "@/constants/site-content.constants"
import { SITE_COPY } from "@/constants/site-copy.constants"
import { SITE } from "@/constants/site.constants"
import { getPublishedVirastackProjects, VirastackProductName } from "@/features/projects"
import { cn } from "@/lib/utils"

const footerNavClass =
	"text-muted-foreground flex flex-col gap-2 text-xs md:text-sm"

export function Footer() {
	const virastackProjects = getPublishedVirastackProjects()
	const { builtWith, sourceCode } = SITE_COPY.footer

	return (
		<footer
			className={cn(
				"mt-12 border-t pb-[max(1rem,env(safe-area-inset-bottom))] md:mt-20",
				interactiveSurfaceBgClass
			)}
		>
			<div className={cn(bleedSectionClass, "py-8 md:py-12")}>
				<div className="flex flex-col gap-8 md:gap-10">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-x-8 md:gap-x-12">
						<div className="flex min-w-0 flex-col gap-3">
							<BrandMark variant="profile" />
						</div>

						<div className="flex min-w-0 flex-col gap-3">
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
									/>
								))}
							</nav>
						</div>

						<div className="flex min-w-0 flex-col gap-3">
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
									>
										<VirastackProductName
											projectId={project.id}
											title={project.title}
										/>
									</SiteNavLink>
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
							<ProseLink href={EXTERNAL_LINKS.virastack}>{builtWith.virastack}</ProseLink>
							,{" "}
							<ProseLink href={EXTERNAL_LINKS.tanstackStart}>
								{builtWith.tanstackStart}
							</ProseLink>
							,{" "}
							<ProseLink href={EXTERNAL_LINKS.tailwind}>{builtWith.tailwind}</ProseLink>
							{builtWith.and}
							<ProseLink href={EXTERNAL_LINKS.shadcn}>{builtWith.shadcn}</ProseLink>
							{builtWith.after}
						</p>
						<p>
							{sourceCode.before}
							<ProseLink href={SITE.repository}>{sourceCode.link}</ProseLink>
							{sourceCode.after}
						</p>
						<p>{getFooterCopyright()}</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
