// Code from https://usehooks.com/useMedia

import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"
import useMedia from "./useMedia"

function usePrefersDarkMode(enabledState) {
  const mode = !enabledState ? "dark" : "light"
  return useMedia([`(prefers-color-scheme: ${mode}`], [true], false)
}

function useDarkMode() {
  const [enabledState, setEnabledState] = useLocalStorage("dark-mode-enabled")
  const prefersDarkMode = usePrefersDarkMode(enabledState)

  const enabled =
    typeof enabledState !== "undefined" ? enabledState : prefersDarkMode

  useEffect(() => {
    const element = document.getElementsByTagName("html")[0]
    if (enabled) {
      element.setAttribute("data-theme", "light")
    } else {
      element.removeAttribute("data-theme")
    }
  }, [enabled])

  return [enabled, setEnabledState]
}

export default useDarkMode
