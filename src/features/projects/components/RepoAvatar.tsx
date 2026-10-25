import { motion, type Transition } from "motion/react"

import type { RepoContribution } from "@/features/projects/types/github-activity.types"
import { cn } from "@/lib/utils"

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
		<motion.span
			layoutId={layoutId}
			transition={transition}
			className={cn(
				"text-foreground/70 ring-background grid size-7 shrink-0 place-items-center overflow-hidden rounded-full bg-neutral-200 text-[11px] font-medium uppercase ring-2 dark:bg-neutral-800",
				className
			)}
		>
			{repo.avatarUrl ? (
				<img src={repo.avatarUrl} alt="" className="size-full object-cover" />
			) : (
				repo.name.charAt(0)
			)}
		</motion.span>
	)
}
