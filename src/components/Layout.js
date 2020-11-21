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
      { children }
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
  margin-top: 7%;
  position: relative;
`