import Link from "next/link"

import { Calendar } from "lucide-react"

import { dateFormat } from "@/lib/date-format"

import { TagsBadge } from "@/shared"
import { TOC } from "@/features/blog/components/toc"
import type { BlogPostType } from "@/features/blog/types/blog.types"

export function BlogInfo({ post }: { post: BlogPostType }) {
	return (
		<>
			<div className="flex flex-col md:flex-row items-start justify-between gap-2 md:gap-10 text-muted-foreground text-sm">
				<div className="flex items-center gap-2 whitespace-nowrap">
					<Calendar className="size-4" />
					<time dateTime={post.metadata.createdAt}>
						{String(post.metadata.createdAt).toLowerCase() === "soon"
							? "hazırlanıyor..."
							: dateFormat(post.metadata.createdAt)}
					</time>
					{typeof post.metadata.medium === "string" &&
						post.metadata.medium.trim() !== "" && (
							<>
								<span>•</span>
								<span className="text-muted-foreground text-sm">
									<Link
										href={post.metadata.medium}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Medium'da oku"
									>
										Medium&apos;da oku
									</Link>
								</span>
							</>
						)}
				</div>

				<TagsBadge tags={post.metadata.tags} />
			</div>

			<TOC content={post.content} />
		</>
	)
}
