import { useEffect, useRef, useState } from "react"

import { writeToClipboard } from "@/lib/write-to-clipboard"

const COPY_FEEDBACK_MS = 2000

/**
 * Copies text and keeps `copied` true for a short moment so the UI can confirm it.
 * `copy` resolves to false when the clipboard is unavailable, instead of throwing.
 */
export function useCopyFeedback() {
	const [copied, setCopied] = useState(false)
	const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

	useEffect(() => {
		return () => {
			if (resetTimeoutRef.current) {
				clearTimeout(resetTimeoutRef.current)
			}
		}
	}, [])

	const copy = async (text: string): Promise<boolean> => {
		try {
			await writeToClipboard(text)
		} catch {
			setCopied(false)
			return false
		}

		if (resetTimeoutRef.current) {
			clearTimeout(resetTimeoutRef.current)
		}
		setCopied(true)
		resetTimeoutRef.current = setTimeout(
			() => setCopied(false),
			COPY_FEEDBACK_MS
		)

		return true
	}

	return { copied, copy }
}
