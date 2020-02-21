import React from "react"
import PropTypes from "prop-types"
import Header from "../Header";
import Footer from "../Footer";

import * as S from './styles'
import GlobaStyle from '../../styles/global'


const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobaStyle />
      <header>
        <Header />
      </header>
      <S.LayoutMain>{children}</S.LayoutMain>
      <Footer />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
