import { Link } from "@tanstack/react-router"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

const proseLinkBaseClass = "text-foreground underline"

const proseLinkMutedClass =
	"text-muted-foreground text-sm underline-offset-4 hover:underline"

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

function getProseLinkClassName(
	variant: ProseLinkVariant,
	className?: string
) {
	return cn(
		variant === "muted" ? proseLinkMutedClass : proseLinkBaseClass,
		className
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
	...props
}: ProseLinkProps) {
	const externalAttrs = getExternalLinkAttrs(href)

	return (
		<a
			href={href}
			className={getProseLinkClassName(variant, className)}
			target={target ?? externalAttrs.target}
			rel={rel ?? externalAttrs.rel}
			{...props}
		/>
	)
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

	return (
		<a
			href={href}
			className={cn(
				variant === "muted"
					? "text-muted-foreground inline-flex items-center gap-1.5 text-sm underline-offset-4 hover:underline"
					: "text-foreground inline-flex items-center gap-1.5",
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
