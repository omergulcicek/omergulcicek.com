import { RaindropIcon } from "@/components/icons"
import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { ProseIconLink } from "@/components/shared/prose-link"
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-motion"
import { proseParagraphClass } from "@/components/shared/prose.styles"
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { BookmarksList } from "@/features/bookmarks/components/bookmarks-list"
import { BOOKMARKS, BOOKMARK_UI } from "@/features/bookmarks/constants/bookmarks.constants"

export function BookmarksPage() {
	return (
		<StaggerContainer className="flex flex-col py-10 md:py-16">
			<StaggerItem>
				<Container>
					<PageHeader title={BOOKMARK_UI.pageTitle}>
						<p className={proseParagraphClass}>
							{BOOKMARK_UI.pageDescription} Tam arşiv{" "}
							<ProseIconLink
								href={EXTERNAL_LINKS.raindrop}
								icon={<RaindropIcon className="size-3.5 shrink-0" />}
							>
								{new URL(EXTERNAL_LINKS.raindrop).host}
							</ProseIconLink>
							&apos;da.
						</p>
					</PageHeader>
				</Container>
			</StaggerItem>

			<StaggerItem>
				<BookmarksList bookmarks={BOOKMARKS} className="mt-4" />
			</StaggerItem>
		</StaggerContainer>
	)
}
