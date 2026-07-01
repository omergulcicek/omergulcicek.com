import { ChessPawn } from "lucide-react"

import { ProseEmphasis } from "@/components/shared/prose-emphasis"
import { surfaceDoubleFrameClass } from "@/components/shared/interactive-card.styles"
import { ProseIconLink } from "@/components/shared/prose-link"
import { proseParagraphClass } from "@/components/shared/prose.styles"
import { InstagramIcon } from "@/components/ui/svgs/instagramIcon"
import type { Hobby } from "@/features/about/constants/about.constants"
import { HOBBIES } from "@/features/about/constants/about.constants"
import { cn } from "@/lib/utils"

const hobbyAvatarClass = cn(
	surfaceDoubleFrameClass,
	"size-10 shrink-0 overflow-hidden rounded-full md:size-12"
)

const hobbyLinkIconClass = "size-3.5 shrink-0"

function HobbyLink({ hobby }: { hobby: Hobby }) {
	if (!hobby.href || !hobby.linkIcon || !hobby.linkLabel) {
		return null
	}

	return (
		<ProseIconLink
			href={hobby.href}
			icon={
				hobby.linkIcon === "instagram" ? (
					<InstagramIcon className={hobbyLinkIconClass} aria-hidden />
				) : (
					<ChessPawn
						className={hobbyLinkIconClass}
						strokeWidth={2}
						aria-hidden
					/>
				)
			}
		>
			{hobby.linkLabel}
		</ProseIconLink>
	)
}

export function HobbyList() {
	return (
		<ul className="flex flex-col gap-4 md:gap-0">
			{HOBBIES.map((hobby) => (
				<li
					key={hobby.id}
					className="flex items-start gap-4 py-1 md:grid md:grid-cols-[3rem_5rem_auto_1fr] md:items-center md:gap-x-4 md:py-4"
				>
					<figure className={hobbyAvatarClass}>
						<img
							src={hobby.avatar}
							alt=""
							width={48}
							height={48}
							loading="lazy"
							decoding="async"
							className="image-outline size-full object-cover"
						/>
					</figure>
					<div className="flex min-w-0 flex-1 flex-col gap-1 md:contents">
						<ProseEmphasis className="shrink-0 text-sm md:w-20 md:text-base">
							{hobby.title}
						</ProseEmphasis>
						<span
							className="text-muted-foreground hidden md:inline"
							aria-hidden
						>
							—
						</span>
						<p className={cn(proseParagraphClass, "min-w-0")}>
							<span className="inline-flex flex-wrap items-center gap-x-1 gap-y-1">
								<span>{hobby.text}</span>
								<HobbyLink hobby={hobby} />
							</span>
						</p>
					</div>
				</li>
			))}
		</ul>
	)
}
