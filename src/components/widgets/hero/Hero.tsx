import Image from "next/image"

import { USER } from "@/constants/user"

import { Socials, VerifiedUser } from "@/widgets"

export function Hero() {
	return (
		<section>
			<div className="flex items-end gap-6 mt-32">
				<figure className="size-40 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none relative">
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
					<VerifiedUser />

					<p className="text-lg text-muted-foreground">{USER.jobTitle}</p>

					<Socials />
				</div>
			</div>
		</section>
	)
}
