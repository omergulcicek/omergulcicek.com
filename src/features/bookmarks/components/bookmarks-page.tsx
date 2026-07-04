import { RaindropIcon } from "@/components/icons"
import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { ProseIconLink } from "@/components/shared/prose-link"
import { proseParagraphClass } from "@/components/shared/prose.styles"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { BookmarksList } from "@/features/bookmarks/components/bookmarks-list"
import { BOOKMARKS, BOOKMARK_UI } from "@/features/bookmarks/constants/bookmarks.constants"

export function BookmarksPage() {
	return (
		<div className="flex flex-col py-10 md:py-16">
			<Container>
				<PageHeader title={BOOKMARK_UI.pageTitle}>
					<p className={proseParagraphClass}>
						{BOOKMARK_UI.pageDescription} Tam arşiv{" "}
						<ProseIconLink
							href={SITE_CONTENT.bookmarksRaindropUrl}
							icon={<RaindropIcon className="size-3.5 shrink-0" />}
						>
							raindrop.io/omergulcicek
						</ProseIconLink>
						&apos;da.
					</p>
				</PageHeader>
			</Container>

			<BookmarksList bookmarks={BOOKMARKS} className="mt-4" />
		</div>
	)
}
