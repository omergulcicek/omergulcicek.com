import { Link } from "@tanstack/react-router"
import { ChevronRight } from "lucide-react"

import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { pageShellClass, proseParagraphClass } from "@/components/shared/prose.styles"
import { SITE_CONTENT } from "@/constants/site-content.constants"

const notFoundLinkClass =
	"group text-muted-foreground inline-flex items-center gap-1 text-sm transition-colors hover:text-foreground"

export function NotFoundPage() {
	return (
		<Container className={pageShellClass}>
			<div className="flex flex-col gap-4">
				<p className="text-muted-foreground text-sm tabular-nums">404</p>
				<PageHeader title={SITE_CONTENT.notFoundTitle}>
					<p className={proseParagraphClass}>
						{SITE_CONTENT.notFoundDescription}
					</p>
				</PageHeader>
			</div>
			<nav
				className="flex flex-col items-start gap-4"
				aria-label="Yardımcı bağlantılar"
			>
				<Link to="/" className={notFoundLinkClass}>
					{SITE_CONTENT.notFoundHomeCta}
					<ChevronRight
						className="size-4 transition-transform group-hover:translate-x-0.5"
						aria-hidden
					/>
				</Link>
				<Link to="/blog" className={notFoundLinkClass}>
					{SITE_CONTENT.notFoundBlogCta}
					<ChevronRight
						className="size-4 transition-transform group-hover:translate-x-0.5"
						aria-hidden
					/>
				</Link>
			</nav>
		</Container>
	)
}
