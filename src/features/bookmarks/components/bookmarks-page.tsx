import { RaindropIcon } from "@/components/icons"
import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { ProseIconLink } from "@/components/shared/prose-link"
import { proseParagraphClass } from "@/components/shared/prose.styles"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { BookmarkCategoryCard } from "@/features/bookmarks/components/bookmark-category-card"
import { BOOKMARK_CATEGORIES } from "@/features/bookmarks/constants/bookmarks.constants"

export function BookmarksPage() {
	return (
		<Container className="flex flex-col gap-10 py-10 md:gap-12 md:py-16">
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

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
				{BOOKMARK_CATEGORIES.map((category) => (
					<BookmarkCategoryCard key={category.id} category={category} />
				))}
			</div>
		</Container>
	)
}
