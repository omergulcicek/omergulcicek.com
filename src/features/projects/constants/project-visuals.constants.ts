import { soccerPitch } from "@lucide/lab"
import {
	BookOpen,
	BookType,
	CalendarDays,
	Form,
	GraduationCap,
	Rocket,
	Sparkles,
	SquareAsterisk,
	type LucideIcon
} from "lucide-react"
import type { ComponentType, SVGProps } from "react"
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
	academy: { kind: "lucide", Icon: GraduationCap },
	footy: { kind: "lab", iconNode: soccerPitch },
	takvim: { kind: "lucide", Icon: CalendarDays },
	start: { kind: "lucide", Icon: Rocket },
	ai: { kind: "lucide", Icon: Sparkles },
	mask: { kind: "lucide", Icon: Form },
	password: { kind: "lucide", Icon: SquareAsterisk },
	guide: { kind: "lucide", Icon: BookOpen },
	turkuaz: { kind: "svg", Icon: TurkuazLogo, className: "size-8" },
	turkcedokuman: { kind: "lucide", Icon: BookType }
}
