import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/ui/button"

import { CopyToClipboard } from "react-copy-to-clipboard"
import { Copy, ExternalLink, SquarePen } from "lucide-react"

const ContactModal = ({ icon, text, children }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="group flex h-9 w-full select-none items-center justify-between rounded-lg border border-transparent p-2 text-sm transition duration-75 active:scale-95">
          {icon && text && (
            <span className="flex gap-2">
              {icon}
              <span className="group-hover:underline">{text}</span>
            </span>
          )}
          {children}
        </DialogTrigger>
        <DialogContent className="px-10 py-9">
          <DialogHeader>
            <DialogTitle className="text-2xl">{text}</DialogTitle>
            <>
              <ul>
                <li className="py-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <strong className="font-medium text-black text-sm">
                      Eposta
                    </strong>
                    <span className="text-sm text-gray-400">
                      iletisim@omergulcicek.com
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Link
                      href="mailto:iletisim@omergulcicek.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <SquarePen size={16} />
                        <span className="ml-2 text-xs">Mail At</span>
                      </Button>
                    </Link>

                    <CopyToClipboard text={"iletisim@omergulcicek.com"}>
                      <Button variant="outline" size="sm">
                        <Copy size={16} />
                        <span className="ml-2 text-xs">Kopyala</span>
                      </Button>
                    </CopyToClipboard>
                  </div>
                </li>

                <li className="py-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <strong className="font-medium text-black text-sm">
                      Görüşme ayarla
                    </strong>
                    <span className="text-sm text-gray-400">
                      Tanışma yada tavsiye için canlı sohbet
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Link
                      href="https://superpeer.com/omergulcicek"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Button variant="outline" size="sm">
                        <ExternalLink size={16} />
                        <span className="ml-2 text-xs">Randevu al</span>
                      </Button>
                    </Link>
                  </div>
                </li>

                <li className="py-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <strong className="font-medium text-black text-sm">
                      Sosyal medya
                    </strong>
                    <span className="text-sm text-gray-400">...</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Link
                      href="https://superpeer.com/omergulcicek"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      X
                    </Link>
                  </div>
                </li>
              </ul>
            </>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export { ContactModal }
