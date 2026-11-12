import { createElement } from "react"
import type { ComponentProps } from "react"

import { evaluate } from "@mdx-js/mdx"
import rehypeShiki from "@shikijs/rehype"
import { renderToStaticMarkup } from "react-dom/server"
import * as runtime from "react/jsx-runtime"
import remarkGfm from "remark-gfm"
import type { ShikiTransformer } from "shiki"

import { BlogCodeBlock } from "@/features/blog/components/BlogCodeBlock"
import { getMdxComponents } from "@/features/blog/components/mdx/mdx-components"
import imageSizes from "@/features/blog/constants/blog-image-sizes.json"
import { localizePostLink } from "@/features/blog/helpers/localize-post-link"
import { rehypeFigureCaptions } from "@/features/blog/helpers/rehype-figure-captions"
import { rehypeHeadingIds } from "@/features/blog/helpers/rehype-heading-ids"
import type { PostHeading } from "@/features/blog/helpers/rehype-heading-ids"
import { rehypeStripFootnoteBackrefs } from "@/features/blog/helpers/rehype-strip-footnote-backrefs"
import * as m from "@/paraglide/messages.js"
import type { Locale } from "@/paraglide/runtime.js"

// Built by `pnpm blog:image-sizes`; a Map so a src that is not a key reads as undefined.
const imageSizeManifest = new Map(Object.entries(imageSizes))

/** The size of a post image under public/blog, from the generated manifest. */
function getPublicImageSize(src: string) {
  const [width, height] = imageSizeManifest.get(decodeURI(src)) ?? []
  return width && height ? { width, height } : null
}

/** Hands the fence's language, `title="…"` and line count to BlogCodeBlock as data attributes. */
const codeBlockMeta: ShikiTransformer = {
  name: "code-block-meta",
  pre(node) {
    const title = this.options.meta?.__raw?.match(/title="([^"]+)"/)?.[1]
    node.properties["data-language"] = this.options.lang
    // Counted here on the server, so a long block renders collapsed from the first paint.
    node.properties["data-lines"] = this.lines.length
    if (title) node.properties["data-title"] = title
  }
}

/**
 * MDX to HTML on the server. Shiki colors code with both themes as CSS variables
 * (`defaultColor: false`), and the stylesheet picks one by the `.dark` class.
 * Server only: content comes from our own database, never from a visitor.
 * Code block labels follow the post's language, like the article's `lang`. Returns the HTML
 * and the h2/h3 outline, which the post page shows as its table of contents.
 */
export async function renderPostContent(content: string, locale: Locale) {
  const headings: PostHeading[] = []
  const { default: Content } = await evaluate(content, {
    ...runtime,
    remarkPlugins: [remarkGfm],
    // GFM footnotes close the post as its sources list, so the label is a visible h2 in
    // the post's language instead of the default hidden English "Footnotes".
    remarkRehypeOptions: {
      footnoteLabel: m.blog_footnotes_label({}, { locale }),
      footnoteLabelTagName: "h2",
      footnoteLabelProperties: {}
    },
    rehypePlugins: [
      [
        rehypeShiki,
        {
          themes: { light: "github-light", dark: "one-dark-pro" },
          defaultColor: false,
          defaultLanguage: "text",
          fallbackLanguage: "text",
          transformers: [codeBlockMeta]
        }
      ],
      rehypeHeadingIds(headings),
      rehypeStripFootnoteBackrefs,
      rehypeFigureCaptions(getPublicImageSize)
    ]
  })

  const labels = {
    copy: m.code_copy({}, { locale }),
    copied: m.code_copied({}, { locale }),
    collapse: m.code_collapse({}, { locale }),
    expand: (lines: number) => m.code_expand({ lines }, { locale })
  }
  const components = {
    ...getMdxComponents(locale, getPublicImageSize),
    pre: (props: ComponentProps<"pre">) => createElement(BlogCodeBlock, { ...props, labels }),
    a: ({ href, ...props }: ComponentProps<"a">) =>
      createElement("a", { ...props, href: localizePostLink(href, locale) })
  }

  // `evaluate` above ran the rehype plugins, so `headings` is already filled here.
  const html = renderToStaticMarkup(createElement(Content, { components }))

  return { html, headings }
}
