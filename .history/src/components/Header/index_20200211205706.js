import React from "react"
import { Link } from "gatsby"
import Logo from '../Logo'

import styled from 'styled-components'

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  background: #052049;
`

const MyUl = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
`

const Header = () => {
  
  return (
    <HeaderStyle>
      <nav>
        <MyUl>
          <li>
            <Link to="/">HOME</Link>
          </li>
          
          <li>
            <Link to="/" >
              <Logo/>
            </Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          
        </MyUl>
      </nav>
    </HeaderStyle>
  )
}

export default Header
