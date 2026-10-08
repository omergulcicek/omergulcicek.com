import type { ErrorComponentProps } from "@tanstack/react-router"

import { RouteErrorPage } from "@/components/shared/route-error-page"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"

function toRouteError(error: unknown): Error | undefined {
	if (error instanceof Error) {
		return error
	}

	return undefined
}

export function BlogRouteError({ error }: ErrorComponentProps) {
	return (
		<RouteErrorPage
			title={BLOG_UI.errorTitle}
			description={BLOG_UI.errorDescription}
			retryLabel={BLOG_UI.errorRetry}
			error={toRouteError(error)}
		/>
	)
}
