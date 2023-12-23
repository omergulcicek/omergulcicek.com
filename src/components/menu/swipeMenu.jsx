import { useState, useEffect } from "react"
import { Drawer } from "vaul"

import AccordionMenu from "components/menu/accordionMenu"
import ThemeSwitch from "components/themeSwitch"

export default function SwipeMenu() {
  const [isClient, setIsClient] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <Drawer.Root open={open} onOpenChange={setOpen} shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button>Mobil menüyü aç</button>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[80%] mt-24 fixed bottom-0 left-0 right-0 ">
          <div className="p-4 bg-white dark:bg-neutral-900 rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-500 mb-8" />
            <div className="max-w-md mx-auto h-full">
              <Drawer.Title className="flex items-center justify-between font-medium mb-10">
                <span className="dark:text-neutral-100 text-black">
                  omergulcicek.com
                </span>

                <ThemeSwitch />
              </Drawer.Title>
              <nav className="h-full overflow-auto">
                <AccordionMenu
                  className="flex-col items-start"
                  onClick={() => setOpen(false)}
                />
              </nav>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
