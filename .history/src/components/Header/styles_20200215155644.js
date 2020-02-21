
import styled from 'styled-components'
import { Link } from "gatsby"

export const HeaderMenu = styled.div`
  background: #101010;
  padding: 20px;
`

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  background: #101010;
`

export const Navbar = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`

export const MenuItem = styled.li`
  padding: 10px 15px;
  .active {
    color: #052049;
  }
`
export const LinkItem = styled(Link)`
  color: #fff;
  font-weight:bold;
  transition: 0.5s;

  &:hover {
    color: #052049;
  }
`

export const Name = styled.div`
`
export const MyName = styled.div`
  line-height: 50px;
  float: left;
    padding: 0 15px;
`

export const Logo = styled.div `
  float: left;
  width: 44px;
  height: 44px;
  line-height: 44px;
  background-color: #7066ff;
  border-radius: 100px;
  text-align: center;
  color: #fff;
  font-size: 28px;
  font-weight: 800;
  margin-right: 8px;
  margin-top: 4px;
}
`

