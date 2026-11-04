import type { ErrorComponentProps } from "@tanstack/react-router"

import { SITE_CONTENT } from "@/constants/site-content.constants"

import { RouteErrorPage } from "@/components/shared/RouteErrorPage"

/** Fallback for any route without its own error UI; mounted once on the root route. */
export function SiteRouteError({ error }: ErrorComponentProps) {
	return (
		<RouteErrorPage
			title={SITE_CONTENT.routeErrorTitle}
			description={SITE_CONTENT.routeErrorDescription}
			error={error instanceof Error ? error : undefined}
		/>
	)
}
