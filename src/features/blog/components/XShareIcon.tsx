import { X } from "@/components/ui/svgs/x"
import { XDark } from "@/components/ui/svgs/xDark"

export function XShareIcon() {
	return (
		<>
			<X className="size-3.5 dark:hidden" aria-hidden />
			<XDark className="size-3.5 hidden dark:block" aria-hidden />
		</>
	)
}
