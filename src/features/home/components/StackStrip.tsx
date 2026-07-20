import { Marquee } from "@/components/ui/marquee"
import { bleedSectionClass } from "@/components/shared/prose.styles"
import { StackLogo } from "@/features/stack/components/stack-logo"
import type { StackItem } from "@/features/stack/constants/stack.constants"
import { HOME_STACK_ITEMS } from "@/features/stack/constants/stack.constants"
import { cn } from "@/lib/utils"

type StackStripProps = {
	items?: StackItem[]
	className?: string
}

export function StackStrip({ items = HOME_STACK_ITEMS, className }: StackStripProps) {
	return (
		<section
			aria-label="Teknoloji yığını"
			className={cn(bleedSectionClass, className)}
		>
			<div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
				<Marquee
					repeat={2}
					className="py-4 [--duration:60s] [--gap:3.5rem]"
				>
					{items.map((item) => (
						<div
							key={item.id}
							className="flex size-16 shrink-0 items-center justify-center"
						>
							<StackLogo
								stackId={item.id}
								label={item.label}
								className="size-14"
							/>
						</div>
					))}
				</Marquee>
			</div>
		</section>
	)
}
