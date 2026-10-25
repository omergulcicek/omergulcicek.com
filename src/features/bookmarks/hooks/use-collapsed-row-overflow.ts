import { useEffect, useState, type RefObject } from "react"

export function rowHasOverflow(row: HTMLDivElement | null) {
	if (!row) {
		return false
	}

	return row.scrollHeight > row.clientHeight + 1
}

export function useCollapsedRowOverflow(
	rowRef: RefObject<HTMLDivElement | null>,
	expanded: boolean,
	items: readonly string[]
) {
	const [hasOverflow, setHasOverflow] = useState(false)
	const itemsKey = items.join("\u0000")

	useEffect(() => {
		const row = rowRef.current

		if (!row) {
			setHasOverflow(false)
			return
		}

		const updateOverflow = () => {
			if (expanded) {
				return
			}

			setHasOverflow(rowHasOverflow(row))
		}

		updateOverflow()

		const resizeObserver = new ResizeObserver(updateOverflow)
		resizeObserver.observe(row)

		return () => {
			resizeObserver.disconnect()
		}
	}, [expanded, itemsKey, rowRef])

	return hasOverflow
}
