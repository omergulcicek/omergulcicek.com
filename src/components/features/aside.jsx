"use client"

import { useRouter, usePathname } from "next/navigation"
import { useMediaQuery } from "@uidotdev/usehooks"

import { Navigation } from "@/features/navigation"
import { Brand } from "@/widgets/brand"
import { navigationData } from "@/data/navigationData"
import { keyCodePathnameMapping } from "@/utils/constants"

const Aside = () => {
  const router = useRouter()
  const pathname = usePathname()
  const isDesktop = useMediaQuery("only screen and (min-width : 1228px)")

  if (!isDesktop) return null

  return (
    <>
      <aside className="flex h-full max-h-dvh min-h-dvh w-64 flex-col gap-4 overflow-auto border-r bg-zinc-50 p-3">
        <Brand />
        <Navigation
          data={navigationData}
          onKeyPress={(event) => {
            const key = event.code
            const targetPathname = keyCodePathnameMapping[key]
            if (targetPathname && targetPathname !== pathname)
              router.push(targetPathname)
          }}
        />
      </aside>
    </>
  )
}

export { Aside }
