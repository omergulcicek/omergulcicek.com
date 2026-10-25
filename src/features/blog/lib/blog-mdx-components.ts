import { BookInfo } from "@/features/blog/components/BlogBookInfo"
import { MdxTable } from "@/features/blog/components/BlogMdxTable"
import { MediaInfo } from "@/features/blog/components/BlogMediaInfo"
import { BlogNotice } from "@/features/blog/components/BlogNotice"
import { ChartAreaLinear } from "@/features/blog/components/ChartAreaLinear"
import { ClipPath } from "@/features/blog/components/css-demos/ClipPath"
import { CornerShape } from "@/features/blog/components/css-demos/CornerShape"
import { PickerIcon } from "@/features/blog/components/css-demos/PickerIcon"
import { SiblingIndex } from "@/features/blog/components/css-demos/SiblingIndex"
import { Stretch } from "@/features/blog/components/css-demos/Stretch"
import { TextBox } from "@/features/blog/components/css-demos/TextBox"
import { ImagesCarousel } from "@/features/blog/components/ImagesCarousel"
import { LinksReview } from "@/features/blog/components/LinksReview"
import { ViraMaskDemo } from "@/features/blog/components/ViraMaskDemo"
import { ViraPasswordDemo } from "@/features/blog/components/ViraPasswordDemo"
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
	TextBox,
	ViraMaskDemo,
	ViraPasswordDemo
} as const

export { blogMdxComponentNames }
