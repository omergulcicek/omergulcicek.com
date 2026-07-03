import { SITE } from "@/constants/site.constants"

type BlogOgImageContentProps = {
	title: string
	description: string
}

const OG_WIDTH = 1200
const OG_HEIGHT = 630

function truncateText(value: string, maxLength: number) {
	if (value.length <= maxLength) {
		return value
	}

	return `${value.slice(0, maxLength - 1).trimEnd()}…`
}

export function createBlogOgImageElement({
	title,
	description
}: BlogOgImageContentProps) {
	const displayTitle = truncateText(title, 120)
	const displayDescription = truncateText(description, 160)

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				width: "100%",
				height: "100%",
				padding: "72px 80px",
				background: "#ffffff",
				color: "#0a0a0a",
				fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "12px",
					fontSize: "28px",
					fontWeight: 600,
					color: "#3b82f6"
				}}
			>
				<div
					style={{
						width: "12px",
						height: "12px",
						borderRadius: "9999px",
						background: "#3b82f6"
					}}
				/>
				<span>{SITE.name}</span>
			</div>
			<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
				<div
					style={{
						fontSize: "56px",
						fontWeight: 600,
						lineHeight: 1.15,
						letterSpacing: "-0.02em",
						color: "#0a0a0a"
					}}
				>
					{displayTitle}
				</div>
				<div
					style={{
						fontSize: "28px",
						lineHeight: 1.45,
						color: "#737373",
						maxWidth: "920px"
					}}
				>
					{displayDescription}
				</div>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					fontSize: "24px",
					color: "#737373"
				}}
			>
				<span>{SITE.jobTitle}</span>
				<span>omergulcicek.com/blog</span>
			</div>
		</div>
	)
}

export const BLOG_OG_IMAGE_SIZE = {
	width: OG_WIDTH,
	height: OG_HEIGHT
} as const
