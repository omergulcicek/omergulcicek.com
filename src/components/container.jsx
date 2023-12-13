import { tv } from "tailwind-variants"

const container = tv({
  base: "container mx-auto px-4 md:px-8",
  variants: {
    size: {
      base: "max-w-screen-lg",
      lg: "max-w-screen-xl",
    },
  },
  defaultVariants: {
    size: "base",
  },
})

export default function Container({ size, children }) {
  return (
    <>
      <div className={container({ size })}>{children}</div>
    </>
  )
}
