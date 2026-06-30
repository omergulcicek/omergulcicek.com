import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { pageShellClass, proseParagraphClass } from "@/components/shared/prose.styles"
import { SITE_CONTENT } from "@/constants/site-content.constants"

export function AcademyPage() {
	return (
		<Container className={pageShellClass}>
			<PageHeader title={SITE_CONTENT.academyTitle}>
				<p className={proseParagraphClass}>
					{SITE_CONTENT.academyDescription}
				</p>
			</PageHeader>
		</Container>
	)
}
