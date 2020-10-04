import React, { useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import useDarkMode from "./../utilities/useDarkMode"
import DarkTheme from "./../components/DarkTheme"

const Nav = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  useEffect(
    () => {
      window.onscroll = function() {
        const header = document.getElementsByTagName("header")[0].classList
        const top = window.pageYOffset

        top >= 50
        ? header.add("active")
        : header.remove("active")
      }
    }
  )

  return (
    <>
      <Header>
        <section>
          <Brand>
            <Link to="/">
              <span>omergulcicek</span>.com
            </Link>
          </Brand>

          <Menu>
            <Link to="/">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" ><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
            </Link>
            <Link to="/blog/">Yazılar</Link>
            <Link to="/projects/">Projeler</Link>
            <Link to="/about/">Hakkımda</Link>
            
            <DarkTheme darkMode={darkMode} setDarkMode={setDarkMode} />
          </Menu>
        </section>
      </Header>
    </>
  )
}

export default Nav

const Header = styled.header`
  padding-bottom: 40px;
  padding-top: 40px;
  position: sticky;
  top: 0;
  transition: padding var(--g-transition);
  z-index: 10;

  @media (min-width: 992px) {
    flex-direction: row
  }

  &.active {
    background-color: var(--c-background);
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, .2);
    opacity: 0.9;
    padding-bottom: 20px;
    padding-top: 20px;
  }

  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 992px) {
      flex-direction: row
    }
  }
`

const Brand = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: block;
  }

  a {
    color: var(--c-text);
    font-size: 24px;
    letter-spacing: 0.2px;
    line-height: 1;
    text-decoration: none;
  }

  span {
    color: var(--c-theme)
  }
`

const Menu = styled.nav`
  align-items: center;
  display: flex;

  a {
    border-bottom: 2px solid transparent;
    color: var(--c-text);
    display: inline-block;
    font-size: var(--f-size);
    font-weight: normal;
    margin-right: 16px;
    letter-spacing: 0.2px;
    line-height: 1;
    padding: 12px 8px;
    position: relative;
    text-decoration: none;
    transition: var(--g-transition);

    &::after {
      background-color: var(--c-theme);
      bottom: -2px;
      content: "";
      height: 2px;
      left: 0;
      position: absolute;
      transition: width var(--g-transition);
      width: 0;
    }

    &:hover {
      color: var(--c-theme);

      &::after {
        width: 100%;
      }
    }

    &[aria-current="page"] {
      border-bottom-color: var(--c-theme);
      color: var(--c-theme);
    }

    &:first-of-type {
      display: block;

      @media (min-width: 992px) {
        display: none
      }
    }

    svg {
      height: 16px
    }
  }
`