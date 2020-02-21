import React from "react"
import { Link } from "gatsby"
import Logo from '../Logo'

import styled from 'styled-components'
import * as S from './styles'

const Header = () => {
  
  return (
    <S.MenuWrapper>
        <Navbar>
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
          
        </Navbar>
    </S.MenuWrapper>
  )
}

export default Header