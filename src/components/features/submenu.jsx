import { useMediaQuery } from "@uidotdev/usehooks"

import { Navigation } from "@/features/navigation"

import { useSubmenuData } from "@/hooks/useSubmenuData"

const Submenu = () => {
  const isDesktop = useMediaQuery("only screen and (min-width : 1228px)")
  const data = useSubmenuData()

  if (!isDesktop) return null

  return (
    <>
      <aside className="flex h-full max-h-dvh min-h-dvh w-64 flex-col gap-4 overflow-auto border-r bg-zinc-50 p-3">
        <Navigation data={data} />
      </aside>
    </>
  )
}

export { Submenu }
