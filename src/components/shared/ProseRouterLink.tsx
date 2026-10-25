import type { ComponentPropsWithoutRef } from "react"
import { Link } from "@tanstack/react-router"

import {
	getProseLinkClassName,
	type ProseLinkVariant
} from "@/components/shared/prose-link.styles"

type ProseRouterLinkProps = ComponentPropsWithoutRef<typeof Link> & {
	variant?: ProseLinkVariant
}

export function ProseRouterLink({
	className,
	variant = "default",
	...props
}: ProseRouterLinkProps) {
	return (
		<Link className={getProseLinkClassName(variant, className)} {...props} />
	)
}
