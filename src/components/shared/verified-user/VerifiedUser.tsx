import { USER } from "@/constants"

import { VerifiedIcon } from "@/icons"

export function VerifiedUser() {
	return (
		<div className="flex items-start gap-1">
			<h1 className="text-3xl font-semibold tracking-tighter md:text-4xl">
				{USER.displayName}
			</h1>
		</div>
	)
}
