import Image from "next/image"

import { USER } from "@/constants/user"

import { VerifiedIcon } from "@/icons"

export function Hero() {
	return (
		<section>
			<div className="flex items-end gap-4">
				<figure className="size-40 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none">
					<Image
						src={USER.avatar}
						alt={USER.displayName}
						width={160}
						height={160}
						quality={100}
						priority
					/>
				</figure>

				<div className="flex flex-col gap-0.5">
					<div className="flex items-center gap-1">
						<h1 className="text-4xl font-semibold tracking-tight">
							{USER.displayName}
						</h1>
						<VerifiedIcon className="size-4 text-blue-500" />
					</div>

					<p className="text-lg text-muted-foreground select-none">
						{USER.jobTitle}
					</p>
				</div>
			</div>
		</section>
	)
}
