import { Link, useRouter } from "@tanstack/react-router"
import { ChevronRight, RotateCcw } from "lucide-react"

import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { pageShellClass, proseParagraphClass } from "@/components/shared/prose.styles"
import { Button } from "@/components/ui/button"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { cn } from "@/lib/utils"

const routeErrorLinkClass =
	"group text-muted-foreground inline-flex items-center gap-1 text-sm transition-colors hover:text-foreground"

type RouteErrorPageProps = {
	title: string
	description: string
	codeLabel?: string
	retryLabel?: string
	error?: Error
}

export function RouteErrorPage({
	title,
	description,
	codeLabel = SITE_CONTENT.routeErrorCodeLabel,
	retryLabel = SITE_CONTENT.routeErrorRetry,
	error
}: RouteErrorPageProps) {
	const router = useRouter()
	const showErrorDetails = import.meta.env.DEV && error

	return (
		<Container className={pageShellClass}>
			<div className="flex flex-col gap-4">
				<p className="text-muted-foreground text-sm tabular-nums">{codeLabel}</p>
				<PageHeader title={title}>
					<p className={proseParagraphClass}>{description}</p>
					{showErrorDetails ? (
						<p className={cn(proseParagraphClass, "font-mono text-xs")}>
							{error.message}
						</p>
					) : null}
				</PageHeader>
			</div>
			<div className="flex flex-col items-start gap-4">
				<Button
					type="button"
					variant="outline"
					size="sm"
					onClick={() => {
						void router.invalidate()
					}}
				>
					<RotateCcw aria-hidden />
					{retryLabel}
				</Button>
				<nav
					className="flex flex-col items-start gap-4"
					aria-label="Yardımcı bağlantılar"
				>
					<Link to="/" className={routeErrorLinkClass}>
						{SITE_CONTENT.notFoundHomeCta}
						<ChevronRight
							className="size-4 transition-transform group-hover:translate-x-0.5"
							aria-hidden
						/>
					</Link>
					<Link to="/blog" className={routeErrorLinkClass}>
						{SITE_CONTENT.notFoundBlogCta}
						<ChevronRight
							className="size-4 transition-transform group-hover:translate-x-0.5"
							aria-hidden
						/>
					</Link>
				</nav>
			</div>
		</Container>
	)
}
