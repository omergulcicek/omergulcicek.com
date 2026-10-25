import { ChevronDown } from "lucide-react"
import { AnimatePresence, motion, type Transition } from "motion/react"
import { useId, useState } from "react"

import { RepoAvatar } from "@/features/projects/components/RepoAvatar"
import { RepoRow } from "@/features/projects/components/RepoRow"
import {
	ACTIVITY_SPRING,
	HEADER_SPRING,
	PANEL_INSET,
	PANEL_RADIUS,
	ROW_OFFSET,
	ROW_SPRING,
	TOP_REPOS_LIMIT
} from "@/features/projects/constants/github-activity.constants"
import { PROJECTS_UI } from "@/features/projects/constants/projects.constants"
import type { RepoContribution } from "@/features/projects/types/github-activity.types"

const NO_MOTION: Transition = { duration: 0 }

type TopReposPanelProps = {
	repos: RepoContribution[]
	reduceMotion: boolean | null
}

/** Collapsible panel over the calendar listing the most active repositories. */
export function TopReposPanel({ repos, reduceMotion }: TopReposPanelProps) {
	const uid = useId()
	const [open, setOpen] = useState(false)
	const transition = reduceMotion ? NO_MOTION : ACTIVITY_SPRING
	const kick = reduceMotion ? {} : { x: ROW_OFFSET, y: ROW_OFFSET }

	return (
		<motion.div
			layout
			id={`${uid}-panel`}
			data-slot="github-activity-panel"
			data-state={open ? "open" : "closed"}
			className="bg-card/90 absolute overflow-hidden backdrop-blur-xl"
			style={{
				borderRadius: PANEL_RADIUS,
				insetInline: PANEL_INSET,
				bottom: PANEL_INSET,
				...(open ? { top: PANEL_INSET } : {})
			}}
			transition={transition}
		>
			<motion.div
				layout="position"
				transition={reduceMotion ? NO_MOTION : HEADER_SPRING}
				className="flex items-center justify-between gap-3 px-4 py-3"
			>
				{open ? (
					<span className="text-foreground truncate text-sm">
						{PROJECTS_UI.topReposLabel}
					</span>
				) : (
					<span />
				)}

				<div className="flex items-center gap-3">
					{open ? null : (
						<div className="flex items-center">
							{repos.slice(0, TOP_REPOS_LIMIT).map((repo) => (
								<RepoAvatar
									key={repo.href}
									repo={repo}
									layoutId={`${uid}-${repo.href}`}
									transition={transition}
									className="-ml-2 first:ml-0"
								/>
							))}
						</div>
					)}

					<button
						type="button"
						onClick={() => setOpen((previous) => !previous)}
						aria-expanded={open}
						aria-controls={`${uid}-panel`}
						aria-label={open ? PROJECTS_UI.hideTopRepos : PROJECTS_UI.showTopRepos}
						className="hit-area bg-card grid size-9 shrink-0 place-items-center rounded-full transition-transform duration-150 ease-out active:scale-96"
					>
						<motion.span
							className="text-muted-foreground grid size-4 place-items-center"
							initial={false}
							animate={{ rotate: open ? 180 : 0 }}
							transition={transition}
						>
							<ChevronDown className="size-4" aria-hidden />
						</motion.span>
					</button>
				</div>
			</motion.div>

			<AnimatePresence initial={false} mode="popLayout">
				{open ? (
					<motion.ul
						key="list"
						layout="position"
						initial={{ opacity: 0, ...kick }}
						animate={{ opacity: 1, x: 0, y: 0 }}
						exit={{ opacity: 0, ...kick }}
						transition={reduceMotion ? NO_MOTION : ROW_SPRING}
						className="px-0.5 pb-1"
					>
						{repos.map((repo) => (
							<li key={repo.href}>
								<RepoRow
									repo={repo}
									layoutId={`${uid}-${repo.href}`}
									transition={transition}
								/>
							</li>
						))}
					</motion.ul>
				) : null}
			</AnimatePresence>
		</motion.div>
	)
}
