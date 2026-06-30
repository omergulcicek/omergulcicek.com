import type { ComponentType, SVGProps } from "react"

import { Bootstrap } from "@/components/ui/svgs/bootstrap"
import { CssOld } from "@/components/ui/svgs/cssOld"
import { Git } from "@/components/ui/svgs/git"
import { Graphql } from "@/components/ui/svgs/graphql"
import { Html5 } from "@/components/ui/svgs/html5"
import { Javascript } from "@/components/ui/svgs/javascript"
import { Jinja } from "@/components/ui/svgs/jinja"
import { Jquery } from "@/components/ui/svgs/jquery"
import { JqueryDark } from "@/components/ui/svgs/jqueryDark"
import { Kendoui } from "@/components/ui/svgs/kendoui"
import { Less } from "@/components/ui/svgs/less"
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark"
import { ReactDark } from "@/components/ui/svgs/reactDark"
import { ReactLight } from "@/components/ui/svgs/reactLight"
import { Styledcomponents } from "@/components/ui/svgs/styledcomponents"
import { Tanstack } from "@/components/ui/svgs/tanstack"
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss"
import { Typescript } from "@/components/ui/svgs/typescript"
import { cn } from "@/lib/utils"

type TechnologyTagIconProps = {
	tag: string
	className?: string
}

type TechnologyIconEntry =
	| {
			kind: "icon"
			icon: ComponentType<SVGProps<SVGSVGElement>>
			invertOnDark?: boolean
	  }
	| {
			kind: "theme"
			light: ComponentType<SVGProps<SVGSVGElement>>
			dark: ComponentType<SVGProps<SVGSVGElement>>
	  }

const TECHNOLOGY_ICON_MAP: Record<string, TechnologyIconEntry> = {
	React: { kind: "theme", light: ReactLight, dark: ReactDark },
	"Next.js": { kind: "icon", icon: NextjsIconDark, invertOnDark: true },
	TypeScript: { kind: "icon", icon: Typescript },
	"TanStack Query": { kind: "icon", icon: Tanstack },
	"Tailwind CSS": { kind: "icon", icon: Tailwindcss },
	GraphQL: { kind: "icon", icon: Graphql },
	"Styled Components": { kind: "icon", icon: Styledcomponents },
	HTML: { kind: "icon", icon: Html5 },
	CSS: { kind: "icon", icon: CssOld },
	JavaScript: { kind: "icon", icon: Javascript },
	ES6: { kind: "icon", icon: Javascript },
	jQuery: { kind: "theme", light: Jquery, dark: JqueryDark },
	Bootstrap: { kind: "icon", icon: Bootstrap },
	Git: { kind: "icon", icon: Git },
	LESS: { kind: "icon", icon: Less },
	Jinja: { kind: "icon", icon: Jinja },
	"Kendo UI": { kind: "icon", icon: Kendoui }
}

export function TechnologyTagIcon({ tag, className }: TechnologyTagIconProps) {
	const entry = TECHNOLOGY_ICON_MAP[tag]

	if (!entry) {
		return null
	}

	if (entry.kind === "theme") {
		const LightIcon = entry.light
		const DarkIcon = entry.dark

		return (
			<>
				<LightIcon className={cn(className, "dark:hidden")} aria-hidden />
				<DarkIcon className={cn(className, "hidden dark:block")} aria-hidden />
			</>
		)
	}

	const Icon = entry.icon

	return (
		<Icon
			className={cn(className, entry.invertOnDark && "dark:invert")}
			aria-hidden
		/>
	)
}
