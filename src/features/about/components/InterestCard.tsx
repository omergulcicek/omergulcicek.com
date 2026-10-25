import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { withOutboundUtm } from "@/lib/outbound-url"

export function InterestCard({
	href,
	className,
	children
}: {
	href?: string
	className: string
	children: ReactNode
}) {
	if (!href) {
		return <div className={className}>{children}</div>
	}

	const isExternal = href.startsWith("http")
	const linkProps: ComponentPropsWithoutRef<"a"> = isExternal
		? {
				href: withOutboundUtm(href),
				target: "_blank",
				rel: "noopener noreferrer"
			}
		: { href }

	return (
		<a className={className} {...linkProps}>
			{children}
		</a>
	)
}
