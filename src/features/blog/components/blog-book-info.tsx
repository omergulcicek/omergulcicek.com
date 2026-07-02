import { BookOpen, Heart } from "lucide-react"

import { BlogInfoRow } from "@/features/blog/components/blog-info-row"
import { BlogRating } from "@/features/blog/components/blog-rating"
import { BLOG_BOOK_INFO_LABELS } from "@/features/blog/constants/blog-book-info.constants"
import type { BlogBookInfoProps } from "@/features/blog/types/book-info.types"
import { withOutboundUtm } from "@/lib/outbound-url"
import { cn } from "@/lib/utils"

function hasDisplayValue(value: string | number | undefined) {
	return value !== undefined && value !== ""
}

export function BlogBookInfo({
	title,
	bookLink,
	author,
	authorLink,
	translator,
	translatorLink,
	pages,
	publisher,
	publisherLink,
	year,
	myRating,
	myScore,
	isFavorite
}: BlogBookInfoProps) {
	const rating = myScore ?? myRating
	const heading = title?.trim() || BLOG_BOOK_INFO_LABELS.kicker

	return (
		<aside className="blog-book-info" aria-label={BLOG_BOOK_INFO_LABELS.kicker}>
			<header className="blog-book-info__header">
				<div className="blog-book-info__heading">
					<span className="blog-book-info__icon" aria-hidden="true">
						<BookOpen className="size-4" />
					</span>
					<div className="min-w-0">
						<p className="blog-book-info__kicker">
							{BLOG_BOOK_INFO_LABELS.kicker}
						</p>
						{bookLink ? (
							<a
								className="blog-book-info__title"
								href={withOutboundUtm(bookLink)}
								target="_blank"
								rel="noopener noreferrer"
							>
								{heading}
							</a>
						) : (
							<p className="blog-book-info__title">{heading}</p>
						)}
					</div>
				</div>
			</header>

			<dl className="blog-book-info__details">
				<BlogInfoRow
					label={BLOG_BOOK_INFO_LABELS.author}
					value={author}
					href={authorLink}
				/>
				{hasDisplayValue(translator) ? (
					<BlogInfoRow
						label={BLOG_BOOK_INFO_LABELS.translator}
						value={translator as string}
						href={translatorLink}
					/>
				) : null}
				{hasDisplayValue(publisher) ? (
					<BlogInfoRow
						label={BLOG_BOOK_INFO_LABELS.publisher}
						value={publisher as string}
						href={publisherLink}
					/>
				) : null}
				{hasDisplayValue(pages) ? (
					<BlogInfoRow
						label={BLOG_BOOK_INFO_LABELS.pages}
						value={pages as number}
					/>
				) : null}
				{hasDisplayValue(year) ? (
					<BlogInfoRow
						label={BLOG_BOOK_INFO_LABELS.year}
						value={year as number}
					/>
				) : null}
				{typeof rating === "number" ? (
					<div className="blog-info-row">
						<dt className="blog-info-row__label">
							{BLOG_BOOK_INFO_LABELS.rating}
						</dt>
						<dd className="blog-info-row__value">
							<BlogRating value={rating} />
						</dd>
					</div>
				) : null}
			</dl>

			{isFavorite ? (
				<div className="blog-book-info__favorite">
					<Heart
						className={cn("size-3.5 fill-rose-500 text-rose-500")}
						aria-hidden="true"
					/>
					<span>{BLOG_BOOK_INFO_LABELS.favorite}</span>
				</div>
			) : null}
		</aside>
	)
}

export const BookInfo = BlogBookInfo
