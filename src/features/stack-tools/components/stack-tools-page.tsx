import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { pageShellClass, proseParagraphClass } from "@/components/shared/prose.styles"
import { STACK_TOOLS_CONTENT } from "@/features/stack-tools/constants/stack-tools.constants"

export function StackToolsPage() {
	return (
		<Container className={pageShellClass}>
			<PageHeader title={STACK_TOOLS_CONTENT.pageTitle}>
				<p className={proseParagraphClass}>{STACK_TOOLS_CONTENT.pageDescription}</p>
			</PageHeader>
		</Container>
	)
}
