"use client"

import type { MediaInfoPropsType } from "@/types/media-info.type"

import { InfoRow, Rating } from "@/components/widgets"

export function MediaInfo({
	title,
	link,
	type,
	imdbRating,
	year,
	director,
	directorLink,
	myRating
}: MediaInfoPropsType) {
	return (
		<div className="my-4 overflow-hidden rounded-md border border-dashed">
			<div className="flex flex-col gap-y-2 p-6 text-sm">
				<InfoRow label="İsim" value={title} link={link} />
				<InfoRow label="Tür" value={type} />
				<InfoRow label="Yıl" value={year} />
				<InfoRow label="Yönetmen" value={director} link={directorLink} />
				<InfoRow label="IMDB Puanı" value={imdbRating} />
				{typeof myRating === "number" ? (
					<div className="flex items-center gap-x-2">
						<span className="text-muted-foreground basis-24 md:basis-48">
							Puanım
						</span>
						<Rating value={myRating} max={5} stars={5} />
					</div>
				) : null}
			</div>
		</div>
	)
}
