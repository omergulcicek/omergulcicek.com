import { StackLogo } from "@/components/shared/StackLogo"
import { TECHNOLOGY_LOGO_IDS } from "@/features/experiences/constants/technology-icons.constants"

type TechnologyTagIconProps = {
	tag: string
	className?: string
}

export function TechnologyTagIcon({ tag, className }: TechnologyTagIconProps) {
	const logoId = TECHNOLOGY_LOGO_IDS[tag]

	if (!logoId) {
		return null
	}

	return <StackLogo stackId={logoId} label={tag} className={className} decorative />
}
