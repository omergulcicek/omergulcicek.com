import { USER } from "@/constants/user"

import { VerifiedIcon } from "@/components/icons/VerifiedIcon"

export function VerifiedUser() {
	return (
		<div className="flex items-center gap-1">
			<h1 className="text-4xl font-semibold tracking-tight">
				{USER.displayName}
			</h1>
			<VerifiedIcon className="size-4 text-blue-500" />
		</div>
	)
}
