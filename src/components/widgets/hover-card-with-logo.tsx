import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"

import { cn } from "@/utils"

export const HoverCardWithLogo = ({
	title,
	content,
	fallback,
	desc,
	img,
	link,
	className
}: {
	title: string
	content: string
	fallback: string
	desc: string
	img: string
	link: string
	className?: string
}) => {
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
								{link.replace("?utm_source=omergulcicek.com", "")}
							</Link>
						</div>
					</div>
				</HoverCardContent>
			</HoverCard>
		</>
	)
}
