import { useEffect, useState } from "react"
import { ChevronDown, Linkedin, Share2 } from "lucide-react"

import { useCopyFeedback } from "@/hooks/use-copy-feedback"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from "@/components/ui/tooltip"
import { ShareIcon } from "@/features/blog/components/ShareIcon"
import { XShareIcon } from "@/features/blog/components/XShareIcon"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import {
	buildLinkedInShareUrl,
	buildShareUrl,
	buildXShareUrl
} from "@/features/blog/helpers/blog-share-urls"

type BlogShareActionsProps = {
	path: string
	title: string
	className?: string
}

export function BlogShareActions({
	path,
	title,
	className
}: BlogShareActionsProps) {
	const { copied, copy } = useCopyFeedback()
	const [canNativeShare, setCanNativeShare] = useState(false)
	const shareUrl = buildShareUrl(path)
	const xShareUrl = buildXShareUrl(shareUrl, title)
	const linkedInShareUrl = buildLinkedInShareUrl(shareUrl)

	useEffect(() => {
		setCanNativeShare("share" in navigator)
	}, [])

	const handleCopy = async () => {
		await copy(shareUrl)
	}

	const handleNativeShare = async () => {
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
	}

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
							<a href={xShareUrl} target="_blank" rel="noopener noreferrer">
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
