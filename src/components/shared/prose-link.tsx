import { Link } from "@tanstack/react-router"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from "@/components/ui/tooltip"
import {
	formatLinkTooltip,
	shouldShowLinkTooltip
} from "@/lib/format-link-tooltip"
import { withOutboundUtm } from "@/lib/outbound-url"
import { cn } from "@/lib/utils"

const proseLinkBaseClass = "focus-link text-foreground underline"

const proseLinkMutedClass =
	"focus-link text-muted-foreground text-sm underline-offset-4 hover:underline"

type ProseLinkVariant = "default" | "muted"

function getExternalLinkAttrs(href?: string) {
	if (!href?.startsWith("http")) {
		return {}
	}

	return {
		target: "_blank" as const,
		rel: "noopener noreferrer" as const
	}
}

function getProseLinkClassName(variant: ProseLinkVariant, className?: string) {
	return cn(
		variant === "muted" ? proseLinkMutedClass : proseLinkBaseClass,
		className
	)
}

function withLinkTooltip(
	href: string | undefined,
	label: ReactNode,
	link: ReactNode
) {
	if (!href || !shouldShowLinkTooltip(href, label)) {
		return link
	}

	return (
		<Tooltip>
			<TooltipTrigger asChild>{link}</TooltipTrigger>
			<TooltipContent side="top">{formatLinkTooltip(href)}</TooltipContent>
		</Tooltip>
	)
}

type ProseLinkProps = ComponentPropsWithoutRef<"a"> & {
	variant?: ProseLinkVariant
}

export function ProseLink({
	className,
	variant = "default",
	href,
	target,
	rel,
	children,
	...props
}: ProseLinkProps) {
	const externalAttrs = getExternalLinkAttrs(href)
	const resolvedHref = href ? withOutboundUtm(href) : href

	const link = (
		<a
			href={resolvedHref}
			className={getProseLinkClassName(variant, className)}
			target={target ?? externalAttrs.target}
			rel={rel ?? externalAttrs.rel}
			{...props}
		>
			{children}
		</a>
	)

	return withLinkTooltip(href, children, link)
}

type ProseIconLinkProps = ComponentPropsWithoutRef<"a"> & {
	icon: ReactNode
	variant?: ProseLinkVariant
}

export function ProseIconLink({
	icon,
	children,
	className,
	variant = "default",
	href,
	target,
	rel,
	...props
}: ProseIconLinkProps) {
	const externalAttrs = getExternalLinkAttrs(href)
	const resolvedHref = href ? withOutboundUtm(href) : href

	const link = (
		<a
			href={resolvedHref}
			className={cn(
				variant === "muted"
					? "focus-link text-muted-foreground inline-flex items-center gap-1.5 text-sm underline-offset-4 hover:underline"
					: "focus-link text-foreground inline-flex items-center gap-1.5",
				className
			)}
			target={target ?? externalAttrs.target}
			rel={rel ?? externalAttrs.rel}
			{...props}
		>
			{icon}
			<span className={variant === "muted" ? undefined : "underline"}>
				{children}
			</span>
		</a>
	)

	return withLinkTooltip(href, children, link)
}

type ProseRouterLinkProps = ComponentPropsWithoutRef<typeof Link> & {
	variant?: ProseLinkVariant
}

export function ProseRouterLink({
	className,
	variant = "default",
	...props
}: ProseRouterLinkProps) {
	return (
		<Link
			className={getProseLinkClassName(variant, className)}
			{...props}
		/>
	)
}

export { proseLinkBaseClass, proseLinkMutedClass }
