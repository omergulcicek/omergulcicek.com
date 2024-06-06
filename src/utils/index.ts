import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export function cn(...args: (string | undefined | false | null)[]) {
  return clsx(twMerge(...args));
}
