import Link from "next/link"

import { BlogProps } from "@/types/blog-type"

import { dateFormat } from "@/utils/date-format"

import { Button } from "@/ui"
import { Section } from "@/widgets"

export function Blog({ posts }: BlogProps) {
	return (
		<Section title="Blog">
			<nav className="flex flex-col items-start gap-6">
				{posts.map((post, index) => (
					<Link
						key={post.slug}
						href={`/blog/${post.slug}`}
						className="flex items-center justify-start gap-4"
					>
						<span className="text-muted-foreground tabular-nums">
							0{index + 1}
						</span>
						<div>
							<h3 className="text-base font-medium">{post.metadata.title}</h3>
							{post.metadata.createdAt && (
								<p className="text-sm text-muted-foreground">
									{dateFormat(post.metadata.createdAt)}
								</p>
							)}
						</div>
					</Link>
				))}
			</nav>

			<div className="flex justify-center">
				<Link href="/blog">
					<Button variant="outline">Tüm yazıları göster</Button>
				</Link>
			</div>
		</Section>
	)
}
