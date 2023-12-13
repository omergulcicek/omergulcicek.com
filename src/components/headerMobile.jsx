import { useState } from "react"
import Link from "next/link"
import { Drawer } from "vaul"

import { navigationMenu } from "@/libs/constants"
import Brand from "./brand"

export default function MobileHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="flex items-center bg-white h-12 w-full p-2 border-b">
        <Drawer.Root shouldScaleBackground open={open} onOpenChange={setOpen}>
          <Drawer.Trigger asChild>
            <button className="h-9 w-9 flex items-center justify-center">
              <Brand />
            </button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] h-full mt-24 max-h-[85%] fixed bottom-0 left-0 right-0">
              <div className="p-4 bg-white rounded-t-[10px] flex-1">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
                <div className="max-w-md mx-auto">
                  <Drawer.Title className="font-medium mb-4">
                    <nav>
                      <ul className="flex flex-col items-start gap-2">
                        {navigationMenu.map(({ label = "", href = "/" }) => (
                          <li key={label} onClick={() => setOpen(false)}>
                            <Link href={href}>
                              <span className="text-base leading-10 hover:text-blue-500">
                                {label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </Drawer.Title>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </header>
    </>
  )
}
