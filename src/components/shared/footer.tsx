"use client";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy, Mail, Check, Send } from "lucide-react";

import Container from "@/shared/container";
import { Button } from "@/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LinkHover as Link } from "@/ui/link";

import { cn } from "@/utils";

export default function Footer({
  className,
  ...props
}: {
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const [isCopy, setIsCopy] = useState(false);

  function changeCopyText() {
    setIsCopy(true);

    setTimeout(() => {
      setIsCopy(false);
    }, 1000);
  }

  return (
    <footer className={cn("mt-40 flex w-full py-20", className)} {...props}>
      <Container className="max-w-3xl">
        <div className="flex flex-col gap-1 text-base leading-relaxed text-black/40">
          <p>
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </Link>
            {", "}
            <Link
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TypeScript
            </Link>
            {", "}
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </Link>
            {" ve "}
            <Link
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              shadcn/ui
            </Link>{" "}
            ile geliştirildi.
          </p>
          <p className="flex items-center gap-2">
            Bir selam söyleyin{" "}
            <Popover>
              <PopoverTrigger>
                <div className="inline-flex cursor-pointer items-center gap-1 transition hover:text-black">
                  <Mail size={14} />
                  <span>iletisim@omergulcicek.com</span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="grid grid-cols-2 gap-2">
                <Link
                  href="mailto:iletisim@omergulcicek.com"
                  className="col-span-1"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    <Send size={14} />
                    <span className="ml-2 text-xs">Mail at</span>
                  </Button>
                </Link>

                <CopyToClipboard text={"iletisim@omergulcicek.com"}>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => changeCopyText()}
                    className="col-span-1 w-full"
                  >
                    {isCopy ? (
                      <>
                        <Check size={14} />
                        <span className="ml-2 text-xs">Kopyalandı!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span className="ml-2 text-xs">Kopyala</span>
                      </>
                    )}
                  </Button>
                </CopyToClipboard>
              </PopoverContent>
            </Popover>
          </p>
          <p>
            <Link
              href="https://github.com/omergulcicek"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beni GitHub'tan takip et
            </Link>
          </p>
          <p>© 2024 | Ömer Gülçiçek</p>
        </div>
      </Container>
    </footer>
  );
}
