import { RaindropIcon } from "@/components/icons"
import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { ProseIconLink } from "@/components/shared/prose-link"
import { pageShellClass, proseParagraphClass, cardGridClass } from "@/components/shared/prose.styles"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { BookmarkCategoryCard } from "@/features/bookmarks/components/bookmark-category-card"
import { BOOKMARK_CATEGORIES } from "@/features/bookmarks/constants/bookmarks.constants"

export function BookmarksPage() {
	return (
		<Container className={pageShellClass}>
			<PageHeader title="Yer İmleri">
				<p className={proseParagraphClass}>
					Yer imlerimi{" "}
					<ProseIconLink
						href={SITE_CONTENT.bookmarksRaindropUrl}
						icon={<RaindropIcon className="size-3.5 shrink-0" />}
					>
						raindrop.io/omergulcicek
					</ProseIconLink>
					&apos;da saklıyorum; özellikle frontend kaynaklarımı, kitaplığımı,
					okuduğum makaleleri, günlük takip ettiğim blogları, teknik
					içerikleri ve kullandığım uygulama-eklentileri burada tutuyorum.
				</p>
			</PageHeader>

			<div className={cardGridClass}>
				{BOOKMARK_CATEGORIES.map((category) => (
					<BookmarkCategoryCard key={category.id} category={category} />
				))}
			</div>
		</Container>
	)
}
