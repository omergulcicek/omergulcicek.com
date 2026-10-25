import { Fragment } from "react"
import { Link } from "@tanstack/react-router"

import { buildCompanyLogoThumbPath } from "@/lib/media/build-static-thumb-image"

import { OptimizedImage } from "@/components/shared/OptimizedImage"
import { getProseLinkClassName } from "@/components/shared/prose-link.styles"
import { proseParagraphClass } from "@/components/shared/prose.styles"
import { ProseEmphasis } from "@/components/shared/ProseEmphasis"
import { ProseRouterLink } from "@/components/shared/ProseRouterLink"
import { VirastackLink } from "@/components/shared/VirastackLink"
import {
	getAboutSegmentText,
	type AboutParagraphSegment
} from "@/features/about/helpers/about-paragraph.helpers"

type AboutLinkSegment = Extract<AboutParagraphSegment, { link: string }>

type AboutParagraphProps = {
	segments: readonly AboutParagraphSegment[]
}

function AboutLink({ segment }: { segment: AboutLinkSegment }) {
	switch (segment.link) {
		case "virastack":
			return <VirastackLink>{segment.text}</VirastackLink>
		case "company":
			// Same icon-then-underline shape as VirastackLink, routed to the company's row.
			return (
				<Link
					to="/experiences"
					hash={segment.experienceId}
					className="focus-link text-foreground inline-flex items-center gap-1.5"
				>
					<OptimizedImage
						src={buildCompanyLogoThumbPath(segment.logo)}
						alt=""
						width={14}
						height={14}
						sizes="14px"
						className="image-outline size-3.5 shrink-0 rounded-sm object-cover"
					/>
					<span className="underline">{segment.text}</span>
				</Link>
			)
		case "blog":
			return <ProseRouterLink to="/blog">{segment.text}</ProseRouterLink>
		case "library":
			// Typed search needs the route-aware Link; ProseRouterLink's props drop it.
			return (
				<Link
					to="/bookmarks"
					search={{ category: "library" }}
					className={getProseLinkClassName("default")}
				>
					{segment.text}
				</Link>
			)
		case "experiences":
			return <ProseRouterLink to="/experiences">{segment.text}</ProseRouterLink>
		case "setup":
			return <ProseRouterLink to="/setup">{segment.text}</ProseRouterLink>
	}
}

function AboutSegment({ segment }: { segment: AboutParagraphSegment }) {
	if (typeof segment === "string") {
		return segment
	}

	if ("emphasis" in segment) {
		return <ProseEmphasis>{segment.emphasis}</ProseEmphasis>
	}

	return <AboutLink segment={segment} />
}

/** Renders an About paragraph whose copy is split into text, emphasis and named links. */
export function AboutParagraph({ segments }: AboutParagraphProps) {
	return (
		<p className={proseParagraphClass}>
			{segments.map((segment) => (
				<Fragment key={getAboutSegmentText(segment)}>
					<AboutSegment segment={segment} />
				</Fragment>
			))}
		</p>
	)
}
