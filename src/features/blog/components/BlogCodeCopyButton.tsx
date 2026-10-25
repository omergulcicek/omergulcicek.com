import { useCopyFeedback } from "@/hooks/use-copy-feedback"

import { Button } from "@/components/ui/button"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from "@/components/ui/tooltip"
import { BlogCodeCopyIcon } from "@/features/blog/components/BlogCodeCopyIcon"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"

type BlogCodeCopyButtonProps = {
	getCode: () => string
}

export function BlogCodeCopyButton({ getCode }: BlogCodeCopyButtonProps) {
	const { copied, copy } = useCopyFeedback()

	const handleCopy = async () => {
		const code = getCode()

		if (code) {
			await copy(code)
		}
	}

	const label = copied ? BLOG_UI.codeCopied : BLOG_UI.copyCode

	return (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						type="button"
						variant="outline"
						size="icon-xs"
						className="blog-code-copy-button bg-background/80 shadow-xs backdrop-blur-sm active:scale-[0.96]"
						aria-label={label}
						onClick={() => {
							void handleCopy()
						}}
					>
						<BlogCodeCopyIcon copied={copied} />
					</Button>
				</TooltipTrigger>
				<TooltipContent side="top">{label}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
