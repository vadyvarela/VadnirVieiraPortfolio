import React from "react"
import { Link } from "gatsby"

import * as S from './styles'

const Header = () => {
  
  return (
    <S.HeaderMenu>
      <S.Name>
        <S.LinkItem activeClassName="active" to="/">
          <S.Logo>VA</S.Logo>
          <S.MyName>
            Vadnir
            <span> Vieira </span>
          </S.MyName>
        </S.LinkItem>
      </S.Name>
  
      <S.MenuWrapper>
        <S.Navbar>
          <S.MenuItem>
            <S.LinkItem activeClassName="active" to="/sobre">Perfil</S.LinkItem>
          </S.MenuItem>
          <S.MenuItem >
            <S.LinkItem activeClassName="active" to="/servicos">Habilidades</S.LinkItem>
          </S.MenuItem>

          <S.MenuItem>
            <S.LinkItem activeClassName="active" to="/portfolio">Projetos</S.LinkItem>
          </S.MenuItem>
          <S.MenuItem>
            <S.LinkItem activeClassName="active" to="/blog">Blog</S.LinkItem>
          </S.MenuItem>
          <S.MenuItem>
            <S.LinkItem activeClassName="active" to="/contato">Contato</S.LinkItem>
          </S.MenuItem>
          
        </S.Navbar>
      </S.MenuWrapper>
    </S.HeaderMenu>
  )
}

export default Header
