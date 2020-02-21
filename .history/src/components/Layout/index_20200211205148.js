import React from "react"
import PropTypes from "prop-types"

import Header from "../Header";
import styled from 'styled-components'

const LayoutWrapper = styled.section`
  
`

const LayoutMain = styled.main`
  background: #16202c;
  
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
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
