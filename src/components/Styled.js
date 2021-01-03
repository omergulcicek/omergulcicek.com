import styled from "styled-components"

/**
 * 1. Layout
 *    1.1 Header
 *      1.1.1 Brand
 *      1.1.2 Menu
 *      1.1.3 Dark Theme
 *    1.2 Main
 *    1.3 Footer
 *  2. Helper Components
 *  3. Pages
 *    3.1 Home
 *    3.2 About
 *    3.3 Blog
 *    3.4 Bootcamp
 *    3.5 My Desk
 *    3.6 Projects
 *  4. Blog Details
 * 
 */

// 1. Layout
//#region 1.1 Header
export const Header = styled.header`
  background-color: var(--c-background);
  border-bottom: 1px solid transparent;
  border-top: 4px solid var(--c-theme);
  padding-bottom: 24px;
  padding-top: 24px;
  position: fixed;
  top: 0;
  transition: box-shadow var(--g-transition);
  width: 100%;
  z-index: 10;

  @media (min-width: 992px) {
    flex-direction: row
  }

  &.active {
    border-bottom-color: rgba(0, 0, 0, .2);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, .2);
  }

  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
    max-width: 80%;
    position: relative;

    @media (min-width: 768px) {
      max-width: 540px;
    }

    @media (min-width: 992px) {
      flex-direction: row;
      max-width: 720px;
    }

    @media (min-width: 1200px) {
      max-width: 960px;
    }
  }

  .brand {
    display: none;

    @media (min-width: 992px) {
      display: block
    }
  }

  div:not(.brand) {
    display: flex;
  }
`

// 1.1.1 Brand
export const Logo = styled.div`
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

// 1.1.2 Menu
export const Menu = styled.nav`
  align-items: center;
  display: flex;

  a {
    border-bottom: 2px solid transparent;
    color: var(--c-text);
    display: inline-block;
    font-size: var(--f-size);
    font-weight: normal;
    margin-right: 4px;
    letter-spacing: 0.2px;
    line-height: 1;
    padding: 12px 4px;
    position: relative;
    text-decoration: none;
    transition: var(--g-transition);

    &:first-child {
      margin-right: 8px;
    }

    @media (min-width: 992px) {
      margin-right: 16px;
    }

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

    &:focus:not([type="button"]),
    &:hover:not([type="button"]) {
      color: var(--c-theme);
      outline: none;

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
      height: 16px;
      vertical-align: baseline;
    }
  }
`

// 1.1.3 Dark Theme
export const DarkTheme = styled.a`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 100%;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  padding: 12px;
  user-select: none;
  transition: var(--g-transition);

  height: 42px;
  box-sizing: border-box;
  width: 42px;
  text-align: center;

  &:focus,
  &:hover {
    background-color: var(--c-theme);
    outline: none;
    text-decoration: none;
  }
`
//#endregion

//#region 1.2 Main
export const Main = styled.main`
  flex: 1;
  margin: 120px auto 160px;
  max-width: 80%;
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 540px;
  }

  @media (min-width: 992px) {
    margin-top: 240px;
    max-width: 720px;
  }

  @media (min-width: 1200px) {
    max-width: 960px;
  }
`
//#endregion

//#region 1.3 Footer
export const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;

  nav {
    margin-bottom: 24px;
    margin-top: 40px;

    a {
      display: inline-block;
      padding: 8px;

      &:not(:last-child) {
        @media (min-width: 992px) {
          margin-right: 16px;
        }
      }

      svg {
        height: 24px;
        padding: 4px;

        @media (min-width: 992px) {
          height: 32px;
          padding: 12px;
        }
      }

      &:hover {
        color: inherit;

        svg {
          transform: scale(1.1);
        }
      }
    }
  }
`
//#endregion

// 2. Helper Components
//#region
export const Title = styled.h1`
  color: var(--c-theme);
  font-size: 32px;
  margin-bottom: 32px;

  @media (min-width: 992px) {
    font-size: 40px;
    margin-bottom: 64px;
  }

  span {
    color: var(--c-text)
  }
`

export const Svg = styled.svg`
  display: none;
  opacity: 0.05;
  left: -25%;
  pointer-events: none;
  position: absolute;
  top: -120px;
  width: 80%;
  z-index: -1;

  @media (min-width: 992px) {
    display: block;
  }
`

export const Strong = styled.span`
  color: var(--c-theme);

  a {
    text-decoration-color: var(--c-theme);
  }
`

export const H3 = styled.h3`
  color: var(--c-theme);
`

export const Details = styled.details`
  border-left: 2px solid transparent;
  padding: 24px 16px 24px 24px;

  &:not(:first-of-type) {
    border-top: 1px solid rgba(0,0,0,0.3);
  }

  summary {
    border-radius: 4px;
    cursor: pointer;
    display: block;
    outline: none;
    position: relative;
    transition: var(--g-transition);

    &::after {
      background-image: url("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjYXJldC1kb3duIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyMCA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jYXJldC1kb3duIGZhLXctMTAgZmEtMngiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zMS4zIDE5MmgyNTcuM2MxNy44IDAgMjYuNyAyMS41IDE0LjEgMzQuMUwxNzQuMSAzNTQuOGMtNy44IDcuOC0yMC41IDcuOC0yOC4zIDBMMTcuMiAyMjYuMUM0LjYgMjEzLjUgMTMuNSAxOTIgMzEuMyAxOTJ6IiBjbGFzcz0iIj48L3BhdGg+PC9zdmc+");
      background-repeat: no-repeat;
      content: "";
      display: block;
      height: 18px;
      position: absolute;
      left: -25px;
      top: 50%;
      transform: translateY(-50%);
      width: 11px;
    }

    &::-webkit-details-marker {
      display: none;
    }
  }

  code {
    font-size: inherit;
  }

  h6 {
    font-size: var(--f-size);
  }

  p {
    margin-top: 16px;
    position: relative;
    transition: var(--g-transition);
  }

  &[open] {
    background-color: #1B2125;
    border-left-color: var(--c-theme);

    summary,
    p {
      margin-left: 16px;
    }

    summary {
      &::after {
        background-image: url("data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjYXJldC11cCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY2FyZXQtdXAgZmEtdy0xMCBmYS0yeCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI4OC42NjIgMzUySDMxLjMzOGMtMTcuODE4IDAtMjYuNzQxLTIxLjU0My0xNC4xNDItMzQuMTQybDEyOC42NjItMTI4LjY2MmM3LjgxLTcuODEgMjAuNDc0LTcuODEgMjguMjg0IDBsMTI4LjY2MiAxMjguNjYyYzEyLjYgMTIuNTk5IDMuNjc2IDM0LjE0Mi0xNC4xNDIgMzQuMTQyeiIgY2xhc3M9IiI+PC9wYXRoPjwvc3ZnPg==");
      }
    }
  }
`

export const Hr = styled.hr`
  background-color: rgba(0,0,0,0.3);
  border: 0;
  height: 2px;
  margin-bottom: 64px;
  margin-top: 64px;
  width: 100%;
`

export const H2Title = styled.h2`
  align-items: center;
  color: var(--c-theme);
  display: flex;
  font-size: 32px;
  margin-bottom: 32px;
  white-space: nowrap;

  @media (min-width: 992px) {
    font-size: 40px;
    margin-bottom: 64px;
  }

  span {
    color: var(--c-text)
  }

  a {
    font-size: 14px;
    border-radius: 8px;
    text-decoration: none;
    color: var(--c-text);
    font-weight: 400;
    display: inline-block;
    margin-left: 32px;

    svg {
      margin-left: 8px;
      transition: var(--g-transition);
    }

    &:hover svg {
      margin-left: 16px;
    }
  }
`
//#endregion

// 3. Pages
//#region 3.1 Home
export const GetInTouch = styled.div`
  color: var(--c-text);
  font-size: 20px;
  line-height: 1.5;
  padding-bottom: 80px;
  padding-top: 80px;
  text-align: center;

  @media (min-width: 992px) {
    font-size: 40px;
    line-height: 48px;
    padding-bottom: 240px;
    padding-top: 240px;
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

export const Button = styled.a`
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
//#endregion

//#region 3.2 About
export const AboutA = styled.a`
  background-color: transparent;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  margin: 0 6px;
  overflow: hidden;
  padding: 2px;
  text-decoration: none;
  transition: var(--g-transition);

  &:focus,
  &:hover {
    text-decoration: underline;
  }
`

export const AboutTurkuaz = styled(AboutA)`
  box-shadow: 0 1px 0 4px rgba(38,166,154,.1), inset 0 40px 0 rgba(38,166,154,.1);
  color: #26a69a;

  &:focus,
  &:hover {
    color: #26a69a;
  }
`

export const AboutTurkceDokuman = styled(AboutA)`
  box-shadow: 0 1px 0 4px rgba(244,67,54,.1), inset 0 40px 0 rgba(244,67,54,.1);
  color: #f44336;

  &:focus,
  &:hover {
    color: #f44336;
  }
`

export const AboutMail = styled(AboutA)`
  box-shadow: 0 1px 0 4px rgba(33,150,243,.1), inset 0 40px 0 rgba(33,150,243,.1);
  color: var(--c-theme);

  &:focus,
  &:hover {
    color: var(--c-theme);
  }
`

export const AboutHangiKredi = styled(AboutA)`
  box-shadow: 0 1px 0 4px rgba(242,103,34,.15), inset 0 40px 0 rgba(242,103,34,.15);
  color: #f26722;

  &:focus,
  &:hover {
    color: #f26722;
  }
`

export const AboutTitle = styled.h2`
  color: var(--c-theme);
  font-size: 28px;
  margin-bottom: 24px;

  @media (min-width: 992px) {
    font-size: 36px;
  }
`

export const AboutFigure = styled.figure`
  background-color: #eee;
  height: 810px;
  margin: 32px -32px;

  @media (min-width: 992px) {
    margin: 64px -96px
  }

  @media (min-width: 1400px) {
    margin: 120px -128px
  }

  img {
    border-radius: 4px;
    overflow: hidden;
  }
`
//#endregion

//#region 3.3 Blog
export const BlogArticle = styled.article`
  color: var(--c-grey);
  line-height: 30px;
  margin-top: 36px;

  a {
    color: var(--c-text);
    font-size: 18px;
    line-height: 1;
    text-decoration: none;
    transition: var(--g-transition);
    
    @media (min-width: 992px) {
      font-size: 22px;
    }

    &:focus,
    &:hover {
      color: var(--c-theme);
    }
  }
`
//#endregion

//#region 3.5 Desk
export const DeskFigure = styled.figure`
  background-color: #eee;
  height: 810px;
  margin: 0 -32px 32px;

  @media (min-width: 992px) {
    margin: 0 -96px 64px
  }

  @media (min-width: 1400px) {
    margin: 0 -128px 120px
  }

  img {
    border-radius: 4px;
    overflow: hidden;
  }
`

export const MyDeskGrid = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  article {
    &.disabled {
      img {
        filter: blur(4px);
        opacity: 0.5;
      }
    }

    figure {
      margin: 0;

      img {
        display: block;
        height: 240px;
        margin: 0 auto 32px;
        max-width: 100%;
        object-fit: contain;
        vertical-align: middle;
        transition: var(--g-transition);
      }

      figcaption {
        h5 {
          color: var(--c-text);
          font-size: 18px;
          font-weight: 400;
          line-height: 24px;
          margin: 0;
        }

        span {
          color: var(--c-grey);
          font-size: 16px;
          font-weight: 100;
        }
      }
    }

    &:not(.disabled):hover img {
      transform: scale(1.1);
    }
  }
`
//#endregion

//#region 3.6 Projects
export const ProjectWrap = styled.a`
  display: block;
  margin-bottom: 8px;
  text-decoration: none;

  &:focus {
    outline: none;

    article {
      background-color: rgba(0, 0, 0, 0.2);
      border-left-color: var(--c-theme);

      &:before {
        opacity: 1
      }
    }
  }
`

export const ProjectItem = styled.article`
  align-items: center;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  margin-left: -32px;
  margin-right: -32px;
  padding: 16px 32px;
  position: relative;
  transition: background-color var(--g-transition);

  &:before {
    background-color: var(--c-theme);
    content: "";
    display: block;
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: var(--g-transition);
    width: 4px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-left-color: var(--c-theme);

    &:before {
      opacity: 1
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  figure {
    margin: 0 24px 8px 0;

    @media (min-width: 992px) {
      margin: 0;
      width: 64px;
    }

    img {
      height: auto;
      max-width: 32px;
    }
  }

  h2 {
    font-size: 20px;
    font-weight: normal;
    margin: 0 32px 8px 0;

    @media (min-width: 992px) {
      width: 264px;
    }
  }

  p {
    color: var(--c-grey);
  }
`

export const ProjectDesc = styled.p`
  margin-top: 40px;

  @media (min-width: 992px) {
  margin-top: 80px;
  }
`
//#endregion

// 4. Blog Details
//#region
export const BlogDetailsInfo = styled.div`
  color: var(--c-grey);
  font-size: 14px;
  line-height: 18px;
  margin-top: 40px;

  svg {
    vertical-align: middle;
  }

  a {
    text-decoration: none;


    &:focus,
    &:hover {
      color: var(--c-theme);
    }

    &:first-child {
      margin-left: 0;
    }
  }

  div {
    margin-top: 8px;

    span:first-of-type {
      display: none;
    }

    a:first-of-type {
      margin-left: 0;
    }
    
    @media (min-width: 992px) {
      display: inline-block;
      margin-top: 0;

      span:first-of-type {
        display: inline-block;
      }
  
      a:first-of-type {
        margin-left: 8px;
      }
    }

  }

  a,
  span {
    margin-left: 8px;
    margin-right: 8px;
  }
`

export const BlogDetailsTitle = styled.h1`
  color: var(--c-theme);
  font-size: 40px;
  line-height: 56px;
  margin-bottom: 24px;
  margin-top: 8px;
  position: relative;

  @media (min-width: 992px) {
    font-size: 56px;
    line-height: 72px;
  }
`

export const BlogDetailsContent = styled.article`
  h2,
  h3 {
    color: var(--c-theme);
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 12px;
    margin-top: 64px;
    scroll-margin-top: 140px;
    position: relative;

    &:hover a {
      opacity: 1;
    }

    a {
      opacity: 0;
      left: -24px;
      padding-right: 8px;
      position: absolute;
      top: 0;
      transition: var(--g-transition);

      &:hover {
        opacity: 1;
      }
    }
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 24px;
  }

  figcaption {
    color: var(--c-grey);
    margin-bottom: 56px;
    text-align: center;
  }

  .gatsby-resp-image-wrapper {
    filter: blur(3px);
    margin-bottom: 16px;
    margin-top: 56px;
    opacity: .9;
    transition: 200ms;

    &.loaded {
      filter: blur(0);
      opacity: 1;
    }
  }

  pre {
    border-radius: 8px;
    margin-bottom: 32px;
    margin: 32px -32px;
    overflow: auto;
    padding: 24px;

    @media (min-width: 992px) {
      margin: 56px -96px;
    }
  }
`

export const BlogDetailsPagination = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  list-style: none;
  align-items: stretch;
  margin-left: -16px;
  margin-right: -16px;
  padding: 0;
  flex-direction: column;
  
  @media (min-width: 992px) {
    flex-direction: row;
  }

  li {
    border-radius: 8px;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(50% - 32px);
    transition: var(--g-transition);

    &:first-child {
      text-align: left;
  
      @media (min-width: 992px) {
        text-align: right;
      }
    }

    &:not(:empty) {
      background-color: var(--c-theme);

      &:hover {
        background-color: #0b72c4;
      }
    }

    a {
      color: var(--c-text);
      display: block;
      padding: 24px 32px;
      text-decoration: none;

      span {
        color: rgba(255, 255, 255, 0.65);
        display: block;
        font-size: 15px;
        margin-bottom: 8px;
      }
    }
  }
`
//#endregion

