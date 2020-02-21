import styled from 'styled-components'

export const ScialLinksWrapper = styled.nav`
  padding: 20px;
  width: 100%;
`

export const SocilaLinkList = styled.ul`
    align-items:center;
    display:flex;
    justify-content: space-around;
    list-style:none;
`

export const SocialLinkItem = styled.li`
    background-color: #323232;
    padding: 30px;
    border-style: solid;
    border-width: 0;
    border-color: #00e9a5;
    border-radius: 7px 7px 7px 7px;
    text-align: left;
    display: block;
`

export const SocialLinkLink = styled.a`
    color: #8899a6;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: #1fa1f2;
    }
`

export const IconWrapper = styled.div`
   fill: #bbb;
   width: 30px;
   height: 30px; 
`

