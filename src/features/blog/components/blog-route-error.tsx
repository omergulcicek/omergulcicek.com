import { RouteErrorPage } from "@/components/shared/route-error-page"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"

type BlogRouteErrorProps = {
	error: Error
}

export function BlogRouteError({ error }: BlogRouteErrorProps) {
	return (
		<RouteErrorPage
			title={BLOG_UI.errorTitle}
			description={BLOG_UI.errorDescription}
			retryLabel={BLOG_UI.errorRetry}
			error={error}
		/>
	)
}
