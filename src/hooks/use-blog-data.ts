"use client"

import { useEffect, useState } from "react"

interface BlogPost {
	slug: string
	metadata: {
		title: string
		description?: string
		category?: string
		createdAt: string
	}
	content: string
}

export function useBlogData() {
	const [posts, setPosts] = useState<BlogPost[]>([])
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
