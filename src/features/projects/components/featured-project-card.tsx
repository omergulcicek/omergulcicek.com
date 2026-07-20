import { soccerBall, squareCode } from "@lucide/lab"
import {
	Asterisk,
	BookOpen,
	Bot,
	CalendarDays,
	ChevronRight,
	Icon,
	Layers,
	ListChecks,
	ShieldAlert,
	Terminal,
	TextCursorInput,
	type LucideIcon
} from "lucide-react"

import { cardTitleClass } from "@/components/shared/prose.styles"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import {
	getInteractiveCardClassName,
	interactiveCardChevronClass
} from "@/components/shared/interactive-card.styles"
import { cn } from "@/lib/utils"
import { withOutboundUtm } from "@/lib/outbound-url"

import type { Project } from "@/features/projects/types/project.types"

const projectIconClass = "size-8 md:size-10"
const projectIconStroke = 1.75

type ProjectVisualConfig =
	| {
			kind: "lucide"
			Icon: LucideIcon
			className: string
	  }
	| {
			kind: "lab"
			iconNode: typeof soccerBall
			className: string
	  }

const PROJECT_VISUALS: Record<string, ProjectVisualConfig> = {
	footy: {
		kind: "lab",
		iconNode: soccerBall,
		className: "text-emerald-600 dark:text-emerald-500"
	},
	takvim: {
		kind: "lucide",
		Icon: CalendarDays,
		className: "text-orange-400 dark:text-orange-300"
	},
	"ai-rules": {
		kind: "lucide",
		Icon: Bot,
		className: "text-fuchsia-500"
	},
	"nextjs-boilerplate": {
		kind: "lab",
		iconNode: squareCode,
		className: "text-sky-500"
	},
	"input-mask": {
		kind: "lucide",
		Icon: TextCursorInput,
		className: "text-indigo-500"
	},
	"password-toggle": {
		kind: "lucide",
		Icon: Asterisk,
		className: "text-rose-500"
	},
	"modern-web-in-3-minutes": {
		kind: "lucide",
		Icon: BookOpen,
		className: "text-amber-500"
	},
	"tanstack-boilerplate": {
		kind: "lucide",
		Icon: Layers,
		className: "text-cyan-500"
	},
	"start-cli": {
		kind: "lucide",
		Icon: Terminal,
		className: "text-teal-500"
	},
	standards: {
		kind: "lucide",
		Icon: ListChecks,
		className: "text-emerald-500"
	},
	"error-guard": {
		kind: "lucide",
		Icon: ShieldAlert,
		className: "text-red-500"
	}
}

function ComingSoonBadge() {
	return (
		<span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-amber-600/30 bg-amber-500/15 px-1.5 py-0.5 text-xs font-medium text-amber-950 md:gap-1.5 md:px-2 dark:border-amber-400/30 dark:bg-amber-400/15 dark:text-amber-100">
			<span className="relative flex size-1.5" aria-hidden>
				<span className="absolute inline-flex size-full animate-ping rounded-full bg-amber-400 opacity-75 motion-reduce:animate-none" />
				<span className="relative inline-flex size-1.5 rounded-full bg-amber-500" />
			</span>
			{SITE_CONTENT.projectsBadgeComingSoon}
		</span>
	)
}

function FeaturedProjectVisual({
	project,
	isComingSoon
}: {
	project: Project
	isComingSoon: boolean
}) {
	const visual = PROJECT_VISUALS[project.id]
	const mutedClass = isComingSoon ? "opacity-45 saturate-50" : undefined

	if (!visual) {
		return (
			<BookOpen
				className={cn(
					projectIconClass,
					"text-muted-foreground",
					mutedClass
				)}
				strokeWidth={projectIconStroke}
				aria-hidden
			/>
		)
	}

	if (visual.kind === "lab") {
		return (
			<Icon
				iconNode={visual.iconNode}
				className={cn(projectIconClass, visual.className, mutedClass)}
				strokeWidth={projectIconStroke}
				aria-hidden
			/>
		)
	}

	const LucideProjectIcon = visual.Icon

	return (
		<LucideProjectIcon
			className={cn(projectIconClass, visual.className, mutedClass)}
			strokeWidth={projectIconStroke}
			aria-hidden
		/>
	)
}

type FeaturedProjectCardProps = {
	project: Project
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
	const isComingSoon = project.status === "coming_soon"

	return (
		<a
			href={withOutboundUtm(project.href)}
			target="_blank"
			rel="noopener noreferrer"
			className={getInteractiveCardClassName(isComingSoon)}
		>
			<div className="flex h-20 items-center justify-center md:h-28">
				<FeaturedProjectVisual project={project} isComingSoon={isComingSoon} />
			</div>
			<div className="flex flex-col gap-1.5 md:gap-2">
				<div className="flex items-start justify-between gap-2 md:gap-3">
					<h3
						id={project.id}
						className={cn(
							cardTitleClass,
							isComingSoon && "text-muted-foreground"
						)}
					>
						{project.title}
					</h3>
					{isComingSoon ? (
						<ComingSoonBadge />
					) : (
						<ChevronRight
							className={interactiveCardChevronClass}
							aria-hidden
						/>
					)}
				</div>
				<p className="text-muted-foreground text-pretty text-xs leading-relaxed md:text-sm">
					{project.description}
				</p>
			</div>
		</a>
	)
}

export function FeaturedProjectListItem({ project }: FeaturedProjectCardProps) {
	const isComingSoon = project.status === "coming_soon"

	return (
		<a
			href={withOutboundUtm(project.href)}
			target="_blank"
			rel="noopener noreferrer"
			className="group flex flex-col md:flex-row md:items-center gap-1 md:gap-4 py-2"
		>
			<div className="flex items-center gap-2 md:gap-3 shrink-0 md:w-[240px]">
				<h3
					id={`${project.id}-list`}
					className={cn(
						cardTitleClass,
						isComingSoon && "text-muted-foreground",
						"truncate md:text-sm"
					)}
				>
					{project.title}
				</h3>
				{isComingSoon && <ComingSoonBadge />}
			</div>
			<div className="flex items-center gap-3 min-w-0 flex-1 justify-between md:justify-start">
				<p className="text-muted-foreground truncate text-left text-xs md:text-sm">
					{project.description}
				</p>
				{!isComingSoon && (
					<ChevronRight
						className={cn(interactiveCardChevronClass, "hidden md:block ml-auto")}
						aria-hidden
					/>
				)}
			</div>
		</a>
	)
}
