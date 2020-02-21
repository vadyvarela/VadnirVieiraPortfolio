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
    display: flex;
    background-color: #242424;
    margin: 15px;
    padding: 20px 10px 10px 10px;
    border: 2px solid #1fa1f2;
    border-radius: 7px 7px 7px 7px;
    div {
        padding: 2px 10px;
    }
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
   fill: #1fa1f2;
   float: right;
   width: 60px;
   height: 60px; 
`

export const Label = styled.span`
    display: block;
    font-size: 1.5em;
    color: #fff;
`

export const Desc = styled.span`
    margin-top: 5px;
    font-size: 0.9em;
    color: #1fa1f2;
    display: block;
`
