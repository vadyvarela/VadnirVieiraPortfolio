import styled from 'styled-components'
import media from 'styled-media-query'

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
    background-color: var(--blogdiv);
    margin: 15px;
    padding: 20px 10px 10px 10px;
    border: 2px solid var(--borders);
    border-radius: 7px 7px 7px 7px;
    div {
        padding: 2px 10px;
    }
`

export const SocialLinkLink = styled.a`
    color: var(--small);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: var(--borders);
    }
`

export const IconWrapper = styled.div`
   fill: var(--borders);
   float: right;
   width: 60px;
   height: 60px; 
`

export const Label = styled.span`
    display: block;
    font-size: 1.5em;
    color: var(--white);
`

export const Desc = styled.span`
    margin-top: 5px;
    font-size: 0.9em;
    color: var(--borders);
    display: block;
`

export const Title = styled.h2`
    padding: 20px;
    color: var(--white);
    font-size: 3em;
    text-align:center;
    font-weight: 400;
    span {
        padding: 5px;
        display:block;
        color: var(--small);
        font-size: 0.3em;
        text-align:center;
        font-weight: 300;
    }

    ${media.lessThan("large")`
        padding: 20px 0 10px 0;
        font-size: 3em;
    `}

    ${media.lessThan("medium")`
    padding: 20px 0 10px 0;
        font-size: 2em;
    `}
`
