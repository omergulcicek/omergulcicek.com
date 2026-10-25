import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { interactiveCardChevronClass } from "@/components/shared/interactive-card.styles"
import { cardGridGapClass } from "@/components/shared/prose.styles"
import { InterestCard } from "@/features/about/components/InterestCard"
import { HOBBIES } from "@/features/about/constants/about.constants"
import { FAVORITES_ITEMS_SORTED } from "@/features/about/constants/favorites.constants"
import { getInterestCardClassName } from "@/features/about/constants/interest-card.styles"
import {
	FAVORITE_COLORS,
	FAVORITE_ICONS,
	HOBBY_COLORS,
	HOBBY_ICONS
} from "@/features/about/constants/interest-styles.constants"

export function BentoInterests() {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
				cardGridGapClass
			)}
		>
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
