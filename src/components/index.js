import React from "react"

import SEOComp from "./Seo"
import LayoutComp from "./Layout"
import HeaderComp from "./Header"
import BrandComp from "./Brand"
import FooterComp from "./Footer"
import TitleComp from "./Title"

export const SEO = () => {
  return <SEOComp />
}

export const Layout = () => {
  return <LayoutComp />
}

export const Header = () => {
  return <HeaderComp />
}

export const Brand = () => {
  return <BrandComp />
}

export const Footer = () => {
  return <FooterComp />
}

export const Title = () => {
  return <TitleComp />
}