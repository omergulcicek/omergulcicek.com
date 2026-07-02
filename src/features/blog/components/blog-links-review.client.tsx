import { useId, useState, type CSSProperties } from "react"
import { ChevronDown } from "lucide-react"

import { surfaceDoubleFrameClass } from "@/components/shared/interactive-card.styles"
import type { BlogLinksReviewProps } from "@/features/blog/types/links-review.types"
import { cn } from "@/lib/utils"

function isExternalHref(href: string) {
	return /^https?:\/\//i.test(href)
}

export function BlogLinksReviewClient({ title, links }: BlogLinksReviewProps) {
	const [open, setOpen] = useState(false)
	const contentId = useId()

	return (
		<div
			className={cn(
				"blog-links-review blog-links-review--animated not-prose bg-background",
				surfaceDoubleFrameClass,
				open && "blog-links-review--open"
			)}
		>
			<button
				type="button"
				className="blog-links-review__summary"
				aria-expanded={open}
				aria-controls={contentId}
				onClick={() => setOpen((current) => !current)}
			>
				<span className="blog-links-review__title">{title}</span>
				<ChevronDown
					className="blog-links-review__icon"
					aria-hidden="true"
				/>
			</button>
			<div
				id={contentId}
				className="blog-links-review__panel"
				aria-hidden={!open}
			>
				<div className="blog-links-review__panel-inner">
					<ul className="blog-links-review__list">
						{links.map((link, index) => (
							<li
								key={`${link.href}-${link.label}`}
								className="blog-links-review__item"
								style={
									{
										"--stagger-delay": `${index * 100}ms`
									} as CSSProperties
								}
							>
								<a
									href={link.href}
									className="blog-links-review__link"
									tabIndex={open ? undefined : -1}
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
				</div>
			</div>
		</div>
	)
}
