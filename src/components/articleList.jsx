import Link from "next/link"
import { formatDate } from "lib/utils"

export default function ArticleList({ posts }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-8">
        {posts.map(({ slug, frontmatter: { title, date } }) => (
          <div
            key={slug}
            className="text-sm lg:text-lg flex items-center gap-x-8 py-1.5 px-4 transition-colors group hover:text-blue-300 hover:bg-blue-300/10 rounded-md"
          >
            <Link href={`/blog/${slug}`} legacyBehaviour>
              <span className=" text-neutral-400">{formatDate(date)}</span>
              <h1>{title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
