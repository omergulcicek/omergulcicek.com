import { ArrowLink } from "@/components/shared/ArrowLink"
import { ProseLink } from "@/components/shared/prose-link"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import {
	getRaindropCollectionUrl,
	type BookmarkCategory
} from "@/features/bookmarks/constants/bookmarks.constants"

type BookmarkCategoryCardProps = {
	category: BookmarkCategory
}

const bookmarkCategoryCardClass =
	"flex min-h-36 items-stretch gap-3 rounded-xl border border-border bg-[#fff] p-4 ring-1 ring-border ring-offset-4 ring-offset-[#fcfcfc] dark:bg-[#0b0b0b] dark:ring-offset-[#0f0f0f] sm:gap-4"

export function BookmarkCategoryCard({ category }: BookmarkCategoryCardProps) {
	const collectionUrl = getRaindropCollectionUrl(category.raindropSlug)

	return (
		<article className={bookmarkCategoryCardClass}>
			<div className="mt-0.5 shrink-0 self-start rounded-lg border border-border/60 bg-muted/40 p-1.5">
				<span
					className="block size-6 rounded-full"
					style={{ backgroundColor: category.accent }}
					aria-hidden
				/>
			</div>
			<div className="flex min-w-0 flex-1 flex-col">
				<h2 className="text-base leading-relaxed font-medium">
					<ProseLink href={collectionUrl} className="no-underline">
						{category.title}
					</ProseLink>
				</h2>
				<p className="text-muted-foreground mt-0.5 text-sm leading-relaxed">
					{category.description}
				</p>
				<ProseLink
					href={collectionUrl}
					variant="muted"
					className="group mt-auto block pt-3 text-right"
				>
					<ArrowLink>{SITE_CONTENT.bookmarksRaindropCta}</ArrowLink>
				</ProseLink>
			</div>
		</article>
	)
}
