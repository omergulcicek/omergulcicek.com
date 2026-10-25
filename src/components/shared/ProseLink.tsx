import type { ComponentPropsWithoutRef } from "react"

import { withOutboundUtm } from "@/lib/outbound-url"

import {
	getExternalLinkAttrs,
	getProseLinkClassName,
	type ProseLinkVariant
} from "@/components/shared/prose-link.styles"
import { ProseLinkTooltip } from "@/components/shared/ProseLinkTooltip"

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

	return (
		<ProseLinkTooltip href={href} label={children}>
			<a
				href={href ? withOutboundUtm(href) : href}
				className={getProseLinkClassName(variant, className)}
				target={target ?? externalAttrs.target}
				rel={rel ?? externalAttrs.rel}
				{...props}
			>
				{children}
			</a>
		</ProseLinkTooltip>
	)
}
