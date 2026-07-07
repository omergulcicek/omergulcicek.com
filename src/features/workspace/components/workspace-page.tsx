import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-motion.client"
import {
	pageSectionClass,
	pageShellClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { WorkspaceGearTable } from "@/features/workspace/components/workspace-gear-table"
import { WORKSPACE_CONTENT } from "@/features/workspace/constants/workspace.constants"

export function WorkspacePage() {
	const { deskPhoto } = WORKSPACE_CONTENT

	return (
		<Container>
			<StaggerContainer className={pageShellClass}>
				<StaggerItem>
					<PageHeader title={WORKSPACE_CONTENT.pageTitle}>
						<p className={proseParagraphClass}>{WORKSPACE_CONTENT.pageDescription}</p>
					</PageHeader>
				</StaggerItem>

				<StaggerItem className={pageSectionClass}>
					<figure className="overflow-hidden rounded-xl ring-1 ring-border ring-offset-3 ring-offset-background">
						<img
							src={deskPhoto.src}
							alt={deskPhoto.alt}
							width={deskPhoto.width}
							height={deskPhoto.height}
							loading="lazy"
							decoding="async"
							className="image-outline block size-full object-cover"
						/>
					</figure>

					<WorkspaceGearTable />
				</StaggerItem>
			</StaggerContainer>
		</Container>
	)
}
