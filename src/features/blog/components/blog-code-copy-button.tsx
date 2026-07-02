import { useCallback, useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { writeToClipboard } from "@/lib/write-to-clipboard"

const COPY_RESET_MS = 2000

type BlogCodeCopyButtonProps = {
	getCode: () => string
}

function BlogCodeCopyIcon({ copied }: { copied: boolean }) {
	return (
		<span className="relative size-3.5" aria-hidden="true">
			<Copy
				className={cn(
					"blog-code-copy-icon absolute inset-0 size-3.5",
					copied ?
						"pointer-events-none scale-75 opacity-0 blur-[4px]"
					:	"scale-100 opacity-100 blur-0"
				)}
			/>
			<Check
				className={cn(
					"blog-code-copy-icon absolute inset-0 size-3.5",
					copied ?
						"scale-100 opacity-100 blur-0"
					:	"pointer-events-none scale-75 opacity-0 blur-[4px]"
				)}
			/>
		</span>
	)
}

export function BlogCodeCopyButton({ getCode }: BlogCodeCopyButtonProps) {
	const [copied, setCopied] = useState(false)
	const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

	const clearResetTimeout = useCallback(() => {
		if (resetTimeoutRef.current) {
			clearTimeout(resetTimeoutRef.current)
			resetTimeoutRef.current = null
		}
	}, [])

	useEffect(() => {
		return () => {
			clearResetTimeout()
		}
	}, [clearResetTimeout])

	const handleCopy = useCallback(async () => {
		const code = getCode()

		if (!code) {
			return
		}

		try {
			await writeToClipboard(code)
			clearResetTimeout()
			setCopied(true)
			resetTimeoutRef.current = setTimeout(() => {
				setCopied(false)
				resetTimeoutRef.current = null
			}, COPY_RESET_MS)
		} catch {
			setCopied(false)
		}
	}, [clearResetTimeout, getCode])

	const label = copied ? "Kopyalandı" : "Kodu kopyala"

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
