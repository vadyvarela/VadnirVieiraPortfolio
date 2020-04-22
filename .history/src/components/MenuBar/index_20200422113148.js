import React, { useState, useEffect } from 'react'
import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt as Search } from "styled-icons/boxicons-regular/SearchAlt"
import { UpArrowCircle as Arrow } from "styled-icons/boxicons-regular/UpArrowCircle"
import { Lightbulb as Light } from "styled-icons/fa-regular/Lightbulb"
import { GridAlt as Grid } from "styled-icons/boxicons-solid/GridAlt"
import { ThList as List } from "styled-icons/fa-solid/ThList"

import * as S from './styles'

const MenuBar = () => {
    const [theme, setTheme] = useState(null)
    const [display, setDisplay] = useState(null)

    const isDarkMode = theme === "dark"
    const isListMode = display === "list"
  
    useEffect(() => {
      setTheme(window.__theme)
      setDisplay(window.__display)

      window.__onThemeChange = () => setTheme(window.__theme)
      window.__onDisplayChange = () => setDisplay(window.__display)
    }, [])

    return(
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                {/* <S.MenuBarLink to="/" title="Voltar para Home">
                    <S.MenuBarItem> <Home/> </S.MenuBarItem>
                </S.MenuBarLink>
                <S.MenuBarLink to="/" title="Pesquisar">
                    <S.MenuBarItem> <Search/> </S.MenuBarItem>
                </S.MenuBarLink> */}
            </S.MenuBarGroup>
            <S.MenuBarGroup>
                <S.MenuBarItem title="Mudar o tema" onClick={() => {
                    window.__setPreferredTheme(isDarkMode ? "light" : "dark")
                }}
                className={theme}
                >
                    <Light/> 
                </S.MenuBarItem>
                <S.MenuBarItem title="Mudar visualização" onClick={() => {
                    window.__setPreferredDisplay(isListMode ? "grid" : "list")
                }}> 
                    {isListMode ? <Grid /> : <List />}
                </S.MenuBarItem>
                <S.MenuBarItem title="Ir para o topo"> <Arrow/> </S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    )
}

export default MenuBar