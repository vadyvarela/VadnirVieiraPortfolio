import React from "react"
import PropTypes from "prop-types"
import Header from "../Header";

import * as S from './styles'
import GlobaStyle from '../../styles/global'


const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobaStyle />
        <header>
          <Header />
        </header>
        <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
