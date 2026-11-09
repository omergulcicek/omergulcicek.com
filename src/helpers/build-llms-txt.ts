type LlmsLink = { title: string; url: string; description: string }

type LlmsPost = LlmsLink & { date: string | null; locale: string; tags: string[] }

type LlmsTxtInput = {
  name: string
  role: string
  summary: string
  contact: string[]
  pages: LlmsLink[]
  posts: LlmsPost[]
  notes: LlmsPost[]
  projects: LlmsLink[]
  links: LlmsLink[]
}

const day = (iso: string | null) => (iso ? iso.slice(0, 10) : "")

function postLine(post: LlmsPost) {
  const details = [day(post.date), post.locale === "tr" ? "" : post.locale].filter(Boolean)
  return `- [${post.title}](${post.url}): ${post.description}${details.length > 0 ? ` (${details.join(", ")})` : ""}`
}

const linkLine = (link: LlmsLink) => `- [${link.title}](${link.url}): ${link.description}`

/**
 * /llms.txt in the llmstxt.org shape: who the author is, the main pages, every post and the
 * projects. The site's own copy stays Turkish; only the notes for agents are in English.
 */
export function buildLlmsTxt(input: LlmsTxtInput) {
  const sections = [
    `# ${input.name} · ${input.role}`,
    `> ${input.summary}`,
    [
      "- Language: Turkish (tr), with some posts in English; English pages live under /en.",
      ...input.contact.map((line) => `- ${line}`)
    ].join("\n"),
    ["## Pages", "", ...input.pages.map(linkLine)].join("\n"),
    ["## Blog (newest first)", "", ...input.posts.map(postLine)].join("\n"),
    ["## Projects", "", ...input.projects.map(linkLine)].join("\n"),
    ["## Optional", "", ...input.notes.map(postLine), "", ...input.links.map(linkLine)].join("\n")
  ]

  return `${sections.join("\n\n")}\n`
}

type FullTextPost = {
  title: string
  url: string
  date: string | null
  locale: string
  tags: string[]
  body: string
}

/** /llms-full.txt: every technical post's body as Markdown in one file, newest first. */
export function buildLlmsFullTxt(
  header: { title: string; summary: string },
  posts: FullTextPost[]
) {
  const intro = [
    `# ${header.title}`,
    `> ${header.summary}`,
    `${posts.length} posts, newest first. Each starts with its URL, date, language and tags, then the body as Markdown.`
  ].join("\n\n")

  const bodies = posts.map((post) =>
    [
      `# ${post.title}`,
      [
        `URL: ${post.url}`,
        `Published: ${day(post.date)}`,
        `Language: ${post.locale}`,
        `Tags: ${post.tags.join(", ")}`
      ].join("\n"),
      post.body
    ].join("\n\n")
  )

  return `${[intro, ...bodies].join("\n\n---\n\n")}\n`
}
