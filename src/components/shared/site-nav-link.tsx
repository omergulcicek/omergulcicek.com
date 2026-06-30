import { Link } from "@tanstack/react-router"
import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

const siteNavLinkBaseClass = "focus-link text-sm transition-colors underline-offset-4"

const siteNavLinkActiveClass =
	"text-foreground font-medium underline decoration-foreground/50"

const siteNavLinkInactiveByVariant = {
	header: "text-muted-foreground hover:text-foreground",
	footer: "text-muted-foreground hover:underline"
} as const

type SiteNavLinkVariant = keyof typeof siteNavLinkInactiveByVariant

type SiteNavLinkProps = {
	href: string
	label: string
	exact?: boolean
	variant?: SiteNavLinkVariant
} & Pick<ComponentPropsWithoutRef<typeof Link>, "className">

export function SiteNavLink({
	href,
	label,
	exact,
	variant = "header",
	className
}: SiteNavLinkProps) {
	return (
		<Link
			to={href}
			className={cn(siteNavLinkBaseClass, className)}
			activeOptions={exact ? { exact: true } : undefined}
			inactiveProps={{
				className: siteNavLinkInactiveByVariant[variant]
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
