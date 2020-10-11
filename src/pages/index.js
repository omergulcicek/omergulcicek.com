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
        <h3>HTML, CSS, SASS, JavaScript, jQuery, ES6, Gulp, React, SPA</h3>
      </aside>

      <aside>
        <Rotate
          src="https://omergulcicek.com/img/square.png"
          alt="Square Animation"
        />
        <Circle1 />
        <Circle2 />
        <Circle3 />
        <figure></figure>
      </aside>
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
  </Layout>
)

export default Home

const Hero = styled.section`
  display: flex;
  height: 240px;
  padding-bottom: 80px;
  padding-top: 80px;

  @media (min-width: 992px) {
    height: 60vh;
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
    font-size: var(--f-size);
    font-weight: 100;
    margin: 0;
  }

  aside {
    position: relative;
    text-align: center;
    width: 100%;

    @media (min-width: 1600px) {
      text-align: left;
      width: 50%;
    }

    &:nth-child(2) {
      display: none;
      transform: translateY(-80px);

      @media (min-width: 1600px) {
        display: inline-block;
      }
    }

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

const Circle = styled.span`
  border-radius: 50%;
  opacity: 0.9;
  overflow: hidden;
  position: absolute;
  user-select: none;
  z-index: 1;
`

const Rotate = styled.img`
  animation: rotate 25s linear infinite;
  left: -10px;
  position: absolute;
  top: 320px;
  user-select: none;
  z-index: 0;
`

const Circle1 = styled(Circle)`
  animation: circling 18s linear infinite;
  background: #26a69a;
  height: 85px;
  right: 34px;
  top: 150px;
  width: 85px;
`

const Circle2 = styled(Circle)`
  animation: circlereverse 22s linear infinite;
  background: var(--c-theme);
  bottom: 250px;
  height: 55px;
  left: 280px;
  right: 0;
  top: 250px;
  width: 55px;
`

const Circle3 = styled(Circle)`
  animation: floating 5s linear infinite;
  background: #f44336;
  height: 50px;
  right: 40px;
  top: 10px;
  width: 50px;
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
    margin-bottom: 40px;

    @media (min-width: 992px) {
      font-size: 20px;
    }
  }
`

const Button = styled.a`
  color: var(--c-theme);
  cursor: pointer;
  display: block;
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

  &:hover {
    svg {
      transform: translateX(0.25em);
    }
  }
`
