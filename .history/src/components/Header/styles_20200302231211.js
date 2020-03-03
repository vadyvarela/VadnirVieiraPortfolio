
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from "gatsby"

export const HeaderMenu = styled.div`
  background: var(--header);
  padding: 20px;
`

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  background: var(--header);
`

export const Navbar = styled.ul`
  display: flex;
  align-items: center; 
  list-style: none;
`

export const MenuItem = styled.li`
  padding: 10px 15px;
  .active {
    color: var(--active);
  }
`
export const LinkItem = styled(Link)`
  color: var(--white);
  font-weight:bold;
  transition: 0.5s;

  ${media.lessThan("medium")`
    display:none;
  `}

  &:hover {
    color: var(--active);
  }
`

export const Name = styled.div`
`
export const MyName = styled.div`
  line-height: 50px;
  float: left;
  padding: 0 15px;
  font-family: 'poppins';
  font-weight: 700;
  margin-top: -5px;
  span {
    font-weight: 400;
  }
  ${media.lessThan("medium")`
    color: var(--white);
    margin-top: -11px;
  `}
`

export const Logo = styled.div `
    margin-top: -5px;
  float: left;
  width: 44px;
  height: 44px;
  line-height: 44px;
  background-color: var(--active);;
  border-radius: 100px;
  text-align: center;
  color: #fff;
  font-size: 26px;
  font-weight: 700;

  ${media.lessThan("medium")`
    margin-top: -11px;
  `}
}
`

