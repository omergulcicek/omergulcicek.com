import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import Layout from "../components/Layout"

const Home = () => (
  <Layout>
    <div className="container">
      <Helmet title="Ana Sayfa" titleTemplate="%s | Ömer Gülçiçek" />

      <Hero>
        <h1>Ömer Gülçiçek</h1>
        <h2>Frontend Developer</h2>
        <h3>&lt;<span>code</span>&gt;HTML, CSS, SASS, JavaScript, jQuery, ES6, Gulp, React, SPA&lt;<span>/code</span>&gt;</h3>
      </Hero>

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
    </div>
  </Layout>
)

export default Home

const Hero = styled.aside`
  display: flex;
  flex-direction: column;
  height: 320px;
  padding-bottom: 80px;
  padding-top: 80px;
  position: relative;
  text-align: center;
  width: 100%;

  @media (min-width: 992px) {
    height: 640px;
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
`

const GetInTouch = styled.div`
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