import React from "react"
import { Link } from "gatsby"
import Logo from '../Logo'

import * as S from './styles'

const Header = () => {
  
  return (
    <S.MenuWrapper>
        <S.Name>
          <S.LinkItem activeClassName="active" to="/">
            <S.Logo></S.Logo>
            <S.MyName>
              Vadnir
              <span> Vieira </span>
            </S.MyName>
          </S.LinkItem>
        </S.Name>

        <S.Navbar>
          <S.MenuItem>
            <S.LinkItem activeClassName="active" to="/sobre">SOBRE</S.LinkItem>
          </S.MenuItem>
          <S.MenuItem >
            <S.LinkItem activeClassName="active" to="/servicos">SERVIÇOS</S.LinkItem>
          </S.MenuItem>
          
          {/* <S.MenuItem>
            <Link to="/" >
              <Logo/>
            </Link>
          </S.MenuItem> */}

          <S.MenuItem>
            <S.LinkItem activeClassName="active" to="/portfolio">PORTFOLIO</S.LinkItem>
          </S.MenuItem>
          <S.MenuItem>
            <S.LinkItem activeClassName="active" to="/contato">CONTATO</S.LinkItem>
          </S.MenuItem>
          
        </S.Navbar>
    </S.MenuWrapper>
  )
}

export default Header
