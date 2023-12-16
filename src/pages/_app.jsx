import localFont from "next/font/local"

import Layout from "layouts"
import "@/tailwindcss"

const monaSans = localFont({
  src: [
    {
      path: "./../fonts/MonaSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../fonts/MonaSans-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./../fonts/MonaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../fonts/MonaSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./../fonts/MonaSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../fonts/MonaSans-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./../fonts/MonaSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../fonts/MonaSans-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
})

export default function App({ Component, pageProps }) {
  return (
    <Layout className={monaSans.className}>
      <Component {...pageProps} />
    </Layout>
  )
}
