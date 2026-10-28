import { Marquee } from "@/components/ui/marquee"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { bleedSectionClass } from "@/components/shared/prose.styles"
import { StackLogo } from "@/components/shared/StackLogo"
import type { StackItem } from "@/constants/stack.constants"
import { HOME_STACK_ITEMS } from "@/constants/stack.constants"
import { cn } from "@/lib/utils"

type StackStripProps = {
	items?: StackItem[]
	className?: string
}

export function StackStrip({ items = HOME_STACK_ITEMS, className }: StackStripProps) {
	return (
		<section
			aria-label={SITE_CONTENT.stackStripAria}
			className={cn(bleedSectionClass, className)}
		>
			<div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
				<Marquee
					repeat={2}
					className="py-4 [--duration:60s] [--gap:1.5rem]"
				>
					{items.map((item) => (
						<figure
							key={item.id}
							className="flex w-28 shrink-0 flex-col items-center gap-2 text-center"
						>
							<span className="flex size-14 items-center justify-center">
								<StackLogo
									stackId={item.id}
									label={item.label}
									className="size-12"
									decorative
								/>
							</span>
							<figcaption className="flex flex-col gap-0.5">
								<span className="text-foreground text-xs font-medium">
									{item.label}
								</span>
								<span className="text-muted-foreground text-[11px] leading-tight">
									{item.description}
								</span>
							</figcaption>
						</figure>
					))}
				</Marquee>
			</div>
		</section>
	)
}
