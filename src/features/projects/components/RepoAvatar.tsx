import { m, type Transition } from "motion/react"

import { cn } from "@/lib/utils"

import type { RepoContribution } from "@/features/projects/types/github-activity.types"

type RepoAvatarProps = {
	repo: RepoContribution
	layoutId: string
	transition: Transition
	className?: string
}

export function RepoAvatar({
	repo,
	layoutId,
	transition,
	className
}: RepoAvatarProps) {
	return (
		<m.span
			layoutId={layoutId}
			transition={transition}
			className={cn(
				"text-foreground/70 ring-background grid size-7 shrink-0 place-items-center overflow-hidden rounded-full bg-muted text-[11px] font-medium uppercase ring-2",
				className
			)}
		>
			{repo.avatarUrl ? (
				<img
					src={repo.avatarUrl}
					alt=""
					width={28}
					height={28}
					className="size-full object-cover"
				/>
			) : (
				repo.name.charAt(0)
			)}
		</m.span>
	)
}
