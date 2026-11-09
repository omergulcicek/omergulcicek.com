import { createFileRoute } from "@tanstack/react-router"
import { cn } from "cn"

import { NotFound } from "@/components/shared/NotFound"
import { readingWidthClass } from "@/components/shared/surface.styles"
import { blogPostQueryOptions, blogPostsQueryOptions } from "@/features/blog/api/blog.queries"
import { BlogPostArticle } from "@/features/blog/components/BlogPostArticle"
import { postHead } from "@/features/blog/helpers/post-head"

export const Route = createFileRoute("/{-$lang}/notes/$slug")({
  // The list comes along for the previous and next links; it is cached for the list page too.
  loader: async ({ context, params }) => {
    const [post] = await Promise.all([
      context.queryClient.query({
        ...blogPostQueryOptions("personal", params.slug),
        staleTime: "static"
      }),
      context.queryClient.query({ ...blogPostsQueryOptions("personal"), staleTime: "static" })
    ])
    return post
  },
  head: ({ loaderData, params }) =>
    loaderData ? postHead(`/notes/${params.slug}`, loaderData) : {},
  notFoundComponent: () => <NotFound />,
  component: NotePage
})

function NotePage() {
  const { slug } = Route.useParams()

  return (
    <div className={cn(readingWidthClass)}>
      <BlogPostArticle category="personal" slug={slug} />
    </div>
  )
}
