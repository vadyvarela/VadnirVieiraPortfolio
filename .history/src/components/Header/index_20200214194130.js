import React from "react"
import { Link } from "gatsby"
import Logo from '../Logo'

import * as S from './styles'

const Header = () => {
  
  return (
    <S.MenuWrapper>
        <S.Navbar>
          <S.MenuItem activeClassName="active">
            <S.LinkItem to="/">SOBRE</S.LinkItem>
          </S.MenuItem>
          <S.MenuItem activeClassName="active">
            <S.LinkItem to="/">SERVIÇOS</S.LinkItem>
          </S.MenuItem>
          
          <S.MenuItem>
            <Link to="/" >
              <Logo/>
            </Link>
          </S.MenuItem>

          <S.MenuItem activeClassName="active">
            <S.LinkItem to="/about">PORTFOLIO</S.LinkItem>
          </S.MenuItem>
          <S.MenuItem activeClassName="active">
            <S.LinkItem to="/about">CONTATO</S.LinkItem>
          </S.MenuItem>
          
        </S.Navbar>
    </S.MenuWrapper>
  )
}

export default Header
