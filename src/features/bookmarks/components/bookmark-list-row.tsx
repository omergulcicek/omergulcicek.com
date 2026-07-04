import { ChevronRight, Star } from "lucide-react"

import { OptimizedImage } from "@/components/shared/optimized-image"
import {
	interactiveCardChevronClass,
	interactiveListRowClass
} from "@/components/shared/interactive-card.styles"
import {
	getBookmarkAuthorCredit,
	getBookmarkDisplayTitle
} from "@/features/bookmarks/helpers/bookmark-helpers"
import type { Bookmark } from "@/features/bookmarks/types/bookmarks.types"
import { withOutboundUtm } from "@/lib/outbound-url"
import { cn } from "@/lib/utils"

type BookmarkListRowProps = {
	bookmark: Bookmark
	className?: string
}

export function BookmarkListRow({ bookmark, className }: BookmarkListRowProps) {
	const displayTitle = getBookmarkDisplayTitle(bookmark)
	const descriptionCredit = bookmark.author ? null : getBookmarkAuthorCredit(bookmark)
	const creditClassName = "text-muted-foreground text-pretty text-xs leading-relaxed"

	return (
		<article
			className={cn(
				interactiveListRowClass,
				"group relative flex flex-col gap-2 p-2 md:p-3",
				className
			)}
		>
			<a
				href={withOutboundUtm(bookmark.url)}
				target="_blank"
				rel="noopener noreferrer"
				className="absolute inset-0 z-0 rounded-xl"
				aria-label={displayTitle}
			/>
			{bookmark.imageUrl ? (
				<div className="pointer-events-none relative z-10 aspect-square w-full">
					<OptimizedImage
						src={bookmark.imageUrl}
						alt=""
						width={120}
						height={120}
						sizes="(max-width: 768px) 50vw, 20vw"
						className="image-outline size-full rounded-sm object-contain"
					/>
					{bookmark.imdbRating ? (
						<span
							className="absolute right-1 bottom-px inline-flex items-center gap-0.5 rounded-sm bg-background/85 px-1 py-0.5 text-xs font-medium tabular-nums backdrop-blur-sm"
							aria-label={`IMDB puanı: ${bookmark.imdbRating}`}
						>
							<Star
								className="size-3 fill-amber-500 text-amber-500"
								aria-hidden
							/>
							{bookmark.imdbRating}
						</span>
					) : null}
				</div>
			) : null}
			<div className="pointer-events-none relative z-10 flex min-w-0 flex-col">
				<div className="flex items-start justify-between gap-2">
					<h2 className="min-w-0 flex-1 text-sm leading-6 font-normal text-pretty">
						{bookmark.title}
					</h2>
					<ChevronRight
						className={cn(interactiveCardChevronClass, "mt-1 shrink-0")}
						aria-hidden
					/>
				</div>
				{bookmark.subtitle ? (
					<p
						className={cn(
							"text-muted-foreground text-pretty text-xs leading-relaxed",
							bookmark.categoryId === "library" && "font-normal italic"
						)}
					>
						{bookmark.subtitle}
					</p>
				) : null}
				{bookmark.author ? (
					<p className={creditClassName}>{bookmark.author}</p>
				) : null}
				{bookmark.translator ? (
					<p className={creditClassName}>Çevirmen: {bookmark.translator}</p>
				) : null}
				{descriptionCredit ? (
					<p className={creditClassName}>{descriptionCredit}</p>
				) : null}
			</div>
		</article>
	)
}
