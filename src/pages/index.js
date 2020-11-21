import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import Layout from "../components/Layout"

const Home = () => (
  <Layout>
    <Helmet title="Ana Sayfa" titleTemplate="%s | Ömer Gülçiçek" />

    <Hero>
      <aside>
        <h1>Ömer Gülçiçek</h1>
        <h2>Frontend Developer</h2>
        <h3>&lt;<span>code</span>&gt;HTML, CSS, SASS, JavaScript, jQuery, ES6, Gulp, React, SPA&lt;<span>/code</span>&gt;</h3>
      </aside>
    </Hero>
    
    <Svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="var(--c-theme)" d="M37.8,-60.4C46.4,-53.4,48.8,-38.4,50.3,-25.7C51.8,-13.1,52.3,-2.7,49.5,6.1C46.6,14.9,40.3,22.2,35.6,34.8C30.8,47.4,27.6,65.3,17.8,74.5C8,83.6,-8.4,84,-23,79.3C-37.6,74.5,-50.5,64.7,-58.2,52.3C-66,40,-68.7,25.1,-70.5,10.3C-72.4,-4.5,-73.4,-19.3,-67.9,-30.8C-62.3,-42.4,-50.2,-50.8,-37.8,-56.1C-25.4,-61.4,-12.7,-63.5,1,-65C14.6,-66.6,29.3,-67.4,37.8,-60.4Z" transform="translate(100 100)" />
    </Svg>

    <GetInTouch>
      <h3>Site mi yaptırmak istiyorsunuz?</h3>
      <p>Tüm detayları içeren bir mail atabilirsin.</p>

      <Button href="mailto:iletisim@omergulcicek.com">
        <span>iletisim@omergulcicek.com</span>

        <svg width="14" height="10">
          <g stroke="currentColor" fill="none" fillRule="evenodd">
            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
            <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
          </g>
        </svg>
      </Button>
    </GetInTouch>
  </Layout>
)

export default Home

const Hero = styled.section`
  display: flex;
  height: 240px;
  padding-bottom: 80px;
  padding-top: 80px;

  @media (min-width: 992px) {
    height: 54vh;
    padding-bottom: 160px;
    padding-top: 160px;
  }

  h1 {
    color: var(--c-theme);
    font-size: 40px;
    margin-bottom: 16px;
    margin-top: 24px;

    @media (min-width: 992px) {
      font-size: 88px;
    }
  }

  h2 {
    color: var(--c-text);
    font-size: 24px;
    font-weight: 100;
    margin-bottom: 16px;
    margin-top: 0;

    @media (min-width: 992px) {
      font-size: 40px;
    }
  }

  h3 {
    color: var(--c-grey);
    font-family: monospace;
    font-size: var(--f-size);
    font-weight: 100;
    letter-spacing: -0.5px;
    line-height: 1.5;
    margin: 0;

    span {
      color: var(--c-theme);
    }
  }

  aside {
    position: relative;
    width: 100%;

    img {
      margin: 0;
      user-select: none;
    }

    figure {
      margin: 0;
      position: relative;
      z-index: 2;
    }
  }
`

const GetInTouch = styled.section`
  color: var(--c-text);
  font-size: 20px;
  line-height: 1.5;
  padding-bottom: 80px;
  text-align: center;

  @media (min-width: 992px) {
    font-size: 40px;
    line-height: 48px;
    padding-bottom: 240px;
  }

  h3 {
    font-weight: 100;
    margin: 0 0 12px;
  }

  p {
    font-size: var(--f-size);
    line-height: 28px;
    margin-bottom: 24px;

    @media (min-width: 992px) {
      font-size: 20px;
    }
  }
`

const Button = styled.a`
  color: var(--c-theme);
  cursor: pointer;
  display: inline-block;
  font-size: var(--f-size);
  line-height: 1;
  text-decoration: none;
  transition: var(--g-transition);

  span {
    letter-spacing: 1px;
  }

  svg {
    margin-left: 8px;
    transition: var(--g-transition);
  }

  &:focus,
  &:hover {
    svg {
      transform: translateX(0.25em);
    }
  }
`

const Svg = styled.svg`
  opacity: 0.05;
  pointer-events: none;
  position: absolute;
  right: -25%;
  top: -120px;
  user-select: none;
  width: 80%;
  z-index: -1;
`