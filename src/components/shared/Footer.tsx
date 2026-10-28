import { Mail, Rss } from "lucide-react"

import {
	FOOTER_NAV,
	getFooterCopyright
} from "@/constants/footer-nav.constants"
import {
	EXTERNAL_LINKS,
	SITE_CONTENT
} from "@/constants/site-content.constants"
import { SITE_COPY } from "@/constants/site-copy.constants"
import { SITE } from "@/constants/site.constants"

import { cn } from "@/lib/utils"

import { BrandMark } from "@/components/shared/BrandMark"
import { Container } from "@/components/shared/Container"
import { interactiveSurfaceBgClass } from "@/components/shared/interactive-card.styles"
import { sectionHeadingClass } from "@/components/shared/prose.styles"
import { ProseLink } from "@/components/shared/ProseLink"
import { SiteNavLink } from "@/components/shared/SiteNavLink"
import { SocialLinks } from "@/components/shared/SocialLinks"
import { VirastackShortName } from "@/components/shared/VirastackShortName"
import { Button } from "@/components/ui/button"
import { getPublishedVirastackProjects } from "@/features/projects"

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
			<Container className="max-w-3xl py-8 md:py-12">
				<div className="flex flex-col gap-8 md:gap-10">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-x-8 md:gap-x-12">
						<div className="flex min-w-0 flex-col gap-3">
							<BrandMark variant="profile" />
							<SocialLinks className="-ml-2">
								<Button variant="ghost" size="icon-sm" asChild>
									<a
										href={EXTERNAL_LINKS.email}
										aria-label={SITE_CONTENT.footerEmailAria}
									>
										<Mail className="size-4" aria-hidden />
									</a>
								</Button>
								<Button variant="ghost" size="icon-sm" asChild>
									<a
										href={SITE.feedPath}
										aria-label={SITE_CONTENT.footerRssAria}
									>
										<Rss className="size-4" aria-hidden />
									</a>
								</Button>
							</SocialLinks>
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
										<span className={cn("italic", project.color)}>
											<VirastackShortName title={project.title} />
										</span>
									</SiteNavLink>
								))}
							</nav>
						</div>
					</div>

					<div
						className={cn(
							footerNavClass,
							"border-border flex-col-reverse gap-2 border-t pt-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 md:pt-8"
						)}
					>
						{/* Prerendered pages keep the build year; on New Year's Day the browser's year
						    differs until the next deploy, which must not fail hydration. */}
						<p className="shrink-0" suppressHydrationWarning>
							{getFooterCopyright()}
						</p>
						<p className="sm:text-right">
							<ProseLink href={EXTERNAL_LINKS.virastack}>
								{builtWith.virastack}
							</ProseLink>
							,{" "}
							<ProseLink href={EXTERNAL_LINKS.tanstackStart}>
								{builtWith.tanstackStart}
							</ProseLink>
							,{" "}
							<ProseLink href={EXTERNAL_LINKS.tailwind}>
								{builtWith.tailwind}
							</ProseLink>
							{builtWith.and}
							<ProseLink href={EXTERNAL_LINKS.shadcn}>
								{builtWith.shadcn}
							</ProseLink>
							{builtWith.after}
							{/* Own line, so the sentence never breaks mid-phrase next to the copyright. */}
							<span className="block">
								{sourceCode.before}
								<ProseLink href={SITE.repository}>{sourceCode.link}</ProseLink>
								{sourceCode.after}
							</span>
						</p>
					</div>
				</div>
			</Container>
		</footer>
	)
}
