import { RaindropIcon } from "@/components/shared/icons"
import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/PageHeader"
import { ProseIconLink } from "@/components/shared/ProseIconLink"
import { StaggerContainer } from "@/components/shared/StaggerContainer"
import { StaggerItem } from "@/components/shared/StaggerItem"
import {
	pageShellClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { BookmarksList } from "@/features/bookmarks/components/BookmarksList"
import { BOOKMARKS, BOOKMARK_UI } from "@/features/bookmarks/constants/bookmarks.constants"

export function BookmarksPage() {
	return (
		<StaggerContainer className={pageShellClass}>
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
