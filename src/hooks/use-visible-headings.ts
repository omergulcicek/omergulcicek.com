import { useEffect, useState } from "react"

function resolveHeadingElements(itemIds: string[]) {
	return itemIds
		.map((id) => document.getElementById(id))
		.filter((element): element is HTMLElement => element !== null)
}

function areVisibleSetsEqual(current: ReadonlySet<string>, next: Set<string>) {
	if (current.size !== next.size) {
		return false
	}

	for (const id of current) {
		if (!next.has(id)) {
			return false
		}
	}

	return true
}

export function useVisibleHeadings(itemIds: string[]) {
	const [visibleIds, setVisibleIds] = useState<ReadonlySet<string>>(
		() => new Set()
	)

	useEffect(() => {
		if (itemIds.length === 0) {
			setVisibleIds(new Set())
			return
		}

		let cancelled = false
		let retryFrameId = 0
		let retryCount = 0
		let observer: IntersectionObserver | null = null
		const visibility = new Map<string, boolean>()

		const syncVisibleHeadings = () => {
			if (cancelled) {
				return
			}

			const next = new Set<string>()

			for (const id of itemIds) {
				if (visibility.get(id)) {
					next.add(id)
				}
			}

			setVisibleIds((current) =>
				areVisibleSetsEqual(current, next) ? current : next
			)
		}

		const observeHeadings = () => {
			observer?.disconnect()
			const observedElements = resolveHeadingElements(itemIds)

			if (observedElements.length === 0) {
				if (retryCount < 60) {
					retryCount += 1
					retryFrameId = requestAnimationFrame(observeHeadings)
				}

				return
			}

			for (const id of itemIds) {
				if (!visibility.has(id)) {
					visibility.set(id, false)
				}
			}

			observer = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						visibility.set(entry.target.id, entry.isIntersecting)
					}

					syncVisibleHeadings()
				},
				{ threshold: 0 }
			)

			for (const element of observedElements) {
				observer.observe(element)
			}

			syncVisibleHeadings()
		}

		observeHeadings()

		return () => {
			cancelled = true
			cancelAnimationFrame(retryFrameId)
			observer?.disconnect()
		}
	}, [itemIds])

	return visibleIds
}
