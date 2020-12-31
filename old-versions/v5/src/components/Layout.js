import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />

    <Main>
      <section>
        { children }
      </section>
    </Main>

    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

const Main = styled.main`
  margin-bottom: 160px;
  margin-top: 160px;
  position: relative;

  @media (min-width: 992px) {
  margin-top: 240px;
  }
`