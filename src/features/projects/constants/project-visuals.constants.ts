import { soccerPitch } from "@lucide/lab"
import {
	BookType,
	CalendarDays,
	type LucideIcon
} from "lucide-react"
import type { ComponentType, SVGProps } from "react"
import { VIRASTACK_PRODUCTS } from "@/constants/virastack-colors.constants"
import { TurkuazLogo } from "@/features/projects/components/TurkuazLogo"

export const projectIconClass = "size-8 md:size-10"

export const projectIconStroke = 1.75

export type ProjectVisualConfig =
	| {
			kind: "lucide"
			Icon: LucideIcon
			className?: string
	  }
	| {
			kind: "lab"
			iconNode: typeof soccerPitch
			className?: string
	  }
	| {
			kind: "svg"
			Icon: ComponentType<SVGProps<SVGSVGElement>>
			className?: string
	  }

export const PROJECT_VISUALS: Record<string, ProjectVisualConfig> = {
	academy: { kind: "lucide", Icon: VIRASTACK_PRODUCTS.academy.Icon },
	footy: { kind: "lab", iconNode: soccerPitch },
	takvim: { kind: "lucide", Icon: CalendarDays },
	start: { kind: "lucide", Icon: VIRASTACK_PRODUCTS.start.Icon },
	ai: { kind: "lucide", Icon: VIRASTACK_PRODUCTS.ai.Icon },
	mask: { kind: "lucide", Icon: VIRASTACK_PRODUCTS.mask.Icon },
	password: { kind: "lucide", Icon: VIRASTACK_PRODUCTS.password.Icon },
	guide: { kind: "lucide", Icon: VIRASTACK_PRODUCTS.guide.Icon },
	turkuaz: { kind: "svg", Icon: TurkuazLogo, className: "size-8" },
	turkcedokuman: { kind: "lucide", Icon: BookType }
}
