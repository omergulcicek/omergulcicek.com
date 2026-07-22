import {
	BookOpen,
	Camera,
	ChessPawn,
	ChevronRight,
	Clapperboard,
	Footprints,
	Gamepad2,
	MicVocal,
	Palette,
	Shirt,
	type LucideIcon
} from "lucide-react"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { HOBBIES } from "@/features/about/constants/about.constants"
import { FAVORITES_ITEMS_SORTED } from "@/features/about/constants/favorites.constants"
import {
	interactiveCardChevronClass,
	surfaceDoubleFrameClass
} from "@/components/shared/interactive-card.styles"
import { withOutboundUtm } from "@/lib/outbound-url"
import { cn } from "@/lib/utils"

const HOBBY_COLORS: Record<string, string> = {
	photography: "bg-sky-50 dark:bg-sky-500/10",
	chess: "bg-zinc-50 dark:bg-zinc-500/10",
	walk: "bg-orange-50 dark:bg-orange-500/10",
	book: "bg-teal-50 dark:bg-teal-500/10"
}

const HOBBY_ICONS: Record<
	string,
	{ Icon: LucideIcon; className: string }
> = {
	photography: {
		Icon: Camera,
		className: "text-sky-600 dark:text-sky-400"
	},
	chess: {
		Icon: ChessPawn,
		className: "text-zinc-600 dark:text-zinc-400"
	},
	walk: {
		Icon: Footprints,
		className: "text-orange-600 dark:text-orange-400"
	},
	book: {
		Icon: BookOpen,
		className: "text-teal-600 dark:text-teal-400"
	}
}

const FAVORITE_COLORS: Record<string, string> = {
	team: "bg-emerald-50 dark:bg-emerald-500/10",
	game: "bg-violet-50 dark:bg-violet-500/10",
	musician: "bg-stone-50 dark:bg-stone-500/10",
	movie: "bg-amber-50 dark:bg-amber-500/10",
	color: "bg-cyan-50 dark:bg-cyan-500/10"
}

const FAVORITE_ICONS: Record<
	string,
	{ Icon: LucideIcon; className: string }
> = {
	team: {
		Icon: Shirt,
		className: "text-emerald-600 dark:text-emerald-400"
	},
	game: {
		Icon: Gamepad2,
		className: "text-violet-600 dark:text-violet-400"
	},
	musician: {
		Icon: MicVocal,
		className: "text-stone-600 dark:text-stone-400"
	},
	movie: {
		Icon: Clapperboard,
		className: "text-amber-600 dark:text-amber-400"
	},
	color: {
		Icon: Palette,
		className: "text-cyan-600 dark:text-cyan-400"
	}
}

function getInterestCardClassName(colorClass: string, isLink: boolean) {
	return cn(
		surfaceDoubleFrameClass,
		"flex flex-col gap-3 rounded-2xl p-4 md:p-5",
		colorClass || "bg-card/50",
		isLink &&
			"group transition-[border-color,box-shadow] hover:border-foreground/10 hover:ring-foreground/8"
	)
}

function InterestCard({
	href,
	className,
	children
}: {
	href?: string
	className: string
	children: ReactNode
}) {
	if (!href) {
		return <div className={className}>{children}</div>
	}

	const isExternal = href.startsWith("http")
	const linkProps: ComponentPropsWithoutRef<"a"> = isExternal
		? {
				href: withOutboundUtm(href),
				target: "_blank",
				rel: "noopener noreferrer"
			}
		: { href }

	return (
		<a className={className} {...linkProps}>
			{children}
		</a>
	)
}

export function BentoInterests() {
	return (
		<div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
			{HOBBIES.map((hobby) => {
				const isLink = Boolean(hobby.href)
				const visual = HOBBY_ICONS[hobby.id]
				const Icon = visual?.Icon

				return (
					<InterestCard
						key={hobby.id}
						href={hobby.href}
						className={getInterestCardClassName(
							HOBBY_COLORS[hobby.id] ?? "",
							isLink
						)}
					>
						<div className="flex items-center gap-3">
							<div className="bg-background flex size-10 shrink-0 items-center justify-center rounded-full border shadow-sm">
								{Icon && (
									<Icon
										className={cn("size-5", visual.className)}
										strokeWidth={1.75}
										aria-hidden
									/>
								)}
							</div>
							<div className="flex min-w-0 flex-1 flex-col gap-1.5">
								<div className="flex items-start justify-between gap-2">
									<h3 className="text-foreground font-medium">{hobby.title}</h3>
									{isLink && (
										<ChevronRight
											className={interactiveCardChevronClass}
											aria-hidden
										/>
									)}
								</div>
								<p className="text-muted-foreground text-sm">{hobby.text}</p>
							</div>
						</div>
					</InterestCard>
				)
			})}

			{FAVORITES_ITEMS_SORTED.map((favorite) => {
				const isLink = Boolean(favorite.href)
				const visual = FAVORITE_ICONS[favorite.id]
				const Icon = visual?.Icon

				return (
					<InterestCard
						key={favorite.id}
						href={favorite.href}
						className={getInterestCardClassName(
							FAVORITE_COLORS[favorite.id] ?? "",
							isLink
						)}
					>
						<div className="flex items-center gap-3">
							<div className="bg-background flex size-10 shrink-0 items-center justify-center rounded-full border shadow-sm">
								{Icon && (
									<Icon
										className={cn("size-5", visual.className)}
										strokeWidth={1.75}
										aria-hidden
									/>
								)}
							</div>
							<div className="flex min-w-0 flex-1 flex-col gap-1.5">
								<div className="flex items-start justify-between gap-2">
									<h3 className="text-foreground font-medium">
										{favorite.value}
									</h3>
									{isLink && (
										<ChevronRight
											className={interactiveCardChevronClass}
											aria-hidden
										/>
									)}
								</div>
								<p className="text-muted-foreground text-sm">
									{favorite.label}
								</p>
							</div>
						</div>
					</InterestCard>
				)
			})}
		</div>
	)
}
