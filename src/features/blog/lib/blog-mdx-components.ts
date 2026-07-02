import { BlogNotice } from "@/features/blog/components/blog-notice"
import { BookInfo } from "@/features/blog/components/blog-book-info"
import { ChartAreaLinear } from "@/features/blog/components/blog-chart-area-linear"
import {
	ClipPath,
	CornerShape,
	PickerIcon,
	SiblingIndex,
	Stretch,
	TextBox
} from "@/features/blog/components/blog-css-interactive"
import { ImagesCarousel } from "@/features/blog/components/blog-images-carousel"
import { MdxTable } from "@/features/blog/components/blog-mdx-table"
import { LinksReview } from "@/features/blog/components/blog-links-review"
import { MediaInfo } from "@/features/blog/components/blog-media-info"
import { blogMdxComponentNames } from "@/features/blog/constants/blog-mdx-component-names.constants"

export const blogMdxComponents = {
	BlogNotice,
	BookInfo,
	ChartAreaLinear,
	ClipPath,
	CornerShape,
	ImagesCarousel,
	LinksReview,
	MdxTable,
	MediaInfo,
	PickerIcon,
	SiblingIndex,
	Stretch,
	TextBox
} as const

export { blogMdxComponentNames }
