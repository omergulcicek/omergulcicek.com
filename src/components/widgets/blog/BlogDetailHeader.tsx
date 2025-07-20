import Link from "next/link"

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@/ui"

export function BlogDetailHeader({
	previous,
	next
}: {
	previous: { slug: string; metadata: Record<string, unknown> } | null
	next: { slug: string; metadata: Record<string, unknown> } | null
}) {
	return (
		<div className="flex items-center justify-between p-2 pl-4">
			<Button className="px-0 text-muted-foreground" variant="link" asChild>
				<Link href="/blog">
					<ArrowLeftIcon />
					Blog
				</Link>
			</Button>

			{(previous || next) && (
				<div className="flex items-center gap-2">
					{previous && (
						<Tooltip>
							<TooltipTrigger>
								<Button variant="secondary" size="icon" asChild>
									<Link href={`/blog/${previous.slug}`}>
										<ArrowLeftIcon />
										<span className="sr-only">Previous</span>
									</Link>
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>{previous.metadata.title as string}</p>
							</TooltipContent>
						</Tooltip>
					)}

					{next && (
						<Tooltip>
							<TooltipTrigger>
								<Button variant="secondary" size="icon" asChild>
									<Link href={`/blog/${next.slug}`}>
										<ArrowRightIcon />
										<span className="sr-only">Next</span>
									</Link>
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>{next.metadata.title as string}</p>
							</TooltipContent>
						</Tooltip>
					)}
				</div>
			)}
		</div>
	)
}
