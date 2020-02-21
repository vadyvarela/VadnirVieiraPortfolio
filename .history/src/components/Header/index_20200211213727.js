import React from "react"
import { Link } from "gatsby"
import Logo from '../Logo'

import styled from 'styled-components'
import * as S from './styles'

const Header = () => {
  
  return (
    <S.MenuWrapper>
        <S.Navbar>
          <S.MenuItem>
            <S.Link to="/">SOBRE</S.Link>
          </S.MenuItem>
          <S.MenuItem>
            <S.Link to="/">SERVIÇOS</S.Link>
          </S.MenuItem>
          
          <S.MenuItem>
            <S.Link to="/" >
              <Logo/>
            </S.Link>
          </S.MenuItem>

          <S.MenuItem>
            <S.Link to="/about">PORTFOLIO</S.Link>
          </S.MenuItem>
          <S.MenuItem>
            <S.Link to="/about">CONTATO</S.Link>
          </S.MenuItem>
          
        </S.Navbar>
    </S.MenuWrapper>
  )
}

export default Header
