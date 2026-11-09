import type { SVGProps } from "react"

// The Logitech G mark. Not in svgl; drawn in currentColor so it reads on both themes, and the
// viewBox is cropped to the mark so it sits at the same size as the other 20px logos.
const LogitechG = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 211 221" fillRule="evenodd" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="currentColor"
      d="m164.9 189v-53.3h-53.3v-45.4h98.8v98.7zm-54.1 31.1c-61.1 0-110.8-49.3-110.8-110 0-60.8 49.7-110.1 110.8-110.1v45.7c-36 0-64.6 28.9-64.6 64.4s28.5 64.4 64.6 64.4z"
    />
  </svg>
)

export { LogitechG }
