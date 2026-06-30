import { Link } from "@tanstack/react-router"
import { ExternalLink } from "lucide-react"
import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

const siteNavLinkBaseClass = "focus-link text-sm transition-colors underline-offset-4"

const siteNavLinkActiveClass =
	"text-foreground font-medium underline decoration-foreground/50"

const siteNavLinkInactiveClass = "text-muted-foreground hover:text-foreground"

type SiteNavLinkProps = {
	href: string
	label: string
	exact?: boolean
	external?: boolean
} & Pick<ComponentPropsWithoutRef<typeof Link>, "className">

export function SiteNavLink({
	href,
	label,
	exact,
	external,
	className
}: SiteNavLinkProps) {
	if (external) {
		return (
			<a
				href={href}
				className={cn(
					siteNavLinkBaseClass,
					siteNavLinkInactiveClass,
					"inline-flex items-center gap-1",
					className
				)}
				target="_blank"
				rel="noopener noreferrer"
			>
				{label}
				<ExternalLink className="size-3 shrink-0" aria-hidden />
			</a>
		)
	}

	return (
		<Link
			to={href}
			className={cn(siteNavLinkBaseClass, className)}
			activeOptions={exact ? { exact: true } : undefined}
			inactiveProps={{
				className: siteNavLinkInactiveClass
			}}
			activeProps={{
				className: siteNavLinkActiveClass,
				"aria-current": "page"
			}}
		>
			{label}
		</Link>
	)
}
