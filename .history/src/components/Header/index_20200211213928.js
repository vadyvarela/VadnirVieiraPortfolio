import React from "react"

import Logo from '../Logo'

import styled from 'styled-components'
import * as S from './styles'

const Header = () => {
  
  return (
    <S.MenuWrapper>
        <S.Navbar>
          <S.MenuItem>
            <Link to="/">SOBRE</Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/">SERVIÇOS</Link>
          </S.MenuItem>
          
          <S.MenuItem>
            <Link to="/" >
              <Logo/>
            </Link>
          </S.MenuItem>

          <S.MenuItem>
            <Link to="/about">PORTFOLIO</Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/about">CONTATO</Link>
          </S.MenuItem>
          
        </S.Navbar>
    </S.MenuWrapper>
  )
}

export default Header
