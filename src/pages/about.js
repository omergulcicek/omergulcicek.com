import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"

import Layout from "../components/Layout"
import Title from "../components/Title"

const About = () => (
  <Layout>
    <Helmet
      title="Hakkımda"
      titleTemplate="%s | Ömer Gülçiçek"
    />

    <section>
      <Title t1="Benim" t2="Hakkımda" />

      <p>
        Ben Ömer, { new Date().getFullYear() - 1993 } yaşındayım ve İstanbul'da yaşıyorum. Yazılım mühendisliği mezunuyum.
      </p>

      <p>
        Frontend Developer'ım; <Turkuaz href="https://turkuazcss.com/" target="_blank" rel="noopener noreferrer">Turkuaz Css</Turkuaz> ve <TurkceDokuman href="https://turkcedokuman.com/" target="_blank" rel="noopener noreferrer">Türkçe Doküman</TurkceDokuman>'ın kurucusuyum. Yazılım alanında Türkçe kaynak sayısını arttırmak adına çeviriler yapmaktayım. Çalışmalarımın çoğu açık kaynak, <Link to="/projects/">projeler</Link> sayfasından yada detaylı olarak <a href="https://github.com/omergulcicek" target="_blank" rel="noopener noreferrer">GitHub</a> profilimden ulaşabilirsiniz.
      </p>

      <p>
        Teknik olarak; HTML, CSS, SASS, JavaScript, jQuery, ES6, Gulp, React, SPA alanlarında tecrübem var.
      </p>

      <p>
        Kendimi sürekli güncel tutmak adına alanımla ilgili araştırmalar yapıp, bunları <Link to="/blog/">paylaşıyorum</Link>.
      </p>

      <p>
        Benimle konuşmak istediğiniz bir şey varsa <Mail href="mailto:iletisim@omergulcicek.com">iletisim@omergulcicek.com</Mail> adresine detaylı bir mail atabilirsiniz.
      </p>

      <p>
        Yazılım dışında satranç, yüzme, futbol, resim ve bilgisayar oyunlarına vakit ayırıyorum.
      </p>

      <Svg viewBox="0 0 200 200">
        <path fill="var(--c-theme)" d="M45.3,-52.9C60.9,-40.9,77.3,-28.7,79.5,-14.3C81.7,0.1,69.8,16.8,57.7,29.1C45.6,41.5,33.3,49.7,18.3,58.8C3.4,67.9,-14.3,77.9,-29.3,74.9C-44.3,71.9,-56.5,55.8,-59.2,39.7C-62,23.6,-55.2,7.5,-51.7,-8.5C-48.1,-24.5,-47.8,-40.5,-39.7,-53.9C-31.6,-67.2,-15.8,-77.8,-0.5,-77.2C14.9,-76.6,29.7,-64.9,45.3,-52.9Z" transform="translate(100 100)" />
      </Svg>
    </section>
  </Layout>
)

export default About

const A = styled.a`
  background-color: transparent;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  margin: 0 6px;
  overflow: hidden;
  padding: 2px;
  text-decoration: none;
  transition: var(--g-transition);

  &:hover {
    text-decoration: underline;
  }
`

const Turkuaz = styled(A)`
  box-shadow: 0 1px 0 4px rgba(38,166,154,.1), inset 0 40px 0 rgba(38,166,154,.1);
  color: #26a69a;

  &:hover {
    color: #26a69a;
  }
`

const TurkceDokuman = styled(A)`
  box-shadow: 0 1px 0 4px rgba(244,67,54,.1), inset 0 40px 0 rgba(244,67,54,.1);
  color: #f44336;

  &:hover {
    color: #f44336;
  }
`

const Mail = styled(A)`
  box-shadow: 0 1px 0 4px rgba(195,40,101,.1), inset 0 40px 0 rgba(195,40,101,.1);
  color: #c32865;

  &:hover {
    color: #c32865;
  }
`

const Svg = styled.svg`
  opacity: 0.05;
  left: -25%;
  pointer-events: none;
  position: absolute;
  top: -120px;
  width: 80%;
  z-index: -1;
`