import styled from "styled-components"
import media from 'styled-media-query'
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  z-index: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
  ${media.lessThan("large")`
    background: var(--header);
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  ${media.lessThan("large")`
    flex-direction: row;
  `}
  
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  &.light {
    color: #d4d400;
    &:hover {
      color: #e2e240;
    }
  }
  
  &:hover {
    color: var(--active);
  }
`