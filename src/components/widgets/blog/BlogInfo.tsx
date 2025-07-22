import { Calendar } from "lucide-react"

import { BlogPost } from "@/types/blog-type"

import { dateFormat } from "@/utils/date-format"

import { TagsBadge, TOC } from "@/widgets"

export function BlogInfo({ post }: { post: BlogPost }) {
	return (
		<>
			<div className="flex items-start justify-between gap-10 text-muted-foreground text-sm">
				<div className="flex items-center gap-2 whitespace-nowrap">
					<Calendar className="size-4" />
					<time dateTime={post.metadata.createdAt}>
						{dateFormat(post.metadata.createdAt)}
					</time>
				</div>

				<TagsBadge tags={post.metadata.tags} />
			</div>

			<TOC content={post.content} />
		</>
	)
}
