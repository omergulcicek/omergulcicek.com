import type { ComponentProps } from "react"

import { cn } from "cn"

import { textLinkClass } from "@/components/shared/surface.styles"

/** An inline text link. Links to other sites open in a new tab. */
export function ProseLink({ className, href, ...props }: ComponentProps<"a">) {
  const isExternal = href?.startsWith("http") ?? false

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={cn(textLinkClass, "font-medium text-foreground", className)}
      {...props}
    />
  )
}
