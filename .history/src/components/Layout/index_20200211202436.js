import React from "react"
import Header from "../Header";
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  

  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
