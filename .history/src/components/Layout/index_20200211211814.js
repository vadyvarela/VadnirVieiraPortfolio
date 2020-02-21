import React from "react"
import PropTypes from "prop-types"

import Header from "../Header";
import styled from 'styled-components'
import GlobaStyle from '../../styles/global'

const LayoutWrapper = styled.section`
  
`

const LayoutMain = styled.main`
  background: #16202c;
  min-height: 100vh;
  /*padding: 0 3.75rem 0 20rem;*/
  width: 100%;
`

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
