"use client"

import { useMemo } from "react"

import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger
} from "@/components/ui/hover-card"
import { useVisibleHeadings } from "@/lib/use-visible-headings"
import { cn } from "@/lib/utils"

export type TOCItemType = {
	title: React.ReactNode
	url: string
	depth: number
}

export type TOCMinimapProps = {
	items: TOCItemType[]
	className?: string
}

export function TOCMinimap({ items, className }: TOCMinimapProps) {
	const itemIds = useMemo(
		() => items.map((item) => item.url.replace("#", "")),
		[items]
	)

	const visibleHeadingIds = useVisibleHeadings(itemIds)

	if (!items.length) {
		return null
	}

	return (
		<div className={cn("ml-auto w-18", className)}>
			<HoverCard openDelay={0} closeDelay={0}>
				<HoverCardTrigger asChild>
					<div className="flex max-h-[50dvh] flex-col gap-3 overflow-hidden py-3 pl-6 opacity-100 transition-opacity duration-200 data-popup-open:opacity-0">
						{items.map((item) => {
							const headingId = item.url.replace("#", "")
							const isVisible = visibleHeadingIds.has(headingId)

							return (
								<div
									key={item.url}
									data-depth={item.depth}
									className={cn(
										"h-0.5 w-6 shrink-0 rounded-xs transition-[background-color] duration-200",
										isVisible ?
											"bg-foreground"
										:	"bg-muted-foreground/30",
										"data-[depth=3]:ml-2 data-[depth=3]:w-4",
										"data-[depth=4]:ml-4 data-[depth=4]:w-2"
									)}
								/>
							)
						})}
					</div>
				</HoverCardTrigger>

				<HoverCardContent
					className="w-56 overflow-hidden p-0 duration-200 data-[side=left]:slide-in-from-right-3 data-[side=left]:slide-out-to-right-3 data-open:zoom-in-100 data-closed:zoom-out-100"
					align="start"
					alignOffset={0}
					side="left"
					sideOffset={-60}
				>
					<div className="flex max-h-[50dvh] overflow-y-auto overscroll-contain">
						<ul className="flex size-full flex-col px-6 py-4 text-sm">
							{items.map((item) => {
								const headingId = item.url.replace("#", "")
								const isVisible = visibleHeadingIds.has(headingId)

								return (
									<li key={item.url} className="flex py-1">
										<a
											href={item.url}
											data-depth={item.depth}
											className={cn(
												"line-clamp-2 w-full transition-[color] duration-200",
												isVisible ?
													"text-foreground"
												:	"text-muted-foreground hover:text-foreground",
												"data-[depth=3]:pl-4 data-[depth=4]:pl-8"
											)}
											onClick={handleItemClick}
										>
											{item.title}
										</a>
									</li>
								)
							})}
						</ul>
					</div>
				</HoverCardContent>
			</HoverCard>
		</div>
	)
}

function handleItemClick(event: React.MouseEvent<HTMLAnchorElement>) {
	event.preventDefault()
	const url = event.currentTarget.getAttribute("href") ?? ""
	scrollToHeading(url)
}

function scrollToHeading(url: string) {
	history.pushState(null, "", url)
	document.getElementById(url.replace("#", ""))?.scrollIntoView({
		behavior: "smooth"
	})
}
