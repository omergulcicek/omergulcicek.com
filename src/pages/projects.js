import React, { useEffect } from "react"
import Helmet from "react-helmet"
import getProjects from "./../utils/getProjects"
import { ProjectDesc, Svg } from "./../components/Styled"
import "isomorphic-fetch"

import Layout from "../components/Layout"
import Title from "../components/Title"

export const projects = [
  {
    "link": "https://github.com/omergulcicek/omergulcicek.com",
    "resim": "https://omergulcicek.com/img/omergulcicek.png",
    "baslik": "omergulcicek.com",
    "aciklama": "Kişisel sitemin kaynak kodları"
  },
  {
    "link": "https://github.com/omergulcicek/turkuaz.com",
    "resim": "https://omergulcicek.com/img/turkuazcss.png",
    "baslik": "Turkuaz",
    "aciklama": "Hızlı esnek ve kolay web sayfaları geliştirmek için tasarlanan güçlü bir CSS Framework"
  },
  {
    "link": "https://github.com/omergulcicek/turkce-dokuman",
    "resim": "https://omergulcicek.com/img/turkcedokuman.png",
    "baslik": "Türkçe Doküman",
    "aciklama": "Yazılım alanında sıfırdan eğitim veren Türkçe dokümanlar"
  },
  {
    "link": "https://github.com/omergulcicek/react",
    "resim": "https://omergulcicek.com/img/react.png",
    "baslik": "React",
    "aciklama": "React JavaScript kütüphanesi Türkçe çeviri"
  },
  {
    "link": "https://github.com/omergulcicek/es6",
    "resim": "https://omergulcicek.com/img/es6.png",
    "baslik": "ECMAScript 6",
    "aciklama": "ECMAScript 6 Türkçe çeviri"
  },
  {
    "link": "https://github.com/omergulcicek/article-time-ago",
    "resim": "https://omergulcicek.com/img/npm.png",
    "baslik": "Article Time Ago",
    "aciklama": "Belirtilen tarih ile anlık tarih arasındaki süreyi sözel olarak yazar"
  },
  {
    "link": "https://github.com/omergulcicek/reading-time",
    "resim": "https://omergulcicek.com/img/npm.png",
    "baslik": "Reading Time",
    "aciklama": "Makalenin kelime sayısına göre ortalama okunma süresini hesaplar"
  }
]

export default function App() {
  useEffect(
    () => {
      document.querySelectorAll("main .container")[0].classList.add("projects")
    }
  )

  return <Layout>
    <Helmet
      title="Projelerim"
      titleTemplate="%s | Ömer Gülçiçek"
    />

    <div className="container">
      <Title t1="En İyi" t2="Projelerim" />

      { getProjects(projects) }

      <ProjectDesc>
        Diğer projelerim için <a href="https://github.com/omergulcicek" target="_blank" rel="noopener noreferrer">GitHub profilimi</a> ziyaret edebilirsin.
      </ProjectDesc>

      <Svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="var(--c-theme)" d="M51.6,-57.2C64.9,-50.4,72.2,-32.2,70.1,-16.5C67.9,-0.8,56.2,12.5,45,20.5C33.9,28.5,23.1,31.4,10.3,42C-2.6,52.6,-17.6,71.1,-32.3,72.7C-47.1,74.3,-61.7,59.2,-69.8,41.9C-77.9,24.6,-79.5,5.1,-75.1,-12.1C-70.7,-29.3,-60.3,-44.4,-46.7,-51.2C-33.2,-58,-16.6,-56.6,1.3,-58.1C19.2,-59.6,38.3,-64.1,51.6,-57.2Z" transform="translate(100 100)" />
      </Svg>
    </div>
  </Layout>
}