import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (theme === "light") {
    return (
      <>
        <button
          onClick={() => setTheme("dark")}
          className="transition opacity-70 hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
            className="fill-blue-500"
          >
            <path
              d="M210.69,158.18A88,88,0,1,1,97.82,45.31,96.08,96.08,0,0,0,192,160,96.78,96.78,0,0,0,210.69,158.18Z"
              className="opacity-20"
            ></path>
            <path d="M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z"></path>
          </svg>
        </button>
      </>
    )
  }

  return (
    <>
      <button
        onClick={() => setTheme("light")}
        className="transition opacity-70 hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 256 256"
          className="fill-yellow-300"
        >
          <path
            d="M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z"
            className="opacity-20"
          ></path>
          <path d="M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-8-8A8,8,0,0,0,50.34,61.66Zm0,116.68-8,8a8,8,0,0,0,11.32,11.32l8-8a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l8,8a8,8,0,0,0,11.32-11.32ZM40,120H32a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm88,88a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,208Zm96-88h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path>
        </svg>
      </button>
    </>
  )
}

export default ThemeSwitch
