import styled from 'styled-components'
import { Link } from "gatsby"

export const HabilityWrapper = styled.div`
    /*margin-top: 50px;*/
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
`

export const TitleHability = styled.span`
    color: var(--white);
    padding: 5px 0;
    font-weight: 400;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const gitWrapper = styled(Link)`

  transition: 0.5s;

  &:hover {
    color: var(--borders);
  }
`

export const GithubLink = styled.div`
    text-align:center;
    span {
        color: var(--white);
        display: block;
        margin: 30px 10px;
    }
`

export const GitWrapper = styled.div `
    fill: var(--small);
    width: 40px;
    height: 40px;
    margin: 0 auto;
`

export const IconWrapper = styled.div`
   fill: var(--small);
   width: 30px;
   height: 30px; 
`