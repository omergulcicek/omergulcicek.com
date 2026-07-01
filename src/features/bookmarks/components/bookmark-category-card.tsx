import { ChevronRight } from "lucide-react"

import {
	getInteractiveCardClassName,
	interactiveCardChevronClass,
	surfaceCardIconFrameClass
} from "@/components/shared/interactive-card.styles"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import {
	getRaindropCollectionUrl,
	type BookmarkCategory
} from "@/features/bookmarks/constants/bookmarks.constants"
import { cn } from "@/lib/utils"

type BookmarkCategoryCardProps = {
	category: BookmarkCategory
}

export function BookmarkCategoryCard({ category }: BookmarkCategoryCardProps) {
	const collectionUrl = getRaindropCollectionUrl(category.raindropSlug)

	return (
		<a
			href={collectionUrl}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`${category.title} — ${category.description} — ${SITE_CONTENT.bookmarksRaindropCta}`}
			className={cn(
				getInteractiveCardClassName(),
				"flex-row items-stretch gap-2.5 md:gap-4"
			)}
		>
			<div className={cn(surfaceCardIconFrameClass, "self-start")}>
				<span
					className="block size-6 rounded-full"
					style={{ backgroundColor: category.accent }}
					aria-hidden
				/>
			</div>
			<div className="flex min-w-0 flex-1 flex-col">
				<div className="flex items-start justify-between gap-3">
					<h2 className="text-sm leading-relaxed font-medium md:text-base">
						{category.title}
					</h2>
					<ChevronRight
						className={interactiveCardChevronClass}
						aria-hidden
					/>
				</div>
				<p className="text-muted-foreground mt-0.5 text-pretty text-xs leading-relaxed md:text-sm">
					{category.description}
				</p>
			</div>
		</a>
	)
}
