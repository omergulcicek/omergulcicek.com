"use client"

import Link from "next/link"

import { dateFormat } from "@/helpers/date-format"

import type { BlogPropsType } from "@/types/blog.type"

import { ArrowButton, Section } from "@/widgets"

export function Blog({ posts }: BlogPropsType) {
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
							<h3 className="font-medium">{post.metadata.title}</h3>
							{post.metadata.createdAt && (
								<p className="text-muted-foreground text-sm">
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
