import type { Transition } from "motion/react"

import { RepoAvatar } from "@/features/projects/components/RepoAvatar"
import type { RepoContribution } from "@/features/projects/types/github-activity.types"

type RepoRowProps = {
	repo: RepoContribution
	layoutId: string
	transition: Transition
}

export function RepoRow({ repo, layoutId, transition }: RepoRowProps) {
	return (
		<a
			href={repo.href}
			target="_blank"
			rel="noreferrer"
			className="hover:bg-foreground/5 mx-2 flex items-center gap-3 rounded-xl px-2 py-2 transition-colors"
		>
			<RepoAvatar repo={repo} layoutId={layoutId} transition={transition} />
			<span className="text-foreground flex-1 truncate text-sm">{repo.name}</span>
			<span className="text-foreground/70 text-sm tabular-nums">{repo.count}</span>
		</a>
	)
}
