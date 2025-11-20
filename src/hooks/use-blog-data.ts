"use client"

import { useEffect, useState } from "react"

import type { BlogPostType } from "@/types/blog.type"

export function useBlogData() {
	const [posts, setPosts] = useState<BlogPostType[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				setLoading(true)
				const response = await fetch("/api/posts")
				if (!response.ok) {
					throw new Error("Blog yazıları yüklenemedi")
				}
				const data = await response.json()
				setPosts(data)
			} catch (err) {
				setError(err instanceof Error ? err.message : "Bilinmeyen hata")
			} finally {
				setLoading(false)
			}
		}

		fetchPosts()
	}, [])

	return {
		posts,
		loading,
		error
	}
}
