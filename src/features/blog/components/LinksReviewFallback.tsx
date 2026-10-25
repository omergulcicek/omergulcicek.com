import { ChevronDown } from "lucide-react"

import { isExternalHref } from "@/lib/is-external-href"
import { cn } from "@/lib/utils"

import { surfaceDoubleFrameClass } from "@/components/shared/interactive-card.styles"
import type { BlogLinksReviewProps } from "@/features/blog/types/links-review.types"

export function LinksReviewFallback({ title, links }: BlogLinksReviewProps) {
	return (
		<details
			className={cn(
				"blog-links-review not-prose bg-background",
				surfaceDoubleFrameClass
			)}
		>
			<summary className="blog-links-review__summary">
				<span className="blog-links-review__title">{title}</span>
				<ChevronDown className="blog-links-review__icon" aria-hidden="true" />
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
