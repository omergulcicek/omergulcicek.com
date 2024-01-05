import localFont from "next/font/local"
import { ThemeProvider } from "next-themes"

import Layout from "layouts"
import "@/tailwindcss"

const SFProDisplay = localFont({
  src: [
    {
      path: "./../fonts/sf-pro-display_light.woff2",
      weight: "300",
    },
    {
      path: "./../fonts/sf-pro-display_regular.woff2",
      weight: "400",
    },
    {
      path: "./../fonts/sf-pro-display_medium.woff2",
      weight: "500",
    },
    {
      path: "./../fonts/sf-pro-display_semibold.woff2",
      weight: "600",
    },
    {
      path: "./../fonts/sf-pro-display_bold.woff2",
      weight: "700",
    },
  ],
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout className={SFProDisplay.className}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
