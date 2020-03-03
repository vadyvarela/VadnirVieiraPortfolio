import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from "gatsby"
import Img from 'gatsby-image'

export const HabilityWrapper = styled.div`
    
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
        font-size: 1.4em;
    `}
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
    color: var(--active);
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

export const Company = styled.div`
    padding: 30px;
    background-color: var(--blogdiv);
    text-align: left;
    border-radius: 0 0 0 0;
    transform: translateY(0);
    transition-duration: .3s;
`

export const IconCompany = styled.div`
    width: 72px;
    height: 72px;
    overflow: hidden;
    line-height: 72px;
    font-size: 20px;
    text-align: center;
    float: left;
    margin: 0 30px 50px 0;
    padding: 0;
    border-radius: 2% 2% 2% 2%;
    transition-duration: .3s;
`

export const Desc = styled.div`
    h4 {
        color: var(--white);
        font-size: 1em;
        margin: 5px 0 18px;
    }
    span {
        font-size: 1.7em;
        color: var(--small);
    }
`

export const ProfileImgWrapper = styled(Img)`
  
`