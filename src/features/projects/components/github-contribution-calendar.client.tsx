import { lazy, startTransition, Suspense, useEffect, useRef, useState } from "react"

import { bleedSectionClass } from "@/components/shared/prose.styles"
import {
	GITHUB_CALENDAR_CONTAINER_HEIGHT_PX,
	GITHUB_CALENDAR_CONTENT_HEIGHT_PX,
	GITHUB_CALENDAR_WIDTH_PX
} from "@/features/projects/constants/github-calendar.constants"
import { useGitHubContributions } from "@/features/projects/hooks/use-github-contributions"
import { useTheme } from "@/hooks/use-theme"
import { cn } from "@/lib/utils"

function GitHubCalendarSkeleton() {
	return (
		<div
			className="bg-muted/40 w-full max-w-[699px] animate-pulse rounded-md"
			style={{
				minHeight: GITHUB_CALENDAR_CONTENT_HEIGHT_PX,
				height: GITHUB_CALENDAR_CONTENT_HEIGHT_PX
			}}
			aria-hidden
		/>
	)
}

const LazyGitHubContributionCalendarInner = lazy(async () => {
	const module = await import(
		"@/features/projects/components/github-contribution-calendar-inner.client"
	)

	return { default: module.GitHubContributionCalendarInner }
})

export function GitHubContributionCalendar() {
	const { isMounted } = useTheme()
	const [isInView, setIsInView] = useState(false)
	const [canRenderCalendar, setCanRenderCalendar] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	const shouldFetch = isMounted && isInView
	const { data: contributions, isSuccess } = useGitHubContributions({
		enabled: shouldFetch
	})

	useEffect(() => {
		if (!isMounted) return

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting) {
					setIsInView(true)
					observer.disconnect()
				}
			},
			{ rootMargin: "200px" }
		)

		if (containerRef.current) {
			observer.observe(containerRef.current)
		}

		return () => observer.disconnect()
	}, [isMounted])

	useEffect(() => {
		if (!isSuccess || !contributions) return

		const enableCalendar = () => {
			startTransition(() => {
				setCanRenderCalendar(true)
			})
		}

		if ("requestIdleCallback" in window) {
			const idleId = window.requestIdleCallback(enableCalendar, {
				timeout: 1500
			})

			return () => {
				window.cancelIdleCallback(idleId)
			}
		}

		const timeoutId = globalThis.setTimeout(enableCalendar, 100)

		return () => {
			globalThis.clearTimeout(timeoutId)
		}
	}, [contributions, isSuccess])

	const showCalendar = shouldFetch && canRenderCalendar && contributions

	return (
		<section className={bleedSectionClass} aria-label="GitHub katkı takvimi">
			<p className="sr-only">
				Son bir yıldaki GitHub commit aktivitesini gösteren ısı haritası. Hücreler
				üzerine gelindiğinde günlük katkı sayısı görüntülenir.
			</p>
			<div
				ref={containerRef}
				className="text-muted-foreground flex w-full justify-center overflow-x-auto overflow-y-hidden py-2"
				style={{
					minHeight: GITHUB_CALENDAR_CONTAINER_HEIGHT_PX,
					height: GITHUB_CALENDAR_CONTAINER_HEIGHT_PX
				}}
			>
				<div
					className={cn("github-calendar", "w-fit shrink-0")}
					style={{
						minWidth: GITHUB_CALENDAR_WIDTH_PX,
						minHeight: GITHUB_CALENDAR_CONTENT_HEIGHT_PX
					}}
				>
					{showCalendar ? (
						<Suspense fallback={<GitHubCalendarSkeleton />}>
							<LazyGitHubContributionCalendarInner
								contributions={contributions}
							/>
						</Suspense>
					) : (
						<GitHubCalendarSkeleton />
					)}
				</div>
			</div>
		</section>
	)
}
