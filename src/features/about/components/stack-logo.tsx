import { CssOld } from "@/components/ui/svgs/cssOld"
import { CursorLight } from "@/components/ui/svgs/cursorLight"
import { Framer } from "@/components/ui/svgs/framer"
import { Git } from "@/components/ui/svgs/git"
import { Graphql } from "@/components/ui/svgs/graphql"
import { Html5 } from "@/components/ui/svgs/html5"
import { Javascript } from "@/components/ui/svgs/javascript"
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark"
import { ReactDark } from "@/components/ui/svgs/reactDark"
import { ReactLight } from "@/components/ui/svgs/reactLight"
import { ShadcnUi } from "@/components/ui/svgs/shadcnUi"
import { ShadcnUiDark } from "@/components/ui/svgs/shadcnUiDark"
import { Storybook } from "@/components/ui/svgs/storybook"
import { Supabase } from "@/components/ui/svgs/supabase"
import { Tanstack } from "@/components/ui/svgs/tanstack"
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss"
import { Typescript } from "@/components/ui/svgs/typescript"
import { Virastack } from "@/components/ui/svgs/virastack"
import { Vite } from "@/components/ui/svgs/vite"
import { Zod } from "@/components/ui/svgs/zod"
import { cn } from "@/lib/utils"

type StackLogoProps = {
	stackId: string
	label: string
	className?: string
}

export function StackLogo({ stackId, label, className }: StackLogoProps) {
	const iconClassName = cn("size-full max-h-full max-w-full object-contain", className)

	switch (stackId) {
		case "html":
			return (
				<Html5 className={iconClassName} role="img" aria-label={label} />
			)
		case "css":
			return (
				<CssOld className={iconClassName} role="img" aria-label={label} />
			)
		case "javascript":
			return (
				<Javascript className={iconClassName} role="img" aria-label={label} />
			)
		case "typescript":
			return (
				<Typescript className={iconClassName} role="img" aria-label={label} />
			)
		case "git":
			return <Git className={iconClassName} role="img" aria-label={label} />
		case "react":
			return (
				<>
					<ReactLight
						className={cn(iconClassName, "dark:hidden")}
						role="img"
						aria-label={label}
					/>
					<ReactDark
						className={cn(iconClassName, "hidden dark:block")}
						aria-hidden
					/>
				</>
			)
		case "nextjs":
			return (
				<NextjsIconDark
					className={cn(iconClassName, "dark:invert")}
					role="img"
					aria-label={label}
				/>
			)
		case "tailwind":
			return (
				<Tailwindcss className={iconClassName} role="img" aria-label={label} />
			)
		case "tanstack":
			return (
				<Tanstack className={iconClassName} role="img" aria-label={label} />
			)
		case "vite":
			return <Vite className={iconClassName} role="img" aria-label={label} />
		case "shadcn":
			return (
				<>
					<ShadcnUi
						className={cn(iconClassName, "dark:hidden")}
						role="img"
						aria-label={label}
					/>
					<ShadcnUiDark
						className={cn(iconClassName, "hidden dark:block")}
						aria-hidden
					/>
				</>
			)
		case "zod":
			return <Zod className={iconClassName} role="img" aria-label={label} />
		case "supabase":
			return (
				<Supabase className={iconClassName} role="img" aria-label={label} />
			)
		case "graphql":
			return (
				<Graphql className={iconClassName} role="img" aria-label={label} />
			)
		case "zustand":
			return (
				<img
					src="/logos/zustand.svg"
					alt={label}
					width={56}
					height={56}
					loading="lazy"
					decoding="async"
					className={iconClassName}
				/>
			)
		case "cursor":
			return (
				<CursorLight
					className={cn(iconClassName, "text-[#181717] dark:text-white")}
					role="img"
					aria-label={label}
				/>
			)
		case "framer":
			return (
				<Framer
					className={cn(iconClassName, "fill-foreground")}
					role="img"
					aria-label={label}
				/>
			)
		case "react-hook-form":
			return (
				<img
					src="/logos/react-hook-form.svg"
					alt={label}
					width={56}
					height={56}
					loading="eager"
					decoding="async"
					className={iconClassName}
				/>
			)
		case "storybook":
			return (
				<Storybook className={iconClassName} role="img" aria-label={label} />
			)
		case "virastack":
			return (
				<Virastack className={iconClassName} role="img" aria-label={label} />
			)
		default:
			return (
				<span
					className={cn(
						"text-muted-foreground flex size-full items-center justify-center text-[10px] font-medium",
						className
					)}
					role="img"
					aria-label={label}
				>
					{label.slice(0, 2).toUpperCase()}
				</span>
			)
	}
}
