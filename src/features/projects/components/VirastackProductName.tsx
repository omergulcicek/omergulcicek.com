import { getProjectColorClass } from "@/features/projects/constants/projects.constants"
import { cn } from "@/lib/utils"

type VirastackProductNameProps = {
	projectId: string
	title: string
	accentClassName?: string
}

export function VirastackProductName({
	projectId,
	title,
	accentClassName
}: VirastackProductNameProps) {
	const accentClass = getProjectColorClass(projectId)
	const productName = /^ViraStack (.+)$/.exec(title)?.[1]

	if (!productName || !accentClass) {
		return title
	}

	return (
		<>
			ViraStack{" "}
			<em className={cn("italic", accentClass, accentClassName)}>
				{productName}
			</em>
		</>
	)
}
