import Link from "next/link"
import { useRouter } from "next/router"

import { cn } from "lib/utils"

export default function NavItem({ text = "", link = "/" }) {
  const { pathname } = useRouter()

  return (
    <>
      <Link
        href={link}
        className={cn(
          "text-neutral-600 font-medium leading-[64px] block transition hover:text-black dark:text-neutral-100  dark:hover:text-neutral-300",
          pathname === link && "text-black"
        )}
      >
        {text}
      </Link>
    </>
  )
}
