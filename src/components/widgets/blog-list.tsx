import Link from "next/link"

import { getBlogPosts } from "@/app/(writing)/blog/utils"
import { formatDate } from "@/utils"

import Container from "@/shared/container"
import { BlogPost } from "@/types"

export function BlogList() {
	const allBlogs: BlogPost[] = getBlogPosts()

	return (
		<Container className="mt-20">
			<div className="flex flex-col gap-3">
				{allBlogs.map(({ folder, date, title, path }) => (
					<div className="flex flex-col items-start gap-0.5" key={folder}>
						<p className="text-base text-tertiary-foreground w-40 tabular-nums">
							{formatDate(date, false)}
						</p>
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
