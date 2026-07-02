import { AlertTriangle, Info } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import type {
	BlogNoticeProps,
	BlogNoticeVariant
} from "@/features/blog/types/blog-notice.types"
import { cn } from "@/lib/utils"

function getBlogNoticeIcon(variant: BlogNoticeVariant) {
	if (variant === "info") {
		return Info
	}

	return AlertTriangle
}

export function BlogNotice({
	title,
	variant = "warning",
	children
}: BlogNoticeProps) {
	const Icon = getBlogNoticeIcon(variant)

	return (
		<Alert
			variant={variant === "warning" ? "destructive" : "default"}
			className={cn(
				"blog-notice mt-2 mb-8 text-left md:mb-10",
				variant === "warning" && "border-destructive/20 bg-destructive/5"
			)}
		>
			<Icon aria-hidden="true" />
			<AlertTitle>{title}</AlertTitle>
			<AlertDescription>
				<div className="blog-notice__content">{children}</div>
			</AlertDescription>
		</Alert>
	)
}
