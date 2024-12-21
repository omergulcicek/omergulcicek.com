import BlogPost, { metadata } from "@/data/posts/2022-degerlendirmesi/index.mdx"

export default function Page() {
	console.log("metadata: ", metadata)

	return <BlogPost />
}
