import { ChevronRight, Star } from "lucide-react"

import { OptimizedImage } from "@/components/shared/optimized-image"
import {
	interactiveCardChevronClass,
	interactiveListRowClass
} from "@/components/shared/interactive-card.styles"
import { getLibraryCategoryPlaceholderClassName } from "@/features/bookmarks/constants/library-bookmarks.constants"
import {
	formatBookmarkAuthors,
	getBookmarkAuthorCredit,
	getBookmarkDisplayTitle,
	getBookmarkTitleInitials,
	getLibraryBookmarkTaxonomyLabel
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
	const authorCredit = formatBookmarkAuthors(bookmark)
	const descriptionCredit = authorCredit ? null : getBookmarkAuthorCredit(bookmark)
	const taxonomyLabel = getLibraryBookmarkTaxonomyLabel(bookmark)
	const creditClassName = "text-muted-foreground text-pretty text-xs leading-relaxed"
	const categoryTag = bookmark.tags[0] ?? ""

	return (
		<article
			className={cn(
				interactiveListRowClass,
				"group relative flex flex-col gap-2 p-2 md:p-3",
				className
			)}
		>
			{bookmark.url ? (
				<a
					href={withOutboundUtm(bookmark.url)}
					target="_blank"
					rel="noopener noreferrer"
					className="absolute inset-0 z-0 rounded-xl"
					aria-label={displayTitle}
				/>
			) : null}
			{bookmark.imageUrl ? (
				<div className="pointer-events-none relative z-10 aspect-square w-full">
					<OptimizedImage
						src={bookmark.imageUrl}
						alt=""
						width={bookmark.categoryId === "library" ? 512 : 120}
						height={bookmark.categoryId === "library" ? 512 : 120}
						sizes="(max-width: 768px) 50vw, 184px"
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
			) : bookmark.categoryId === "library" ? (
				<div
					className={cn(
						"image-outline pointer-events-none relative z-10 flex aspect-square w-full items-center justify-center rounded-sm",
						getLibraryCategoryPlaceholderClassName(categoryTag)
					)}
					aria-hidden
				>
					<span className="select-none text-3xl font-medium tracking-widest">
						{getBookmarkTitleInitials(bookmark.title)}
					</span>
				</div>
			) : null}
			<div className="pointer-events-none relative z-10 flex min-w-0 flex-col">
				<div className="flex items-start justify-between gap-2">
					<h2 className="min-w-0 flex-1 text-sm leading-6 font-normal text-pretty">
						{bookmark.title}
					</h2>
					{bookmark.url ? (
						<ChevronRight
							className={cn(interactiveCardChevronClass, "mt-1 shrink-0")}
							aria-hidden
						/>
					) : null}
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
				{authorCredit ? (
					<p className={creditClassName}>{authorCredit}</p>
				) : null}
				{bookmark.translator ? (
					<p className={creditClassName}>Çevirmen: {bookmark.translator}</p>
				) : null}
				{descriptionCredit ? (
					<p className={creditClassName}>{descriptionCredit}</p>
				) : null}
				{taxonomyLabel ? (
					<p className={creditClassName}>{taxonomyLabel}</p>
				) : null}
			</div>
		</article>
	)
}
