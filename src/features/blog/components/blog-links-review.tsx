import { ChevronDown } from "lucide-react"

import { surfaceDoubleFrameClass } from "@/components/shared/interactive-card.styles"
import { serializeBlogWidgetProps } from "@/features/blog/helpers/blog-widget-props"
import type { BlogLinksReviewProps } from "@/features/blog/types/links-review.types"
import { cn } from "@/lib/utils"

function isExternalHref(href: string) {
	return /^https?:\/\//i.test(href)
}

function BlogLinksReviewFallback({ title, links }: BlogLinksReviewProps) {
	return (
		<details
			className={cn(
				"blog-links-review not-prose bg-background",
				surfaceDoubleFrameClass
			)}
		>
			<summary className="blog-links-review__summary">
				<span className="blog-links-review__title">{title}</span>
				<ChevronDown
					className="blog-links-review__icon"
					aria-hidden="true"
				/>
			</summary>
			<ul className="blog-links-review__list">
				{links.map((link) => (
					<li key={`${link.href}-${link.label}`}>
						<a
							href={link.href}
							className="blog-links-review__link"
							{...(isExternalHref(link.href)
								? {
										target: "_blank",
										rel: "noopener noreferrer"
									}
								: undefined)}
						>
							{link.label}
						</a>
					</li>
				))}
			</ul>
		</details>
	)
}

export function LinksReview(props: BlogLinksReviewProps) {
	return (
		<div
			className="blog-widget-mount blog-links-review-mount not-prose"
			data-blog-widget="links-review"
			data-blog-widget-props={serializeBlogWidgetProps(props)}
		>
			<BlogLinksReviewFallback {...props} />
		</div>
	)
}
