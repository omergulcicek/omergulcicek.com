import { VIRASTACK_PRODUCT_ACCENT_CLASS } from "@/features/projects/constants/virastack-product-name.constants"
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
	const accentClass = VIRASTACK_PRODUCT_ACCENT_CLASS[projectId]
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
