import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...args: (string | undefined | false | null)[]) {
	return clsx(twMerge(...args))
}
