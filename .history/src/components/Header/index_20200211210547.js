import React from "react"
import { Link } from "gatsby"
import Logo from '../Logo'

import styled from 'styled-components'

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  background: #052049;
`

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
`

const Menulink = styled.li`
  padding: 10px 15px;
  color: #fff;
  font-size:1em;
`

const Header = () => {
  
  return (
    <HeaderStyle>
        <Navbar>
          <Menulink>
            <Link to="/">HOME</Link>
          </Menulink>
          
          <Menulink>
            <Link to="/" >
              <Logo/>
            </Link>
          </Menulink>
          <Menulink>
            <Link to="/about">ABOUT</Link>
          </Menulink>
          
        </Navbar>
    </HeaderStyle>
  )
}

export default Header
