import React from "react"

import LayoutComp from "./Layout"
import HeaderComp from "./Header"
import BrandComp from "./Brand"
import FooterComp from "./Footer"
import TitleComp from "./Title"
import ArticleItemComp from "./ArticleItem"
import ProjectsItemComp from "./ProjectsItem"

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

export const ArticleItem = ({data}) => {
  return <ArticleItemComp data={data} />
}

export const ProjectsItem = ({total}) => {
  return <ProjectsItemComp total={total} />
}