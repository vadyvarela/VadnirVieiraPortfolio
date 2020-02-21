import React from 'react'
import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt as Search } from "styled-icons/boxicons-regular/SearchAlt"
import { UpArrowCircle as Arrow } from "styled-icons/boxicons-regular/UpArrowCircle"
import { Lightbulb as Light } from "styled-icons/fa-regular/Lightbulb"
import { GridAlt as Grid } from "styled-icons/boxicons-solid/GridAlt"

import * as S from './styles'

const MenuBar = () => (
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenuBarLink to="/" title="Voltar para Home">
                <S.MenuBarItem> <Home/> </S.MenuBarItem>
            </S.MenuBarLink>
            <S.MenuBarLink to="/" title="Pesquisar">
                <S.MenuBarItem> <Search/> </S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>
        <S.MenuBarGroup>
            <S.MenuBarItem title="Mudar o tema"> <Light/> </S.MenuBarItem>
            <S.MenuBarItem title="Mudar visualização"> <Grid/> </S.MenuBarItem>
            <S.MenuBarItem title="Ir para o topo"> <Arrow/> </S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
)

export default MenuBar