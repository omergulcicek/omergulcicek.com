import type { ComponentType, SVGProps } from "react"

import { VIRASTACK_LOGO } from "@/lib/media/build-static-thumb-image"

import { BaseUi } from "@/components/ui/svgs/baseUi"
import { BaseUiDark } from "@/components/ui/svgs/baseUiDark"
import { ClaudeAiIcon } from "@/components/ui/svgs/claudeAiIcon"
import { CssOld } from "@/components/ui/svgs/cssOld"
import { Figma } from "@/components/ui/svgs/figma"
import { Git } from "@/components/ui/svgs/git"
import { Graphql } from "@/components/ui/svgs/graphql"
import { Html5 } from "@/components/ui/svgs/html5"
import { Javascript } from "@/components/ui/svgs/javascript"
import { Motion } from "@/components/ui/svgs/motion"
import { MotionDark } from "@/components/ui/svgs/motionDark"
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark"
import { Nodejs } from "@/components/ui/svgs/nodejs"
import { Playwright } from "@/components/ui/svgs/playwright"
import { Postgresql } from "@/components/ui/svgs/postgresql"
import { ReactDark } from "@/components/ui/svgs/reactDark"
import { ReactLight } from "@/components/ui/svgs/reactLight"
import { Redux } from "@/components/ui/svgs/redux"
import { ShadcnUi } from "@/components/ui/svgs/shadcnUi"
import { ShadcnUiDark } from "@/components/ui/svgs/shadcnUiDark"
import { Storybook } from "@/components/ui/svgs/storybook"
import { Supabase } from "@/components/ui/svgs/supabase"
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss"
import { TanstackDark } from "@/components/ui/svgs/tanstackDark"
import { TanstackLight } from "@/components/ui/svgs/tanstackLight"
import { Typescript } from "@/components/ui/svgs/typescript"
import { Vite } from "@/components/ui/svgs/vite"
import { Vitest } from "@/components/ui/svgs/vitest"
import { Zod } from "@/components/ui/svgs/zod"

type SvgLogo = ComponentType<SVGProps<SVGSVGElement>>

export type StackLogoEntry =
	| { kind: "icon"; icon: SvgLogo; invertOnDark?: boolean }
	| { kind: "theme"; light: SvgLogo; dark: SvgLogo }
	| {
			kind: "image"
			src: string
			srcSet?: string
			width: number
			height: number
	  }

/** Logo for each stack item id in `STACK_ITEMS`; unknown ids fall back to initials. */
export const STACK_LOGOS: Record<string, StackLogoEntry> = {
	html: { kind: "icon", icon: Html5 },
	css: { kind: "icon", icon: CssOld },
	javascript: { kind: "icon", icon: Javascript },
	typescript: { kind: "icon", icon: Typescript },
	git: { kind: "icon", icon: Git },
	figma: { kind: "icon", icon: Figma },
	react: { kind: "theme", light: ReactLight, dark: ReactDark },
	nextjs: { kind: "icon", icon: NextjsIconDark, invertOnDark: true },
	tailwind: { kind: "icon", icon: Tailwindcss },
	tanstack: { kind: "theme", light: TanstackLight, dark: TanstackDark },
	vite: { kind: "icon", icon: Vite },
	"base-ui": { kind: "theme", light: BaseUi, dark: BaseUiDark },
	shadcn: { kind: "theme", light: ShadcnUi, dark: ShadcnUiDark },
	zod: { kind: "icon", icon: Zod },
	supabase: { kind: "icon", icon: Supabase },
	nodejs: { kind: "icon", icon: Nodejs },
	postgresql: { kind: "icon", icon: Postgresql },
	graphql: { kind: "icon", icon: Graphql },
	zustand: {
		kind: "image",
		src: "/logos/zustand-56.webp",
		srcSet: "/logos/zustand-56.webp 1x, /logos/zustand-112.webp 2x",
		width: 56,
		height: 56
	},
	redux: { kind: "icon", icon: Redux },
	claude: { kind: "icon", icon: ClaudeAiIcon },
	motion: { kind: "theme", light: Motion, dark: MotionDark },
	"react-hook-form": {
		kind: "image",
		src: "/logos/react-hook-form.svg",
		width: 56,
		height: 56
	},
	storybook: { kind: "icon", icon: Storybook },
	vitest: { kind: "icon", icon: Vitest },
	playwright: { kind: "icon", icon: Playwright },
	virastack: {
		kind: "image",
		src: VIRASTACK_LOGO.src,
		srcSet: VIRASTACK_LOGO.srcSet,
		width: VIRASTACK_LOGO.width,
		height: VIRASTACK_LOGO.height
	}
}
