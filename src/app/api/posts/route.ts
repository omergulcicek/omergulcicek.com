import { NextResponse } from "next/server"

import { getAllPosts } from "@/data/blog.data"

export const dynamic = "force-static"

export async function GET() {
	try {
		const posts = getAllPosts()
		return NextResponse.json(posts)
	} catch (error: unknown) {
		const errorMessage =
			error instanceof Error
				? error.message
				: "Blog yazıları yüklenirken hata oluştu"
		return NextResponse.json({ error: errorMessage }, { status: 500 })
	}
}
