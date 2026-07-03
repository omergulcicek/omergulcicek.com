import { useEffect, useState } from "react"

import { BLOG_UI } from "@/features/blog/constants/blog.constants"

export function BlogReadingProgress() {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const article = document.querySelector("[data-blog-article]")

		if (!article) {
			return
		}

		const updateProgress = () => {
			const { top, height } = article.getBoundingClientRect()
			const viewportHeight = window.innerHeight
			const scrollable = height - viewportHeight

			if (scrollable <= 0) {
				setProgress(top <= 0 ? 100 : 0)
				return
			}

			const scrolled = Math.min(Math.max(-top, 0), scrollable)
			setProgress(Math.round((scrolled / scrollable) * 100))
		}

		updateProgress()
		window.addEventListener("scroll", updateProgress, { passive: true })
		window.addEventListener("resize", updateProgress)

		return () => {
			window.removeEventListener("scroll", updateProgress)
			window.removeEventListener("resize", updateProgress)
		}
	}, [])

	return (
		<div
			className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-primary motion-reduce:hidden"
			style={{ transform: `scaleX(${progress / 100})` }}
			role="progressbar"
			aria-label={BLOG_UI.readingProgressAriaLabel}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={progress}
		/>
	)
}
