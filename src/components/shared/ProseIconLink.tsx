import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { withOutboundUtm } from "@/lib/outbound-url"
import { cn } from "@/lib/utils"

import {
	getExternalLinkAttrs,
	type ProseLinkVariant
} from "@/components/shared/prose-link.styles"
import { ProseLinkTooltip } from "@/components/shared/ProseLinkTooltip"

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
		<ProseLinkTooltip href={href} label={children}>
			<a
				href={href ? withOutboundUtm(href) : href}
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
		</ProseLinkTooltip>
	)
}
