import type { ComponentProps } from "react"

import { CssDemo } from "@/features/blog/components/mdx/islands/CssDemo"
import type { CssDemoName } from "@/features/blog/components/mdx/islands/CssDemo"
import { MaskDemo } from "@/features/blog/components/mdx/islands/MaskDemo"
import { PasswordDemo } from "@/features/blog/components/mdx/islands/PasswordDemo"
import { MdxAreaChart } from "@/features/blog/components/mdx/MdxAreaChart"
import { MdxBookInfo } from "@/features/blog/components/mdx/MdxBookInfo"
import { MdxImageStrip } from "@/features/blog/components/mdx/MdxImageStrip"
import { MdxIsland } from "@/features/blog/components/mdx/MdxIsland"
import { MdxLinksReview } from "@/features/blog/components/mdx/MdxLinksReview"
import { MdxMediaInfo } from "@/features/blog/components/mdx/MdxMediaInfo"
import { MdxNotice } from "@/features/blog/components/mdx/MdxNotice"
import { MdxTable } from "@/features/blog/components/mdx/MdxTable"
import * as m from "@/paraglide/messages.js"
import type { Locale } from "@/paraglide/runtime.js"

type GetImageSize = (src: string) => { width: number; height: number } | null

type WithoutLocale<T> = Omit<T, "locale">

function cssDemo(demo: CssDemoName, locale: Locale) {
  return function CssDemoIsland() {
    return (
      <MdxIsland name="css-demo" props={{ demo, locale }}>
        <CssDemo demo={demo} locale={locale} />
      </MdxIsland>
    )
  }
}

/**
 * The components posts use by name in their MDX, bound to the post's language. The names
 * are the ones already in the content; the components are this site's own.
 */
export function getMdxComponents(locale: Locale, getImageSize: GetImageSize) {
  return {
    BlogNotice: MdxNotice,
    BookInfo: (props: WithoutLocale<ComponentProps<typeof MdxBookInfo>>) => (
      <MdxBookInfo {...props} locale={locale} />
    ),
    MediaInfo: (props: WithoutLocale<ComponentProps<typeof MdxMediaInfo>>) => (
      <MdxMediaInfo {...props} locale={locale} />
    ),
    MdxTable,
    LinksReview: MdxLinksReview,
    ChartAreaLinear: (props: WithoutLocale<ComponentProps<typeof MdxAreaChart>>) => (
      <MdxAreaChart {...props} locale={locale} />
    ),
    ImagesCarousel: (props: Pick<ComponentProps<typeof MdxImageStrip>, "images">) => (
      <MdxImageStrip
        images={props.images}
        label={m.mdx_carousel_label({}, { locale })}
        getSize={getImageSize}
      />
    ),
    ClipPath: cssDemo("clip-path", locale),
    CornerShape: cssDemo("corner-shape", locale),
    PickerIcon: cssDemo("picker-icon", locale),
    SiblingIndex: cssDemo("sibling-index", locale),
    Stretch: cssDemo("stretch", locale),
    TextBox: cssDemo("text-box", locale),
    ViraMaskDemo: () => (
      <MdxIsland name="mask-demo" props={{ locale }}>
        <MaskDemo locale={locale} />
      </MdxIsland>
    ),
    ViraPasswordDemo: () => (
      <MdxIsland name="password-demo" props={{ locale }}>
        <PasswordDemo locale={locale} />
      </MdxIsland>
    )
  }
}
