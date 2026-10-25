import { LinksReviewFallback } from "@/features/blog/components/LinksReviewFallback"
import { serializeBlogWidgetProps } from "@/features/blog/helpers/blog-widget-props"
import type { BlogLinksReviewProps } from "@/features/blog/types/links-review.types"

export function LinksReview(props: BlogLinksReviewProps) {
	return (
		<div
			className="blog-widget-mount blog-links-review-mount not-prose"
			data-blog-widget="links-review"
			data-blog-widget-props={serializeBlogWidgetProps(props)}
		>
			<LinksReviewFallback {...props} />
		</div>
	)
}
