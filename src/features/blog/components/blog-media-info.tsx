import { Clapperboard, Heart, Tv } from "lucide-react"

import { BlogInfoRow } from "@/features/blog/components/blog-info-row"
import { BlogRating } from "@/features/blog/components/blog-rating"
import {
	BLOG_MEDIA_INFO_LABELS,
	getBlogMediaInfoKicker
} from "@/features/blog/constants/blog-media-info.constants"
import type {
	BlogMediaInfoProps,
	BlogMediaType
} from "@/features/blog/types/media-info.types"
import { withOutboundUtm } from "@/lib/outbound-url"
import { cn } from "@/lib/utils"

function hasDisplayValue(value: string | number | undefined) {
	return value !== undefined && value !== ""
}

function getMediaInfoIcon(type: BlogMediaType | undefined) {
	if (type === "Dizi") {
		return Tv
	}

	return Clapperboard
}

export function BlogMediaInfo({
	title,
	link,
	type = "Film",
	imdbRating,
	year,
	director,
	directorLink,
	myRating,
	myScore,
	isFavorite
}: BlogMediaInfoProps) {
	const rating = myScore ?? myRating
	const kicker = getBlogMediaInfoKicker(type)
	const Icon = getMediaInfoIcon(type)

	return (
		<aside className="blog-media-info" aria-label={kicker}>
			<header className="blog-media-info__header">
				<div className="blog-media-info__heading">
					<span className="blog-media-info__icon" aria-hidden="true">
						<Icon className="size-4" />
					</span>
					<div className="min-w-0">
						<p className="blog-media-info__kicker">{kicker}</p>
						<a
							className="blog-media-info__title"
							href={withOutboundUtm(link)}
							target="_blank"
							rel="noopener noreferrer"
						>
							{title}
						</a>
					</div>
				</div>
			</header>

			<dl className="blog-media-info__details">
				{hasDisplayValue(year) ? (
					<BlogInfoRow
						label={BLOG_MEDIA_INFO_LABELS.year}
						value={year as number}
					/>
				) : null}
				{hasDisplayValue(director) ? (
					<BlogInfoRow
						label={BLOG_MEDIA_INFO_LABELS.director}
						value={director as string}
						href={directorLink}
					/>
				) : null}
				{hasDisplayValue(imdbRating) ? (
					<BlogInfoRow
						label={BLOG_MEDIA_INFO_LABELS.imdb}
						value={imdbRating as string}
					/>
				) : null}
				{typeof rating === "number" ? (
					<div className="blog-info-row">
						<dt className="blog-info-row__label">
							{BLOG_MEDIA_INFO_LABELS.rating}
						</dt>
						<dd className="blog-info-row__value">
							<BlogRating value={rating} />
						</dd>
					</div>
				) : null}
			</dl>

			{isFavorite ? (
				<div className="blog-media-info__favorite">
					<Heart
						className={cn("size-3.5 fill-rose-500 text-rose-500")}
						aria-hidden="true"
					/>
					<span>{BLOG_MEDIA_INFO_LABELS.favorite}</span>
				</div>
			) : null}
		</aside>
	)
}

export const MediaInfo = BlogMediaInfo
