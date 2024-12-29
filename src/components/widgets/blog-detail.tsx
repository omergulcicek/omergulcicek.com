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
			<BlogDetailHeader
				date={post.date}
				category={post.keywords}
				medium={post.medium}
			/>

			<article>
				<BlurFade delay={0.4} duration={0.3}>
					<h1>{post.title}</h1>
				</BlurFade>

				<BlurFade delay={0.7} duration={0.5}>
					<Markdown>{post.content}</Markdown>
				</BlurFade>
			</article>
		</>
	)
}
