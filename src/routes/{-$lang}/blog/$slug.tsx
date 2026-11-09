import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { hreflangLinks } from "@/helpers/localized-url"

import { NotFound } from "@/components/shared/NotFound"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { blogPostQueryOptions, blogPostsQueryOptions } from "@/features/blog/api/blog.queries"
import { BlogPostArticle } from "@/features/blog/components/BlogPostArticle"

export const Route = createFileRoute("/{-$lang}/blog/$slug")({
  // The list comes along for the previous and next links; it is cached for the list page too.
  loader: async ({ context, params }) => {
    const [post] = await Promise.all([
      context.queryClient.query({
        ...blogPostQueryOptions("technical", params.slug),
        staleTime: "static"
      }),
      context.queryClient.query({ ...blogPostsQueryOptions("technical"), staleTime: "static" })
    ])
    return post
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [{ title: loaderData.title }, { name: "description", content: loaderData.description }]
      : [],
    links: hreflangLinks(`/blog/${params.slug}`)
  }),
  notFoundComponent: () => <NotFound />,
  component: BlogPostPage
})

function BlogPostPage() {
  const { slug } = Route.useParams()

  return (
    <div className={cn(readingWidthClass)}>
      <BlogPostArticle category="technical" slug={slug} />
    </div>
  )
}
