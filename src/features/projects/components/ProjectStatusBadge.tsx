import { SITE_CONTENT } from "@/constants/site-content.constants"
import type { Project } from "@/features/projects/types/project.types"
import { ComingSoonBadge } from "@/features/projects/components/ComingSoonBadge"
import { MutedStatusBadge } from "@/features/projects/components/MutedStatusBadge"

export function ProjectStatusBadge({ status }: { status: Project["status"] }) {
	if (status === "coming_soon") {
		return <ComingSoonBadge />
	}

	if (status === "paused") {
		return <MutedStatusBadge label={SITE_CONTENT.projectsBadgePaused} />
	}

	if (status === "archived") {
		return <MutedStatusBadge label={SITE_CONTENT.projectsBadgeArchive} />
	}

	return null
}
