import type { ReactNode } from "react"

export type BlogNoticeVariant = "warning" | "info"

export type BlogNoticeProps = {
	title: string
	variant?: BlogNoticeVariant
	children: ReactNode
}
