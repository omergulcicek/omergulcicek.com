import Link from "next/link"

import { dateFormat } from "@/helpers/date-format"
import { Calendar } from "lucide-react"

import { BlogPost } from "@/types/blog-type"

import { TagsBadge, TOC } from "@/widgets"

export function BlogInfo({ post }: { post: BlogPost }) {
	return (
		<>
			<div className="flex flex-col md:flex-row items-start justify-between gap-2 md:gap-10 text-muted-foreground text-sm">
				<div className="flex items-center gap-2 whitespace-nowrap">
					<Calendar className="size-4" />
					<time dateTime={post.metadata.createdAt}>
						{String(post.metadata.createdAt).toLowerCase() === "future"
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
