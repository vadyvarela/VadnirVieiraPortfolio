import React from "react"
import { Link } from "gatsby"
import Logo from '../Logo'

import styled from 'styled-components'
import * as S from './styles'

const Header = () => {
  
  return (
    <S.MenuWrapper>
        <S.Navbar>
          <li>
            <S.Link to="/">HOME</S.Link>
          </li>
          
          <li>
            <S.Link to="/" >
              <Logo/>
            </S.Link>
          </li>
          <li>
            <S.Link to="/about">ABOUT</S.Link>
          </li>
          
        </S.Navbar>
    </S.MenuWrapper>
  )
}

export default Header
