"use client"

import { useEffect } from "react"

import Markdown from "markdown-to-jsx"
import Prism from "prismjs"

import BlogDetailHeader from "@/widgets/blog-detail-header"
import BlurFade from "@/ui/blur-fade"

import "@/atom-dark-theme"

export default function BlogDetail({ post }: any) {
	useEffect(() => {
		Prism.highlightAll()
	}, [])

	return (
		<>
			<article>
				<BlogDetailHeader
					title={post.title}
					date={post.date}
					keywords={post.keywords}
					medium={post.medium}
				/>
				<BlurFade delay={0.7} duration={0.5}>
					<Markdown>{post.content}</Markdown>
				</BlurFade>
			</article>
		</>
	)
}
