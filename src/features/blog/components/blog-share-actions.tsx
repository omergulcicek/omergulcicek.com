import { useCallback, useEffect, useRef, useState } from "react"
import { Check, ChevronDown, Copy, Linkedin, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { X } from "@/components/ui/svgs/x"
import { XDark } from "@/components/ui/svgs/xDark"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from "@/components/ui/tooltip"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import { SITE } from "@/constants/site.constants"
import { cn } from "@/lib/utils"
import { writeToClipboard } from "@/lib/write-to-clipboard"

const COPY_RESET_MS = 2000

type BlogShareActionsProps = {
	path: string
	title: string
	className?: string
}

function buildShareUrl(path: string) {
	return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`
}

function buildXShareUrl(url: string, title: string) {
	const params = new URLSearchParams({
		url,
		text: title
	})

	return `https://x.com/intent/tweet?${params.toString()}`
}

function buildLinkedInShareUrl(url: string) {
	const params = new URLSearchParams({ url })

	return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`
}

function ShareIcon({ copied }: { copied: boolean }) {
	return (
		<span className="relative size-3.5" aria-hidden="true">
			<Copy
				className={cn(
					"absolute inset-0 size-3.5 transition-[opacity,transform,filter] duration-150 ease-out",
					copied ?
						"pointer-events-none scale-75 opacity-0 blur-[4px]"
					:	"scale-100 opacity-100 blur-0"
				)}
			/>
			<Check
				className={cn(
					"absolute inset-0 size-3.5 transition-[opacity,transform,filter] duration-150 ease-out",
					copied ?
						"scale-100 opacity-100 blur-0"
					:	"pointer-events-none scale-75 opacity-0 blur-[4px]"
				)}
			/>
		</span>
	)
}

function XShareIcon() {
	return (
		<>
			<X className="size-3.5 dark:hidden" aria-hidden />
			<XDark className="size-3.5 hidden dark:block" aria-hidden />
		</>
	)
}

export function BlogShareActions({ path, title, className }: BlogShareActionsProps) {
	const [copied, setCopied] = useState(false)
	const [canNativeShare, setCanNativeShare] = useState(false)
	const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
	const shareUrl = buildShareUrl(path)
	const xShareUrl = buildXShareUrl(shareUrl, title)
	const linkedInShareUrl = buildLinkedInShareUrl(shareUrl)

	const clearResetTimeout = useCallback(() => {
		if (resetTimeoutRef.current) {
			clearTimeout(resetTimeoutRef.current)
			resetTimeoutRef.current = null
		}
	}, [])

	useEffect(() => {
		setCanNativeShare(typeof navigator !== "undefined" && "share" in navigator)

		return () => {
			clearResetTimeout()
		}
	}, [clearResetTimeout])

	const handleCopy = useCallback(async () => {
		try {
			await writeToClipboard(shareUrl)
			clearResetTimeout()
			setCopied(true)
			resetTimeoutRef.current = setTimeout(() => {
				setCopied(false)
				resetTimeoutRef.current = null
			}, COPY_RESET_MS)
		} catch {
			setCopied(false)
		}
	}, [clearResetTimeout, shareUrl])

	const handleNativeShare = useCallback(async () => {
		if (!navigator.share) {
			await handleCopy()
			return
		}

		try {
			await navigator.share({ title, url: shareUrl })
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") {
				return
			}

			await handleCopy()
		}
	}, [handleCopy, shareUrl, title])

	const copyLabel = copied ? BLOG_UI.linkCopied : BLOG_UI.copyLink

	return (
		<>
			<div className={cn("md:hidden", className)}>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button type="button" variant="outline" size="xs">
							<Share2 aria-hidden />
							{BLOG_UI.shareLabel}
							<ChevronDown aria-hidden />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem
							onClick={() => {
								void handleCopy()
							}}
						>
							<ShareIcon copied={copied} />
							{copyLabel}
						</DropdownMenuItem>
						{canNativeShare ? (
							<DropdownMenuItem
								onClick={() => {
									void handleNativeShare()
								}}
							>
								<Share2 aria-hidden />
								{BLOG_UI.shareLabel}
							</DropdownMenuItem>
						) : null}
						<DropdownMenuItem asChild>
							<a
								href={xShareUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<XShareIcon />
								{BLOG_UI.shareOnX}
							</a>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<a
								href={linkedInShareUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin aria-hidden />
								{BLOG_UI.shareOnLinkedIn}
							</a>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			<div
				className={cn(
					"hidden shrink-0 flex-wrap items-center gap-2 md:flex",
					className
				)}
			>
				<span className="text-muted-foreground text-sm">
					{BLOG_UI.shareLabel}
				</span>
				<TooltipProvider delayDuration={0}>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								type="button"
								variant="outline"
								size="icon-sm"
								aria-label={copyLabel}
								onClick={() => {
									void handleCopy()
								}}
							>
								<ShareIcon copied={copied} />
							</Button>
						</TooltipTrigger>
						<TooltipContent side="top">{copyLabel}</TooltipContent>
					</Tooltip>
				</TooltipProvider>

				{canNativeShare ? (
					<Button
						type="button"
						variant="outline"
						size="icon-sm"
						aria-label={BLOG_UI.shareLabel}
						onClick={() => {
							void handleNativeShare()
						}}
					>
						<Share2 className="size-3.5" aria-hidden />
					</Button>
				) : null}

				<Button variant="outline" size="icon-sm" asChild>
					<a
						href={xShareUrl}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={BLOG_UI.shareOnX}
					>
						<XShareIcon />
					</a>
				</Button>

				<Button variant="outline" size="icon-sm" asChild>
					<a
						href={linkedInShareUrl}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={BLOG_UI.shareOnLinkedIn}
					>
						<Linkedin className="size-3.5" aria-hidden />
					</a>
				</Button>
			</div>
		</>
	)
}

export function BlogShareActionsBar({
	path,
	title,
	className
}: BlogShareActionsProps) {
	return (
		<BlogShareActions path={path} title={title} className={className} />
	)
}
