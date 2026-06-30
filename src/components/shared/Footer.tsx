import { Link } from "@tanstack/react-router"

import { BrandMark } from "@/components/shared/brand-mark"
import { Container } from "@/components/shared/Container"
import { ProseLink } from "@/components/shared/prose-link"
import { sectionHeadingClass } from "@/components/shared/prose.styles"
import {
	FOOTER_NAV,
	FOOTER_SOURCE_CODE,
	getFooterCopyright
} from "@/constants/footer-nav.constants"
import { EXTERNAL_LINKS, SITE_CONTENT } from "@/constants/site-content.constants"
import { cn } from "@/lib/utils"

export function Footer() {
	return (
		<footer className="mt-20 border-t">
			<Container className="py-12 md:py-16">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-x-8">
					<div className="order-1 flex h-5 items-center sm:col-start-1 sm:row-start-1">
						<BrandMark />
					</div>
					<div className="order-3 flex h-5 items-center sm:order-none sm:col-start-2 sm:row-start-1">
						<p className={cn(sectionHeadingClass, "leading-5")}>
							{SITE_CONTENT.footerNavTitle}
						</p>
					</div>
					<div className="text-muted-foreground order-2 flex flex-col gap-2 text-sm sm:order-none sm:col-start-1 sm:row-start-2">
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
					<nav
						className="text-muted-foreground order-4 flex flex-col gap-2 text-sm sm:order-none sm:col-start-2 sm:row-start-2"
						aria-label={SITE_CONTENT.footerNavTitle}
					>
						{FOOTER_NAV.map((item) => (
							<Link
								key={item.href}
								to={item.href}
								className="hover:underline"
							>
								{item.label}
							</Link>
						))}
					</nav>
				</div>
			</Container>
		</footer>
	)
}
