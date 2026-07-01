import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { pageShellClass, proseParagraphClass } from "@/components/shared/prose.styles"
import { WORKSPACE_CONTENT } from "@/features/workspace/constants/workspace.constants"

export function WorkspacePage() {
	return (
		<Container className={pageShellClass}>
			<PageHeader title={WORKSPACE_CONTENT.pageTitle}>
				<p className={proseParagraphClass}>{WORKSPACE_CONTENT.pageDescription}</p>
			</PageHeader>
		</Container>
	)
}
