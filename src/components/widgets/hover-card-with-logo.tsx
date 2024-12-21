import Link from "next/link"

import { cn } from "@/utils"

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"

export const HoverCardWithLogo = ({
	title,
	content,
	fallback,
	desc,
	img,
	link,
	className
}: any) => {
	return (
		<>
			<HoverCard>
				<HoverCardTrigger asChild className="inline-flex">
					<span className="text-slate-950 dark:text-white font-medium cursor-pointer hover:underline">
						{content}
					</span>
				</HoverCardTrigger>
				<HoverCardContent className={cn("max-w-72", className)}>
					<div className="flex justify-between space-x-4">
						<Avatar>
							<AvatarImage src={img} />
							<AvatarFallback>{fallback}</AvatarFallback>
						</Avatar>
						<div className="space-y-1">
							<h4 className="text-sm font-semibold">{title}</h4>
							<p className="text-sm">{desc}</p>
							<Link
								href={`https://${link}`}
								rel="noopener noreferrer"
								target="_blank"
								className="text-xs text-blue-500 hover:underline"
							>
								{link}
							</Link>
						</div>
					</div>
				</HoverCardContent>
			</HoverCard>
		</>
	)
}
