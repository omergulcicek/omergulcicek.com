"use client"

import Link from "next/link"

import { dateFormat } from "@/lib/date-format"

import { ArrowButton, Section } from "@/shared"
import type { BlogPropsType } from "@/features/blog/types/blog.types"

export function Blog({ posts }: BlogPropsType) {
	return (
		<Section title="Blog" type="h2">
			<nav className="flex flex-col items-start gap-6">
				{posts.map((post) => (
					<Link
						key={post.slug}
						href={`/blog/${post.slug}`}
						className="flex items-center justify-start gap-4 group"
					>
						{post.metadata.createdAt && (
							<span className="text-muted-foreground shrink-0 tabular-nums text-sm">
								{dateFormat(post.metadata.createdAt, "DD/MM/YY")}
							</span>
						)}
						<h3 className="group-hover:underline group-hover:underline-offset-4 transition-all duration-200">
							{post.metadata.title}
						</h3>
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
