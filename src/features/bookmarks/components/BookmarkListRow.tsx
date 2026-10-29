import { ChevronRight } from "lucide-react"

import { OptimizedImage } from "@/components/shared/OptimizedImage"
import {
	interactiveCardChevronClass,
	interactiveListRowClass
} from "@/components/shared/interactive-card.styles"
import { BOOKMARK_UI } from "@/features/bookmarks/constants/bookmarks.constants"
import { getLibraryCategoryPlaceholderClassName } from "@/features/bookmarks/constants/library-bookmarks.constants"
import {
	formatBookmarkAuthors,
	getBookmarkAuthorCredit,
	getBookmarkDisplayTitle,
	getBookmarkImageShape,
	getBookmarkTitleInitials,
	getLibraryBookmarkTaxonomyLabel
} from "@/features/bookmarks/helpers/bookmark-helpers"
import type { BookmarkImageShape } from "@/features/bookmarks/helpers/bookmark-helpers"
import type { Bookmark } from "@/features/bookmarks/types/bookmarks.types"
import { withOutboundUtm } from "@/lib/outbound-url"
import { cardPaddingClass } from "@/components/shared/prose.styles"
import { cn } from "@/lib/utils"

const IMAGE_SHAPES: Record<
	BookmarkImageShape,
	{ aspectClass: string; fitClass: string; width: number; height: number }
> = {
	poster: { aspectClass: "aspect-2/3", fitClass: "object-cover", width: 368, height: 552 },
	video: { aspectClass: "aspect-video", fitClass: "object-cover", width: 368, height: 207 }
}

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
	const imageShape = IMAGE_SHAPES[getBookmarkImageShape(bookmark)]
	const isLibrary = bookmark.categoryId === "library"

	return (
		<article
			className={cn(
				interactiveListRowClass,
				"group relative flex flex-col gap-2",
				cardPaddingClass,
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
				<div
					className={cn(
						"pointer-events-none relative z-10 w-full",
						imageShape.aspectClass
					)}
				>
					<OptimizedImage
						src={bookmark.imageUrl}
						alt=""
						width={imageShape.width}
						height={imageShape.height}
						sizes="(max-width: 768px) 50vw, 184px"
						className={cn("image-outline size-full rounded-sm", imageShape.fitClass)}
					/>
					{bookmark.imdbRating ? (
						<span
							className="absolute right-1.5 bottom-1.5 inline-flex items-baseline gap-1 rounded-sm bg-background/90 px-1.5 py-0.5 text-xs font-medium tabular-nums backdrop-blur-sm"
							aria-label={`${BOOKMARK_UI.imdbRatingAriaLabel}: ${bookmark.imdbRating}`}
						>
							<span className="text-muted-foreground text-[10px] font-semibold" aria-hidden>
								{BOOKMARK_UI.imdbLabel}
							</span>
							<span aria-hidden>{bookmark.imdbRating}</span>
						</span>
					) : null}
				</div>
			) : isLibrary ? (
				<div
					className={cn(
						"image-outline pointer-events-none relative z-10 flex aspect-2/3 w-full items-center justify-center rounded-sm",
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
					<p className="min-w-0 flex-1 text-sm leading-6 font-normal text-pretty">
						{bookmark.title}
					</p>
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
							isLibrary && "font-normal italic"
						)}
					>
						{bookmark.subtitle}
					</p>
				) : null}
				{authorCredit ? (
					<p className={creditClassName}>{authorCredit}</p>
				) : null}
				{bookmark.translator ? (
					<p className={creditClassName}>
						{BOOKMARK_UI.translatorLabel}: {bookmark.translator}
					</p>
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
