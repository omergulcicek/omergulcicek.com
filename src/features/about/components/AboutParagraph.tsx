import { Fragment } from "react"
import { Link } from "@tanstack/react-router"

import type { SITE_COPY } from "@/constants/site-copy.constants"

import { getProseLinkClassName } from "@/components/shared/prose-link.styles"
import { proseParagraphClass } from "@/components/shared/prose.styles"
import { ProseRouterLink } from "@/components/shared/ProseRouterLink"
import { VirastackLink } from "@/components/shared/VirastackLink"

type AboutParagraphSegment =
	(typeof SITE_COPY)["about"]["paragraphs"][number][number]

type AboutLinkSegment = Extract<AboutParagraphSegment, { link: string }>

type AboutParagraphProps = {
	segments: readonly AboutParagraphSegment[]
}

function AboutLink({ segment }: { segment: AboutLinkSegment }) {
	switch (segment.link) {
		case "virastack":
			return <VirastackLink>{segment.text}</VirastackLink>
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

/** Renders an About paragraph whose copy is split into text and named links. */
export function AboutParagraph({ segments }: AboutParagraphProps) {
	return (
		<p className={proseParagraphClass}>
			{segments.map((segment) =>
				typeof segment === "string" ? (
					<Fragment key={segment}>{segment}</Fragment>
				) : (
					<AboutLink key={segment.link} segment={segment} />
				)
			)}
		</p>
	)
}
