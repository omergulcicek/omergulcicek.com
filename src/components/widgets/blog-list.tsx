import Link from "next/link"

import { formatDate } from "@/utils"
import { getBlogPosts } from "@/utils/get-blog-posts"

import Container from "@/shared/container"
import { MediumIcon } from "@/ui/medium"
import { BlogPost } from "@/types"

export function BlogList() {
	const allBlogs: BlogPost[] = getBlogPosts()

	return (
		<Container className="mt-20">
			<div className="flex flex-col gap-3">
				{allBlogs.map(({ folder, date, title, category, medium, path }) => (
					<div className="flex flex-col items-start" key={folder}>
						<div className="flex items-center gap-4 text-sm text-tertiary-foreground tabular-nums">
							<span className="italic">{formatDate(date, false)}</span> ·
							<span>{category}</span>
							{medium && (
								<>
									·
									<MediumIcon path={medium} />
								</>
							)}
						</div>
						<Link
							className="flex flex-col space-y-1 mb-4"
							href={`/blog/${path}`}
						>
							<p className="tracking-tight text-lg">{title}</p>
						</Link>
					</div>
				))}
			</div>
		</Container>
	)
}
