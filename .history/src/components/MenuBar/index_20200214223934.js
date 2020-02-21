import React from 'react'

import * as S from './styles'

const MenuBar = () => (
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenuBarLink to="/" title="Voltar para Home">
                <S.MenuBarLink></S.MenuBarLink>
            </S.MenuBarLink>
        </S.MenuBarGroup>
            <S.MenuBarLink to="/" title="Pesquisar">
                <S.MenuBarLink></S.MenuBarLink>
            </S.MenuBarLink>
        <S.MenuBarGroup>
            <S.MenuBarItem title="Mudar o tema"></S.MenuBarItem>
            <S.MenuBarItem title="Mudar visualização"></S.MenuBarItem>
            <S.MenuBarItem title="Ir para o topo"></S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
)

export default MenuBar