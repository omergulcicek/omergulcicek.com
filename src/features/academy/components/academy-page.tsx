import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { SITE_CONTENT } from "@/constants/site-content.constants"

export function AcademyPage() {
	return (
		<Container className="py-10 md:py-16">
			<PageHeader title={SITE_CONTENT.academyTitle}>
				<p className="text-muted-foreground text-base leading-relaxed">
					{SITE_CONTENT.academyDescription}
				</p>
			</PageHeader>
		</Container>
	)
}
