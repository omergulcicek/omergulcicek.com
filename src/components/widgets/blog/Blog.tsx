"use client"

import Link from "next/link"

import { dateFormat } from "@/helpers/date-format"

import { BlogProps } from "@/types/blog-type"

import { ArrowButton, Section } from "@/widgets"

export function Blog({ posts }: BlogProps) {
	return (
		<Section title="Blog" type="h2">
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
					<ArrowButton text="Tüm yazıları göster" />
				</Link>
			</div>
		</Section>
	)
}
