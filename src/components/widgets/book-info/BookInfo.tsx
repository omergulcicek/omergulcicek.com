"use client"

import { Check } from "lucide-react"

import type { BookInfoPropsType } from "@/types/book-info.type"

import { InfoRow } from "@/components/widgets/info-row"
import { Rating } from "@/components/widgets/rating"

export function BookInfo({
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
	isFavorite
}: BookInfoPropsType) {
	return (
		<div className="my-4 overflow-hidden rounded-md border border-dashed">
			<div className="flex flex-col gap-y-2 p-6 text-sm">
				<InfoRow label="Kitap Adı" value={title || "-"} link={bookLink} />
				<InfoRow label="Yazar" value={author} link={authorLink} />
				<InfoRow label="Çevirmen" value={translator} link={translatorLink} />
				<InfoRow label="Yayıncı" value={publisher} link={publisherLink} />
				<InfoRow label="Sayfa Sayısı" value={pages} />
				<InfoRow label="Yayın Tarihi" value={year} />
				{typeof myRating === "number" && (
					<div className="flex items-center gap-x-2">
						<span className="text-muted-foreground basis-24 md:basis-48">
							Puanım
						</span>
						<Rating value={myRating} max={5} stars={5} />
					</div>
				)}
				{isFavorite && (
					<div className="flex items-center gap-x-2">
						<span className="text-muted-foreground basis-24 md:basis-48">
							Favori
						</span>
						<Check className="text-green-500 size-5" />
					</div>
				)}
			</div>
		</div>
	)
}
