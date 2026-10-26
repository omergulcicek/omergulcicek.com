import type { ComponentProps } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SITE_CONTENT } from "@/constants/site-content.constants"

/** Mobile menu button, shared by the lightweight shell and the lazy drawer so both render the same markup. */
export function HeaderNavDrawerTriggerButton(props: ComponentProps<"button">) {
	return (
		<Button
			variant="ghost"
			size="sm"
			className="size-8 p-0"
			aria-label={SITE_CONTENT.mobileNavOpen}
			{...props}
		>
			<Menu className="size-4" aria-hidden />
		</Button>
	)
}
