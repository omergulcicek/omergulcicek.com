import fs from "fs"
import matter from "gray-matter"

import Title from "components/title"
import ArticleList from "components/articleList"

export default function PersonalArticles({ posts }) {
  return (
    <>
      <div className="content">
        <Title>Kişisel Yazılar</Title>

        <ArticleList posts={posts} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  try {
    const files = fs.readdirSync("public/posts")

    const posts = files
      .filter((e) => e !== ".DS_Store")
      .map((fileName) => {
        const slug = fileName.replace(".md", "")
        const readFile = fs.readFileSync(
          `public/posts/${fileName}/index.md`,
          "utf-8"
        )
        const { data: frontmatter } = matter(readFile)

        return {
          slug,
          frontmatter,
        }
      })

    return {
      props: {
        posts: posts.sort((a, b) =>
          a.frontmatter.date < b.frontmatter.date ? 1 : -1
        ),
      },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {},
    }
  }
}
